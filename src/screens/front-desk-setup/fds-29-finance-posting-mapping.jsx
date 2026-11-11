// GENERATED from public/front-desk-setup/fds-29-finance-posting-mapping/index.html by scripts/convert_legacy.py.
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
    "href": "/front-desk-setup/fds-29-finance-posting-mapping/fds-29-finance-posting-mapping.css",
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

export default function FrontDeskSetupFds29FinancePostingMapping() {
  return (
    <ScreenShell title="Finance Posting Mapping" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="FDS-29" data-code="FDS-29" data-static="1" className="legacy-body">
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
            <main className="app__content" id="main" data-code="FDS-29" tabIndex="-1">
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
                        <span aria-current="page">{"Finance Posting Mapping"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">{"Finance Posting Mapping"}</h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"FDS-29"}</span>
                  <div className="page-header__actions">
                    <a className="btn" href="#export-FDS-29" data-flow="opener">{"Export Finance Posting Mapping"}</a>
                    <a className="btn ph-ic" href="#log-FDS-29">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#history" />
                      </svg>
                      {"Change log"}
                    </a>
                    <a className="btn ph-ic" href="#FDS-29-export" data-opens="FDS-29-export">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#download" />
                      </svg>
                      {"Export"}
                    </a>
                    <a className="btn btn--primary" href="#FDS-29a">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#list" />
                      </svg>
                      {"Open mapping grid"}
                    </a>
                  </div>
                </div>
              </header>
              <div className="fd-banner">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#alert" />
                </svg>
                <div className="fd-banner__t">
                  <strong>{"1 item is not mapped"}</strong>
                  <ul className="fd-list">
                    <li>
                      <strong>{"SPA-01 Ayurveda session"}</strong>
                      {" "}
                      <span className="fd-muted">{"Charge code"}</span>
                      {" "}
                      <a className="btn" href="#FDS-P25-map-018">{"Map now"}</a>
                    </li>
                  </ul>
                </div>
              </div>
              <section className="st-tiles" data-n="10" aria-label="Summary">
                <div className="st-tile st-tile--warn">
                  <span className="st-tile__ic">
                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#bar-chart" />
                    </svg>
                  </span>
                  <span className="st-tile__l">{"Charge code"}</span>
                  <span className="st-tile__v">
                    <b className="st-tile__n">
                      {"37"}
                      <small>{" / 38"}</small>
                    </b>
                    <small className="st-tile__u">{"1 not mapped"}</small>
                  </span>
                </div>
                <div className="st-tile st-tile--good">
                  <span className="st-tile__ic">
                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#bar-chart" />
                    </svg>
                  </span>
                  <span className="st-tile__l">{"Tax"}</span>
                  <span className="st-tile__v">
                    <b className="st-tile__n">
                      {"6"}
                      <small>{" / 6"}</small>
                    </b>
                    <small className="st-tile__u">{"all mapped"}</small>
                  </span>
                </div>
                <div className="st-tile st-tile--good">
                  <span className="st-tile__ic">
                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#bar-chart" />
                    </svg>
                  </span>
                  <span className="st-tile__l">{"Payment mode"}</span>
                  <span className="st-tile__v">
                    <b className="st-tile__n">
                      {"10"}
                      <small>{" / 10"}</small>
                    </b>
                    <small className="st-tile__u">{"all mapped"}</small>
                  </span>
                </div>
                <div className="st-tile st-tile--good">
                  <span className="st-tile__ic">
                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#bar-chart" />
                    </svg>
                  </span>
                  <span className="st-tile__l">{"Allowance"}</span>
                  <span className="st-tile__v">
                    <b className="st-tile__n">
                      {"5"}
                      <small>{" / 5"}</small>
                    </b>
                    <small className="st-tile__u">{"all mapped"}</small>
                  </span>
                </div>
                <div className="st-tile st-tile--good">
                  <span className="st-tile__ic">
                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#banknote" />
                    </svg>
                  </span>
                  <span className="st-tile__l">{"Paid-out"}</span>
                  <span className="st-tile__v">
                    <b className="st-tile__n">
                      {"6"}
                      <small>{" / 6"}</small>
                    </b>
                    <small className="st-tile__u">{"all mapped"}</small>
                  </span>
                </div>
                <div className="st-tile st-tile--good">
                  <span className="st-tile__ic">
                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#shield" />
                    </svg>
                  </span>
                  <span className="st-tile__l">{"Advance deposit"}</span>
                  <span className="st-tile__v">
                    <b className="st-tile__n">
                      {"1"}
                      <small>{" / 1"}</small>
                    </b>
                    <small className="st-tile__u">{"all mapped"}</small>
                  </span>
                </div>
                <div className="st-tile st-tile--good">
                  <span className="st-tile__ic">
                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#book-open" />
                    </svg>
                  </span>
                  <span className="st-tile__l">{"City ledger"}</span>
                  <span className="st-tile__v">
                    <b className="st-tile__n">
                      {"1"}
                      <small>{" / 1"}</small>
                    </b>
                    <small className="st-tile__u">{"all mapped"}</small>
                  </span>
                </div>
                <div className="st-tile st-tile--good">
                  <span className="st-tile__ic">
                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#bar-chart" />
                    </svg>
                  </span>
                  <span className="st-tile__l">{"Round-off"}</span>
                  <span className="st-tile__v">
                    <b className="st-tile__n">
                      {"1"}
                      <small>{" / 1"}</small>
                    </b>
                    <small className="st-tile__u">{"all mapped"}</small>
                  </span>
                </div>
                <div className="st-tile st-tile--good">
                  <span className="st-tile__ic">
                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#banknote" />
                    </svg>
                  </span>
                  <span className="st-tile__l">{"Cash over / short"}</span>
                  <span className="st-tile__v">
                    <b className="st-tile__n">
                      {"1"}
                      <small>{" / 1"}</small>
                    </b>
                    <small className="st-tile__u">{"all mapped"}</small>
                  </span>
                </div>
                <div className="st-tile st-tile--good">
                  <span className="st-tile__ic">
                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#bar-chart" />
                    </svg>
                  </span>
                  <span className="st-tile__l">{"Paymaster"}</span>
                  <span className="st-tile__v">
                    <b className="st-tile__n">
                      {"5"}
                      <small>{" / 5"}</small>
                    </b>
                    <small className="st-tile__u">{"all mapped"}</small>
                  </span>
                </div>
              </section>
              <section className="card " data-code="FDS-29-info">
                <div className="fd-cardhead">
                  <h2 className="s-card-title">{"How posting uses this mapping"}</h2>
                </div>
                <p>
                  {"At day end, "}
                  <strong>{"Account Posting (FD-37)"}</strong>
                  {" turns the posted charges, taxes and payments of the business date into accounting entries using these mappings. Unmapped items appear as warnings on Setup Home and on the error list of FD-37, with a Fix link back to this screen."}
                </p>
              </section>
              <div className="modal modal--full" id="FDS-29a" data-code="FDS-29a" role="dialog" aria-modal="true" aria-labelledby="FDS-29a-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-29a-t">{"Account mapping grid"}</h2>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p className="fd-muted">{"Every charge code, tax, payment mode, allowance, paid-out, advance deposit, city ledger, paymaster, round-off and cash over / short item needs a finance account. Account posting (FD-37) cannot run while a posted item is unmapped."}</p>
                    <div className="mp-wrap">
                      <div className="mp-bar">
                        <div className="fd-filterchips">
                          <input type="radio" name="mapf" id="mapf-all" defaultChecked={true} />
                          <label htmlFor="mapf-all">
                            {"All items"}
                            <b>{"74"}</b>
                          </label>
                          <input type="radio" name="mapf" id="mapf-unm" />
                          <label htmlFor="mapf-unm">
                            {"Not mapped"}
                            <b>{"1"}</b>
                          </label>
                        </div>
                        <span className="mp-bar__hint">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#info" />
                          </svg>
                          {"Debit / credit comes from the item type"}
                        </span>
                      </div>
                      <div className="mp-all">
                        <div className="pgw">
                          <div className="s-scroll s-scroll--tall">
                            <table className="srt dt__table mp-table" data-code="FDS-29-map" style={{"--srt-cols": "auto auto auto auto auto auto max-content"}} data-mc="">
                              <caption className="sr-only">{"Account mappings list"}</caption>
                              <thead>
                                <tr>
                                  <th scope="col">
                                    <input className="srt-i srt-a0" type="radio" name="stfds290" id="stfds290-0a" aria-label="Sort by Item, lowest or A first" />
                                    <input className="srt-i srt-d0" type="radio" name="stfds290" id="stfds290-0d" aria-label="Sort by Item, highest or Z first" />
                                    <label className="srt-l srt-l--a" htmlFor="stfds290-0a">{"Item"}</label>
                                    <label className="srt-l srt-l--d" htmlFor="stfds290-0d" aria-hidden="true">{"Item"}</label>
                                  </th>
                                  <th scope="col">
                                    <input className="srt-i srt-a1" type="radio" name="stfds290" id="stfds290-1a" aria-label="Sort by Item type, lowest or A first" />
                                    <input className="srt-i srt-d1" type="radio" name="stfds290" id="stfds290-1d" aria-label="Sort by Item type, highest or Z first" />
                                    <label className="srt-l srt-l--a" htmlFor="stfds290-1a">{"Item type"}</label>
                                    <label className="srt-l srt-l--d" htmlFor="stfds290-1d" aria-hidden="true">{"Item type"}</label>
                                  </th>
                                  <th scope="col">
                                    <input className="srt-i srt-a2" type="radio" name="stfds290" id="stfds290-2a" aria-label="Sort by Finance account, lowest or A first" />
                                    <input className="srt-i srt-d2" type="radio" name="stfds290" id="stfds290-2d" aria-label="Sort by Finance account, highest or Z first" />
                                    <label className="srt-l srt-l--a" htmlFor="stfds290-2a">{"Finance account"}</label>
                                    <label className="srt-l srt-l--d" htmlFor="stfds290-2d" aria-hidden="true">{"Finance account"}</label>
                                  </th>
                                  <th scope="col">
                                    <input className="srt-i srt-a3" type="radio" name="stfds290" id="stfds290-3a" aria-label="Sort by Cost centre, lowest or A first" />
                                    <input className="srt-i srt-d3" type="radio" name="stfds290" id="stfds290-3d" aria-label="Sort by Cost centre, highest or Z first" />
                                    <label className="srt-l srt-l--a" htmlFor="stfds290-3a">{"Cost centre"}</label>
                                    <label className="srt-l srt-l--d" htmlFor="stfds290-3d" aria-hidden="true">{"Cost centre"}</label>
                                  </th>
                                  <th scope="col">
                                    <input className="srt-i srt-a4" type="radio" name="stfds290" id="stfds290-4a" aria-label="Sort by Debit / credit, lowest or A first" />
                                    <input className="srt-i srt-d4" type="radio" name="stfds290" id="stfds290-4d" aria-label="Sort by Debit / credit, highest or Z first" />
                                    <label className="srt-l srt-l--a" htmlFor="stfds290-4a">{"Debit / credit"}</label>
                                    <label className="srt-l srt-l--d" htmlFor="stfds290-4d" aria-hidden="true">{"Debit / credit"}</label>
                                  </th>
                                  <th scope="col">
                                    <input className="srt-i srt-a5" type="radio" name="stfds290" id="stfds290-5a" aria-label="Sort by Mapping, lowest or A first" />
                                    <input className="srt-i srt-d5" type="radio" name="stfds290" id="stfds290-5d" aria-label="Sort by Mapping, highest or Z first" />
                                    <label className="srt-l srt-l--a" htmlFor="stfds290-5a">{"Mapping"}</label>
                                    <label className="srt-l srt-l--d" htmlFor="stfds290-5d" aria-hidden="true">{"Mapping"}</label>
                                  </th>
                                  <th scope="col" />
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="map-row" style={{"--k0": "57", "--k1": "4", "--k2": "16", "--k3": "5", "--k4": "1", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Room charge"}</b>
                                      <small>{"RM"}</small>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Charge code"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"4001"}</b>
                                      <span>{"Room revenue"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Cost centre" data-w2="">{"Front office"}</td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--c">{"Credit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-000" aria-label="Edit RM Room charge">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "29", "--k1": "4", "--k2": "16", "--k3": "6", "--k4": "1", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Extra bed"}</b>
                                      <small>{"EB"}</small>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Charge code"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"4001"}</b>
                                      <span>{"Room revenue"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Cost centre" data-w2="">{"Housekeeping"}</td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--c">{"Credit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-001" aria-label="Edit EB Extra bed">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "27", "--k1": "4", "--k2": "16", "--k3": "5", "--k4": "1", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Early check-in fee"}</b>
                                      <small>{"ECI"}</small>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Charge code"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"4001"}</b>
                                      <span>{"Room revenue"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Cost centre" data-w2="">{"Front office"}</td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--c">{"Credit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-002" aria-label="Edit ECI Early check-in fee">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "41", "--k1": "4", "--k2": "16", "--k3": "5", "--k4": "1", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Late check-out fee"}</b>
                                      <small>{"LCO"}</small>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Charge code"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"4001"}</b>
                                      <span>{"Room revenue"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Cost centre" data-w2="">{"Front office"}</td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--c">{"Credit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-003" aria-label="Edit LCO Late check-out fee">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "50", "--k1": "4", "--k2": "16", "--k3": "5", "--k4": "1", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"No-show charge"}</b>
                                      <small>{"NSH"}</small>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Charge code"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"4001"}</b>
                                      <span>{"Room revenue"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Cost centre" data-w2="">{"Front office"}</td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--c">{"Credit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-004" aria-label="Edit NSH No-show charge">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "12", "--k1": "4", "--k2": "16", "--k3": "5", "--k4": "1", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Cancellation charge"}</b>
                                      <small>{"CXL"}</small>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Charge code"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"4001"}</b>
                                      <span>{"Room revenue"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Cost centre" data-w2="">{"Front office"}</td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--c">{"Credit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-005" aria-label="Edit CXL Cancellation charge">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "24", "--k1": "4", "--k2": "16", "--k3": "5", "--k4": "1", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Day-use charge"}</b>
                                      <small>{"DUSE"}</small>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Charge code"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"4001"}</b>
                                      <span>{"Room revenue"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Cost centre" data-w2="">{"Front office"}</td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--c">{"Credit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-006" aria-label="Edit DUSE Day-use charge">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "10", "--k1": "4", "--k2": "18", "--k3": "10", "--k4": "1", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Breakfast"}</b>
                                      <small>{"BF"}</small>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Charge code"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"4101"}</b>
                                      <span>{"F&B revenue"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Cost centre" data-w2="">{"Travancore Restaurant"}</td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--c">{"Credit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-007" aria-label="Edit BF Breakfast">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "70", "--k1": "4", "--k2": "18", "--k3": "10", "--k4": "1", "--k5": "1"}}>
                                  <td className="dt__td" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Travancore Restaurant"}</b>
                                      <small>{"TRV"}</small>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Charge code"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"4101"}</b>
                                      <span>{"F&B revenue"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Cost centre" data-w2="">{"Travancore Restaurant"}</td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--c">{"Credit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-008" aria-label="Edit TRV Travancore Restaurant">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "59", "--k1": "4", "--k2": "18", "--k3": "9", "--k4": "1", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Seafood Grill"}</b>
                                      <small>{"SFG"}</small>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Charge code"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"4101"}</b>
                                      <span>{"F&B revenue"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Cost centre" data-w2="">{"Seafood Grill"}</td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--c">{"Credit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-009" aria-label="Edit SFG Seafood Grill">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "18", "--k1": "4", "--k2": "19", "--k3": "3", "--k4": "1", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Cochin Trade Bar"}</b>
                                      <small>{"BAR"}</small>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Charge code"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"4102"}</b>
                                      <span>{"Bar revenue"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Cost centre" data-w2="">{"Cochin Trade Bar"}</td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--c">{"Credit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-010" aria-label="Edit BAR Cochin Trade Bar">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "39", "--k1": "4", "--k2": "18", "--k3": "7", "--k4": "1", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"In-room dining"}</b>
                                      <small>{"IRD"}</small>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Charge code"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"4101"}</b>
                                      <span>{"F&B revenue"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Cost centre" data-w2="">{"In-room Dining"}</td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--c">{"Credit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-011" aria-label="Edit IRD In-room dining">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "9", "--k1": "4", "--k2": "18", "--k3": "10", "--k4": "1", "--k5": "1"}}>
                                  <td className="dt__td" data-label="Item" data-w="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Birthday / anniversary cake"}</b>
                                      <small>{"CAKE"}</small>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Charge code"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"4101"}</b>
                                      <span>{"F&B revenue"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Cost centre" data-w2="">{"Travancore Restaurant"}</td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--c">{"Credit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-012" aria-label="Edit CAKE Birthday / anniversary cake">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "35", "--k1": "4", "--k2": "18", "--k3": "10", "--k4": "1", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Gala dinner"}</b>
                                      <small>{"GALA"}</small>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Charge code"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"4101"}</b>
                                      <span>{"F&B revenue"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Cost centre" data-w2="">{"Travancore Restaurant"}</td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--c">{"Credit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-013" aria-label="Edit GALA Gala dinner">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "8", "--k1": "4", "--k2": "20", "--k3": "8", "--k4": "1", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Banquet charges"}</b>
                                      <small>{"BNQ"}</small>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Charge code"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"4103"}</b>
                                      <span>{"Banquet revenue"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td" data-label="Cost centre" data-w2="">{"Periyar / Meenachil Hall"}</td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--c">{"Credit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-014" aria-label="Edit BNQ Banquet charges">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "48", "--k1": "4", "--k2": "18", "--k3": "6", "--k4": "1", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Minibar"}</b>
                                      <small>{"MB"}</small>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Charge code"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"4101"}</b>
                                      <span>{"F&B revenue"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Cost centre" data-w2="">{"Housekeeping"}</td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--c">{"Credit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-015" aria-label="Edit MB Minibar">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "42", "--k1": "4", "--k2": "21", "--k3": "6", "--k4": "1", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Laundry"}</b>
                                      <small>{"LND"}</small>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Charge code"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"4201"}</b>
                                      <span>{"Other revenue"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Cost centre" data-w2="">{"Housekeeping"}</td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--c">{"Credit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-016" aria-label="Edit LND Laundry">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "26", "--k1": "4", "--k2": "21", "--k3": "6", "--k4": "1", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Dry cleaning"}</b>
                                      <small>{"DRY"}</small>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Charge code"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"4201"}</b>
                                      <span>{"Other revenue"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Cost centre" data-w2="">{"Housekeeping"}</td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--c">{"Credit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-017" aria-label="Edit DRY Dry cleaning">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row is-unmapped" style={{"--k0": "6", "--k1": "4", "--k2": "30", "--k3": "1", "--k4": "1", "--k5": "2"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Ayurveda session"}</b>
                                      <small>{"SPA-01"}</small>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Charge code"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-none">{"No account yet"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Cost centre" data-w2="">{"Ayurvedic Centre"}</td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--c">{"Credit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--tentative">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#alert" />
                                      </svg>
                                      {"Not mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn btn--primary" href="#FDS-P25-map-018" aria-label="Map SPA-01 Ayurveda session">{"Map now"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "5", "--k1": "4", "--k2": "23", "--k3": "1", "--k4": "1", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Ayurveda massage"}</b>
                                      <small>{"SPA-02"}</small>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Charge code"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"4203"}</b>
                                      <span>{"Spa revenue"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Cost centre" data-w2="">{"Ayurvedic Centre"}</td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--c">{"Credit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-019" aria-label="Edit SPA-02 Ayurveda massage">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "74", "--k1": "4", "--k2": "23", "--k3": "1", "--k4": "1", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Yoga session"}</b>
                                      <small>{"SPA-03"}</small>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Charge code"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"4203"}</b>
                                      <span>{"Spa revenue"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Cost centre" data-w2="">{"Ayurvedic Centre"}</td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--c">{"Credit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-020" aria-label="Edit SPA-03 Yoga session">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "4", "--k1": "4", "--k2": "22", "--k3": "4", "--k4": "1", "--k5": "1"}}>
                                  <td className="dt__td" data-label="Item" data-w="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Airport transfer (one way)"}</b>
                                      <small>{"TRN"}</small>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Charge code"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"4202"}</b>
                                      <span>{"Transport revenue"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Cost centre" data-w2="">{"Concierge"}</td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--c">{"Credit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-021" aria-label="Edit TRN Airport transfer (one way)">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "44", "--k1": "4", "--k2": "22", "--k3": "4", "--k4": "1", "--k5": "1"}}>
                                  <td className="dt__td" data-label="Item" data-w="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Local taxi / sightseeing"}</b>
                                      <small>{"TRNL"}</small>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Charge code"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"4202"}</b>
                                      <span>{"Transport revenue"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Cost centre" data-w2="">{"Concierge"}</td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--c">{"Credit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-022" aria-label="Edit TRNL Local taxi / sightseeing">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "69", "--k1": "4", "--k2": "22", "--k3": "4", "--k4": "1", "--k5": "1"}}>
                                  <td className="dt__td" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Tours and activities"}</b>
                                      <small>{"TOUR"}</small>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Charge code"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"4202"}</b>
                                      <span>{"Transport revenue"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Cost centre" data-w2="">{"Concierge"}</td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--c">{"Credit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-023" aria-label="Edit TOUR Tours and activities">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "66", "--k1": "4", "--k2": "24", "--k3": "5", "--k4": "1", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Telephone"}</b>
                                      <small>{"TEL"}</small>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Charge code"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"4204"}</b>
                                      <span>{"Telephone revenue"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Cost centre" data-w2="">{"Front office"}</td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--c">{"Credit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-024" aria-label="Edit TEL Telephone">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "11", "--k1": "4", "--k2": "25", "--k3": "5", "--k4": "1", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Business centre"}</b>
                                      <small>{"BC"}</small>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Charge code"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"4205"}</b>
                                      <span>{"Business centre"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Cost centre" data-w2="">{"Front office"}</td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--c">{"Credit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-025" aria-label="Edit BC Business centre">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "55", "--k1": "4", "--k2": "25", "--k3": "5", "--k4": "1", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Printing and copies"}</b>
                                      <small>{"BCP"}</small>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Charge code"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"4205"}</b>
                                      <span>{"Business centre"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Cost centre" data-w2="">{"Front office"}</td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--c">{"Credit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-026" aria-label="Edit BCP Printing and copies">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "23", "--k1": "4", "--k2": "28", "--k3": "5", "--k4": "1", "--k5": "1"}}>
                                  <td className="dt__td" data-label="Item" data-w="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Damage / loss recovery"}</b>
                                      <small>{"DMG"}</small>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Charge code"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"4299"}</b>
                                      <span>{"Recoveries"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Cost centre" data-w2="">{"Front office"}</td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--c">{"Credit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-027" aria-label="Edit DMG Damage / loss recovery">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "49", "--k1": "4", "--k2": "21", "--k3": "5", "--k4": "1", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Miscellaneous"}</b>
                                      <small>{"MISC"}</small>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Charge code"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"4201"}</b>
                                      <span>{"Other revenue"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Cost centre" data-w2="">{"Front office"}</td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--c">{"Credit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-028" aria-label="Edit MISC Miscellaneous">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "45", "--k1": "4", "--k2": "21", "--k3": "5", "--k4": "1", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Lost key card fee"}</b>
                                      <small>{"LKY"}</small>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Charge code"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"4201"}</b>
                                      <span>{"Other revenue"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Cost centre" data-w2="">{"Front office"}</td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--c">{"Credit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-029" aria-label="Edit LKY Lost key card fee">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "34", "--k1": "4", "--k2": "26", "--k3": "5", "--k4": "1", "--k5": "1"}}>
                                  <td className="dt__td" data-label="Item" data-w="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Foreign exchange commission"}</b>
                                      <small>{"FXC"}</small>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Charge code"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"4206"}</b>
                                      <span>{"FX commission"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Cost centre" data-w2="">{"Front office"}</td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--c">{"Credit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-030" aria-label="Edit FXC Foreign exchange commission">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "43", "--k1": "4", "--k2": "21", "--k3": "2", "--k4": "1", "--k5": "1"}}>
                                  <td className="dt__td" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Left luggage charge"}</b>
                                      <small>{"LUGG"}</small>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Charge code"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"4201"}</b>
                                      <span>{"Other revenue"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Cost centre" data-w2="">{"Bell desk"}</td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--c">{"Credit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-031" aria-label="Edit LUGG Left luggage charge">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "72", "--k1": "4", "--k2": "21", "--k3": "2", "--k4": "1", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Valet parking"}</b>
                                      <small>{"PRKG"}</small>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Charge code"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"4201"}</b>
                                      <span>{"Other revenue"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Cost centre" data-w2="">{"Bell desk"}</td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--c">{"Credit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-032" aria-label="Edit PRKG Valet parking">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "32", "--k1": "4", "--k2": "21", "--k3": "4", "--k4": "1", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Flowers and gifts"}</b>
                                      <small>{"FLWR"}</small>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Charge code"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"4201"}</b>
                                      <span>{"Other revenue"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Cost centre" data-w2="">{"Concierge"}</td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--c">{"Credit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-033" aria-label="Edit FLWR Flowers and gifts">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "63", "--k1": "4", "--k2": "21", "--k3": "5", "--k4": "1", "--k5": "1"}}>
                                  <td className="dt__td" data-label="Item" data-w="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Shipping of lost items"}</b>
                                      <small>{"SHIP"}</small>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Charge code"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"4201"}</b>
                                      <span>{"Other revenue"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Cost centre" data-w2="">{"Front office"}</td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--c">{"Credit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-034" aria-label="Edit SHIP Shipping of lost items">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "52", "--k1": "4", "--k2": "12", "--k3": "5", "--k4": "1", "--k5": "1"}}>
                                  <td className="dt__td" data-label="Item" data-w="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Paid-out (cash paid for guest)"}</b>
                                      <small>{"PO"}</small>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Charge code"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"2105"}</b>
                                      <span>{"Guest paid-outs"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Cost centre" data-w2="">{"Front office"}</td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--c">{"Credit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-035" aria-label="Edit PO Paid-out (cash paid for guest)">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "40", "--k1": "4", "--k2": "10", "--k3": "5", "--k4": "1", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Incidental deposit"}</b>
                                      <small>{"DEP"}</small>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Charge code"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"2101"}</b>
                                      <span>{"Guest deposits"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Cost centre" data-w2="">{"Front office"}</td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--c">{"Credit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-036" aria-label="Edit DEP Incidental deposit">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "2", "--k1": "4", "--k2": "11", "--k3": "5", "--k4": "1", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Advance deposit"}</b>
                                      <small>{"ADV"}</small>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Charge code"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"2102"}</b>
                                      <span>{"Advance deposits"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Cost centre" data-w2="">{"Front office"}</td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--c">{"Credit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-037" aria-label="Edit ADV Advance deposit">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "15", "--k1": "10", "--k2": "13", "--k3": "11", "--k4": "1", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"CGST 2.5%"}</b>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Tax"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"2201"}</b>
                                      <span>{"CGST payable"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-e="">
                                    <span className="mp-none">{"–"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--c">{"Credit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-038" aria-label="Edit CGST 2.5%">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "61", "--k1": "10", "--k2": "14", "--k3": "11", "--k4": "1", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"SGST 2.5%"}</b>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Tax"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"2202"}</b>
                                      <span>{"SGST payable"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-e="">
                                    <span className="mp-none">{"–"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--c">{"Credit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-039" aria-label="Edit SGST 2.5%">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "16", "--k1": "10", "--k2": "13", "--k3": "11", "--k4": "1", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-t="">
                                    <span className="mp-item">
                                      <b>{"CGST 9%"}</b>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Tax"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"2201"}</b>
                                      <span>{"CGST payable"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-e="">
                                    <span className="mp-none">{"–"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--c">{"Credit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-040" aria-label="Edit CGST 9%">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "62", "--k1": "10", "--k2": "14", "--k3": "11", "--k4": "1", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-t="">
                                    <span className="mp-item">
                                      <b>{"SGST 9%"}</b>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Tax"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"2202"}</b>
                                      <span>{"SGST payable"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-e="">
                                    <span className="mp-none">{"–"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--c">{"Credit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-041" aria-label="Edit SGST 9%">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "38", "--k1": "10", "--k2": "15", "--k3": "11", "--k4": "1", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-t="">
                                    <span className="mp-item">
                                      <b>{"IGST 5%"}</b>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Tax"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"2203"}</b>
                                      <span>{"IGST payable"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-e="">
                                    <span className="mp-none">{"–"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--c">{"Credit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-042" aria-label="Edit IGST 5%">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "37", "--k1": "10", "--k2": "15", "--k3": "11", "--k4": "1", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"IGST 18%"}</b>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Tax"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"2203"}</b>
                                      <span>{"IGST payable"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-e="">
                                    <span className="mp-none">{"–"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--c">{"Credit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-043" aria-label="Edit IGST 18%">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "13", "--k1": "8", "--k2": "1", "--k3": "11", "--k4": "2", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Cash INR"}</b>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Payment mode"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Finance account">
                                    <span className="mp-acc">
                                      <b>{"1101"}</b>
                                      <span>{"Cash in hand – front desk"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-e="">
                                    <span className="mp-none">{"–"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--d">{"Debit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-044" aria-label="Edit Cash INR">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "22", "--k1": "8", "--k2": "2", "--k3": "11", "--k4": "2", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Credit card"}</b>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Payment mode"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Finance account">
                                    <span className="mp-acc">
                                      <b>{"1102"}</b>
                                      <span>{"Card receipts – acquirer clearing"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-e="">
                                    <span className="mp-none">{"–"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--d">{"Debit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-045" aria-label="Edit Credit card">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "25", "--k1": "8", "--k2": "2", "--k3": "11", "--k4": "2", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Debit card"}</b>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Payment mode"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Finance account">
                                    <span className="mp-acc">
                                      <b>{"1102"}</b>
                                      <span>{"Card receipts – acquirer clearing"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-e="">
                                    <span className="mp-none">{"–"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--d">{"Debit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-046" aria-label="Edit Debit card">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "71", "--k1": "8", "--k2": "3", "--k3": "11", "--k4": "2", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-t="">
                                    <span className="mp-item">
                                      <b>{"UPI"}</b>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Payment mode"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"1103"}</b>
                                      <span>{"UPI clearing"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-e="">
                                    <span className="mp-none">{"–"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--d">{"Debit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-047" aria-label="Edit UPI">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "7", "--k1": "8", "--k2": "4", "--k3": "11", "--k4": "2", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Bank transfer / NEFT"}</b>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Payment mode"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Finance account">
                                    <span className="mp-acc">
                                      <b>{"1104"}</b>
                                      <span>{"Bank – collection account"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-e="">
                                    <span className="mp-none">{"–"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--d">{"Debit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-048" aria-label="Edit Bank transfer / NEFT">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "53", "--k1": "8", "--k2": "5", "--k3": "11", "--k4": "2", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Payment link"}</b>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Payment mode"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Finance account">
                                    <span className="mp-acc">
                                      <b>{"1105"}</b>
                                      <span>{"Payment gateway clearing"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-e="">
                                    <span className="mp-none">{"–"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--d">{"Debit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-049" aria-label="Edit Payment link">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "19", "--k1": "8", "--k2": "8", "--k3": "11", "--k4": "2", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Company (city ledger)"}</b>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Payment mode"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Finance account">
                                    <span className="mp-acc">
                                      <b>{"1301"}</b>
                                      <span>{"City ledger – company receivables"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-e="">
                                    <span className="mp-none">{"–"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--d">{"Debit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-050" aria-label="Edit Company (city ledger)">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "51", "--k1": "8", "--k2": "6", "--k3": "11", "--k4": "2", "--k5": "1"}}>
                                  <td className="dt__td" data-label="Item" data-w="" data-t="">
                                    <span className="mp-item">
                                      <b>{"OTA prepaid / virtual card"}</b>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Payment mode"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"1106"}</b>
                                      <span>{"OTA receivables"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-e="">
                                    <span className="mp-none">{"–"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--d">{"Debit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-051" aria-label="Edit OTA prepaid / virtual card">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "33", "--k1": "8", "--k2": "7", "--k3": "11", "--k4": "2", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Foreign currency cash"}</b>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Payment mode"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Finance account">
                                    <span className="mp-acc">
                                      <b>{"1107"}</b>
                                      <span>{"Foreign currency cash"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-e="">
                                    <span className="mp-none">{"–"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--d">{"Debit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-052" aria-label="Edit Foreign currency cash">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "3", "--k1": "8", "--k2": "11", "--k3": "11", "--k4": "2", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Advance transfer"}</b>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Payment mode"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"2102"}</b>
                                      <span>{"Advance deposits"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-e="">
                                    <span className="mp-none">{"–"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--d">{"Debit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-053" aria-label="Edit Advance transfer">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "56", "--k1": "2", "--k2": "17", "--k3": "11", "--k4": "2", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Room allowance"}</b>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Allowance"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Finance account">
                                    <span className="mp-acc">
                                      <b>{"4090"}</b>
                                      <span>{"Allowances & discounts"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-e="">
                                    <span className="mp-none">{"–"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--d">{"Debit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-054" aria-label="Edit Room allowance">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "30", "--k1": "2", "--k2": "17", "--k3": "11", "--k4": "2", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"F&B allowance"}</b>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Allowance"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Finance account">
                                    <span className="mp-acc">
                                      <b>{"4090"}</b>
                                      <span>{"Allowances & discounts"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-e="">
                                    <span className="mp-none">{"–"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--d">{"Debit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-055" aria-label="Edit F&B allowance">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "60", "--k1": "2", "--k2": "17", "--k3": "11", "--k4": "2", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Service recovery"}</b>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Allowance"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Finance account">
                                    <span className="mp-acc">
                                      <b>{"4090"}</b>
                                      <span>{"Allowances & discounts"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-e="">
                                    <span className="mp-none">{"–"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--d">{"Debit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-056" aria-label="Edit Service recovery">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "54", "--k1": "2", "--k2": "17", "--k3": "11", "--k4": "2", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Posting error"}</b>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Allowance"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Finance account">
                                    <span className="mp-acc">
                                      <b>{"4090"}</b>
                                      <span>{"Allowances & discounts"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-e="">
                                    <span className="mp-none">{"–"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--d">{"Debit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-057" aria-label="Edit Posting error">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "36", "--k1": "2", "--k2": "17", "--k3": "11", "--k4": "2", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Goodwill"}</b>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Allowance"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Finance account">
                                    <span className="mp-acc">
                                      <b>{"4090"}</b>
                                      <span>{"Allowances & discounts"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-e="">
                                    <span className="mp-none">{"–"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--d">{"Debit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-058" aria-label="Edit Goodwill">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "65", "--k1": "6", "--k2": "12", "--k3": "11", "--k4": "2", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Taxi fare"}</b>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Paid-out"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"2105"}</b>
                                      <span>{"Guest paid-outs"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-e="">
                                    <span className="mp-none">{"–"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--d">{"Debit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-059" aria-label="Edit Taxi fare">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "21", "--k1": "6", "--k2": "12", "--k3": "11", "--k4": "2", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-t="">
                                    <span className="mp-item">
                                      <b>{"Courier"}</b>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Paid-out"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"2105"}</b>
                                      <span>{"Guest paid-outs"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-e="">
                                    <span className="mp-none">{"–"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--d">{"Debit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-060" aria-label="Edit Courier">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "47", "--k1": "6", "--k2": "12", "--k3": "11", "--k4": "2", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Medicine"}</b>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Paid-out"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"2105"}</b>
                                      <span>{"Guest paid-outs"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-e="">
                                    <span className="mp-none">{"–"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--d">{"Debit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-061" aria-label="Edit Medicine">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "31", "--k1": "6", "--k2": "12", "--k3": "11", "--k4": "2", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-t="">
                                    <span className="mp-item">
                                      <b>{"Florist"}</b>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Paid-out"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"2105"}</b>
                                      <span>{"Guest paid-outs"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-e="">
                                    <span className="mp-none">{"–"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--d">{"Debit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-062" aria-label="Edit Florist">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "68", "--k1": "6", "--k2": "12", "--k3": "11", "--k4": "2", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-t="">
                                    <span className="mp-item">
                                      <b>{"Tips"}</b>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Paid-out"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"2105"}</b>
                                      <span>{"Guest paid-outs"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-e="">
                                    <span className="mp-none">{"–"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--d">{"Debit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-063" aria-label="Edit Tips">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "67", "--k1": "6", "--k2": "12", "--k3": "11", "--k4": "2", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-t="">
                                    <span className="mp-item">
                                      <b>{"Tickets"}</b>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Paid-out"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"2105"}</b>
                                      <span>{"Guest paid-outs"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-e="">
                                    <span className="mp-none">{"–"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--d">{"Debit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-064" aria-label="Edit Tickets">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "1", "--k1": "1", "--k2": "11", "--k3": "11", "--k4": "1", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Advance deposit"}</b>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Advance deposit"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"2102"}</b>
                                      <span>{"Advance deposits"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-e="">
                                    <span className="mp-none">{"–"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--c">{"Credit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-065" aria-label="Edit Advance deposit">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "17", "--k1": "5", "--k2": "8", "--k3": "11", "--k4": "2", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"City ledger"}</b>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"City ledger"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Finance account">
                                    <span className="mp-acc">
                                      <b>{"1301"}</b>
                                      <span>{"City ledger – company receivables"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-e="">
                                    <span className="mp-none">{"–"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--d">{"Debit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-066" aria-label="Edit City ledger">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "58", "--k1": "9", "--k2": "27", "--k3": "11", "--k4": "1", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Round-off"}</b>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Round-off"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"4295"}</b>
                                      <span>{"Round-off"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-e="">
                                    <span className="mp-none">{"–"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--c">{"Credit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-067" aria-label="Edit Round-off">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "14", "--k1": "3", "--k2": "29", "--k3": "11", "--k4": "2", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Cash over / short"}</b>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Cash over / short"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Finance account" data-w2="">
                                    <span className="mp-acc">
                                      <b>{"5299"}</b>
                                      <span>{"Cash over / short"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-e="">
                                    <span className="mp-none">{"–"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--d">{"Debit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-068" aria-label="Edit Cash over / short">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "28", "--k1": "7", "--k2": "9", "--k3": "11", "--k4": "2", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-t="">
                                    <span className="mp-item">
                                      <b>{"Event"}</b>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Paymaster"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Finance account">
                                    <span className="mp-acc">
                                      <b>{"1302"}</b>
                                      <span>{"Paymaster – house accounts"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-e="">
                                    <span className="mp-none">{"–"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--d">{"Debit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-069" aria-label="Edit Event">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "64", "--k1": "7", "--k2": "9", "--k3": "11", "--k4": "2", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Staff meals"}</b>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Paymaster"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Finance account">
                                    <span className="mp-acc">
                                      <b>{"1302"}</b>
                                      <span>{"Paymaster – house accounts"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-e="">
                                    <span className="mp-none">{"–"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--d">{"Debit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-070" aria-label="Edit Staff meals">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "73", "--k1": "7", "--k2": "9", "--k3": "11", "--k4": "2", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Walk-in outlet guest"}</b>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Paymaster"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Finance account">
                                    <span className="mp-acc">
                                      <b>{"1302"}</b>
                                      <span>{"Paymaster – house accounts"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-e="">
                                    <span className="mp-none">{"–"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--d">{"Debit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-071" aria-label="Edit Walk-in outlet guest">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "46", "--k1": "7", "--k2": "9", "--k3": "11", "--k4": "2", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Lost postings"}</b>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Paymaster"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Finance account">
                                    <span className="mp-acc">
                                      <b>{"1302"}</b>
                                      <span>{"Paymaster – house accounts"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-e="">
                                    <span className="mp-none">{"–"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--d">{"Debit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-072" aria-label="Edit Lost postings">{"Edit"}</a>
                                  </td>
                                </tr>
                                <tr className="map-row" style={{"--k0": "20", "--k1": "7", "--k2": "9", "--k3": "11", "--k4": "2", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                                    <span className="mp-item">
                                      <b>{"Complimentary"}</b>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-label="Item type" data-w2="">
                                    <span className="mp-type">{"Paymaster"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Finance account">
                                    <span className="mp-acc">
                                      <b>{"1302"}</b>
                                      <span>{"Paymaster – house accounts"}</span>
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-e="">
                                    <span className="mp-none">{"–"}</span>
                                  </td>
                                  <td className="dt__td nw" data-label="Debit / credit" data-w2="">
                                    <span className="mp-dc mp-dc--d">{"Debit"}</span>
                                  </td>
                                  <td className="dt__td" data-label="Mapping" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Mapped"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-a="">
                                    <a className="btn" href="#FDS-P25-map-073" aria-label="Edit Complimentary">{"Edit"}</a>
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
                              <input className="pg-in" type="radio" name="pg1r10" id="pg1r10p8" />
                              <label className="pg-n" htmlFor="pg1r10p8" aria-label="Page 8">{"8"}</label>
                              <span className="pg-info">
                                <span>
                                  {"Showing "}
                                  <b>{"1–10"}</b>
                                  {" of 74"}
                                </span>
                                <span>
                                  {"Showing "}
                                  <b>{"11–20"}</b>
                                  {" of 74"}
                                </span>
                                <span>
                                  {"Showing "}
                                  <b>{"21–30"}</b>
                                  {" of 74"}
                                </span>
                                <span>
                                  {"Showing "}
                                  <b>{"31–40"}</b>
                                  {" of 74"}
                                </span>
                                <span>
                                  {"Showing "}
                                  <b>{"41–50"}</b>
                                  {" of 74"}
                                </span>
                                <span>
                                  {"Showing "}
                                  <b>{"51–60"}</b>
                                  {" of 74"}
                                </span>
                                <span>
                                  {"Showing "}
                                  <b>{"61–70"}</b>
                                  {" of 74"}
                                </span>
                                <span>
                                  {"Showing "}
                                  <b>{"71–74"}</b>
                                  {" of 74"}
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
                                <label className="pg-arr" htmlFor="pg1r10p7" title="Previous page">
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
                                <label className="pg-arr" htmlFor="pg1r10p8" title="Next page">
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
                                  {" of 74"}
                                </span>
                                <span>
                                  {"Showing "}
                                  <b>{"16–30"}</b>
                                  {" of 74"}
                                </span>
                                <span>
                                  {"Showing "}
                                  <b>{"31–45"}</b>
                                  {" of 74"}
                                </span>
                                <span>
                                  {"Showing "}
                                  <b>{"46–60"}</b>
                                  {" of 74"}
                                </span>
                                <span>
                                  {"Showing "}
                                  <b>{"61–74"}</b>
                                  {" of 74"}
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
                                  {" of 74"}
                                </span>
                                <span>
                                  {"Showing "}
                                  <b>{"21–40"}</b>
                                  {" of 74"}
                                </span>
                                <span>
                                  {"Showing "}
                                  <b>{"41–60"}</b>
                                  {" of 74"}
                                </span>
                                <span>
                                  {"Showing "}
                                  <b>{"61–74"}</b>
                                  {" of 74"}
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
                                  {" of 74"}
                                </span>
                                <span>
                                  {"Showing "}
                                  <b>{"26–50"}</b>
                                  {" of 74"}
                                </span>
                                <span>
                                  {"Showing "}
                                  <b>{"51–74"}</b>
                                  {" of 74"}
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
                                  {" of 74"}
                                </span>
                                <span>
                                  {"Showing "}
                                  <b>{"31–60"}</b>
                                  {" of 74"}
                                </span>
                                <span>
                                  {"Showing "}
                                  <b>{"61–74"}</b>
                                  {" of 74"}
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
                      </div>
                      <ul className="mp-unm">
                        <li>
                          <span className="mp-item">
                            <b>{"Ayurveda session"}</b>
                            <small>{"SPA-01"}</small>
                          </span>
                          <span className="mp-type">{"Charge code"}</span>
                          <span className="mp-none">{"No finance account yet"}</span>
                          <a className="btn btn--primary" href="#FDS-P25-map-018" aria-label="Map SPA-01 Ayurveda session">{"Map now"}</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--full" id="FDS-P25-map-000" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-000-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-000-t">{"Account mapping: RM Room charge"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f41">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f41" name="type" required={true} defaultValue={"Charge code"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f42">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f42" type="text" name="item" required={true} defaultValue={"RM Room charge"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f43">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f43" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"4001"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f44">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f44" type="text" name="aname" required={true} defaultValue={"Room revenue"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f45">{"Cost centre / department"}</label>
                        <input className="field__input" id="f45" type="text" name="cc" defaultValue={"Front office"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f46">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f46" name="drcr" defaultValue={"Credit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-001" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-001-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-001-t">{"Account mapping: EB Extra bed"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f47">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f47" name="type" required={true} defaultValue={"Charge code"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f48">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f48" type="text" name="item" required={true} defaultValue={"EB Extra bed"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f49">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f49" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"4001"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f50">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f50" type="text" name="aname" required={true} defaultValue={"Room revenue"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f51">{"Cost centre / department"}</label>
                        <input className="field__input" id="f51" type="text" name="cc" defaultValue={"Housekeeping"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f52">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f52" name="drcr" defaultValue={"Credit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-002" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-002-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-002-t">{"Account mapping: ECI Early check-in fee"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f53">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f53" name="type" required={true} defaultValue={"Charge code"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f54">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f54" type="text" name="item" required={true} defaultValue={"ECI Early check-in fee"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f55">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f55" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"4001"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f56">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f56" type="text" name="aname" required={true} defaultValue={"Room revenue"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f57">{"Cost centre / department"}</label>
                        <input className="field__input" id="f57" type="text" name="cc" defaultValue={"Front office"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f58">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f58" name="drcr" defaultValue={"Credit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-003" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-003-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-003-t">{"Account mapping: LCO Late check-out fee"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f59">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f59" name="type" required={true} defaultValue={"Charge code"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f60">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f60" type="text" name="item" required={true} defaultValue={"LCO Late check-out fee"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f61">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f61" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"4001"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f62">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f62" type="text" name="aname" required={true} defaultValue={"Room revenue"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f63">{"Cost centre / department"}</label>
                        <input className="field__input" id="f63" type="text" name="cc" defaultValue={"Front office"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f64">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f64" name="drcr" defaultValue={"Credit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-004" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-004-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-004-t">{"Account mapping: NSH No-show charge"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f65">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f65" name="type" required={true} defaultValue={"Charge code"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f66">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f66" type="text" name="item" required={true} defaultValue={"NSH No-show charge"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f67">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f67" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"4001"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f68">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f68" type="text" name="aname" required={true} defaultValue={"Room revenue"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f69">{"Cost centre / department"}</label>
                        <input className="field__input" id="f69" type="text" name="cc" defaultValue={"Front office"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f70">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f70" name="drcr" defaultValue={"Credit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-005" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-005-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-005-t">{"Account mapping: CXL Cancellation charge"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f71">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f71" name="type" required={true} defaultValue={"Charge code"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f72">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f72" type="text" name="item" required={true} defaultValue={"CXL Cancellation charge"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f73">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f73" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"4001"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f74">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f74" type="text" name="aname" required={true} defaultValue={"Room revenue"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f75">{"Cost centre / department"}</label>
                        <input className="field__input" id="f75" type="text" name="cc" defaultValue={"Front office"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f76">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f76" name="drcr" defaultValue={"Credit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-006" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-006-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-006-t">{"Account mapping: DUSE Day-use charge"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f77">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f77" name="type" required={true} defaultValue={"Charge code"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f78">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f78" type="text" name="item" required={true} defaultValue={"DUSE Day-use charge"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f79">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f79" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"4001"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f80">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f80" type="text" name="aname" required={true} defaultValue={"Room revenue"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f81">{"Cost centre / department"}</label>
                        <input className="field__input" id="f81" type="text" name="cc" defaultValue={"Front office"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f82">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f82" name="drcr" defaultValue={"Credit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-007" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-007-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-007-t">{"Account mapping: BF Breakfast"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f83">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f83" name="type" required={true} defaultValue={"Charge code"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f84">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f84" type="text" name="item" required={true} defaultValue={"BF Breakfast"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f85">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f85" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"4101"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f86">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f86" type="text" name="aname" required={true} defaultValue={"F&B revenue"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f87">{"Cost centre / department"}</label>
                        <input className="field__input" id="f87" type="text" name="cc" defaultValue={"Travancore Restaurant"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f88">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f88" name="drcr" defaultValue={"Credit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-008" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-008-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-008-t">{"Account mapping: TRV Travancore Restaurant"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f89">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f89" name="type" required={true} defaultValue={"Charge code"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f90">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f90" type="text" name="item" required={true} defaultValue={"TRV Travancore Restaurant"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f91">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f91" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"4101"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f92">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f92" type="text" name="aname" required={true} defaultValue={"F&B revenue"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f93">{"Cost centre / department"}</label>
                        <input className="field__input" id="f93" type="text" name="cc" defaultValue={"Travancore Restaurant"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f94">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f94" name="drcr" defaultValue={"Credit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-009" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-009-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-009-t">{"Account mapping: SFG Seafood Grill"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f95">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f95" name="type" required={true} defaultValue={"Charge code"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f96">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f96" type="text" name="item" required={true} defaultValue={"SFG Seafood Grill"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f97">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f97" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"4101"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f98">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f98" type="text" name="aname" required={true} defaultValue={"F&B revenue"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f99">{"Cost centre / department"}</label>
                        <input className="field__input" id="f99" type="text" name="cc" defaultValue={"Seafood Grill"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f100">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f100" name="drcr" defaultValue={"Credit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-010" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-010-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-010-t">{"Account mapping: BAR Cochin Trade Bar"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f101">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f101" name="type" required={true} defaultValue={"Charge code"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f102">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f102" type="text" name="item" required={true} defaultValue={"BAR Cochin Trade Bar"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f103">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f103" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"4102"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f104">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f104" type="text" name="aname" required={true} defaultValue={"Bar revenue"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f105">{"Cost centre / department"}</label>
                        <input className="field__input" id="f105" type="text" name="cc" defaultValue={"Cochin Trade Bar"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f106">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f106" name="drcr" defaultValue={"Credit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-011" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-011-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-011-t">{"Account mapping: IRD In-room dining"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f107">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f107" name="type" required={true} defaultValue={"Charge code"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f108">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f108" type="text" name="item" required={true} defaultValue={"IRD In-room dining"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f109">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f109" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"4101"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f110">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f110" type="text" name="aname" required={true} defaultValue={"F&B revenue"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f111">{"Cost centre / department"}</label>
                        <input className="field__input" id="f111" type="text" name="cc" defaultValue={"In-room Dining"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f112">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f112" name="drcr" defaultValue={"Credit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-012" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-012-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-012-t">{"Account mapping: CAKE Birthday / anniversary cake"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f113">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f113" name="type" required={true} defaultValue={"Charge code"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f114">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f114" type="text" name="item" required={true} defaultValue={"CAKE Birthday / anniversary cake"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f115">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f115" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"4101"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f116">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f116" type="text" name="aname" required={true} defaultValue={"F&B revenue"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f117">{"Cost centre / department"}</label>
                        <input className="field__input" id="f117" type="text" name="cc" defaultValue={"Travancore Restaurant"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f118">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f118" name="drcr" defaultValue={"Credit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-013" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-013-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-013-t">{"Account mapping: GALA Gala dinner"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f119">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f119" name="type" required={true} defaultValue={"Charge code"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f120">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f120" type="text" name="item" required={true} defaultValue={"GALA Gala dinner"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f121">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f121" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"4101"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f122">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f122" type="text" name="aname" required={true} defaultValue={"F&B revenue"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f123">{"Cost centre / department"}</label>
                        <input className="field__input" id="f123" type="text" name="cc" defaultValue={"Travancore Restaurant"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f124">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f124" name="drcr" defaultValue={"Credit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-014" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-014-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-014-t">{"Account mapping: BNQ Banquet charges"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f125">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f125" name="type" required={true} defaultValue={"Charge code"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f126">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f126" type="text" name="item" required={true} defaultValue={"BNQ Banquet charges"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f127">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f127" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"4103"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f128">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f128" type="text" name="aname" required={true} defaultValue={"Banquet revenue"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f129">{"Cost centre / department"}</label>
                        <input className="field__input" id="f129" type="text" name="cc" defaultValue={"Periyar / Meenachil Hall"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f130">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f130" name="drcr" defaultValue={"Credit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-015" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-015-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-015-t">{"Account mapping: MB Minibar"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f131">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f131" name="type" required={true} defaultValue={"Charge code"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f132">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f132" type="text" name="item" required={true} defaultValue={"MB Minibar"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f133">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f133" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"4101"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f134">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f134" type="text" name="aname" required={true} defaultValue={"F&B revenue"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f135">{"Cost centre / department"}</label>
                        <input className="field__input" id="f135" type="text" name="cc" defaultValue={"Housekeeping"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f136">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f136" name="drcr" defaultValue={"Credit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-016" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-016-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-016-t">{"Account mapping: LND Laundry"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f137">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f137" name="type" required={true} defaultValue={"Charge code"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f138">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f138" type="text" name="item" required={true} defaultValue={"LND Laundry"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f139">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f139" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"4201"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f140">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f140" type="text" name="aname" required={true} defaultValue={"Other revenue"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f141">{"Cost centre / department"}</label>
                        <input className="field__input" id="f141" type="text" name="cc" defaultValue={"Housekeeping"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f142">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f142" name="drcr" defaultValue={"Credit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-017" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-017-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-017-t">{"Account mapping: DRY Dry cleaning"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f143">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f143" name="type" required={true} defaultValue={"Charge code"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f144">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f144" type="text" name="item" required={true} defaultValue={"DRY Dry cleaning"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f145">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f145" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"4201"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f146">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f146" type="text" name="aname" required={true} defaultValue={"Other revenue"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f147">{"Cost centre / department"}</label>
                        <input className="field__input" id="f147" type="text" name="cc" defaultValue={"Housekeeping"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f148">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f148" name="drcr" defaultValue={"Credit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-018" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-018-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-018-t">{"Account mapping: SPA-01 Ayurveda session"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f149">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f149" name="type" required={true} defaultValue={"Charge code"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f150">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f150" type="text" name="item" required={true} defaultValue={"SPA-01 Ayurveda session"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f151">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f151" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={""} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f152">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f152" type="text" name="aname" required={true} defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f153">{"Cost centre / department"}</label>
                        <input className="field__input" id="f153" type="text" name="cc" defaultValue={"Ayurvedic Centre"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f154">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f154" name="drcr" defaultValue={"Credit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-019" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-019-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-019-t">{"Account mapping: SPA-02 Ayurveda massage"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f155">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f155" name="type" required={true} defaultValue={"Charge code"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f156">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f156" type="text" name="item" required={true} defaultValue={"SPA-02 Ayurveda massage"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f157">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f157" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"4203"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f158">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f158" type="text" name="aname" required={true} defaultValue={"Spa revenue"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f159">{"Cost centre / department"}</label>
                        <input className="field__input" id="f159" type="text" name="cc" defaultValue={"Ayurvedic Centre"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f160">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f160" name="drcr" defaultValue={"Credit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-020" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-020-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-020-t">{"Account mapping: SPA-03 Yoga session"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f161">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f161" name="type" required={true} defaultValue={"Charge code"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f162">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f162" type="text" name="item" required={true} defaultValue={"SPA-03 Yoga session"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f163">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f163" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"4203"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f164">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f164" type="text" name="aname" required={true} defaultValue={"Spa revenue"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f165">{"Cost centre / department"}</label>
                        <input className="field__input" id="f165" type="text" name="cc" defaultValue={"Ayurvedic Centre"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f166">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f166" name="drcr" defaultValue={"Credit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-021" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-021-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-021-t">{"Account mapping: TRN Airport transfer (one way)"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f167">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f167" name="type" required={true} defaultValue={"Charge code"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f168">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f168" type="text" name="item" required={true} defaultValue={"TRN Airport transfer (one way)"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f169">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f169" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"4202"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f170">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f170" type="text" name="aname" required={true} defaultValue={"Transport revenue"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f171">{"Cost centre / department"}</label>
                        <input className="field__input" id="f171" type="text" name="cc" defaultValue={"Concierge"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f172">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f172" name="drcr" defaultValue={"Credit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-022" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-022-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-022-t">{"Account mapping: TRNL Local taxi / sightseeing"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f173">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f173" name="type" required={true} defaultValue={"Charge code"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f174">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f174" type="text" name="item" required={true} defaultValue={"TRNL Local taxi / sightseeing"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f175">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f175" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"4202"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f176">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f176" type="text" name="aname" required={true} defaultValue={"Transport revenue"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f177">{"Cost centre / department"}</label>
                        <input className="field__input" id="f177" type="text" name="cc" defaultValue={"Concierge"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f178">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f178" name="drcr" defaultValue={"Credit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-023" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-023-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-023-t">{"Account mapping: TOUR Tours and activities"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f179">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f179" name="type" required={true} defaultValue={"Charge code"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f180">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f180" type="text" name="item" required={true} defaultValue={"TOUR Tours and activities"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f181">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f181" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"4202"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f182">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f182" type="text" name="aname" required={true} defaultValue={"Transport revenue"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f183">{"Cost centre / department"}</label>
                        <input className="field__input" id="f183" type="text" name="cc" defaultValue={"Concierge"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f184">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f184" name="drcr" defaultValue={"Credit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-024" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-024-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-024-t">{"Account mapping: TEL Telephone"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f185">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f185" name="type" required={true} defaultValue={"Charge code"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f186">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f186" type="text" name="item" required={true} defaultValue={"TEL Telephone"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f187">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f187" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"4204"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f188">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f188" type="text" name="aname" required={true} defaultValue={"Telephone revenue"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f189">{"Cost centre / department"}</label>
                        <input className="field__input" id="f189" type="text" name="cc" defaultValue={"Front office"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f190">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f190" name="drcr" defaultValue={"Credit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-025" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-025-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-025-t">{"Account mapping: BC Business centre"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f191">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f191" name="type" required={true} defaultValue={"Charge code"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f192">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f192" type="text" name="item" required={true} defaultValue={"BC Business centre"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f193">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f193" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"4205"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f194">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f194" type="text" name="aname" required={true} defaultValue={"Business centre"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f195">{"Cost centre / department"}</label>
                        <input className="field__input" id="f195" type="text" name="cc" defaultValue={"Front office"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f196">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f196" name="drcr" defaultValue={"Credit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-026" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-026-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-026-t">{"Account mapping: BCP Printing and copies"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f197">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f197" name="type" required={true} defaultValue={"Charge code"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f198">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f198" type="text" name="item" required={true} defaultValue={"BCP Printing and copies"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f199">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f199" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"4205"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f200">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f200" type="text" name="aname" required={true} defaultValue={"Business centre"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f201">{"Cost centre / department"}</label>
                        <input className="field__input" id="f201" type="text" name="cc" defaultValue={"Front office"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f202">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f202" name="drcr" defaultValue={"Credit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-027" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-027-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-027-t">{"Account mapping: DMG Damage / loss recovery"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f203">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f203" name="type" required={true} defaultValue={"Charge code"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f204">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f204" type="text" name="item" required={true} defaultValue={"DMG Damage / loss recovery"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f205">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f205" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"4299"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f206">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f206" type="text" name="aname" required={true} defaultValue={"Recoveries"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f207">{"Cost centre / department"}</label>
                        <input className="field__input" id="f207" type="text" name="cc" defaultValue={"Front office"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f208">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f208" name="drcr" defaultValue={"Credit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-028" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-028-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-028-t">{"Account mapping: MISC Miscellaneous"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f209">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f209" name="type" required={true} defaultValue={"Charge code"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f210">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f210" type="text" name="item" required={true} defaultValue={"MISC Miscellaneous"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f211">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f211" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"4201"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f212">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f212" type="text" name="aname" required={true} defaultValue={"Other revenue"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f213">{"Cost centre / department"}</label>
                        <input className="field__input" id="f213" type="text" name="cc" defaultValue={"Front office"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f214">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f214" name="drcr" defaultValue={"Credit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-029" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-029-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-029-t">{"Account mapping: LKY Lost key card fee"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f215">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f215" name="type" required={true} defaultValue={"Charge code"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f216">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f216" type="text" name="item" required={true} defaultValue={"LKY Lost key card fee"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f217">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f217" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"4201"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f218">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f218" type="text" name="aname" required={true} defaultValue={"Other revenue"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f219">{"Cost centre / department"}</label>
                        <input className="field__input" id="f219" type="text" name="cc" defaultValue={"Front office"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f220">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f220" name="drcr" defaultValue={"Credit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-030" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-030-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-030-t">{"Account mapping: FXC Foreign exchange commission"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f221">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f221" name="type" required={true} defaultValue={"Charge code"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f222">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f222" type="text" name="item" required={true} defaultValue={"FXC Foreign exchange commission"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f223">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f223" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"4206"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f224">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f224" type="text" name="aname" required={true} defaultValue={"FX commission"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f225">{"Cost centre / department"}</label>
                        <input className="field__input" id="f225" type="text" name="cc" defaultValue={"Front office"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f226">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f226" name="drcr" defaultValue={"Credit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-031" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-031-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-031-t">{"Account mapping: LUGG Left luggage charge"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f227">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f227" name="type" required={true} defaultValue={"Charge code"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f228">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f228" type="text" name="item" required={true} defaultValue={"LUGG Left luggage charge"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f229">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f229" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"4201"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f230">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f230" type="text" name="aname" required={true} defaultValue={"Other revenue"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f231">{"Cost centre / department"}</label>
                        <input className="field__input" id="f231" type="text" name="cc" defaultValue={"Bell desk"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f232">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f232" name="drcr" defaultValue={"Credit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-032" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-032-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-032-t">{"Account mapping: PRKG Valet parking"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f233">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f233" name="type" required={true} defaultValue={"Charge code"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f234">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f234" type="text" name="item" required={true} defaultValue={"PRKG Valet parking"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f235">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f235" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"4201"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f236">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f236" type="text" name="aname" required={true} defaultValue={"Other revenue"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f237">{"Cost centre / department"}</label>
                        <input className="field__input" id="f237" type="text" name="cc" defaultValue={"Bell desk"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f238">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f238" name="drcr" defaultValue={"Credit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-033" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-033-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-033-t">{"Account mapping: FLWR Flowers and gifts"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f239">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f239" name="type" required={true} defaultValue={"Charge code"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f240">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f240" type="text" name="item" required={true} defaultValue={"FLWR Flowers and gifts"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f241">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f241" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"4201"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f242">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f242" type="text" name="aname" required={true} defaultValue={"Other revenue"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f243">{"Cost centre / department"}</label>
                        <input className="field__input" id="f243" type="text" name="cc" defaultValue={"Concierge"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f244">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f244" name="drcr" defaultValue={"Credit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-034" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-034-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-034-t">{"Account mapping: SHIP Shipping of lost items"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f245">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f245" name="type" required={true} defaultValue={"Charge code"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f246">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f246" type="text" name="item" required={true} defaultValue={"SHIP Shipping of lost items"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f247">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f247" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"4201"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f248">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f248" type="text" name="aname" required={true} defaultValue={"Other revenue"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f249">{"Cost centre / department"}</label>
                        <input className="field__input" id="f249" type="text" name="cc" defaultValue={"Front office"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f250">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f250" name="drcr" defaultValue={"Credit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-035" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-035-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-035-t">{"Account mapping: PO Paid-out (cash paid for guest)"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f251">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f251" name="type" required={true} defaultValue={"Charge code"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f252">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f252" type="text" name="item" required={true} defaultValue={"PO Paid-out (cash paid for guest)"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f253">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f253" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"2105"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f254">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f254" type="text" name="aname" required={true} defaultValue={"Guest paid-outs"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f255">{"Cost centre / department"}</label>
                        <input className="field__input" id="f255" type="text" name="cc" defaultValue={"Front office"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f256">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f256" name="drcr" defaultValue={"Credit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-036" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-036-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-036-t">{"Account mapping: DEP Incidental deposit"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f257">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f257" name="type" required={true} defaultValue={"Charge code"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f258">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f258" type="text" name="item" required={true} defaultValue={"DEP Incidental deposit"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f259">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f259" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"2101"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f260">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f260" type="text" name="aname" required={true} defaultValue={"Guest deposits"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f261">{"Cost centre / department"}</label>
                        <input className="field__input" id="f261" type="text" name="cc" defaultValue={"Front office"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f262">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f262" name="drcr" defaultValue={"Credit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-037" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-037-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-037-t">{"Account mapping: ADV Advance deposit"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f263">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f263" name="type" required={true} defaultValue={"Charge code"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f264">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f264" type="text" name="item" required={true} defaultValue={"ADV Advance deposit"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f265">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f265" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"2102"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f266">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f266" type="text" name="aname" required={true} defaultValue={"Advance deposits"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f267">{"Cost centre / department"}</label>
                        <input className="field__input" id="f267" type="text" name="cc" defaultValue={"Front office"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f268">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f268" name="drcr" defaultValue={"Credit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-038" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-038-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-038-t">{"Account mapping: CGST 2.5%"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f269">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f269" name="type" required={true} defaultValue={"Tax"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f270">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f270" type="text" name="item" required={true} defaultValue={"CGST 2.5%"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f271">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f271" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"2201"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f272">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f272" type="text" name="aname" required={true} defaultValue={"CGST payable"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f273">{"Cost centre / department"}</label>
                        <input className="field__input" id="f273" type="text" name="cc" defaultValue={""} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f274">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f274" name="drcr" defaultValue={"Credit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-039" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-039-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-039-t">{"Account mapping: SGST 2.5%"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f275">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f275" name="type" required={true} defaultValue={"Tax"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f276">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f276" type="text" name="item" required={true} defaultValue={"SGST 2.5%"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f277">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f277" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"2202"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f278">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f278" type="text" name="aname" required={true} defaultValue={"SGST payable"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f279">{"Cost centre / department"}</label>
                        <input className="field__input" id="f279" type="text" name="cc" defaultValue={""} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f280">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f280" name="drcr" defaultValue={"Credit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-040" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-040-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-040-t">{"Account mapping: CGST 9%"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f281">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f281" name="type" required={true} defaultValue={"Tax"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f282">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f282" type="text" name="item" required={true} defaultValue={"CGST 9%"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f283">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f283" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"2201"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f284">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f284" type="text" name="aname" required={true} defaultValue={"CGST payable"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f285">{"Cost centre / department"}</label>
                        <input className="field__input" id="f285" type="text" name="cc" defaultValue={""} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f286">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f286" name="drcr" defaultValue={"Credit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-041" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-041-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-041-t">{"Account mapping: SGST 9%"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f287">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f287" name="type" required={true} defaultValue={"Tax"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f288">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f288" type="text" name="item" required={true} defaultValue={"SGST 9%"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f289">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f289" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"2202"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f290">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f290" type="text" name="aname" required={true} defaultValue={"SGST payable"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f291">{"Cost centre / department"}</label>
                        <input className="field__input" id="f291" type="text" name="cc" defaultValue={""} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f292">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f292" name="drcr" defaultValue={"Credit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-042" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-042-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-042-t">{"Account mapping: IGST 5%"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f293">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f293" name="type" required={true} defaultValue={"Tax"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f294">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f294" type="text" name="item" required={true} defaultValue={"IGST 5%"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f295">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f295" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"2203"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f296">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f296" type="text" name="aname" required={true} defaultValue={"IGST payable"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f297">{"Cost centre / department"}</label>
                        <input className="field__input" id="f297" type="text" name="cc" defaultValue={""} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f298">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f298" name="drcr" defaultValue={"Credit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-043" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-043-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-043-t">{"Account mapping: IGST 18%"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f299">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f299" name="type" required={true} defaultValue={"Tax"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f300">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f300" type="text" name="item" required={true} defaultValue={"IGST 18%"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f301">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f301" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"2203"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f302">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f302" type="text" name="aname" required={true} defaultValue={"IGST payable"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f303">{"Cost centre / department"}</label>
                        <input className="field__input" id="f303" type="text" name="cc" defaultValue={""} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f304">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f304" name="drcr" defaultValue={"Credit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-044" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-044-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-044-t">{"Account mapping: Cash INR"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f305">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f305" name="type" required={true} defaultValue={"Payment mode"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f306">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f306" type="text" name="item" required={true} defaultValue={"Cash INR"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f307">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f307" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"1101"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f308">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f308" type="text" name="aname" required={true} defaultValue={"Cash in hand – front desk"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f309">{"Cost centre / department"}</label>
                        <input className="field__input" id="f309" type="text" name="cc" defaultValue={""} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f310">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f310" name="drcr" defaultValue={"Debit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-045" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-045-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-045-t">{"Account mapping: Credit card"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f311">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f311" name="type" required={true} defaultValue={"Payment mode"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f312">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f312" type="text" name="item" required={true} defaultValue={"Credit card"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f313">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f313" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"1102"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f314">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f314" type="text" name="aname" required={true} defaultValue={"Card receipts – acquirer clearing"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f315">{"Cost centre / department"}</label>
                        <input className="field__input" id="f315" type="text" name="cc" defaultValue={""} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f316">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f316" name="drcr" defaultValue={"Debit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-046" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-046-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-046-t">{"Account mapping: Debit card"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f317">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f317" name="type" required={true} defaultValue={"Payment mode"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f318">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f318" type="text" name="item" required={true} defaultValue={"Debit card"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f319">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f319" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"1102"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f320">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f320" type="text" name="aname" required={true} defaultValue={"Card receipts – acquirer clearing"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f321">{"Cost centre / department"}</label>
                        <input className="field__input" id="f321" type="text" name="cc" defaultValue={""} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f322">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f322" name="drcr" defaultValue={"Debit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-047" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-047-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-047-t">{"Account mapping: UPI"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f323">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f323" name="type" required={true} defaultValue={"Payment mode"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f324">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f324" type="text" name="item" required={true} defaultValue={"UPI"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f325">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f325" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"1103"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f326">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f326" type="text" name="aname" required={true} defaultValue={"UPI clearing"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f327">{"Cost centre / department"}</label>
                        <input className="field__input" id="f327" type="text" name="cc" defaultValue={""} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f328">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f328" name="drcr" defaultValue={"Debit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-048" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-048-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-048-t">{"Account mapping: Bank transfer / NEFT"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f329">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f329" name="type" required={true} defaultValue={"Payment mode"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f330">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f330" type="text" name="item" required={true} defaultValue={"Bank transfer / NEFT"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f331">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f331" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"1104"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f332">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f332" type="text" name="aname" required={true} defaultValue={"Bank – collection account"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f333">{"Cost centre / department"}</label>
                        <input className="field__input" id="f333" type="text" name="cc" defaultValue={""} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f334">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f334" name="drcr" defaultValue={"Debit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-049" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-049-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-049-t">{"Account mapping: Payment link"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f335">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f335" name="type" required={true} defaultValue={"Payment mode"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f336">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f336" type="text" name="item" required={true} defaultValue={"Payment link"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f337">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f337" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"1105"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f338">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f338" type="text" name="aname" required={true} defaultValue={"Payment gateway clearing"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f339">{"Cost centre / department"}</label>
                        <input className="field__input" id="f339" type="text" name="cc" defaultValue={""} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f340">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f340" name="drcr" defaultValue={"Debit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-050" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-050-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-050-t">{"Account mapping: Company (city ledger)"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f341">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f341" name="type" required={true} defaultValue={"Payment mode"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f342">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f342" type="text" name="item" required={true} defaultValue={"Company (city ledger)"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f343">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f343" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"1301"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f344">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f344" type="text" name="aname" required={true} defaultValue={"City ledger – company receivables"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f345">{"Cost centre / department"}</label>
                        <input className="field__input" id="f345" type="text" name="cc" defaultValue={""} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f346">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f346" name="drcr" defaultValue={"Debit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-051" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-051-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-051-t">{"Account mapping: OTA prepaid / virtual card"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f347">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f347" name="type" required={true} defaultValue={"Payment mode"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f348">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f348" type="text" name="item" required={true} defaultValue={"OTA prepaid / virtual card"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f349">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f349" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"1106"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f350">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f350" type="text" name="aname" required={true} defaultValue={"OTA receivables"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f351">{"Cost centre / department"}</label>
                        <input className="field__input" id="f351" type="text" name="cc" defaultValue={""} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f352">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f352" name="drcr" defaultValue={"Debit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-052" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-052-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-052-t">{"Account mapping: Foreign currency cash"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f353">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f353" name="type" required={true} defaultValue={"Payment mode"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f354">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f354" type="text" name="item" required={true} defaultValue={"Foreign currency cash"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f355">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f355" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"1107"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f356">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f356" type="text" name="aname" required={true} defaultValue={"Foreign currency cash"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f357">{"Cost centre / department"}</label>
                        <input className="field__input" id="f357" type="text" name="cc" defaultValue={""} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f358">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f358" name="drcr" defaultValue={"Debit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-053" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-053-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-053-t">{"Account mapping: Advance transfer"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f359">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f359" name="type" required={true} defaultValue={"Payment mode"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f360">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f360" type="text" name="item" required={true} defaultValue={"Advance transfer"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f361">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f361" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"2102"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f362">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f362" type="text" name="aname" required={true} defaultValue={"Advance deposits"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f363">{"Cost centre / department"}</label>
                        <input className="field__input" id="f363" type="text" name="cc" defaultValue={""} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f364">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f364" name="drcr" defaultValue={"Debit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-054" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-054-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-054-t">{"Account mapping: Room allowance"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f365">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f365" name="type" required={true} defaultValue={"Allowance"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f366">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f366" type="text" name="item" required={true} defaultValue={"Room allowance"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f367">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f367" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"4090"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f368">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f368" type="text" name="aname" required={true} defaultValue={"Allowances & discounts"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f369">{"Cost centre / department"}</label>
                        <input className="field__input" id="f369" type="text" name="cc" defaultValue={""} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f370">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f370" name="drcr" defaultValue={"Debit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-055" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-055-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-055-t">{"Account mapping: F&B allowance"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f371">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f371" name="type" required={true} defaultValue={"Allowance"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f372">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f372" type="text" name="item" required={true} defaultValue={"F&B allowance"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f373">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f373" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"4090"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f374">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f374" type="text" name="aname" required={true} defaultValue={"Allowances & discounts"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f375">{"Cost centre / department"}</label>
                        <input className="field__input" id="f375" type="text" name="cc" defaultValue={""} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f376">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f376" name="drcr" defaultValue={"Debit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-056" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-056-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-056-t">{"Account mapping: Service recovery"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f377">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f377" name="type" required={true} defaultValue={"Allowance"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f378">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f378" type="text" name="item" required={true} defaultValue={"Service recovery"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f379">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f379" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"4090"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f380">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f380" type="text" name="aname" required={true} defaultValue={"Allowances & discounts"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f381">{"Cost centre / department"}</label>
                        <input className="field__input" id="f381" type="text" name="cc" defaultValue={""} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f382">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f382" name="drcr" defaultValue={"Debit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-057" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-057-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-057-t">{"Account mapping: Posting error"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f383">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f383" name="type" required={true} defaultValue={"Allowance"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f384">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f384" type="text" name="item" required={true} defaultValue={"Posting error"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f385">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f385" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"4090"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f386">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f386" type="text" name="aname" required={true} defaultValue={"Allowances & discounts"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f387">{"Cost centre / department"}</label>
                        <input className="field__input" id="f387" type="text" name="cc" defaultValue={""} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f388">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f388" name="drcr" defaultValue={"Debit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-058" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-058-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-058-t">{"Account mapping: Goodwill"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f389">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f389" name="type" required={true} defaultValue={"Allowance"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f390">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f390" type="text" name="item" required={true} defaultValue={"Goodwill"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f391">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f391" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"4090"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f392">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f392" type="text" name="aname" required={true} defaultValue={"Allowances & discounts"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f393">{"Cost centre / department"}</label>
                        <input className="field__input" id="f393" type="text" name="cc" defaultValue={""} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f394">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f394" name="drcr" defaultValue={"Debit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-059" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-059-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-059-t">{"Account mapping: Taxi fare"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f395">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f395" name="type" required={true} defaultValue={"Paid-out"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f396">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f396" type="text" name="item" required={true} defaultValue={"Taxi fare"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f397">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f397" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"2105"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f398">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f398" type="text" name="aname" required={true} defaultValue={"Guest paid-outs"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f399">{"Cost centre / department"}</label>
                        <input className="field__input" id="f399" type="text" name="cc" defaultValue={""} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f400">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f400" name="drcr" defaultValue={"Debit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-060" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-060-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-060-t">{"Account mapping: Courier"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f401">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f401" name="type" required={true} defaultValue={"Paid-out"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f402">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f402" type="text" name="item" required={true} defaultValue={"Courier"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f403">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f403" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"2105"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f404">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f404" type="text" name="aname" required={true} defaultValue={"Guest paid-outs"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f405">{"Cost centre / department"}</label>
                        <input className="field__input" id="f405" type="text" name="cc" defaultValue={""} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f406">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f406" name="drcr" defaultValue={"Debit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-061" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-061-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-061-t">{"Account mapping: Medicine"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f407">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f407" name="type" required={true} defaultValue={"Paid-out"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f408">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f408" type="text" name="item" required={true} defaultValue={"Medicine"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f409">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f409" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"2105"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f410">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f410" type="text" name="aname" required={true} defaultValue={"Guest paid-outs"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f411">{"Cost centre / department"}</label>
                        <input className="field__input" id="f411" type="text" name="cc" defaultValue={""} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f412">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f412" name="drcr" defaultValue={"Debit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-062" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-062-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-062-t">{"Account mapping: Florist"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f413">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f413" name="type" required={true} defaultValue={"Paid-out"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f414">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f414" type="text" name="item" required={true} defaultValue={"Florist"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f415">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f415" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"2105"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f416">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f416" type="text" name="aname" required={true} defaultValue={"Guest paid-outs"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f417">{"Cost centre / department"}</label>
                        <input className="field__input" id="f417" type="text" name="cc" defaultValue={""} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f418">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f418" name="drcr" defaultValue={"Debit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-063" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-063-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-063-t">{"Account mapping: Tips"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f419">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f419" name="type" required={true} defaultValue={"Paid-out"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f420">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f420" type="text" name="item" required={true} defaultValue={"Tips"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f421">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f421" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"2105"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f422">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f422" type="text" name="aname" required={true} defaultValue={"Guest paid-outs"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f423">{"Cost centre / department"}</label>
                        <input className="field__input" id="f423" type="text" name="cc" defaultValue={""} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f424">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f424" name="drcr" defaultValue={"Debit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-064" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-064-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-064-t">{"Account mapping: Tickets"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f425">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f425" name="type" required={true} defaultValue={"Paid-out"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f426">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f426" type="text" name="item" required={true} defaultValue={"Tickets"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f427">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f427" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"2105"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f428">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f428" type="text" name="aname" required={true} defaultValue={"Guest paid-outs"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f429">{"Cost centre / department"}</label>
                        <input className="field__input" id="f429" type="text" name="cc" defaultValue={""} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f430">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f430" name="drcr" defaultValue={"Debit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-065" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-065-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-065-t">{"Account mapping: Advance deposit"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f431">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f431" name="type" required={true} defaultValue={"Advance deposit"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f432">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f432" type="text" name="item" required={true} defaultValue={"Advance deposit"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f433">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f433" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"2102"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f434">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f434" type="text" name="aname" required={true} defaultValue={"Advance deposits"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f435">{"Cost centre / department"}</label>
                        <input className="field__input" id="f435" type="text" name="cc" defaultValue={""} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f436">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f436" name="drcr" defaultValue={"Credit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-066" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-066-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-066-t">{"Account mapping: City ledger"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f437">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f437" name="type" required={true} defaultValue={"City ledger"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f438">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f438" type="text" name="item" required={true} defaultValue={"City ledger"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f439">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f439" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"1301"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f440">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f440" type="text" name="aname" required={true} defaultValue={"City ledger – company receivables"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f441">{"Cost centre / department"}</label>
                        <input className="field__input" id="f441" type="text" name="cc" defaultValue={""} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f442">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f442" name="drcr" defaultValue={"Debit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-067" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-067-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-067-t">{"Account mapping: Round-off"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f443">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f443" name="type" required={true} defaultValue={"Round-off"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f444">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f444" type="text" name="item" required={true} defaultValue={"Round-off"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f445">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f445" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"4295"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f446">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f446" type="text" name="aname" required={true} defaultValue={"Round-off"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f447">{"Cost centre / department"}</label>
                        <input className="field__input" id="f447" type="text" name="cc" defaultValue={""} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f448">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f448" name="drcr" defaultValue={"Credit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-068" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-068-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-068-t">{"Account mapping: Cash over / short"}</h2>
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
                        <label className="field__label" htmlFor="f449">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f449" name="type" required={true} defaultValue={"Cash over / short"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f450">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f450" type="text" name="item" required={true} defaultValue={"Cash over / short"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f451">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f451" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"5299"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f452">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f452" type="text" name="aname" required={true} defaultValue={"Cash over / short"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f453">{"Cost centre / department"}</label>
                        <input className="field__input" id="f453" type="text" name="cc" defaultValue={""} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f454">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f454" name="drcr" defaultValue={"Debit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-069" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-069-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-069-t">{"Account mapping: Event"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f455">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f455" name="type" required={true} defaultValue={"Paymaster"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f456">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f456" type="text" name="item" required={true} defaultValue={"Event"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f457">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f457" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"1302"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f458">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f458" type="text" name="aname" required={true} defaultValue={"Paymaster – house accounts"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f459">{"Cost centre / department"}</label>
                        <input className="field__input" id="f459" type="text" name="cc" defaultValue={""} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f460">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f460" name="drcr" defaultValue={"Debit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-070" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-070-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-070-t">{"Account mapping: Staff meals"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f461">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f461" name="type" required={true} defaultValue={"Paymaster"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f462">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f462" type="text" name="item" required={true} defaultValue={"Staff meals"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f463">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f463" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"1302"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f464">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f464" type="text" name="aname" required={true} defaultValue={"Paymaster – house accounts"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f465">{"Cost centre / department"}</label>
                        <input className="field__input" id="f465" type="text" name="cc" defaultValue={""} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f466">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f466" name="drcr" defaultValue={"Debit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-071" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-071-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-071-t">{"Account mapping: Walk-in outlet guest"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f467">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f467" name="type" required={true} defaultValue={"Paymaster"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f468">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f468" type="text" name="item" required={true} defaultValue={"Walk-in outlet guest"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f469">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f469" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"1302"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f470">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f470" type="text" name="aname" required={true} defaultValue={"Paymaster – house accounts"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f471">{"Cost centre / department"}</label>
                        <input className="field__input" id="f471" type="text" name="cc" defaultValue={""} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f472">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f472" name="drcr" defaultValue={"Debit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-072" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-072-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-072-t">{"Account mapping: Lost postings"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f473">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f473" name="type" required={true} defaultValue={"Paymaster"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f474">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f474" type="text" name="item" required={true} defaultValue={"Lost postings"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f475">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f475" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"1302"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f476">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f476" type="text" name="aname" required={true} defaultValue={"Paymaster – house accounts"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f477">{"Cost centre / department"}</label>
                        <input className="field__input" id="f477" type="text" name="cc" defaultValue={""} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f478">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f478" name="drcr" defaultValue={"Debit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25-map-073" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-map-073-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-map-073-t">{"Account mapping: Complimentary"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f479">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f479" name="type" required={true} defaultValue={"Paymaster"}>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f480">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f480" type="text" name="item" required={true} defaultValue={"Complimentary"} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f481">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f481" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={"1302"} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f482">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f482" type="text" name="aname" required={true} defaultValue={"Paymaster – house accounts"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f483">{"Cost centre / department"}</label>
                        <input className="field__input" id="f483" type="text" name="cc" defaultValue={""} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f484">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f484" name="drcr" defaultValue={"Debit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--full" id="FDS-P25" data-code="FDS-P25" role="dialog" aria-modal="true" aria-labelledby="FDS-P25-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#done" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="FDS-P25-t">{"Add mapping"}</h2>
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
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f485">
                          {"Item type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f485" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Charge code">{"Charge code"}</option>
                            <option value="Tax">{"Tax"}</option>
                            <option value="Payment mode">{"Payment mode"}</option>
                            <option value="Allowance">{"Allowance"}</option>
                            <option value="Paid-out">{"Paid-out"}</option>
                            <option value="Advance deposit">{"Advance deposit"}</option>
                            <option value="City ledger">{"City ledger"}</option>
                            <option value="Paymaster">{"Paymaster"}</option>
                            <option value="Round-off">{"Round-off"}</option>
                            <option value="Cash over / short">{"Cash over / short"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f486">
                          {"Item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f486" type="text" name="item" required={true} defaultValue={""} />
                        <span className="field__hint">{"Type-ahead lookup of the charge code, tax, payment mode …"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f487">
                          {"Finance account code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f487" type="text" name="code" required={true} pattern={"[0-9]{4}"} maxLength="4" defaultValue={""} />
                        <span className="field__hint">{"From the finance chart of accounts"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f488">
                          {"Account name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f488" type="text" name="aname" required={true} defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f489">{"Cost centre / department"}</label>
                        <input className="field__input" id="f489" type="text" name="cc" defaultValue={""} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f490">{"Debit / Credit"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f490" name="drcr" defaultValue={"Credit"}>
                            <option value="Debit">{"Debit"}</option>
                            <option value="Credit">{"Credit"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From the item type"}</span>
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
              <div className="modal modal--lg" id="log-FDS-29" data-code="FDS-29-log" role="dialog" aria-modal="true" aria-labelledby="log-FDS-29-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="log-FDS-29-t">{"Change log – Finance Posting Mapping"}</h2>
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
                              <input className="srt-i srt-a0" type="radio" name="stfds291" id="stfds291-0a" aria-label="Sort by When, lowest or A first" />
                              <input className="srt-i srt-d0" type="radio" name="stfds291" id="stfds291-0d" aria-label="Sort by When, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfds291-0a">{"When"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfds291-0d" aria-hidden="true">{"When"}</label>
                            </th>
                            <th scope="col">
                              <input className="srt-i srt-a1" type="radio" name="stfds291" id="stfds291-1a" aria-label="Sort by User, lowest or A first" />
                              <input className="srt-i srt-d1" type="radio" name="stfds291" id="stfds291-1d" aria-label="Sort by User, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfds291-1a">{"User"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfds291-1d" aria-hidden="true">{"User"}</label>
                            </th>
                            <th scope="col">{"Setting"}</th>
                            <th scope="col">
                              <input className="srt-i srt-a3" type="radio" name="stfds291" id="stfds291-3a" aria-label="Sort by Old → new, lowest or A first" />
                              <input className="srt-i srt-d3" type="radio" name="stfds291" id="stfds291-3d" aria-label="Sort by Old → new, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfds291-3a">{"Old → new"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfds291-3d" aria-hidden="true">{"Old → new"}</label>
                            </th>
                            <th scope="col">
                              <input className="srt-i srt-a4" type="radio" name="stfds291" id="stfds291-4a" aria-label="Sort by Note, lowest or A first" />
                              <input className="srt-i srt-d4" type="radio" name="stfds291" id="stfds291-4d" aria-label="Sort by Note, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfds291-4a">{"Note"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfds291-4d" aria-hidden="true">{"Note"}</label>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{"--k0": "3", "--k1": "1", "--k3": "3", "--k4": "3"}}>
                            <td className="dt__td nw" data-label="When" data-w2="" data-t="">{"22 Oct 09:12"}</td>
                            <td className="dt__td nw" data-label="User" data-w2="">{"Meera Prem"}</td>
                            <td className="dt__td" data-label="Setting" data-w2="">{"Finance Posting Mapping"}</td>
                            <td className="dt__td nw" data-label="Old → new" data-w2="">{"Updated settings"}</td>
                            <td className="dt__td nw" data-label="Note" data-w2="">{"Saved from this screen"}</td>
                          </tr>
                          <tr style={{"--k0": "2", "--k1": "2", "--k3": "2", "--k4": "2"}}>
                            <td className="dt__td nw" data-label="When" data-w2="" data-t="">{"21 Oct 17:40"}</td>
                            <td className="dt__td nw" data-label="User" data-w2="">{"System Admin"}</td>
                            <td className="dt__td" data-label="Setting" data-w2="">{"Finance Posting Mapping"}</td>
                            <td className="dt__td" data-label="Old → new">{"Reviewed with the GM approval document"}</td>
                            <td className="dt__td nw" data-label="Note" data-w2="">{"No change"}</td>
                          </tr>
                          <tr style={{"--k0": "1", "--k1": "1", "--k3": "1", "--k4": "1"}}>
                            <td className="dt__td nw" data-label="When" data-w2="" data-t="">{"20 Oct 11:05"}</td>
                            <td className="dt__td nw" data-label="User" data-w2="">{"Meera Prem"}</td>
                            <td className="dt__td" data-label="Setting" data-w2="">{"Finance Posting Mapping"}</td>
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
              <div className="modal modal--sm" id="export-FDS-29" data-code="FDS-29-export" role="dialog" aria-modal="true" aria-labelledby="export-FDS-29-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk-setup/fds-29-finance-posting-mapping/#exported" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="export-FDS-29-t">{"Export Finance Posting Mapping"}</h2>
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
                  {"Mapping saved"}
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
                  {"Mapping deactivated"}
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
              <div className="modal modal--md" id="FDS-29-export" data-code="FDS-29-export" role="dialog" aria-modal="true" aria-labelledby="FDS-29-export-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FDS-29-export-t">{"Export this list"}</h2>
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
                  <span className="code-chip">{"FDS-29"}</span>
                </summary>
                <dl className="helpbox__body">
                  <dt>{"What it is for"}</dt>
                  <dd>{"Mapping of charge codes, taxes, payment modes and ledgers to finance accounts for account posting"}</dd>
                  <dt>{"Opened from"}</dt>
                  <dd>
                    <Link to={"/front-desk-setup/fds-01-front-desk-setup-home"}>{"FDS-01"}</Link>
                  </dd>
                  <dt>{"Leads to"}</dt>
                  <dd>
                    <a href="/front-desk-setup/fds-29-finance-posting-mapping/#FDS-29a">{"FDS-29a"}</a>
                    {", "}
                    <a href="/front-desk-setup/fds-29-finance-posting-mapping/#FDS-P25">{"FDS-P25"}</a>
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
