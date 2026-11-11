// GENERATED from public/front-desk-setup/fds-19-front-desk-reason-codes/index.html by scripts/convert_legacy.py.
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
    "href": "/front-desk-setup/fds-19-front-desk-reason-codes/fds-19-front-desk-reason-codes.css",
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

export default function FrontDeskSetupFds19FrontDeskReasonCodes() {
  return (
    <ScreenShell title="Front Desk Reason Codes" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="FDS-19" data-code="FDS-19" data-static="1" className="legacy-body">
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
                  <Link className="nav__item is-active" data-nav="FDS-01" title="Front Desk Setup Home" to={"/front-desk-setup/fds-01-front-desk-setup-home"}>
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
            <main className="app__content" id="main" data-code="FDS-19" tabIndex="-1">
              <header className="page-header">
                <div className="page-header__top">
                  <Link className="fd-back" data-leads-to="FDS-01" to={"/front-desk-setup/fds-01-front-desk-setup-home"}>{"← Front Desk Setup"}</Link>
                  <nav className="breadcrumb" aria-label="Breadcrumb">
                    <ol>
                      <li>
                        <Link to={"/common/cm-06-home-launcher"}>{"Home"}</Link>
                      </li>
                      <li>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-right" />
                        </svg>
                        <Link to={"/front-desk-setup/fds-01-front-desk-setup-home"}>{"Front Desk Setup"}</Link>
                      </li>
                      <li>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-right" />
                        </svg>
                        <span aria-current="page">{"Front Desk Reason Codes"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">{"Front Desk Reason Codes"}</h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"FDS-19"}</span>
                  <div className="page-header__filters">
                    <div className="hctl">
                      <div className="hsearch">
                        <input className="hsearch__input" id="hs380" type="search" name="q" placeholder="Search reasons" aria-label="Search reasons" autoComplete="off" />
                        <label className="hsearch__ic" htmlFor="hs380" title="Search">
                          <svg className="icon" width="17" height="17" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#search" />
                          </svg>
                          <span className="sr-only">{"Search"}</span>
                        </label>
                      </div>
                      <label className="hfilter__btn" htmlFor="hf381" title="Show or hide the filters">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#filter" />
                        </svg>
                        <span>{"Filter"}</span>
                        <i className="hfilter__dot" aria-hidden="true" />
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </label>
                      <input className="hfilter__tg" type="checkbox" id="hf381" aria-label="Show filters" />
                      <form className="hfilter" method="get" role="search" aria-label="Filters">
                        <span className="hfilter__hic" title="Filters">
                          <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#sliders" />
                          </svg>
                        </span>
                        <div className="hfilter__grid">
                          <label className="hf-f ">
                            <span className="hf-f__l">{"Reason type"}</span>
                            <select className="hf-f__c">
                              <option>{"All reason types"}</option>
                              <option>{"Room move"}</option>
                              <option>{"Upgrade"}</option>
                              <option>{"Early departure"}</option>
                              <option>{"Late check-out waiver"}</option>
                              <option>{"Early check-in waiver"}</option>
                              <option>{"Allowance"}</option>
                              <option>{"Void"}</option>
                              <option>{"Refund"}</option>
                              <option>{"Re-open bill"}</option>
                              <option>{"Credit note"}</option>
                              <option>{"Dirty room override"}</option>
                              <option>{"Cash difference"}</option>
                              <option>{"Cancel check-in"}</option>
                              <option>{"Reinstate check-out"}</option>
                              <option>{"Rate change"}</option>
                              <option>{"Out of order"}</option>
                              <option>{"Out of service"}</option>
                              <option>{"Key re-issue"}</option>
                              <option>{"Paymaster carry forward"}</option>
                              <option>{"Lost & found disposal"}</option>
                              <option>{"Visitor denied"}</option>
                              <option>{"Walk guest"}</option>
                            </select>
                            <svg className="icon hf-f__chev" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                        </div>
                        <div className="hfilter__acts">
                          <button className="hfilter__clear" type="reset" title="Clear all filters">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#refresh" />
                            </svg>
                            <span>{"Clear"}</span>
                          </button>
                          <label className="hfilter__done" htmlFor="hf381">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check" />
                            </svg>
                            {"Done"}
                          </label>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="page-header__actions">
                    <a className="btn" href="#export-FDS-19" data-flow="opener">{"Export Front Desk Reason Codes"}</a>
                    <a className="btn ph-ic" href="#log-FDS-19">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#history" />
                      </svg>
                      {"Change log"}
                    </a>
                    <a className="btn ph-ic" href="#FDS-19-export" data-opens="FDS-19-export">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#download" />
                      </svg>
                      {"Export"}
                    </a>
                    <a className="btn btn--primary" href="#FDS-P16">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#plus" />
                      </svg>
                      {"Add reason code"}
                    </a>
                  </div>
                </div>
              </header>
              <div className="pgw">
                <div className="s-scroll s-scroll--tall">
                  <table className="dt__table dt--hug" data-code="FDS-19-list" data-mc="">
                    <caption className="sr-only">{"Front Desk Reason Codes list"}</caption>
                    <thead>
                      <tr>
                        <th scope="col">{"Code"}</th>
                        <th scope="col">{"Reason text"}</th>
                        <th scope="col">{"Type"}</th>
                        <th scope="col">{"Note required"}</th>
                        <th scope="col">{"Status"}</th>
                        <th scope="col" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="fd-grouprow">
                        <th scope="colgroup" colSpan="6">{"Room move"}</th>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                          <a className="fd-link" href="#FDS-P16-guestreq">
                            <strong>{"GUESTREQ"}</strong>
                          </a>
                        </td>
                        <td className="dt__td" data-label="Reason text" data-w2="">{"Guest requested a change"}</td>
                        <td className="dt__td nw" data-label="Type" data-w2="">{"Room move"}</td>
                        <td className="dt__td nw" data-label="Note required" data-w2="">{"No"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#FDS-P16-guestreq" aria-label="Edit GUESTREQ Guest requested a change">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Code" data-t="">
                          <a className="fd-link" href="#FDS-P16-noise">
                            <strong>{"NOISE"}</strong>
                          </a>
                        </td>
                        <td className="dt__td nw" data-label="Reason text" data-w2="">{"Noise complaint"}</td>
                        <td className="dt__td nw" data-label="Type" data-w2="">{"Room move"}</td>
                        <td className="dt__td nw" data-label="Note required" data-w2="">{"No"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#FDS-P16-noise" aria-label="Edit NOISE Noise complaint">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Code" data-t="">
                          <a className="fd-link" href="#FDS-P16-maint">
                            <strong>{"MAINT"}</strong>
                          </a>
                        </td>
                        <td className="dt__td" data-label="Reason text" data-w2="">{"AC / maintenance problem"}</td>
                        <td className="dt__td nw" data-label="Type" data-w2="">{"Room move"}</td>
                        <td className="dt__td nw" data-label="Note required" data-w2="">{"No"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#FDS-P16-maint" aria-label="Edit MAINT AC / maintenance problem">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Code" data-t="">
                          <a className="fd-link" href="#FDS-P16-viewreq">
                            <strong>{"VIEWREQ"}</strong>
                          </a>
                        </td>
                        <td className="dt__td nw" data-label="Reason text" data-w2="">{"Better view requested"}</td>
                        <td className="dt__td nw" data-label="Type" data-w2="">{"Room move"}</td>
                        <td className="dt__td nw" data-label="Note required" data-w2="">{"No"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#FDS-P16-viewreq" aria-label="Edit VIEWREQ Better view requested">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="fd-grouprow">
                        <th scope="colgroup" colSpan="6">{"Upgrade"}</th>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Code" data-t="">
                          <a className="fd-link" href="#FDS-P16-vipupg">
                            <strong>{"VIPUPG"}</strong>
                          </a>
                        </td>
                        <td className="dt__td" data-label="Reason text" data-w2="">{"VIP / Aviv Club upgrade"}</td>
                        <td className="dt__td nw" data-label="Type">{"Upgrade"}</td>
                        <td className="dt__td nw" data-label="Note required" data-w2="">{"No"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#FDS-P16-vipupg" aria-label="Edit VIPUPG VIP / Aviv Club upgrade">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Code" data-t="">
                          <a className="fd-link" href="#FDS-P16-noroom">
                            <strong>{"NOROOM"}</strong>
                          </a>
                        </td>
                        <td className="dt__td" data-label="Reason text">{"Booked room type not available"}</td>
                        <td className="dt__td nw" data-label="Type">{"Upgrade"}</td>
                        <td className="dt__td nw" data-label="Note required" data-w2="">{"Yes"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#FDS-P16-noroom" aria-label="Edit NOROOM Booked room type not available">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="fd-grouprow">
                        <th scope="colgroup" colSpan="6">{"Early departure"}</th>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Code" data-t="">
                          <a className="fd-link" href="#FDS-P16-emerg">
                            <strong>{"EMERG"}</strong>
                          </a>
                        </td>
                        <td className="dt__td nw" data-label="Reason text" data-w2="">{"Emergency"}</td>
                        <td className="dt__td nw" data-label="Type" data-w2="">{"Early departure"}</td>
                        <td className="dt__td nw" data-label="Note required" data-w2="">{"Yes"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#FDS-P16-emerg" aria-label="Edit EMERG Emergency">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Code" data-t="">
                          <a className="fd-link" href="#FDS-P16-chgplan">
                            <strong>{"CHGPLAN"}</strong>
                          </a>
                        </td>
                        <td className="dt__td nw" data-label="Reason text" data-w2="">{"Change of plans"}</td>
                        <td className="dt__td nw" data-label="Type" data-w2="">{"Early departure"}</td>
                        <td className="dt__td nw" data-label="Note required" data-w2="">{"No"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#FDS-P16-chgplan" aria-label="Edit CHGPLAN Change of plans">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="fd-grouprow">
                        <th scope="colgroup" colSpan="6">{"Late check-out waiver"}</th>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Code" data-t="">
                          <a className="fd-link" href="#FDS-P16-loyalty">
                            <strong>{"LOYALTY"}</strong>
                          </a>
                        </td>
                        <td className="dt__td nw" data-label="Reason text" data-w2="">{"Aviv Club benefit"}</td>
                        <td className="dt__td nw" data-label="Type" data-w2="">{"Late check-out waiver"}</td>
                        <td className="dt__td nw" data-label="Note required" data-w2="">{"No"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#FDS-P16-loyalty" aria-label="Edit LOYALTY Aviv Club benefit">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Code" data-t="">
                          <a className="fd-link" href="#FDS-P16-lateflt">
                            <strong>{"LATEFLT"}</strong>
                          </a>
                        </td>
                        <td className="dt__td nw" data-label="Reason text" data-w2="">{"Late flight"}</td>
                        <td className="dt__td nw" data-label="Type" data-w2="">{"Late check-out waiver"}</td>
                        <td className="dt__td nw" data-label="Note required" data-w2="">{"No"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#FDS-P16-lateflt" aria-label="Edit LATEFLT Late flight">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="fd-grouprow">
                        <th scope="colgroup" colSpan="6">{"Early check-in waiver"}</th>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Code" data-t="">
                          <a className="fd-link" href="#FDS-P16-roomrdy">
                            <strong>{"ROOMRDY"}</strong>
                          </a>
                        </td>
                        <td className="dt__td nw" data-label="Reason text" data-w2="">{"Room ready early"}</td>
                        <td className="dt__td nw" data-label="Type" data-w2="">{"Early check-in waiver"}</td>
                        <td className="dt__td nw" data-label="Note required" data-w2="">{"No"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#FDS-P16-roomrdy" aria-label="Edit ROOMRDY Room ready early">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Code" data-t="">
                          <a className="fd-link" href="#FDS-P16-loyal2">
                            <strong>{"LOYAL2"}</strong>
                          </a>
                        </td>
                        <td className="dt__td" data-label="Reason text" data-w2="">{"VIP / Aviv Club benefit"}</td>
                        <td className="dt__td nw" data-label="Type" data-w2="">{"Early check-in waiver"}</td>
                        <td className="dt__td nw" data-label="Note required" data-w2="">{"No"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#FDS-P16-loyal2" aria-label="Edit LOYAL2 VIP / Aviv Club benefit">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="fd-grouprow">
                        <th scope="colgroup" colSpan="6">{"Allowance"}</th>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Code" data-t="">
                          <a className="fd-link" href="#FDS-P16-servrec">
                            <strong>{"SERVREC"}</strong>
                          </a>
                        </td>
                        <td className="dt__td nw" data-label="Reason text" data-w2="">{"Service recovery"}</td>
                        <td className="dt__td nw" data-label="Type" data-w2="">{"Allowance"}</td>
                        <td className="dt__td nw" data-label="Note required" data-w2="">{"Yes"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#FDS-P16-servrec" aria-label="Edit SERVREC Service recovery">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Code" data-t="">
                          <a className="fd-link" href="#FDS-P16-posterr">
                            <strong>{"POSTERR"}</strong>
                          </a>
                        </td>
                        <td className="dt__td nw" data-label="Reason text" data-w2="">{"Posting error"}</td>
                        <td className="dt__td nw" data-label="Type" data-w2="">{"Allowance"}</td>
                        <td className="dt__td nw" data-label="Note required" data-w2="">{"No"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#FDS-P16-posterr" aria-label="Edit POSTERR Posting error">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                          <a className="fd-link" href="#FDS-P16-goodwill">
                            <strong>{"GOODWILL"}</strong>
                          </a>
                        </td>
                        <td className="dt__td nw" data-label="Reason text" data-w2="">{"Goodwill gesture"}</td>
                        <td className="dt__td nw" data-label="Type" data-w2="">{"Allowance"}</td>
                        <td className="dt__td nw" data-label="Note required" data-w2="">{"Yes"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#FDS-P16-goodwill" aria-label="Edit GOODWILL Goodwill gesture">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="fd-grouprow">
                        <th scope="colgroup" colSpan="6">{"Void"}</th>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                          <a className="fd-link" href="#FDS-P16-wrongfol">
                            <strong>{"WRONGFOL"}</strong>
                          </a>
                        </td>
                        <td className="dt__td" data-label="Reason text" data-w2="">{"Posted to the wrong folio"}</td>
                        <td className="dt__td nw" data-label="Type">{"Void"}</td>
                        <td className="dt__td nw" data-label="Note required" data-w2="">{"No"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#FDS-P16-wrongfol" aria-label="Edit WRONGFOL Posted to the wrong folio">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Code" data-t="">
                          <a className="fd-link" href="#FDS-P16-duplic">
                            <strong>{"DUPLIC"}</strong>
                          </a>
                        </td>
                        <td className="dt__td nw" data-label="Reason text" data-w2="">{"Duplicate posting"}</td>
                        <td className="dt__td nw" data-label="Type">{"Void"}</td>
                        <td className="dt__td nw" data-label="Note required" data-w2="">{"No"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#FDS-P16-duplic" aria-label="Edit DUPLIC Duplicate posting">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="fd-grouprow">
                        <th scope="colgroup" colSpan="6">{"Refund"}</th>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Code" data-t="">
                          <a className="fd-link" href="#FDS-P16-overpay">
                            <strong>{"OVERPAY"}</strong>
                          </a>
                        </td>
                        <td className="dt__td nw" data-label="Reason text" data-w2="">{"Overpayment"}</td>
                        <td className="dt__td nw" data-label="Type">{"Refund"}</td>
                        <td className="dt__td nw" data-label="Note required" data-w2="">{"No"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#FDS-P16-overpay" aria-label="Edit OVERPAY Overpayment">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Code" data-t="">
                          <a className="fd-link" href="#FDS-P16-shorten">
                            <strong>{"SHORTEN"}</strong>
                          </a>
                        </td>
                        <td className="dt__td nw" data-label="Reason text" data-w2="">{"Stay shortened"}</td>
                        <td className="dt__td nw" data-label="Type">{"Refund"}</td>
                        <td className="dt__td nw" data-label="Note required" data-w2="">{"No"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#FDS-P16-shorten" aria-label="Edit SHORTEN Stay shortened">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="fd-grouprow">
                        <th scope="colgroup" colSpan="6">{"Re-open bill"}</th>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Code" data-t="">
                          <a className="fd-link" href="#FDS-P16-misschg">
                            <strong>{"MISSCHG"}</strong>
                          </a>
                        </td>
                        <td className="dt__td nw" data-label="Reason text" data-w2="">{"Missed charge"}</td>
                        <td className="dt__td nw" data-label="Type" data-w2="">{"Re-open bill"}</td>
                        <td className="dt__td nw" data-label="Note required" data-w2="">{"Yes"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#FDS-P16-misschg" aria-label="Edit MISSCHG Missed charge">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                          <a className="fd-link" href="#FDS-P16-wrongpay">
                            <strong>{"WRONGPAY"}</strong>
                          </a>
                        </td>
                        <td className="dt__td nw" data-label="Reason text" data-w2="">{"Wrong payment mode"}</td>
                        <td className="dt__td nw" data-label="Type" data-w2="">{"Re-open bill"}</td>
                        <td className="dt__td nw" data-label="Note required" data-w2="">{"No"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#FDS-P16-wrongpay" aria-label="Edit WRONGPAY Wrong payment mode">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="fd-grouprow">
                        <th scope="colgroup" colSpan="6">{"Credit note"}</th>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Code" data-t="">
                          <a className="fd-link" href="#FDS-P16-ratefix">
                            <strong>{"RATEFIX"}</strong>
                          </a>
                        </td>
                        <td className="dt__td nw" data-label="Reason text" data-w2="">{"Rate correction"}</td>
                        <td className="dt__td nw" data-label="Type" data-w2="">{"Credit note"}</td>
                        <td className="dt__td nw" data-label="Note required" data-w2="">{"Yes"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#FDS-P16-ratefix" aria-label="Edit RATEFIX Rate correction">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Code" data-t="">
                          <a className="fd-link" href="#FDS-P16-taxfix">
                            <strong>{"TAXFIX"}</strong>
                          </a>
                        </td>
                        <td className="dt__td nw" data-label="Reason text" data-w2="">{"Tax / GSTIN correction"}</td>
                        <td className="dt__td nw" data-label="Type" data-w2="">{"Credit note"}</td>
                        <td className="dt__td nw" data-label="Note required" data-w2="">{"Yes"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#FDS-P16-taxfix" aria-label="Edit TAXFIX Tax / GSTIN correction">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="fd-grouprow">
                        <th scope="colgroup" colSpan="6">{"Dirty room override"}</th>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                          <a className="fd-link" href="#FDS-P16-dirtyroom">
                            <strong>{"DIRTYROOM"}</strong>
                          </a>
                        </td>
                        <td className="dt__td" data-label="Reason text">{"Guest accepts the room while it is being cleaned"}</td>
                        <td className="dt__td nw" data-label="Type" data-w2="">{"Dirty room override"}</td>
                        <td className="dt__td nw" data-label="Note required" data-w2="">{"Yes"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#FDS-P16-dirtyroom" aria-label="Edit DIRTYROOM Guest accepts the room while it is being cleaned">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                          <a className="fd-link" href="#FDS-P16-cleanwip">
                            <strong>{"CLEANWIP"}</strong>
                          </a>
                        </td>
                        <td className="dt__td nw" data-label="Reason text" data-w2="">{"Cleaning in progress"}</td>
                        <td className="dt__td nw" data-label="Type" data-w2="">{"Dirty room override"}</td>
                        <td className="dt__td nw" data-label="Note required" data-w2="">{"No"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#FDS-P16-cleanwip" aria-label="Edit CLEANWIP Cleaning in progress">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="fd-grouprow">
                        <th scope="colgroup" colSpan="6">{"Cash difference"}</th>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                          <a className="fd-link" href="#FDS-P16-counterr">
                            <strong>{"COUNTERR"}</strong>
                          </a>
                        </td>
                        <td className="dt__td nw" data-label="Reason text" data-w2="">{"Counting error"}</td>
                        <td className="dt__td nw" data-label="Type" data-w2="">{"Cash difference"}</td>
                        <td className="dt__td nw" data-label="Note required" data-w2="">{"Yes"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#FDS-P16-counterr" aria-label="Edit COUNTERR Counting error">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Code" data-t="">
                          <a className="fd-link" href="#FDS-P16-refnrec">
                            <strong>{"REFNREC"}</strong>
                          </a>
                        </td>
                        <td className="dt__td nw" data-label="Reason text" data-w2="">{"Refund not recorded"}</td>
                        <td className="dt__td nw" data-label="Type" data-w2="">{"Cash difference"}</td>
                        <td className="dt__td nw" data-label="Note required" data-w2="">{"Yes"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#FDS-P16-refnrec" aria-label="Edit REFNREC Refund not recorded">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="fd-grouprow">
                        <th scope="colgroup" colSpan="6">{"Cancel check-in"}</th>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                          <a className="fd-link" href="#FDS-P16-wronggst">
                            <strong>{"WRONGGST"}</strong>
                          </a>
                        </td>
                        <td className="dt__td" data-label="Reason text">{"Checked in the wrong guest"}</td>
                        <td className="dt__td nw" data-label="Type" data-w2="">{"Cancel check-in"}</td>
                        <td className="dt__td nw" data-label="Note required" data-w2="">{"Yes"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#FDS-P16-wronggst" aria-label="Edit WRONGGST Checked in the wrong guest">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Code" data-t="">
                          <a className="fd-link" href="#FDS-P16-gstchng">
                            <strong>{"GSTCHNG"}</strong>
                          </a>
                        </td>
                        <td className="dt__td nw" data-label="Reason text" data-w2="">{"Guest changed mind"}</td>
                        <td className="dt__td nw" data-label="Type" data-w2="">{"Cancel check-in"}</td>
                        <td className="dt__td nw" data-label="Note required" data-w2="">{"No"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#FDS-P16-gstchng" aria-label="Edit GSTCHNG Guest changed mind">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="fd-grouprow">
                        <th scope="colgroup" colSpan="6">{"Reinstate check-out"}</th>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Code" data-t="">
                          <a className="fd-link" href="#FDS-P16-earlyco">
                            <strong>{"EARLYCO"}</strong>
                          </a>
                        </td>
                        <td className="dt__td nw" data-label="Reason text" data-w2="">{"Checked out by mistake"}</td>
                        <td className="dt__td nw" data-label="Type" data-w2="">{"Reinstate check-out"}</td>
                        <td className="dt__td nw" data-label="Note required" data-w2="">{"Yes"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#FDS-P16-earlyco" aria-label="Edit EARLYCO Checked out by mistake">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Code" data-t="">
                          <a className="fd-link" href="#FDS-P16-gstret">
                            <strong>{"GSTRET"}</strong>
                          </a>
                        </td>
                        <td className="dt__td nw" data-label="Reason text" data-w2="">{"Guest returned"}</td>
                        <td className="dt__td nw" data-label="Type" data-w2="">{"Reinstate check-out"}</td>
                        <td className="dt__td nw" data-label="Note required" data-w2="">{"No"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#FDS-P16-gstret" aria-label="Edit GSTRET Guest returned">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="fd-grouprow">
                        <th scope="colgroup" colSpan="6">{"Rate change"}</th>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                          <a className="fd-link" href="#FDS-P16-corprate">
                            <strong>{"CORPRATE"}</strong>
                          </a>
                        </td>
                        <td className="dt__td nw" data-label="Reason text" data-w2="">{"Corporate rate applied"}</td>
                        <td className="dt__td nw" data-label="Type" data-w2="">{"Rate change"}</td>
                        <td className="dt__td nw" data-label="Note required" data-w2="">{"No"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#FDS-P16-corprate" aria-label="Edit CORPRATE Corporate rate applied">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Code" data-t="">
                          <a className="fd-link" href="#FDS-P16-bkgfix">
                            <strong>{"BKGFIX"}</strong>
                          </a>
                        </td>
                        <td className="dt__td" data-label="Reason text">{"Rate corrected to the booking"}</td>
                        <td className="dt__td nw" data-label="Type" data-w2="">{"Rate change"}</td>
                        <td className="dt__td nw" data-label="Note required" data-w2="">{"No"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#FDS-P16-bkgfix" aria-label="Edit BKGFIX Rate corrected to the booking">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="fd-grouprow">
                        <th scope="colgroup" colSpan="6">{"Out of order"}</th>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Code" data-t="">
                          <a className="fd-link" href="#FDS-P16-accomp">
                            <strong>{"ACCOMP"}</strong>
                          </a>
                        </td>
                        <td className="dt__td nw" data-label="Reason text" data-w2="">{"AC compressor"}</td>
                        <td className="dt__td nw" data-label="Type" data-w2="">{"Out of order"}</td>
                        <td className="dt__td nw" data-label="Note required" data-w2="">{"No"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#FDS-P16-accomp" aria-label="Edit ACCOMP AC compressor">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Code" data-t="">
                          <a className="fd-link" href="#FDS-P16-plumb">
                            <strong>{"PLUMB"}</strong>
                          </a>
                        </td>
                        <td className="dt__td nw" data-label="Reason text" data-w2="">{"Plumbing"}</td>
                        <td className="dt__td nw" data-label="Type" data-w2="">{"Out of order"}</td>
                        <td className="dt__td nw" data-label="Note required" data-w2="">{"No"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#FDS-P16-plumb" aria-label="Edit PLUMB Plumbing">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Code" data-t="">
                          <a className="fd-link" href="#FDS-P16-renov">
                            <strong>{"RENOV"}</strong>
                          </a>
                        </td>
                        <td className="dt__td nw" data-label="Reason text" data-w2="">{"Refurbishment"}</td>
                        <td className="dt__td nw" data-label="Type" data-w2="">{"Out of order"}</td>
                        <td className="dt__td nw" data-label="Note required" data-w2="">{"No"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#FDS-P16-renov" aria-label="Edit RENOV Refurbishment">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="fd-grouprow">
                        <th scope="colgroup" colSpan="6">{"Out of service"}</th>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Code" data-t="">
                          <a className="fd-link" href="#FDS-P16-minorfx">
                            <strong>{"MINORFX"}</strong>
                          </a>
                        </td>
                        <td className="dt__td nw" data-label="Reason text" data-w2="">{"Minor repair"}</td>
                        <td className="dt__td nw" data-label="Type" data-w2="">{"Out of service"}</td>
                        <td className="dt__td nw" data-label="Note required" data-w2="">{"No"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#FDS-P16-minorfx" aria-label="Edit MINORFX Minor repair">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Code" data-t="">
                          <a className="fd-link" href="#FDS-P16-deepcln">
                            <strong>{"DEEPCLN"}</strong>
                          </a>
                        </td>
                        <td className="dt__td nw" data-label="Reason text" data-w2="">{"Deep cleaning"}</td>
                        <td className="dt__td nw" data-label="Type" data-w2="">{"Out of service"}</td>
                        <td className="dt__td nw" data-label="Note required" data-w2="">{"No"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#FDS-P16-deepcln" aria-label="Edit DEEPCLN Deep cleaning">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="fd-grouprow">
                        <th scope="colgroup" colSpan="6">{"Key re-issue"}</th>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Code" data-t="">
                          <a className="fd-link" href="#FDS-P16-lostkey">
                            <strong>{"LOSTKEY"}</strong>
                          </a>
                        </td>
                        <td className="dt__td nw" data-label="Reason text" data-w2="">{"Lost key"}</td>
                        <td className="dt__td nw" data-label="Type" data-w2="">{"Key re-issue"}</td>
                        <td className="dt__td nw" data-label="Note required" data-w2="">{"No"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#FDS-P16-lostkey" aria-label="Edit LOSTKEY Lost key">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Code" data-t="">
                          <a className="fd-link" href="#FDS-P16-demag">
                            <strong>{"DEMAG"}</strong>
                          </a>
                        </td>
                        <td className="dt__td nw" data-label="Reason text" data-w2="">{"Card demagnetised"}</td>
                        <td className="dt__td nw" data-label="Type" data-w2="">{"Key re-issue"}</td>
                        <td className="dt__td nw" data-label="Note required" data-w2="">{"No"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#FDS-P16-demag" aria-label="Edit DEMAG Card demagnetised">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="fd-grouprow">
                        <th scope="colgroup" colSpan="6">{"Paymaster carry forward"}</th>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Code" data-t="">
                          <a className="fd-link" href="#FDS-P16-evtopen">
                            <strong>{"EVTOPEN"}</strong>
                          </a>
                        </td>
                        <td className="dt__td nw" data-label="Reason text" data-w2="">{"Event still running"}</td>
                        <td className="dt__td" data-label="Type" data-w2="">{"Paymaster carry forward"}</td>
                        <td className="dt__td nw" data-label="Note required" data-w2="">{"No"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#FDS-P16-evtopen" aria-label="Edit EVTOPEN Event still running">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Code" data-t="">
                          <a className="fd-link" href="#FDS-P16-awaitap">
                            <strong>{"AWAITAP"}</strong>
                          </a>
                        </td>
                        <td className="dt__td nw" data-label="Reason text" data-w2="">{"Awaiting approval"}</td>
                        <td className="dt__td" data-label="Type" data-w2="">{"Paymaster carry forward"}</td>
                        <td className="dt__td nw" data-label="Note required" data-w2="">{"No"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#FDS-P16-awaitap" aria-label="Edit AWAITAP Awaiting approval">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="fd-grouprow">
                        <th scope="colgroup" colSpan="6">{"Lost & found disposal"}</th>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Code" data-t="">
                          <a className="fd-link" href="#FDS-P16-expired">
                            <strong>{"EXPIRED"}</strong>
                          </a>
                        </td>
                        <td className="dt__td nw" data-label="Reason text" data-w2="">{"Retention period over"}</td>
                        <td className="dt__td nw" data-label="Type" data-w2="">{"Lost & found disposal"}</td>
                        <td className="dt__td nw" data-label="Note required" data-w2="">{"No"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#FDS-P16-expired" aria-label="Edit EXPIRED Retention period over">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Code" data-t="">
                          <a className="fd-link" href="#FDS-P16-donated">
                            <strong>{"DONATED"}</strong>
                          </a>
                        </td>
                        <td className="dt__td nw" data-label="Reason text" data-w2="">{"Donated to charity"}</td>
                        <td className="dt__td nw" data-label="Type" data-w2="">{"Lost & found disposal"}</td>
                        <td className="dt__td nw" data-label="Note required" data-w2="">{"No"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#FDS-P16-donated" aria-label="Edit DONATED Donated to charity">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="fd-grouprow">
                        <th scope="colgroup" colSpan="6">{"Visitor denied"}</th>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                          <a className="fd-link" href="#FDS-P16-noconsnt">
                            <strong>{"NOCONSNT"}</strong>
                          </a>
                        </td>
                        <td className="dt__td nw" data-label="Reason text" data-w2="">{"Guest did not consent"}</td>
                        <td className="dt__td nw" data-label="Type" data-w2="">{"Visitor denied"}</td>
                        <td className="dt__td nw" data-label="Note required" data-w2="">{"No"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#FDS-P16-noconsnt" aria-label="Edit NOCONSNT Guest did not consent">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                          <a className="fd-link" href="#FDS-P16-afterhrs">
                            <strong>{"AFTERHRS"}</strong>
                          </a>
                        </td>
                        <td className="dt__td nw" data-label="Reason text" data-w2="">{"After visiting hours"}</td>
                        <td className="dt__td nw" data-label="Type" data-w2="">{"Visitor denied"}</td>
                        <td className="dt__td nw" data-label="Note required" data-w2="">{"No"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#FDS-P16-afterhrs" aria-label="Edit AFTERHRS After visiting hours">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="fd-grouprow">
                        <th scope="colgroup" colSpan="6">{"Walk guest"}</th>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Code" data-t="">
                          <a className="fd-link" href="#FDS-P16-overbk">
                            <strong>{"OVERBK"}</strong>
                          </a>
                        </td>
                        <td className="dt__td" data-label="Reason text">{"Overbooked – relocated to a partner hotel"}</td>
                        <td className="dt__td nw" data-label="Type" data-w2="">{"Walk guest"}</td>
                        <td className="dt__td nw" data-label="Note required" data-w2="">{"Yes"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#FDS-P16-overbk" aria-label="Edit OVERBK Overbooked – relocated to a partner hotel">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Code" data-t="">
                          <a className="fd-link" href="#FDS-P16-nshrec">
                            <strong>{"NSHREC"}</strong>
                          </a>
                        </td>
                        <td className="dt__td nw" data-label="Reason text" data-w2="">{"Overbooking recovery"}</td>
                        <td className="dt__td nw" data-label="Type" data-w2="">{"Walk guest"}</td>
                        <td className="dt__td nw" data-label="Note required" data-w2="">{"Yes"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#FDS-P16-nshrec" aria-label="Edit NSHREC Overbooking recovery">{"Edit"}</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <nav className="pg" aria-label="Table pages">
                  <label className="pg-rpp">
                    <span>{"Rows per page"}</span>
                    <select className="pg-rpp__c" defaultValue={"10"}>
                      <option value="10">{"10"}</option>
                      <option value="15">{"15"}</option>
                      <option value="20">{"20"}</option>
                      <option value="25">{"25"}</option>
                      <option value="30">{"30"}</option>
                    </select>
                    <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#chevron-down" />
                    </svg>
                  </label>
                  <div className="pg-set pg-set--10">
                    <input className="pg-in" type="radio" name="pg1r10" id="pg1r10p1" defaultChecked={true} />
                    <label className="pg-n" htmlFor="pg1r10p1" aria-label="Page 1">{"1"}</label>
                    <input className="pg-in" type="radio" name="pg1r10" id="pg1r10p2" />
                    <label className="pg-n" htmlFor="pg1r10p2" aria-label="Page 2">{"2"}</label>
                    <input className="pg-in" type="radio" name="pg1r10" id="pg1r10p3" />
                    <label className="pg-n" htmlFor="pg1r10p3" aria-label="Page 3">{"3"}</label>
                    <input className="pg-in" type="radio" name="pg1r10" id="pg1r10p4" />
                    <label className="pg-n" htmlFor="pg1r10p4" aria-label="Page 4">{"4"}</label>
                    <input className="pg-in" type="radio" name="pg1r10" id="pg1r10p5" />
                    <label className="pg-n" htmlFor="pg1r10p5" aria-label="Page 5">{"5"}</label>
                    <input className="pg-in" type="radio" name="pg1r10" id="pg1r10p6" />
                    <label className="pg-n" htmlFor="pg1r10p6" aria-label="Page 6">{"6"}</label>
                    <input className="pg-in" type="radio" name="pg1r10" id="pg1r10p7" />
                    <label className="pg-n" htmlFor="pg1r10p7" aria-label="Page 7">{"7"}</label>
                    <span className="pg-info">
                      <span>
                        {"Showing "}
                        <b>{"1–10"}</b>
                        {" of 70"}
                      </span>
                      <span>
                        {"Showing "}
                        <b>{"11–20"}</b>
                        {" of 70"}
                      </span>
                      <span>
                        {"Showing "}
                        <b>{"21–30"}</b>
                        {" of 70"}
                      </span>
                      <span>
                        {"Showing "}
                        <b>{"31–40"}</b>
                        {" of 70"}
                      </span>
                      <span>
                        {"Showing "}
                        <b>{"41–50"}</b>
                        {" of 70"}
                      </span>
                      <span>
                        {"Showing "}
                        <b>{"51–60"}</b>
                        {" of 70"}
                      </span>
                      <span>
                        {"Showing "}
                        <b>{"61–70"}</b>
                        {" of 70"}
                      </span>
                    </span>
                    <span className="pg-prev">
                      <span className="pg-arr is-off">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-left" />
                        </svg>
                      </span>
                      <label className="pg-arr" htmlFor="pg1r10p1" title="Previous page">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-left" />
                        </svg>
                      </label>
                      <label className="pg-arr" htmlFor="pg1r10p2" title="Previous page">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-left" />
                        </svg>
                      </label>
                      <label className="pg-arr" htmlFor="pg1r10p3" title="Previous page">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-left" />
                        </svg>
                      </label>
                      <label className="pg-arr" htmlFor="pg1r10p4" title="Previous page">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-left" />
                        </svg>
                      </label>
                      <label className="pg-arr" htmlFor="pg1r10p5" title="Previous page">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-left" />
                        </svg>
                      </label>
                      <label className="pg-arr" htmlFor="pg1r10p6" title="Previous page">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-left" />
                        </svg>
                      </label>
                    </span>
                    <span className="pg-next">
                      <label className="pg-arr" htmlFor="pg1r10p2" title="Next page">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-right" />
                        </svg>
                      </label>
                      <label className="pg-arr" htmlFor="pg1r10p3" title="Next page">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-right" />
                        </svg>
                      </label>
                      <label className="pg-arr" htmlFor="pg1r10p4" title="Next page">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-right" />
                        </svg>
                      </label>
                      <label className="pg-arr" htmlFor="pg1r10p5" title="Next page">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-right" />
                        </svg>
                      </label>
                      <label className="pg-arr" htmlFor="pg1r10p6" title="Next page">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-right" />
                        </svg>
                      </label>
                      <label className="pg-arr" htmlFor="pg1r10p7" title="Next page">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-right" />
                        </svg>
                      </label>
                      <span className="pg-arr is-off">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-right" />
                        </svg>
                      </span>
                    </span>
                  </div>
                  <div className="pg-set pg-set--15">
                    <input className="pg-in" type="radio" name="pg1r15" id="pg1r15p1" defaultChecked={true} />
                    <label className="pg-n" htmlFor="pg1r15p1" aria-label="Page 1">{"1"}</label>
                    <input className="pg-in" type="radio" name="pg1r15" id="pg1r15p2" />
                    <label className="pg-n" htmlFor="pg1r15p2" aria-label="Page 2">{"2"}</label>
                    <input className="pg-in" type="radio" name="pg1r15" id="pg1r15p3" />
                    <label className="pg-n" htmlFor="pg1r15p3" aria-label="Page 3">{"3"}</label>
                    <input className="pg-in" type="radio" name="pg1r15" id="pg1r15p4" />
                    <label className="pg-n" htmlFor="pg1r15p4" aria-label="Page 4">{"4"}</label>
                    <input className="pg-in" type="radio" name="pg1r15" id="pg1r15p5" />
                    <label className="pg-n" htmlFor="pg1r15p5" aria-label="Page 5">{"5"}</label>
                    <span className="pg-info">
                      <span>
                        {"Showing "}
                        <b>{"1–15"}</b>
                        {" of 70"}
                      </span>
                      <span>
                        {"Showing "}
                        <b>{"16–30"}</b>
                        {" of 70"}
                      </span>
                      <span>
                        {"Showing "}
                        <b>{"31–45"}</b>
                        {" of 70"}
                      </span>
                      <span>
                        {"Showing "}
                        <b>{"46–60"}</b>
                        {" of 70"}
                      </span>
                      <span>
                        {"Showing "}
                        <b>{"61–70"}</b>
                        {" of 70"}
                      </span>
                    </span>
                    <span className="pg-prev">
                      <span className="pg-arr is-off">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-left" />
                        </svg>
                      </span>
                      <label className="pg-arr" htmlFor="pg1r15p1" title="Previous page">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-left" />
                        </svg>
                      </label>
                      <label className="pg-arr" htmlFor="pg1r15p2" title="Previous page">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-left" />
                        </svg>
                      </label>
                      <label className="pg-arr" htmlFor="pg1r15p3" title="Previous page">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-left" />
                        </svg>
                      </label>
                      <label className="pg-arr" htmlFor="pg1r15p4" title="Previous page">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-left" />
                        </svg>
                      </label>
                    </span>
                    <span className="pg-next">
                      <label className="pg-arr" htmlFor="pg1r15p2" title="Next page">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-right" />
                        </svg>
                      </label>
                      <label className="pg-arr" htmlFor="pg1r15p3" title="Next page">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-right" />
                        </svg>
                      </label>
                      <label className="pg-arr" htmlFor="pg1r15p4" title="Next page">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-right" />
                        </svg>
                      </label>
                      <label className="pg-arr" htmlFor="pg1r15p5" title="Next page">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-right" />
                        </svg>
                      </label>
                      <span className="pg-arr is-off">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-right" />
                        </svg>
                      </span>
                    </span>
                  </div>
                  <div className="pg-set pg-set--20">
                    <input className="pg-in" type="radio" name="pg1r20" id="pg1r20p1" defaultChecked={true} />
                    <label className="pg-n" htmlFor="pg1r20p1" aria-label="Page 1">{"1"}</label>
                    <input className="pg-in" type="radio" name="pg1r20" id="pg1r20p2" />
                    <label className="pg-n" htmlFor="pg1r20p2" aria-label="Page 2">{"2"}</label>
                    <input className="pg-in" type="radio" name="pg1r20" id="pg1r20p3" />
                    <label className="pg-n" htmlFor="pg1r20p3" aria-label="Page 3">{"3"}</label>
                    <input className="pg-in" type="radio" name="pg1r20" id="pg1r20p4" />
                    <label className="pg-n" htmlFor="pg1r20p4" aria-label="Page 4">{"4"}</label>
                    <span className="pg-info">
                      <span>
                        {"Showing "}
                        <b>{"1–20"}</b>
                        {" of 70"}
                      </span>
                      <span>
                        {"Showing "}
                        <b>{"21–40"}</b>
                        {" of 70"}
                      </span>
                      <span>
                        {"Showing "}
                        <b>{"41–60"}</b>
                        {" of 70"}
                      </span>
                      <span>
                        {"Showing "}
                        <b>{"61–70"}</b>
                        {" of 70"}
                      </span>
                    </span>
                    <span className="pg-prev">
                      <span className="pg-arr is-off">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-left" />
                        </svg>
                      </span>
                      <label className="pg-arr" htmlFor="pg1r20p1" title="Previous page">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-left" />
                        </svg>
                      </label>
                      <label className="pg-arr" htmlFor="pg1r20p2" title="Previous page">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-left" />
                        </svg>
                      </label>
                      <label className="pg-arr" htmlFor="pg1r20p3" title="Previous page">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-left" />
                        </svg>
                      </label>
                    </span>
                    <span className="pg-next">
                      <label className="pg-arr" htmlFor="pg1r20p2" title="Next page">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-right" />
                        </svg>
                      </label>
                      <label className="pg-arr" htmlFor="pg1r20p3" title="Next page">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-right" />
                        </svg>
                      </label>
                      <label className="pg-arr" htmlFor="pg1r20p4" title="Next page">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-right" />
                        </svg>
                      </label>
                      <span className="pg-arr is-off">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-right" />
                        </svg>
                      </span>
                    </span>
                  </div>
                  <div className="pg-set pg-set--25">
                    <input className="pg-in" type="radio" name="pg1r25" id="pg1r25p1" defaultChecked={true} />
                    <label className="pg-n" htmlFor="pg1r25p1" aria-label="Page 1">{"1"}</label>
                    <input className="pg-in" type="radio" name="pg1r25" id="pg1r25p2" />
                    <label className="pg-n" htmlFor="pg1r25p2" aria-label="Page 2">{"2"}</label>
                    <input className="pg-in" type="radio" name="pg1r25" id="pg1r25p3" />
                    <label className="pg-n" htmlFor="pg1r25p3" aria-label="Page 3">{"3"}</label>
                    <span className="pg-info">
                      <span>
                        {"Showing "}
                        <b>{"1–25"}</b>
                        {" of 70"}
                      </span>
                      <span>
                        {"Showing "}
                        <b>{"26–50"}</b>
                        {" of 70"}
                      </span>
                      <span>
                        {"Showing "}
                        <b>{"51–70"}</b>
                        {" of 70"}
                      </span>
                    </span>
                    <span className="pg-prev">
                      <span className="pg-arr is-off">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-left" />
                        </svg>
                      </span>
                      <label className="pg-arr" htmlFor="pg1r25p1" title="Previous page">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-left" />
                        </svg>
                      </label>
                      <label className="pg-arr" htmlFor="pg1r25p2" title="Previous page">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-left" />
                        </svg>
                      </label>
                    </span>
                    <span className="pg-next">
                      <label className="pg-arr" htmlFor="pg1r25p2" title="Next page">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-right" />
                        </svg>
                      </label>
                      <label className="pg-arr" htmlFor="pg1r25p3" title="Next page">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-right" />
                        </svg>
                      </label>
                      <span className="pg-arr is-off">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-right" />
                        </svg>
                      </span>
                    </span>
                  </div>
                  <div className="pg-set pg-set--30">
                    <input className="pg-in" type="radio" name="pg1r30" id="pg1r30p1" defaultChecked={true} />
                    <label className="pg-n" htmlFor="pg1r30p1" aria-label="Page 1">{"1"}</label>
                    <input className="pg-in" type="radio" name="pg1r30" id="pg1r30p2" />
                    <label className="pg-n" htmlFor="pg1r30p2" aria-label="Page 2">{"2"}</label>
                    <input className="pg-in" type="radio" name="pg1r30" id="pg1r30p3" />
                    <label className="pg-n" htmlFor="pg1r30p3" aria-label="Page 3">{"3"}</label>
                    <span className="pg-info">
                      <span>
                        {"Showing "}
                        <b>{"1–30"}</b>
                        {" of 70"}
                      </span>
                      <span>
                        {"Showing "}
                        <b>{"31–60"}</b>
                        {" of 70"}
                      </span>
                      <span>
                        {"Showing "}
                        <b>{"61–70"}</b>
                        {" of 70"}
                      </span>
                    </span>
                    <span className="pg-prev">
                      <span className="pg-arr is-off">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-left" />
                        </svg>
                      </span>
                      <label className="pg-arr" htmlFor="pg1r30p1" title="Previous page">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-left" />
                        </svg>
                      </label>
                      <label className="pg-arr" htmlFor="pg1r30p2" title="Previous page">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-left" />
                        </svg>
                      </label>
                    </span>
                    <span className="pg-next">
                      <label className="pg-arr" htmlFor="pg1r30p2" title="Next page">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-right" />
                        </svg>
                      </label>
                      <label className="pg-arr" htmlFor="pg1r30p3" title="Next page">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-right" />
                        </svg>
                      </label>
                      <span className="pg-arr is-off">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-right" />
                        </svg>
                      </span>
                    </span>
                  </div>
                </nav>
              </div>
              <div className="modal modal--full" id="FDS-P16-guestreq" data-code="FDS-P16" role="dialog" aria-modal="true" aria-labelledby="FDS-P16-guestreq-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P16-guestreq-t">{"Reason code: GUESTREQ Guest requested a change"}</h2>
                      <p className="modal__desc">{"Changes are written to the setup audit log (FDS-X07)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="f382">
                          {"Reason type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f382" name="type" required={true} defaultValue={"Room move"}>
                            <option value="Room move">{"Room move"}</option>
                            <option value="Upgrade">{"Upgrade"}</option>
                            <option value="Early departure">{"Early departure"}</option>
                            <option value="Late check-out waiver">{"Late check-out waiver"}</option>
                            <option value="Early check-in waiver">{"Early check-in waiver"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Void">{"Void"}</option>
                            <option value="Refund">{"Refund"}</option>
                            <option value="Re-open bill">{"Re-open bill"}</option>
                            <option value="Credit note">{"Credit note"}</option>
                            <option value="Dirty room override">{"Dirty room override"}</option>
                            <option value="Cash difference">{"Cash difference"}</option>
                            <option value="Cancel check-in">{"Cancel check-in"}</option>
                            <option value="Reinstate check-out">{"Reinstate check-out"}</option>
                            <option value="Rate change">{"Rate change"}</option>
                            <option value="Out of order">{"Out of order"}</option>
                            <option value="Out of service">{"Out of service"}</option>
                            <option value="Key re-issue">{"Key re-issue"}</option>
                            <option value="Paymaster carry forward">{"Paymaster carry forward"}</option>
                            <option value="Lost & found disposal">{"Lost & found disposal"}</option>
                            <option value="Visitor denied">{"Visitor denied"}</option>
                            <option value="Walk guest">{"Walk guest"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f383">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f383" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,10}"} maxLength="10" defaultValue={"GUESTREQ"} />
                        <span className="field__hint">{"Unique within the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f384">
                          {"Text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f384" type="text" name="text" required={true} maxLength="60" defaultValue={"Guest requested a change"} />
                        <span className="field__hint">{"1–60 characters"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f385">
                          <input id="f385" type="checkbox" role="switch" name="note" />
                          <span className="sw__track" />
                          {"Note required"}
                        </label>
                        <span className="field__hint">{"Free text on top of the reason"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f386">
                          <input id="f386" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-19-guestreq">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-19-guestreq" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-19-guestreq-t">
                <a className="modal__backdrop" href="#FDS-P16-guestreq" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-19-guestreq-t">{"Deactivate GUESTREQ Guest requested a change?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P16-guestreq" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. GUESTREQ Guest requested a change will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P16-guestreq">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P16-noise" data-code="FDS-P16" role="dialog" aria-modal="true" aria-labelledby="FDS-P16-noise-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P16-noise-t">{"Reason code: NOISE Noise complaint"}</h2>
                      <p className="modal__desc">{"Changes are written to the setup audit log (FDS-X07)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="f387">
                          {"Reason type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f387" name="type" required={true} defaultValue={"Room move"}>
                            <option value="Room move">{"Room move"}</option>
                            <option value="Upgrade">{"Upgrade"}</option>
                            <option value="Early departure">{"Early departure"}</option>
                            <option value="Late check-out waiver">{"Late check-out waiver"}</option>
                            <option value="Early check-in waiver">{"Early check-in waiver"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Void">{"Void"}</option>
                            <option value="Refund">{"Refund"}</option>
                            <option value="Re-open bill">{"Re-open bill"}</option>
                            <option value="Credit note">{"Credit note"}</option>
                            <option value="Dirty room override">{"Dirty room override"}</option>
                            <option value="Cash difference">{"Cash difference"}</option>
                            <option value="Cancel check-in">{"Cancel check-in"}</option>
                            <option value="Reinstate check-out">{"Reinstate check-out"}</option>
                            <option value="Rate change">{"Rate change"}</option>
                            <option value="Out of order">{"Out of order"}</option>
                            <option value="Out of service">{"Out of service"}</option>
                            <option value="Key re-issue">{"Key re-issue"}</option>
                            <option value="Paymaster carry forward">{"Paymaster carry forward"}</option>
                            <option value="Lost & found disposal">{"Lost & found disposal"}</option>
                            <option value="Visitor denied">{"Visitor denied"}</option>
                            <option value="Walk guest">{"Walk guest"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f388">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f388" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,10}"} maxLength="10" defaultValue={"NOISE"} />
                        <span className="field__hint">{"Unique within the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f389">
                          {"Text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f389" type="text" name="text" required={true} maxLength="60" defaultValue={"Noise complaint"} />
                        <span className="field__hint">{"1–60 characters"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f390">
                          <input id="f390" type="checkbox" role="switch" name="note" />
                          <span className="sw__track" />
                          {"Note required"}
                        </label>
                        <span className="field__hint">{"Free text on top of the reason"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f391">
                          <input id="f391" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-19-noise">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-19-noise" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-19-noise-t">
                <a className="modal__backdrop" href="#FDS-P16-noise" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-19-noise-t">{"Deactivate NOISE Noise complaint?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P16-noise" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. NOISE Noise complaint will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P16-noise">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P16-maint" data-code="FDS-P16" role="dialog" aria-modal="true" aria-labelledby="FDS-P16-maint-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P16-maint-t">{"Reason code: MAINT AC / maintenance problem"}</h2>
                      <p className="modal__desc">{"Changes are written to the setup audit log (FDS-X07)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="f392">
                          {"Reason type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f392" name="type" required={true} defaultValue={"Room move"}>
                            <option value="Room move">{"Room move"}</option>
                            <option value="Upgrade">{"Upgrade"}</option>
                            <option value="Early departure">{"Early departure"}</option>
                            <option value="Late check-out waiver">{"Late check-out waiver"}</option>
                            <option value="Early check-in waiver">{"Early check-in waiver"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Void">{"Void"}</option>
                            <option value="Refund">{"Refund"}</option>
                            <option value="Re-open bill">{"Re-open bill"}</option>
                            <option value="Credit note">{"Credit note"}</option>
                            <option value="Dirty room override">{"Dirty room override"}</option>
                            <option value="Cash difference">{"Cash difference"}</option>
                            <option value="Cancel check-in">{"Cancel check-in"}</option>
                            <option value="Reinstate check-out">{"Reinstate check-out"}</option>
                            <option value="Rate change">{"Rate change"}</option>
                            <option value="Out of order">{"Out of order"}</option>
                            <option value="Out of service">{"Out of service"}</option>
                            <option value="Key re-issue">{"Key re-issue"}</option>
                            <option value="Paymaster carry forward">{"Paymaster carry forward"}</option>
                            <option value="Lost & found disposal">{"Lost & found disposal"}</option>
                            <option value="Visitor denied">{"Visitor denied"}</option>
                            <option value="Walk guest">{"Walk guest"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f393">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f393" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,10}"} maxLength="10" defaultValue={"MAINT"} />
                        <span className="field__hint">{"Unique within the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f394">
                          {"Text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f394" type="text" name="text" required={true} maxLength="60" defaultValue={"AC / maintenance problem"} />
                        <span className="field__hint">{"1–60 characters"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f395">
                          <input id="f395" type="checkbox" role="switch" name="note" />
                          <span className="sw__track" />
                          {"Note required"}
                        </label>
                        <span className="field__hint">{"Free text on top of the reason"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f396">
                          <input id="f396" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-19-maint">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-19-maint" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-19-maint-t">
                <a className="modal__backdrop" href="#FDS-P16-maint" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-19-maint-t">{"Deactivate MAINT AC / maintenance problem?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P16-maint" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. MAINT AC / maintenance problem will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P16-maint">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P16-viewreq" data-code="FDS-P16" role="dialog" aria-modal="true" aria-labelledby="FDS-P16-viewreq-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P16-viewreq-t">{"Reason code: VIEWREQ Better view requested"}</h2>
                      <p className="modal__desc">{"Changes are written to the setup audit log (FDS-X07)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="f397">
                          {"Reason type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f397" name="type" required={true} defaultValue={"Room move"}>
                            <option value="Room move">{"Room move"}</option>
                            <option value="Upgrade">{"Upgrade"}</option>
                            <option value="Early departure">{"Early departure"}</option>
                            <option value="Late check-out waiver">{"Late check-out waiver"}</option>
                            <option value="Early check-in waiver">{"Early check-in waiver"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Void">{"Void"}</option>
                            <option value="Refund">{"Refund"}</option>
                            <option value="Re-open bill">{"Re-open bill"}</option>
                            <option value="Credit note">{"Credit note"}</option>
                            <option value="Dirty room override">{"Dirty room override"}</option>
                            <option value="Cash difference">{"Cash difference"}</option>
                            <option value="Cancel check-in">{"Cancel check-in"}</option>
                            <option value="Reinstate check-out">{"Reinstate check-out"}</option>
                            <option value="Rate change">{"Rate change"}</option>
                            <option value="Out of order">{"Out of order"}</option>
                            <option value="Out of service">{"Out of service"}</option>
                            <option value="Key re-issue">{"Key re-issue"}</option>
                            <option value="Paymaster carry forward">{"Paymaster carry forward"}</option>
                            <option value="Lost & found disposal">{"Lost & found disposal"}</option>
                            <option value="Visitor denied">{"Visitor denied"}</option>
                            <option value="Walk guest">{"Walk guest"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f398">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f398" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,10}"} maxLength="10" defaultValue={"VIEWREQ"} />
                        <span className="field__hint">{"Unique within the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f399">
                          {"Text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f399" type="text" name="text" required={true} maxLength="60" defaultValue={"Better view requested"} />
                        <span className="field__hint">{"1–60 characters"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f400">
                          <input id="f400" type="checkbox" role="switch" name="note" />
                          <span className="sw__track" />
                          {"Note required"}
                        </label>
                        <span className="field__hint">{"Free text on top of the reason"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f401">
                          <input id="f401" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-19-viewreq">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-19-viewreq" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-19-viewreq-t">
                <a className="modal__backdrop" href="#FDS-P16-viewreq" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-19-viewreq-t">{"Deactivate VIEWREQ Better view requested?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P16-viewreq" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. VIEWREQ Better view requested will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P16-viewreq">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P16-vipupg" data-code="FDS-P16" role="dialog" aria-modal="true" aria-labelledby="FDS-P16-vipupg-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P16-vipupg-t">{"Reason code: VIPUPG VIP / Aviv Club upgrade"}</h2>
                      <p className="modal__desc">{"Changes are written to the setup audit log (FDS-X07)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="f402">
                          {"Reason type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f402" name="type" required={true} defaultValue={"Upgrade"}>
                            <option value="Room move">{"Room move"}</option>
                            <option value="Upgrade">{"Upgrade"}</option>
                            <option value="Early departure">{"Early departure"}</option>
                            <option value="Late check-out waiver">{"Late check-out waiver"}</option>
                            <option value="Early check-in waiver">{"Early check-in waiver"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Void">{"Void"}</option>
                            <option value="Refund">{"Refund"}</option>
                            <option value="Re-open bill">{"Re-open bill"}</option>
                            <option value="Credit note">{"Credit note"}</option>
                            <option value="Dirty room override">{"Dirty room override"}</option>
                            <option value="Cash difference">{"Cash difference"}</option>
                            <option value="Cancel check-in">{"Cancel check-in"}</option>
                            <option value="Reinstate check-out">{"Reinstate check-out"}</option>
                            <option value="Rate change">{"Rate change"}</option>
                            <option value="Out of order">{"Out of order"}</option>
                            <option value="Out of service">{"Out of service"}</option>
                            <option value="Key re-issue">{"Key re-issue"}</option>
                            <option value="Paymaster carry forward">{"Paymaster carry forward"}</option>
                            <option value="Lost & found disposal">{"Lost & found disposal"}</option>
                            <option value="Visitor denied">{"Visitor denied"}</option>
                            <option value="Walk guest">{"Walk guest"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f403">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f403" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,10}"} maxLength="10" defaultValue={"VIPUPG"} />
                        <span className="field__hint">{"Unique within the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f404">
                          {"Text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f404" type="text" name="text" required={true} maxLength="60" defaultValue={"VIP / Aviv Club upgrade"} />
                        <span className="field__hint">{"1–60 characters"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f405">
                          <input id="f405" type="checkbox" role="switch" name="note" />
                          <span className="sw__track" />
                          {"Note required"}
                        </label>
                        <span className="field__hint">{"Free text on top of the reason"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f406">
                          <input id="f406" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-19-vipupg">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-19-vipupg" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-19-vipupg-t">
                <a className="modal__backdrop" href="#FDS-P16-vipupg" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-19-vipupg-t">{"Deactivate VIPUPG VIP / Aviv Club upgrade?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P16-vipupg" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. VIPUPG VIP / Aviv Club upgrade will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P16-vipupg">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P16-noroom" data-code="FDS-P16" role="dialog" aria-modal="true" aria-labelledby="FDS-P16-noroom-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P16-noroom-t">{"Reason code: NOROOM Booked room type not available"}</h2>
                      <p className="modal__desc">{"Changes are written to the setup audit log (FDS-X07)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="f407">
                          {"Reason type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f407" name="type" required={true} defaultValue={"Upgrade"}>
                            <option value="Room move">{"Room move"}</option>
                            <option value="Upgrade">{"Upgrade"}</option>
                            <option value="Early departure">{"Early departure"}</option>
                            <option value="Late check-out waiver">{"Late check-out waiver"}</option>
                            <option value="Early check-in waiver">{"Early check-in waiver"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Void">{"Void"}</option>
                            <option value="Refund">{"Refund"}</option>
                            <option value="Re-open bill">{"Re-open bill"}</option>
                            <option value="Credit note">{"Credit note"}</option>
                            <option value="Dirty room override">{"Dirty room override"}</option>
                            <option value="Cash difference">{"Cash difference"}</option>
                            <option value="Cancel check-in">{"Cancel check-in"}</option>
                            <option value="Reinstate check-out">{"Reinstate check-out"}</option>
                            <option value="Rate change">{"Rate change"}</option>
                            <option value="Out of order">{"Out of order"}</option>
                            <option value="Out of service">{"Out of service"}</option>
                            <option value="Key re-issue">{"Key re-issue"}</option>
                            <option value="Paymaster carry forward">{"Paymaster carry forward"}</option>
                            <option value="Lost & found disposal">{"Lost & found disposal"}</option>
                            <option value="Visitor denied">{"Visitor denied"}</option>
                            <option value="Walk guest">{"Walk guest"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f408">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f408" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,10}"} maxLength="10" defaultValue={"NOROOM"} />
                        <span className="field__hint">{"Unique within the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f409">
                          {"Text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f409" type="text" name="text" required={true} maxLength="60" defaultValue={"Booked room type not available"} />
                        <span className="field__hint">{"1–60 characters"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f410">
                          <input id="f410" type="checkbox" role="switch" name="note" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Note required"}
                        </label>
                        <span className="field__hint">{"Free text on top of the reason"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f411">
                          <input id="f411" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-19-noroom">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-19-noroom" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-19-noroom-t">
                <a className="modal__backdrop" href="#FDS-P16-noroom" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-19-noroom-t">{"Deactivate NOROOM Booked room type not available?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P16-noroom" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. NOROOM Booked room type not available will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P16-noroom">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P16-emerg" data-code="FDS-P16" role="dialog" aria-modal="true" aria-labelledby="FDS-P16-emerg-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P16-emerg-t">{"Reason code: EMERG Emergency"}</h2>
                      <p className="modal__desc">{"Changes are written to the setup audit log (FDS-X07)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="f412">
                          {"Reason type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f412" name="type" required={true} defaultValue={"Early departure"}>
                            <option value="Room move">{"Room move"}</option>
                            <option value="Upgrade">{"Upgrade"}</option>
                            <option value="Early departure">{"Early departure"}</option>
                            <option value="Late check-out waiver">{"Late check-out waiver"}</option>
                            <option value="Early check-in waiver">{"Early check-in waiver"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Void">{"Void"}</option>
                            <option value="Refund">{"Refund"}</option>
                            <option value="Re-open bill">{"Re-open bill"}</option>
                            <option value="Credit note">{"Credit note"}</option>
                            <option value="Dirty room override">{"Dirty room override"}</option>
                            <option value="Cash difference">{"Cash difference"}</option>
                            <option value="Cancel check-in">{"Cancel check-in"}</option>
                            <option value="Reinstate check-out">{"Reinstate check-out"}</option>
                            <option value="Rate change">{"Rate change"}</option>
                            <option value="Out of order">{"Out of order"}</option>
                            <option value="Out of service">{"Out of service"}</option>
                            <option value="Key re-issue">{"Key re-issue"}</option>
                            <option value="Paymaster carry forward">{"Paymaster carry forward"}</option>
                            <option value="Lost & found disposal">{"Lost & found disposal"}</option>
                            <option value="Visitor denied">{"Visitor denied"}</option>
                            <option value="Walk guest">{"Walk guest"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f413">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f413" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,10}"} maxLength="10" defaultValue={"EMERG"} />
                        <span className="field__hint">{"Unique within the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f414">
                          {"Text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f414" type="text" name="text" required={true} maxLength="60" defaultValue={"Emergency"} />
                        <span className="field__hint">{"1–60 characters"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f415">
                          <input id="f415" type="checkbox" role="switch" name="note" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Note required"}
                        </label>
                        <span className="field__hint">{"Free text on top of the reason"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f416">
                          <input id="f416" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-19-emerg">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-19-emerg" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-19-emerg-t">
                <a className="modal__backdrop" href="#FDS-P16-emerg" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-19-emerg-t">{"Deactivate EMERG Emergency?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P16-emerg" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. EMERG Emergency will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P16-emerg">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P16-chgplan" data-code="FDS-P16" role="dialog" aria-modal="true" aria-labelledby="FDS-P16-chgplan-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P16-chgplan-t">{"Reason code: CHGPLAN Change of plans"}</h2>
                      <p className="modal__desc">{"Changes are written to the setup audit log (FDS-X07)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="f417">
                          {"Reason type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f417" name="type" required={true} defaultValue={"Early departure"}>
                            <option value="Room move">{"Room move"}</option>
                            <option value="Upgrade">{"Upgrade"}</option>
                            <option value="Early departure">{"Early departure"}</option>
                            <option value="Late check-out waiver">{"Late check-out waiver"}</option>
                            <option value="Early check-in waiver">{"Early check-in waiver"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Void">{"Void"}</option>
                            <option value="Refund">{"Refund"}</option>
                            <option value="Re-open bill">{"Re-open bill"}</option>
                            <option value="Credit note">{"Credit note"}</option>
                            <option value="Dirty room override">{"Dirty room override"}</option>
                            <option value="Cash difference">{"Cash difference"}</option>
                            <option value="Cancel check-in">{"Cancel check-in"}</option>
                            <option value="Reinstate check-out">{"Reinstate check-out"}</option>
                            <option value="Rate change">{"Rate change"}</option>
                            <option value="Out of order">{"Out of order"}</option>
                            <option value="Out of service">{"Out of service"}</option>
                            <option value="Key re-issue">{"Key re-issue"}</option>
                            <option value="Paymaster carry forward">{"Paymaster carry forward"}</option>
                            <option value="Lost & found disposal">{"Lost & found disposal"}</option>
                            <option value="Visitor denied">{"Visitor denied"}</option>
                            <option value="Walk guest">{"Walk guest"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f418">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f418" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,10}"} maxLength="10" defaultValue={"CHGPLAN"} />
                        <span className="field__hint">{"Unique within the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f419">
                          {"Text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f419" type="text" name="text" required={true} maxLength="60" defaultValue={"Change of plans"} />
                        <span className="field__hint">{"1–60 characters"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f420">
                          <input id="f420" type="checkbox" role="switch" name="note" />
                          <span className="sw__track" />
                          {"Note required"}
                        </label>
                        <span className="field__hint">{"Free text on top of the reason"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f421">
                          <input id="f421" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-19-chgplan">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-19-chgplan" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-19-chgplan-t">
                <a className="modal__backdrop" href="#FDS-P16-chgplan" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-19-chgplan-t">{"Deactivate CHGPLAN Change of plans?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P16-chgplan" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. CHGPLAN Change of plans will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P16-chgplan">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P16-loyalty" data-code="FDS-P16" role="dialog" aria-modal="true" aria-labelledby="FDS-P16-loyalty-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P16-loyalty-t">{"Reason code: LOYALTY Aviv Club benefit"}</h2>
                      <p className="modal__desc">{"Changes are written to the setup audit log (FDS-X07)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="f422">
                          {"Reason type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f422" name="type" required={true} defaultValue={"Late check-out waiver"}>
                            <option value="Room move">{"Room move"}</option>
                            <option value="Upgrade">{"Upgrade"}</option>
                            <option value="Early departure">{"Early departure"}</option>
                            <option value="Late check-out waiver">{"Late check-out waiver"}</option>
                            <option value="Early check-in waiver">{"Early check-in waiver"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Void">{"Void"}</option>
                            <option value="Refund">{"Refund"}</option>
                            <option value="Re-open bill">{"Re-open bill"}</option>
                            <option value="Credit note">{"Credit note"}</option>
                            <option value="Dirty room override">{"Dirty room override"}</option>
                            <option value="Cash difference">{"Cash difference"}</option>
                            <option value="Cancel check-in">{"Cancel check-in"}</option>
                            <option value="Reinstate check-out">{"Reinstate check-out"}</option>
                            <option value="Rate change">{"Rate change"}</option>
                            <option value="Out of order">{"Out of order"}</option>
                            <option value="Out of service">{"Out of service"}</option>
                            <option value="Key re-issue">{"Key re-issue"}</option>
                            <option value="Paymaster carry forward">{"Paymaster carry forward"}</option>
                            <option value="Lost & found disposal">{"Lost & found disposal"}</option>
                            <option value="Visitor denied">{"Visitor denied"}</option>
                            <option value="Walk guest">{"Walk guest"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f423">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f423" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,10}"} maxLength="10" defaultValue={"LOYALTY"} />
                        <span className="field__hint">{"Unique within the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f424">
                          {"Text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f424" type="text" name="text" required={true} maxLength="60" defaultValue={"Aviv Club benefit"} />
                        <span className="field__hint">{"1–60 characters"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f425">
                          <input id="f425" type="checkbox" role="switch" name="note" />
                          <span className="sw__track" />
                          {"Note required"}
                        </label>
                        <span className="field__hint">{"Free text on top of the reason"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f426">
                          <input id="f426" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-19-loyalty">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-19-loyalty" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-19-loyalty-t">
                <a className="modal__backdrop" href="#FDS-P16-loyalty" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-19-loyalty-t">{"Deactivate LOYALTY Aviv Club benefit?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P16-loyalty" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. LOYALTY Aviv Club benefit will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P16-loyalty">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P16-lateflt" data-code="FDS-P16" role="dialog" aria-modal="true" aria-labelledby="FDS-P16-lateflt-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P16-lateflt-t">{"Reason code: LATEFLT Late flight"}</h2>
                      <p className="modal__desc">{"Changes are written to the setup audit log (FDS-X07)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="f427">
                          {"Reason type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f427" name="type" required={true} defaultValue={"Late check-out waiver"}>
                            <option value="Room move">{"Room move"}</option>
                            <option value="Upgrade">{"Upgrade"}</option>
                            <option value="Early departure">{"Early departure"}</option>
                            <option value="Late check-out waiver">{"Late check-out waiver"}</option>
                            <option value="Early check-in waiver">{"Early check-in waiver"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Void">{"Void"}</option>
                            <option value="Refund">{"Refund"}</option>
                            <option value="Re-open bill">{"Re-open bill"}</option>
                            <option value="Credit note">{"Credit note"}</option>
                            <option value="Dirty room override">{"Dirty room override"}</option>
                            <option value="Cash difference">{"Cash difference"}</option>
                            <option value="Cancel check-in">{"Cancel check-in"}</option>
                            <option value="Reinstate check-out">{"Reinstate check-out"}</option>
                            <option value="Rate change">{"Rate change"}</option>
                            <option value="Out of order">{"Out of order"}</option>
                            <option value="Out of service">{"Out of service"}</option>
                            <option value="Key re-issue">{"Key re-issue"}</option>
                            <option value="Paymaster carry forward">{"Paymaster carry forward"}</option>
                            <option value="Lost & found disposal">{"Lost & found disposal"}</option>
                            <option value="Visitor denied">{"Visitor denied"}</option>
                            <option value="Walk guest">{"Walk guest"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f428">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f428" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,10}"} maxLength="10" defaultValue={"LATEFLT"} />
                        <span className="field__hint">{"Unique within the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f429">
                          {"Text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f429" type="text" name="text" required={true} maxLength="60" defaultValue={"Late flight"} />
                        <span className="field__hint">{"1–60 characters"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f430">
                          <input id="f430" type="checkbox" role="switch" name="note" />
                          <span className="sw__track" />
                          {"Note required"}
                        </label>
                        <span className="field__hint">{"Free text on top of the reason"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f431">
                          <input id="f431" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-19-lateflt">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-19-lateflt" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-19-lateflt-t">
                <a className="modal__backdrop" href="#FDS-P16-lateflt" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-19-lateflt-t">{"Deactivate LATEFLT Late flight?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P16-lateflt" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. LATEFLT Late flight will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P16-lateflt">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P16-roomrdy" data-code="FDS-P16" role="dialog" aria-modal="true" aria-labelledby="FDS-P16-roomrdy-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P16-roomrdy-t">{"Reason code: ROOMRDY Room ready early"}</h2>
                      <p className="modal__desc">{"Changes are written to the setup audit log (FDS-X07)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="f432">
                          {"Reason type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f432" name="type" required={true} defaultValue={"Early check-in waiver"}>
                            <option value="Room move">{"Room move"}</option>
                            <option value="Upgrade">{"Upgrade"}</option>
                            <option value="Early departure">{"Early departure"}</option>
                            <option value="Late check-out waiver">{"Late check-out waiver"}</option>
                            <option value="Early check-in waiver">{"Early check-in waiver"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Void">{"Void"}</option>
                            <option value="Refund">{"Refund"}</option>
                            <option value="Re-open bill">{"Re-open bill"}</option>
                            <option value="Credit note">{"Credit note"}</option>
                            <option value="Dirty room override">{"Dirty room override"}</option>
                            <option value="Cash difference">{"Cash difference"}</option>
                            <option value="Cancel check-in">{"Cancel check-in"}</option>
                            <option value="Reinstate check-out">{"Reinstate check-out"}</option>
                            <option value="Rate change">{"Rate change"}</option>
                            <option value="Out of order">{"Out of order"}</option>
                            <option value="Out of service">{"Out of service"}</option>
                            <option value="Key re-issue">{"Key re-issue"}</option>
                            <option value="Paymaster carry forward">{"Paymaster carry forward"}</option>
                            <option value="Lost & found disposal">{"Lost & found disposal"}</option>
                            <option value="Visitor denied">{"Visitor denied"}</option>
                            <option value="Walk guest">{"Walk guest"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f433">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f433" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,10}"} maxLength="10" defaultValue={"ROOMRDY"} />
                        <span className="field__hint">{"Unique within the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f434">
                          {"Text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f434" type="text" name="text" required={true} maxLength="60" defaultValue={"Room ready early"} />
                        <span className="field__hint">{"1–60 characters"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f435">
                          <input id="f435" type="checkbox" role="switch" name="note" />
                          <span className="sw__track" />
                          {"Note required"}
                        </label>
                        <span className="field__hint">{"Free text on top of the reason"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f436">
                          <input id="f436" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-19-roomrdy">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-19-roomrdy" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-19-roomrdy-t">
                <a className="modal__backdrop" href="#FDS-P16-roomrdy" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-19-roomrdy-t">{"Deactivate ROOMRDY Room ready early?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P16-roomrdy" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. ROOMRDY Room ready early will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P16-roomrdy">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P16-loyal2" data-code="FDS-P16" role="dialog" aria-modal="true" aria-labelledby="FDS-P16-loyal2-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P16-loyal2-t">{"Reason code: LOYAL2 VIP / Aviv Club benefit"}</h2>
                      <p className="modal__desc">{"Changes are written to the setup audit log (FDS-X07)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="f437">
                          {"Reason type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f437" name="type" required={true} defaultValue={"Early check-in waiver"}>
                            <option value="Room move">{"Room move"}</option>
                            <option value="Upgrade">{"Upgrade"}</option>
                            <option value="Early departure">{"Early departure"}</option>
                            <option value="Late check-out waiver">{"Late check-out waiver"}</option>
                            <option value="Early check-in waiver">{"Early check-in waiver"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Void">{"Void"}</option>
                            <option value="Refund">{"Refund"}</option>
                            <option value="Re-open bill">{"Re-open bill"}</option>
                            <option value="Credit note">{"Credit note"}</option>
                            <option value="Dirty room override">{"Dirty room override"}</option>
                            <option value="Cash difference">{"Cash difference"}</option>
                            <option value="Cancel check-in">{"Cancel check-in"}</option>
                            <option value="Reinstate check-out">{"Reinstate check-out"}</option>
                            <option value="Rate change">{"Rate change"}</option>
                            <option value="Out of order">{"Out of order"}</option>
                            <option value="Out of service">{"Out of service"}</option>
                            <option value="Key re-issue">{"Key re-issue"}</option>
                            <option value="Paymaster carry forward">{"Paymaster carry forward"}</option>
                            <option value="Lost & found disposal">{"Lost & found disposal"}</option>
                            <option value="Visitor denied">{"Visitor denied"}</option>
                            <option value="Walk guest">{"Walk guest"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f438">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f438" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,10}"} maxLength="10" defaultValue={"LOYAL2"} />
                        <span className="field__hint">{"Unique within the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f439">
                          {"Text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f439" type="text" name="text" required={true} maxLength="60" defaultValue={"VIP / Aviv Club benefit"} />
                        <span className="field__hint">{"1–60 characters"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f440">
                          <input id="f440" type="checkbox" role="switch" name="note" />
                          <span className="sw__track" />
                          {"Note required"}
                        </label>
                        <span className="field__hint">{"Free text on top of the reason"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f441">
                          <input id="f441" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-19-loyal2">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-19-loyal2" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-19-loyal2-t">
                <a className="modal__backdrop" href="#FDS-P16-loyal2" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-19-loyal2-t">{"Deactivate LOYAL2 VIP / Aviv Club benefit?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P16-loyal2" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. LOYAL2 VIP / Aviv Club benefit will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P16-loyal2">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P16-servrec" data-code="FDS-P16" role="dialog" aria-modal="true" aria-labelledby="FDS-P16-servrec-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P16-servrec-t">{"Reason code: SERVREC Service recovery"}</h2>
                      <p className="modal__desc">{"Changes are written to the setup audit log (FDS-X07)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="f442">
                          {"Reason type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f442" name="type" required={true} defaultValue={"Allowance"}>
                            <option value="Room move">{"Room move"}</option>
                            <option value="Upgrade">{"Upgrade"}</option>
                            <option value="Early departure">{"Early departure"}</option>
                            <option value="Late check-out waiver">{"Late check-out waiver"}</option>
                            <option value="Early check-in waiver">{"Early check-in waiver"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Void">{"Void"}</option>
                            <option value="Refund">{"Refund"}</option>
                            <option value="Re-open bill">{"Re-open bill"}</option>
                            <option value="Credit note">{"Credit note"}</option>
                            <option value="Dirty room override">{"Dirty room override"}</option>
                            <option value="Cash difference">{"Cash difference"}</option>
                            <option value="Cancel check-in">{"Cancel check-in"}</option>
                            <option value="Reinstate check-out">{"Reinstate check-out"}</option>
                            <option value="Rate change">{"Rate change"}</option>
                            <option value="Out of order">{"Out of order"}</option>
                            <option value="Out of service">{"Out of service"}</option>
                            <option value="Key re-issue">{"Key re-issue"}</option>
                            <option value="Paymaster carry forward">{"Paymaster carry forward"}</option>
                            <option value="Lost & found disposal">{"Lost & found disposal"}</option>
                            <option value="Visitor denied">{"Visitor denied"}</option>
                            <option value="Walk guest">{"Walk guest"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f443">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f443" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,10}"} maxLength="10" defaultValue={"SERVREC"} />
                        <span className="field__hint">{"Unique within the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f444">
                          {"Text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f444" type="text" name="text" required={true} maxLength="60" defaultValue={"Service recovery"} />
                        <span className="field__hint">{"1–60 characters"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f445">
                          <input id="f445" type="checkbox" role="switch" name="note" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Note required"}
                        </label>
                        <span className="field__hint">{"Free text on top of the reason"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f446">
                          <input id="f446" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-19-servrec">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-19-servrec" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-19-servrec-t">
                <a className="modal__backdrop" href="#FDS-P16-servrec" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-19-servrec-t">{"Deactivate SERVREC Service recovery?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P16-servrec" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. SERVREC Service recovery will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P16-servrec">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P16-posterr" data-code="FDS-P16" role="dialog" aria-modal="true" aria-labelledby="FDS-P16-posterr-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P16-posterr-t">{"Reason code: POSTERR Posting error"}</h2>
                      <p className="modal__desc">{"Changes are written to the setup audit log (FDS-X07)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="f447">
                          {"Reason type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f447" name="type" required={true} defaultValue={"Allowance"}>
                            <option value="Room move">{"Room move"}</option>
                            <option value="Upgrade">{"Upgrade"}</option>
                            <option value="Early departure">{"Early departure"}</option>
                            <option value="Late check-out waiver">{"Late check-out waiver"}</option>
                            <option value="Early check-in waiver">{"Early check-in waiver"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Void">{"Void"}</option>
                            <option value="Refund">{"Refund"}</option>
                            <option value="Re-open bill">{"Re-open bill"}</option>
                            <option value="Credit note">{"Credit note"}</option>
                            <option value="Dirty room override">{"Dirty room override"}</option>
                            <option value="Cash difference">{"Cash difference"}</option>
                            <option value="Cancel check-in">{"Cancel check-in"}</option>
                            <option value="Reinstate check-out">{"Reinstate check-out"}</option>
                            <option value="Rate change">{"Rate change"}</option>
                            <option value="Out of order">{"Out of order"}</option>
                            <option value="Out of service">{"Out of service"}</option>
                            <option value="Key re-issue">{"Key re-issue"}</option>
                            <option value="Paymaster carry forward">{"Paymaster carry forward"}</option>
                            <option value="Lost & found disposal">{"Lost & found disposal"}</option>
                            <option value="Visitor denied">{"Visitor denied"}</option>
                            <option value="Walk guest">{"Walk guest"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f448">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f448" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,10}"} maxLength="10" defaultValue={"POSTERR"} />
                        <span className="field__hint">{"Unique within the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f449">
                          {"Text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f449" type="text" name="text" required={true} maxLength="60" defaultValue={"Posting error"} />
                        <span className="field__hint">{"1–60 characters"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f450">
                          <input id="f450" type="checkbox" role="switch" name="note" />
                          <span className="sw__track" />
                          {"Note required"}
                        </label>
                        <span className="field__hint">{"Free text on top of the reason"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f451">
                          <input id="f451" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-19-posterr">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-19-posterr" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-19-posterr-t">
                <a className="modal__backdrop" href="#FDS-P16-posterr" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-19-posterr-t">{"Deactivate POSTERR Posting error?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P16-posterr" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. POSTERR Posting error will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P16-posterr">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P16-goodwill" data-code="FDS-P16" role="dialog" aria-modal="true" aria-labelledby="FDS-P16-goodwill-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P16-goodwill-t">{"Reason code: GOODWILL Goodwill gesture"}</h2>
                      <p className="modal__desc">{"Changes are written to the setup audit log (FDS-X07)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="f452">
                          {"Reason type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f452" name="type" required={true} defaultValue={"Allowance"}>
                            <option value="Room move">{"Room move"}</option>
                            <option value="Upgrade">{"Upgrade"}</option>
                            <option value="Early departure">{"Early departure"}</option>
                            <option value="Late check-out waiver">{"Late check-out waiver"}</option>
                            <option value="Early check-in waiver">{"Early check-in waiver"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Void">{"Void"}</option>
                            <option value="Refund">{"Refund"}</option>
                            <option value="Re-open bill">{"Re-open bill"}</option>
                            <option value="Credit note">{"Credit note"}</option>
                            <option value="Dirty room override">{"Dirty room override"}</option>
                            <option value="Cash difference">{"Cash difference"}</option>
                            <option value="Cancel check-in">{"Cancel check-in"}</option>
                            <option value="Reinstate check-out">{"Reinstate check-out"}</option>
                            <option value="Rate change">{"Rate change"}</option>
                            <option value="Out of order">{"Out of order"}</option>
                            <option value="Out of service">{"Out of service"}</option>
                            <option value="Key re-issue">{"Key re-issue"}</option>
                            <option value="Paymaster carry forward">{"Paymaster carry forward"}</option>
                            <option value="Lost & found disposal">{"Lost & found disposal"}</option>
                            <option value="Visitor denied">{"Visitor denied"}</option>
                            <option value="Walk guest">{"Walk guest"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f453">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f453" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,10}"} maxLength="10" defaultValue={"GOODWILL"} />
                        <span className="field__hint">{"Unique within the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f454">
                          {"Text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f454" type="text" name="text" required={true} maxLength="60" defaultValue={"Goodwill gesture"} />
                        <span className="field__hint">{"1–60 characters"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f455">
                          <input id="f455" type="checkbox" role="switch" name="note" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Note required"}
                        </label>
                        <span className="field__hint">{"Free text on top of the reason"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f456">
                          <input id="f456" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-19-goodwill">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-19-goodwill" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-19-goodwill-t">
                <a className="modal__backdrop" href="#FDS-P16-goodwill" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-19-goodwill-t">{"Deactivate GOODWILL Goodwill gesture?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P16-goodwill" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. GOODWILL Goodwill gesture will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P16-goodwill">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P16-wrongfol" data-code="FDS-P16" role="dialog" aria-modal="true" aria-labelledby="FDS-P16-wrongfol-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P16-wrongfol-t">{"Reason code: WRONGFOL Posted to the wrong folio"}</h2>
                      <p className="modal__desc">{"Changes are written to the setup audit log (FDS-X07)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="f457">
                          {"Reason type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f457" name="type" required={true} defaultValue={"Void"}>
                            <option value="Room move">{"Room move"}</option>
                            <option value="Upgrade">{"Upgrade"}</option>
                            <option value="Early departure">{"Early departure"}</option>
                            <option value="Late check-out waiver">{"Late check-out waiver"}</option>
                            <option value="Early check-in waiver">{"Early check-in waiver"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Void">{"Void"}</option>
                            <option value="Refund">{"Refund"}</option>
                            <option value="Re-open bill">{"Re-open bill"}</option>
                            <option value="Credit note">{"Credit note"}</option>
                            <option value="Dirty room override">{"Dirty room override"}</option>
                            <option value="Cash difference">{"Cash difference"}</option>
                            <option value="Cancel check-in">{"Cancel check-in"}</option>
                            <option value="Reinstate check-out">{"Reinstate check-out"}</option>
                            <option value="Rate change">{"Rate change"}</option>
                            <option value="Out of order">{"Out of order"}</option>
                            <option value="Out of service">{"Out of service"}</option>
                            <option value="Key re-issue">{"Key re-issue"}</option>
                            <option value="Paymaster carry forward">{"Paymaster carry forward"}</option>
                            <option value="Lost & found disposal">{"Lost & found disposal"}</option>
                            <option value="Visitor denied">{"Visitor denied"}</option>
                            <option value="Walk guest">{"Walk guest"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f458">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f458" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,10}"} maxLength="10" defaultValue={"WRONGFOL"} />
                        <span className="field__hint">{"Unique within the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f459">
                          {"Text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f459" type="text" name="text" required={true} maxLength="60" defaultValue={"Posted to the wrong folio"} />
                        <span className="field__hint">{"1–60 characters"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f460">
                          <input id="f460" type="checkbox" role="switch" name="note" />
                          <span className="sw__track" />
                          {"Note required"}
                        </label>
                        <span className="field__hint">{"Free text on top of the reason"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f461">
                          <input id="f461" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-19-wrongfol">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-19-wrongfol" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-19-wrongfol-t">
                <a className="modal__backdrop" href="#FDS-P16-wrongfol" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-19-wrongfol-t">{"Deactivate WRONGFOL Posted to the wrong folio?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P16-wrongfol" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. WRONGFOL Posted to the wrong folio will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P16-wrongfol">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P16-duplic" data-code="FDS-P16" role="dialog" aria-modal="true" aria-labelledby="FDS-P16-duplic-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P16-duplic-t">{"Reason code: DUPLIC Duplicate posting"}</h2>
                      <p className="modal__desc">{"Changes are written to the setup audit log (FDS-X07)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="f462">
                          {"Reason type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f462" name="type" required={true} defaultValue={"Void"}>
                            <option value="Room move">{"Room move"}</option>
                            <option value="Upgrade">{"Upgrade"}</option>
                            <option value="Early departure">{"Early departure"}</option>
                            <option value="Late check-out waiver">{"Late check-out waiver"}</option>
                            <option value="Early check-in waiver">{"Early check-in waiver"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Void">{"Void"}</option>
                            <option value="Refund">{"Refund"}</option>
                            <option value="Re-open bill">{"Re-open bill"}</option>
                            <option value="Credit note">{"Credit note"}</option>
                            <option value="Dirty room override">{"Dirty room override"}</option>
                            <option value="Cash difference">{"Cash difference"}</option>
                            <option value="Cancel check-in">{"Cancel check-in"}</option>
                            <option value="Reinstate check-out">{"Reinstate check-out"}</option>
                            <option value="Rate change">{"Rate change"}</option>
                            <option value="Out of order">{"Out of order"}</option>
                            <option value="Out of service">{"Out of service"}</option>
                            <option value="Key re-issue">{"Key re-issue"}</option>
                            <option value="Paymaster carry forward">{"Paymaster carry forward"}</option>
                            <option value="Lost & found disposal">{"Lost & found disposal"}</option>
                            <option value="Visitor denied">{"Visitor denied"}</option>
                            <option value="Walk guest">{"Walk guest"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f463">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f463" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,10}"} maxLength="10" defaultValue={"DUPLIC"} />
                        <span className="field__hint">{"Unique within the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f464">
                          {"Text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f464" type="text" name="text" required={true} maxLength="60" defaultValue={"Duplicate posting"} />
                        <span className="field__hint">{"1–60 characters"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f465">
                          <input id="f465" type="checkbox" role="switch" name="note" />
                          <span className="sw__track" />
                          {"Note required"}
                        </label>
                        <span className="field__hint">{"Free text on top of the reason"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f466">
                          <input id="f466" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-19-duplic">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-19-duplic" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-19-duplic-t">
                <a className="modal__backdrop" href="#FDS-P16-duplic" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-19-duplic-t">{"Deactivate DUPLIC Duplicate posting?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P16-duplic" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. DUPLIC Duplicate posting will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P16-duplic">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P16-overpay" data-code="FDS-P16" role="dialog" aria-modal="true" aria-labelledby="FDS-P16-overpay-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P16-overpay-t">{"Reason code: OVERPAY Overpayment"}</h2>
                      <p className="modal__desc">{"Changes are written to the setup audit log (FDS-X07)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="f467">
                          {"Reason type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f467" name="type" required={true} defaultValue={"Refund"}>
                            <option value="Room move">{"Room move"}</option>
                            <option value="Upgrade">{"Upgrade"}</option>
                            <option value="Early departure">{"Early departure"}</option>
                            <option value="Late check-out waiver">{"Late check-out waiver"}</option>
                            <option value="Early check-in waiver">{"Early check-in waiver"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Void">{"Void"}</option>
                            <option value="Refund">{"Refund"}</option>
                            <option value="Re-open bill">{"Re-open bill"}</option>
                            <option value="Credit note">{"Credit note"}</option>
                            <option value="Dirty room override">{"Dirty room override"}</option>
                            <option value="Cash difference">{"Cash difference"}</option>
                            <option value="Cancel check-in">{"Cancel check-in"}</option>
                            <option value="Reinstate check-out">{"Reinstate check-out"}</option>
                            <option value="Rate change">{"Rate change"}</option>
                            <option value="Out of order">{"Out of order"}</option>
                            <option value="Out of service">{"Out of service"}</option>
                            <option value="Key re-issue">{"Key re-issue"}</option>
                            <option value="Paymaster carry forward">{"Paymaster carry forward"}</option>
                            <option value="Lost & found disposal">{"Lost & found disposal"}</option>
                            <option value="Visitor denied">{"Visitor denied"}</option>
                            <option value="Walk guest">{"Walk guest"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f468">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f468" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,10}"} maxLength="10" defaultValue={"OVERPAY"} />
                        <span className="field__hint">{"Unique within the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f469">
                          {"Text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f469" type="text" name="text" required={true} maxLength="60" defaultValue={"Overpayment"} />
                        <span className="field__hint">{"1–60 characters"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f470">
                          <input id="f470" type="checkbox" role="switch" name="note" />
                          <span className="sw__track" />
                          {"Note required"}
                        </label>
                        <span className="field__hint">{"Free text on top of the reason"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f471">
                          <input id="f471" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-19-overpay">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-19-overpay" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-19-overpay-t">
                <a className="modal__backdrop" href="#FDS-P16-overpay" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-19-overpay-t">{"Deactivate OVERPAY Overpayment?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P16-overpay" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. OVERPAY Overpayment will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P16-overpay">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P16-shorten" data-code="FDS-P16" role="dialog" aria-modal="true" aria-labelledby="FDS-P16-shorten-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P16-shorten-t">{"Reason code: SHORTEN Stay shortened"}</h2>
                      <p className="modal__desc">{"Changes are written to the setup audit log (FDS-X07)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="f472">
                          {"Reason type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f472" name="type" required={true} defaultValue={"Refund"}>
                            <option value="Room move">{"Room move"}</option>
                            <option value="Upgrade">{"Upgrade"}</option>
                            <option value="Early departure">{"Early departure"}</option>
                            <option value="Late check-out waiver">{"Late check-out waiver"}</option>
                            <option value="Early check-in waiver">{"Early check-in waiver"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Void">{"Void"}</option>
                            <option value="Refund">{"Refund"}</option>
                            <option value="Re-open bill">{"Re-open bill"}</option>
                            <option value="Credit note">{"Credit note"}</option>
                            <option value="Dirty room override">{"Dirty room override"}</option>
                            <option value="Cash difference">{"Cash difference"}</option>
                            <option value="Cancel check-in">{"Cancel check-in"}</option>
                            <option value="Reinstate check-out">{"Reinstate check-out"}</option>
                            <option value="Rate change">{"Rate change"}</option>
                            <option value="Out of order">{"Out of order"}</option>
                            <option value="Out of service">{"Out of service"}</option>
                            <option value="Key re-issue">{"Key re-issue"}</option>
                            <option value="Paymaster carry forward">{"Paymaster carry forward"}</option>
                            <option value="Lost & found disposal">{"Lost & found disposal"}</option>
                            <option value="Visitor denied">{"Visitor denied"}</option>
                            <option value="Walk guest">{"Walk guest"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f473">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f473" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,10}"} maxLength="10" defaultValue={"SHORTEN"} />
                        <span className="field__hint">{"Unique within the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f474">
                          {"Text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f474" type="text" name="text" required={true} maxLength="60" defaultValue={"Stay shortened"} />
                        <span className="field__hint">{"1–60 characters"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f475">
                          <input id="f475" type="checkbox" role="switch" name="note" />
                          <span className="sw__track" />
                          {"Note required"}
                        </label>
                        <span className="field__hint">{"Free text on top of the reason"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f476">
                          <input id="f476" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-19-shorten">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-19-shorten" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-19-shorten-t">
                <a className="modal__backdrop" href="#FDS-P16-shorten" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-19-shorten-t">{"Deactivate SHORTEN Stay shortened?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P16-shorten" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. SHORTEN Stay shortened will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P16-shorten">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P16-misschg" data-code="FDS-P16" role="dialog" aria-modal="true" aria-labelledby="FDS-P16-misschg-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P16-misschg-t">{"Reason code: MISSCHG Missed charge"}</h2>
                      <p className="modal__desc">{"Changes are written to the setup audit log (FDS-X07)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="f477">
                          {"Reason type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f477" name="type" required={true} defaultValue={"Re-open bill"}>
                            <option value="Room move">{"Room move"}</option>
                            <option value="Upgrade">{"Upgrade"}</option>
                            <option value="Early departure">{"Early departure"}</option>
                            <option value="Late check-out waiver">{"Late check-out waiver"}</option>
                            <option value="Early check-in waiver">{"Early check-in waiver"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Void">{"Void"}</option>
                            <option value="Refund">{"Refund"}</option>
                            <option value="Re-open bill">{"Re-open bill"}</option>
                            <option value="Credit note">{"Credit note"}</option>
                            <option value="Dirty room override">{"Dirty room override"}</option>
                            <option value="Cash difference">{"Cash difference"}</option>
                            <option value="Cancel check-in">{"Cancel check-in"}</option>
                            <option value="Reinstate check-out">{"Reinstate check-out"}</option>
                            <option value="Rate change">{"Rate change"}</option>
                            <option value="Out of order">{"Out of order"}</option>
                            <option value="Out of service">{"Out of service"}</option>
                            <option value="Key re-issue">{"Key re-issue"}</option>
                            <option value="Paymaster carry forward">{"Paymaster carry forward"}</option>
                            <option value="Lost & found disposal">{"Lost & found disposal"}</option>
                            <option value="Visitor denied">{"Visitor denied"}</option>
                            <option value="Walk guest">{"Walk guest"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f478">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f478" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,10}"} maxLength="10" defaultValue={"MISSCHG"} />
                        <span className="field__hint">{"Unique within the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f479">
                          {"Text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f479" type="text" name="text" required={true} maxLength="60" defaultValue={"Missed charge"} />
                        <span className="field__hint">{"1–60 characters"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f480">
                          <input id="f480" type="checkbox" role="switch" name="note" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Note required"}
                        </label>
                        <span className="field__hint">{"Free text on top of the reason"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f481">
                          <input id="f481" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-19-misschg">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-19-misschg" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-19-misschg-t">
                <a className="modal__backdrop" href="#FDS-P16-misschg" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-19-misschg-t">{"Deactivate MISSCHG Missed charge?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P16-misschg" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. MISSCHG Missed charge will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P16-misschg">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P16-wrongpay" data-code="FDS-P16" role="dialog" aria-modal="true" aria-labelledby="FDS-P16-wrongpay-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P16-wrongpay-t">{"Reason code: WRONGPAY Wrong payment mode"}</h2>
                      <p className="modal__desc">{"Changes are written to the setup audit log (FDS-X07)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="f482">
                          {"Reason type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f482" name="type" required={true} defaultValue={"Re-open bill"}>
                            <option value="Room move">{"Room move"}</option>
                            <option value="Upgrade">{"Upgrade"}</option>
                            <option value="Early departure">{"Early departure"}</option>
                            <option value="Late check-out waiver">{"Late check-out waiver"}</option>
                            <option value="Early check-in waiver">{"Early check-in waiver"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Void">{"Void"}</option>
                            <option value="Refund">{"Refund"}</option>
                            <option value="Re-open bill">{"Re-open bill"}</option>
                            <option value="Credit note">{"Credit note"}</option>
                            <option value="Dirty room override">{"Dirty room override"}</option>
                            <option value="Cash difference">{"Cash difference"}</option>
                            <option value="Cancel check-in">{"Cancel check-in"}</option>
                            <option value="Reinstate check-out">{"Reinstate check-out"}</option>
                            <option value="Rate change">{"Rate change"}</option>
                            <option value="Out of order">{"Out of order"}</option>
                            <option value="Out of service">{"Out of service"}</option>
                            <option value="Key re-issue">{"Key re-issue"}</option>
                            <option value="Paymaster carry forward">{"Paymaster carry forward"}</option>
                            <option value="Lost & found disposal">{"Lost & found disposal"}</option>
                            <option value="Visitor denied">{"Visitor denied"}</option>
                            <option value="Walk guest">{"Walk guest"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f483">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f483" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,10}"} maxLength="10" defaultValue={"WRONGPAY"} />
                        <span className="field__hint">{"Unique within the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f484">
                          {"Text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f484" type="text" name="text" required={true} maxLength="60" defaultValue={"Wrong payment mode"} />
                        <span className="field__hint">{"1–60 characters"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f485">
                          <input id="f485" type="checkbox" role="switch" name="note" />
                          <span className="sw__track" />
                          {"Note required"}
                        </label>
                        <span className="field__hint">{"Free text on top of the reason"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f486">
                          <input id="f486" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-19-wrongpay">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-19-wrongpay" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-19-wrongpay-t">
                <a className="modal__backdrop" href="#FDS-P16-wrongpay" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-19-wrongpay-t">{"Deactivate WRONGPAY Wrong payment mode?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P16-wrongpay" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. WRONGPAY Wrong payment mode will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P16-wrongpay">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P16-ratefix" data-code="FDS-P16" role="dialog" aria-modal="true" aria-labelledby="FDS-P16-ratefix-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P16-ratefix-t">{"Reason code: RATEFIX Rate correction"}</h2>
                      <p className="modal__desc">{"Changes are written to the setup audit log (FDS-X07)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="f487">
                          {"Reason type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f487" name="type" required={true} defaultValue={"Credit note"}>
                            <option value="Room move">{"Room move"}</option>
                            <option value="Upgrade">{"Upgrade"}</option>
                            <option value="Early departure">{"Early departure"}</option>
                            <option value="Late check-out waiver">{"Late check-out waiver"}</option>
                            <option value="Early check-in waiver">{"Early check-in waiver"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Void">{"Void"}</option>
                            <option value="Refund">{"Refund"}</option>
                            <option value="Re-open bill">{"Re-open bill"}</option>
                            <option value="Credit note">{"Credit note"}</option>
                            <option value="Dirty room override">{"Dirty room override"}</option>
                            <option value="Cash difference">{"Cash difference"}</option>
                            <option value="Cancel check-in">{"Cancel check-in"}</option>
                            <option value="Reinstate check-out">{"Reinstate check-out"}</option>
                            <option value="Rate change">{"Rate change"}</option>
                            <option value="Out of order">{"Out of order"}</option>
                            <option value="Out of service">{"Out of service"}</option>
                            <option value="Key re-issue">{"Key re-issue"}</option>
                            <option value="Paymaster carry forward">{"Paymaster carry forward"}</option>
                            <option value="Lost & found disposal">{"Lost & found disposal"}</option>
                            <option value="Visitor denied">{"Visitor denied"}</option>
                            <option value="Walk guest">{"Walk guest"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f488">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f488" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,10}"} maxLength="10" defaultValue={"RATEFIX"} />
                        <span className="field__hint">{"Unique within the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f489">
                          {"Text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f489" type="text" name="text" required={true} maxLength="60" defaultValue={"Rate correction"} />
                        <span className="field__hint">{"1–60 characters"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f490">
                          <input id="f490" type="checkbox" role="switch" name="note" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Note required"}
                        </label>
                        <span className="field__hint">{"Free text on top of the reason"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f491">
                          <input id="f491" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-19-ratefix">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-19-ratefix" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-19-ratefix-t">
                <a className="modal__backdrop" href="#FDS-P16-ratefix" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-19-ratefix-t">{"Deactivate RATEFIX Rate correction?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P16-ratefix" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. RATEFIX Rate correction will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P16-ratefix">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P16-taxfix" data-code="FDS-P16" role="dialog" aria-modal="true" aria-labelledby="FDS-P16-taxfix-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P16-taxfix-t">{"Reason code: TAXFIX Tax / GSTIN correction"}</h2>
                      <p className="modal__desc">{"Changes are written to the setup audit log (FDS-X07)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="f492">
                          {"Reason type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f492" name="type" required={true} defaultValue={"Credit note"}>
                            <option value="Room move">{"Room move"}</option>
                            <option value="Upgrade">{"Upgrade"}</option>
                            <option value="Early departure">{"Early departure"}</option>
                            <option value="Late check-out waiver">{"Late check-out waiver"}</option>
                            <option value="Early check-in waiver">{"Early check-in waiver"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Void">{"Void"}</option>
                            <option value="Refund">{"Refund"}</option>
                            <option value="Re-open bill">{"Re-open bill"}</option>
                            <option value="Credit note">{"Credit note"}</option>
                            <option value="Dirty room override">{"Dirty room override"}</option>
                            <option value="Cash difference">{"Cash difference"}</option>
                            <option value="Cancel check-in">{"Cancel check-in"}</option>
                            <option value="Reinstate check-out">{"Reinstate check-out"}</option>
                            <option value="Rate change">{"Rate change"}</option>
                            <option value="Out of order">{"Out of order"}</option>
                            <option value="Out of service">{"Out of service"}</option>
                            <option value="Key re-issue">{"Key re-issue"}</option>
                            <option value="Paymaster carry forward">{"Paymaster carry forward"}</option>
                            <option value="Lost & found disposal">{"Lost & found disposal"}</option>
                            <option value="Visitor denied">{"Visitor denied"}</option>
                            <option value="Walk guest">{"Walk guest"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f493">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f493" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,10}"} maxLength="10" defaultValue={"TAXFIX"} />
                        <span className="field__hint">{"Unique within the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f494">
                          {"Text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f494" type="text" name="text" required={true} maxLength="60" defaultValue={"Tax / GSTIN correction"} />
                        <span className="field__hint">{"1–60 characters"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f495">
                          <input id="f495" type="checkbox" role="switch" name="note" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Note required"}
                        </label>
                        <span className="field__hint">{"Free text on top of the reason"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f496">
                          <input id="f496" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-19-taxfix">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-19-taxfix" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-19-taxfix-t">
                <a className="modal__backdrop" href="#FDS-P16-taxfix" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-19-taxfix-t">{"Deactivate TAXFIX Tax / GSTIN correction?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P16-taxfix" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. TAXFIX Tax / GSTIN correction will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P16-taxfix">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P16-dirtyroom" data-code="FDS-P16" role="dialog" aria-modal="true" aria-labelledby="FDS-P16-dirtyroom-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P16-dirtyroom-t">{"Reason code: DIRTYROOM Guest accepts the room while it is being cleaned"}</h2>
                      <p className="modal__desc">{"Changes are written to the setup audit log (FDS-X07)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="f497">
                          {"Reason type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f497" name="type" required={true} defaultValue={"Dirty room override"}>
                            <option value="Room move">{"Room move"}</option>
                            <option value="Upgrade">{"Upgrade"}</option>
                            <option value="Early departure">{"Early departure"}</option>
                            <option value="Late check-out waiver">{"Late check-out waiver"}</option>
                            <option value="Early check-in waiver">{"Early check-in waiver"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Void">{"Void"}</option>
                            <option value="Refund">{"Refund"}</option>
                            <option value="Re-open bill">{"Re-open bill"}</option>
                            <option value="Credit note">{"Credit note"}</option>
                            <option value="Dirty room override">{"Dirty room override"}</option>
                            <option value="Cash difference">{"Cash difference"}</option>
                            <option value="Cancel check-in">{"Cancel check-in"}</option>
                            <option value="Reinstate check-out">{"Reinstate check-out"}</option>
                            <option value="Rate change">{"Rate change"}</option>
                            <option value="Out of order">{"Out of order"}</option>
                            <option value="Out of service">{"Out of service"}</option>
                            <option value="Key re-issue">{"Key re-issue"}</option>
                            <option value="Paymaster carry forward">{"Paymaster carry forward"}</option>
                            <option value="Lost & found disposal">{"Lost & found disposal"}</option>
                            <option value="Visitor denied">{"Visitor denied"}</option>
                            <option value="Walk guest">{"Walk guest"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f498">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f498" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,10}"} maxLength="10" defaultValue={"DIRTYROOM"} />
                        <span className="field__hint">{"Unique within the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f499">
                          {"Text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f499" type="text" name="text" required={true} maxLength="60" defaultValue={"Guest accepts the room while it is being cleaned"} />
                        <span className="field__hint">{"1–60 characters"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f500">
                          <input id="f500" type="checkbox" role="switch" name="note" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Note required"}
                        </label>
                        <span className="field__hint">{"Free text on top of the reason"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f501">
                          <input id="f501" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-19-dirtyroom">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-19-dirtyroom" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-19-dirtyroom-t">
                <a className="modal__backdrop" href="#FDS-P16-dirtyroom" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-19-dirtyroom-t">{"Deactivate DIRTYROOM Guest accepts the room while it is being cleaned?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P16-dirtyroom" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. DIRTYROOM Guest accepts the room while it is being cleaned will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P16-dirtyroom">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P16-cleanwip" data-code="FDS-P16" role="dialog" aria-modal="true" aria-labelledby="FDS-P16-cleanwip-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P16-cleanwip-t">{"Reason code: CLEANWIP Cleaning in progress"}</h2>
                      <p className="modal__desc">{"Changes are written to the setup audit log (FDS-X07)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="f502">
                          {"Reason type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f502" name="type" required={true} defaultValue={"Dirty room override"}>
                            <option value="Room move">{"Room move"}</option>
                            <option value="Upgrade">{"Upgrade"}</option>
                            <option value="Early departure">{"Early departure"}</option>
                            <option value="Late check-out waiver">{"Late check-out waiver"}</option>
                            <option value="Early check-in waiver">{"Early check-in waiver"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Void">{"Void"}</option>
                            <option value="Refund">{"Refund"}</option>
                            <option value="Re-open bill">{"Re-open bill"}</option>
                            <option value="Credit note">{"Credit note"}</option>
                            <option value="Dirty room override">{"Dirty room override"}</option>
                            <option value="Cash difference">{"Cash difference"}</option>
                            <option value="Cancel check-in">{"Cancel check-in"}</option>
                            <option value="Reinstate check-out">{"Reinstate check-out"}</option>
                            <option value="Rate change">{"Rate change"}</option>
                            <option value="Out of order">{"Out of order"}</option>
                            <option value="Out of service">{"Out of service"}</option>
                            <option value="Key re-issue">{"Key re-issue"}</option>
                            <option value="Paymaster carry forward">{"Paymaster carry forward"}</option>
                            <option value="Lost & found disposal">{"Lost & found disposal"}</option>
                            <option value="Visitor denied">{"Visitor denied"}</option>
                            <option value="Walk guest">{"Walk guest"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f503">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f503" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,10}"} maxLength="10" defaultValue={"CLEANWIP"} />
                        <span className="field__hint">{"Unique within the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f504">
                          {"Text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f504" type="text" name="text" required={true} maxLength="60" defaultValue={"Cleaning in progress"} />
                        <span className="field__hint">{"1–60 characters"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f505">
                          <input id="f505" type="checkbox" role="switch" name="note" />
                          <span className="sw__track" />
                          {"Note required"}
                        </label>
                        <span className="field__hint">{"Free text on top of the reason"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f506">
                          <input id="f506" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-19-cleanwip">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-19-cleanwip" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-19-cleanwip-t">
                <a className="modal__backdrop" href="#FDS-P16-cleanwip" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-19-cleanwip-t">{"Deactivate CLEANWIP Cleaning in progress?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P16-cleanwip" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. CLEANWIP Cleaning in progress will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P16-cleanwip">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P16-counterr" data-code="FDS-P16" role="dialog" aria-modal="true" aria-labelledby="FDS-P16-counterr-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P16-counterr-t">{"Reason code: COUNTERR Counting error"}</h2>
                      <p className="modal__desc">{"Changes are written to the setup audit log (FDS-X07)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="f507">
                          {"Reason type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f507" name="type" required={true} defaultValue={"Cash difference"}>
                            <option value="Room move">{"Room move"}</option>
                            <option value="Upgrade">{"Upgrade"}</option>
                            <option value="Early departure">{"Early departure"}</option>
                            <option value="Late check-out waiver">{"Late check-out waiver"}</option>
                            <option value="Early check-in waiver">{"Early check-in waiver"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Void">{"Void"}</option>
                            <option value="Refund">{"Refund"}</option>
                            <option value="Re-open bill">{"Re-open bill"}</option>
                            <option value="Credit note">{"Credit note"}</option>
                            <option value="Dirty room override">{"Dirty room override"}</option>
                            <option value="Cash difference">{"Cash difference"}</option>
                            <option value="Cancel check-in">{"Cancel check-in"}</option>
                            <option value="Reinstate check-out">{"Reinstate check-out"}</option>
                            <option value="Rate change">{"Rate change"}</option>
                            <option value="Out of order">{"Out of order"}</option>
                            <option value="Out of service">{"Out of service"}</option>
                            <option value="Key re-issue">{"Key re-issue"}</option>
                            <option value="Paymaster carry forward">{"Paymaster carry forward"}</option>
                            <option value="Lost & found disposal">{"Lost & found disposal"}</option>
                            <option value="Visitor denied">{"Visitor denied"}</option>
                            <option value="Walk guest">{"Walk guest"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f508">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f508" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,10}"} maxLength="10" defaultValue={"COUNTERR"} />
                        <span className="field__hint">{"Unique within the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f509">
                          {"Text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f509" type="text" name="text" required={true} maxLength="60" defaultValue={"Counting error"} />
                        <span className="field__hint">{"1–60 characters"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f510">
                          <input id="f510" type="checkbox" role="switch" name="note" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Note required"}
                        </label>
                        <span className="field__hint">{"Free text on top of the reason"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f511">
                          <input id="f511" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-19-counterr">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-19-counterr" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-19-counterr-t">
                <a className="modal__backdrop" href="#FDS-P16-counterr" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-19-counterr-t">{"Deactivate COUNTERR Counting error?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P16-counterr" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. COUNTERR Counting error will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P16-counterr">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P16-refnrec" data-code="FDS-P16" role="dialog" aria-modal="true" aria-labelledby="FDS-P16-refnrec-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P16-refnrec-t">{"Reason code: REFNREC Refund not recorded"}</h2>
                      <p className="modal__desc">{"Changes are written to the setup audit log (FDS-X07)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="f512">
                          {"Reason type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f512" name="type" required={true} defaultValue={"Cash difference"}>
                            <option value="Room move">{"Room move"}</option>
                            <option value="Upgrade">{"Upgrade"}</option>
                            <option value="Early departure">{"Early departure"}</option>
                            <option value="Late check-out waiver">{"Late check-out waiver"}</option>
                            <option value="Early check-in waiver">{"Early check-in waiver"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Void">{"Void"}</option>
                            <option value="Refund">{"Refund"}</option>
                            <option value="Re-open bill">{"Re-open bill"}</option>
                            <option value="Credit note">{"Credit note"}</option>
                            <option value="Dirty room override">{"Dirty room override"}</option>
                            <option value="Cash difference">{"Cash difference"}</option>
                            <option value="Cancel check-in">{"Cancel check-in"}</option>
                            <option value="Reinstate check-out">{"Reinstate check-out"}</option>
                            <option value="Rate change">{"Rate change"}</option>
                            <option value="Out of order">{"Out of order"}</option>
                            <option value="Out of service">{"Out of service"}</option>
                            <option value="Key re-issue">{"Key re-issue"}</option>
                            <option value="Paymaster carry forward">{"Paymaster carry forward"}</option>
                            <option value="Lost & found disposal">{"Lost & found disposal"}</option>
                            <option value="Visitor denied">{"Visitor denied"}</option>
                            <option value="Walk guest">{"Walk guest"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f513">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f513" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,10}"} maxLength="10" defaultValue={"REFNREC"} />
                        <span className="field__hint">{"Unique within the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f514">
                          {"Text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f514" type="text" name="text" required={true} maxLength="60" defaultValue={"Refund not recorded"} />
                        <span className="field__hint">{"1–60 characters"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f515">
                          <input id="f515" type="checkbox" role="switch" name="note" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Note required"}
                        </label>
                        <span className="field__hint">{"Free text on top of the reason"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f516">
                          <input id="f516" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-19-refnrec">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-19-refnrec" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-19-refnrec-t">
                <a className="modal__backdrop" href="#FDS-P16-refnrec" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-19-refnrec-t">{"Deactivate REFNREC Refund not recorded?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P16-refnrec" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. REFNREC Refund not recorded will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P16-refnrec">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P16-wronggst" data-code="FDS-P16" role="dialog" aria-modal="true" aria-labelledby="FDS-P16-wronggst-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P16-wronggst-t">{"Reason code: WRONGGST Checked in the wrong guest"}</h2>
                      <p className="modal__desc">{"Changes are written to the setup audit log (FDS-X07)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="f517">
                          {"Reason type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f517" name="type" required={true} defaultValue={"Cancel check-in"}>
                            <option value="Room move">{"Room move"}</option>
                            <option value="Upgrade">{"Upgrade"}</option>
                            <option value="Early departure">{"Early departure"}</option>
                            <option value="Late check-out waiver">{"Late check-out waiver"}</option>
                            <option value="Early check-in waiver">{"Early check-in waiver"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Void">{"Void"}</option>
                            <option value="Refund">{"Refund"}</option>
                            <option value="Re-open bill">{"Re-open bill"}</option>
                            <option value="Credit note">{"Credit note"}</option>
                            <option value="Dirty room override">{"Dirty room override"}</option>
                            <option value="Cash difference">{"Cash difference"}</option>
                            <option value="Cancel check-in">{"Cancel check-in"}</option>
                            <option value="Reinstate check-out">{"Reinstate check-out"}</option>
                            <option value="Rate change">{"Rate change"}</option>
                            <option value="Out of order">{"Out of order"}</option>
                            <option value="Out of service">{"Out of service"}</option>
                            <option value="Key re-issue">{"Key re-issue"}</option>
                            <option value="Paymaster carry forward">{"Paymaster carry forward"}</option>
                            <option value="Lost & found disposal">{"Lost & found disposal"}</option>
                            <option value="Visitor denied">{"Visitor denied"}</option>
                            <option value="Walk guest">{"Walk guest"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f518">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f518" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,10}"} maxLength="10" defaultValue={"WRONGGST"} />
                        <span className="field__hint">{"Unique within the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f519">
                          {"Text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f519" type="text" name="text" required={true} maxLength="60" defaultValue={"Checked in the wrong guest"} />
                        <span className="field__hint">{"1–60 characters"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f520">
                          <input id="f520" type="checkbox" role="switch" name="note" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Note required"}
                        </label>
                        <span className="field__hint">{"Free text on top of the reason"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f521">
                          <input id="f521" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-19-wronggst">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-19-wronggst" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-19-wronggst-t">
                <a className="modal__backdrop" href="#FDS-P16-wronggst" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-19-wronggst-t">{"Deactivate WRONGGST Checked in the wrong guest?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P16-wronggst" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. WRONGGST Checked in the wrong guest will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P16-wronggst">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P16-gstchng" data-code="FDS-P16" role="dialog" aria-modal="true" aria-labelledby="FDS-P16-gstchng-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P16-gstchng-t">{"Reason code: GSTCHNG Guest changed mind"}</h2>
                      <p className="modal__desc">{"Changes are written to the setup audit log (FDS-X07)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="f522">
                          {"Reason type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f522" name="type" required={true} defaultValue={"Cancel check-in"}>
                            <option value="Room move">{"Room move"}</option>
                            <option value="Upgrade">{"Upgrade"}</option>
                            <option value="Early departure">{"Early departure"}</option>
                            <option value="Late check-out waiver">{"Late check-out waiver"}</option>
                            <option value="Early check-in waiver">{"Early check-in waiver"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Void">{"Void"}</option>
                            <option value="Refund">{"Refund"}</option>
                            <option value="Re-open bill">{"Re-open bill"}</option>
                            <option value="Credit note">{"Credit note"}</option>
                            <option value="Dirty room override">{"Dirty room override"}</option>
                            <option value="Cash difference">{"Cash difference"}</option>
                            <option value="Cancel check-in">{"Cancel check-in"}</option>
                            <option value="Reinstate check-out">{"Reinstate check-out"}</option>
                            <option value="Rate change">{"Rate change"}</option>
                            <option value="Out of order">{"Out of order"}</option>
                            <option value="Out of service">{"Out of service"}</option>
                            <option value="Key re-issue">{"Key re-issue"}</option>
                            <option value="Paymaster carry forward">{"Paymaster carry forward"}</option>
                            <option value="Lost & found disposal">{"Lost & found disposal"}</option>
                            <option value="Visitor denied">{"Visitor denied"}</option>
                            <option value="Walk guest">{"Walk guest"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f523">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f523" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,10}"} maxLength="10" defaultValue={"GSTCHNG"} />
                        <span className="field__hint">{"Unique within the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f524">
                          {"Text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f524" type="text" name="text" required={true} maxLength="60" defaultValue={"Guest changed mind"} />
                        <span className="field__hint">{"1–60 characters"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f525">
                          <input id="f525" type="checkbox" role="switch" name="note" />
                          <span className="sw__track" />
                          {"Note required"}
                        </label>
                        <span className="field__hint">{"Free text on top of the reason"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f526">
                          <input id="f526" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-19-gstchng">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-19-gstchng" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-19-gstchng-t">
                <a className="modal__backdrop" href="#FDS-P16-gstchng" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-19-gstchng-t">{"Deactivate GSTCHNG Guest changed mind?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P16-gstchng" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. GSTCHNG Guest changed mind will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P16-gstchng">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P16-earlyco" data-code="FDS-P16" role="dialog" aria-modal="true" aria-labelledby="FDS-P16-earlyco-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P16-earlyco-t">{"Reason code: EARLYCO Checked out by mistake"}</h2>
                      <p className="modal__desc">{"Changes are written to the setup audit log (FDS-X07)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="f527">
                          {"Reason type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f527" name="type" required={true} defaultValue={"Reinstate check-out"}>
                            <option value="Room move">{"Room move"}</option>
                            <option value="Upgrade">{"Upgrade"}</option>
                            <option value="Early departure">{"Early departure"}</option>
                            <option value="Late check-out waiver">{"Late check-out waiver"}</option>
                            <option value="Early check-in waiver">{"Early check-in waiver"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Void">{"Void"}</option>
                            <option value="Refund">{"Refund"}</option>
                            <option value="Re-open bill">{"Re-open bill"}</option>
                            <option value="Credit note">{"Credit note"}</option>
                            <option value="Dirty room override">{"Dirty room override"}</option>
                            <option value="Cash difference">{"Cash difference"}</option>
                            <option value="Cancel check-in">{"Cancel check-in"}</option>
                            <option value="Reinstate check-out">{"Reinstate check-out"}</option>
                            <option value="Rate change">{"Rate change"}</option>
                            <option value="Out of order">{"Out of order"}</option>
                            <option value="Out of service">{"Out of service"}</option>
                            <option value="Key re-issue">{"Key re-issue"}</option>
                            <option value="Paymaster carry forward">{"Paymaster carry forward"}</option>
                            <option value="Lost & found disposal">{"Lost & found disposal"}</option>
                            <option value="Visitor denied">{"Visitor denied"}</option>
                            <option value="Walk guest">{"Walk guest"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f528">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f528" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,10}"} maxLength="10" defaultValue={"EARLYCO"} />
                        <span className="field__hint">{"Unique within the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f529">
                          {"Text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f529" type="text" name="text" required={true} maxLength="60" defaultValue={"Checked out by mistake"} />
                        <span className="field__hint">{"1–60 characters"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f530">
                          <input id="f530" type="checkbox" role="switch" name="note" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Note required"}
                        </label>
                        <span className="field__hint">{"Free text on top of the reason"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f531">
                          <input id="f531" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-19-earlyco">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-19-earlyco" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-19-earlyco-t">
                <a className="modal__backdrop" href="#FDS-P16-earlyco" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-19-earlyco-t">{"Deactivate EARLYCO Checked out by mistake?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P16-earlyco" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. EARLYCO Checked out by mistake will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P16-earlyco">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P16-gstret" data-code="FDS-P16" role="dialog" aria-modal="true" aria-labelledby="FDS-P16-gstret-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P16-gstret-t">{"Reason code: GSTRET Guest returned"}</h2>
                      <p className="modal__desc">{"Changes are written to the setup audit log (FDS-X07)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="f532">
                          {"Reason type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f532" name="type" required={true} defaultValue={"Reinstate check-out"}>
                            <option value="Room move">{"Room move"}</option>
                            <option value="Upgrade">{"Upgrade"}</option>
                            <option value="Early departure">{"Early departure"}</option>
                            <option value="Late check-out waiver">{"Late check-out waiver"}</option>
                            <option value="Early check-in waiver">{"Early check-in waiver"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Void">{"Void"}</option>
                            <option value="Refund">{"Refund"}</option>
                            <option value="Re-open bill">{"Re-open bill"}</option>
                            <option value="Credit note">{"Credit note"}</option>
                            <option value="Dirty room override">{"Dirty room override"}</option>
                            <option value="Cash difference">{"Cash difference"}</option>
                            <option value="Cancel check-in">{"Cancel check-in"}</option>
                            <option value="Reinstate check-out">{"Reinstate check-out"}</option>
                            <option value="Rate change">{"Rate change"}</option>
                            <option value="Out of order">{"Out of order"}</option>
                            <option value="Out of service">{"Out of service"}</option>
                            <option value="Key re-issue">{"Key re-issue"}</option>
                            <option value="Paymaster carry forward">{"Paymaster carry forward"}</option>
                            <option value="Lost & found disposal">{"Lost & found disposal"}</option>
                            <option value="Visitor denied">{"Visitor denied"}</option>
                            <option value="Walk guest">{"Walk guest"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f533">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f533" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,10}"} maxLength="10" defaultValue={"GSTRET"} />
                        <span className="field__hint">{"Unique within the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f534">
                          {"Text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f534" type="text" name="text" required={true} maxLength="60" defaultValue={"Guest returned"} />
                        <span className="field__hint">{"1–60 characters"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f535">
                          <input id="f535" type="checkbox" role="switch" name="note" />
                          <span className="sw__track" />
                          {"Note required"}
                        </label>
                        <span className="field__hint">{"Free text on top of the reason"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f536">
                          <input id="f536" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-19-gstret">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-19-gstret" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-19-gstret-t">
                <a className="modal__backdrop" href="#FDS-P16-gstret" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-19-gstret-t">{"Deactivate GSTRET Guest returned?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P16-gstret" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. GSTRET Guest returned will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P16-gstret">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P16-corprate" data-code="FDS-P16" role="dialog" aria-modal="true" aria-labelledby="FDS-P16-corprate-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P16-corprate-t">{"Reason code: CORPRATE Corporate rate applied"}</h2>
                      <p className="modal__desc">{"Changes are written to the setup audit log (FDS-X07)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="f537">
                          {"Reason type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f537" name="type" required={true} defaultValue={"Rate change"}>
                            <option value="Room move">{"Room move"}</option>
                            <option value="Upgrade">{"Upgrade"}</option>
                            <option value="Early departure">{"Early departure"}</option>
                            <option value="Late check-out waiver">{"Late check-out waiver"}</option>
                            <option value="Early check-in waiver">{"Early check-in waiver"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Void">{"Void"}</option>
                            <option value="Refund">{"Refund"}</option>
                            <option value="Re-open bill">{"Re-open bill"}</option>
                            <option value="Credit note">{"Credit note"}</option>
                            <option value="Dirty room override">{"Dirty room override"}</option>
                            <option value="Cash difference">{"Cash difference"}</option>
                            <option value="Cancel check-in">{"Cancel check-in"}</option>
                            <option value="Reinstate check-out">{"Reinstate check-out"}</option>
                            <option value="Rate change">{"Rate change"}</option>
                            <option value="Out of order">{"Out of order"}</option>
                            <option value="Out of service">{"Out of service"}</option>
                            <option value="Key re-issue">{"Key re-issue"}</option>
                            <option value="Paymaster carry forward">{"Paymaster carry forward"}</option>
                            <option value="Lost & found disposal">{"Lost & found disposal"}</option>
                            <option value="Visitor denied">{"Visitor denied"}</option>
                            <option value="Walk guest">{"Walk guest"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f538">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f538" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,10}"} maxLength="10" defaultValue={"CORPRATE"} />
                        <span className="field__hint">{"Unique within the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f539">
                          {"Text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f539" type="text" name="text" required={true} maxLength="60" defaultValue={"Corporate rate applied"} />
                        <span className="field__hint">{"1–60 characters"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f540">
                          <input id="f540" type="checkbox" role="switch" name="note" />
                          <span className="sw__track" />
                          {"Note required"}
                        </label>
                        <span className="field__hint">{"Free text on top of the reason"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f541">
                          <input id="f541" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-19-corprate">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-19-corprate" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-19-corprate-t">
                <a className="modal__backdrop" href="#FDS-P16-corprate" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-19-corprate-t">{"Deactivate CORPRATE Corporate rate applied?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P16-corprate" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. CORPRATE Corporate rate applied will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P16-corprate">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P16-bkgfix" data-code="FDS-P16" role="dialog" aria-modal="true" aria-labelledby="FDS-P16-bkgfix-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P16-bkgfix-t">{"Reason code: BKGFIX Rate corrected to the booking"}</h2>
                      <p className="modal__desc">{"Changes are written to the setup audit log (FDS-X07)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="f542">
                          {"Reason type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f542" name="type" required={true} defaultValue={"Rate change"}>
                            <option value="Room move">{"Room move"}</option>
                            <option value="Upgrade">{"Upgrade"}</option>
                            <option value="Early departure">{"Early departure"}</option>
                            <option value="Late check-out waiver">{"Late check-out waiver"}</option>
                            <option value="Early check-in waiver">{"Early check-in waiver"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Void">{"Void"}</option>
                            <option value="Refund">{"Refund"}</option>
                            <option value="Re-open bill">{"Re-open bill"}</option>
                            <option value="Credit note">{"Credit note"}</option>
                            <option value="Dirty room override">{"Dirty room override"}</option>
                            <option value="Cash difference">{"Cash difference"}</option>
                            <option value="Cancel check-in">{"Cancel check-in"}</option>
                            <option value="Reinstate check-out">{"Reinstate check-out"}</option>
                            <option value="Rate change">{"Rate change"}</option>
                            <option value="Out of order">{"Out of order"}</option>
                            <option value="Out of service">{"Out of service"}</option>
                            <option value="Key re-issue">{"Key re-issue"}</option>
                            <option value="Paymaster carry forward">{"Paymaster carry forward"}</option>
                            <option value="Lost & found disposal">{"Lost & found disposal"}</option>
                            <option value="Visitor denied">{"Visitor denied"}</option>
                            <option value="Walk guest">{"Walk guest"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f543">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f543" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,10}"} maxLength="10" defaultValue={"BKGFIX"} />
                        <span className="field__hint">{"Unique within the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f544">
                          {"Text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f544" type="text" name="text" required={true} maxLength="60" defaultValue={"Rate corrected to the booking"} />
                        <span className="field__hint">{"1–60 characters"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f545">
                          <input id="f545" type="checkbox" role="switch" name="note" />
                          <span className="sw__track" />
                          {"Note required"}
                        </label>
                        <span className="field__hint">{"Free text on top of the reason"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f546">
                          <input id="f546" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-19-bkgfix">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-19-bkgfix" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-19-bkgfix-t">
                <a className="modal__backdrop" href="#FDS-P16-bkgfix" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-19-bkgfix-t">{"Deactivate BKGFIX Rate corrected to the booking?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P16-bkgfix" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. BKGFIX Rate corrected to the booking will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P16-bkgfix">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P16-accomp" data-code="FDS-P16" role="dialog" aria-modal="true" aria-labelledby="FDS-P16-accomp-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P16-accomp-t">{"Reason code: ACCOMP AC compressor"}</h2>
                      <p className="modal__desc">{"Changes are written to the setup audit log (FDS-X07)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="f547">
                          {"Reason type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f547" name="type" required={true} defaultValue={"Out of order"}>
                            <option value="Room move">{"Room move"}</option>
                            <option value="Upgrade">{"Upgrade"}</option>
                            <option value="Early departure">{"Early departure"}</option>
                            <option value="Late check-out waiver">{"Late check-out waiver"}</option>
                            <option value="Early check-in waiver">{"Early check-in waiver"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Void">{"Void"}</option>
                            <option value="Refund">{"Refund"}</option>
                            <option value="Re-open bill">{"Re-open bill"}</option>
                            <option value="Credit note">{"Credit note"}</option>
                            <option value="Dirty room override">{"Dirty room override"}</option>
                            <option value="Cash difference">{"Cash difference"}</option>
                            <option value="Cancel check-in">{"Cancel check-in"}</option>
                            <option value="Reinstate check-out">{"Reinstate check-out"}</option>
                            <option value="Rate change">{"Rate change"}</option>
                            <option value="Out of order">{"Out of order"}</option>
                            <option value="Out of service">{"Out of service"}</option>
                            <option value="Key re-issue">{"Key re-issue"}</option>
                            <option value="Paymaster carry forward">{"Paymaster carry forward"}</option>
                            <option value="Lost & found disposal">{"Lost & found disposal"}</option>
                            <option value="Visitor denied">{"Visitor denied"}</option>
                            <option value="Walk guest">{"Walk guest"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f548">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f548" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,10}"} maxLength="10" defaultValue={"ACCOMP"} />
                        <span className="field__hint">{"Unique within the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f549">
                          {"Text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f549" type="text" name="text" required={true} maxLength="60" defaultValue={"AC compressor"} />
                        <span className="field__hint">{"1–60 characters"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f550">
                          <input id="f550" type="checkbox" role="switch" name="note" />
                          <span className="sw__track" />
                          {"Note required"}
                        </label>
                        <span className="field__hint">{"Free text on top of the reason"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f551">
                          <input id="f551" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-19-accomp">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-19-accomp" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-19-accomp-t">
                <a className="modal__backdrop" href="#FDS-P16-accomp" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-19-accomp-t">{"Deactivate ACCOMP AC compressor?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P16-accomp" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. ACCOMP AC compressor will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P16-accomp">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P16-plumb" data-code="FDS-P16" role="dialog" aria-modal="true" aria-labelledby="FDS-P16-plumb-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P16-plumb-t">{"Reason code: PLUMB Plumbing"}</h2>
                      <p className="modal__desc">{"Changes are written to the setup audit log (FDS-X07)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="f552">
                          {"Reason type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f552" name="type" required={true} defaultValue={"Out of order"}>
                            <option value="Room move">{"Room move"}</option>
                            <option value="Upgrade">{"Upgrade"}</option>
                            <option value="Early departure">{"Early departure"}</option>
                            <option value="Late check-out waiver">{"Late check-out waiver"}</option>
                            <option value="Early check-in waiver">{"Early check-in waiver"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Void">{"Void"}</option>
                            <option value="Refund">{"Refund"}</option>
                            <option value="Re-open bill">{"Re-open bill"}</option>
                            <option value="Credit note">{"Credit note"}</option>
                            <option value="Dirty room override">{"Dirty room override"}</option>
                            <option value="Cash difference">{"Cash difference"}</option>
                            <option value="Cancel check-in">{"Cancel check-in"}</option>
                            <option value="Reinstate check-out">{"Reinstate check-out"}</option>
                            <option value="Rate change">{"Rate change"}</option>
                            <option value="Out of order">{"Out of order"}</option>
                            <option value="Out of service">{"Out of service"}</option>
                            <option value="Key re-issue">{"Key re-issue"}</option>
                            <option value="Paymaster carry forward">{"Paymaster carry forward"}</option>
                            <option value="Lost & found disposal">{"Lost & found disposal"}</option>
                            <option value="Visitor denied">{"Visitor denied"}</option>
                            <option value="Walk guest">{"Walk guest"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f553">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f553" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,10}"} maxLength="10" defaultValue={"PLUMB"} />
                        <span className="field__hint">{"Unique within the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f554">
                          {"Text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f554" type="text" name="text" required={true} maxLength="60" defaultValue={"Plumbing"} />
                        <span className="field__hint">{"1–60 characters"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f555">
                          <input id="f555" type="checkbox" role="switch" name="note" />
                          <span className="sw__track" />
                          {"Note required"}
                        </label>
                        <span className="field__hint">{"Free text on top of the reason"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f556">
                          <input id="f556" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-19-plumb">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-19-plumb" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-19-plumb-t">
                <a className="modal__backdrop" href="#FDS-P16-plumb" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-19-plumb-t">{"Deactivate PLUMB Plumbing?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P16-plumb" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. PLUMB Plumbing will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P16-plumb">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P16-renov" data-code="FDS-P16" role="dialog" aria-modal="true" aria-labelledby="FDS-P16-renov-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P16-renov-t">{"Reason code: RENOV Refurbishment"}</h2>
                      <p className="modal__desc">{"Changes are written to the setup audit log (FDS-X07)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="f557">
                          {"Reason type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f557" name="type" required={true} defaultValue={"Out of order"}>
                            <option value="Room move">{"Room move"}</option>
                            <option value="Upgrade">{"Upgrade"}</option>
                            <option value="Early departure">{"Early departure"}</option>
                            <option value="Late check-out waiver">{"Late check-out waiver"}</option>
                            <option value="Early check-in waiver">{"Early check-in waiver"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Void">{"Void"}</option>
                            <option value="Refund">{"Refund"}</option>
                            <option value="Re-open bill">{"Re-open bill"}</option>
                            <option value="Credit note">{"Credit note"}</option>
                            <option value="Dirty room override">{"Dirty room override"}</option>
                            <option value="Cash difference">{"Cash difference"}</option>
                            <option value="Cancel check-in">{"Cancel check-in"}</option>
                            <option value="Reinstate check-out">{"Reinstate check-out"}</option>
                            <option value="Rate change">{"Rate change"}</option>
                            <option value="Out of order">{"Out of order"}</option>
                            <option value="Out of service">{"Out of service"}</option>
                            <option value="Key re-issue">{"Key re-issue"}</option>
                            <option value="Paymaster carry forward">{"Paymaster carry forward"}</option>
                            <option value="Lost & found disposal">{"Lost & found disposal"}</option>
                            <option value="Visitor denied">{"Visitor denied"}</option>
                            <option value="Walk guest">{"Walk guest"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f558">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f558" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,10}"} maxLength="10" defaultValue={"RENOV"} />
                        <span className="field__hint">{"Unique within the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f559">
                          {"Text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f559" type="text" name="text" required={true} maxLength="60" defaultValue={"Refurbishment"} />
                        <span className="field__hint">{"1–60 characters"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f560">
                          <input id="f560" type="checkbox" role="switch" name="note" />
                          <span className="sw__track" />
                          {"Note required"}
                        </label>
                        <span className="field__hint">{"Free text on top of the reason"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f561">
                          <input id="f561" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-19-renov">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-19-renov" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-19-renov-t">
                <a className="modal__backdrop" href="#FDS-P16-renov" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-19-renov-t">{"Deactivate RENOV Refurbishment?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P16-renov" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. RENOV Refurbishment will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P16-renov">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P16-minorfx" data-code="FDS-P16" role="dialog" aria-modal="true" aria-labelledby="FDS-P16-minorfx-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P16-minorfx-t">{"Reason code: MINORFX Minor repair"}</h2>
                      <p className="modal__desc">{"Changes are written to the setup audit log (FDS-X07)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="f562">
                          {"Reason type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f562" name="type" required={true} defaultValue={"Out of service"}>
                            <option value="Room move">{"Room move"}</option>
                            <option value="Upgrade">{"Upgrade"}</option>
                            <option value="Early departure">{"Early departure"}</option>
                            <option value="Late check-out waiver">{"Late check-out waiver"}</option>
                            <option value="Early check-in waiver">{"Early check-in waiver"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Void">{"Void"}</option>
                            <option value="Refund">{"Refund"}</option>
                            <option value="Re-open bill">{"Re-open bill"}</option>
                            <option value="Credit note">{"Credit note"}</option>
                            <option value="Dirty room override">{"Dirty room override"}</option>
                            <option value="Cash difference">{"Cash difference"}</option>
                            <option value="Cancel check-in">{"Cancel check-in"}</option>
                            <option value="Reinstate check-out">{"Reinstate check-out"}</option>
                            <option value="Rate change">{"Rate change"}</option>
                            <option value="Out of order">{"Out of order"}</option>
                            <option value="Out of service">{"Out of service"}</option>
                            <option value="Key re-issue">{"Key re-issue"}</option>
                            <option value="Paymaster carry forward">{"Paymaster carry forward"}</option>
                            <option value="Lost & found disposal">{"Lost & found disposal"}</option>
                            <option value="Visitor denied">{"Visitor denied"}</option>
                            <option value="Walk guest">{"Walk guest"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f563">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f563" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,10}"} maxLength="10" defaultValue={"MINORFX"} />
                        <span className="field__hint">{"Unique within the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f564">
                          {"Text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f564" type="text" name="text" required={true} maxLength="60" defaultValue={"Minor repair"} />
                        <span className="field__hint">{"1–60 characters"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f565">
                          <input id="f565" type="checkbox" role="switch" name="note" />
                          <span className="sw__track" />
                          {"Note required"}
                        </label>
                        <span className="field__hint">{"Free text on top of the reason"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f566">
                          <input id="f566" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-19-minorfx">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-19-minorfx" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-19-minorfx-t">
                <a className="modal__backdrop" href="#FDS-P16-minorfx" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-19-minorfx-t">{"Deactivate MINORFX Minor repair?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P16-minorfx" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. MINORFX Minor repair will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P16-minorfx">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P16-deepcln" data-code="FDS-P16" role="dialog" aria-modal="true" aria-labelledby="FDS-P16-deepcln-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P16-deepcln-t">{"Reason code: DEEPCLN Deep cleaning"}</h2>
                      <p className="modal__desc">{"Changes are written to the setup audit log (FDS-X07)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="f567">
                          {"Reason type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f567" name="type" required={true} defaultValue={"Out of service"}>
                            <option value="Room move">{"Room move"}</option>
                            <option value="Upgrade">{"Upgrade"}</option>
                            <option value="Early departure">{"Early departure"}</option>
                            <option value="Late check-out waiver">{"Late check-out waiver"}</option>
                            <option value="Early check-in waiver">{"Early check-in waiver"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Void">{"Void"}</option>
                            <option value="Refund">{"Refund"}</option>
                            <option value="Re-open bill">{"Re-open bill"}</option>
                            <option value="Credit note">{"Credit note"}</option>
                            <option value="Dirty room override">{"Dirty room override"}</option>
                            <option value="Cash difference">{"Cash difference"}</option>
                            <option value="Cancel check-in">{"Cancel check-in"}</option>
                            <option value="Reinstate check-out">{"Reinstate check-out"}</option>
                            <option value="Rate change">{"Rate change"}</option>
                            <option value="Out of order">{"Out of order"}</option>
                            <option value="Out of service">{"Out of service"}</option>
                            <option value="Key re-issue">{"Key re-issue"}</option>
                            <option value="Paymaster carry forward">{"Paymaster carry forward"}</option>
                            <option value="Lost & found disposal">{"Lost & found disposal"}</option>
                            <option value="Visitor denied">{"Visitor denied"}</option>
                            <option value="Walk guest">{"Walk guest"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f568">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f568" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,10}"} maxLength="10" defaultValue={"DEEPCLN"} />
                        <span className="field__hint">{"Unique within the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f569">
                          {"Text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f569" type="text" name="text" required={true} maxLength="60" defaultValue={"Deep cleaning"} />
                        <span className="field__hint">{"1–60 characters"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f570">
                          <input id="f570" type="checkbox" role="switch" name="note" />
                          <span className="sw__track" />
                          {"Note required"}
                        </label>
                        <span className="field__hint">{"Free text on top of the reason"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f571">
                          <input id="f571" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-19-deepcln">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-19-deepcln" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-19-deepcln-t">
                <a className="modal__backdrop" href="#FDS-P16-deepcln" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-19-deepcln-t">{"Deactivate DEEPCLN Deep cleaning?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P16-deepcln" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. DEEPCLN Deep cleaning will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P16-deepcln">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P16-lostkey" data-code="FDS-P16" role="dialog" aria-modal="true" aria-labelledby="FDS-P16-lostkey-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P16-lostkey-t">{"Reason code: LOSTKEY Lost key"}</h2>
                      <p className="modal__desc">{"Changes are written to the setup audit log (FDS-X07)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="f572">
                          {"Reason type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f572" name="type" required={true} defaultValue={"Key re-issue"}>
                            <option value="Room move">{"Room move"}</option>
                            <option value="Upgrade">{"Upgrade"}</option>
                            <option value="Early departure">{"Early departure"}</option>
                            <option value="Late check-out waiver">{"Late check-out waiver"}</option>
                            <option value="Early check-in waiver">{"Early check-in waiver"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Void">{"Void"}</option>
                            <option value="Refund">{"Refund"}</option>
                            <option value="Re-open bill">{"Re-open bill"}</option>
                            <option value="Credit note">{"Credit note"}</option>
                            <option value="Dirty room override">{"Dirty room override"}</option>
                            <option value="Cash difference">{"Cash difference"}</option>
                            <option value="Cancel check-in">{"Cancel check-in"}</option>
                            <option value="Reinstate check-out">{"Reinstate check-out"}</option>
                            <option value="Rate change">{"Rate change"}</option>
                            <option value="Out of order">{"Out of order"}</option>
                            <option value="Out of service">{"Out of service"}</option>
                            <option value="Key re-issue">{"Key re-issue"}</option>
                            <option value="Paymaster carry forward">{"Paymaster carry forward"}</option>
                            <option value="Lost & found disposal">{"Lost & found disposal"}</option>
                            <option value="Visitor denied">{"Visitor denied"}</option>
                            <option value="Walk guest">{"Walk guest"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f573">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f573" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,10}"} maxLength="10" defaultValue={"LOSTKEY"} />
                        <span className="field__hint">{"Unique within the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f574">
                          {"Text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f574" type="text" name="text" required={true} maxLength="60" defaultValue={"Lost key"} />
                        <span className="field__hint">{"1–60 characters"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f575">
                          <input id="f575" type="checkbox" role="switch" name="note" />
                          <span className="sw__track" />
                          {"Note required"}
                        </label>
                        <span className="field__hint">{"Free text on top of the reason"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f576">
                          <input id="f576" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-19-lostkey">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-19-lostkey" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-19-lostkey-t">
                <a className="modal__backdrop" href="#FDS-P16-lostkey" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-19-lostkey-t">{"Deactivate LOSTKEY Lost key?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P16-lostkey" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. LOSTKEY Lost key will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P16-lostkey">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P16-demag" data-code="FDS-P16" role="dialog" aria-modal="true" aria-labelledby="FDS-P16-demag-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P16-demag-t">{"Reason code: DEMAG Card demagnetised"}</h2>
                      <p className="modal__desc">{"Changes are written to the setup audit log (FDS-X07)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="f577">
                          {"Reason type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f577" name="type" required={true} defaultValue={"Key re-issue"}>
                            <option value="Room move">{"Room move"}</option>
                            <option value="Upgrade">{"Upgrade"}</option>
                            <option value="Early departure">{"Early departure"}</option>
                            <option value="Late check-out waiver">{"Late check-out waiver"}</option>
                            <option value="Early check-in waiver">{"Early check-in waiver"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Void">{"Void"}</option>
                            <option value="Refund">{"Refund"}</option>
                            <option value="Re-open bill">{"Re-open bill"}</option>
                            <option value="Credit note">{"Credit note"}</option>
                            <option value="Dirty room override">{"Dirty room override"}</option>
                            <option value="Cash difference">{"Cash difference"}</option>
                            <option value="Cancel check-in">{"Cancel check-in"}</option>
                            <option value="Reinstate check-out">{"Reinstate check-out"}</option>
                            <option value="Rate change">{"Rate change"}</option>
                            <option value="Out of order">{"Out of order"}</option>
                            <option value="Out of service">{"Out of service"}</option>
                            <option value="Key re-issue">{"Key re-issue"}</option>
                            <option value="Paymaster carry forward">{"Paymaster carry forward"}</option>
                            <option value="Lost & found disposal">{"Lost & found disposal"}</option>
                            <option value="Visitor denied">{"Visitor denied"}</option>
                            <option value="Walk guest">{"Walk guest"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f578">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f578" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,10}"} maxLength="10" defaultValue={"DEMAG"} />
                        <span className="field__hint">{"Unique within the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f579">
                          {"Text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f579" type="text" name="text" required={true} maxLength="60" defaultValue={"Card demagnetised"} />
                        <span className="field__hint">{"1–60 characters"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f580">
                          <input id="f580" type="checkbox" role="switch" name="note" />
                          <span className="sw__track" />
                          {"Note required"}
                        </label>
                        <span className="field__hint">{"Free text on top of the reason"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f581">
                          <input id="f581" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-19-demag">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-19-demag" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-19-demag-t">
                <a className="modal__backdrop" href="#FDS-P16-demag" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-19-demag-t">{"Deactivate DEMAG Card demagnetised?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P16-demag" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. DEMAG Card demagnetised will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P16-demag">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P16-evtopen" data-code="FDS-P16" role="dialog" aria-modal="true" aria-labelledby="FDS-P16-evtopen-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P16-evtopen-t">{"Reason code: EVTOPEN Event still running"}</h2>
                      <p className="modal__desc">{"Changes are written to the setup audit log (FDS-X07)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="f582">
                          {"Reason type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f582" name="type" required={true} defaultValue={"Paymaster carry forward"}>
                            <option value="Room move">{"Room move"}</option>
                            <option value="Upgrade">{"Upgrade"}</option>
                            <option value="Early departure">{"Early departure"}</option>
                            <option value="Late check-out waiver">{"Late check-out waiver"}</option>
                            <option value="Early check-in waiver">{"Early check-in waiver"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Void">{"Void"}</option>
                            <option value="Refund">{"Refund"}</option>
                            <option value="Re-open bill">{"Re-open bill"}</option>
                            <option value="Credit note">{"Credit note"}</option>
                            <option value="Dirty room override">{"Dirty room override"}</option>
                            <option value="Cash difference">{"Cash difference"}</option>
                            <option value="Cancel check-in">{"Cancel check-in"}</option>
                            <option value="Reinstate check-out">{"Reinstate check-out"}</option>
                            <option value="Rate change">{"Rate change"}</option>
                            <option value="Out of order">{"Out of order"}</option>
                            <option value="Out of service">{"Out of service"}</option>
                            <option value="Key re-issue">{"Key re-issue"}</option>
                            <option value="Paymaster carry forward">{"Paymaster carry forward"}</option>
                            <option value="Lost & found disposal">{"Lost & found disposal"}</option>
                            <option value="Visitor denied">{"Visitor denied"}</option>
                            <option value="Walk guest">{"Walk guest"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f583">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f583" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,10}"} maxLength="10" defaultValue={"EVTOPEN"} />
                        <span className="field__hint">{"Unique within the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f584">
                          {"Text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f584" type="text" name="text" required={true} maxLength="60" defaultValue={"Event still running"} />
                        <span className="field__hint">{"1–60 characters"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f585">
                          <input id="f585" type="checkbox" role="switch" name="note" />
                          <span className="sw__track" />
                          {"Note required"}
                        </label>
                        <span className="field__hint">{"Free text on top of the reason"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f586">
                          <input id="f586" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-19-evtopen">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-19-evtopen" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-19-evtopen-t">
                <a className="modal__backdrop" href="#FDS-P16-evtopen" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-19-evtopen-t">{"Deactivate EVTOPEN Event still running?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P16-evtopen" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. EVTOPEN Event still running will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P16-evtopen">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P16-awaitap" data-code="FDS-P16" role="dialog" aria-modal="true" aria-labelledby="FDS-P16-awaitap-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P16-awaitap-t">{"Reason code: AWAITAP Awaiting approval"}</h2>
                      <p className="modal__desc">{"Changes are written to the setup audit log (FDS-X07)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="f587">
                          {"Reason type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f587" name="type" required={true} defaultValue={"Paymaster carry forward"}>
                            <option value="Room move">{"Room move"}</option>
                            <option value="Upgrade">{"Upgrade"}</option>
                            <option value="Early departure">{"Early departure"}</option>
                            <option value="Late check-out waiver">{"Late check-out waiver"}</option>
                            <option value="Early check-in waiver">{"Early check-in waiver"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Void">{"Void"}</option>
                            <option value="Refund">{"Refund"}</option>
                            <option value="Re-open bill">{"Re-open bill"}</option>
                            <option value="Credit note">{"Credit note"}</option>
                            <option value="Dirty room override">{"Dirty room override"}</option>
                            <option value="Cash difference">{"Cash difference"}</option>
                            <option value="Cancel check-in">{"Cancel check-in"}</option>
                            <option value="Reinstate check-out">{"Reinstate check-out"}</option>
                            <option value="Rate change">{"Rate change"}</option>
                            <option value="Out of order">{"Out of order"}</option>
                            <option value="Out of service">{"Out of service"}</option>
                            <option value="Key re-issue">{"Key re-issue"}</option>
                            <option value="Paymaster carry forward">{"Paymaster carry forward"}</option>
                            <option value="Lost & found disposal">{"Lost & found disposal"}</option>
                            <option value="Visitor denied">{"Visitor denied"}</option>
                            <option value="Walk guest">{"Walk guest"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f588">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f588" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,10}"} maxLength="10" defaultValue={"AWAITAP"} />
                        <span className="field__hint">{"Unique within the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f589">
                          {"Text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f589" type="text" name="text" required={true} maxLength="60" defaultValue={"Awaiting approval"} />
                        <span className="field__hint">{"1–60 characters"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f590">
                          <input id="f590" type="checkbox" role="switch" name="note" />
                          <span className="sw__track" />
                          {"Note required"}
                        </label>
                        <span className="field__hint">{"Free text on top of the reason"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f591">
                          <input id="f591" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-19-awaitap">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-19-awaitap" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-19-awaitap-t">
                <a className="modal__backdrop" href="#FDS-P16-awaitap" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-19-awaitap-t">{"Deactivate AWAITAP Awaiting approval?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P16-awaitap" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. AWAITAP Awaiting approval will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P16-awaitap">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P16-expired" data-code="FDS-P16" role="dialog" aria-modal="true" aria-labelledby="FDS-P16-expired-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P16-expired-t">{"Reason code: EXPIRED Retention period over"}</h2>
                      <p className="modal__desc">{"Changes are written to the setup audit log (FDS-X07)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="f592">
                          {"Reason type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f592" name="type" required={true} defaultValue={"Lost & found disposal"}>
                            <option value="Room move">{"Room move"}</option>
                            <option value="Upgrade">{"Upgrade"}</option>
                            <option value="Early departure">{"Early departure"}</option>
                            <option value="Late check-out waiver">{"Late check-out waiver"}</option>
                            <option value="Early check-in waiver">{"Early check-in waiver"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Void">{"Void"}</option>
                            <option value="Refund">{"Refund"}</option>
                            <option value="Re-open bill">{"Re-open bill"}</option>
                            <option value="Credit note">{"Credit note"}</option>
                            <option value="Dirty room override">{"Dirty room override"}</option>
                            <option value="Cash difference">{"Cash difference"}</option>
                            <option value="Cancel check-in">{"Cancel check-in"}</option>
                            <option value="Reinstate check-out">{"Reinstate check-out"}</option>
                            <option value="Rate change">{"Rate change"}</option>
                            <option value="Out of order">{"Out of order"}</option>
                            <option value="Out of service">{"Out of service"}</option>
                            <option value="Key re-issue">{"Key re-issue"}</option>
                            <option value="Paymaster carry forward">{"Paymaster carry forward"}</option>
                            <option value="Lost & found disposal">{"Lost & found disposal"}</option>
                            <option value="Visitor denied">{"Visitor denied"}</option>
                            <option value="Walk guest">{"Walk guest"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f593">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f593" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,10}"} maxLength="10" defaultValue={"EXPIRED"} />
                        <span className="field__hint">{"Unique within the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f594">
                          {"Text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f594" type="text" name="text" required={true} maxLength="60" defaultValue={"Retention period over"} />
                        <span className="field__hint">{"1–60 characters"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f595">
                          <input id="f595" type="checkbox" role="switch" name="note" />
                          <span className="sw__track" />
                          {"Note required"}
                        </label>
                        <span className="field__hint">{"Free text on top of the reason"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f596">
                          <input id="f596" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-19-expired">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-19-expired" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-19-expired-t">
                <a className="modal__backdrop" href="#FDS-P16-expired" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-19-expired-t">{"Deactivate EXPIRED Retention period over?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P16-expired" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. EXPIRED Retention period over will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P16-expired">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P16-donated" data-code="FDS-P16" role="dialog" aria-modal="true" aria-labelledby="FDS-P16-donated-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P16-donated-t">{"Reason code: DONATED Donated to charity"}</h2>
                      <p className="modal__desc">{"Changes are written to the setup audit log (FDS-X07)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="f597">
                          {"Reason type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f597" name="type" required={true} defaultValue={"Lost & found disposal"}>
                            <option value="Room move">{"Room move"}</option>
                            <option value="Upgrade">{"Upgrade"}</option>
                            <option value="Early departure">{"Early departure"}</option>
                            <option value="Late check-out waiver">{"Late check-out waiver"}</option>
                            <option value="Early check-in waiver">{"Early check-in waiver"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Void">{"Void"}</option>
                            <option value="Refund">{"Refund"}</option>
                            <option value="Re-open bill">{"Re-open bill"}</option>
                            <option value="Credit note">{"Credit note"}</option>
                            <option value="Dirty room override">{"Dirty room override"}</option>
                            <option value="Cash difference">{"Cash difference"}</option>
                            <option value="Cancel check-in">{"Cancel check-in"}</option>
                            <option value="Reinstate check-out">{"Reinstate check-out"}</option>
                            <option value="Rate change">{"Rate change"}</option>
                            <option value="Out of order">{"Out of order"}</option>
                            <option value="Out of service">{"Out of service"}</option>
                            <option value="Key re-issue">{"Key re-issue"}</option>
                            <option value="Paymaster carry forward">{"Paymaster carry forward"}</option>
                            <option value="Lost & found disposal">{"Lost & found disposal"}</option>
                            <option value="Visitor denied">{"Visitor denied"}</option>
                            <option value="Walk guest">{"Walk guest"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f598">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f598" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,10}"} maxLength="10" defaultValue={"DONATED"} />
                        <span className="field__hint">{"Unique within the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f599">
                          {"Text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f599" type="text" name="text" required={true} maxLength="60" defaultValue={"Donated to charity"} />
                        <span className="field__hint">{"1–60 characters"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f600">
                          <input id="f600" type="checkbox" role="switch" name="note" />
                          <span className="sw__track" />
                          {"Note required"}
                        </label>
                        <span className="field__hint">{"Free text on top of the reason"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f601">
                          <input id="f601" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-19-donated">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-19-donated" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-19-donated-t">
                <a className="modal__backdrop" href="#FDS-P16-donated" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-19-donated-t">{"Deactivate DONATED Donated to charity?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P16-donated" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. DONATED Donated to charity will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P16-donated">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P16-noconsnt" data-code="FDS-P16" role="dialog" aria-modal="true" aria-labelledby="FDS-P16-noconsnt-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P16-noconsnt-t">{"Reason code: NOCONSNT Guest did not consent"}</h2>
                      <p className="modal__desc">{"Changes are written to the setup audit log (FDS-X07)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="f602">
                          {"Reason type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f602" name="type" required={true} defaultValue={"Visitor denied"}>
                            <option value="Room move">{"Room move"}</option>
                            <option value="Upgrade">{"Upgrade"}</option>
                            <option value="Early departure">{"Early departure"}</option>
                            <option value="Late check-out waiver">{"Late check-out waiver"}</option>
                            <option value="Early check-in waiver">{"Early check-in waiver"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Void">{"Void"}</option>
                            <option value="Refund">{"Refund"}</option>
                            <option value="Re-open bill">{"Re-open bill"}</option>
                            <option value="Credit note">{"Credit note"}</option>
                            <option value="Dirty room override">{"Dirty room override"}</option>
                            <option value="Cash difference">{"Cash difference"}</option>
                            <option value="Cancel check-in">{"Cancel check-in"}</option>
                            <option value="Reinstate check-out">{"Reinstate check-out"}</option>
                            <option value="Rate change">{"Rate change"}</option>
                            <option value="Out of order">{"Out of order"}</option>
                            <option value="Out of service">{"Out of service"}</option>
                            <option value="Key re-issue">{"Key re-issue"}</option>
                            <option value="Paymaster carry forward">{"Paymaster carry forward"}</option>
                            <option value="Lost & found disposal">{"Lost & found disposal"}</option>
                            <option value="Visitor denied">{"Visitor denied"}</option>
                            <option value="Walk guest">{"Walk guest"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f603">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f603" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,10}"} maxLength="10" defaultValue={"NOCONSNT"} />
                        <span className="field__hint">{"Unique within the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f604">
                          {"Text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f604" type="text" name="text" required={true} maxLength="60" defaultValue={"Guest did not consent"} />
                        <span className="field__hint">{"1–60 characters"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f605">
                          <input id="f605" type="checkbox" role="switch" name="note" />
                          <span className="sw__track" />
                          {"Note required"}
                        </label>
                        <span className="field__hint">{"Free text on top of the reason"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f606">
                          <input id="f606" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-19-noconsnt">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-19-noconsnt" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-19-noconsnt-t">
                <a className="modal__backdrop" href="#FDS-P16-noconsnt" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-19-noconsnt-t">{"Deactivate NOCONSNT Guest did not consent?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P16-noconsnt" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. NOCONSNT Guest did not consent will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P16-noconsnt">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P16-afterhrs" data-code="FDS-P16" role="dialog" aria-modal="true" aria-labelledby="FDS-P16-afterhrs-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P16-afterhrs-t">{"Reason code: AFTERHRS After visiting hours"}</h2>
                      <p className="modal__desc">{"Changes are written to the setup audit log (FDS-X07)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="f607">
                          {"Reason type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f607" name="type" required={true} defaultValue={"Visitor denied"}>
                            <option value="Room move">{"Room move"}</option>
                            <option value="Upgrade">{"Upgrade"}</option>
                            <option value="Early departure">{"Early departure"}</option>
                            <option value="Late check-out waiver">{"Late check-out waiver"}</option>
                            <option value="Early check-in waiver">{"Early check-in waiver"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Void">{"Void"}</option>
                            <option value="Refund">{"Refund"}</option>
                            <option value="Re-open bill">{"Re-open bill"}</option>
                            <option value="Credit note">{"Credit note"}</option>
                            <option value="Dirty room override">{"Dirty room override"}</option>
                            <option value="Cash difference">{"Cash difference"}</option>
                            <option value="Cancel check-in">{"Cancel check-in"}</option>
                            <option value="Reinstate check-out">{"Reinstate check-out"}</option>
                            <option value="Rate change">{"Rate change"}</option>
                            <option value="Out of order">{"Out of order"}</option>
                            <option value="Out of service">{"Out of service"}</option>
                            <option value="Key re-issue">{"Key re-issue"}</option>
                            <option value="Paymaster carry forward">{"Paymaster carry forward"}</option>
                            <option value="Lost & found disposal">{"Lost & found disposal"}</option>
                            <option value="Visitor denied">{"Visitor denied"}</option>
                            <option value="Walk guest">{"Walk guest"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f608">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f608" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,10}"} maxLength="10" defaultValue={"AFTERHRS"} />
                        <span className="field__hint">{"Unique within the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f609">
                          {"Text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f609" type="text" name="text" required={true} maxLength="60" defaultValue={"After visiting hours"} />
                        <span className="field__hint">{"1–60 characters"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f610">
                          <input id="f610" type="checkbox" role="switch" name="note" />
                          <span className="sw__track" />
                          {"Note required"}
                        </label>
                        <span className="field__hint">{"Free text on top of the reason"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f611">
                          <input id="f611" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-19-afterhrs">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-19-afterhrs" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-19-afterhrs-t">
                <a className="modal__backdrop" href="#FDS-P16-afterhrs" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-19-afterhrs-t">{"Deactivate AFTERHRS After visiting hours?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P16-afterhrs" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. AFTERHRS After visiting hours will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P16-afterhrs">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P16-overbk" data-code="FDS-P16" role="dialog" aria-modal="true" aria-labelledby="FDS-P16-overbk-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P16-overbk-t">{"Reason code: OVERBK Overbooked – relocated to a partner hotel"}</h2>
                      <p className="modal__desc">{"Changes are written to the setup audit log (FDS-X07)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="f612">
                          {"Reason type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f612" name="type" required={true} defaultValue={"Walk guest"}>
                            <option value="Room move">{"Room move"}</option>
                            <option value="Upgrade">{"Upgrade"}</option>
                            <option value="Early departure">{"Early departure"}</option>
                            <option value="Late check-out waiver">{"Late check-out waiver"}</option>
                            <option value="Early check-in waiver">{"Early check-in waiver"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Void">{"Void"}</option>
                            <option value="Refund">{"Refund"}</option>
                            <option value="Re-open bill">{"Re-open bill"}</option>
                            <option value="Credit note">{"Credit note"}</option>
                            <option value="Dirty room override">{"Dirty room override"}</option>
                            <option value="Cash difference">{"Cash difference"}</option>
                            <option value="Cancel check-in">{"Cancel check-in"}</option>
                            <option value="Reinstate check-out">{"Reinstate check-out"}</option>
                            <option value="Rate change">{"Rate change"}</option>
                            <option value="Out of order">{"Out of order"}</option>
                            <option value="Out of service">{"Out of service"}</option>
                            <option value="Key re-issue">{"Key re-issue"}</option>
                            <option value="Paymaster carry forward">{"Paymaster carry forward"}</option>
                            <option value="Lost & found disposal">{"Lost & found disposal"}</option>
                            <option value="Visitor denied">{"Visitor denied"}</option>
                            <option value="Walk guest">{"Walk guest"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f613">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f613" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,10}"} maxLength="10" defaultValue={"OVERBK"} />
                        <span className="field__hint">{"Unique within the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f614">
                          {"Text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f614" type="text" name="text" required={true} maxLength="60" defaultValue={"Overbooked – relocated to a partner hotel"} />
                        <span className="field__hint">{"1–60 characters"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f615">
                          <input id="f615" type="checkbox" role="switch" name="note" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Note required"}
                        </label>
                        <span className="field__hint">{"Free text on top of the reason"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f616">
                          <input id="f616" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-19-overbk">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-19-overbk" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-19-overbk-t">
                <a className="modal__backdrop" href="#FDS-P16-overbk" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-19-overbk-t">{"Deactivate OVERBK Overbooked – relocated to a partner hotel?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P16-overbk" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. OVERBK Overbooked – relocated to a partner hotel will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P16-overbk">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P16-nshrec" data-code="FDS-P16" role="dialog" aria-modal="true" aria-labelledby="FDS-P16-nshrec-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P16-nshrec-t">{"Reason code: NSHREC Overbooking recovery"}</h2>
                      <p className="modal__desc">{"Changes are written to the setup audit log (FDS-X07)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="f617">
                          {"Reason type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f617" name="type" required={true} defaultValue={"Walk guest"}>
                            <option value="Room move">{"Room move"}</option>
                            <option value="Upgrade">{"Upgrade"}</option>
                            <option value="Early departure">{"Early departure"}</option>
                            <option value="Late check-out waiver">{"Late check-out waiver"}</option>
                            <option value="Early check-in waiver">{"Early check-in waiver"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Void">{"Void"}</option>
                            <option value="Refund">{"Refund"}</option>
                            <option value="Re-open bill">{"Re-open bill"}</option>
                            <option value="Credit note">{"Credit note"}</option>
                            <option value="Dirty room override">{"Dirty room override"}</option>
                            <option value="Cash difference">{"Cash difference"}</option>
                            <option value="Cancel check-in">{"Cancel check-in"}</option>
                            <option value="Reinstate check-out">{"Reinstate check-out"}</option>
                            <option value="Rate change">{"Rate change"}</option>
                            <option value="Out of order">{"Out of order"}</option>
                            <option value="Out of service">{"Out of service"}</option>
                            <option value="Key re-issue">{"Key re-issue"}</option>
                            <option value="Paymaster carry forward">{"Paymaster carry forward"}</option>
                            <option value="Lost & found disposal">{"Lost & found disposal"}</option>
                            <option value="Visitor denied">{"Visitor denied"}</option>
                            <option value="Walk guest">{"Walk guest"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f618">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f618" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,10}"} maxLength="10" defaultValue={"NSHREC"} />
                        <span className="field__hint">{"Unique within the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f619">
                          {"Text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f619" type="text" name="text" required={true} maxLength="60" defaultValue={"Overbooking recovery"} />
                        <span className="field__hint">{"1–60 characters"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f620">
                          <input id="f620" type="checkbox" role="switch" name="note" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Note required"}
                        </label>
                        <span className="field__hint">{"Free text on top of the reason"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f621">
                          <input id="f621" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-19-nshrec">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-19-nshrec" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-19-nshrec-t">
                <a className="modal__backdrop" href="#FDS-P16-nshrec" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-19-nshrec-t">{"Deactivate NSHREC Overbooking recovery?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P16-nshrec" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. NSHREC Overbooking recovery will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P16-nshrec">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P16" data-code="FDS-P16" role="dialog" aria-modal="true" aria-labelledby="FDS-P16-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P16-t">{"Add reason code"}</h2>
                      <p className="modal__desc">{"Reason type, code and text."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="f622">
                          {"Reason type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f622" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Room move">{"Room move"}</option>
                            <option value="Upgrade">{"Upgrade"}</option>
                            <option value="Early departure">{"Early departure"}</option>
                            <option value="Late check-out waiver">{"Late check-out waiver"}</option>
                            <option value="Early check-in waiver">{"Early check-in waiver"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Void">{"Void"}</option>
                            <option value="Refund">{"Refund"}</option>
                            <option value="Re-open bill">{"Re-open bill"}</option>
                            <option value="Credit note">{"Credit note"}</option>
                            <option value="Dirty room override">{"Dirty room override"}</option>
                            <option value="Cash difference">{"Cash difference"}</option>
                            <option value="Cancel check-in">{"Cancel check-in"}</option>
                            <option value="Reinstate check-out">{"Reinstate check-out"}</option>
                            <option value="Rate change">{"Rate change"}</option>
                            <option value="Out of order">{"Out of order"}</option>
                            <option value="Out of service">{"Out of service"}</option>
                            <option value="Key re-issue">{"Key re-issue"}</option>
                            <option value="Paymaster carry forward">{"Paymaster carry forward"}</option>
                            <option value="Lost & found disposal">{"Lost & found disposal"}</option>
                            <option value="Visitor denied">{"Visitor denied"}</option>
                            <option value="Walk guest">{"Walk guest"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f623">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f623" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,10}"} maxLength="10" defaultValue={""} />
                        <span className="field__hint">{"Unique within the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f624">
                          {"Text "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f624" type="text" name="text" required={true} maxLength="60" defaultValue={""} />
                        <span className="field__hint">{"1–60 characters"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f625">
                          <input id="f625" type="checkbox" role="switch" name="note" />
                          <span className="sw__track" />
                          {"Note required"}
                        </label>
                        <span className="field__hint">{"Free text on top of the reason"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f626">
                          <input id="f626" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="log-FDS-19" data-code="FDS-19-log" role="dialog" aria-modal="true" aria-labelledby="log-FDS-19-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="log-FDS-19-t">{"Change log – Front Desk Reason Codes"}</h2>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-scroll">
                      <table className="srt dt__table " style={{"--srt-cols": "auto auto auto auto auto"}} data-mc="">
                        <caption className="sr-only">{"Change log"}</caption>
                        <thead>
                          <tr>
                            <th scope="col">
                              <input className="srt-i srt-a0" type="radio" name="stfds190" id="stfds190-0a" aria-label="Sort by When, lowest or A first" />
                              <input className="srt-i srt-d0" type="radio" name="stfds190" id="stfds190-0d" aria-label="Sort by When, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfds190-0a">{"When"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfds190-0d" aria-hidden="true">{"When"}</label>
                            </th>
                            <th scope="col">
                              <input className="srt-i srt-a1" type="radio" name="stfds190" id="stfds190-1a" aria-label="Sort by User, lowest or A first" />
                              <input className="srt-i srt-d1" type="radio" name="stfds190" id="stfds190-1d" aria-label="Sort by User, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfds190-1a">{"User"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfds190-1d" aria-hidden="true">{"User"}</label>
                            </th>
                            <th scope="col">{"Setting"}</th>
                            <th scope="col">
                              <input className="srt-i srt-a3" type="radio" name="stfds190" id="stfds190-3a" aria-label="Sort by Old → new, lowest or A first" />
                              <input className="srt-i srt-d3" type="radio" name="stfds190" id="stfds190-3d" aria-label="Sort by Old → new, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfds190-3a">{"Old → new"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfds190-3d" aria-hidden="true">{"Old → new"}</label>
                            </th>
                            <th scope="col">
                              <input className="srt-i srt-a4" type="radio" name="stfds190" id="stfds190-4a" aria-label="Sort by Note, lowest or A first" />
                              <input className="srt-i srt-d4" type="radio" name="stfds190" id="stfds190-4d" aria-label="Sort by Note, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfds190-4a">{"Note"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfds190-4d" aria-hidden="true">{"Note"}</label>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{"--k0": "3", "--k1": "1", "--k3": "3", "--k4": "3"}}>
                            <td className="dt__td nw" data-label="When" data-w2="" data-t="">{"22 Oct 09:12"}</td>
                            <td className="dt__td nw" data-label="User" data-w2="">{"Meera Prem"}</td>
                            <td className="dt__td" data-label="Setting" data-w2="">{"Front Desk Reason Codes"}</td>
                            <td className="dt__td nw" data-label="Old → new" data-w2="">{"Updated settings"}</td>
                            <td className="dt__td nw" data-label="Note" data-w2="">{"Saved from this screen"}</td>
                          </tr>
                          <tr style={{"--k0": "2", "--k1": "2", "--k3": "2", "--k4": "2"}}>
                            <td className="dt__td nw" data-label="When" data-w2="" data-t="">{"21 Oct 17:40"}</td>
                            <td className="dt__td nw" data-label="User" data-w2="">{"System Admin"}</td>
                            <td className="dt__td" data-label="Setting" data-w2="">{"Front Desk Reason Codes"}</td>
                            <td className="dt__td" data-label="Old → new">{"Reviewed with the GM approval document"}</td>
                            <td className="dt__td nw" data-label="Note" data-w2="">{"No change"}</td>
                          </tr>
                          <tr style={{"--k0": "1", "--k1": "1", "--k3": "1", "--k4": "1"}}>
                            <td className="dt__td nw" data-label="When" data-w2="" data-t="">{"20 Oct 11:05"}</td>
                            <td className="dt__td nw" data-label="User" data-w2="">{"Meera Prem"}</td>
                            <td className="dt__td" data-label="Setting" data-w2="">{"Front Desk Reason Codes"}</td>
                            <td className="dt__td nw" data-label="Old → new" data-w2="">{"Created demo values"}</td>
                            <td className="dt__td nw" data-label="Note" data-w2="">{"Initial setup"}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="fd-muted">{"Every change is recorded with the user, the time and the old and new value (FDS-X07)."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--sm" id="export-FDS-19" data-code="FDS-19-export" role="dialog" aria-modal="true" aria-labelledby="export-FDS-19-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-19-front-desk-reason-codes/#exported" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="export-FDS-19-t">{"Export Front Desk Reason Codes"}</h2>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Download the list as a spreadsheet or PDF. The export contains every row shown, with the filters applied."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Download"}</button>
                  </div>
                </form>
              </div>
              <div className="fd-toast" id="done" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Reason code saved"}
                  <small>{"The change was written to the setup audit log."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast fd-toast--warn" id="deactivated" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#alert" />
                </svg>
                <div className="fd-toast__text">
                  {"Reason code deactivated"}
                  <small>{"It is kept for history and no longer offered on new transactions."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="exported" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Export ready"}
                  <small>{"Downloaded as Excel."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="modal modal--md" id="FDS-19-export" data-code="FDS-19-export" role="dialog" aria-modal="true" aria-labelledby="FDS-19-export-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FDS-19-export-t">{"Export this list"}</h2>
                      <p className="modal__desc">{"Choose which rows and columns go into the file."}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <label className="field">
                        <span className="field__label">{"Rows"}</span>
                        <select className="field__input field__input--select" defaultValue={"All rows"}>
                          <option>{"All rows"}</option>
                          <option>{"Active only"}</option>
                          <option>{"Inactive only"}</option>
                        </select>
                      </label>
                      <label className="field">
                        <span className="field__label">{"Changed"}</span>
                        <select className="field__input field__input--select" defaultValue={"Any time"}>
                          <option>{"Any time"}</option>
                          <option>{"In the last 7 days"}</option>
                          <option>{"In the last 30 days"}</option>
                          <option>{"Since the last export"}</option>
                        </select>
                      </label>
                      <label className="field">
                        <span className="field__label">{"Columns"}</span>
                        <select className="field__input field__input--select" defaultValue={"As shown on screen"}>
                          <option>{"As shown on screen"}</option>
                          <option>{"All columns"}</option>
                        </select>
                      </label>
                      <label className="field">
                        <span className="field__label">{"Format"}</span>
                        <select className="field__input field__input--select" defaultValue={"Excel (.xlsx)"}>
                          <option>{"Excel (.xlsx)"}</option>
                          <option>{"CSV"}</option>
                          <option>{"PDF"}</option>
                        </select>
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-file">
                      <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#download" />
                      </svg>
                      {"Export"}
                    </a>
                  </div>
                </div>
              </div>
              <details className="helpbox">
                <summary>
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#help" />
                  </svg>
                  {" Help for this screen "}
                  <span className="code-chip">{"FDS-19"}</span>
                </summary>
                <dl className="helpbox__body">
                  <dt>{"What it is for"}</dt>
                  <dd>{"Reasons for moves, waivers, voids, refunds, re-opens, overrides, cash differences and more"}</dd>
                  <dt>{"Opened from"}</dt>
                  <dd>
                    <Link to={"/front-desk-setup/fds-01-front-desk-setup-home"}>{"FDS-01"}</Link>
                  </dd>
                  <dt>{"Leads to"}</dt>
                  <dd>
                    <a href="/front-desk-setup/fds-19-front-desk-reason-codes/#FDS-P16">{"FDS-P16"}</a>
                  </dd>
                  <dt>{"Note"}</dt>
                  <dd>{"Static screen (HTML and CSS only): it shows the layout, fields and sample data. Saving and live data come when the backend is connected."}</dd>
                </dl>
              </details>
              <section className="card" data-flow="lists-used" style={{"marginTop": "16px"}}>
                <h2 className="s-card-title">{"Lists used on other screens"}</h2>
                <p className="field__hint">{"The dropdowns on those screens read these lists. Add or remove a value here."}</p>
                <div className="s-scroll">
                  <table className="dt__table dt--hug" data-nosort="" data-mc="">
                    <caption className="sr-only">{"Lists used on other screens"}</caption>
                    <thead>
                      <tr>
                        <th scope="col">{"List"}</th>
                        <th scope="col">{"Values"}</th>
                        <th scope="col">{"Used on"}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="dt__td" data-label="List" data-w2="" data-t="">{"Cancel an invoice or IRN"}</td>
                        <td className="dt__td" data-label="Values" data-w2="">{"Data entry mistake, Order cancelled, Duplicate, Wrong recipient"}</td>
                        <td className="dt__td" data-label="Used on" data-w2="">{"FD-16"}</td>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="List" data-w2="" data-t="">{"Refund mode"}</td>
                        <td className="dt__td" data-label="Values" data-w2="">{"Original mode, Cash, Bank transfer"}</td>
                        <td className="dt__td" data-label="Used on" data-w2="">{"FD-08"}</td>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="List" data-w2="" data-t="">{"Sharer relationship"}</td>
                        <td className="dt__td" data-label="Values" data-w2="">{"Spouse, Colleague, Child, Parent, Friend, Other"}</td>
                        <td className="dt__td" data-label="Used on" data-w2="">{"FD-03, FD-07"}</td>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="List" data-w2="" data-t="">{"Late or special instructions"}</td>
                        <td className="dt__td" data-label="Values" data-w2="">{"With any instruction, None"}</td>
                        <td className="dt__td" data-label="Used on" data-w2="">{"FD-02"}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
              <div className="modal modal--sm" id="flow-done" data-flow="flow-done" role="dialog" aria-modal="true" aria-labelledby="flow-done-t">
                <a className="modal__backdrop" href="#" aria-label="Close" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="flow-done-t">{"Done"}</h2>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close" />
                  </div>
                  <div className="modal__body">
                    <p className="field__hint">{"The action is recorded with your name and the time. In the live system this saves the entry and updates the screens that read it."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--primary" href="#">{"OK"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--sm" id="flow-file" data-flow="flow-file" role="dialog" aria-modal="true" aria-labelledby="flow-file-t">
                <a className="modal__backdrop" href="#" aria-label="Close" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="flow-file-t">{"File ready"}</h2>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close" />
                  </div>
                  <div className="modal__body">
                    <p className="field__hint">{"In the live system your file opens here to print or save, and the export is logged with your name and the time."}</p>
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
