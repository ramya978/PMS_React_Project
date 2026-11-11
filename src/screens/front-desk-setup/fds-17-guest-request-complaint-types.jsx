// GENERATED from public/front-desk-setup/fds-17-guest-request-complaint-types/index.html by scripts/convert_legacy.py.
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
    "href": "/css/aviv/choices.css",
    "media": null
  },
  {
    "href": "/front-desk-setup/fds-17-guest-request-complaint-types/fds-17-guest-request-complaint-types.css",
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

export default function FrontDeskSetupFds17GuestRequestComplaintTypes() {
  return (
    <ScreenShell title="Guest Request & Complaint Types" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="FDS-17" data-code="FDS-17" data-static="1" className="legacy-body">
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
            <main className="app__content" id="main" data-code="FDS-17" tabIndex="-1">
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
                        <span aria-current="page">{"Guest Request & Complaint Types"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">{"Guest Request & Complaint Types"}</h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"FDS-17"}</span>
                  <div className="page-header__filters">
                    <div className="hctl">
                      <div className="hsearch">
                        <input className="hsearch__input" id="hs371" type="search" name="q" placeholder="Search request and complaint types" aria-label="Search request and complaint types" autoComplete="off" />
                        <label className="hsearch__ic" htmlFor="hs371" title="Search">
                          <svg className="icon" width="17" height="17" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#search" />
                          </svg>
                          <span className="sr-only">{"Search"}</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="page-header__actions ph-icons">
                    <a className="btn ph-ic" href="#log-FDS-17">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#history" />
                      </svg>
                      {"Change log"}
                    </a>
                    <a className="btn ph-ic" href="#FDS-17-export" data-opens="FDS-17-export">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#download" />
                      </svg>
                      {"Export"}
                    </a>
                  </div>
                </div>
              </header>
              <div className="fd-sec__acts" data-flow="opener-row" style={{"display": "flex", "flexWrap": "wrap", "gap": "8px", "margin": "8px 0"}}>
                <a className="btn" href="#export-FDS-17" data-flow="opener">{"Export Guest Request & Complaint Types"}</a>
              </div>
              <div className="stabs">
                <input type="radio" name="fds17" id="fds17-1" aria-label="Request types" defaultChecked={true} />
                <input type="radio" name="fds17" id="fds17-2" aria-label="Complaint types" />
                <div className="stabs__list" role="tablist">
                  <label htmlFor="fds17-1">
                    {"Request types"}
                    <span className="stabs__n">{"14"}</span>
                  </label>
                  <label htmlFor="fds17-2">
                    {"Complaint types"}
                    <span className="stabs__n">{"6"}</span>
                  </label>
                </div>
                <div className="stabs__panels">
                  <section className="stabs__panel" id="FDS-17-1" data-code="FDS-17-1" aria-label="Request types">
                    <div className="row row--between fd-tabbar">
                      <span className="fd-muted">{"14 request types"}</span>
                      <a className="btn btn--primary" href="#FDS-P14">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        {"Add request type"}
                      </a>
                    </div>
                    <div className="pgw">
                      <div className="s-scroll">
                        <table className="srt dt__table dt--hug" data-code="FDS-17-req" style={{"--srt-cols": "auto auto auto auto auto auto auto max-content"}} data-mc="">
                          <caption className="sr-only">{"Request types list"}</caption>
                          <thead>
                            <tr>
                              <th scope="col">
                                <input className="srt-i srt-a0" type="radio" name="stfds170" id="stfds170-0a" aria-label="Sort by Code · name, lowest or A first" />
                                <input className="srt-i srt-d0" type="radio" name="stfds170" id="stfds170-0d" aria-label="Sort by Code · name, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="stfds170-0a">{"Code · name"}</label>
                                <label className="srt-l srt-l--d" htmlFor="stfds170-0d" aria-hidden="true">{"Code · name"}</label>
                              </th>
                              <th scope="col">
                                <input className="srt-i srt-a1" type="radio" name="stfds170" id="stfds170-1a" aria-label="Sort by Department, lowest or A first" />
                                <input className="srt-i srt-d1" type="radio" name="stfds170" id="stfds170-1d" aria-label="Sort by Department, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="stfds170-1a">{"Department"}</label>
                                <label className="srt-l srt-l--d" htmlFor="stfds170-1d" aria-hidden="true">{"Department"}</label>
                              </th>
                              <th scope="col">
                                <input className="srt-i srt-a2" type="radio" name="stfds170" id="stfds170-2a" aria-label="Sort by Time limit, lowest or A first" />
                                <input className="srt-i srt-d2" type="radio" name="stfds170" id="stfds170-2d" aria-label="Sort by Time limit, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="stfds170-2a">{"Time limit"}</label>
                                <label className="srt-l srt-l--d" htmlFor="stfds170-2d" aria-hidden="true">{"Time limit"}</label>
                              </th>
                              <th scope="col">
                                <input className="srt-i srt-a3" type="radio" name="stfds170" id="stfds170-3a" aria-label="Sort by Priority, lowest or A first" />
                                <input className="srt-i srt-d3" type="radio" name="stfds170" id="stfds170-3d" aria-label="Sort by Priority, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="stfds170-3a">{"Priority"}</label>
                                <label className="srt-l srt-l--d" htmlFor="stfds170-3d" aria-hidden="true">{"Priority"}</label>
                              </th>
                              <th scope="col">
                                <input className="srt-i srt-a4" type="radio" name="stfds170" id="stfds170-4a" aria-label="Sort by Chargeable, lowest or A first" />
                                <input className="srt-i srt-d4" type="radio" name="stfds170" id="stfds170-4d" aria-label="Sort by Chargeable, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="stfds170-4a">{"Chargeable"}</label>
                                <label className="srt-l srt-l--d" htmlFor="stfds170-4d" aria-hidden="true">{"Chargeable"}</label>
                              </th>
                              <th scope="col">{"Escalates to"}</th>
                              <th scope="col">{"Status"}</th>
                              <th scope="col" />
                            </tr>
                          </thead>
                          <tbody>
                            <tr style={{"--k0": "12", "--k1": "4", "--k2": "2", "--k3": "2", "--k4": "1"}}>
                              <td className="dt__td nw" data-label="Code · name" data-w2="" data-t="">
                                <a className="fd-link" href="#FDS-P14-req-towel">
                                  <strong>{"TOWEL"}</strong>
                                  {" · Extra towels"}
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Department" data-w2="">{"Housekeeping"}</td>
                              <td className="dt__td nw" data-label="Time limit" data-w2="">{"15 min"}</td>
                              <td className="dt__td nw" data-label="Priority" data-w2="">{"Normal"}</td>
                              <td className="dt__td nw" data-label="Chargeable" data-w2="">{"No"}</td>
                              <td className="dt__td nw" data-label="Escalates to" data-w2="">{"Duty Manager"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#FDS-P14-req-towel" aria-label="Edit Extra towels">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "10", "--k1": "4", "--k2": "2", "--k3": "2", "--k4": "1"}}>
                              <td className="dt__td nw" data-label="Code · name" data-w2="" data-t="">
                                <a className="fd-link" href="#FDS-P14-req-pillow">
                                  <strong>{"PILLOW"}</strong>
                                  {" · Extra pillow"}
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Department" data-w2="">{"Housekeeping"}</td>
                              <td className="dt__td nw" data-label="Time limit" data-w2="">{"15 min"}</td>
                              <td className="dt__td nw" data-label="Priority" data-w2="">{"Normal"}</td>
                              <td className="dt__td nw" data-label="Chargeable" data-w2="">{"No"}</td>
                              <td className="dt__td nw" data-label="Escalates to" data-w2="">{"Duty Manager"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#FDS-P14-req-pillow" aria-label="Edit Extra pillow">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "9", "--k1": "4", "--k2": "3", "--k3": "2", "--k4": "1"}}>
                              <td className="dt__td" data-label="Code · name" data-w="" data-t="">
                                <a className="fd-link" href="#FDS-P14-req-iron">
                                  <strong>{"IRON"}</strong>
                                  {" · Iron and ironing board"}
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Department" data-w2="">{"Housekeeping"}</td>
                              <td className="dt__td nw" data-label="Time limit" data-w2="">{"20 min"}</td>
                              <td className="dt__td nw" data-label="Priority" data-w2="">{"Normal"}</td>
                              <td className="dt__td nw" data-label="Chargeable" data-w2="">{"No"}</td>
                              <td className="dt__td nw" data-label="Escalates to" data-w2="">{"Duty Manager"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#FDS-P14-req-iron" aria-label="Edit Iron and ironing board">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "6", "--k1": "4", "--k2": "4", "--k3": "2", "--k4": "1"}}>
                              <td className="dt__td nw" data-label="Code · name" data-w2="" data-t="">
                                <a className="fd-link" href="#FDS-P14-req-cot">
                                  <strong>{"COT"}</strong>
                                  {" · Baby cot"}
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Department" data-w2="">{"Housekeeping"}</td>
                              <td className="dt__td nw" data-label="Time limit" data-w2="">{"30 min"}</td>
                              <td className="dt__td nw" data-label="Priority" data-w2="">{"Normal"}</td>
                              <td className="dt__td nw" data-label="Chargeable" data-w2="">{"No"}</td>
                              <td className="dt__td nw" data-label="Escalates to" data-w2="">{"Duty Manager"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#FDS-P14-req-cot" aria-label="Edit Baby cot">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "8", "--k1": "4", "--k2": "2", "--k3": "2", "--k4": "1"}}>
                              <td className="dt__td nw" data-label="Code · name" data-w2="" data-t="">
                                <a className="fd-link" href="#FDS-P14-req-hairdry">
                                  <strong>{"HAIRDRY"}</strong>
                                  {" · Hair dryer"}
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Department" data-w2="">{"Housekeeping"}</td>
                              <td className="dt__td nw" data-label="Time limit" data-w2="">{"15 min"}</td>
                              <td className="dt__td nw" data-label="Priority" data-w2="">{"Normal"}</td>
                              <td className="dt__td nw" data-label="Chargeable" data-w2="">{"No"}</td>
                              <td className="dt__td nw" data-label="Escalates to" data-w2="">{"Duty Manager"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#FDS-P14-req-hairdry" aria-label="Edit Hair dryer">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "5", "--k1": "4", "--k2": "4", "--k3": "2", "--k4": "1"}}>
                              <td className="dt__td nw" data-label="Code · name" data-w2="" data-t="">
                                <a className="fd-link" href="#FDS-P14-req-clean">
                                  <strong>{"CLEAN"}</strong>
                                  {" · Room cleaning"}
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Department" data-w2="">{"Housekeeping"}</td>
                              <td className="dt__td nw" data-label="Time limit" data-w2="">{"30 min"}</td>
                              <td className="dt__td nw" data-label="Priority" data-w2="">{"Normal"}</td>
                              <td className="dt__td nw" data-label="Chargeable" data-w2="">{"No"}</td>
                              <td className="dt__td nw" data-label="Escalates to" data-w2="">{"Duty Manager"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#FDS-P14-req-clean" aria-label="Edit Room cleaning">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "1", "--k1": "2", "--k2": "4", "--k3": "1", "--k4": "1"}}>
                              <td className="dt__td nw" data-label="Code · name" data-w2="" data-t="">
                                <a className="fd-link" href="#FDS-P14-req-acfix">
                                  <strong>{"ACFIX"}</strong>
                                  {" · AC not cooling"}
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Department" data-w2="">{"Engineering"}</td>
                              <td className="dt__td nw" data-label="Time limit" data-w2="">{"30 min"}</td>
                              <td className="dt__td nw" data-label="Priority" data-w2="">{"High"}</td>
                              <td className="dt__td nw" data-label="Chargeable" data-w2="">{"No"}</td>
                              <td className="dt__td nw" data-label="Escalates to" data-w2="">{"Duty Manager"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#FDS-P14-req-acfix" aria-label="Edit AC not cooling">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "14", "--k1": "5", "--k2": "2", "--k3": "2", "--k4": "1"}}>
                              <td className="dt__td nw" data-label="Code · name" data-w2="" data-t="">
                                <a className="fd-link" href="#FDS-P14-req-wifi">
                                  <strong>{"WIFI"}</strong>
                                  {" · Wi-Fi help"}
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Department" data-w2="">{"IT"}</td>
                              <td className="dt__td nw" data-label="Time limit" data-w2="">{"15 min"}</td>
                              <td className="dt__td nw" data-label="Priority" data-w2="">{"Normal"}</td>
                              <td className="dt__td nw" data-label="Chargeable" data-w2="">{"No"}</td>
                              <td className="dt__td nw" data-label="Escalates to" data-w2="">{"Duty Manager"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#FDS-P14-req-wifi" aria-label="Edit Wi-Fi help">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "4", "--k1": "1", "--k2": "2", "--k3": "2", "--k4": "4"}}>
                              <td className="dt__td nw" data-label="Code · name" data-w2="" data-t="">
                                <a className="fd-link" href="#FDS-P14-req-cab">
                                  <strong>{"CAB"}</strong>
                                  {" · Cab / taxi"}
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Department" data-w2="">{"Concierge"}</td>
                              <td className="dt__td nw" data-label="Time limit" data-w2="">{"15 min"}</td>
                              <td className="dt__td nw" data-label="Priority" data-w2="">{"Normal"}</td>
                              <td className="dt__td nw" data-label="Chargeable" data-w2="">{"Yes · TRNL"}</td>
                              <td className="dt__td nw" data-label="Escalates to" data-w2="">{"Duty Manager"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#FDS-P14-req-cab" aria-label="Edit Cab / taxi">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "2", "--k1": "1", "--k2": "4", "--k3": "2", "--k4": "3"}}>
                              <td className="dt__td" data-label="Code · name" data-w="" data-t="">
                                <a className="fd-link" href="#FDS-P14-req-airport">
                                  <strong>{"AIRPORT"}</strong>
                                  {" · Airport transfer"}
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Department" data-w2="">{"Concierge"}</td>
                              <td className="dt__td nw" data-label="Time limit" data-w2="">{"30 min"}</td>
                              <td className="dt__td nw" data-label="Priority" data-w2="">{"Normal"}</td>
                              <td className="dt__td nw" data-label="Chargeable" data-w2="">{"Yes · TRN"}</td>
                              <td className="dt__td nw" data-label="Escalates to" data-w2="">{"Duty Manager"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#FDS-P14-req-airport" aria-label="Edit Airport transfer">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "7", "--k1": "3", "--k2": "2", "--k3": "3", "--k4": "1"}}>
                              <td className="dt__td" data-label="Code · name" data-w2="" data-t="">
                                <a className="fd-link" href="#FDS-P14-req-doctor">
                                  <strong>{"DOCTOR"}</strong>
                                  {" · Doctor on call"}
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Department" data-w2="">{"Front office"}</td>
                              <td className="dt__td nw" data-label="Time limit" data-w2="">{"15 min"}</td>
                              <td className="dt__td nw" data-label="Priority" data-w2="">{"Urgent"}</td>
                              <td className="dt__td nw" data-label="Chargeable" data-w2="">{"No"}</td>
                              <td className="dt__td nw" data-label="Escalates to" data-w2="">{"Duty Manager"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#FDS-P14-req-doctor" aria-label="Edit Doctor on call">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "3", "--k1": "1", "--k2": "4", "--k3": "2", "--k4": "2"}}>
                              <td className="dt__td" data-label="Code · name" data-w2="" data-t="">
                                <a className="fd-link" href="#FDS-P14-req-ayur">
                                  <strong>{"AYUR"}</strong>
                                  {" · Ayurveda booking"}
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Department" data-w2="">{"Concierge"}</td>
                              <td className="dt__td nw" data-label="Time limit" data-w2="">{"30 min"}</td>
                              <td className="dt__td nw" data-label="Priority" data-w2="">{"Normal"}</td>
                              <td className="dt__td nw" data-label="Chargeable" data-w2="">{"Yes · SPA-02"}</td>
                              <td className="dt__td nw" data-label="Escalates to" data-w2="">{"Duty Manager"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#FDS-P14-req-ayur" aria-label="Edit Ayurveda booking">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "11", "--k1": "2", "--k2": "4", "--k3": "2", "--k4": "1"}}>
                              <td className="dt__td nw" data-label="Code · name" data-w2="" data-t="">
                                <a className="fd-link" href="#FDS-P14-req-repair">
                                  <strong>{"REPAIR"}</strong>
                                  {" · Repair"}
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Department" data-w2="">{"Engineering"}</td>
                              <td className="dt__td nw" data-label="Time limit" data-w2="">{"30 min"}</td>
                              <td className="dt__td nw" data-label="Priority" data-w2="">{"Normal"}</td>
                              <td className="dt__td nw" data-label="Chargeable" data-w2="">{"No"}</td>
                              <td className="dt__td nw" data-label="Escalates to" data-w2="">{"Duty Manager"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#FDS-P14-req-repair" aria-label="Edit Repair">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "13", "--k1": "3", "--k2": "1", "--k3": "2", "--k4": "1"}}>
                              <td className="dt__td nw" data-label="Code · name" data-w2="" data-t="">
                                <a className="fd-link" href="#FDS-P14-req-wakeup">
                                  <strong>{"WAKEUP"}</strong>
                                  {" · Wake-up call"}
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Department" data-w2="">{"Front office"}</td>
                              <td className="dt__td nw" data-label="Time limit" data-w2="">{"5 min"}</td>
                              <td className="dt__td nw" data-label="Priority" data-w2="">{"Normal"}</td>
                              <td className="dt__td nw" data-label="Chargeable" data-w2="">{"No"}</td>
                              <td className="dt__td nw" data-label="Escalates to" data-w2="">{"Duty Manager"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#FDS-P14-req-wakeup" aria-label="Edit Wake-up call">{"Edit"}</a>
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
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–10"}</b>
                              {" of 14"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"11–14"}</b>
                              {" of 14"}
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
                          </span>
                          <span className="pg-next">
                            <label className="pg-arr" htmlFor="pg1r10p2" title="Next page">
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
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–14"}</b>
                              {" of 14"}
                            </span>
                          </span>
                          <span className="pg-prev">
                            <span className="pg-arr is-off">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-left" />
                              </svg>
                            </span>
                          </span>
                          <span className="pg-next">
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
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–14"}</b>
                              {" of 14"}
                            </span>
                          </span>
                          <span className="pg-prev">
                            <span className="pg-arr is-off">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-left" />
                              </svg>
                            </span>
                          </span>
                          <span className="pg-next">
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
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–14"}</b>
                              {" of 14"}
                            </span>
                          </span>
                          <span className="pg-prev">
                            <span className="pg-arr is-off">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-left" />
                              </svg>
                            </span>
                          </span>
                          <span className="pg-next">
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
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–14"}</b>
                              {" of 14"}
                            </span>
                          </span>
                          <span className="pg-prev">
                            <span className="pg-arr is-off">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-left" />
                              </svg>
                            </span>
                          </span>
                          <span className="pg-next">
                            <span className="pg-arr is-off">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-right" />
                              </svg>
                            </span>
                          </span>
                        </div>
                      </nav>
                    </div>
                  </section>
                  <section className="stabs__panel" id="FDS-17-2" data-code="FDS-17-2" aria-label="Complaint types">
                    <div className="row row--between fd-tabbar">
                      <span className="fd-muted">{"6 complaint types"}</span>
                      <a className="btn btn--primary" href="#FDS-P15">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        {"Add complaint type"}
                      </a>
                    </div>
                    <div className="pgw">
                      <div className="s-scroll">
                        <table className="srt dt__table dt--hug" data-code="FDS-17-comp" style={{"--srt-cols": "auto auto auto auto auto auto auto max-content"}} data-mc="">
                          <caption className="sr-only">{"Complaint types list"}</caption>
                          <thead>
                            <tr>
                              <th scope="col">
                                <input className="srt-i srt-a0" type="radio" name="stfds171" id="stfds171-0a" aria-label="Sort by Category, lowest or A first" />
                                <input className="srt-i srt-d0" type="radio" name="stfds171" id="stfds171-0d" aria-label="Sort by Category, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="stfds171-0a">{"Category"}</label>
                                <label className="srt-l srt-l--d" htmlFor="stfds171-0d" aria-hidden="true">{"Category"}</label>
                              </th>
                              <th scope="col">
                                <input className="srt-i srt-a1" type="radio" name="stfds171" id="stfds171-1a" aria-label="Sort by Severity, lowest or A first" />
                                <input className="srt-i srt-d1" type="radio" name="stfds171" id="stfds171-1d" aria-label="Sort by Severity, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="stfds171-1a">{"Severity"}</label>
                                <label className="srt-l srt-l--d" htmlFor="stfds171-1d" aria-hidden="true">{"Severity"}</label>
                              </th>
                              <th scope="col">
                                <input className="srt-i srt-a2" type="radio" name="stfds171" id="stfds171-2a" aria-label="Sort by Department, lowest or A first" />
                                <input className="srt-i srt-d2" type="radio" name="stfds171" id="stfds171-2d" aria-label="Sort by Department, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="stfds171-2a">{"Department"}</label>
                                <label className="srt-l srt-l--d" htmlFor="stfds171-2d" aria-hidden="true">{"Department"}</label>
                              </th>
                              <th scope="col">{"Level 1"}</th>
                              <th scope="col">{"Level 2"}</th>
                              <th scope="col">{"Level 3"}</th>
                              <th scope="col">{"Status"}</th>
                              <th scope="col" />
                            </tr>
                          </thead>
                          <tbody>
                            <tr style={{"--k0": "5", "--k1": "2", "--k2": "3"}}>
                              <td className="dt__td nw" data-label="Category" data-w2="" data-t="">
                                <a className="fd-link" href="#FDS-P15-comp-room">
                                  <strong>{"Room"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Severity" data-w2="">{"Major"}</td>
                              <td className="dt__td nw" data-label="Department" data-w2="">{"Housekeeping"}</td>
                              <td className="dt__td nw" data-label="Level 1" data-w2="">{"15 min · Duty Manager"}</td>
                              <td className="dt__td" data-label="Level 2">{"30 min · Front Office Manager"}</td>
                              <td className="dt__td" data-label="Level 3" data-w2="">{"120 min · General Manager"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#FDS-P15-comp-room" aria-label="Edit Room">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "4", "--k1": "2", "--k2": "2"}}>
                              <td className="dt__td nw" data-label="Category" data-w2="" data-t="">
                                <a className="fd-link" href="#FDS-P15-comp-noise">
                                  <strong>{"Noise"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Severity" data-w2="">{"Major"}</td>
                              <td className="dt__td nw" data-label="Department" data-w2="">{"Front office"}</td>
                              <td className="dt__td nw" data-label="Level 1" data-w2="">{"15 min · Duty Manager"}</td>
                              <td className="dt__td" data-label="Level 2">{"30 min · Front Office Manager"}</td>
                              <td className="dt__td" data-label="Level 3" data-w2="">{"120 min · General Manager"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#FDS-P15-comp-noise" aria-label="Edit Noise">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "2", "--k1": "2", "--k2": "3"}}>
                              <td className="dt__td nw" data-label="Category" data-w2="" data-t="">
                                <a className="fd-link" href="#FDS-P15-comp-clean">
                                  <strong>{"Cleanliness"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Severity" data-w2="">{"Major"}</td>
                              <td className="dt__td nw" data-label="Department" data-w2="">{"Housekeeping"}</td>
                              <td className="dt__td nw" data-label="Level 1" data-w2="">{"15 min · Duty Manager"}</td>
                              <td className="dt__td" data-label="Level 2">{"30 min · Front Office Manager"}</td>
                              <td className="dt__td" data-label="Level 3" data-w2="">{"120 min · General Manager"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#FDS-P15-comp-clean" aria-label="Edit Cleanliness">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "3", "--k1": "2", "--k2": "1"}}>
                              <td className="dt__td nw" data-label="Category" data-w2="" data-t="">
                                <a className="fd-link" href="#FDS-P15-comp-food">
                                  <strong>{"Food"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Severity" data-w2="">{"Major"}</td>
                              <td className="dt__td nw" data-label="Department" data-w2="">{"F&B"}</td>
                              <td className="dt__td nw" data-label="Level 1" data-w2="">{"15 min · Duty Manager"}</td>
                              <td className="dt__td" data-label="Level 2">{"30 min · Front Office Manager"}</td>
                              <td className="dt__td" data-label="Level 3" data-w2="">{"120 min · General Manager"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#FDS-P15-comp-food" aria-label="Edit Food">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "6", "--k1": "1", "--k2": "2"}}>
                              <td className="dt__td nw" data-label="Category" data-w2="" data-t="">
                                <a className="fd-link" href="#FDS-P15-comp-staff">
                                  <strong>{"Staff behaviour"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Severity" data-w2="">{"Critical"}</td>
                              <td className="dt__td nw" data-label="Department" data-w2="">{"Front office"}</td>
                              <td className="dt__td nw" data-label="Level 1" data-w2="">{"15 min · Duty Manager"}</td>
                              <td className="dt__td" data-label="Level 2">{"30 min · Front Office Manager"}</td>
                              <td className="dt__td" data-label="Level 3" data-w2="">{"120 min · General Manager"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#FDS-P15-comp-staff" aria-label="Edit Staff behaviour">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "1", "--k1": "3", "--k2": "2"}}>
                              <td className="dt__td nw" data-label="Category" data-w2="" data-t="">
                                <a className="fd-link" href="#FDS-P15-comp-bill">
                                  <strong>{"Billing"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Severity" data-w2="">{"Minor"}</td>
                              <td className="dt__td nw" data-label="Department" data-w2="">{"Front office"}</td>
                              <td className="dt__td nw" data-label="Level 1" data-w2="">{"15 min · Duty Manager"}</td>
                              <td className="dt__td" data-label="Level 2">{"30 min · Front Office Manager"}</td>
                              <td className="dt__td" data-label="Level 3" data-w2="">{"120 min · General Manager"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#FDS-P15-comp-bill" aria-label="Edit Billing">{"Edit"}</a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <nav className="pg pg--off" aria-label="Table pages" title="All rows fit on one page – paging switches on when the list has more than 10 rows">
                        <label className="pg-rpp">
                          <span>{"Rows per page"}</span>
                          <select className="pg-rpp__c" disabled={true} defaultValue={"10"}>
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
                          <input className="pg-in" type="radio" name="pg2r10" id="pg2r10p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg2r10p1" aria-label="Page 1">{"1"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–6"}</b>
                              {" of 6"}
                            </span>
                          </span>
                          <span className="pg-prev">
                            <span className="pg-arr is-off">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-left" />
                              </svg>
                            </span>
                          </span>
                          <span className="pg-next">
                            <span className="pg-arr is-off">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-right" />
                              </svg>
                            </span>
                          </span>
                        </div>
                        <div className="pg-set pg-set--15">
                          <input className="pg-in" type="radio" name="pg2r15" id="pg2r15p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg2r15p1" aria-label="Page 1">{"1"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–6"}</b>
                              {" of 6"}
                            </span>
                          </span>
                          <span className="pg-prev">
                            <span className="pg-arr is-off">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-left" />
                              </svg>
                            </span>
                          </span>
                          <span className="pg-next">
                            <span className="pg-arr is-off">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-right" />
                              </svg>
                            </span>
                          </span>
                        </div>
                        <div className="pg-set pg-set--20">
                          <input className="pg-in" type="radio" name="pg2r20" id="pg2r20p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg2r20p1" aria-label="Page 1">{"1"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–6"}</b>
                              {" of 6"}
                            </span>
                          </span>
                          <span className="pg-prev">
                            <span className="pg-arr is-off">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-left" />
                              </svg>
                            </span>
                          </span>
                          <span className="pg-next">
                            <span className="pg-arr is-off">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-right" />
                              </svg>
                            </span>
                          </span>
                        </div>
                        <div className="pg-set pg-set--25">
                          <input className="pg-in" type="radio" name="pg2r25" id="pg2r25p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg2r25p1" aria-label="Page 1">{"1"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–6"}</b>
                              {" of 6"}
                            </span>
                          </span>
                          <span className="pg-prev">
                            <span className="pg-arr is-off">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-left" />
                              </svg>
                            </span>
                          </span>
                          <span className="pg-next">
                            <span className="pg-arr is-off">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-right" />
                              </svg>
                            </span>
                          </span>
                        </div>
                        <div className="pg-set pg-set--30">
                          <input className="pg-in" type="radio" name="pg2r30" id="pg2r30p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg2r30p1" aria-label="Page 1">{"1"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–6"}</b>
                              {" of 6"}
                            </span>
                          </span>
                          <span className="pg-prev">
                            <span className="pg-arr is-off">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-left" />
                              </svg>
                            </span>
                          </span>
                          <span className="pg-next">
                            <span className="pg-arr is-off">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-right" />
                              </svg>
                            </span>
                          </span>
                        </div>
                      </nav>
                    </div>
                  </section>
                </div>
              </div>
              <div className="modal modal--full" id="FDS-P14-req-towel" data-code="FDS-P14" role="dialog" aria-modal="true" aria-labelledby="FDS-P14-req-towel-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-17-guest-request-complaint-types/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P14-req-towel-t">{"Request type: Extra towels"}</h2>
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
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f137">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f137" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,8}"} maxLength="8" defaultValue={"TOWEL"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f138">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f138" type="text" name="name" required={true} maxLength="40" defaultValue={"Extra towels"} />
                        <span className="field__hint">{"e.g. Extra towels, Extra pillow, Iron, Baby cot, Room cleaning, AC not cooling, Wi-Fi help, Cab, Doctor on call"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f139">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f139" name="dept" required={true} defaultValue={"Housekeeping"}>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f140">
                          {"Time limit (minutes) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f140" type="number" name="sla" required={true} min="1" max="1440" defaultValue={"15"} />
                        <span className="field__hint">{"SLA – the request turns overdue after this"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f141">
                          {"Priority default "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f141" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f142">
                          <input id="f142" type="checkbox" role="switch" name="chargeable" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge code when done"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f143">{"Charge code"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f143" name="charge" defaultValue={""}>
                            <option value="" />
                            <option value="TRN – Airport transfer">{"TRN – Airport transfer"}</option>
                            <option value="TRNL – Local taxi">{"TRNL – Local taxi"}</option>
                            <option value="SPA-02 – Ayurveda massage">{"SPA-02 – Ayurveda massage"}</option>
                            <option value="LND – Laundry">{"LND – Laundry"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Only when chargeable (FDS-08)"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f144">
                          {"Escalate to (role) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f144" name="esc" required={true} defaultValue={"Duty Manager"}>
                            <option value="Duty Manager">{"Duty Manager"}</option>
                            <option value="Front Office Manager">{"Front Office Manager"}</option>
                            <option value="General Manager">{"General Manager"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"After the time limit"}</span>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f145">
                          <input id="f145" type="checkbox" role="switch" name="callback" />
                          <span className="sw__track" />
                          {"Guest callback required"}
                        </label>
                        <span className="field__hint">{"Front desk calls the guest when done"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f146">
                          <input id="f146" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-17-req-towel">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-17-req-towel" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-17-req-towel-t">
                <a className="modal__backdrop" href="#FDS-P14-req-towel" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-17-guest-request-complaint-types/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-17-req-towel-t">{"Deactivate Extra towels?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P14-req-towel" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. Extra towels will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P14-req-towel">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P14-req-pillow" data-code="FDS-P14" role="dialog" aria-modal="true" aria-labelledby="FDS-P14-req-pillow-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-17-guest-request-complaint-types/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P14-req-pillow-t">{"Request type: Extra pillow"}</h2>
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
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f147">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f147" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,8}"} maxLength="8" defaultValue={"PILLOW"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f148">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f148" type="text" name="name" required={true} maxLength="40" defaultValue={"Extra pillow"} />
                        <span className="field__hint">{"e.g. Extra towels, Extra pillow, Iron, Baby cot, Room cleaning, AC not cooling, Wi-Fi help, Cab, Doctor on call"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f149">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f149" name="dept" required={true} defaultValue={"Housekeeping"}>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f150">
                          {"Time limit (minutes) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f150" type="number" name="sla" required={true} min="1" max="1440" defaultValue={"15"} />
                        <span className="field__hint">{"SLA – the request turns overdue after this"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f151">
                          {"Priority default "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f151" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f152">
                          <input id="f152" type="checkbox" role="switch" name="chargeable" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge code when done"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f153">{"Charge code"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f153" name="charge" defaultValue={""}>
                            <option value="" />
                            <option value="TRN – Airport transfer">{"TRN – Airport transfer"}</option>
                            <option value="TRNL – Local taxi">{"TRNL – Local taxi"}</option>
                            <option value="SPA-02 – Ayurveda massage">{"SPA-02 – Ayurveda massage"}</option>
                            <option value="LND – Laundry">{"LND – Laundry"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Only when chargeable (FDS-08)"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f154">
                          {"Escalate to (role) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f154" name="esc" required={true} defaultValue={"Duty Manager"}>
                            <option value="Duty Manager">{"Duty Manager"}</option>
                            <option value="Front Office Manager">{"Front Office Manager"}</option>
                            <option value="General Manager">{"General Manager"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"After the time limit"}</span>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f155">
                          <input id="f155" type="checkbox" role="switch" name="callback" />
                          <span className="sw__track" />
                          {"Guest callback required"}
                        </label>
                        <span className="field__hint">{"Front desk calls the guest when done"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f156">
                          <input id="f156" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-17-req-pillow">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-17-req-pillow" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-17-req-pillow-t">
                <a className="modal__backdrop" href="#FDS-P14-req-pillow" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-17-guest-request-complaint-types/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-17-req-pillow-t">{"Deactivate Extra pillow?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P14-req-pillow" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. Extra pillow will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P14-req-pillow">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P14-req-iron" data-code="FDS-P14" role="dialog" aria-modal="true" aria-labelledby="FDS-P14-req-iron-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-17-guest-request-complaint-types/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P14-req-iron-t">{"Request type: Iron and ironing board"}</h2>
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
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f157">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f157" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,8}"} maxLength="8" defaultValue={"IRON"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f158">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f158" type="text" name="name" required={true} maxLength="40" defaultValue={"Iron and ironing board"} />
                        <span className="field__hint">{"e.g. Extra towels, Extra pillow, Iron, Baby cot, Room cleaning, AC not cooling, Wi-Fi help, Cab, Doctor on call"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f159">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f159" name="dept" required={true} defaultValue={"Housekeeping"}>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f160">
                          {"Time limit (minutes) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f160" type="number" name="sla" required={true} min="1" max="1440" defaultValue={"20"} />
                        <span className="field__hint">{"SLA – the request turns overdue after this"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f161">
                          {"Priority default "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f161" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f162">
                          <input id="f162" type="checkbox" role="switch" name="chargeable" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge code when done"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f163">{"Charge code"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f163" name="charge" defaultValue={""}>
                            <option value="" />
                            <option value="TRN – Airport transfer">{"TRN – Airport transfer"}</option>
                            <option value="TRNL – Local taxi">{"TRNL – Local taxi"}</option>
                            <option value="SPA-02 – Ayurveda massage">{"SPA-02 – Ayurveda massage"}</option>
                            <option value="LND – Laundry">{"LND – Laundry"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Only when chargeable (FDS-08)"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f164">
                          {"Escalate to (role) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f164" name="esc" required={true} defaultValue={"Duty Manager"}>
                            <option value="Duty Manager">{"Duty Manager"}</option>
                            <option value="Front Office Manager">{"Front Office Manager"}</option>
                            <option value="General Manager">{"General Manager"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"After the time limit"}</span>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f165">
                          <input id="f165" type="checkbox" role="switch" name="callback" />
                          <span className="sw__track" />
                          {"Guest callback required"}
                        </label>
                        <span className="field__hint">{"Front desk calls the guest when done"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f166">
                          <input id="f166" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-17-req-iron">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-17-req-iron" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-17-req-iron-t">
                <a className="modal__backdrop" href="#FDS-P14-req-iron" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-17-guest-request-complaint-types/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-17-req-iron-t">{"Deactivate Iron and ironing board?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P14-req-iron" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. Iron and ironing board will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P14-req-iron">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P14-req-cot" data-code="FDS-P14" role="dialog" aria-modal="true" aria-labelledby="FDS-P14-req-cot-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-17-guest-request-complaint-types/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P14-req-cot-t">{"Request type: Baby cot"}</h2>
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
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f167">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f167" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,8}"} maxLength="8" defaultValue={"COT"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f168">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f168" type="text" name="name" required={true} maxLength="40" defaultValue={"Baby cot"} />
                        <span className="field__hint">{"e.g. Extra towels, Extra pillow, Iron, Baby cot, Room cleaning, AC not cooling, Wi-Fi help, Cab, Doctor on call"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f169">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f169" name="dept" required={true} defaultValue={"Housekeeping"}>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f170">
                          {"Time limit (minutes) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f170" type="number" name="sla" required={true} min="1" max="1440" defaultValue={"30"} />
                        <span className="field__hint">{"SLA – the request turns overdue after this"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f171">
                          {"Priority default "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f171" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f172">
                          <input id="f172" type="checkbox" role="switch" name="chargeable" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge code when done"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f173">{"Charge code"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f173" name="charge" defaultValue={""}>
                            <option value="" />
                            <option value="TRN – Airport transfer">{"TRN – Airport transfer"}</option>
                            <option value="TRNL – Local taxi">{"TRNL – Local taxi"}</option>
                            <option value="SPA-02 – Ayurveda massage">{"SPA-02 – Ayurveda massage"}</option>
                            <option value="LND – Laundry">{"LND – Laundry"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Only when chargeable (FDS-08)"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f174">
                          {"Escalate to (role) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f174" name="esc" required={true} defaultValue={"Duty Manager"}>
                            <option value="Duty Manager">{"Duty Manager"}</option>
                            <option value="Front Office Manager">{"Front Office Manager"}</option>
                            <option value="General Manager">{"General Manager"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"After the time limit"}</span>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f175">
                          <input id="f175" type="checkbox" role="switch" name="callback" />
                          <span className="sw__track" />
                          {"Guest callback required"}
                        </label>
                        <span className="field__hint">{"Front desk calls the guest when done"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f176">
                          <input id="f176" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-17-req-cot">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-17-req-cot" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-17-req-cot-t">
                <a className="modal__backdrop" href="#FDS-P14-req-cot" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-17-guest-request-complaint-types/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-17-req-cot-t">{"Deactivate Baby cot?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P14-req-cot" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. Baby cot will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P14-req-cot">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P14-req-hairdry" data-code="FDS-P14" role="dialog" aria-modal="true" aria-labelledby="FDS-P14-req-hairdry-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-17-guest-request-complaint-types/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P14-req-hairdry-t">{"Request type: Hair dryer"}</h2>
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
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f177">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f177" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,8}"} maxLength="8" defaultValue={"HAIRDRY"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f178">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f178" type="text" name="name" required={true} maxLength="40" defaultValue={"Hair dryer"} />
                        <span className="field__hint">{"e.g. Extra towels, Extra pillow, Iron, Baby cot, Room cleaning, AC not cooling, Wi-Fi help, Cab, Doctor on call"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f179">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f179" name="dept" required={true} defaultValue={"Housekeeping"}>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f180">
                          {"Time limit (minutes) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f180" type="number" name="sla" required={true} min="1" max="1440" defaultValue={"15"} />
                        <span className="field__hint">{"SLA – the request turns overdue after this"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f181">
                          {"Priority default "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f181" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f182">
                          <input id="f182" type="checkbox" role="switch" name="chargeable" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge code when done"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f183">{"Charge code"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f183" name="charge" defaultValue={""}>
                            <option value="" />
                            <option value="TRN – Airport transfer">{"TRN – Airport transfer"}</option>
                            <option value="TRNL – Local taxi">{"TRNL – Local taxi"}</option>
                            <option value="SPA-02 – Ayurveda massage">{"SPA-02 – Ayurveda massage"}</option>
                            <option value="LND – Laundry">{"LND – Laundry"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Only when chargeable (FDS-08)"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f184">
                          {"Escalate to (role) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f184" name="esc" required={true} defaultValue={"Duty Manager"}>
                            <option value="Duty Manager">{"Duty Manager"}</option>
                            <option value="Front Office Manager">{"Front Office Manager"}</option>
                            <option value="General Manager">{"General Manager"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"After the time limit"}</span>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f185">
                          <input id="f185" type="checkbox" role="switch" name="callback" />
                          <span className="sw__track" />
                          {"Guest callback required"}
                        </label>
                        <span className="field__hint">{"Front desk calls the guest when done"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f186">
                          <input id="f186" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-17-req-hairdry">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-17-req-hairdry" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-17-req-hairdry-t">
                <a className="modal__backdrop" href="#FDS-P14-req-hairdry" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-17-guest-request-complaint-types/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-17-req-hairdry-t">{"Deactivate Hair dryer?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P14-req-hairdry" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. Hair dryer will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P14-req-hairdry">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P14-req-clean" data-code="FDS-P14" role="dialog" aria-modal="true" aria-labelledby="FDS-P14-req-clean-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-17-guest-request-complaint-types/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P14-req-clean-t">{"Request type: Room cleaning"}</h2>
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
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f187">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f187" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,8}"} maxLength="8" defaultValue={"CLEAN"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f188">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f188" type="text" name="name" required={true} maxLength="40" defaultValue={"Room cleaning"} />
                        <span className="field__hint">{"e.g. Extra towels, Extra pillow, Iron, Baby cot, Room cleaning, AC not cooling, Wi-Fi help, Cab, Doctor on call"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f189">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f189" name="dept" required={true} defaultValue={"Housekeeping"}>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f190">
                          {"Time limit (minutes) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f190" type="number" name="sla" required={true} min="1" max="1440" defaultValue={"30"} />
                        <span className="field__hint">{"SLA – the request turns overdue after this"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f191">
                          {"Priority default "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f191" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f192">
                          <input id="f192" type="checkbox" role="switch" name="chargeable" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge code when done"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f193">{"Charge code"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f193" name="charge" defaultValue={""}>
                            <option value="" />
                            <option value="TRN – Airport transfer">{"TRN – Airport transfer"}</option>
                            <option value="TRNL – Local taxi">{"TRNL – Local taxi"}</option>
                            <option value="SPA-02 – Ayurveda massage">{"SPA-02 – Ayurveda massage"}</option>
                            <option value="LND – Laundry">{"LND – Laundry"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Only when chargeable (FDS-08)"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f194">
                          {"Escalate to (role) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f194" name="esc" required={true} defaultValue={"Duty Manager"}>
                            <option value="Duty Manager">{"Duty Manager"}</option>
                            <option value="Front Office Manager">{"Front Office Manager"}</option>
                            <option value="General Manager">{"General Manager"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"After the time limit"}</span>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f195">
                          <input id="f195" type="checkbox" role="switch" name="callback" />
                          <span className="sw__track" />
                          {"Guest callback required"}
                        </label>
                        <span className="field__hint">{"Front desk calls the guest when done"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f196">
                          <input id="f196" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-17-req-clean">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-17-req-clean" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-17-req-clean-t">
                <a className="modal__backdrop" href="#FDS-P14-req-clean" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-17-guest-request-complaint-types/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-17-req-clean-t">{"Deactivate Room cleaning?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P14-req-clean" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. Room cleaning will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P14-req-clean">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P14-req-acfix" data-code="FDS-P14" role="dialog" aria-modal="true" aria-labelledby="FDS-P14-req-acfix-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-17-guest-request-complaint-types/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P14-req-acfix-t">{"Request type: AC not cooling"}</h2>
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
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f197">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f197" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,8}"} maxLength="8" defaultValue={"ACFIX"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f198">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f198" type="text" name="name" required={true} maxLength="40" defaultValue={"AC not cooling"} />
                        <span className="field__hint">{"e.g. Extra towels, Extra pillow, Iron, Baby cot, Room cleaning, AC not cooling, Wi-Fi help, Cab, Doctor on call"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f199">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f199" name="dept" required={true} defaultValue={"Engineering"}>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f200">
                          {"Time limit (minutes) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f200" type="number" name="sla" required={true} min="1" max="1440" defaultValue={"30"} />
                        <span className="field__hint">{"SLA – the request turns overdue after this"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f201">
                          {"Priority default "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f201" name="prio" required={true} defaultValue={"High"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f202">
                          <input id="f202" type="checkbox" role="switch" name="chargeable" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge code when done"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f203">{"Charge code"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f203" name="charge" defaultValue={""}>
                            <option value="" />
                            <option value="TRN – Airport transfer">{"TRN – Airport transfer"}</option>
                            <option value="TRNL – Local taxi">{"TRNL – Local taxi"}</option>
                            <option value="SPA-02 – Ayurveda massage">{"SPA-02 – Ayurveda massage"}</option>
                            <option value="LND – Laundry">{"LND – Laundry"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Only when chargeable (FDS-08)"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f204">
                          {"Escalate to (role) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f204" name="esc" required={true} defaultValue={"Duty Manager"}>
                            <option value="Duty Manager">{"Duty Manager"}</option>
                            <option value="Front Office Manager">{"Front Office Manager"}</option>
                            <option value="General Manager">{"General Manager"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"After the time limit"}</span>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f205">
                          <input id="f205" type="checkbox" role="switch" name="callback" />
                          <span className="sw__track" />
                          {"Guest callback required"}
                        </label>
                        <span className="field__hint">{"Front desk calls the guest when done"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f206">
                          <input id="f206" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-17-req-acfix">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-17-req-acfix" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-17-req-acfix-t">
                <a className="modal__backdrop" href="#FDS-P14-req-acfix" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-17-guest-request-complaint-types/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-17-req-acfix-t">{"Deactivate AC not cooling?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P14-req-acfix" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. AC not cooling will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P14-req-acfix">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P14-req-wifi" data-code="FDS-P14" role="dialog" aria-modal="true" aria-labelledby="FDS-P14-req-wifi-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-17-guest-request-complaint-types/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P14-req-wifi-t">{"Request type: Wi-Fi help"}</h2>
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
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f207">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f207" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,8}"} maxLength="8" defaultValue={"WIFI"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f208">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f208" type="text" name="name" required={true} maxLength="40" defaultValue={"Wi-Fi help"} />
                        <span className="field__hint">{"e.g. Extra towels, Extra pillow, Iron, Baby cot, Room cleaning, AC not cooling, Wi-Fi help, Cab, Doctor on call"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f209">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f209" name="dept" required={true} defaultValue={"IT"}>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f210">
                          {"Time limit (minutes) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f210" type="number" name="sla" required={true} min="1" max="1440" defaultValue={"15"} />
                        <span className="field__hint">{"SLA – the request turns overdue after this"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f211">
                          {"Priority default "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f211" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f212">
                          <input id="f212" type="checkbox" role="switch" name="chargeable" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge code when done"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f213">{"Charge code"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f213" name="charge" defaultValue={""}>
                            <option value="" />
                            <option value="TRN – Airport transfer">{"TRN – Airport transfer"}</option>
                            <option value="TRNL – Local taxi">{"TRNL – Local taxi"}</option>
                            <option value="SPA-02 – Ayurveda massage">{"SPA-02 – Ayurveda massage"}</option>
                            <option value="LND – Laundry">{"LND – Laundry"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Only when chargeable (FDS-08)"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f214">
                          {"Escalate to (role) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f214" name="esc" required={true} defaultValue={"Duty Manager"}>
                            <option value="Duty Manager">{"Duty Manager"}</option>
                            <option value="Front Office Manager">{"Front Office Manager"}</option>
                            <option value="General Manager">{"General Manager"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"After the time limit"}</span>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f215">
                          <input id="f215" type="checkbox" role="switch" name="callback" />
                          <span className="sw__track" />
                          {"Guest callback required"}
                        </label>
                        <span className="field__hint">{"Front desk calls the guest when done"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f216">
                          <input id="f216" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-17-req-wifi">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-17-req-wifi" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-17-req-wifi-t">
                <a className="modal__backdrop" href="#FDS-P14-req-wifi" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-17-guest-request-complaint-types/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-17-req-wifi-t">{"Deactivate Wi-Fi help?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P14-req-wifi" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. Wi-Fi help will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P14-req-wifi">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P14-req-cab" data-code="FDS-P14" role="dialog" aria-modal="true" aria-labelledby="FDS-P14-req-cab-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-17-guest-request-complaint-types/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P14-req-cab-t">{"Request type: Cab / taxi"}</h2>
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
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f217">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f217" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,8}"} maxLength="8" defaultValue={"CAB"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f218">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f218" type="text" name="name" required={true} maxLength="40" defaultValue={"Cab / taxi"} />
                        <span className="field__hint">{"e.g. Extra towels, Extra pillow, Iron, Baby cot, Room cleaning, AC not cooling, Wi-Fi help, Cab, Doctor on call"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f219">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f219" name="dept" required={true} defaultValue={"Concierge"}>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f220">
                          {"Time limit (minutes) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f220" type="number" name="sla" required={true} min="1" max="1440" defaultValue={"15"} />
                        <span className="field__hint">{"SLA – the request turns overdue after this"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f221">
                          {"Priority default "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f221" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f222">
                          <input id="f222" type="checkbox" role="switch" name="chargeable" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge code when done"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f223">{"Charge code"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f223" name="charge" defaultValue={"TRNL – Local taxi"}>
                            <option value="" />
                            <option value="TRN – Airport transfer">{"TRN – Airport transfer"}</option>
                            <option value="TRNL – Local taxi">{"TRNL – Local taxi"}</option>
                            <option value="SPA-02 – Ayurveda massage">{"SPA-02 – Ayurveda massage"}</option>
                            <option value="LND – Laundry">{"LND – Laundry"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Only when chargeable (FDS-08)"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f224">
                          {"Escalate to (role) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f224" name="esc" required={true} defaultValue={"Duty Manager"}>
                            <option value="Duty Manager">{"Duty Manager"}</option>
                            <option value="Front Office Manager">{"Front Office Manager"}</option>
                            <option value="General Manager">{"General Manager"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"After the time limit"}</span>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f225">
                          <input id="f225" type="checkbox" role="switch" name="callback" />
                          <span className="sw__track" />
                          {"Guest callback required"}
                        </label>
                        <span className="field__hint">{"Front desk calls the guest when done"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f226">
                          <input id="f226" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-17-req-cab">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-17-req-cab" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-17-req-cab-t">
                <a className="modal__backdrop" href="#FDS-P14-req-cab" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-17-guest-request-complaint-types/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-17-req-cab-t">{"Deactivate Cab / taxi?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P14-req-cab" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. Cab / taxi will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P14-req-cab">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P14-req-airport" data-code="FDS-P14" role="dialog" aria-modal="true" aria-labelledby="FDS-P14-req-airport-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-17-guest-request-complaint-types/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P14-req-airport-t">{"Request type: Airport transfer"}</h2>
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
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f227">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f227" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,8}"} maxLength="8" defaultValue={"AIRPORT"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f228">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f228" type="text" name="name" required={true} maxLength="40" defaultValue={"Airport transfer"} />
                        <span className="field__hint">{"e.g. Extra towels, Extra pillow, Iron, Baby cot, Room cleaning, AC not cooling, Wi-Fi help, Cab, Doctor on call"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f229">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f229" name="dept" required={true} defaultValue={"Concierge"}>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f230">
                          {"Time limit (minutes) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f230" type="number" name="sla" required={true} min="1" max="1440" defaultValue={"30"} />
                        <span className="field__hint">{"SLA – the request turns overdue after this"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f231">
                          {"Priority default "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f231" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f232">
                          <input id="f232" type="checkbox" role="switch" name="chargeable" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge code when done"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f233">{"Charge code"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f233" name="charge" defaultValue={"TRN – Airport transfer"}>
                            <option value="" />
                            <option value="TRN – Airport transfer">{"TRN – Airport transfer"}</option>
                            <option value="TRNL – Local taxi">{"TRNL – Local taxi"}</option>
                            <option value="SPA-02 – Ayurveda massage">{"SPA-02 – Ayurveda massage"}</option>
                            <option value="LND – Laundry">{"LND – Laundry"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Only when chargeable (FDS-08)"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f234">
                          {"Escalate to (role) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f234" name="esc" required={true} defaultValue={"Duty Manager"}>
                            <option value="Duty Manager">{"Duty Manager"}</option>
                            <option value="Front Office Manager">{"Front Office Manager"}</option>
                            <option value="General Manager">{"General Manager"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"After the time limit"}</span>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f235">
                          <input id="f235" type="checkbox" role="switch" name="callback" />
                          <span className="sw__track" />
                          {"Guest callback required"}
                        </label>
                        <span className="field__hint">{"Front desk calls the guest when done"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f236">
                          <input id="f236" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-17-req-airport">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-17-req-airport" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-17-req-airport-t">
                <a className="modal__backdrop" href="#FDS-P14-req-airport" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-17-guest-request-complaint-types/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-17-req-airport-t">{"Deactivate Airport transfer?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P14-req-airport" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. Airport transfer will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P14-req-airport">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P14-req-doctor" data-code="FDS-P14" role="dialog" aria-modal="true" aria-labelledby="FDS-P14-req-doctor-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-17-guest-request-complaint-types/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P14-req-doctor-t">{"Request type: Doctor on call"}</h2>
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
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f237">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f237" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,8}"} maxLength="8" defaultValue={"DOCTOR"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f238">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f238" type="text" name="name" required={true} maxLength="40" defaultValue={"Doctor on call"} />
                        <span className="field__hint">{"e.g. Extra towels, Extra pillow, Iron, Baby cot, Room cleaning, AC not cooling, Wi-Fi help, Cab, Doctor on call"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f239">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f239" name="dept" required={true} defaultValue={"Front office"}>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f240">
                          {"Time limit (minutes) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f240" type="number" name="sla" required={true} min="1" max="1440" defaultValue={"15"} />
                        <span className="field__hint">{"SLA – the request turns overdue after this"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f241">
                          {"Priority default "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f241" name="prio" required={true} defaultValue={"Urgent"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f242">
                          <input id="f242" type="checkbox" role="switch" name="chargeable" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge code when done"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f243">{"Charge code"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f243" name="charge" defaultValue={""}>
                            <option value="" />
                            <option value="TRN – Airport transfer">{"TRN – Airport transfer"}</option>
                            <option value="TRNL – Local taxi">{"TRNL – Local taxi"}</option>
                            <option value="SPA-02 – Ayurveda massage">{"SPA-02 – Ayurveda massage"}</option>
                            <option value="LND – Laundry">{"LND – Laundry"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Only when chargeable (FDS-08)"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f244">
                          {"Escalate to (role) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f244" name="esc" required={true} defaultValue={"Duty Manager"}>
                            <option value="Duty Manager">{"Duty Manager"}</option>
                            <option value="Front Office Manager">{"Front Office Manager"}</option>
                            <option value="General Manager">{"General Manager"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"After the time limit"}</span>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f245">
                          <input id="f245" type="checkbox" role="switch" name="callback" />
                          <span className="sw__track" />
                          {"Guest callback required"}
                        </label>
                        <span className="field__hint">{"Front desk calls the guest when done"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f246">
                          <input id="f246" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-17-req-doctor">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-17-req-doctor" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-17-req-doctor-t">
                <a className="modal__backdrop" href="#FDS-P14-req-doctor" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-17-guest-request-complaint-types/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-17-req-doctor-t">{"Deactivate Doctor on call?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P14-req-doctor" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. Doctor on call will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P14-req-doctor">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P14-req-ayur" data-code="FDS-P14" role="dialog" aria-modal="true" aria-labelledby="FDS-P14-req-ayur-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-17-guest-request-complaint-types/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P14-req-ayur-t">{"Request type: Ayurveda booking"}</h2>
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
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f247">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f247" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,8}"} maxLength="8" defaultValue={"AYUR"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f248">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f248" type="text" name="name" required={true} maxLength="40" defaultValue={"Ayurveda booking"} />
                        <span className="field__hint">{"e.g. Extra towels, Extra pillow, Iron, Baby cot, Room cleaning, AC not cooling, Wi-Fi help, Cab, Doctor on call"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f249">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f249" name="dept" required={true} defaultValue={"Concierge"}>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f250">
                          {"Time limit (minutes) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f250" type="number" name="sla" required={true} min="1" max="1440" defaultValue={"30"} />
                        <span className="field__hint">{"SLA – the request turns overdue after this"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f251">
                          {"Priority default "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f251" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f252">
                          <input id="f252" type="checkbox" role="switch" name="chargeable" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge code when done"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f253">{"Charge code"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f253" name="charge" defaultValue={"SPA-02 – Ayurveda massage"}>
                            <option value="" />
                            <option value="TRN – Airport transfer">{"TRN – Airport transfer"}</option>
                            <option value="TRNL – Local taxi">{"TRNL – Local taxi"}</option>
                            <option value="SPA-02 – Ayurveda massage">{"SPA-02 – Ayurveda massage"}</option>
                            <option value="LND – Laundry">{"LND – Laundry"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Only when chargeable (FDS-08)"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f254">
                          {"Escalate to (role) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f254" name="esc" required={true} defaultValue={"Duty Manager"}>
                            <option value="Duty Manager">{"Duty Manager"}</option>
                            <option value="Front Office Manager">{"Front Office Manager"}</option>
                            <option value="General Manager">{"General Manager"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"After the time limit"}</span>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f255">
                          <input id="f255" type="checkbox" role="switch" name="callback" />
                          <span className="sw__track" />
                          {"Guest callback required"}
                        </label>
                        <span className="field__hint">{"Front desk calls the guest when done"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f256">
                          <input id="f256" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-17-req-ayur">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-17-req-ayur" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-17-req-ayur-t">
                <a className="modal__backdrop" href="#FDS-P14-req-ayur" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-17-guest-request-complaint-types/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-17-req-ayur-t">{"Deactivate Ayurveda booking?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P14-req-ayur" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. Ayurveda booking will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P14-req-ayur">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P14-req-repair" data-code="FDS-P14" role="dialog" aria-modal="true" aria-labelledby="FDS-P14-req-repair-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-17-guest-request-complaint-types/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P14-req-repair-t">{"Request type: Repair"}</h2>
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
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f257">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f257" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,8}"} maxLength="8" defaultValue={"REPAIR"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f258">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f258" type="text" name="name" required={true} maxLength="40" defaultValue={"Repair"} />
                        <span className="field__hint">{"e.g. Extra towels, Extra pillow, Iron, Baby cot, Room cleaning, AC not cooling, Wi-Fi help, Cab, Doctor on call"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f259">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f259" name="dept" required={true} defaultValue={"Engineering"}>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f260">
                          {"Time limit (minutes) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f260" type="number" name="sla" required={true} min="1" max="1440" defaultValue={"30"} />
                        <span className="field__hint">{"SLA – the request turns overdue after this"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f261">
                          {"Priority default "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f261" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f262">
                          <input id="f262" type="checkbox" role="switch" name="chargeable" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge code when done"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f263">{"Charge code"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f263" name="charge" defaultValue={""}>
                            <option value="" />
                            <option value="TRN – Airport transfer">{"TRN – Airport transfer"}</option>
                            <option value="TRNL – Local taxi">{"TRNL – Local taxi"}</option>
                            <option value="SPA-02 – Ayurveda massage">{"SPA-02 – Ayurveda massage"}</option>
                            <option value="LND – Laundry">{"LND – Laundry"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Only when chargeable (FDS-08)"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f264">
                          {"Escalate to (role) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f264" name="esc" required={true} defaultValue={"Duty Manager"}>
                            <option value="Duty Manager">{"Duty Manager"}</option>
                            <option value="Front Office Manager">{"Front Office Manager"}</option>
                            <option value="General Manager">{"General Manager"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"After the time limit"}</span>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f265">
                          <input id="f265" type="checkbox" role="switch" name="callback" />
                          <span className="sw__track" />
                          {"Guest callback required"}
                        </label>
                        <span className="field__hint">{"Front desk calls the guest when done"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f266">
                          <input id="f266" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-17-req-repair">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-17-req-repair" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-17-req-repair-t">
                <a className="modal__backdrop" href="#FDS-P14-req-repair" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-17-guest-request-complaint-types/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-17-req-repair-t">{"Deactivate Repair?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P14-req-repair" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. Repair will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P14-req-repair">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P14-req-wakeup" data-code="FDS-P14" role="dialog" aria-modal="true" aria-labelledby="FDS-P14-req-wakeup-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-17-guest-request-complaint-types/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P14-req-wakeup-t">{"Request type: Wake-up call"}</h2>
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
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f267">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f267" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,8}"} maxLength="8" defaultValue={"WAKEUP"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f268">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f268" type="text" name="name" required={true} maxLength="40" defaultValue={"Wake-up call"} />
                        <span className="field__hint">{"e.g. Extra towels, Extra pillow, Iron, Baby cot, Room cleaning, AC not cooling, Wi-Fi help, Cab, Doctor on call"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f269">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f269" name="dept" required={true} defaultValue={"Front office"}>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f270">
                          {"Time limit (minutes) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f270" type="number" name="sla" required={true} min="1" max="1440" defaultValue={"5"} />
                        <span className="field__hint">{"SLA – the request turns overdue after this"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f271">
                          {"Priority default "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f271" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f272">
                          <input id="f272" type="checkbox" role="switch" name="chargeable" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge code when done"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f273">{"Charge code"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f273" name="charge" defaultValue={""}>
                            <option value="" />
                            <option value="TRN – Airport transfer">{"TRN – Airport transfer"}</option>
                            <option value="TRNL – Local taxi">{"TRNL – Local taxi"}</option>
                            <option value="SPA-02 – Ayurveda massage">{"SPA-02 – Ayurveda massage"}</option>
                            <option value="LND – Laundry">{"LND – Laundry"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Only when chargeable (FDS-08)"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f274">
                          {"Escalate to (role) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f274" name="esc" required={true} defaultValue={"Duty Manager"}>
                            <option value="Duty Manager">{"Duty Manager"}</option>
                            <option value="Front Office Manager">{"Front Office Manager"}</option>
                            <option value="General Manager">{"General Manager"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"After the time limit"}</span>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f275">
                          <input id="f275" type="checkbox" role="switch" name="callback" />
                          <span className="sw__track" />
                          {"Guest callback required"}
                        </label>
                        <span className="field__hint">{"Front desk calls the guest when done"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f276">
                          <input id="f276" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-17-req-wakeup">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-17-req-wakeup" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-17-req-wakeup-t">
                <a className="modal__backdrop" href="#FDS-P14-req-wakeup" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-17-guest-request-complaint-types/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-17-req-wakeup-t">{"Deactivate Wake-up call?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P14-req-wakeup" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. Wake-up call will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P14-req-wakeup">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P14" data-code="FDS-P14" role="dialog" aria-modal="true" aria-labelledby="FDS-P14-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-17-guest-request-complaint-types/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P14-t">{"Add request type"}</h2>
                      <p className="modal__desc">{"New item – it is active as soon as it is saved."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f277">
                          {"Code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f277" type="text" name="code" required={true} pattern={"[A-Z0-9]{2,8}"} maxLength="8" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f278">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f278" type="text" name="name" required={true} maxLength="40" defaultValue={""} />
                        <span className="field__hint">{"e.g. Extra towels, Extra pillow, Iron, Baby cot, Room cleaning, AC not cooling, Wi-Fi help, Cab, Doctor on call"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f279">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f279" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f280">
                          {"Time limit (minutes) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f280" type="number" name="sla" required={true} min="1" max="1440" defaultValue={"30"} />
                        <span className="field__hint">{"SLA – the request turns overdue after this"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f281">
                          {"Priority default "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f281" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f282">
                          <input id="f282" type="checkbox" role="switch" name="chargeable" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge code when done"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f283">{"Charge code"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f283" name="charge" defaultValue={""}>
                            <option value="" />
                            <option value="TRN – Airport transfer">{"TRN – Airport transfer"}</option>
                            <option value="TRNL – Local taxi">{"TRNL – Local taxi"}</option>
                            <option value="SPA-02 – Ayurveda massage">{"SPA-02 – Ayurveda massage"}</option>
                            <option value="LND – Laundry">{"LND – Laundry"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Only when chargeable (FDS-08)"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f284">
                          {"Escalate to (role) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f284" name="esc" required={true} defaultValue={"Duty Manager"}>
                            <option value="Duty Manager">{"Duty Manager"}</option>
                            <option value="Front Office Manager">{"Front Office Manager"}</option>
                            <option value="General Manager">{"General Manager"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"After the time limit"}</span>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f285">
                          <input id="f285" type="checkbox" role="switch" name="callback" />
                          <span className="sw__track" />
                          {"Guest callback required"}
                        </label>
                        <span className="field__hint">{"Front desk calls the guest when done"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f286">
                          <input id="f286" type="checkbox" role="switch" name="active" defaultChecked={true} />
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
              <div className="modal modal--full" id="FDS-P15-comp-room" data-code="FDS-P15" role="dialog" aria-modal="true" aria-labelledby="FDS-P15-comp-room-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-17-guest-request-complaint-types/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P15-comp-room-t">{"Complaint type: Room"}</h2>
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
                        <label className="field__label" htmlFor="f287">
                          {"Category / name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f287" type="text" name="name" required={true} maxLength="40" defaultValue={"Room"} />
                        <span className="field__hint">{"e.g. Noise, Cleanliness, Food, Billing, Staff behaviour, Maintenance"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f288">
                          {"Severity default "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f288" name="sev" required={true} defaultValue={"Major"}>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f289">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f289" name="dept" required={true} defaultValue={"Housekeeping"}>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f290">
                          {"Escalation level 1 (minutes) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f290" type="number" name="l1m" required={true} min="1" defaultValue={"15"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f291">
                          {"Escalation level 1 (role) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f291" name="l1r" required={true} defaultValue={"Duty Manager"}>
                            <option value="Duty Manager">{"Duty Manager"}</option>
                            <option value="Front Office Manager">{"Front Office Manager"}</option>
                            <option value="General Manager">{"General Manager"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f292">{"Escalation level 2 (minutes)"}</label>
                        <input className="field__input num" id="f292" type="number" name="l2m" min="1" defaultValue={"30"} />
                        <span className="field__hint">{"Hotel rule: escalate to the Front Office Manager if not closed in 30 minutes"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f293">{"Escalation level 2 (role)"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f293" name="l2r" defaultValue={"Front Office Manager"}>
                            <option value="" />
                            <option value="Duty Manager">{"Duty Manager"}</option>
                            <option value="Front Office Manager">{"Front Office Manager"}</option>
                            <option value="General Manager">{"General Manager"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f294">{"Escalation level 3 (minutes)"}</label>
                        <input className="field__input num" id="f294" type="number" name="l3m" min="1" defaultValue={"120"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f295">{"Escalation level 3 (role)"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f295" name="l3r" defaultValue={"General Manager"}>
                            <option value="" />
                            <option value="Duty Manager">{"Duty Manager"}</option>
                            <option value="Front Office Manager">{"Front Office Manager"}</option>
                            <option value="General Manager">{"General Manager"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f296">
                          <input id="f296" type="checkbox" role="switch" name="comp" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Compensation allowed"}
                        </label>
                        <span className="field__hint">{"Allowance from FDS-09 with approval"}</span>
                      </div>
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">{"Root cause list"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="root" value="Training" />
                            <span className="check__box" />
                            {"Training"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="root" value="Maintenance" />
                            <span className="check__box" />
                            {"Maintenance"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="root" value="Process" />
                            <span className="check__box" />
                            {"Process"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="root" value="Guest expectation" />
                            <span className="check__box" />
                            {"Guest expectation"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="root" value="Vendor" />
                            <span className="check__box" />
                            {"Vendor"}
                          </label>
                        </div>
                        <span className="field__hint">{"For reports"}</span>
                      </fieldset>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f298">
                          <input id="f298" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-17-comp-room">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-17-comp-room" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-17-comp-room-t">
                <a className="modal__backdrop" href="#FDS-P15-comp-room" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-17-guest-request-complaint-types/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-17-comp-room-t">{"Deactivate Room?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P15-comp-room" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. Room will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P15-comp-room">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P15-comp-noise" data-code="FDS-P15" role="dialog" aria-modal="true" aria-labelledby="FDS-P15-comp-noise-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-17-guest-request-complaint-types/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P15-comp-noise-t">{"Complaint type: Noise"}</h2>
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
                        <label className="field__label" htmlFor="f299">
                          {"Category / name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f299" type="text" name="name" required={true} maxLength="40" defaultValue={"Noise"} />
                        <span className="field__hint">{"e.g. Noise, Cleanliness, Food, Billing, Staff behaviour, Maintenance"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f300">
                          {"Severity default "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f300" name="sev" required={true} defaultValue={"Major"}>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f301">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f301" name="dept" required={true} defaultValue={"Front office"}>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f302">
                          {"Escalation level 1 (minutes) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f302" type="number" name="l1m" required={true} min="1" defaultValue={"15"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f303">
                          {"Escalation level 1 (role) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f303" name="l1r" required={true} defaultValue={"Duty Manager"}>
                            <option value="Duty Manager">{"Duty Manager"}</option>
                            <option value="Front Office Manager">{"Front Office Manager"}</option>
                            <option value="General Manager">{"General Manager"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f304">{"Escalation level 2 (minutes)"}</label>
                        <input className="field__input num" id="f304" type="number" name="l2m" min="1" defaultValue={"30"} />
                        <span className="field__hint">{"Hotel rule: escalate to the Front Office Manager if not closed in 30 minutes"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f305">{"Escalation level 2 (role)"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f305" name="l2r" defaultValue={"Front Office Manager"}>
                            <option value="" />
                            <option value="Duty Manager">{"Duty Manager"}</option>
                            <option value="Front Office Manager">{"Front Office Manager"}</option>
                            <option value="General Manager">{"General Manager"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f306">{"Escalation level 3 (minutes)"}</label>
                        <input className="field__input num" id="f306" type="number" name="l3m" min="1" defaultValue={"120"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f307">{"Escalation level 3 (role)"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f307" name="l3r" defaultValue={"General Manager"}>
                            <option value="" />
                            <option value="Duty Manager">{"Duty Manager"}</option>
                            <option value="Front Office Manager">{"Front Office Manager"}</option>
                            <option value="General Manager">{"General Manager"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f308">
                          <input id="f308" type="checkbox" role="switch" name="comp" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Compensation allowed"}
                        </label>
                        <span className="field__hint">{"Allowance from FDS-09 with approval"}</span>
                      </div>
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">{"Root cause list"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="root" value="Training" />
                            <span className="check__box" />
                            {"Training"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="root" value="Maintenance" />
                            <span className="check__box" />
                            {"Maintenance"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="root" value="Process" />
                            <span className="check__box" />
                            {"Process"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="root" value="Guest expectation" />
                            <span className="check__box" />
                            {"Guest expectation"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="root" value="Vendor" />
                            <span className="check__box" />
                            {"Vendor"}
                          </label>
                        </div>
                        <span className="field__hint">{"For reports"}</span>
                      </fieldset>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f310">
                          <input id="f310" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-17-comp-noise">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-17-comp-noise" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-17-comp-noise-t">
                <a className="modal__backdrop" href="#FDS-P15-comp-noise" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-17-guest-request-complaint-types/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-17-comp-noise-t">{"Deactivate Noise?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P15-comp-noise" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. Noise will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P15-comp-noise">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P15-comp-clean" data-code="FDS-P15" role="dialog" aria-modal="true" aria-labelledby="FDS-P15-comp-clean-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-17-guest-request-complaint-types/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P15-comp-clean-t">{"Complaint type: Cleanliness"}</h2>
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
                        <label className="field__label" htmlFor="f311">
                          {"Category / name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f311" type="text" name="name" required={true} maxLength="40" defaultValue={"Cleanliness"} />
                        <span className="field__hint">{"e.g. Noise, Cleanliness, Food, Billing, Staff behaviour, Maintenance"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f312">
                          {"Severity default "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f312" name="sev" required={true} defaultValue={"Major"}>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f313">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f313" name="dept" required={true} defaultValue={"Housekeeping"}>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f314">
                          {"Escalation level 1 (minutes) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f314" type="number" name="l1m" required={true} min="1" defaultValue={"15"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f315">
                          {"Escalation level 1 (role) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f315" name="l1r" required={true} defaultValue={"Duty Manager"}>
                            <option value="Duty Manager">{"Duty Manager"}</option>
                            <option value="Front Office Manager">{"Front Office Manager"}</option>
                            <option value="General Manager">{"General Manager"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f316">{"Escalation level 2 (minutes)"}</label>
                        <input className="field__input num" id="f316" type="number" name="l2m" min="1" defaultValue={"30"} />
                        <span className="field__hint">{"Hotel rule: escalate to the Front Office Manager if not closed in 30 minutes"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f317">{"Escalation level 2 (role)"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f317" name="l2r" defaultValue={"Front Office Manager"}>
                            <option value="" />
                            <option value="Duty Manager">{"Duty Manager"}</option>
                            <option value="Front Office Manager">{"Front Office Manager"}</option>
                            <option value="General Manager">{"General Manager"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f318">{"Escalation level 3 (minutes)"}</label>
                        <input className="field__input num" id="f318" type="number" name="l3m" min="1" defaultValue={"120"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f319">{"Escalation level 3 (role)"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f319" name="l3r" defaultValue={"General Manager"}>
                            <option value="" />
                            <option value="Duty Manager">{"Duty Manager"}</option>
                            <option value="Front Office Manager">{"Front Office Manager"}</option>
                            <option value="General Manager">{"General Manager"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f320">
                          <input id="f320" type="checkbox" role="switch" name="comp" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Compensation allowed"}
                        </label>
                        <span className="field__hint">{"Allowance from FDS-09 with approval"}</span>
                      </div>
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">{"Root cause list"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="root" value="Training" />
                            <span className="check__box" />
                            {"Training"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="root" value="Maintenance" />
                            <span className="check__box" />
                            {"Maintenance"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="root" value="Process" />
                            <span className="check__box" />
                            {"Process"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="root" value="Guest expectation" />
                            <span className="check__box" />
                            {"Guest expectation"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="root" value="Vendor" />
                            <span className="check__box" />
                            {"Vendor"}
                          </label>
                        </div>
                        <span className="field__hint">{"For reports"}</span>
                      </fieldset>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f322">
                          <input id="f322" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-17-comp-clean">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-17-comp-clean" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-17-comp-clean-t">
                <a className="modal__backdrop" href="#FDS-P15-comp-clean" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-17-guest-request-complaint-types/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-17-comp-clean-t">{"Deactivate Cleanliness?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P15-comp-clean" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. Cleanliness will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P15-comp-clean">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P15-comp-food" data-code="FDS-P15" role="dialog" aria-modal="true" aria-labelledby="FDS-P15-comp-food-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-17-guest-request-complaint-types/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P15-comp-food-t">{"Complaint type: Food"}</h2>
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
                        <label className="field__label" htmlFor="f323">
                          {"Category / name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f323" type="text" name="name" required={true} maxLength="40" defaultValue={"Food"} />
                        <span className="field__hint">{"e.g. Noise, Cleanliness, Food, Billing, Staff behaviour, Maintenance"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f324">
                          {"Severity default "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f324" name="sev" required={true} defaultValue={"Major"}>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f325">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f325" name="dept" required={true} defaultValue={"F&B"}>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f326">
                          {"Escalation level 1 (minutes) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f326" type="number" name="l1m" required={true} min="1" defaultValue={"15"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f327">
                          {"Escalation level 1 (role) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f327" name="l1r" required={true} defaultValue={"Duty Manager"}>
                            <option value="Duty Manager">{"Duty Manager"}</option>
                            <option value="Front Office Manager">{"Front Office Manager"}</option>
                            <option value="General Manager">{"General Manager"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f328">{"Escalation level 2 (minutes)"}</label>
                        <input className="field__input num" id="f328" type="number" name="l2m" min="1" defaultValue={"30"} />
                        <span className="field__hint">{"Hotel rule: escalate to the Front Office Manager if not closed in 30 minutes"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f329">{"Escalation level 2 (role)"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f329" name="l2r" defaultValue={"Front Office Manager"}>
                            <option value="" />
                            <option value="Duty Manager">{"Duty Manager"}</option>
                            <option value="Front Office Manager">{"Front Office Manager"}</option>
                            <option value="General Manager">{"General Manager"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f330">{"Escalation level 3 (minutes)"}</label>
                        <input className="field__input num" id="f330" type="number" name="l3m" min="1" defaultValue={"120"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f331">{"Escalation level 3 (role)"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f331" name="l3r" defaultValue={"General Manager"}>
                            <option value="" />
                            <option value="Duty Manager">{"Duty Manager"}</option>
                            <option value="Front Office Manager">{"Front Office Manager"}</option>
                            <option value="General Manager">{"General Manager"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f332">
                          <input id="f332" type="checkbox" role="switch" name="comp" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Compensation allowed"}
                        </label>
                        <span className="field__hint">{"Allowance from FDS-09 with approval"}</span>
                      </div>
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">{"Root cause list"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="root" value="Training" />
                            <span className="check__box" />
                            {"Training"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="root" value="Maintenance" />
                            <span className="check__box" />
                            {"Maintenance"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="root" value="Process" />
                            <span className="check__box" />
                            {"Process"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="root" value="Guest expectation" />
                            <span className="check__box" />
                            {"Guest expectation"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="root" value="Vendor" />
                            <span className="check__box" />
                            {"Vendor"}
                          </label>
                        </div>
                        <span className="field__hint">{"For reports"}</span>
                      </fieldset>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f334">
                          <input id="f334" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-17-comp-food">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-17-comp-food" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-17-comp-food-t">
                <a className="modal__backdrop" href="#FDS-P15-comp-food" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-17-guest-request-complaint-types/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-17-comp-food-t">{"Deactivate Food?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P15-comp-food" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. Food will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P15-comp-food">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P15-comp-staff" data-code="FDS-P15" role="dialog" aria-modal="true" aria-labelledby="FDS-P15-comp-staff-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-17-guest-request-complaint-types/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P15-comp-staff-t">{"Complaint type: Staff behaviour"}</h2>
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
                        <label className="field__label" htmlFor="f335">
                          {"Category / name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f335" type="text" name="name" required={true} maxLength="40" defaultValue={"Staff behaviour"} />
                        <span className="field__hint">{"e.g. Noise, Cleanliness, Food, Billing, Staff behaviour, Maintenance"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f336">
                          {"Severity default "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f336" name="sev" required={true} defaultValue={"Critical"}>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f337">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f337" name="dept" required={true} defaultValue={"Front office"}>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f338">
                          {"Escalation level 1 (minutes) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f338" type="number" name="l1m" required={true} min="1" defaultValue={"15"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f339">
                          {"Escalation level 1 (role) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f339" name="l1r" required={true} defaultValue={"Duty Manager"}>
                            <option value="Duty Manager">{"Duty Manager"}</option>
                            <option value="Front Office Manager">{"Front Office Manager"}</option>
                            <option value="General Manager">{"General Manager"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f340">{"Escalation level 2 (minutes)"}</label>
                        <input className="field__input num" id="f340" type="number" name="l2m" min="1" defaultValue={"30"} />
                        <span className="field__hint">{"Hotel rule: escalate to the Front Office Manager if not closed in 30 minutes"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f341">{"Escalation level 2 (role)"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f341" name="l2r" defaultValue={"Front Office Manager"}>
                            <option value="" />
                            <option value="Duty Manager">{"Duty Manager"}</option>
                            <option value="Front Office Manager">{"Front Office Manager"}</option>
                            <option value="General Manager">{"General Manager"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f342">{"Escalation level 3 (minutes)"}</label>
                        <input className="field__input num" id="f342" type="number" name="l3m" min="1" defaultValue={"120"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f343">{"Escalation level 3 (role)"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f343" name="l3r" defaultValue={"General Manager"}>
                            <option value="" />
                            <option value="Duty Manager">{"Duty Manager"}</option>
                            <option value="Front Office Manager">{"Front Office Manager"}</option>
                            <option value="General Manager">{"General Manager"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f344">
                          <input id="f344" type="checkbox" role="switch" name="comp" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Compensation allowed"}
                        </label>
                        <span className="field__hint">{"Allowance from FDS-09 with approval"}</span>
                      </div>
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">{"Root cause list"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="root" value="Training" />
                            <span className="check__box" />
                            {"Training"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="root" value="Maintenance" />
                            <span className="check__box" />
                            {"Maintenance"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="root" value="Process" />
                            <span className="check__box" />
                            {"Process"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="root" value="Guest expectation" />
                            <span className="check__box" />
                            {"Guest expectation"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="root" value="Vendor" />
                            <span className="check__box" />
                            {"Vendor"}
                          </label>
                        </div>
                        <span className="field__hint">{"For reports"}</span>
                      </fieldset>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f346">
                          <input id="f346" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-17-comp-staff">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-17-comp-staff" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-17-comp-staff-t">
                <a className="modal__backdrop" href="#FDS-P15-comp-staff" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-17-guest-request-complaint-types/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-17-comp-staff-t">{"Deactivate Staff behaviour?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P15-comp-staff" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. Staff behaviour will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P15-comp-staff">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P15-comp-bill" data-code="FDS-P15" role="dialog" aria-modal="true" aria-labelledby="FDS-P15-comp-bill-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-17-guest-request-complaint-types/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P15-comp-bill-t">{"Complaint type: Billing"}</h2>
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
                        <label className="field__label" htmlFor="f347">
                          {"Category / name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f347" type="text" name="name" required={true} maxLength="40" defaultValue={"Billing"} />
                        <span className="field__hint">{"e.g. Noise, Cleanliness, Food, Billing, Staff behaviour, Maintenance"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f348">
                          {"Severity default "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f348" name="sev" required={true} defaultValue={"Minor"}>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f349">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f349" name="dept" required={true} defaultValue={"Front office"}>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f350">
                          {"Escalation level 1 (minutes) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f350" type="number" name="l1m" required={true} min="1" defaultValue={"15"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f351">
                          {"Escalation level 1 (role) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f351" name="l1r" required={true} defaultValue={"Duty Manager"}>
                            <option value="Duty Manager">{"Duty Manager"}</option>
                            <option value="Front Office Manager">{"Front Office Manager"}</option>
                            <option value="General Manager">{"General Manager"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f352">{"Escalation level 2 (minutes)"}</label>
                        <input className="field__input num" id="f352" type="number" name="l2m" min="1" defaultValue={"30"} />
                        <span className="field__hint">{"Hotel rule: escalate to the Front Office Manager if not closed in 30 minutes"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f353">{"Escalation level 2 (role)"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f353" name="l2r" defaultValue={"Front Office Manager"}>
                            <option value="" />
                            <option value="Duty Manager">{"Duty Manager"}</option>
                            <option value="Front Office Manager">{"Front Office Manager"}</option>
                            <option value="General Manager">{"General Manager"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f354">{"Escalation level 3 (minutes)"}</label>
                        <input className="field__input num" id="f354" type="number" name="l3m" min="1" defaultValue={"120"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f355">{"Escalation level 3 (role)"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f355" name="l3r" defaultValue={"General Manager"}>
                            <option value="" />
                            <option value="Duty Manager">{"Duty Manager"}</option>
                            <option value="Front Office Manager">{"Front Office Manager"}</option>
                            <option value="General Manager">{"General Manager"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f356">
                          <input id="f356" type="checkbox" role="switch" name="comp" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Compensation allowed"}
                        </label>
                        <span className="field__hint">{"Allowance from FDS-09 with approval"}</span>
                      </div>
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">{"Root cause list"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="root" value="Training" />
                            <span className="check__box" />
                            {"Training"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="root" value="Maintenance" />
                            <span className="check__box" />
                            {"Maintenance"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="root" value="Process" />
                            <span className="check__box" />
                            {"Process"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="root" value="Guest expectation" />
                            <span className="check__box" />
                            {"Guest expectation"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="root" value="Vendor" />
                            <span className="check__box" />
                            {"Vendor"}
                          </label>
                        </div>
                        <span className="field__hint">{"For reports"}</span>
                      </fieldset>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f358">
                          <input id="f358" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn btn--danger fd-spacer" href="#deact-FDS-17-comp-bill">{"Deactivate"}</a>
                    <button className="btn" type="submit" name="then" value="new">{"Save & New"}</button>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="deact-FDS-17-comp-bill" data-code="CM-P07" role="alertdialog" aria-modal="true" aria-labelledby="deact-FDS-17-comp-bill-t">
                <a className="modal__backdrop" href="#FDS-P15-comp-bill" aria-label="Cancel" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-17-guest-request-complaint-types/#deactivated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="deact-FDS-17-comp-bill-t">{"Deactivate Billing?"}</h2>
                    </div>
                    <a className="modal__close" href="#FDS-P15-comp-bill" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>{"Items already used in transactions are deactivated, never deleted. Billing will no longer be offered on new transactions."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FDS-P15-comp-bill">{"Cancel"}</a>
                    <button className="btn btn--danger" type="submit">{"Deactivate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="FDS-P15" data-code="FDS-P15" role="dialog" aria-modal="true" aria-labelledby="FDS-P15-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-17-guest-request-complaint-types/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P15-t">{"Add complaint type"}</h2>
                      <p className="modal__desc">{"New item – it is active as soon as it is saved."}</p>
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
                        <label className="field__label" htmlFor="f359">
                          {"Category / name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f359" type="text" name="name" required={true} maxLength="40" defaultValue={""} />
                        <span className="field__hint">{"e.g. Noise, Cleanliness, Food, Billing, Staff behaviour, Maintenance"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f360">
                          {"Severity default "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f360" name="sev" required={true} defaultValue={"Major"}>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f361">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f361" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f362">
                          {"Escalation level 1 (minutes) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f362" type="number" name="l1m" required={true} min="1" defaultValue={"15"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f363">
                          {"Escalation level 1 (role) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f363" name="l1r" required={true} defaultValue={"Duty Manager"}>
                            <option value="Duty Manager">{"Duty Manager"}</option>
                            <option value="Front Office Manager">{"Front Office Manager"}</option>
                            <option value="General Manager">{"General Manager"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f364">{"Escalation level 2 (minutes)"}</label>
                        <input className="field__input num" id="f364" type="number" name="l2m" min="1" defaultValue={"30"} />
                        <span className="field__hint">{"Hotel rule: escalate to the Front Office Manager if not closed in 30 minutes"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f365">{"Escalation level 2 (role)"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f365" name="l2r" defaultValue={"Front Office Manager"}>
                            <option value="" />
                            <option value="Duty Manager">{"Duty Manager"}</option>
                            <option value="Front Office Manager">{"Front Office Manager"}</option>
                            <option value="General Manager">{"General Manager"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f366">{"Escalation level 3 (minutes)"}</label>
                        <input className="field__input num" id="f366" type="number" name="l3m" min="1" defaultValue={"120"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f367">{"Escalation level 3 (role)"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f367" name="l3r" defaultValue={"General Manager"}>
                            <option value="" />
                            <option value="Duty Manager">{"Duty Manager"}</option>
                            <option value="Front Office Manager">{"Front Office Manager"}</option>
                            <option value="General Manager">{"General Manager"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f368">
                          <input id="f368" type="checkbox" role="switch" name="comp" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Compensation allowed"}
                        </label>
                        <span className="field__hint">{"Allowance from FDS-09 with approval"}</span>
                      </div>
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">{"Root cause list"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="root" value="Training" />
                            <span className="check__box" />
                            {"Training"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="root" value="Maintenance" />
                            <span className="check__box" />
                            {"Maintenance"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="root" value="Process" />
                            <span className="check__box" />
                            {"Process"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="root" value="Guest expectation" />
                            <span className="check__box" />
                            {"Guest expectation"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="root" value="Vendor" />
                            <span className="check__box" />
                            {"Vendor"}
                          </label>
                        </div>
                        <span className="field__hint">{"For reports"}</span>
                      </fieldset>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="f370">
                          <input id="f370" type="checkbox" role="switch" name="active" defaultChecked={true} />
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
              <div className="modal modal--lg" id="log-FDS-17" data-code="FDS-17-log" role="dialog" aria-modal="true" aria-labelledby="log-FDS-17-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="log-FDS-17-t">{"Change log – Guest Request & Complaint Types"}</h2>
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
                              <input className="srt-i srt-a0" type="radio" name="stfds172" id="stfds172-0a" aria-label="Sort by When, lowest or A first" />
                              <input className="srt-i srt-d0" type="radio" name="stfds172" id="stfds172-0d" aria-label="Sort by When, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfds172-0a">{"When"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfds172-0d" aria-hidden="true">{"When"}</label>
                            </th>
                            <th scope="col">
                              <input className="srt-i srt-a1" type="radio" name="stfds172" id="stfds172-1a" aria-label="Sort by User, lowest or A first" />
                              <input className="srt-i srt-d1" type="radio" name="stfds172" id="stfds172-1d" aria-label="Sort by User, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfds172-1a">{"User"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfds172-1d" aria-hidden="true">{"User"}</label>
                            </th>
                            <th scope="col">{"Setting"}</th>
                            <th scope="col">
                              <input className="srt-i srt-a3" type="radio" name="stfds172" id="stfds172-3a" aria-label="Sort by Old → new, lowest or A first" />
                              <input className="srt-i srt-d3" type="radio" name="stfds172" id="stfds172-3d" aria-label="Sort by Old → new, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfds172-3a">{"Old → new"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfds172-3d" aria-hidden="true">{"Old → new"}</label>
                            </th>
                            <th scope="col">
                              <input className="srt-i srt-a4" type="radio" name="stfds172" id="stfds172-4a" aria-label="Sort by Note, lowest or A first" />
                              <input className="srt-i srt-d4" type="radio" name="stfds172" id="stfds172-4d" aria-label="Sort by Note, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfds172-4a">{"Note"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfds172-4d" aria-hidden="true">{"Note"}</label>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{"--k0": "3", "--k1": "1", "--k3": "3", "--k4": "3"}}>
                            <td className="dt__td nw" data-label="When" data-w2="" data-t="">{"22 Oct 09:12"}</td>
                            <td className="dt__td nw" data-label="User" data-w2="">{"Meera Prem"}</td>
                            <td className="dt__td" data-label="Setting">{"Guest Request & Complaint Types"}</td>
                            <td className="dt__td nw" data-label="Old → new" data-w2="">{"Updated settings"}</td>
                            <td className="dt__td nw" data-label="Note" data-w2="">{"Saved from this screen"}</td>
                          </tr>
                          <tr style={{"--k0": "2", "--k1": "2", "--k3": "2", "--k4": "2"}}>
                            <td className="dt__td nw" data-label="When" data-w2="" data-t="">{"21 Oct 17:40"}</td>
                            <td className="dt__td nw" data-label="User" data-w2="">{"System Admin"}</td>
                            <td className="dt__td" data-label="Setting">{"Guest Request & Complaint Types"}</td>
                            <td className="dt__td" data-label="Old → new">{"Reviewed with the GM approval document"}</td>
                            <td className="dt__td nw" data-label="Note" data-w2="">{"No change"}</td>
                          </tr>
                          <tr style={{"--k0": "1", "--k1": "1", "--k3": "1", "--k4": "1"}}>
                            <td className="dt__td nw" data-label="When" data-w2="" data-t="">{"20 Oct 11:05"}</td>
                            <td className="dt__td nw" data-label="User" data-w2="">{"Meera Prem"}</td>
                            <td className="dt__td" data-label="Setting">{"Guest Request & Complaint Types"}</td>
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
              <div className="modal modal--sm" id="export-FDS-17" data-code="FDS-17-export" role="dialog" aria-modal="true" aria-labelledby="export-FDS-17-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-17-guest-request-complaint-types/#exported" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="export-FDS-17-t">{"Export Guest Request & Complaint Types"}</h2>
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
                  {"Type saved"}
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
                  {"Type deactivated"}
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
              <div className="modal modal--md" id="FDS-17-export" data-code="FDS-17-export" role="dialog" aria-modal="true" aria-labelledby="FDS-17-export-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FDS-17-export-t">{"Export this list"}</h2>
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
                  <span className="code-chip">{"FDS-17"}</span>
                </summary>
                <dl className="helpbox__body">
                  <dt>{"What it is for"}</dt>
                  <dd>{"Request and complaint types, departments, time limits (SLA), escalation chain, charges"}</dd>
                  <dt>{"Opened from"}</dt>
                  <dd>
                    <Link to={"/front-desk-setup/fds-01-front-desk-setup-home"}>{"FDS-01"}</Link>
                  </dd>
                  <dt>{"Leads to"}</dt>
                  <dd>
                    <a href="/front-desk-setup/fds-17-guest-request-complaint-types/#FDS-P14">{"FDS-P14"}</a>
                    {", "}
                    <a href="/front-desk-setup/fds-17-guest-request-complaint-types/#FDS-P15">{"FDS-P15"}</a>
                  </dd>
                  <dt>{"Note"}</dt>
                  <dd>{"Static screen (HTML and CSS only): it shows the layout, fields and sample data. Saving and live data come when the backend is connected."}</dd>
                </dl>
              </details>
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
