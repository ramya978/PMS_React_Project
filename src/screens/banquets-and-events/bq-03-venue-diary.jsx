// GENERATED from public/banquets-and-events/bq-03-venue-diary/index.html by scripts/convert_legacy.py.
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
    "href": "/css/aviv/restaurant.css",
    "media": null
  },
  {
    "href": "/css/aviv/banquets.css",
    "media": null
  },
  {
    "href": "/banquets-and-events/bq-03-venue-diary/bq-03-venue-diary.css",
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

export default function BanquetsAndEventsBq03VenueDiary() {
  return (
    <ScreenShell title="Venue Diary" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="BQ-03" data-code="BQ-03" data-static="1" className="legacy-body">
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
              <details className="nav__sub" data-group="banquets" open={true}>
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
                  <Link className="nav__item is-active" data-nav="BQ-03" aria-current="page" title="Diary" to={"/banquets-and-events/bq-03-venue-diary"}>
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
            <main className="app__content" id="main" data-code="BQ-03" tabIndex="-1">
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
                        <Link to={"/banquets-and-events/bq-01-banquet-dashboard"}>{"Banquets & Events"}</Link>
                      </li>
                      <li>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-right" />
                        </svg>
                        <span aria-current="page">{"Diary"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">{"Venue Diary"}</h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"BQ-03"}</span>
                  <div className="page-header__actions">
                    <a className="btn " href="#bq-p03" data-leads-to="BQ-P03">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#lock" />
                      </svg>
                      {"Block venue"}
                    </a>
                    <Link className="btn btn--primary" data-leads-to="BQ-05" to={"/banquets-and-events/bq-05-event-booking/new"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#plus" />
                      </svg>
                      {"New event"}
                    </Link>
                  </div>
                </div>
              </header>
              <p className="field__hint" data-flow="bq03-day">{"Day type sets the rental (BQS-02): weekday, weekend ×1.x, Muhurtham dates ×1.x."}</p>
              <div className="law dyw">
                <div className="hb-mks" aria-hidden="true">
                  <i className="pm" id="blocked" />
                </div>
                <input className="dv-r" type="radio" name="week" id="wk1" value="wk1" defaultChecked={true} />
                <input className="dv-r" type="radio" name="week" id="wk2" value="wk2" />
                <input className="dv-r" type="radio" name="week" id="wk3" value="wk3" />
                <input className="dv-r" type="radio" name="week" id="wk4" value="wk4" />
                <input className="dv-r" type="radio" name="day-wk1" id="wk1-d1" value="d1" defaultChecked={true} />
                <input className="dv-r" type="radio" name="day-wk1" id="wk1-d2" value="d2" />
                <input className="dv-r" type="radio" name="day-wk1" id="wk1-d3" value="d3" />
                <input className="dv-r" type="radio" name="day-wk1" id="wk1-d4" value="d4" />
                <input className="dv-r" type="radio" name="day-wk1" id="wk1-d5" value="d5" />
                <input className="dv-r" type="radio" name="day-wk1" id="wk1-d6" value="d6" />
                <input className="dv-r" type="radio" name="day-wk1" id="wk1-d7" value="d7" />
                <input className="dv-r" type="radio" name="day-wk2" id="wk2-d1" value="d1" defaultChecked={true} />
                <input className="dv-r" type="radio" name="day-wk2" id="wk2-d2" value="d2" />
                <input className="dv-r" type="radio" name="day-wk2" id="wk2-d3" value="d3" />
                <input className="dv-r" type="radio" name="day-wk2" id="wk2-d4" value="d4" />
                <input className="dv-r" type="radio" name="day-wk2" id="wk2-d5" value="d5" />
                <input className="dv-r" type="radio" name="day-wk2" id="wk2-d6" value="d6" />
                <input className="dv-r" type="radio" name="day-wk2" id="wk2-d7" value="d7" />
                <input className="dv-r" type="radio" name="day-wk3" id="wk3-d1" value="d1" defaultChecked={true} />
                <input className="dv-r" type="radio" name="day-wk3" id="wk3-d2" value="d2" />
                <input className="dv-r" type="radio" name="day-wk3" id="wk3-d3" value="d3" />
                <input className="dv-r" type="radio" name="day-wk3" id="wk3-d4" value="d4" />
                <input className="dv-r" type="radio" name="day-wk3" id="wk3-d5" value="d5" />
                <input className="dv-r" type="radio" name="day-wk3" id="wk3-d6" value="d6" />
                <input className="dv-r" type="radio" name="day-wk3" id="wk3-d7" value="d7" />
                <input className="dv-r" type="radio" name="day-wk4" id="wk4-d1" value="d1" defaultChecked={true} />
                <input className="dv-r" type="radio" name="day-wk4" id="wk4-d2" value="d2" />
                <input className="dv-r" type="radio" name="day-wk4" id="wk4-d3" value="d3" />
                <input className="dv-r" type="radio" name="day-wk4" id="wk4-d4" value="d4" />
                <input className="dv-r" type="radio" name="day-wk4" id="wk4-d5" value="d5" />
                <input className="dv-r" type="radio" name="day-wk4" id="wk4-d6" value="d6" />
                <input className="dv-r" type="radio" name="day-wk4" id="wk4-d7" value="d7" />
                <nav className="dv-weeks" aria-label="Week">
                  <label className="dv-week" htmlFor="wk1">
                    <span className="dv-week__n">{"This week"}</span>
                    <b className="dv-week__d">{"22 – 28 Oct"}</b>
                    <span className="dv-week__s">
                      <i style={{"--occ": "25%"}} />
                    </span>
                    <small>{"5 events · 25% of sessions in use"}</small>
                  </label>
                  <label className="dv-week" htmlFor="wk2">
                    <span className="dv-week__n">{"Next week"}</span>
                    <b className="dv-week__d">{"29 Oct – 4 Nov"}</b>
                    <span className="dv-week__s">
                      <i style={{"--occ": "3%"}} />
                    </span>
                    <small>{"2 events · 3% of sessions in use"}</small>
                  </label>
                  <label className="dv-week" htmlFor="wk3">
                    <span className="dv-week__n">{"Later"}</span>
                    <b className="dv-week__d">{"9 – 15 Nov"}</b>
                    <span className="dv-week__s">
                      <i style={{"--occ": "3%"}} />
                    </span>
                    <small>{"2 events · 3% of sessions in use"}</small>
                  </label>
                  <label className="dv-week" htmlFor="wk4">
                    <span className="dv-week__n">{"Later"}</span>
                    <b className="dv-week__d">{"22 – 28 Nov"}</b>
                    <span className="dv-week__s">
                      <i style={{"--occ": "9%"}} />
                    </span>
                    <small>{"1 event · 9% of sessions in use"}</small>
                  </label>
                </nav>
                <div className="dv-pane dv-pane--wk1">
                  <section className="dv-card dv-glance" aria-label="Week at a glance">
                    <header className="dv-card__h">
                      <div>
                        <h2>{"Week at a glance"}</h2>
                        <p>{"Each square is a session – breakfast, lunch, hi-tea, dinner. Pick a day to see its board."}</p>
                      </div>
                      <ul className="dv-leg" aria-label="Colour key">
                        <li>
                          <i className="dv-sw dv-sw--free" />
                          {"Free"}
                        </li>
                        <li>
                          <i className="dv-sw dv-sw--ten" />
                          {"Tentative"}
                        </li>
                        <li>
                          <i className="dv-sw dv-sw--op1" />
                          {"First option"}
                        </li>
                        <li>
                          <i className="dv-sw dv-sw--op2" />
                          {"Second option"}
                        </li>
                        <li>
                          <i className="dv-sw dv-sw--def" />
                          {"Definite"}
                        </li>
                        <li>
                          <i className="dv-sw dv-sw--set" />
                          {"Set-up / breakdown"}
                        </li>
                        <li>
                          <i className="dv-sw dv-sw--mnt" />
                          {"Maintenance block"}
                        </li>
                        <li>
                          <i className="dv-sw dv-sw--prt" />
                          {"Part of a combined hall in use"}
                        </li>
                      </ul>
                    </header>
                    <div className="dv-map" role="grid">
                      <div className="dv-map__corner" />
                      <label className="dv-map__day dv-map__day--today" htmlFor="wk1-d1">
                        <small>{"Thu"}</small>
                        <b>{"22"}</b>
                      </label>
                      <label className="dv-map__day" htmlFor="wk1-d2">
                        <small>{"Fri"}</small>
                        <b>{"23"}</b>
                      </label>
                      <label className="dv-map__day" htmlFor="wk1-d3">
                        <small>{"Sat"}</small>
                        <b>{"24"}</b>
                      </label>
                      <label className="dv-map__day" htmlFor="wk1-d4">
                        <small>{"Sun"}</small>
                        <b>{"25"}</b>
                      </label>
                      <label className="dv-map__day" htmlFor="wk1-d5">
                        <small>{"Mon"}</small>
                        <b>{"26"}</b>
                      </label>
                      <label className="dv-map__day" htmlFor="wk1-d6">
                        <small>{"Tue"}</small>
                        <b>{"27"}</b>
                      </label>
                      <label className="dv-map__day" htmlFor="wk1-d7">
                        <small>{"Wed"}</small>
                        <b>{"28"}</b>
                      </label>
                      <div className="dv-map__v">
                        <b>{"Periyar Hall"}</b>
                      </div>
                      <label className="dv-map__c" htmlFor="wk1-d1" title="Periyar Hall · Thu 22 – Breakfast set-up / breakdown · Lunch definite · Hi-tea definite · Dinner free">
                        <i className="dv-sw dv-sw--set" />
                        <i className="dv-sw dv-sw--def" />
                        <i className="dv-sw dv-sw--def" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk1-d2" title="Periyar Hall · Fri 23 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk1-d3" title="Periyar Hall · Sat 24 – Breakfast free · Lunch free · Hi-tea set-up / breakdown · Dinner definite">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--set" />
                        <i className="dv-sw dv-sw--def" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk1-d4" title="Periyar Hall · Sun 25 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk1-d5" title="Periyar Hall · Mon 26 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk1-d6" title="Periyar Hall · Tue 27 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk1-d7" title="Periyar Hall · Wed 28 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <div className="dv-map__v">
                        <b>{"Meenachil Hall"}</b>
                      </div>
                      <label className="dv-map__c" htmlFor="wk1-d1" title="Meenachil Hall · Thu 22 – Breakfast free · Lunch free · Hi-tea free · Dinner definite">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--def" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk1-d2" title="Meenachil Hall · Fri 23 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk1-d3" title="Meenachil Hall · Sat 24 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk1-d4" title="Meenachil Hall · Sun 25 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk1-d5" title="Meenachil Hall · Mon 26 – Breakfast maintenance block · Lunch maintenance block · Hi-tea maintenance block · Dinner maintenance block">
                        <i className="dv-sw dv-sw--mnt" />
                        <i className="dv-sw dv-sw--mnt" />
                        <i className="dv-sw dv-sw--mnt" />
                        <i className="dv-sw dv-sw--mnt" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk1-d6" title="Meenachil Hall · Tue 27 – Breakfast maintenance block · Lunch maintenance block · Hi-tea maintenance block · Dinner maintenance block">
                        <i className="dv-sw dv-sw--mnt" />
                        <i className="dv-sw dv-sw--mnt" />
                        <i className="dv-sw dv-sw--mnt" />
                        <i className="dv-sw dv-sw--mnt" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk1-d7" title="Meenachil Hall · Wed 28 – Breakfast set-up / breakdown · Lunch definite · Hi-tea definite · Dinner free">
                        <i className="dv-sw dv-sw--set" />
                        <i className="dv-sw dv-sw--def" />
                        <i className="dv-sw dv-sw--def" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <div className="dv-map__v">
                        <b>{"Periyar + Meenachil"}</b>
                      </div>
                      <label className="dv-map__c" htmlFor="wk1-d1" title="Periyar + Meenachil · Thu 22 – Breakfast part of a combined hall in use · Lunch part of a combined hall in use · Hi-tea part of a combined hall in use · Dinner part of a combined hall in use">
                        <i className="dv-sw dv-sw--prt" />
                        <i className="dv-sw dv-sw--prt" />
                        <i className="dv-sw dv-sw--prt" />
                        <i className="dv-sw dv-sw--prt" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk1-d2" title="Periyar + Meenachil · Fri 23 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk1-d3" title="Periyar + Meenachil · Sat 24 – Breakfast free · Lunch free · Hi-tea part of a combined hall in use · Dinner part of a combined hall in use">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--prt" />
                        <i className="dv-sw dv-sw--prt" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk1-d4" title="Periyar + Meenachil · Sun 25 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk1-d5" title="Periyar + Meenachil · Mon 26 – Breakfast part of a combined hall in use · Lunch part of a combined hall in use · Hi-tea part of a combined hall in use · Dinner part of a combined hall in use">
                        <i className="dv-sw dv-sw--prt" />
                        <i className="dv-sw dv-sw--prt" />
                        <i className="dv-sw dv-sw--prt" />
                        <i className="dv-sw dv-sw--prt" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk1-d6" title="Periyar + Meenachil · Tue 27 – Breakfast part of a combined hall in use · Lunch part of a combined hall in use · Hi-tea part of a combined hall in use · Dinner part of a combined hall in use">
                        <i className="dv-sw dv-sw--prt" />
                        <i className="dv-sw dv-sw--prt" />
                        <i className="dv-sw dv-sw--prt" />
                        <i className="dv-sw dv-sw--prt" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk1-d7" title="Periyar + Meenachil · Wed 28 – Breakfast part of a combined hall in use · Lunch part of a combined hall in use · Hi-tea part of a combined hall in use · Dinner free">
                        <i className="dv-sw dv-sw--prt" />
                        <i className="dv-sw dv-sw--prt" />
                        <i className="dv-sw dv-sw--prt" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <div className="dv-map__v">
                        <b>{"Vembanad Boardroom"}</b>
                      </div>
                      <label className="dv-map__c" htmlFor="wk1-d1" title="Vembanad Boardroom · Thu 22 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk1-d2" title="Vembanad Boardroom · Fri 23 – Breakfast free · Lunch free · Hi-tea free · Dinner definite">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--def" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk1-d3" title="Vembanad Boardroom · Sat 24 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk1-d4" title="Vembanad Boardroom · Sun 25 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk1-d5" title="Vembanad Boardroom · Mon 26 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk1-d6" title="Vembanad Boardroom · Tue 27 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk1-d7" title="Vembanad Boardroom · Wed 28 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <div className="dv-map__v">
                        <b>{"Poolside Lawn"}</b>
                      </div>
                      <label className="dv-map__c" htmlFor="wk1-d1" title="Poolside Lawn · Thu 22 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk1-d2" title="Poolside Lawn · Fri 23 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk1-d3" title="Poolside Lawn · Sat 24 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk1-d4" title="Poolside Lawn · Sun 25 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk1-d5" title="Poolside Lawn · Mon 26 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk1-d6" title="Poolside Lawn · Tue 27 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk1-d7" title="Poolside Lawn · Wed 28 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                    </div>
                  </section>
                  <section className="dv-card dv-board dv-board--d1" aria-label="Thursday 22">
                    <header className="dv-board__h">
                      <div>
                        <span className="dv-board__eyebrow">{"Today"}</span>
                        <h2>{"Thursday 22"}</h2>
                      </div>
                      <ul className="dv-board__k">
                        <li>
                          <b>{"2"}</b>
                          <span>{"events"}</span>
                        </li>
                        <li>
                          <b>{"165"}</b>
                          <span>{"guests expected"}</span>
                        </li>
                        <li>
                          <b>{"3"}</b>
                          <span>{"of 5 venues in use"}</span>
                        </li>
                        <li>
                          <b>{"12"}</b>
                          <span>{"free sessions"}</span>
                        </li>
                      </ul>
                    </header>
                    <div className="dv-grid">
                      <div className="dv-grid__corner" />
                      <div className="dv-grid__s">
                        <b>{"Breakfast"}</b>
                        <small>{"07–10"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Lunch"}</b>
                        <small>{"12–16"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Hi-tea"}</b>
                        <small>{"16–19"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Dinner"}</b>
                        <small>{"19–23"}</small>
                      </div>
                      <div className="dv-grid__v">
                        <b>{"Periyar Hall"}</b>
                        <small>{"Ballroom · up to 400"}</small>
                      </div>
                      <div className="dv-slot dv-slot--set" style={{"gridColumn": "2 / span 1"}} title="Set-up – Set-up · Breakfast">
                        <span className="dv-slot__st">
                          <i className="dv-sw dv-sw--set" />
                          {"Set-up"}
                        </span>
                        <b className="dv-slot__n">{"Set-up"}</b>
                        <small>{"Breakfast"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--def" style={{"gridColumn": "3 / span 2"}} data-leads-to="BQ-05" title="Infosys conference · 120 – Definite · Lunch–Hi-tea" to={"/banquets-and-events/bq-05-event-booking/evt-0138"}>
                        <span className="dv-slot__st">
                          <i className="dv-sw dv-sw--def" />
                          {"Definite"}
                        </span>
                        <b className="dv-slot__n">{"Infosys conference"}</b>
                        <span className="dv-slot__pax">
                          <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#users" />
                          </svg>
                          {"120 guests"}
                        </span>
                        <small>{"Lunch–Hi-tea"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Thu 22 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Meenachil Hall"}</b>
                        <small>{"Divisible hall · up to 180"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Thu 22 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Thu 22 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Thu 22 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--def" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Kurian · 45 – Definite · Dinner" to={"/banquets-and-events/bq-05-event-booking/evt-0142"}>
                        <span className="dv-slot__st">
                          <i className="dv-sw dv-sw--def" />
                          {"Definite"}
                        </span>
                        <b className="dv-slot__n">{"Kurian"}</b>
                        <span className="dv-slot__pax">
                          <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#users" />
                          </svg>
                          {"45 guests"}
                        </span>
                        <small>{"Dinner"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Periyar + Meenachil"}</b>
                        <small>{"Both halls together"}</small>
                      </div>
                      <div className="dv-slot dv-slot--prt" style={{"gridColumn": "2 / span 4"}} title="Parts in use (BR-01) – Part in use · Breakfast–Dinner">
                        <span className="dv-slot__st">
                          <i className="dv-sw dv-sw--prt" />
                          {"Part in use"}
                        </span>
                        <b className="dv-slot__n">{"Parts in use (BR-01)"}</b>
                        <small>{"Breakfast–Dinner"}</small>
                      </div>
                      <div className="dv-grid__v">
                        <b>{"Vembanad Boardroom"}</b>
                        <small>{"Boardroom · up to 24"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Thu 22 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Thu 22 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Thu 22 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Thu 22 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Poolside Lawn"}</b>
                        <small>{"Outdoor · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Thu 22 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Thu 22 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Thu 22 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Thu 22 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                    </div>
                  </section>
                  <section className="dv-card dv-board dv-board--d2" aria-label="Friday 23">
                    <header className="dv-board__h">
                      <div>
                        <span className="dv-board__eyebrow">{"Day board"}</span>
                        <h2>{"Friday 23"}</h2>
                      </div>
                      <ul className="dv-board__k">
                        <li>
                          <b>{"1"}</b>
                          <span>{"event"}</span>
                        </li>
                        <li>
                          <b>{"16"}</b>
                          <span>{"guests expected"}</span>
                        </li>
                        <li>
                          <b>{"1"}</b>
                          <span>{"of 5 venues in use"}</span>
                        </li>
                        <li>
                          <b>{"19"}</b>
                          <span>{"free sessions"}</span>
                        </li>
                      </ul>
                    </header>
                    <div className="dv-grid">
                      <div className="dv-grid__corner" />
                      <div className="dv-grid__s">
                        <b>{"Breakfast"}</b>
                        <small>{"07–10"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Lunch"}</b>
                        <small>{"12–16"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Hi-tea"}</b>
                        <small>{"16–19"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Dinner"}</b>
                        <small>{"19–23"}</small>
                      </div>
                      <div className="dv-grid__v">
                        <b>{"Periyar Hall"}</b>
                        <small>{"Ballroom · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Fri 23 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Fri 23 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Fri 23 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Fri 23 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Meenachil Hall"}</b>
                        <small>{"Divisible hall · up to 180"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Fri 23 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Fri 23 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Fri 23 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Fri 23 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Periyar + Meenachil"}</b>
                        <small>{"Both halls together"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Fri 23 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Fri 23 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Fri 23 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Fri 23 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Vembanad Boardroom"}</b>
                        <small>{"Boardroom · up to 24"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Fri 23 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Fri 23 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Fri 23 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--def" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Cochin Marine · 16 – Definite · Dinner" to={"/banquets-and-events/bq-05-event-booking/evt-0153"}>
                        <span className="dv-slot__st">
                          <i className="dv-sw dv-sw--def" />
                          {"Definite"}
                        </span>
                        <b className="dv-slot__n">{"Cochin Marine"}</b>
                        <span className="dv-slot__pax">
                          <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#users" />
                          </svg>
                          {"16 guests"}
                        </span>
                        <small>{"Dinner"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Poolside Lawn"}</b>
                        <small>{"Outdoor · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Fri 23 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Fri 23 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Fri 23 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Fri 23 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                    </div>
                  </section>
                  <section className="dv-card dv-board dv-board--d3" aria-label="Saturday 24">
                    <header className="dv-board__h">
                      <div>
                        <span className="dv-board__eyebrow">{"Day board"}</span>
                        <h2>{"Saturday 24"}</h2>
                      </div>
                      <ul className="dv-board__k">
                        <li>
                          <b>{"1"}</b>
                          <span>{"event"}</span>
                        </li>
                        <li>
                          <b>{"180"}</b>
                          <span>{"guests expected"}</span>
                        </li>
                        <li>
                          <b>{"2"}</b>
                          <span>{"of 5 venues in use"}</span>
                        </li>
                        <li>
                          <b>{"16"}</b>
                          <span>{"free sessions"}</span>
                        </li>
                      </ul>
                    </header>
                    <div className="dv-grid">
                      <div className="dv-grid__corner" />
                      <div className="dv-grid__s">
                        <b>{"Breakfast"}</b>
                        <small>{"07–10"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Lunch"}</b>
                        <small>{"12–16"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Hi-tea"}</b>
                        <small>{"16–19"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Dinner"}</b>
                        <small>{"19–23"}</small>
                      </div>
                      <div className="dv-grid__v">
                        <b>{"Periyar Hall"}</b>
                        <small>{"Ballroom · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Sat 24 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Sat 24 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-slot dv-slot--set" style={{"gridColumn": "4 / span 1"}} title="Set-up – Set-up · Hi-tea">
                        <span className="dv-slot__st">
                          <i className="dv-sw dv-sw--set" />
                          {"Set-up"}
                        </span>
                        <b className="dv-slot__n">{"Set-up"}</b>
                        <small>{"Hi-tea"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--def" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Thomas–Abraham · 180 – Definite · Dinner" to={"/banquets-and-events/bq-05-event-booking/evt-0147"}>
                        <span className="dv-slot__st">
                          <i className="dv-sw dv-sw--def" />
                          {"Definite"}
                        </span>
                        <b className="dv-slot__n">{"Thomas–Abraham"}</b>
                        <span className="dv-slot__pax">
                          <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#users" />
                          </svg>
                          {"180 guests"}
                        </span>
                        <small>{"Dinner"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Meenachil Hall"}</b>
                        <small>{"Divisible hall · up to 180"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Sat 24 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Sat 24 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Sat 24 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Sat 24 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Periyar + Meenachil"}</b>
                        <small>{"Both halls together"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Sat 24 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Sat 24 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-slot dv-slot--prt" style={{"gridColumn": "4 / span 2"}} title="Periyar in use – Part in use · Hi-tea–Dinner">
                        <span className="dv-slot__st">
                          <i className="dv-sw dv-sw--prt" />
                          {"Part in use"}
                        </span>
                        <b className="dv-slot__n">{"Periyar in use"}</b>
                        <small>{"Hi-tea–Dinner"}</small>
                      </div>
                      <div className="dv-grid__v">
                        <b>{"Vembanad Boardroom"}</b>
                        <small>{"Boardroom · up to 24"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Sat 24 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Sat 24 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Sat 24 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Sat 24 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Poolside Lawn"}</b>
                        <small>{"Outdoor · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Sat 24 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Sat 24 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Sat 24 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Sat 24 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                    </div>
                  </section>
                  <section className="dv-card dv-board dv-board--d4" aria-label="Sunday 25">
                    <header className="dv-board__h">
                      <div>
                        <span className="dv-board__eyebrow">{"Day board"}</span>
                        <h2>{"Sunday 25"}</h2>
                      </div>
                      <ul className="dv-board__k">
                        <li>
                          <b>{"0"}</b>
                          <span>{"events"}</span>
                        </li>
                        <li>
                          <b>{"0"}</b>
                          <span>{"guests expected"}</span>
                        </li>
                        <li>
                          <b>{"0"}</b>
                          <span>{"of 5 venues in use"}</span>
                        </li>
                        <li>
                          <b>{"20"}</b>
                          <span>{"free sessions"}</span>
                        </li>
                      </ul>
                    </header>
                    <div className="dv-grid">
                      <div className="dv-grid__corner" />
                      <div className="dv-grid__s">
                        <b>{"Breakfast"}</b>
                        <small>{"07–10"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Lunch"}</b>
                        <small>{"12–16"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Hi-tea"}</b>
                        <small>{"16–19"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Dinner"}</b>
                        <small>{"19–23"}</small>
                      </div>
                      <div className="dv-grid__v">
                        <b>{"Periyar Hall"}</b>
                        <small>{"Ballroom · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Sun 25 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Sun 25 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Sun 25 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Sun 25 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Meenachil Hall"}</b>
                        <small>{"Divisible hall · up to 180"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Sun 25 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Sun 25 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Sun 25 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Sun 25 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Periyar + Meenachil"}</b>
                        <small>{"Both halls together"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Sun 25 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Sun 25 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Sun 25 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Sun 25 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Vembanad Boardroom"}</b>
                        <small>{"Boardroom · up to 24"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Sun 25 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Sun 25 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Sun 25 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Sun 25 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Poolside Lawn"}</b>
                        <small>{"Outdoor · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Sun 25 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Sun 25 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Sun 25 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Sun 25 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                    </div>
                  </section>
                  <section className="dv-card dv-board dv-board--d5" aria-label="Monday 26">
                    <header className="dv-board__h">
                      <div>
                        <span className="dv-board__eyebrow">{"Day board"}</span>
                        <h2>{"Monday 26"}</h2>
                      </div>
                      <ul className="dv-board__k">
                        <li>
                          <b>{"0"}</b>
                          <span>{"events"}</span>
                        </li>
                        <li>
                          <b>{"0"}</b>
                          <span>{"guests expected"}</span>
                        </li>
                        <li>
                          <b>{"2"}</b>
                          <span>{"of 5 venues in use"}</span>
                        </li>
                        <li>
                          <b>{"12"}</b>
                          <span>{"free sessions"}</span>
                        </li>
                      </ul>
                    </header>
                    <div className="dv-grid">
                      <div className="dv-grid__corner" />
                      <div className="dv-grid__s">
                        <b>{"Breakfast"}</b>
                        <small>{"07–10"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Lunch"}</b>
                        <small>{"12–16"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Hi-tea"}</b>
                        <small>{"16–19"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Dinner"}</b>
                        <small>{"19–23"}</small>
                      </div>
                      <div className="dv-grid__v">
                        <b>{"Periyar Hall"}</b>
                        <small>{"Ballroom · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Mon 26 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Mon 26 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Mon 26 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Mon 26 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Meenachil Hall"}</b>
                        <small>{"Divisible hall · up to 180"}</small>
                      </div>
                      <div className="dv-slot dv-slot--mnt" style={{"gridColumn": "2 / span 4"}} title="Carpet shampoo and AC service – Maintenance · Breakfast–Dinner">
                        <span className="dv-slot__st">
                          <i className="dv-sw dv-sw--mnt" />
                          {"Maintenance"}
                        </span>
                        <b className="dv-slot__n">{"Carpet shampoo and AC service"}</b>
                        <small>{"Breakfast–Dinner"}</small>
                      </div>
                      <div className="dv-grid__v">
                        <b>{"Periyar + Meenachil"}</b>
                        <small>{"Both halls together"}</small>
                      </div>
                      <div className="dv-slot dv-slot--prt" style={{"gridColumn": "2 / span 4"}} title="Meenachil blocked – Part in use · Breakfast–Dinner">
                        <span className="dv-slot__st">
                          <i className="dv-sw dv-sw--prt" />
                          {"Part in use"}
                        </span>
                        <b className="dv-slot__n">{"Meenachil blocked"}</b>
                        <small>{"Breakfast–Dinner"}</small>
                      </div>
                      <div className="dv-grid__v">
                        <b>{"Vembanad Boardroom"}</b>
                        <small>{"Boardroom · up to 24"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Mon 26 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Mon 26 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Mon 26 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Mon 26 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Poolside Lawn"}</b>
                        <small>{"Outdoor · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Mon 26 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Mon 26 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Mon 26 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Mon 26 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                    </div>
                  </section>
                  <section className="dv-card dv-board dv-board--d6" aria-label="Tuesday 27">
                    <header className="dv-board__h">
                      <div>
                        <span className="dv-board__eyebrow">{"Day board"}</span>
                        <h2>{"Tuesday 27"}</h2>
                      </div>
                      <ul className="dv-board__k">
                        <li>
                          <b>{"0"}</b>
                          <span>{"events"}</span>
                        </li>
                        <li>
                          <b>{"0"}</b>
                          <span>{"guests expected"}</span>
                        </li>
                        <li>
                          <b>{"2"}</b>
                          <span>{"of 5 venues in use"}</span>
                        </li>
                        <li>
                          <b>{"12"}</b>
                          <span>{"free sessions"}</span>
                        </li>
                      </ul>
                    </header>
                    <div className="dv-grid">
                      <div className="dv-grid__corner" />
                      <div className="dv-grid__s">
                        <b>{"Breakfast"}</b>
                        <small>{"07–10"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Lunch"}</b>
                        <small>{"12–16"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Hi-tea"}</b>
                        <small>{"16–19"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Dinner"}</b>
                        <small>{"19–23"}</small>
                      </div>
                      <div className="dv-grid__v">
                        <b>{"Periyar Hall"}</b>
                        <small>{"Ballroom · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Tue 27 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Tue 27 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Tue 27 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Tue 27 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Meenachil Hall"}</b>
                        <small>{"Divisible hall · up to 180"}</small>
                      </div>
                      <div className="dv-slot dv-slot--mnt" style={{"gridColumn": "2 / span 4"}} title="Maintenance – Maintenance · Breakfast–Dinner">
                        <span className="dv-slot__st">
                          <i className="dv-sw dv-sw--mnt" />
                          {"Maintenance"}
                        </span>
                        <b className="dv-slot__n">{"Maintenance"}</b>
                        <small>{"Breakfast–Dinner"}</small>
                      </div>
                      <div className="dv-grid__v">
                        <b>{"Periyar + Meenachil"}</b>
                        <small>{"Both halls together"}</small>
                      </div>
                      <div className="dv-slot dv-slot--prt" style={{"gridColumn": "2 / span 4"}} title="Meenachil blocked – Part in use · Breakfast–Dinner">
                        <span className="dv-slot__st">
                          <i className="dv-sw dv-sw--prt" />
                          {"Part in use"}
                        </span>
                        <b className="dv-slot__n">{"Meenachil blocked"}</b>
                        <small>{"Breakfast–Dinner"}</small>
                      </div>
                      <div className="dv-grid__v">
                        <b>{"Vembanad Boardroom"}</b>
                        <small>{"Boardroom · up to 24"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Tue 27 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Tue 27 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Tue 27 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Tue 27 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Poolside Lawn"}</b>
                        <small>{"Outdoor · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Tue 27 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Tue 27 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Tue 27 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Tue 27 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                    </div>
                  </section>
                  <section className="dv-card dv-board dv-board--d7" aria-label="Wednesday 28">
                    <header className="dv-board__h">
                      <div>
                        <span className="dv-board__eyebrow">{"Day board"}</span>
                        <h2>{"Wednesday 28"}</h2>
                      </div>
                      <ul className="dv-board__k">
                        <li>
                          <b>{"1"}</b>
                          <span>{"event"}</span>
                        </li>
                        <li>
                          <b>{"60"}</b>
                          <span>{"guests expected"}</span>
                        </li>
                        <li>
                          <b>{"2"}</b>
                          <span>{"of 5 venues in use"}</span>
                        </li>
                        <li>
                          <b>{"14"}</b>
                          <span>{"free sessions"}</span>
                        </li>
                      </ul>
                    </header>
                    <div className="dv-grid">
                      <div className="dv-grid__corner" />
                      <div className="dv-grid__s">
                        <b>{"Breakfast"}</b>
                        <small>{"07–10"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Lunch"}</b>
                        <small>{"12–16"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Hi-tea"}</b>
                        <small>{"16–19"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Dinner"}</b>
                        <small>{"19–23"}</small>
                      </div>
                      <div className="dv-grid__v">
                        <b>{"Periyar Hall"}</b>
                        <small>{"Ballroom · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Wed 28 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Wed 28 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Wed 28 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Wed 28 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Meenachil Hall"}</b>
                        <small>{"Divisible hall · up to 180"}</small>
                      </div>
                      <div className="dv-slot dv-slot--set" style={{"gridColumn": "2 / span 1"}} title="Set-up – Set-up · Breakfast">
                        <span className="dv-slot__st">
                          <i className="dv-sw dv-sw--set" />
                          {"Set-up"}
                        </span>
                        <b className="dv-slot__n">{"Set-up"}</b>
                        <small>{"Breakfast"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--def" style={{"gridColumn": "3 / span 2"}} data-leads-to="BQ-05" title="Ernakulam Pharma · 60 – Definite · Lunch–Hi-tea" to={"/banquets-and-events/bq-05-event-booking/evt-0151"}>
                        <span className="dv-slot__st">
                          <i className="dv-sw dv-sw--def" />
                          {"Definite"}
                        </span>
                        <b className="dv-slot__n">{"Ernakulam Pharma"}</b>
                        <span className="dv-slot__pax">
                          <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#users" />
                          </svg>
                          {"60 guests"}
                        </span>
                        <small>{"Lunch–Hi-tea"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Wed 28 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Periyar + Meenachil"}</b>
                        <small>{"Both halls together"}</small>
                      </div>
                      <div className="dv-slot dv-slot--prt" style={{"gridColumn": "2 / span 3"}} title="Meenachil in use – Part in use · Breakfast–Hi-tea">
                        <span className="dv-slot__st">
                          <i className="dv-sw dv-sw--prt" />
                          {"Part in use"}
                        </span>
                        <b className="dv-slot__n">{"Meenachil in use"}</b>
                        <small>{"Breakfast–Hi-tea"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Wed 28 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Vembanad Boardroom"}</b>
                        <small>{"Boardroom · up to 24"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Wed 28 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Wed 28 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Wed 28 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Wed 28 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Poolside Lawn"}</b>
                        <small>{"Outdoor · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Wed 28 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Wed 28 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Wed 28 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Wed 28 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                    </div>
                  </section>
                </div>
                <div className="dv-pane dv-pane--wk2">
                  <section className="dv-card dv-glance" aria-label="Week at a glance">
                    <header className="dv-card__h">
                      <div>
                        <h2>{"Week at a glance"}</h2>
                        <p>{"Each square is a session – breakfast, lunch, hi-tea, dinner. Pick a day to see its board."}</p>
                      </div>
                      <ul className="dv-leg" aria-label="Colour key">
                        <li>
                          <i className="dv-sw dv-sw--free" />
                          {"Free"}
                        </li>
                        <li>
                          <i className="dv-sw dv-sw--ten" />
                          {"Tentative"}
                        </li>
                        <li>
                          <i className="dv-sw dv-sw--op1" />
                          {"First option"}
                        </li>
                        <li>
                          <i className="dv-sw dv-sw--op2" />
                          {"Second option"}
                        </li>
                        <li>
                          <i className="dv-sw dv-sw--def" />
                          {"Definite"}
                        </li>
                        <li>
                          <i className="dv-sw dv-sw--set" />
                          {"Set-up / breakdown"}
                        </li>
                        <li>
                          <i className="dv-sw dv-sw--mnt" />
                          {"Maintenance block"}
                        </li>
                        <li>
                          <i className="dv-sw dv-sw--prt" />
                          {"Part of a combined hall in use"}
                        </li>
                      </ul>
                    </header>
                    <div className="dv-map" role="grid">
                      <div className="dv-map__corner" />
                      <label className="dv-map__day" htmlFor="wk2-d1">
                        <small>{"Thu"}</small>
                        <b>{"29"}</b>
                      </label>
                      <label className="dv-map__day" htmlFor="wk2-d2">
                        <small>{"Fri"}</small>
                        <b>{"30"}</b>
                      </label>
                      <label className="dv-map__day" htmlFor="wk2-d3">
                        <small>{"Sat"}</small>
                        <b>{"31"}</b>
                      </label>
                      <label className="dv-map__day" htmlFor="wk2-d4">
                        <small>{"Sun"}</small>
                        <b>{"1"}</b>
                      </label>
                      <label className="dv-map__day" htmlFor="wk2-d5">
                        <small>{"Mon"}</small>
                        <b>{"2"}</b>
                      </label>
                      <label className="dv-map__day" htmlFor="wk2-d6">
                        <small>{"Tue"}</small>
                        <b>{"3"}</b>
                      </label>
                      <label className="dv-map__day" htmlFor="wk2-d7">
                        <small>{"Wed"}</small>
                        <b>{"4"}</b>
                      </label>
                      <div className="dv-map__v">
                        <b>{"Periyar Hall"}</b>
                      </div>
                      <label className="dv-map__c" htmlFor="wk2-d1" title="Periyar Hall · Thu 29 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk2-d2" title="Periyar Hall · Fri 30 – Breakfast free · Lunch free · Hi-tea free · Dinner tentative">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--ten" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk2-d3" title="Periyar Hall · Sat 31 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk2-d4" title="Periyar Hall · Sun 1 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk2-d5" title="Periyar Hall · Mon 2 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk2-d6" title="Periyar Hall · Tue 3 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk2-d7" title="Periyar Hall · Wed 4 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <div className="dv-map__v">
                        <b>{"Meenachil Hall"}</b>
                      </div>
                      <label className="dv-map__c" htmlFor="wk2-d1" title="Meenachil Hall · Thu 29 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk2-d2" title="Meenachil Hall · Fri 30 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk2-d3" title="Meenachil Hall · Sat 31 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk2-d4" title="Meenachil Hall · Sun 1 – Breakfast free · Lunch first option · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--op1" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk2-d5" title="Meenachil Hall · Mon 2 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk2-d6" title="Meenachil Hall · Tue 3 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk2-d7" title="Meenachil Hall · Wed 4 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <div className="dv-map__v">
                        <b>{"Periyar + Meenachil"}</b>
                      </div>
                      <label className="dv-map__c" htmlFor="wk2-d1" title="Periyar + Meenachil · Thu 29 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk2-d2" title="Periyar + Meenachil · Fri 30 – Breakfast free · Lunch free · Hi-tea free · Dinner part of a combined hall in use">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--prt" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk2-d3" title="Periyar + Meenachil · Sat 31 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk2-d4" title="Periyar + Meenachil · Sun 1 – Breakfast free · Lunch part of a combined hall in use · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--prt" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk2-d5" title="Periyar + Meenachil · Mon 2 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk2-d6" title="Periyar + Meenachil · Tue 3 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk2-d7" title="Periyar + Meenachil · Wed 4 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <div className="dv-map__v">
                        <b>{"Vembanad Boardroom"}</b>
                      </div>
                      <label className="dv-map__c" htmlFor="wk2-d1" title="Vembanad Boardroom · Thu 29 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk2-d2" title="Vembanad Boardroom · Fri 30 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk2-d3" title="Vembanad Boardroom · Sat 31 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk2-d4" title="Vembanad Boardroom · Sun 1 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk2-d5" title="Vembanad Boardroom · Mon 2 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk2-d6" title="Vembanad Boardroom · Tue 3 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk2-d7" title="Vembanad Boardroom · Wed 4 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <div className="dv-map__v">
                        <b>{"Poolside Lawn"}</b>
                      </div>
                      <label className="dv-map__c" htmlFor="wk2-d1" title="Poolside Lawn · Thu 29 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk2-d2" title="Poolside Lawn · Fri 30 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk2-d3" title="Poolside Lawn · Sat 31 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk2-d4" title="Poolside Lawn · Sun 1 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk2-d5" title="Poolside Lawn · Mon 2 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk2-d6" title="Poolside Lawn · Tue 3 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk2-d7" title="Poolside Lawn · Wed 4 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                    </div>
                  </section>
                  <section className="dv-card dv-board dv-board--d1" aria-label="Thursday 29">
                    <header className="dv-board__h">
                      <div>
                        <span className="dv-board__eyebrow">{"Day board"}</span>
                        <h2>{"Thursday 29"}</h2>
                      </div>
                      <ul className="dv-board__k">
                        <li>
                          <b>{"0"}</b>
                          <span>{"events"}</span>
                        </li>
                        <li>
                          <b>{"0"}</b>
                          <span>{"guests expected"}</span>
                        </li>
                        <li>
                          <b>{"0"}</b>
                          <span>{"of 5 venues in use"}</span>
                        </li>
                        <li>
                          <b>{"20"}</b>
                          <span>{"free sessions"}</span>
                        </li>
                      </ul>
                    </header>
                    <div className="dv-grid">
                      <div className="dv-grid__corner" />
                      <div className="dv-grid__s">
                        <b>{"Breakfast"}</b>
                        <small>{"07–10"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Lunch"}</b>
                        <small>{"12–16"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Hi-tea"}</b>
                        <small>{"16–19"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Dinner"}</b>
                        <small>{"19–23"}</small>
                      </div>
                      <div className="dv-grid__v">
                        <b>{"Periyar Hall"}</b>
                        <small>{"Ballroom · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Thu 29 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Thu 29 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Thu 29 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Thu 29 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Meenachil Hall"}</b>
                        <small>{"Divisible hall · up to 180"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Thu 29 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Thu 29 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Thu 29 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Thu 29 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Periyar + Meenachil"}</b>
                        <small>{"Both halls together"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Thu 29 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Thu 29 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Thu 29 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Thu 29 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Vembanad Boardroom"}</b>
                        <small>{"Boardroom · up to 24"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Thu 29 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Thu 29 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Thu 29 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Thu 29 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Poolside Lawn"}</b>
                        <small>{"Outdoor · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Thu 29 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Thu 29 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Thu 29 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Thu 29 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                    </div>
                  </section>
                  <section className="dv-card dv-board dv-board--d2" aria-label="Friday 30">
                    <header className="dv-board__h">
                      <div>
                        <span className="dv-board__eyebrow">{"Day board"}</span>
                        <h2>{"Friday 30"}</h2>
                      </div>
                      <ul className="dv-board__k">
                        <li>
                          <b>{"1"}</b>
                          <span>{"event"}</span>
                        </li>
                        <li>
                          <b>{"0"}</b>
                          <span>{"guests expected"}</span>
                        </li>
                        <li>
                          <b>{"2"}</b>
                          <span>{"of 5 venues in use"}</span>
                        </li>
                        <li>
                          <b>{"18"}</b>
                          <span>{"free sessions"}</span>
                        </li>
                      </ul>
                    </header>
                    <div className="dv-grid">
                      <div className="dv-grid__corner" />
                      <div className="dv-grid__s">
                        <b>{"Breakfast"}</b>
                        <small>{"07–10"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Lunch"}</b>
                        <small>{"12–16"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Hi-tea"}</b>
                        <small>{"16–19"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Dinner"}</b>
                        <small>{"19–23"}</small>
                      </div>
                      <div className="dv-grid__v">
                        <b>{"Periyar Hall"}</b>
                        <small>{"Ballroom · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Fri 30 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Fri 30 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Fri 30 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--ten" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Coir Craft · 120 · till 27-10 – Tentative · Dinner" to={"/banquets-and-events/bq-05-event-booking/evt-0152"}>
                        <span className="dv-slot__st">
                          <i className="dv-sw dv-sw--ten" />
                          {"Tentative"}
                        </span>
                        <b className="dv-slot__n">{"Coir Craft"}</b>
                        <span className="dv-slot__pax">
                          <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#users" />
                          </svg>
                          {"120 · till 27-10 guests"}
                        </span>
                        <small>{"Dinner"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Meenachil Hall"}</b>
                        <small>{"Divisible hall · up to 180"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Fri 30 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Fri 30 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Fri 30 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Fri 30 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Periyar + Meenachil"}</b>
                        <small>{"Both halls together"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Fri 30 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Fri 30 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Fri 30 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-slot dv-slot--prt" style={{"gridColumn": "5 / span 1"}} title="Periyar held – Part in use · Dinner">
                        <span className="dv-slot__st">
                          <i className="dv-sw dv-sw--prt" />
                          {"Part in use"}
                        </span>
                        <b className="dv-slot__n">{"Periyar held"}</b>
                        <small>{"Dinner"}</small>
                      </div>
                      <div className="dv-grid__v">
                        <b>{"Vembanad Boardroom"}</b>
                        <small>{"Boardroom · up to 24"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Fri 30 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Fri 30 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Fri 30 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Fri 30 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Poolside Lawn"}</b>
                        <small>{"Outdoor · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Fri 30 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Fri 30 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Fri 30 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Fri 30 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                    </div>
                  </section>
                  <section className="dv-card dv-board dv-board--d3" aria-label="Saturday 31">
                    <header className="dv-board__h">
                      <div>
                        <span className="dv-board__eyebrow">{"Day board"}</span>
                        <h2>{"Saturday 31"}</h2>
                      </div>
                      <ul className="dv-board__k">
                        <li>
                          <b>{"0"}</b>
                          <span>{"events"}</span>
                        </li>
                        <li>
                          <b>{"0"}</b>
                          <span>{"guests expected"}</span>
                        </li>
                        <li>
                          <b>{"0"}</b>
                          <span>{"of 5 venues in use"}</span>
                        </li>
                        <li>
                          <b>{"20"}</b>
                          <span>{"free sessions"}</span>
                        </li>
                      </ul>
                    </header>
                    <div className="dv-grid">
                      <div className="dv-grid__corner" />
                      <div className="dv-grid__s">
                        <b>{"Breakfast"}</b>
                        <small>{"07–10"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Lunch"}</b>
                        <small>{"12–16"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Hi-tea"}</b>
                        <small>{"16–19"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Dinner"}</b>
                        <small>{"19–23"}</small>
                      </div>
                      <div className="dv-grid__v">
                        <b>{"Periyar Hall"}</b>
                        <small>{"Ballroom · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Sat 31 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Sat 31 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Sat 31 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Sat 31 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Meenachil Hall"}</b>
                        <small>{"Divisible hall · up to 180"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Sat 31 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Sat 31 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Sat 31 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Sat 31 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Periyar + Meenachil"}</b>
                        <small>{"Both halls together"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Sat 31 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Sat 31 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Sat 31 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Sat 31 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Vembanad Boardroom"}</b>
                        <small>{"Boardroom · up to 24"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Sat 31 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Sat 31 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Sat 31 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Sat 31 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Poolside Lawn"}</b>
                        <small>{"Outdoor · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Sat 31 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Sat 31 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Sat 31 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Sat 31 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                    </div>
                  </section>
                  <section className="dv-card dv-board dv-board--d4" aria-label="Sunday 1">
                    <header className="dv-board__h">
                      <div>
                        <span className="dv-board__eyebrow">{"Day board"}</span>
                        <h2>{"Sunday 1"}</h2>
                      </div>
                      <ul className="dv-board__k">
                        <li>
                          <b>{"1"}</b>
                          <span>{"event"}</span>
                        </li>
                        <li>
                          <b>{"0"}</b>
                          <span>{"guests expected"}</span>
                        </li>
                        <li>
                          <b>{"2"}</b>
                          <span>{"of 5 venues in use"}</span>
                        </li>
                        <li>
                          <b>{"18"}</b>
                          <span>{"free sessions"}</span>
                        </li>
                      </ul>
                    </header>
                    <div className="dv-grid">
                      <div className="dv-grid__corner" />
                      <div className="dv-grid__s">
                        <b>{"Breakfast"}</b>
                        <small>{"07–10"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Lunch"}</b>
                        <small>{"12–16"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Hi-tea"}</b>
                        <small>{"16–19"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Dinner"}</b>
                        <small>{"19–23"}</small>
                      </div>
                      <div className="dv-grid__v">
                        <b>{"Periyar Hall"}</b>
                        <small>{"Ballroom · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Sun 1 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Sun 1 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Sun 1 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Sun 1 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Meenachil Hall"}</b>
                        <small>{"Divisible hall · up to 180"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Sun 1 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--op1" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Aisha’s birthday · 80 · till 25-10 – First option · Lunch" to={"/banquets-and-events/bq-05-event-booking/evt-0155"}>
                        <span className="dv-slot__st">
                          <i className="dv-sw dv-sw--op1" />
                          {"First option"}
                        </span>
                        <b className="dv-slot__n">{"Aisha’s birthday"}</b>
                        <span className="dv-slot__pax">
                          <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#users" />
                          </svg>
                          {"80 · till 25-10 guests"}
                        </span>
                        <small>{"Lunch"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Sun 1 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Sun 1 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Periyar + Meenachil"}</b>
                        <small>{"Both halls together"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Sun 1 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-slot dv-slot--prt" style={{"gridColumn": "3 / span 1"}} title="Meenachil held – Part in use · Lunch">
                        <span className="dv-slot__st">
                          <i className="dv-sw dv-sw--prt" />
                          {"Part in use"}
                        </span>
                        <b className="dv-slot__n">{"Meenachil held"}</b>
                        <small>{"Lunch"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Sun 1 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Sun 1 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Vembanad Boardroom"}</b>
                        <small>{"Boardroom · up to 24"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Sun 1 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Sun 1 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Sun 1 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Sun 1 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Poolside Lawn"}</b>
                        <small>{"Outdoor · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Sun 1 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Sun 1 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Sun 1 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Sun 1 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                    </div>
                  </section>
                  <section className="dv-card dv-board dv-board--d5" aria-label="Monday 2">
                    <header className="dv-board__h">
                      <div>
                        <span className="dv-board__eyebrow">{"Day board"}</span>
                        <h2>{"Monday 2"}</h2>
                      </div>
                      <ul className="dv-board__k">
                        <li>
                          <b>{"0"}</b>
                          <span>{"events"}</span>
                        </li>
                        <li>
                          <b>{"0"}</b>
                          <span>{"guests expected"}</span>
                        </li>
                        <li>
                          <b>{"0"}</b>
                          <span>{"of 5 venues in use"}</span>
                        </li>
                        <li>
                          <b>{"20"}</b>
                          <span>{"free sessions"}</span>
                        </li>
                      </ul>
                    </header>
                    <div className="dv-grid">
                      <div className="dv-grid__corner" />
                      <div className="dv-grid__s">
                        <b>{"Breakfast"}</b>
                        <small>{"07–10"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Lunch"}</b>
                        <small>{"12–16"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Hi-tea"}</b>
                        <small>{"16–19"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Dinner"}</b>
                        <small>{"19–23"}</small>
                      </div>
                      <div className="dv-grid__v">
                        <b>{"Periyar Hall"}</b>
                        <small>{"Ballroom · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Mon 2 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Mon 2 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Mon 2 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Mon 2 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Meenachil Hall"}</b>
                        <small>{"Divisible hall · up to 180"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Mon 2 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Mon 2 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Mon 2 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Mon 2 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Periyar + Meenachil"}</b>
                        <small>{"Both halls together"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Mon 2 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Mon 2 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Mon 2 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Mon 2 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Vembanad Boardroom"}</b>
                        <small>{"Boardroom · up to 24"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Mon 2 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Mon 2 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Mon 2 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Mon 2 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Poolside Lawn"}</b>
                        <small>{"Outdoor · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Mon 2 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Mon 2 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Mon 2 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Mon 2 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                    </div>
                  </section>
                  <section className="dv-card dv-board dv-board--d6" aria-label="Tuesday 3">
                    <header className="dv-board__h">
                      <div>
                        <span className="dv-board__eyebrow">{"Day board"}</span>
                        <h2>{"Tuesday 3"}</h2>
                      </div>
                      <ul className="dv-board__k">
                        <li>
                          <b>{"0"}</b>
                          <span>{"events"}</span>
                        </li>
                        <li>
                          <b>{"0"}</b>
                          <span>{"guests expected"}</span>
                        </li>
                        <li>
                          <b>{"0"}</b>
                          <span>{"of 5 venues in use"}</span>
                        </li>
                        <li>
                          <b>{"20"}</b>
                          <span>{"free sessions"}</span>
                        </li>
                      </ul>
                    </header>
                    <div className="dv-grid">
                      <div className="dv-grid__corner" />
                      <div className="dv-grid__s">
                        <b>{"Breakfast"}</b>
                        <small>{"07–10"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Lunch"}</b>
                        <small>{"12–16"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Hi-tea"}</b>
                        <small>{"16–19"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Dinner"}</b>
                        <small>{"19–23"}</small>
                      </div>
                      <div className="dv-grid__v">
                        <b>{"Periyar Hall"}</b>
                        <small>{"Ballroom · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Tue 3 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Tue 3 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Tue 3 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Tue 3 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Meenachil Hall"}</b>
                        <small>{"Divisible hall · up to 180"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Tue 3 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Tue 3 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Tue 3 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Tue 3 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Periyar + Meenachil"}</b>
                        <small>{"Both halls together"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Tue 3 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Tue 3 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Tue 3 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Tue 3 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Vembanad Boardroom"}</b>
                        <small>{"Boardroom · up to 24"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Tue 3 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Tue 3 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Tue 3 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Tue 3 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Poolside Lawn"}</b>
                        <small>{"Outdoor · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Tue 3 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Tue 3 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Tue 3 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Tue 3 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                    </div>
                  </section>
                  <section className="dv-card dv-board dv-board--d7" aria-label="Wednesday 4">
                    <header className="dv-board__h">
                      <div>
                        <span className="dv-board__eyebrow">{"Day board"}</span>
                        <h2>{"Wednesday 4"}</h2>
                      </div>
                      <ul className="dv-board__k">
                        <li>
                          <b>{"0"}</b>
                          <span>{"events"}</span>
                        </li>
                        <li>
                          <b>{"0"}</b>
                          <span>{"guests expected"}</span>
                        </li>
                        <li>
                          <b>{"0"}</b>
                          <span>{"of 5 venues in use"}</span>
                        </li>
                        <li>
                          <b>{"20"}</b>
                          <span>{"free sessions"}</span>
                        </li>
                      </ul>
                    </header>
                    <div className="dv-grid">
                      <div className="dv-grid__corner" />
                      <div className="dv-grid__s">
                        <b>{"Breakfast"}</b>
                        <small>{"07–10"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Lunch"}</b>
                        <small>{"12–16"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Hi-tea"}</b>
                        <small>{"16–19"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Dinner"}</b>
                        <small>{"19–23"}</small>
                      </div>
                      <div className="dv-grid__v">
                        <b>{"Periyar Hall"}</b>
                        <small>{"Ballroom · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Wed 4 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Wed 4 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Wed 4 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Wed 4 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Meenachil Hall"}</b>
                        <small>{"Divisible hall · up to 180"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Wed 4 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Wed 4 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Wed 4 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Wed 4 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Periyar + Meenachil"}</b>
                        <small>{"Both halls together"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Wed 4 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Wed 4 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Wed 4 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Wed 4 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Vembanad Boardroom"}</b>
                        <small>{"Boardroom · up to 24"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Wed 4 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Wed 4 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Wed 4 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Wed 4 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Poolside Lawn"}</b>
                        <small>{"Outdoor · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Wed 4 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Wed 4 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Wed 4 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Wed 4 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                    </div>
                  </section>
                </div>
                <div className="dv-pane dv-pane--wk3">
                  <section className="dv-card dv-glance" aria-label="Week at a glance">
                    <header className="dv-card__h">
                      <div>
                        <h2>{"Week at a glance"}</h2>
                        <p>{"Each square is a session – breakfast, lunch, hi-tea, dinner. Pick a day to see its board."}</p>
                      </div>
                      <ul className="dv-leg" aria-label="Colour key">
                        <li>
                          <i className="dv-sw dv-sw--free" />
                          {"Free"}
                        </li>
                        <li>
                          <i className="dv-sw dv-sw--ten" />
                          {"Tentative"}
                        </li>
                        <li>
                          <i className="dv-sw dv-sw--op1" />
                          {"First option"}
                        </li>
                        <li>
                          <i className="dv-sw dv-sw--op2" />
                          {"Second option"}
                        </li>
                        <li>
                          <i className="dv-sw dv-sw--def" />
                          {"Definite"}
                        </li>
                        <li>
                          <i className="dv-sw dv-sw--set" />
                          {"Set-up / breakdown"}
                        </li>
                        <li>
                          <i className="dv-sw dv-sw--mnt" />
                          {"Maintenance block"}
                        </li>
                        <li>
                          <i className="dv-sw dv-sw--prt" />
                          {"Part of a combined hall in use"}
                        </li>
                      </ul>
                    </header>
                    <div className="dv-map" role="grid">
                      <div className="dv-map__corner" />
                      <label className="dv-map__day" htmlFor="wk3-d1">
                        <small>{"Mon"}</small>
                        <b>{"9"}</b>
                      </label>
                      <label className="dv-map__day" htmlFor="wk3-d2">
                        <small>{"Tue"}</small>
                        <b>{"10"}</b>
                      </label>
                      <label className="dv-map__day" htmlFor="wk3-d3">
                        <small>{"Wed"}</small>
                        <b>{"11"}</b>
                      </label>
                      <label className="dv-map__day" htmlFor="wk3-d4">
                        <small>{"Thu"}</small>
                        <b>{"12"}</b>
                      </label>
                      <label className="dv-map__day" htmlFor="wk3-d5">
                        <small>{"Fri"}</small>
                        <b>{"13"}</b>
                      </label>
                      <label className="dv-map__day" htmlFor="wk3-d6">
                        <small>{"Sat"}</small>
                        <b>{"14"}</b>
                      </label>
                      <label className="dv-map__day" htmlFor="wk3-d7">
                        <small>{"Sun"}</small>
                        <b>{"15"}</b>
                      </label>
                      <div className="dv-map__v">
                        <b>{"Periyar Hall"}</b>
                      </div>
                      <label className="dv-map__c" htmlFor="wk3-d1" title="Periyar Hall · Mon 9 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk3-d2" title="Periyar Hall · Tue 10 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk3-d3" title="Periyar Hall · Wed 11 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk3-d4" title="Periyar Hall · Thu 12 – Breakfast free · Lunch free · Hi-tea second option · Dinner first option">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--op2" />
                        <i className="dv-sw dv-sw--op1" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk3-d5" title="Periyar Hall · Fri 13 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk3-d6" title="Periyar Hall · Sat 14 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk3-d7" title="Periyar Hall · Sun 15 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <div className="dv-map__v">
                        <b>{"Meenachil Hall"}</b>
                      </div>
                      <label className="dv-map__c" htmlFor="wk3-d1" title="Meenachil Hall · Mon 9 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk3-d2" title="Meenachil Hall · Tue 10 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk3-d3" title="Meenachil Hall · Wed 11 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk3-d4" title="Meenachil Hall · Thu 12 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk3-d5" title="Meenachil Hall · Fri 13 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk3-d6" title="Meenachil Hall · Sat 14 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk3-d7" title="Meenachil Hall · Sun 15 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <div className="dv-map__v">
                        <b>{"Periyar + Meenachil"}</b>
                      </div>
                      <label className="dv-map__c" htmlFor="wk3-d1" title="Periyar + Meenachil · Mon 9 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk3-d2" title="Periyar + Meenachil · Tue 10 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk3-d3" title="Periyar + Meenachil · Wed 11 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk3-d4" title="Periyar + Meenachil · Thu 12 – Breakfast free · Lunch free · Hi-tea part of a combined hall in use · Dinner part of a combined hall in use">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--prt" />
                        <i className="dv-sw dv-sw--prt" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk3-d5" title="Periyar + Meenachil · Fri 13 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk3-d6" title="Periyar + Meenachil · Sat 14 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk3-d7" title="Periyar + Meenachil · Sun 15 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <div className="dv-map__v">
                        <b>{"Vembanad Boardroom"}</b>
                      </div>
                      <label className="dv-map__c" htmlFor="wk3-d1" title="Vembanad Boardroom · Mon 9 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk3-d2" title="Vembanad Boardroom · Tue 10 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk3-d3" title="Vembanad Boardroom · Wed 11 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk3-d4" title="Vembanad Boardroom · Thu 12 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk3-d5" title="Vembanad Boardroom · Fri 13 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk3-d6" title="Vembanad Boardroom · Sat 14 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk3-d7" title="Vembanad Boardroom · Sun 15 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <div className="dv-map__v">
                        <b>{"Poolside Lawn"}</b>
                      </div>
                      <label className="dv-map__c" htmlFor="wk3-d1" title="Poolside Lawn · Mon 9 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk3-d2" title="Poolside Lawn · Tue 10 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk3-d3" title="Poolside Lawn · Wed 11 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk3-d4" title="Poolside Lawn · Thu 12 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk3-d5" title="Poolside Lawn · Fri 13 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk3-d6" title="Poolside Lawn · Sat 14 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk3-d7" title="Poolside Lawn · Sun 15 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                    </div>
                  </section>
                  <section className="dv-card dv-board dv-board--d1" aria-label="Monday 9">
                    <header className="dv-board__h">
                      <div>
                        <span className="dv-board__eyebrow">{"Day board"}</span>
                        <h2>{"Monday 9"}</h2>
                      </div>
                      <ul className="dv-board__k">
                        <li>
                          <b>{"0"}</b>
                          <span>{"events"}</span>
                        </li>
                        <li>
                          <b>{"0"}</b>
                          <span>{"guests expected"}</span>
                        </li>
                        <li>
                          <b>{"0"}</b>
                          <span>{"of 5 venues in use"}</span>
                        </li>
                        <li>
                          <b>{"20"}</b>
                          <span>{"free sessions"}</span>
                        </li>
                      </ul>
                    </header>
                    <div className="dv-grid">
                      <div className="dv-grid__corner" />
                      <div className="dv-grid__s">
                        <b>{"Breakfast"}</b>
                        <small>{"07–10"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Lunch"}</b>
                        <small>{"12–16"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Hi-tea"}</b>
                        <small>{"16–19"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Dinner"}</b>
                        <small>{"19–23"}</small>
                      </div>
                      <div className="dv-grid__v">
                        <b>{"Periyar Hall"}</b>
                        <small>{"Ballroom · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Mon 9 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Mon 9 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Mon 9 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Mon 9 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Meenachil Hall"}</b>
                        <small>{"Divisible hall · up to 180"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Mon 9 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Mon 9 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Mon 9 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Mon 9 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Periyar + Meenachil"}</b>
                        <small>{"Both halls together"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Mon 9 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Mon 9 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Mon 9 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Mon 9 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Vembanad Boardroom"}</b>
                        <small>{"Boardroom · up to 24"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Mon 9 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Mon 9 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Mon 9 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Mon 9 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Poolside Lawn"}</b>
                        <small>{"Outdoor · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Mon 9 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Mon 9 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Mon 9 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Mon 9 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                    </div>
                  </section>
                  <section className="dv-card dv-board dv-board--d2" aria-label="Tuesday 10">
                    <header className="dv-board__h">
                      <div>
                        <span className="dv-board__eyebrow">{"Day board"}</span>
                        <h2>{"Tuesday 10"}</h2>
                      </div>
                      <ul className="dv-board__k">
                        <li>
                          <b>{"0"}</b>
                          <span>{"events"}</span>
                        </li>
                        <li>
                          <b>{"0"}</b>
                          <span>{"guests expected"}</span>
                        </li>
                        <li>
                          <b>{"0"}</b>
                          <span>{"of 5 venues in use"}</span>
                        </li>
                        <li>
                          <b>{"20"}</b>
                          <span>{"free sessions"}</span>
                        </li>
                      </ul>
                    </header>
                    <div className="dv-grid">
                      <div className="dv-grid__corner" />
                      <div className="dv-grid__s">
                        <b>{"Breakfast"}</b>
                        <small>{"07–10"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Lunch"}</b>
                        <small>{"12–16"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Hi-tea"}</b>
                        <small>{"16–19"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Dinner"}</b>
                        <small>{"19–23"}</small>
                      </div>
                      <div className="dv-grid__v">
                        <b>{"Periyar Hall"}</b>
                        <small>{"Ballroom · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Tue 10 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Tue 10 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Tue 10 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Tue 10 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Meenachil Hall"}</b>
                        <small>{"Divisible hall · up to 180"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Tue 10 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Tue 10 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Tue 10 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Tue 10 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Periyar + Meenachil"}</b>
                        <small>{"Both halls together"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Tue 10 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Tue 10 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Tue 10 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Tue 10 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Vembanad Boardroom"}</b>
                        <small>{"Boardroom · up to 24"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Tue 10 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Tue 10 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Tue 10 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Tue 10 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Poolside Lawn"}</b>
                        <small>{"Outdoor · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Tue 10 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Tue 10 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Tue 10 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Tue 10 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                    </div>
                  </section>
                  <section className="dv-card dv-board dv-board--d3" aria-label="Wednesday 11">
                    <header className="dv-board__h">
                      <div>
                        <span className="dv-board__eyebrow">{"Day board"}</span>
                        <h2>{"Wednesday 11"}</h2>
                      </div>
                      <ul className="dv-board__k">
                        <li>
                          <b>{"0"}</b>
                          <span>{"events"}</span>
                        </li>
                        <li>
                          <b>{"0"}</b>
                          <span>{"guests expected"}</span>
                        </li>
                        <li>
                          <b>{"0"}</b>
                          <span>{"of 5 venues in use"}</span>
                        </li>
                        <li>
                          <b>{"20"}</b>
                          <span>{"free sessions"}</span>
                        </li>
                      </ul>
                    </header>
                    <div className="dv-grid">
                      <div className="dv-grid__corner" />
                      <div className="dv-grid__s">
                        <b>{"Breakfast"}</b>
                        <small>{"07–10"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Lunch"}</b>
                        <small>{"12–16"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Hi-tea"}</b>
                        <small>{"16–19"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Dinner"}</b>
                        <small>{"19–23"}</small>
                      </div>
                      <div className="dv-grid__v">
                        <b>{"Periyar Hall"}</b>
                        <small>{"Ballroom · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Wed 11 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Wed 11 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Wed 11 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Wed 11 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Meenachil Hall"}</b>
                        <small>{"Divisible hall · up to 180"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Wed 11 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Wed 11 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Wed 11 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Wed 11 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Periyar + Meenachil"}</b>
                        <small>{"Both halls together"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Wed 11 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Wed 11 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Wed 11 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Wed 11 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Vembanad Boardroom"}</b>
                        <small>{"Boardroom · up to 24"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Wed 11 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Wed 11 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Wed 11 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Wed 11 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Poolside Lawn"}</b>
                        <small>{"Outdoor · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Wed 11 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Wed 11 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Wed 11 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Wed 11 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                    </div>
                  </section>
                  <section className="dv-card dv-board dv-board--d4" aria-label="Thursday 12">
                    <header className="dv-board__h">
                      <div>
                        <span className="dv-board__eyebrow">{"Day board"}</span>
                        <h2>{"Thursday 12"}</h2>
                      </div>
                      <ul className="dv-board__k">
                        <li>
                          <b>{"2"}</b>
                          <span>{"events"}</span>
                        </li>
                        <li>
                          <b>{"220"}</b>
                          <span>{"guests expected"}</span>
                        </li>
                        <li>
                          <b>{"2"}</b>
                          <span>{"of 5 venues in use"}</span>
                        </li>
                        <li>
                          <b>{"16"}</b>
                          <span>{"free sessions"}</span>
                        </li>
                      </ul>
                    </header>
                    <div className="dv-grid">
                      <div className="dv-grid__corner" />
                      <div className="dv-grid__s">
                        <b>{"Breakfast"}</b>
                        <small>{"07–10"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Lunch"}</b>
                        <small>{"12–16"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Hi-tea"}</b>
                        <small>{"16–19"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Dinner"}</b>
                        <small>{"19–23"}</small>
                      </div>
                      <div className="dv-grid__v">
                        <b>{"Periyar Hall"}</b>
                        <small>{"Ballroom · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Thu 12 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Thu 12 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--op2" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="2nd: Malabar Spice launch – Second option · Hi-tea" to={"/banquets-and-events/bq-05-event-booking/evt-0156"}>
                        <span className="dv-slot__st">
                          <i className="dv-sw dv-sw--op2" />
                          {"Second option"}
                        </span>
                        <b className="dv-slot__n">{"2nd: Malabar Spice launch"}</b>
                        <small>{"Hi-tea"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--op1" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="1st: Nathan–Prem · 220 – First option · Dinner" to={"/banquets-and-events/bq-05-event-booking/evt-0154"}>
                        <span className="dv-slot__st">
                          <i className="dv-sw dv-sw--op1" />
                          {"First option"}
                        </span>
                        <b className="dv-slot__n">{"1st: Nathan–Prem"}</b>
                        <span className="dv-slot__pax">
                          <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#users" />
                          </svg>
                          {"220 guests"}
                        </span>
                        <small>{"Dinner"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Meenachil Hall"}</b>
                        <small>{"Divisible hall · up to 180"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Thu 12 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Thu 12 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Thu 12 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Thu 12 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Periyar + Meenachil"}</b>
                        <small>{"Both halls together"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Thu 12 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Thu 12 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-slot dv-slot--prt" style={{"gridColumn": "4 / span 2"}} title="Periyar held – Part in use · Hi-tea–Dinner">
                        <span className="dv-slot__st">
                          <i className="dv-sw dv-sw--prt" />
                          {"Part in use"}
                        </span>
                        <b className="dv-slot__n">{"Periyar held"}</b>
                        <small>{"Hi-tea–Dinner"}</small>
                      </div>
                      <div className="dv-grid__v">
                        <b>{"Vembanad Boardroom"}</b>
                        <small>{"Boardroom · up to 24"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Thu 12 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Thu 12 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Thu 12 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Thu 12 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Poolside Lawn"}</b>
                        <small>{"Outdoor · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Thu 12 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Thu 12 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Thu 12 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Thu 12 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                    </div>
                  </section>
                  <section className="dv-card dv-board dv-board--d5" aria-label="Friday 13">
                    <header className="dv-board__h">
                      <div>
                        <span className="dv-board__eyebrow">{"Day board"}</span>
                        <h2>{"Friday 13"}</h2>
                      </div>
                      <ul className="dv-board__k">
                        <li>
                          <b>{"0"}</b>
                          <span>{"events"}</span>
                        </li>
                        <li>
                          <b>{"0"}</b>
                          <span>{"guests expected"}</span>
                        </li>
                        <li>
                          <b>{"0"}</b>
                          <span>{"of 5 venues in use"}</span>
                        </li>
                        <li>
                          <b>{"20"}</b>
                          <span>{"free sessions"}</span>
                        </li>
                      </ul>
                    </header>
                    <div className="dv-grid">
                      <div className="dv-grid__corner" />
                      <div className="dv-grid__s">
                        <b>{"Breakfast"}</b>
                        <small>{"07–10"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Lunch"}</b>
                        <small>{"12–16"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Hi-tea"}</b>
                        <small>{"16–19"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Dinner"}</b>
                        <small>{"19–23"}</small>
                      </div>
                      <div className="dv-grid__v">
                        <b>{"Periyar Hall"}</b>
                        <small>{"Ballroom · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Fri 13 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Fri 13 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Fri 13 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Fri 13 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Meenachil Hall"}</b>
                        <small>{"Divisible hall · up to 180"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Fri 13 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Fri 13 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Fri 13 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Fri 13 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Periyar + Meenachil"}</b>
                        <small>{"Both halls together"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Fri 13 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Fri 13 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Fri 13 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Fri 13 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Vembanad Boardroom"}</b>
                        <small>{"Boardroom · up to 24"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Fri 13 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Fri 13 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Fri 13 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Fri 13 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Poolside Lawn"}</b>
                        <small>{"Outdoor · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Fri 13 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Fri 13 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Fri 13 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Fri 13 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                    </div>
                  </section>
                  <section className="dv-card dv-board dv-board--d6" aria-label="Saturday 14">
                    <header className="dv-board__h">
                      <div>
                        <span className="dv-board__eyebrow">{"Day board"}</span>
                        <h2>{"Saturday 14"}</h2>
                      </div>
                      <ul className="dv-board__k">
                        <li>
                          <b>{"0"}</b>
                          <span>{"events"}</span>
                        </li>
                        <li>
                          <b>{"0"}</b>
                          <span>{"guests expected"}</span>
                        </li>
                        <li>
                          <b>{"0"}</b>
                          <span>{"of 5 venues in use"}</span>
                        </li>
                        <li>
                          <b>{"20"}</b>
                          <span>{"free sessions"}</span>
                        </li>
                      </ul>
                    </header>
                    <div className="dv-grid">
                      <div className="dv-grid__corner" />
                      <div className="dv-grid__s">
                        <b>{"Breakfast"}</b>
                        <small>{"07–10"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Lunch"}</b>
                        <small>{"12–16"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Hi-tea"}</b>
                        <small>{"16–19"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Dinner"}</b>
                        <small>{"19–23"}</small>
                      </div>
                      <div className="dv-grid__v">
                        <b>{"Periyar Hall"}</b>
                        <small>{"Ballroom · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Sat 14 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Sat 14 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Sat 14 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Sat 14 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Meenachil Hall"}</b>
                        <small>{"Divisible hall · up to 180"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Sat 14 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Sat 14 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Sat 14 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Sat 14 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Periyar + Meenachil"}</b>
                        <small>{"Both halls together"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Sat 14 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Sat 14 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Sat 14 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Sat 14 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Vembanad Boardroom"}</b>
                        <small>{"Boardroom · up to 24"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Sat 14 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Sat 14 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Sat 14 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Sat 14 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Poolside Lawn"}</b>
                        <small>{"Outdoor · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Sat 14 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Sat 14 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Sat 14 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Sat 14 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                    </div>
                  </section>
                  <section className="dv-card dv-board dv-board--d7" aria-label="Sunday 15">
                    <header className="dv-board__h">
                      <div>
                        <span className="dv-board__eyebrow">{"Day board"}</span>
                        <h2>{"Sunday 15"}</h2>
                      </div>
                      <ul className="dv-board__k">
                        <li>
                          <b>{"0"}</b>
                          <span>{"events"}</span>
                        </li>
                        <li>
                          <b>{"0"}</b>
                          <span>{"guests expected"}</span>
                        </li>
                        <li>
                          <b>{"0"}</b>
                          <span>{"of 5 venues in use"}</span>
                        </li>
                        <li>
                          <b>{"20"}</b>
                          <span>{"free sessions"}</span>
                        </li>
                      </ul>
                    </header>
                    <div className="dv-grid">
                      <div className="dv-grid__corner" />
                      <div className="dv-grid__s">
                        <b>{"Breakfast"}</b>
                        <small>{"07–10"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Lunch"}</b>
                        <small>{"12–16"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Hi-tea"}</b>
                        <small>{"16–19"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Dinner"}</b>
                        <small>{"19–23"}</small>
                      </div>
                      <div className="dv-grid__v">
                        <b>{"Periyar Hall"}</b>
                        <small>{"Ballroom · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Sun 15 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Sun 15 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Sun 15 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Sun 15 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Meenachil Hall"}</b>
                        <small>{"Divisible hall · up to 180"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Sun 15 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Sun 15 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Sun 15 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Sun 15 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Periyar + Meenachil"}</b>
                        <small>{"Both halls together"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Sun 15 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Sun 15 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Sun 15 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Sun 15 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Vembanad Boardroom"}</b>
                        <small>{"Boardroom · up to 24"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Sun 15 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Sun 15 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Sun 15 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Sun 15 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Poolside Lawn"}</b>
                        <small>{"Outdoor · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Sun 15 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Sun 15 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Sun 15 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Sun 15 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                    </div>
                  </section>
                </div>
                <div className="dv-pane dv-pane--wk4">
                  <section className="dv-card dv-glance" aria-label="Week at a glance">
                    <header className="dv-card__h">
                      <div>
                        <h2>{"Week at a glance"}</h2>
                        <p>{"Each square is a session – breakfast, lunch, hi-tea, dinner. Pick a day to see its board."}</p>
                      </div>
                      <ul className="dv-leg" aria-label="Colour key">
                        <li>
                          <i className="dv-sw dv-sw--free" />
                          {"Free"}
                        </li>
                        <li>
                          <i className="dv-sw dv-sw--ten" />
                          {"Tentative"}
                        </li>
                        <li>
                          <i className="dv-sw dv-sw--op1" />
                          {"First option"}
                        </li>
                        <li>
                          <i className="dv-sw dv-sw--op2" />
                          {"Second option"}
                        </li>
                        <li>
                          <i className="dv-sw dv-sw--def" />
                          {"Definite"}
                        </li>
                        <li>
                          <i className="dv-sw dv-sw--set" />
                          {"Set-up / breakdown"}
                        </li>
                        <li>
                          <i className="dv-sw dv-sw--mnt" />
                          {"Maintenance block"}
                        </li>
                        <li>
                          <i className="dv-sw dv-sw--prt" />
                          {"Part of a combined hall in use"}
                        </li>
                      </ul>
                    </header>
                    <div className="dv-map" role="grid">
                      <div className="dv-map__corner" />
                      <label className="dv-map__day" htmlFor="wk4-d1">
                        <small>{"Sun"}</small>
                        <b>{"22"}</b>
                      </label>
                      <label className="dv-map__day" htmlFor="wk4-d2">
                        <small>{"Mon"}</small>
                        <b>{"23"}</b>
                      </label>
                      <label className="dv-map__day" htmlFor="wk4-d3">
                        <small>{"Tue"}</small>
                        <b>{"24"}</b>
                      </label>
                      <label className="dv-map__day" htmlFor="wk4-d4">
                        <small>{"Wed"}</small>
                        <b>{"25"}</b>
                      </label>
                      <label className="dv-map__day" htmlFor="wk4-d5">
                        <small>{"Thu"}</small>
                        <b>{"26"}</b>
                      </label>
                      <label className="dv-map__day" htmlFor="wk4-d6">
                        <small>{"Fri"}</small>
                        <b>{"27"}</b>
                      </label>
                      <label className="dv-map__day" htmlFor="wk4-d7">
                        <small>{"Sat"}</small>
                        <b>{"28"}</b>
                      </label>
                      <div className="dv-map__v">
                        <b>{"Periyar Hall"}</b>
                      </div>
                      <label className="dv-map__c" htmlFor="wk4-d1" title="Periyar Hall · Sun 22 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk4-d2" title="Periyar Hall · Mon 23 – Breakfast set-up / breakdown · Lunch definite · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--set" />
                        <i className="dv-sw dv-sw--def" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk4-d3" title="Periyar Hall · Tue 24 – Breakfast free · Lunch free · Hi-tea part of a combined hall in use · Dinner part of a combined hall in use">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--prt" />
                        <i className="dv-sw dv-sw--prt" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk4-d4" title="Periyar Hall · Wed 25 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk4-d5" title="Periyar Hall · Thu 26 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk4-d6" title="Periyar Hall · Fri 27 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk4-d7" title="Periyar Hall · Sat 28 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <div className="dv-map__v">
                        <b>{"Meenachil Hall"}</b>
                      </div>
                      <label className="dv-map__c" htmlFor="wk4-d1" title="Meenachil Hall · Sun 22 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk4-d2" title="Meenachil Hall · Mon 23 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk4-d3" title="Meenachil Hall · Tue 24 – Breakfast free · Lunch free · Hi-tea part of a combined hall in use · Dinner part of a combined hall in use">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--prt" />
                        <i className="dv-sw dv-sw--prt" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk4-d4" title="Meenachil Hall · Wed 25 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk4-d5" title="Meenachil Hall · Thu 26 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk4-d6" title="Meenachil Hall · Fri 27 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk4-d7" title="Meenachil Hall · Sat 28 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <div className="dv-map__v">
                        <b>{"Periyar + Meenachil"}</b>
                      </div>
                      <label className="dv-map__c" htmlFor="wk4-d1" title="Periyar + Meenachil · Sun 22 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk4-d2" title="Periyar + Meenachil · Mon 23 – Breakfast part of a combined hall in use · Lunch part of a combined hall in use · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--prt" />
                        <i className="dv-sw dv-sw--prt" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk4-d3" title="Periyar + Meenachil · Tue 24 – Breakfast free · Lunch free · Hi-tea set-up / breakdown · Dinner definite">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--set" />
                        <i className="dv-sw dv-sw--def" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk4-d4" title="Periyar + Meenachil · Wed 25 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk4-d5" title="Periyar + Meenachil · Thu 26 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk4-d6" title="Periyar + Meenachil · Fri 27 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk4-d7" title="Periyar + Meenachil · Sat 28 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <div className="dv-map__v">
                        <b>{"Vembanad Boardroom"}</b>
                      </div>
                      <label className="dv-map__c" htmlFor="wk4-d1" title="Vembanad Boardroom · Sun 22 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk4-d2" title="Vembanad Boardroom · Mon 23 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk4-d3" title="Vembanad Boardroom · Tue 24 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk4-d4" title="Vembanad Boardroom · Wed 25 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk4-d5" title="Vembanad Boardroom · Thu 26 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk4-d6" title="Vembanad Boardroom · Fri 27 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk4-d7" title="Vembanad Boardroom · Sat 28 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <div className="dv-map__v">
                        <b>{"Poolside Lawn"}</b>
                      </div>
                      <label className="dv-map__c" htmlFor="wk4-d1" title="Poolside Lawn · Sun 22 – Breakfast free · Lunch set-up / breakdown · Hi-tea definite · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--set" />
                        <i className="dv-sw dv-sw--def" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk4-d2" title="Poolside Lawn · Mon 23 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk4-d3" title="Poolside Lawn · Tue 24 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk4-d4" title="Poolside Lawn · Wed 25 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk4-d5" title="Poolside Lawn · Thu 26 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk4-d6" title="Poolside Lawn · Fri 27 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                      <label className="dv-map__c" htmlFor="wk4-d7" title="Poolside Lawn · Sat 28 – Breakfast free · Lunch free · Hi-tea free · Dinner free">
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                        <i className="dv-sw dv-sw--free" />
                      </label>
                    </div>
                  </section>
                  <section className="dv-card dv-board dv-board--d1" aria-label="Sunday 22">
                    <header className="dv-board__h">
                      <div>
                        <span className="dv-board__eyebrow">{"Day board"}</span>
                        <h2>{"Sunday 22"}</h2>
                      </div>
                      <ul className="dv-board__k">
                        <li>
                          <b>{"1"}</b>
                          <span>{"event"}</span>
                        </li>
                        <li>
                          <b>{"150"}</b>
                          <span>{"guests expected"}</span>
                        </li>
                        <li>
                          <b>{"1"}</b>
                          <span>{"of 5 venues in use"}</span>
                        </li>
                        <li>
                          <b>{"18"}</b>
                          <span>{"free sessions"}</span>
                        </li>
                      </ul>
                    </header>
                    <div className="dv-grid">
                      <div className="dv-grid__corner" />
                      <div className="dv-grid__s">
                        <b>{"Breakfast"}</b>
                        <small>{"07–10"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Lunch"}</b>
                        <small>{"12–16"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Hi-tea"}</b>
                        <small>{"16–19"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Dinner"}</b>
                        <small>{"19–23"}</small>
                      </div>
                      <div className="dv-grid__v">
                        <b>{"Periyar Hall"}</b>
                        <small>{"Ballroom · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Sun 22 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Sun 22 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Sun 22 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Sun 22 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Meenachil Hall"}</b>
                        <small>{"Divisible hall · up to 180"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Sun 22 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Sun 22 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Sun 22 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Sun 22 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Periyar + Meenachil"}</b>
                        <small>{"Both halls together"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Sun 22 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Sun 22 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Sun 22 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Sun 22 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Vembanad Boardroom"}</b>
                        <small>{"Boardroom · up to 24"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Sun 22 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Sun 22 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Sun 22 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Sun 22 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Poolside Lawn"}</b>
                        <small>{"Outdoor · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Sun 22 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-slot dv-slot--set" style={{"gridColumn": "3 / span 1"}} title="Set-up – Set-up · Lunch">
                        <span className="dv-slot__st">
                          <i className="dv-sw dv-sw--set" />
                          {"Set-up"}
                        </span>
                        <b className="dv-slot__n">{"Set-up"}</b>
                        <small>{"Lunch"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--def" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Mehendi · 150 – Definite · Hi-tea" to={"/banquets-and-events/bq-05-event-booking"}>
                        <span className="dv-slot__st">
                          <i className="dv-sw dv-sw--def" />
                          {"Definite"}
                        </span>
                        <b className="dv-slot__n">{"Mehendi"}</b>
                        <span className="dv-slot__pax">
                          <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#users" />
                          </svg>
                          {"150 guests"}
                        </span>
                        <small>{"Hi-tea"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Sun 22 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                    </div>
                  </section>
                  <section className="dv-card dv-board dv-board--d2" aria-label="Monday 23">
                    <header className="dv-board__h">
                      <div>
                        <span className="dv-board__eyebrow">{"Day board"}</span>
                        <h2>{"Monday 23"}</h2>
                      </div>
                      <ul className="dv-board__k">
                        <li>
                          <b>{"1"}</b>
                          <span>{"event"}</span>
                        </li>
                        <li>
                          <b>{"300"}</b>
                          <span>{"guests expected"}</span>
                        </li>
                        <li>
                          <b>{"2"}</b>
                          <span>{"of 5 venues in use"}</span>
                        </li>
                        <li>
                          <b>{"16"}</b>
                          <span>{"free sessions"}</span>
                        </li>
                      </ul>
                    </header>
                    <div className="dv-grid">
                      <div className="dv-grid__corner" />
                      <div className="dv-grid__s">
                        <b>{"Breakfast"}</b>
                        <small>{"07–10"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Lunch"}</b>
                        <small>{"12–16"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Hi-tea"}</b>
                        <small>{"16–19"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Dinner"}</b>
                        <small>{"19–23"}</small>
                      </div>
                      <div className="dv-grid__v">
                        <b>{"Periyar Hall"}</b>
                        <small>{"Ballroom · up to 400"}</small>
                      </div>
                      <div className="dv-slot dv-slot--set" style={{"gridColumn": "2 / span 1"}} title="Set-up – Set-up · Breakfast">
                        <span className="dv-slot__st">
                          <i className="dv-sw dv-sw--set" />
                          {"Set-up"}
                        </span>
                        <b className="dv-slot__n">{"Set-up"}</b>
                        <small>{"Breakfast"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--def" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Wedding sadya · 300 – Definite · Lunch" to={"/banquets-and-events/bq-05-event-booking"}>
                        <span className="dv-slot__st">
                          <i className="dv-sw dv-sw--def" />
                          {"Definite"}
                        </span>
                        <b className="dv-slot__n">{"Wedding sadya"}</b>
                        <span className="dv-slot__pax">
                          <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#users" />
                          </svg>
                          {"300 guests"}
                        </span>
                        <small>{"Lunch"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Mon 23 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Mon 23 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Meenachil Hall"}</b>
                        <small>{"Divisible hall · up to 180"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Mon 23 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Mon 23 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Mon 23 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Mon 23 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Periyar + Meenachil"}</b>
                        <small>{"Both halls together"}</small>
                      </div>
                      <div className="dv-slot dv-slot--prt" style={{"gridColumn": "2 / span 2"}} title="Periyar in use – Part in use · Breakfast–Lunch">
                        <span className="dv-slot__st">
                          <i className="dv-sw dv-sw--prt" />
                          {"Part in use"}
                        </span>
                        <b className="dv-slot__n">{"Periyar in use"}</b>
                        <small>{"Breakfast–Lunch"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Mon 23 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Mon 23 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Vembanad Boardroom"}</b>
                        <small>{"Boardroom · up to 24"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Mon 23 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Mon 23 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Mon 23 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Mon 23 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Poolside Lawn"}</b>
                        <small>{"Outdoor · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Mon 23 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Mon 23 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Mon 23 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Mon 23 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                    </div>
                  </section>
                  <section className="dv-card dv-board dv-board--d3" aria-label="Tuesday 24">
                    <header className="dv-board__h">
                      <div>
                        <span className="dv-board__eyebrow">{"Day board"}</span>
                        <h2>{"Tuesday 24"}</h2>
                      </div>
                      <ul className="dv-board__k">
                        <li>
                          <b>{"1"}</b>
                          <span>{"event"}</span>
                        </li>
                        <li>
                          <b>{"420"}</b>
                          <span>{"guests expected"}</span>
                        </li>
                        <li>
                          <b>{"3"}</b>
                          <span>{"of 5 venues in use"}</span>
                        </li>
                        <li>
                          <b>{"14"}</b>
                          <span>{"free sessions"}</span>
                        </li>
                      </ul>
                    </header>
                    <div className="dv-grid">
                      <div className="dv-grid__corner" />
                      <div className="dv-grid__s">
                        <b>{"Breakfast"}</b>
                        <small>{"07–10"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Lunch"}</b>
                        <small>{"12–16"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Hi-tea"}</b>
                        <small>{"16–19"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Dinner"}</b>
                        <small>{"19–23"}</small>
                      </div>
                      <div className="dv-grid__v">
                        <b>{"Periyar Hall"}</b>
                        <small>{"Ballroom · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Tue 24 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Tue 24 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-slot dv-slot--prt" style={{"gridColumn": "4 / span 2"}} title="Combined hall – Part in use · Hi-tea–Dinner">
                        <span className="dv-slot__st">
                          <i className="dv-sw dv-sw--prt" />
                          {"Part in use"}
                        </span>
                        <b className="dv-slot__n">{"Combined hall"}</b>
                        <small>{"Hi-tea–Dinner"}</small>
                      </div>
                      <div className="dv-grid__v">
                        <b>{"Meenachil Hall"}</b>
                        <small>{"Divisible hall · up to 180"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Tue 24 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Tue 24 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-slot dv-slot--prt" style={{"gridColumn": "4 / span 2"}} title="Combined hall – Part in use · Hi-tea–Dinner">
                        <span className="dv-slot__st">
                          <i className="dv-sw dv-sw--prt" />
                          {"Part in use"}
                        </span>
                        <b className="dv-slot__n">{"Combined hall"}</b>
                        <small>{"Hi-tea–Dinner"}</small>
                      </div>
                      <div className="dv-grid__v">
                        <b>{"Periyar + Meenachil"}</b>
                        <small>{"Both halls together"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Tue 24 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Tue 24 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-slot dv-slot--set" style={{"gridColumn": "4 / span 1"}} title="Set-up – Set-up · Hi-tea">
                        <span className="dv-slot__st">
                          <i className="dv-sw dv-sw--set" />
                          {"Set-up"}
                        </span>
                        <b className="dv-slot__n">{"Set-up"}</b>
                        <small>{"Hi-tea"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--def" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Reception · 420 – Definite · Dinner" to={"/banquets-and-events/bq-05-event-booking"}>
                        <span className="dv-slot__st">
                          <i className="dv-sw dv-sw--def" />
                          {"Definite"}
                        </span>
                        <b className="dv-slot__n">{"Reception"}</b>
                        <span className="dv-slot__pax">
                          <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#users" />
                          </svg>
                          {"420 guests"}
                        </span>
                        <small>{"Dinner"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Vembanad Boardroom"}</b>
                        <small>{"Boardroom · up to 24"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Tue 24 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Tue 24 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Tue 24 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Tue 24 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Poolside Lawn"}</b>
                        <small>{"Outdoor · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Tue 24 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Tue 24 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Tue 24 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Tue 24 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                    </div>
                  </section>
                  <section className="dv-card dv-board dv-board--d4" aria-label="Wednesday 25">
                    <header className="dv-board__h">
                      <div>
                        <span className="dv-board__eyebrow">{"Day board"}</span>
                        <h2>{"Wednesday 25"}</h2>
                      </div>
                      <ul className="dv-board__k">
                        <li>
                          <b>{"0"}</b>
                          <span>{"events"}</span>
                        </li>
                        <li>
                          <b>{"0"}</b>
                          <span>{"guests expected"}</span>
                        </li>
                        <li>
                          <b>{"0"}</b>
                          <span>{"of 5 venues in use"}</span>
                        </li>
                        <li>
                          <b>{"20"}</b>
                          <span>{"free sessions"}</span>
                        </li>
                      </ul>
                    </header>
                    <div className="dv-grid">
                      <div className="dv-grid__corner" />
                      <div className="dv-grid__s">
                        <b>{"Breakfast"}</b>
                        <small>{"07–10"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Lunch"}</b>
                        <small>{"12–16"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Hi-tea"}</b>
                        <small>{"16–19"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Dinner"}</b>
                        <small>{"19–23"}</small>
                      </div>
                      <div className="dv-grid__v">
                        <b>{"Periyar Hall"}</b>
                        <small>{"Ballroom · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Wed 25 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Wed 25 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Wed 25 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Wed 25 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Meenachil Hall"}</b>
                        <small>{"Divisible hall · up to 180"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Wed 25 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Wed 25 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Wed 25 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Wed 25 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Periyar + Meenachil"}</b>
                        <small>{"Both halls together"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Wed 25 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Wed 25 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Wed 25 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Wed 25 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Vembanad Boardroom"}</b>
                        <small>{"Boardroom · up to 24"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Wed 25 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Wed 25 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Wed 25 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Wed 25 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Poolside Lawn"}</b>
                        <small>{"Outdoor · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Wed 25 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Wed 25 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Wed 25 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Wed 25 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                    </div>
                  </section>
                  <section className="dv-card dv-board dv-board--d5" aria-label="Thursday 26">
                    <header className="dv-board__h">
                      <div>
                        <span className="dv-board__eyebrow">{"Day board"}</span>
                        <h2>{"Thursday 26"}</h2>
                      </div>
                      <ul className="dv-board__k">
                        <li>
                          <b>{"0"}</b>
                          <span>{"events"}</span>
                        </li>
                        <li>
                          <b>{"0"}</b>
                          <span>{"guests expected"}</span>
                        </li>
                        <li>
                          <b>{"0"}</b>
                          <span>{"of 5 venues in use"}</span>
                        </li>
                        <li>
                          <b>{"20"}</b>
                          <span>{"free sessions"}</span>
                        </li>
                      </ul>
                    </header>
                    <div className="dv-grid">
                      <div className="dv-grid__corner" />
                      <div className="dv-grid__s">
                        <b>{"Breakfast"}</b>
                        <small>{"07–10"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Lunch"}</b>
                        <small>{"12–16"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Hi-tea"}</b>
                        <small>{"16–19"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Dinner"}</b>
                        <small>{"19–23"}</small>
                      </div>
                      <div className="dv-grid__v">
                        <b>{"Periyar Hall"}</b>
                        <small>{"Ballroom · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Thu 26 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Thu 26 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Thu 26 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Thu 26 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Meenachil Hall"}</b>
                        <small>{"Divisible hall · up to 180"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Thu 26 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Thu 26 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Thu 26 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Thu 26 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Periyar + Meenachil"}</b>
                        <small>{"Both halls together"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Thu 26 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Thu 26 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Thu 26 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Thu 26 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Vembanad Boardroom"}</b>
                        <small>{"Boardroom · up to 24"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Thu 26 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Thu 26 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Thu 26 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Thu 26 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Poolside Lawn"}</b>
                        <small>{"Outdoor · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Thu 26 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Thu 26 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Thu 26 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Thu 26 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                    </div>
                  </section>
                  <section className="dv-card dv-board dv-board--d6" aria-label="Friday 27">
                    <header className="dv-board__h">
                      <div>
                        <span className="dv-board__eyebrow">{"Day board"}</span>
                        <h2>{"Friday 27"}</h2>
                      </div>
                      <ul className="dv-board__k">
                        <li>
                          <b>{"0"}</b>
                          <span>{"events"}</span>
                        </li>
                        <li>
                          <b>{"0"}</b>
                          <span>{"guests expected"}</span>
                        </li>
                        <li>
                          <b>{"0"}</b>
                          <span>{"of 5 venues in use"}</span>
                        </li>
                        <li>
                          <b>{"20"}</b>
                          <span>{"free sessions"}</span>
                        </li>
                      </ul>
                    </header>
                    <div className="dv-grid">
                      <div className="dv-grid__corner" />
                      <div className="dv-grid__s">
                        <b>{"Breakfast"}</b>
                        <small>{"07–10"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Lunch"}</b>
                        <small>{"12–16"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Hi-tea"}</b>
                        <small>{"16–19"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Dinner"}</b>
                        <small>{"19–23"}</small>
                      </div>
                      <div className="dv-grid__v">
                        <b>{"Periyar Hall"}</b>
                        <small>{"Ballroom · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Fri 27 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Fri 27 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Fri 27 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Fri 27 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Meenachil Hall"}</b>
                        <small>{"Divisible hall · up to 180"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Fri 27 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Fri 27 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Fri 27 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Fri 27 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Periyar + Meenachil"}</b>
                        <small>{"Both halls together"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Fri 27 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Fri 27 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Fri 27 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Fri 27 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Vembanad Boardroom"}</b>
                        <small>{"Boardroom · up to 24"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Fri 27 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Fri 27 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Fri 27 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Fri 27 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Poolside Lawn"}</b>
                        <small>{"Outdoor · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Fri 27 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Fri 27 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Fri 27 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Fri 27 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                    </div>
                  </section>
                  <section className="dv-card dv-board dv-board--d7" aria-label="Saturday 28">
                    <header className="dv-board__h">
                      <div>
                        <span className="dv-board__eyebrow">{"Day board"}</span>
                        <h2>{"Saturday 28"}</h2>
                      </div>
                      <ul className="dv-board__k">
                        <li>
                          <b>{"0"}</b>
                          <span>{"events"}</span>
                        </li>
                        <li>
                          <b>{"0"}</b>
                          <span>{"guests expected"}</span>
                        </li>
                        <li>
                          <b>{"0"}</b>
                          <span>{"of 5 venues in use"}</span>
                        </li>
                        <li>
                          <b>{"20"}</b>
                          <span>{"free sessions"}</span>
                        </li>
                      </ul>
                    </header>
                    <div className="dv-grid">
                      <div className="dv-grid__corner" />
                      <div className="dv-grid__s">
                        <b>{"Breakfast"}</b>
                        <small>{"07–10"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Lunch"}</b>
                        <small>{"12–16"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Hi-tea"}</b>
                        <small>{"16–19"}</small>
                      </div>
                      <div className="dv-grid__s">
                        <b>{"Dinner"}</b>
                        <small>{"19–23"}</small>
                      </div>
                      <div className="dv-grid__v">
                        <b>{"Periyar Hall"}</b>
                        <small>{"Ballroom · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Sat 28 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Sat 28 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Sat 28 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Periyar Hall · Sat 28 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Meenachil Hall"}</b>
                        <small>{"Divisible hall · up to 180"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Sat 28 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Sat 28 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Sat 28 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Meenachil Hall · Sat 28 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Periyar + Meenachil"}</b>
                        <small>{"Both halls together"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Sat 28 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Sat 28 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Sat 28 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Periyar + Meenachil · Sat 28 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Vembanad Boardroom"}</b>
                        <small>{"Boardroom · up to 24"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Sat 28 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Sat 28 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Sat 28 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Vembanad Boardroom · Sat 28 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <div className="dv-grid__v">
                        <b>{"Poolside Lawn"}</b>
                        <small>{"Outdoor · up to 400"}</small>
                      </div>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "2 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Sat 28 · Breakfast 07–10 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "3 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Sat 28 · Lunch 12–16 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "4 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Sat 28 · Hi-tea 16–19 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                      <Link className="dv-slot dv-slot--free" style={{"gridColumn": "5 / span 1"}} data-leads-to="BQ-05" title="Poolside Lawn · Sat 28 · Dinner 19–23 – free" to={"/banquets-and-events/bq-05-event-booking/new"}>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        <span>{"Free"}</span>
                        <small>{"New event"}</small>
                      </Link>
                    </div>
                  </section>
                </div>
                <p className="ln-k">
                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#info" />
                  </svg>
                  {"Pick a week, then a day in the map; the day board lists the sessions breakfast, lunch, hi-tea and dinner from left to right. Tap a free slot to start an event for that venue, day and session; tap an event to open it. Set-up and breakdown hours of BQS-01 are blocked around every function; a combined hall blocks both its parts (BR-01)."}
                </p>
                <details className="hk-sys">
                  <summary>
                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#cog" />
                    </svg>
                    {"System – what runs automatically on this screen"}
                  </summary>
                  <ul>
                    <li>
                      <b>{"BQ-X01 Venue conflict checker"}</b>
                      {" – on every save or status change prevents double booking, including set-up / breakdown time and combined halls; a second option can only queue behind a first option."}
                    </li>
                  </ul>
                </details>
                <div className="modal modal--lg" id="bq-p03" data-code="BQ-P03" role="dialog" aria-modal="true" aria-labelledby="bq-p03-t">
                  <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                  <form className="modal__box" action="#blocked" method="get">
                    <div className="modal__head">
                      <a className="modal__back" href="#main">{"← Back"}</a>
                      <div>
                        <h2 className="modal__title" id="bq-p03-t">
                          {"Venue block "}
                          <span className="code-chip">{"BQ-P03"}</span>
                        </h2>
                        <p className="modal__desc">{"Block a venue for maintenance or internal use; the diary shows it as a block."}</p>
                      </div>
                      <a className="modal__close" href="#main" aria-label="Close">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#x" />
                        </svg>
                      </a>
                    </div>
                    <div className="modal__body">
                      <div className="s-grid2">
                        <div className="field ">
                          <label className="field__label" htmlFor="p3-v">
                            {"Venue "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="p3-v" name="venue" required={true} defaultValue={"VEM"}>
                              <option value="VEM">{"Vembanad Boardroom"}</option>
                              <option value="PER">{"Periyar Hall"}</option>
                              <option value="MEE">{"Meenachil Hall"}</option>
                              <option value="LAWN">{"Poolside Lawn"}</option>
                              <option>{"Periyar + Meenachil (combined)"}</option>
                            </select>
                            <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <div className="field ">
                          <label className="field__label" htmlFor="p3-f">
                            {"From "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <input className="field__input" id="p3-f" name="from" type="datetime-local" required={true} min="2026-10-22T00:00" defaultValue={"2026-10-29T07:00"} />
                        </div>
                        <div className="field ">
                          <label className="field__label" htmlFor="p3-t">
                            {"To "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <input className="field__input" id="p3-t" name="to" type="datetime-local" required={true} min="2026-10-22T00:00" defaultValue={"2026-10-30T23:00"} />
                          <span className="field__hint">{"No definite event may fall in the period (BQ-X01)"}</span>
                        </div>
                        <div className="field " data-fw="s">
                          <label className="field__label" htmlFor="p3-r">
                            {"Reason "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="p3-r" name="reason" required={true} defaultValue={"vip"}>
                              <option>{"Maintenance"}</option>
                              <option>{"Renovation"}</option>
                              <option>{"Internal event"}</option>
                              <option value="vip">{"Hold for VIP"}</option>
                            </select>
                            <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <div className="field field--wide">
                          <label className="field__label" htmlFor="p3-n">{"Note"}</label>
                          <textarea className="field__input" id="p3-n" name="note" rows="3" maxLength="200" defaultValue={"Hold for the GM’s board review"} />
                        </div>
                      </div>
                    </div>
                    <div className="modal__foot">
                      <a className="btn" href="#main">{"Cancel"}</a>
                      <button className="btn btn--primary" type="submit">{"Save"}</button>
                    </div>
                  </form>
                </div>
                <div className="fd-toast" id="t-blocked" role="status" aria-live="polite">
                  <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#lock" />
                  </svg>
                  <div className="fd-toast__text">
                    {"Venue blocked"}
                    <small>{"Vembanad Boardroom 29-10-2026 07:00 – 30-10-2026 23:00 · Hold for VIP – no events in the period."}</small>
                  </div>
                  <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                    <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#x" />
                    </svg>
                  </a>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </ScreenShell>
  );
}
