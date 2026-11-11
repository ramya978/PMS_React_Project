// GENERATED from public/front-desk/fd-34-folio-history-tracking/index.html by scripts/convert_legacy.py.
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
    "href": "/front-desk/fd-34-folio-history-tracking/fd-34-folio-history-tracking.css",
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

export default function FrontDeskFd34FolioHistoryTracking() {
  return (
    <ScreenShell title="Folio History & Tracking" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="FD-34" data-code="FD-34" data-static="1" className="legacy-body">
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
              <details className="nav__sub" data-group="cashier" open={true}>
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
                  <Link className="nav__item is-active" data-nav="FD-34" aria-current="page" title="Folio History & Tracking" to={"/front-desk/fd-34-folio-history-tracking"}>
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
            <main className="app__content" id="main" data-code="FD-34" tabIndex="-1">
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
                        <Link to={"/front-desk/fd-01-front-desk-home"}>{"Front Desk"}</Link>
                      </li>
                      <li>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-right" />
                        </svg>
                        <span aria-current="page">{"Folio History & Tracking"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">{"Folio History & Tracking"}</h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"FD-34"}</span>
                  <div className="page-header__filters">
                    <div className="hctl">
                      <div className="hsearch">
                        <input className="hsearch__input" id="hs5" type="search" name="q" placeholder="Guest, room, folio no., invoice no. or company" aria-label="Guest, room, folio no., invoice no. or company" autoComplete="off" />
                        <label className="hsearch__ic" htmlFor="hs5" title="Search">
                          <svg className="icon" width="17" height="17" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#search" />
                          </svg>
                          <span className="sr-only">{"Search"}</span>
                        </label>
                      </div>
                      <label className="hfilter__btn" htmlFor="hf6" title="Show or hide the filters">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#filter" />
                        </svg>
                        <span>{"Filter"}</span>
                        <i className="hfilter__dot" aria-hidden="true" />
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </label>
                      <input className="hfilter__tg" type="checkbox" id="hf6" aria-label="Show filters" />
                      <form className="hfilter" method="get" role="search" aria-label="Filters">
                        <span className="hfilter__hic" title="Filters">
                          <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#sliders" />
                          </svg>
                        </span>
                        <div className="hfilter__grid">
                          <label className="hf-f ">
                            <span className="hf-f__l">{"Status"}</span>
                            <select className="hf-f__c">
                              <option>{"Any status"}</option>
                              <option>{"Closed"}</option>
                              <option>{"Re-opened"}</option>
                              <option>{"Credit noted"}</option>
                            </select>
                            <svg className="icon hf-f__chev" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                          <div className="hfilter__more">
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="fh-from">{"Closed from"}</label>
                              <div className="dpk">
                                <button type="button" className="dpk-f field__input" id="fh-from" aria-haspopup="dialog">
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#calendar" />
                                  </svg>
                                  <span className="dpk-f__v">
                                    <span className="dpk-f__d" />
                                    {" "}
                                    <span className="dpk-f__m" />
                                    {" "}
                                    <span className="dpk-f__y" />
                                  </span>
                                  <span className="dpk-f__ph">{"Select date"}</span>
                                </button>
                                <div className="dpk-pop" tabIndex="-1" role="dialog" aria-label="Choose a date">
                                  <div className="dpk-h">
                                    <select className="dpk-m" name="from-month" aria-label="Month" defaultValue={"10"}>
                                      <option value="01">{"Jan"}</option>
                                      <option value="02">{"Feb"}</option>
                                      <option value="03">{"Mar"}</option>
                                      <option value="04">{"Apr"}</option>
                                      <option value="05">{"May"}</option>
                                      <option value="06">{"Jun"}</option>
                                      <option value="07">{"Jul"}</option>
                                      <option value="08">{"Aug"}</option>
                                      <option value="09">{"Sep"}</option>
                                      <option value="10">{"Oct"}</option>
                                      <option value="11">{"Nov"}</option>
                                      <option value="12">{"Dec"}</option>
                                    </select>
                                    <select className="dpk-y" name="from-year" aria-label="Year" defaultValue={"2026"}>
                                      <option value="2024" className="lp">{"2024"}</option>
                                      <option value="2025">{"2025"}</option>
                                      <option value="2026">{"2026"}</option>
                                      <option value="2027">{"2027"}</option>
                                      <option value="2028" className="lp">{"2028"}</option>
                                      <option value="2029">{"2029"}</option>
                                      <option value="2030">{"2030"}</option>
                                    </select>
                                  </div>
                                  <div className="dpk-g">
                                    <span className="dpk-w">{"Mo"}</span>
                                    <span className="dpk-w">{"Tu"}</span>
                                    <span className="dpk-w">{"We"}</span>
                                    <span className="dpk-w">{"Th"}</span>
                                    <span className="dpk-w">{"Fr"}</span>
                                    <span className="dpk-w">{"Sa"}</span>
                                    <span className="dpk-w">{"Su"}</span>
                                    <label className="dpk-d">
                                      <input type="radio" name="from" value="01" defaultChecked={true} />
                                      {"1"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="from" value="02" />
                                      {"2"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="from" value="03" />
                                      {"3"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="from" value="04" />
                                      {"4"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="from" value="05" />
                                      {"5"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="from" value="06" />
                                      {"6"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="from" value="07" />
                                      {"7"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="from" value="08" />
                                      {"8"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="from" value="09" />
                                      {"9"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="from" value="10" />
                                      {"10"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="from" value="11" />
                                      {"11"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="from" value="12" />
                                      {"12"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="from" value="13" />
                                      {"13"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="from" value="14" />
                                      {"14"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="from" value="15" />
                                      {"15"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="from" value="16" />
                                      {"16"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="from" value="17" />
                                      {"17"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="from" value="18" />
                                      {"18"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="from" value="19" />
                                      {"19"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="from" value="20" />
                                      {"20"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="from" value="21" />
                                      {"21"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="from" value="22" />
                                      {"22"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="from" value="23" />
                                      {"23"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="from" value="24" />
                                      {"24"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="from" value="25" />
                                      {"25"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="from" value="26" />
                                      {"26"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="from" value="27" />
                                      {"27"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="from" value="28" />
                                      {"28"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="from" value="29" />
                                      {"29"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="from" value="30" />
                                      {"30"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="from" value="31" />
                                      {"31"}
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="fh-to">{"Closed to"}</label>
                              <div className="dpk">
                                <button type="button" className="dpk-f field__input" id="fh-to" aria-haspopup="dialog">
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#calendar" />
                                  </svg>
                                  <span className="dpk-f__v">
                                    <span className="dpk-f__d" />
                                    {" "}
                                    <span className="dpk-f__m" />
                                    {" "}
                                    <span className="dpk-f__y" />
                                  </span>
                                  <span className="dpk-f__ph">{"Select date"}</span>
                                </button>
                                <div className="dpk-pop" tabIndex="-1" role="dialog" aria-label="Choose a date">
                                  <div className="dpk-h">
                                    <select className="dpk-m" name="to-month" aria-label="Month" defaultValue={"10"}>
                                      <option value="01">{"Jan"}</option>
                                      <option value="02">{"Feb"}</option>
                                      <option value="03">{"Mar"}</option>
                                      <option value="04">{"Apr"}</option>
                                      <option value="05">{"May"}</option>
                                      <option value="06">{"Jun"}</option>
                                      <option value="07">{"Jul"}</option>
                                      <option value="08">{"Aug"}</option>
                                      <option value="09">{"Sep"}</option>
                                      <option value="10">{"Oct"}</option>
                                      <option value="11">{"Nov"}</option>
                                      <option value="12">{"Dec"}</option>
                                    </select>
                                    <select className="dpk-y" name="to-year" aria-label="Year" defaultValue={"2026"}>
                                      <option value="2024" className="lp">{"2024"}</option>
                                      <option value="2025">{"2025"}</option>
                                      <option value="2026">{"2026"}</option>
                                      <option value="2027">{"2027"}</option>
                                      <option value="2028" className="lp">{"2028"}</option>
                                      <option value="2029">{"2029"}</option>
                                      <option value="2030">{"2030"}</option>
                                    </select>
                                  </div>
                                  <div className="dpk-g">
                                    <span className="dpk-w">{"Mo"}</span>
                                    <span className="dpk-w">{"Tu"}</span>
                                    <span className="dpk-w">{"We"}</span>
                                    <span className="dpk-w">{"Th"}</span>
                                    <span className="dpk-w">{"Fr"}</span>
                                    <span className="dpk-w">{"Sa"}</span>
                                    <span className="dpk-w">{"Su"}</span>
                                    <label className="dpk-d">
                                      <input type="radio" name="to" value="01" />
                                      {"1"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="to" value="02" />
                                      {"2"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="to" value="03" />
                                      {"3"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="to" value="04" />
                                      {"4"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="to" value="05" />
                                      {"5"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="to" value="06" />
                                      {"6"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="to" value="07" />
                                      {"7"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="to" value="08" />
                                      {"8"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="to" value="09" />
                                      {"9"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="to" value="10" />
                                      {"10"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="to" value="11" />
                                      {"11"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="to" value="12" />
                                      {"12"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="to" value="13" />
                                      {"13"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="to" value="14" />
                                      {"14"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="to" value="15" />
                                      {"15"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="to" value="16" />
                                      {"16"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="to" value="17" />
                                      {"17"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="to" value="18" />
                                      {"18"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="to" value="19" />
                                      {"19"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="to" value="20" />
                                      {"20"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="to" value="21" />
                                      {"21"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="to" value="22" defaultChecked={true} />
                                      {"22"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="to" value="23" />
                                      {"23"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="to" value="24" />
                                      {"24"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="to" value="25" />
                                      {"25"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="to" value="26" />
                                      {"26"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="to" value="27" />
                                      {"27"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="to" value="28" />
                                      {"28"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="to" value="29" />
                                      {"29"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="to" value="30" />
                                      {"30"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="to" value="31" />
                                      {"31"}
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <label className="hf-f">
                            <span className="hf-f__l">{"From"}</span>
                            <input className="hf-f__c" type="date" name="from" defaultValue={"2026-10-01"} />
                          </label>
                          <label className="hf-f">
                            <span className="hf-f__l">{"To"}</span>
                            <input className="hf-f__c" type="date" name="to" defaultValue={"2026-10-22"} />
                          </label>
                        </div>
                        <div className="hfilter__acts">
                          <button className="hfilter__clear" type="reset" title="Clear all filters">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#refresh" />
                            </svg>
                            <span>{"Clear"}</span>
                          </button>
                          <label className="hfilter__done" htmlFor="hf6">
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
                    <Link className="btn" data-leads-to="FD-16" to={"/front-desk/fd-16-invoices-credit-notes"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#receipt" />
                      </svg>
                      {"Invoices"}
                    </Link>
                  </div>
                </div>
              </header>
              <p className="field__hint" data-flow="fd34-post">{"Post-stay charges and late charges may be added within the days allowed in Check-in & Check-out Rules (FDS-04) by re-opening the bill; the credit-note limit applies."}</p>
              <nav className="ltabs" aria-label="Sections">
                <div className="ltabs__list">
                  <Link aria-current="page" data-leads-to="FD-34" to={"/front-desk/fd-34-folio-history-tracking"}>
                    {"Closed folios"}
                    <span className="ltabs__n">{"35"}</span>
                  </Link>
                  <Link data-leads-to="FD-34-2" to={"/front-desk/fd-34-folio-history-tracking/tracking"}>{"Folio tracking"}</Link>
                </div>
              </nav>
              <div className="pgw">
                <div className="s-scroll s-scroll--tall" data-code="FD-34-1">
                  <table className="srt dt__table" data-code="FD-34-1-table" style={{"--srt-cols": "auto auto auto auto auto auto auto max-content"}} data-mc="">
                    <caption className="sr-only">{"Closed folios"}</caption>
                    <thead>
                      <tr>
                        <th scope="col">
                          <input className="srt-i srt-a0" type="radio" name="stfd340" id="stfd340-0a" aria-label="Sort by Folio no., lowest or A first" />
                          <input className="srt-i srt-d0" type="radio" name="stfd340" id="stfd340-0d" aria-label="Sort by Folio no., highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd340-0a">{"Folio no."}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd340-0d" aria-hidden="true">{"Folio no."}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a1" type="radio" name="stfd340" id="stfd340-1a" aria-label="Sort by Guest, lowest or A first" />
                          <input className="srt-i srt-d1" type="radio" name="stfd340" id="stfd340-1d" aria-label="Sort by Guest, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd340-1a">{"Guest"}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd340-1d" aria-hidden="true">{"Guest"}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a2" type="radio" name="stfd340" id="stfd340-2a" aria-label="Sort by Room, lowest or A first" />
                          <input className="srt-i srt-d2" type="radio" name="stfd340" id="stfd340-2d" aria-label="Sort by Room, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd340-2a">{"Room"}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd340-2d" aria-hidden="true">{"Room"}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a3" type="radio" name="stfd340" id="stfd340-3a" aria-label="Sort by Stay, lowest or A first" />
                          <input className="srt-i srt-d3" type="radio" name="stfd340" id="stfd340-3d" aria-label="Sort by Stay, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd340-3a">{"Stay"}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd340-3d" aria-hidden="true">{"Stay"}</label>
                        </th>
                        <th scope="col" className="dt__th--right">
                          <input className="srt-i srt-a4" type="radio" name="stfd340" id="stfd340-4a" aria-label="Sort by Total, lowest or A first" />
                          <input className="srt-i srt-d4" type="radio" name="stfd340" id="stfd340-4d" aria-label="Sort by Total, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd340-4a">{"Total"}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd340-4d" aria-hidden="true">{"Total"}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a5" type="radio" name="stfd340" id="stfd340-5a" aria-label="Sort by Invoice, lowest or A first" />
                          <input className="srt-i srt-d5" type="radio" name="stfd340" id="stfd340-5d" aria-label="Sort by Invoice, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd340-5a">{"Invoice"}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd340-5d" aria-hidden="true">{"Invoice"}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a6" type="radio" name="stfd340" id="stfd340-6a" aria-label="Sort by Status, lowest or A first" />
                          <input className="srt-i srt-d6" type="radio" name="stfd340" id="stfd340-6d" aria-label="Sort by Status, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd340-6a">{"Status"}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd340-6d" aria-hidden="true">{"Status"}</label>
                        </th>
                        <th scope="col" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{"--k0": "12", "--k1": "1", "--k2": "1", "--k3": "17", "--k4": "24", "--k5": "35", "--k6": "1"}}>
                        <td className="dt__td nw" data-label="Folio no." data-w2="" data-t="">
                          <strong>{"FL-26-10047"}</strong>
                          <span className="fd-sub">{"closed 21 Oct"}</span>
                        </td>
                        <td className="dt__td" data-label="Guest">
                          <a className="fd-link" href="#f-FK-10047">
                            <strong>{"Mr Ajay Rishi"}</strong>
                          </a>
                          <span className="fd-sub">{"FK-10047 · TechPark Kochi Systems"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Room">
                          <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"102"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Stay" data-w2="">
                          {"17 Oct → 21 Oct"}
                          <span className="fd-sub">{"4 nights"}</span>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹38,699.00"}</td>
                        <td className="dt__td nw" data-label="Invoice" data-w2="">{"INV/26-27/003799"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#lock" />
                            </svg>
                            {"Closed"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <div className="fo-act">
                            <a className="btn btn--ghost" href="#f-FK-10047" aria-label="View the folio (read-only)" title="View the folio (read-only)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#eye" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10047" data-leads-to="FD-O03" aria-label="Reprint invoice / bill (FD-O03)" title="Reprint invoice / bill (FD-O03)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27" data-leads-to="FD-P27" aria-label="Credit note (FD-P27)" title="Credit note (FD-P27)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#file-minus" />
                              </svg>
                            </a>
                            <span className="fd-muted" title="Re-open is possible on the same business day only">{"Re-open: same day only"}</span>
                          </div>
                        </td>
                      </tr>
                      <tr style={{"--k0": "5", "--k1": "28", "--k2": "23", "--k3": "18", "--k4": "31", "--k5": "34", "--k6": "1"}}>
                        <td className="dt__td nw" data-label="Folio no." data-w2="" data-t="">
                          <strong>{"FL-26-10018"}</strong>
                          <span className="fd-sub">{"closed 21 Oct"}</span>
                        </td>
                        <td className="dt__td" data-label="Guest">
                          <a className="fd-link" href="#f-FK-10018">
                            <strong>{"Mr Sanjay Joseph"}</strong>
                          </a>
                          <span className="fd-sub">{"FK-10018 · Willingdon Logistics LLP"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Room">
                          <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"411"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Stay" data-w2="">
                          {"18 Oct → 21 Oct"}
                          <span className="fd-sub">{"3 nights"}</span>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹51,673.00"}</td>
                        <td className="dt__td nw" data-label="Invoice" data-w2="">{"INV/26-27/003798"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#lock" />
                            </svg>
                            {"Closed"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <div className="fo-act">
                            <a className="btn btn--ghost" href="#f-FK-10018" aria-label="View the folio (read-only)" title="View the folio (read-only)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#eye" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10018" data-leads-to="FD-O03" aria-label="Reprint invoice / bill (FD-O03)" title="Reprint invoice / bill (FD-O03)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10018" data-leads-to="FD-P27" aria-label="Credit note (FD-P27)" title="Credit note (FD-P27)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#file-minus" />
                              </svg>
                            </a>
                            <span className="fd-muted" title="Re-open is possible on the same business day only">{"Re-open: same day only"}</span>
                          </div>
                        </td>
                      </tr>
                      <tr style={{"--k0": "34", "--k1": "8", "--k2": "29", "--k3": "18", "--k4": "4", "--k5": "33", "--k6": "3"}}>
                        <td className="dt__td nw" data-label="Folio no." data-w2="" data-t="">
                          <strong>{"FL-26-10155"}</strong>
                          <span className="fd-sub">{"closed 20 Oct"}</span>
                        </td>
                        <td className="dt__td" data-label="Guest" data-w2="">
                          <a className="fd-link" href="#f-FK-10155">
                            <strong>{"Ms Divya Thomas"}</strong>
                          </a>
                          <span className="fd-sub">{"FK-10155"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Room">
                          <span className="fd-rm fd-rm--VD" title="Vacant dirty">{"512"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Stay" data-w2="">
                          {"18 Oct → 20 Oct"}
                          <span className="fd-sub">{"2 nights"}</span>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹16,378.00"}</td>
                        <td className="dt__td nw" data-label="Invoice" data-w2="">{"INV/26-27/003797"}</td>
                        <td className="dt__td" data-label="Status" data-w2="" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#lock" />
                            </svg>
                            {"Closed"}
                          </span>
                          <span className="pill pill--tentative">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#undo" />
                            </svg>
                            {"Re-opened"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <div className="fo-act">
                            <a className="btn btn--ghost" href="#f-FK-10155" aria-label="View the folio (read-only)" title="View the folio (read-only)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#eye" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10155" data-leads-to="FD-O03" aria-label="Reprint invoice / bill (FD-O03)" title="Reprint invoice / bill (FD-O03)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10155" data-leads-to="FD-P27" aria-label="Credit note (FD-P27)" title="Credit note (FD-P27)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#file-minus" />
                              </svg>
                            </a>
                            <span className="fd-muted" title="Re-open is possible on the same business day only">{"Re-open: same day only"}</span>
                          </div>
                        </td>
                      </tr>
                      <tr style={{"--k0": "1", "--k1": "9", "--k2": "3", "--k3": "15", "--k4": "29", "--k5": "32", "--k6": "1"}}>
                        <td className="dt__td nw" data-label="Folio no." data-w2="" data-t="">
                          <strong>{"FL-26-10001"}</strong>
                          <span className="fd-sub">{"closed 20 Oct"}</span>
                        </td>
                        <td className="dt__td" data-label="Guest">
                          <a className="fd-link" href="#f-FK-10001">
                            <strong>{"Mr Ethan Anderson"}</strong>
                          </a>
                          <span className="fd-sub">{"FK-10001"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Room">
                          <span className="fd-rm fd-rm--OC" title="Occupied clean">{"108"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Stay" data-w2="">
                          {"15 Oct → 20 Oct"}
                          <span className="fd-sub">{"5 nights"}</span>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹49,082.00"}</td>
                        <td className="dt__td nw" data-label="Invoice" data-w2="">{"INV/26-27/003796"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#lock" />
                            </svg>
                            {"Closed"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <div className="fo-act">
                            <a className="btn btn--ghost" href="#f-FK-10001" aria-label="View the folio (read-only)" title="View the folio (read-only)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#eye" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10001" data-leads-to="FD-O03" aria-label="Reprint invoice / bill (FD-O03)" title="Reprint invoice / bill (FD-O03)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10001" data-leads-to="FD-P27" aria-label="Credit note (FD-P27)" title="Credit note (FD-P27)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#file-minus" />
                              </svg>
                            </a>
                            <span className="fd-muted" title="Re-open is possible on the same business day only">{"Re-open: same day only"}</span>
                          </div>
                        </td>
                      </tr>
                      <tr style={{"--k0": "35", "--k1": "16", "--k2": "24", "--k3": "16", "--k4": "16", "--k5": "31", "--k6": "1"}}>
                        <td className="dt__td nw" data-label="Folio no." data-w2="" data-t="">
                          <strong>{"FL-26-10163"}</strong>
                          <span className="fd-sub">{"closed 19 Oct"}</span>
                        </td>
                        <td className="dt__td" data-label="Guest" data-w2="">
                          <a className="fd-link" href="#f-FK-10163">
                            <strong>{"Mr Karthik Siddharth"}</strong>
                          </a>
                          <span className="fd-sub">{"FK-10163"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Room">
                          <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"413"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Stay" data-w2="">
                          {"16 Oct → 19 Oct"}
                          <span className="fd-sub">{"3 nights"}</span>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹31,974.00"}</td>
                        <td className="dt__td nw" data-label="Invoice" data-w2="">{"INV/26-27/003795"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#lock" />
                            </svg>
                            {"Closed"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <div className="fo-act">
                            <a className="btn btn--ghost" href="#f-FK-10163" aria-label="View the folio (read-only)" title="View the folio (read-only)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#eye" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10163" data-leads-to="FD-O03" aria-label="Reprint invoice / bill (FD-O03)" title="Reprint invoice / bill (FD-O03)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10163" data-leads-to="FD-P27" aria-label="Credit note (FD-P27)" title="Credit note (FD-P27)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#file-minus" />
                              </svg>
                            </a>
                            <span className="fd-muted" title="Re-open is possible on the same business day only">{"Re-open: same day only"}</span>
                          </div>
                        </td>
                      </tr>
                      <tr style={{"--k0": "32", "--k1": "15", "--k2": "22", "--k3": "14", "--k4": "32", "--k5": "30", "--k6": "2"}}>
                        <td className="dt__td nw" data-label="Folio no." data-w2="" data-t="">
                          <strong>{"FL-26-10107"}</strong>
                          <span className="fd-sub">{"closed 19 Oct"}</span>
                        </td>
                        <td className="dt__td" data-label="Guest" data-w2="">
                          <a className="fd-link" href="#f-FK-10107">
                            <strong>{"Mr Karthik Jatin"}</strong>
                          </a>
                          <span className="fd-sub">{"FK-10107"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Room">
                          <span className="fd-rm fd-rm--OC" title="Occupied clean">{"406"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Stay" data-w2="">
                          {"14 Oct → 19 Oct"}
                          <span className="fd-sub">{"5 nights"}</span>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹52,032.00"}</td>
                        <td className="dt__td nw" data-label="Invoice" data-w2="">{"INV/26-27/003794"}</td>
                        <td className="dt__td" data-label="Status" data-w2="" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#lock" />
                            </svg>
                            {"Closed"}
                          </span>
                          <span className="pill pill--occupied">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#receipt" />
                            </svg>
                            {"Credit noted"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <div className="fo-act">
                            <a className="btn btn--ghost" href="#f-FK-10107" aria-label="View the folio (read-only)" title="View the folio (read-only)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#eye" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10107" data-leads-to="FD-O03" aria-label="Reprint invoice / bill (FD-O03)" title="Reprint invoice / bill (FD-O03)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10107" data-leads-to="FD-P27" aria-label="Credit note (FD-P27)" title="Credit note (FD-P27)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#file-minus" />
                              </svg>
                            </a>
                            <span className="fd-muted" title="Re-open is possible on the same business day only">{"Re-open: same day only"}</span>
                          </div>
                        </td>
                      </tr>
                      <tr style={{"--k0": "33", "--k1": "31", "--k2": "28", "--k3": "17", "--k4": "20", "--k5": "29", "--k6": "1"}}>
                        <td className="dt__td nw" data-label="Folio no." data-w2="" data-t="">
                          <strong>{"FL-26-10110"}</strong>
                          <span className="fd-sub">{"closed 18 Oct"}</span>
                        </td>
                        <td className="dt__td" data-label="Guest">
                          <a className="fd-link" href="#f-FK-10110">
                            <strong>{"Dr Sophie de Vries"}</strong>
                          </a>
                          <span className="fd-sub">{"FK-10110"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Room">
                          <span className="fd-rms" title="Rooms 511, 503">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"511"}</span>
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"503"}</span>
                          </span>
                        </td>
                        <td className="dt__td nw" data-label="Stay" data-w2="">
                          {"17 Oct → 18 Oct"}
                          <span className="fd-sub">{"1 night"}</span>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹34,208.00"}</td>
                        <td className="dt__td nw" data-label="Invoice" data-w2="">{"INV/26-27/003793"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#lock" />
                            </svg>
                            {"Closed"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <div className="fo-act">
                            <a className="btn btn--ghost" href="#f-FK-10110" aria-label="View the folio (read-only)" title="View the folio (read-only)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#eye" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10110" data-leads-to="FD-O03" aria-label="Reprint invoice / bill (FD-O03)" title="Reprint invoice / bill (FD-O03)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10110" data-leads-to="FD-P27" aria-label="Credit note (FD-P27)" title="Credit note (FD-P27)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#file-minus" />
                              </svg>
                            </a>
                            <span className="fd-muted" title="Re-open is possible on the same business day only">{"Re-open: same day only"}</span>
                          </div>
                        </td>
                      </tr>
                      <tr style={{"--k0": "20", "--k1": "18", "--k2": "20", "--k3": "16", "--k4": "27", "--k5": "28", "--k6": "1"}}>
                        <td className="dt__td nw" data-label="Folio no." data-w2="" data-t="">
                          <strong>{"FL-26-10070"}</strong>
                          <span className="fd-sub">{"closed 18 Oct"}</span>
                        </td>
                        <td className="dt__td" data-label="Guest" data-w2="">
                          <a className="fd-link" href="#f-FK-10070">
                            <strong>{"Mr Lukas Keller"}</strong>
                          </a>
                          <span className="fd-sub">{"FK-10070"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Room">
                          <span className="fd-rms" title="Rooms 315, 409">
                            <span className="fd-rm fd-rm--VC" title="Vacant clean">{"315"}</span>
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"409"}</span>
                          </span>
                        </td>
                        <td className="dt__td nw" data-label="Stay" data-w2="">
                          {"16 Oct → 18 Oct"}
                          <span className="fd-sub">{"2 nights"}</span>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹43,891.00"}</td>
                        <td className="dt__td nw" data-label="Invoice" data-w2="">{"INV/26-27/003792"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#lock" />
                            </svg>
                            {"Closed"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <div className="fo-act">
                            <a className="btn btn--ghost" href="#f-FK-10070" aria-label="View the folio (read-only)" title="View the folio (read-only)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#eye" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10070" data-leads-to="FD-O03" aria-label="Reprint invoice / bill (FD-O03)" title="Reprint invoice / bill (FD-O03)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10070" data-leads-to="FD-P27" aria-label="Credit note (FD-P27)" title="Credit note (FD-P27)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#file-minus" />
                              </svg>
                            </a>
                            <span className="fd-muted" title="Re-open is possible on the same business day only">{"Re-open: same day only"}</span>
                          </div>
                        </td>
                      </tr>
                      <tr style={{"--k0": "4", "--k1": "3", "--k2": "21", "--k3": "15", "--k4": "9", "--k5": "27", "--k6": "1"}}>
                        <td className="dt__td nw" data-label="Folio no." data-w2="" data-t="">
                          <strong>{"FL-26-10012"}</strong>
                          <span className="fd-sub">{"closed 17 Oct"}</span>
                        </td>
                        <td className="dt__td" data-label="Guest">
                          <a className="fd-link" href="#f-FK-10012">
                            <strong>{"Dr Anna Schneider"}</strong>
                          </a>
                          <span className="fd-sub">{"FK-10012"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Room">
                          <span className="fd-rm fd-rm--OC" title="Occupied clean">{"318"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Stay" data-w2="">
                          {"15 Oct → 17 Oct"}
                          <span className="fd-sub">{"2 nights"}</span>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹19,350.00"}</td>
                        <td className="dt__td nw" data-label="Invoice" data-w2="">{"INV/26-27/003791"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#lock" />
                            </svg>
                            {"Closed"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <div className="fo-act">
                            <a className="btn btn--ghost" href="#f-FK-10012" aria-label="View the folio (read-only)" title="View the folio (read-only)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#eye" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10012" data-leads-to="FD-O03" aria-label="Reprint invoice / bill (FD-O03)" title="Reprint invoice / bill (FD-O03)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10012" data-leads-to="FD-P27" aria-label="Credit note (FD-P27)" title="Credit note (FD-P27)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#file-minus" />
                              </svg>
                            </a>
                            <span className="fd-muted" title="Re-open is possible on the same business day only">{"Re-open: same day only"}</span>
                          </div>
                        </td>
                      </tr>
                      <tr style={{"--k0": "3", "--k1": "30", "--k2": "13", "--k3": "13", "--k4": "12", "--k5": "26", "--k6": "1"}}>
                        <td className="dt__td nw" data-label="Folio no." data-w2="" data-t="">
                          <strong>{"FL-26-10009"}</strong>
                          <span className="fd-sub">{"closed 17 Oct"}</span>
                        </td>
                        <td className="dt__td" data-label="Guest">
                          <a className="fd-link" href="#f-FK-10009">
                            <strong>{"Dr Sophie de Vries"}</strong>
                          </a>
                          <span className="fd-sub">{"FK-10009"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Room">
                          <span className="fd-rm fd-rm--OC" title="Occupied clean">{"213"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Stay" data-w2="">
                          {"13 Oct → 17 Oct"}
                          <span className="fd-sub">{"4 nights"}</span>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹27,724.00"}</td>
                        <td className="dt__td nw" data-label="Invoice" data-w2="">{"INV/26-27/003790"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#lock" />
                            </svg>
                            {"Closed"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <div className="fo-act">
                            <a className="btn btn--ghost" href="#f-FK-10009" aria-label="View the folio (read-only)" title="View the folio (read-only)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#eye" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10009" data-leads-to="FD-O03" aria-label="Reprint invoice / bill (FD-O03)" title="Reprint invoice / bill (FD-O03)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10009" data-leads-to="FD-P27" aria-label="Credit note (FD-P27)" title="Credit note (FD-P27)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#file-minus" />
                              </svg>
                            </a>
                            <span className="fd-muted" title="Re-open is possible on the same business day only">{"Re-open: same day only"}</span>
                          </div>
                        </td>
                      </tr>
                      <tr style={{"--k0": "17", "--k1": "24", "--k2": "27", "--k3": "12", "--k4": "2", "--k5": "25", "--k6": "1"}}>
                        <td className="dt__td nw" data-label="Folio no." data-w2="" data-t="">
                          <strong>{"FL-26-10065"}</strong>
                          <span className="fd-sub">{"closed 13 Oct"}</span>
                        </td>
                        <td className="dt__td" data-label="Guest">
                          <a className="fd-link" href="#f-FK-10065">
                            <strong>{"Ms Parvathy Thomas"}</strong>
                          </a>
                          <span className="fd-sub">{"FK-10065"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Room">
                          <span className="fd-rm fd-rm--OC" title="Occupied clean">{"503"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Stay" data-w2="">
                          {"12 Oct → 13 Oct"}
                          <span className="fd-sub">{"1 night"}</span>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹13,923.00"}</td>
                        <td className="dt__td nw" data-label="Invoice" data-w2="">{"INV/26-27/003789"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#lock" />
                            </svg>
                            {"Closed"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <div className="fo-act">
                            <a className="btn btn--ghost" href="#f-FK-10065" aria-label="View the folio (read-only)" title="View the folio (read-only)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#eye" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10065" data-leads-to="FD-O03" aria-label="Reprint invoice / bill (FD-O03)" title="Reprint invoice / bill (FD-O03)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10065" data-leads-to="FD-P27" aria-label="Credit note (FD-P27)" title="Credit note (FD-P27)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#file-minus" />
                              </svg>
                            </a>
                            <span className="fd-muted" title="Re-open is possible on the same business day only">{"Re-open: same day only"}</span>
                          </div>
                        </td>
                      </tr>
                      <tr style={{"--k0": "29", "--k1": "29", "--k2": "10", "--k3": "9", "--k4": "25", "--k5": "24", "--k6": "2"}}>
                        <td className="dt__td nw" data-label="Folio no." data-w2="" data-t="">
                          <strong>{"FL-26-10090"}</strong>
                          <span className="fd-sub">{"closed 12 Oct"}</span>
                        </td>
                        <td className="dt__td" data-label="Guest">
                          <a className="fd-link" href="#f-FK-10090">
                            <strong>{"Ms Sindhu Rahman"}</strong>
                          </a>
                          <span className="fd-sub">{"FK-10090 · Spice Route Hospitality Consultants"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Room">
                          <span className="fd-rm fd-rm--OC" title="Occupied clean">{"201"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Stay" data-w2="">
                          {"7 Oct → 12 Oct"}
                          <span className="fd-sub">{"5 nights"}</span>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹40,446.00"}</td>
                        <td className="dt__td nw" data-label="Invoice" data-w2="">{"INV/26-27/003788"}</td>
                        <td className="dt__td" data-label="Status" data-w2="" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#lock" />
                            </svg>
                            {"Closed"}
                          </span>
                          <span className="pill pill--occupied">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#receipt" />
                            </svg>
                            {"Credit noted"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <div className="fo-act">
                            <a className="btn btn--ghost" href="#f-FK-10090" aria-label="View the folio (read-only)" title="View the folio (read-only)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#eye" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10090" data-leads-to="FD-O03" aria-label="Reprint invoice / bill (FD-O03)" title="Reprint invoice / bill (FD-O03)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10090" data-leads-to="FD-P27" aria-label="Credit note (FD-P27)" title="Credit note (FD-P27)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#file-minus" />
                              </svg>
                            </a>
                            <span className="fd-muted" title="Re-open is possible on the same business day only">{"Re-open: same day only"}</span>
                          </div>
                        </td>
                      </tr>
                      <tr style={{"--k0": "26", "--k1": "7", "--k2": "14", "--k3": "10", "--k4": "21", "--k5": "23", "--k6": "1"}}>
                        <td className="dt__td nw" data-label="Folio no." data-w2="" data-t="">
                          <strong>{"FL-26-10079"}</strong>
                          <span className="fd-sub">{"closed 12 Oct"}</span>
                        </td>
                        <td className="dt__td" data-label="Guest" data-w2="">
                          <a className="fd-link" href="#f-FK-10079">
                            <strong>{"Ms Claire Dubois"}</strong>
                          </a>
                          <span className="fd-sub">{"FK-10079"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Room">
                          <span className="fd-rm fd-rm--OOO" title="Out of order">{"214"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Stay" data-w2="">
                          {"8 Oct → 12 Oct"}
                          <span className="fd-sub">{"4 nights"}</span>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹34,652.00"}</td>
                        <td className="dt__td nw" data-label="Invoice" data-w2="">{"INV/26-27/003787"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#lock" />
                            </svg>
                            {"Closed"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <div className="fo-act">
                            <a className="btn btn--ghost" href="#f-FK-10079" aria-label="View the folio (read-only)" title="View the folio (read-only)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#eye" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10079" data-leads-to="FD-O03" aria-label="Reprint invoice / bill (FD-O03)" title="Reprint invoice / bill (FD-O03)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10079" data-leads-to="FD-P27" aria-label="Credit note (FD-P27)" title="Credit note (FD-P27)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#file-minus" />
                              </svg>
                            </a>
                            <span className="fd-muted" title="Re-open is possible on the same business day only">{"Re-open: same day only"}</span>
                          </div>
                        </td>
                      </tr>
                      <tr style={{"--k0": "2", "--k1": "33", "--k2": "11", "--k3": "11", "--k4": "1", "--k5": "22", "--k6": "1"}}>
                        <td className="dt__td nw" data-label="Folio no." data-w2="" data-t="">
                          <strong>{"FL-26-10007"}</strong>
                          <span className="fd-sub">{"closed 12 Oct"}</span>
                        </td>
                        <td className="dt__td" data-label="Guest" data-w2="">
                          <a className="fd-link" href="#f-FK-10007">
                            <strong>{"Mr Unni Rahman"}</strong>
                          </a>
                          <span className="fd-sub">{"FK-10007"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Room">
                          <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"204"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Stay" data-w2="">
                          {"11 Oct → 12 Oct"}
                          <span className="fd-sub">{"1 night"}</span>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹7,139.00"}</td>
                        <td className="dt__td nw" data-label="Invoice" data-w2="">{"INV/26-27/003786"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#lock" />
                            </svg>
                            {"Closed"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <div className="fo-act">
                            <a className="btn btn--ghost" href="#f-FK-10007" aria-label="View the folio (read-only)" title="View the folio (read-only)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#eye" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10007" data-leads-to="FD-O03" aria-label="Reprint invoice / bill (FD-O03)" title="Reprint invoice / bill (FD-O03)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10007" data-leads-to="FD-P27" aria-label="Credit note (FD-P27)" title="Credit note (FD-P27)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#file-minus" />
                              </svg>
                            </a>
                            <span className="fd-muted" title="Re-open is possible on the same business day only">{"Re-open: same day only"}</span>
                          </div>
                        </td>
                      </tr>
                      <tr style={{"--k0": "31", "--k1": "20", "--k2": "19", "--k3": "9", "--k4": "3", "--k5": "21", "--k6": "1"}}>
                        <td className="dt__td nw" data-label="Folio no." data-w2="" data-t="">
                          <strong>{"FL-26-10099"}</strong>
                          <span className="fd-sub">{"closed 9 Oct"}</span>
                        </td>
                        <td className="dt__td" data-label="Guest">
                          <a className="fd-link" href="#f-FK-10099">
                            <strong>{"Mr Naveen Gautam"}</strong>
                          </a>
                          <span className="fd-sub">{"FK-10099 · Global Pathways DMC"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Room">
                          <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"312"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Stay" data-w2="">
                          {"7 Oct → 9 Oct"}
                          <span className="fd-sub">{"2 nights"}</span>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹16,370.00"}</td>
                        <td className="dt__td nw" data-label="Invoice" data-w2="">{"INV/26-27/003785"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#lock" />
                            </svg>
                            {"Closed"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <div className="fo-act">
                            <a className="btn btn--ghost" href="#f-FK-10099" aria-label="View the folio (read-only)" title="View the folio (read-only)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#eye" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10099" data-leads-to="FD-O03" aria-label="Reprint invoice / bill (FD-O03)" title="Reprint invoice / bill (FD-O03)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10099" data-leads-to="FD-P27" aria-label="Credit note (FD-P27)" title="Credit note (FD-P27)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#file-minus" />
                              </svg>
                            </a>
                            <span className="fd-muted" title="Re-open is possible on the same business day only">{"Re-open: same day only"}</span>
                          </div>
                        </td>
                      </tr>
                      <tr style={{"--k0": "28", "--k1": "12", "--k2": "15", "--k3": "8", "--k4": "22", "--k5": "20", "--k6": "1"}}>
                        <td className="dt__td nw" data-label="Folio no." data-w2="" data-t="">
                          <strong>{"FL-26-10083"}</strong>
                          <span className="fd-sub">{"closed 9 Oct"}</span>
                        </td>
                        <td className="dt__td" data-label="Guest">
                          <a className="fd-link" href="#f-FK-10083">
                            <strong>{"Mrs Isha Kunal"}</strong>
                          </a>
                          <span className="fd-sub">{"FK-10083"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Room">
                          <span className="fd-rm fd-rm--OC" title="Occupied clean">{"216"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Stay" data-w2="">
                          {"5 Oct → 9 Oct"}
                          <span className="fd-sub">{"4 nights"}</span>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹35,868.00"}</td>
                        <td className="dt__td nw" data-label="Invoice" data-w2="">{"INV/26-27/003784"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#lock" />
                            </svg>
                            {"Closed"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <div className="fo-act">
                            <a className="btn btn--ghost" href="#f-FK-10083" aria-label="View the folio (read-only)" title="View the folio (read-only)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#eye" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10083" data-leads-to="FD-O03" aria-label="Reprint invoice / bill (FD-O03)" title="Reprint invoice / bill (FD-O03)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10083" data-leads-to="FD-P27" aria-label="Credit note (FD-P27)" title="Credit note (FD-P27)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#file-minus" />
                              </svg>
                            </a>
                            <span className="fd-muted" title="Re-open is possible on the same business day only">{"Re-open: same day only"}</span>
                          </div>
                        </td>
                      </tr>
                      <tr style={{"--k0": "6", "--k1": "13", "--k2": "2", "--k3": "8", "--k4": "15", "--k5": "19", "--k6": "1"}}>
                        <td className="dt__td nw" data-label="Folio no." data-w2="" data-t="">
                          <strong>{"FL-26-10019"}</strong>
                          <span className="fd-sub">{"closed 9 Oct"}</span>
                        </td>
                        <td className="dt__td" data-label="Guest" data-w2="">
                          <a className="fd-link" href="#f-FK-10019">
                            <strong>{"Ms Isha Neil"}</strong>
                          </a>
                          <span className="fd-sub">{"FK-10019"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Room">
                          <span className="fd-rm fd-rm--OC" title="Occupied clean">{"103"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Stay" data-w2="">
                          {"5 Oct → 9 Oct"}
                          <span className="fd-sub">{"4 nights"}</span>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹31,076.00"}</td>
                        <td className="dt__td nw" data-label="Invoice" data-w2="">{"INV/26-27/003783"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#lock" />
                            </svg>
                            {"Closed"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <div className="fo-act">
                            <a className="btn btn--ghost" href="#f-FK-10019" aria-label="View the folio (read-only)" title="View the folio (read-only)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#eye" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10019" data-leads-to="FD-O03" aria-label="Reprint invoice / bill (FD-O03)" title="Reprint invoice / bill (FD-O03)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10019" data-leads-to="FD-P27" aria-label="Credit note (FD-P27)" title="Credit note (FD-P27)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#file-minus" />
                              </svg>
                            </a>
                            <span className="fd-muted" title="Re-open is possible on the same business day only">{"Re-open: same day only"}</span>
                          </div>
                        </td>
                      </tr>
                      <tr style={{"--k0": "30", "--k1": "27", "--k2": "16", "--k3": "7", "--k4": "30", "--k5": "18", "--k6": "1"}}>
                        <td className="dt__td nw" data-label="Folio no." data-w2="" data-t="">
                          <strong>{"FL-26-10092"}</strong>
                          <span className="fd-sub">{"closed 8 Oct"}</span>
                        </td>
                        <td className="dt__td" data-label="Guest" data-w2="">
                          <a className="fd-link" href="#f-FK-10092">
                            <strong>{"Mr Rohit Neil"}</strong>
                          </a>
                          <span className="fd-sub">{"FK-10092"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Room">
                          <span className="fd-rm fd-rm--OC" title="Occupied clean">{"219"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Stay" data-w2="">
                          {"4 Oct → 8 Oct"}
                          <span className="fd-sub">{"4 nights"}</span>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹50,962.00"}</td>
                        <td className="dt__td nw" data-label="Invoice" data-w2="">{"INV/26-27/003782"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#lock" />
                            </svg>
                            {"Closed"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <div className="fo-act">
                            <a className="btn btn--ghost" href="#f-FK-10092" aria-label="View the folio (read-only)" title="View the folio (read-only)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#eye" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10092" data-leads-to="FD-O03" aria-label="Reprint invoice / bill (FD-O03)" title="Reprint invoice / bill (FD-O03)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10092" data-leads-to="FD-P27" aria-label="Credit note (FD-P27)" title="Credit note (FD-P27)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#file-minus" />
                              </svg>
                            </a>
                            <span className="fd-muted" title="Re-open is possible on the same business day only">{"Re-open: same day only"}</span>
                          </div>
                        </td>
                      </tr>
                      <tr style={{"--k0": "18", "--k1": "19", "--k2": "12", "--k3": "6", "--k4": "26", "--k5": "17", "--k6": "1"}}>
                        <td className="dt__td nw" data-label="Folio no." data-w2="" data-t="">
                          <strong>{"FL-26-10066"}</strong>
                          <span className="fd-sub">{"closed 8 Oct"}</span>
                        </td>
                        <td className="dt__td" data-label="Guest" data-w2="">
                          <a className="fd-link" href="#f-FK-10066">
                            <strong>{"Mr Marco Rossi"}</strong>
                          </a>
                          <span className="fd-sub">{"FK-10066"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Room">
                          <span className="fd-rm fd-rm--OC" title="Occupied clean">{"208"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Stay" data-w2="">
                          {"3 Oct → 8 Oct"}
                          <span className="fd-sub">{"5 nights"}</span>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹40,633.00"}</td>
                        <td className="dt__td nw" data-label="Invoice" data-w2="">{"INV/26-27/003781"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#lock" />
                            </svg>
                            {"Closed"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <div className="fo-act">
                            <a className="btn btn--ghost" href="#f-FK-10066" aria-label="View the folio (read-only)" title="View the folio (read-only)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#eye" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10066" data-leads-to="FD-O03" aria-label="Reprint invoice / bill (FD-O03)" title="Reprint invoice / bill (FD-O03)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10066" data-leads-to="FD-P27" aria-label="Credit note (FD-P27)" title="Credit note (FD-P27)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#file-minus" />
                              </svg>
                            </a>
                            <span className="fd-muted" title="Re-open is possible on the same business day only">{"Re-open: same day only"}</span>
                          </div>
                        </td>
                      </tr>
                      <tr style={{"--k0": "11", "--k1": "14", "--k2": "7", "--k3": "6", "--k4": "19", "--k5": "16", "--k6": "1"}}>
                        <td className="dt__td nw" data-label="Folio no." data-w2="" data-t="">
                          <strong>{"FL-26-10044"}</strong>
                          <span className="fd-sub">{"closed 7 Oct"}</span>
                        </td>
                        <td className="dt__td" data-label="Guest" data-w2="">
                          <a className="fd-link" href="#f-FK-10044">
                            <strong>{"Mr Jayan Rahman"}</strong>
                          </a>
                          <span className="fd-sub">{"FK-10044"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Room">
                          <span className="fd-rm fd-rm--OC" title="Occupied clean">{"112"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Stay" data-w2="">
                          {"3 Oct → 7 Oct"}
                          <span className="fd-sub">{"4 nights"}</span>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹33,911.00"}</td>
                        <td className="dt__td nw" data-label="Invoice" data-w2="">{"INV/26-27/003780"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#lock" />
                            </svg>
                            {"Closed"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <div className="fo-act">
                            <a className="btn btn--ghost" href="#f-FK-10044" aria-label="View the folio (read-only)" title="View the folio (read-only)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#eye" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10044" data-leads-to="FD-O03" aria-label="Reprint invoice / bill (FD-O03)" title="Reprint invoice / bill (FD-O03)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10044" data-leads-to="FD-P27" aria-label="Credit note (FD-P27)" title="Credit note (FD-P27)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#file-minus" />
                              </svg>
                            </a>
                            <span className="fd-muted" title="Re-open is possible on the same business day only">{"Re-open: same day only"}</span>
                          </div>
                        </td>
                      </tr>
                      <tr style={{"--k0": "9", "--k1": "34", "--k2": "30", "--k3": "6", "--k4": "35", "--k5": "15", "--k6": "1"}}>
                        <td className="dt__td nw" data-label="Folio no." data-w2="" data-t="">
                          <strong>{"FL-26-10036"}</strong>
                          <span className="fd-sub">{"closed 7 Oct"}</span>
                        </td>
                        <td className="dt__td" data-label="Guest" data-w2="">
                          <a className="fd-link" href="#f-FK-10036">
                            <strong>{"Mr Unni Wilson"}</strong>
                          </a>
                          <span className="fd-sub">{"FK-10036"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Room">
                          <span className="fd-rm fd-rm--OC" title="Occupied clean">{"517"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Stay" data-w2="">
                          {"3 Oct → 7 Oct"}
                          <span className="fd-sub">{"4 nights"}</span>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹1,16,111.00"}</td>
                        <td className="dt__td nw" data-label="Invoice" data-w2="">{"INV/26-27/003779"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#lock" />
                            </svg>
                            {"Closed"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <div className="fo-act">
                            <a className="btn btn--ghost" href="#f-FK-10036" aria-label="View the folio (read-only)" title="View the folio (read-only)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#eye" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10036" data-leads-to="FD-O03" aria-label="Reprint invoice / bill (FD-O03)" title="Reprint invoice / bill (FD-O03)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10036" data-leads-to="FD-P27" aria-label="Credit note (FD-P27)" title="Credit note (FD-P27)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#file-minus" />
                              </svg>
                            </a>
                            <span className="fd-muted" title="Re-open is possible on the same business day only">{"Re-open: same day only"}</span>
                          </div>
                        </td>
                      </tr>
                      <tr style={{"--k0": "19", "--k1": "26", "--k2": "5", "--k3": "6", "--k4": "34", "--k5": "14", "--k6": "1"}}>
                        <td className="dt__td nw" data-label="Folio no." data-w2="" data-t="">
                          <strong>{"FL-26-10068"}</strong>
                          <span className="fd-sub">{"closed 6 Oct"}</span>
                        </td>
                        <td className="dt__td" data-label="Guest" data-w2="">
                          <a className="fd-link" href="#f-FK-10068">
                            <strong>{"Ms Remya Kurian"}</strong>
                          </a>
                          <span className="fd-sub">{"FK-10068"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Room" data-w2="">
                          <span className="fd-rms" title="Rooms 110, 313, 502">
                            <span className="fd-rm fd-rm--OD" title="Occupied dirty">{"110"}</span>
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"313"}</span>
                            <span className="fd-rm fd-rm--VD" title="Vacant dirty">{"502"}</span>
                          </span>
                        </td>
                        <td className="dt__td nw" data-label="Stay" data-w2="">
                          {"3 Oct → 6 Oct"}
                          <span className="fd-sub">{"3 nights"}</span>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹97,693.00"}</td>
                        <td className="dt__td nw" data-label="Invoice" data-w2="">{"INV/26-27/003778"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#lock" />
                            </svg>
                            {"Closed"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <div className="fo-act">
                            <a className="btn btn--ghost" href="#f-FK-10068" aria-label="View the folio (read-only)" title="View the folio (read-only)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#eye" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10068" data-leads-to="FD-O03" aria-label="Reprint invoice / bill (FD-O03)" title="Reprint invoice / bill (FD-O03)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10068" data-leads-to="FD-P27" aria-label="Credit note (FD-P27)" title="Credit note (FD-P27)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#file-minus" />
                              </svg>
                            </a>
                            <span className="fd-muted" title="Re-open is possible on the same business day only">{"Re-open: same day only"}</span>
                          </div>
                        </td>
                      </tr>
                      <tr style={{"--k0": "15", "--k1": "22", "--k2": "3", "--k3": "6", "--k4": "28", "--k5": "13", "--k6": "1"}}>
                        <td className="dt__td nw" data-label="Folio no." data-w2="" data-t="">
                          <strong>{"FL-26-10055"}</strong>
                          <span className="fd-sub">{"closed 6 Oct"}</span>
                        </td>
                        <td className="dt__td" data-label="Guest" data-w2="">
                          <a className="fd-link" href="#f-FK-10055">
                            <strong>{"Dr Neethu Nathan"}</strong>
                          </a>
                          <span className="fd-sub">{"FK-10055"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Room">
                          <span className="fd-rm fd-rm--OC" title="Occupied clean">{"108"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Stay" data-w2="">
                          {"3 Oct → 6 Oct"}
                          <span className="fd-sub">{"3 nights"}</span>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹43,892.00"}</td>
                        <td className="dt__td nw" data-label="Invoice" data-w2="">{"INV/26-27/003777"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#lock" />
                            </svg>
                            {"Closed"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <div className="fo-act">
                            <a className="btn btn--ghost" href="#f-FK-10055" aria-label="View the folio (read-only)" title="View the folio (read-only)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#eye" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10055" data-leads-to="FD-O03" aria-label="Reprint invoice / bill (FD-O03)" title="Reprint invoice / bill (FD-O03)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10055" data-leads-to="FD-P27" aria-label="Credit note (FD-P27)" title="Credit note (FD-P27)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#file-minus" />
                              </svg>
                            </a>
                            <span className="fd-muted" title="Re-open is possible on the same business day only">{"Re-open: same day only"}</span>
                          </div>
                        </td>
                      </tr>
                      <tr style={{"--k0": "16", "--k1": "5", "--k2": "4", "--k3": "5", "--k4": "18", "--k5": "12", "--k6": "1"}}>
                        <td className="dt__td nw" data-label="Folio no." data-w2="" data-t="">
                          <strong>{"FL-26-10063"}</strong>
                          <span className="fd-sub">{"closed 5 Oct"}</span>
                        </td>
                        <td className="dt__td" data-label="Guest" data-w2="">
                          <a className="fd-link" href="#f-FK-10063">
                            <strong>{"Mr Arun Krish"}</strong>
                          </a>
                          <span className="fd-sub">{"FK-10063"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Room">
                          <span className="fd-rm fd-rm--OC" title="Occupied clean">{"109"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Stay" data-w2="">
                          {"1 Oct → 5 Oct"}
                          <span className="fd-sub">{"4 nights"}</span>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹33,807.00"}</td>
                        <td className="dt__td nw" data-label="Invoice" data-w2="">{"INV/26-27/003776"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#lock" />
                            </svg>
                            {"Closed"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <div className="fo-act">
                            <a className="btn btn--ghost" href="#f-FK-10063" aria-label="View the folio (read-only)" title="View the folio (read-only)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#eye" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10063" data-leads-to="FD-O03" aria-label="Reprint invoice / bill (FD-O03)" title="Reprint invoice / bill (FD-O03)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10063" data-leads-to="FD-P27" aria-label="Credit note (FD-P27)" title="Credit note (FD-P27)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#file-minus" />
                              </svg>
                            </a>
                            <span className="fd-muted" title="Re-open is possible on the same business day only">{"Re-open: same day only"}</span>
                          </div>
                        </td>
                      </tr>
                      <tr style={{"--k0": "14", "--k1": "10", "--k2": "21", "--k3": "5", "--k4": "17", "--k5": "11", "--k6": "1"}}>
                        <td className="dt__td nw" data-label="Folio no." data-w2="" data-t="">
                          <strong>{"FL-26-10053"}</strong>
                          <span className="fd-sub">{"closed 5 Oct"}</span>
                        </td>
                        <td className="dt__td" data-label="Guest">
                          <a className="fd-link" href="#f-FK-10053">
                            <strong>{"Mr Hans Mueller"}</strong>
                          </a>
                          <span className="fd-sub">{"FK-10053 · Heritage Routes Travel"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Room">
                          <span className="fd-rm fd-rm--OC" title="Occupied clean">{"318"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Stay" data-w2="">
                          {"1 Oct → 5 Oct"}
                          <span className="fd-sub">{"4 nights"}</span>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹32,630.00"}</td>
                        <td className="dt__td nw" data-label="Invoice" data-w2="">{"INV/26-27/003775"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#lock" />
                            </svg>
                            {"Closed"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <div className="fo-act">
                            <a className="btn btn--ghost" href="#f-FK-10053" aria-label="View the folio (read-only)" title="View the folio (read-only)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#eye" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10053" data-leads-to="FD-O03" aria-label="Reprint invoice / bill (FD-O03)" title="Reprint invoice / bill (FD-O03)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10053" data-leads-to="FD-P27" aria-label="Credit note (FD-P27)" title="Credit note (FD-P27)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#file-minus" />
                              </svg>
                            </a>
                            <span className="fd-muted" title="Re-open is possible on the same business day only">{"Re-open: same day only"}</span>
                          </div>
                        </td>
                      </tr>
                      <tr style={{"--k0": "7", "--k1": "17", "--k2": "18", "--k3": "6", "--k4": "8", "--k5": "10", "--k6": "1"}}>
                        <td className="dt__td nw" data-label="Folio no." data-w2="" data-t="">
                          <strong>{"FL-26-10024"}</strong>
                          <span className="fd-sub">{"closed 5 Oct"}</span>
                        </td>
                        <td className="dt__td" data-label="Guest">
                          <a className="fd-link" href="#f-FK-10024">
                            <strong>{"Mrs Kavita Ranjan"}</strong>
                          </a>
                          <span className="fd-sub">{"FK-10024 · Malabar Spice Exports Pvt Ltd"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Room">
                          <span className="fd-rm fd-rm--VD" title="Vacant dirty">{"308"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Stay" data-w2="">
                          {"3 Oct → 5 Oct"}
                          <span className="fd-sub">{"2 nights"}</span>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹18,450.00"}</td>
                        <td className="dt__td nw" data-label="Invoice" data-w2="">{"INV/26-27/003774"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#lock" />
                            </svg>
                            {"Closed"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <div className="fo-act">
                            <a className="btn btn--ghost" href="#f-FK-10024" aria-label="View the folio (read-only)" title="View the folio (read-only)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#eye" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10024" data-leads-to="FD-O03" aria-label="Reprint invoice / bill (FD-O03)" title="Reprint invoice / bill (FD-O03)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10024" data-leads-to="FD-P27" aria-label="Credit note (FD-P27)" title="Credit note (FD-P27)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#file-minus" />
                              </svg>
                            </a>
                            <span className="fd-muted" title="Re-open is possible on the same business day only">{"Re-open: same day only"}</span>
                          </div>
                        </td>
                      </tr>
                      <tr style={{"--k0": "27", "--k1": "25", "--k2": "6", "--k3": "5", "--k4": "10", "--k5": "9", "--k6": "1"}}>
                        <td className="dt__td nw" data-label="Folio no." data-w2="" data-t="">
                          <strong>{"FL-26-10081"}</strong>
                          <span className="fd-sub">{"closed 4 Oct"}</span>
                        </td>
                        <td className="dt__td" data-label="Guest" data-w2="">
                          <a className="fd-link" href="#f-FK-10081">
                            <strong>{"Mr Ravi Ranjan"}</strong>
                          </a>
                          <span className="fd-sub">{"FK-10081"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Room">
                          <span className="fd-rm fd-rm--VD" title="Vacant dirty">{"111"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Stay" data-w2="">
                          {"1 Oct → 4 Oct"}
                          <span className="fd-sub">{"3 nights"}</span>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹26,877.00"}</td>
                        <td className="dt__td nw" data-label="Invoice" data-w2="">{"INV/26-27/003773"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#lock" />
                            </svg>
                            {"Closed"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <div className="fo-act">
                            <a className="btn btn--ghost" href="#f-FK-10081" aria-label="View the folio (read-only)" title="View the folio (read-only)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#eye" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10081" data-leads-to="FD-O03" aria-label="Reprint invoice / bill (FD-O03)" title="Reprint invoice / bill (FD-O03)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10081" data-leads-to="FD-P27" aria-label="Credit note (FD-P27)" title="Credit note (FD-P27)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#file-minus" />
                              </svg>
                            </a>
                            <span className="fd-muted" title="Re-open is possible on the same business day only">{"Re-open: same day only"}</span>
                          </div>
                        </td>
                      </tr>
                      <tr style={{"--k0": "24", "--k1": "35", "--k2": "9", "--k3": "4", "--k4": "23", "--k5": "8", "--k6": "1"}}>
                        <td className="dt__td nw" data-label="Folio no." data-w2="" data-t="">
                          <strong>{"FL-26-10077"}</strong>
                          <span className="fd-sub">{"closed 4 Oct"}</span>
                        </td>
                        <td className="dt__td" data-label="Guest" data-w2="">
                          <a className="fd-link" href="#f-FK-10077">
                            <strong>{"Mr Vikas Harsh"}</strong>
                          </a>
                          <span className="fd-sub">{"FK-10077"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Room">
                          <span className="fd-rm fd-rm--OC" title="Occupied clean">{"119"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Stay" data-w2="">
                          {"30 Sep → 4 Oct"}
                          <span className="fd-sub">{"4 nights"}</span>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹37,343.00"}</td>
                        <td className="dt__td nw" data-label="Invoice" data-w2="">{"INV/26-27/003772"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#lock" />
                            </svg>
                            {"Closed"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <div className="fo-act">
                            <a className="btn btn--ghost" href="#f-FK-10077" aria-label="View the folio (read-only)" title="View the folio (read-only)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#eye" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10077" data-leads-to="FD-O03" aria-label="Reprint invoice / bill (FD-O03)" title="Reprint invoice / bill (FD-O03)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10077" data-leads-to="FD-P27" aria-label="Credit note (FD-P27)" title="Credit note (FD-P27)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#file-minus" />
                              </svg>
                            </a>
                            <span className="fd-muted" title="Re-open is possible on the same business day only">{"Re-open: same day only"}</span>
                          </div>
                        </td>
                      </tr>
                      <tr style={{"--k0": "23", "--k1": "21", "--k2": "25", "--k3": "3", "--k4": "33", "--k5": "7", "--k6": "1"}}>
                        <td className="dt__td nw" data-label="Folio no." data-w2="" data-t="">
                          <strong>{"FL-26-10075"}</strong>
                          <span className="fd-sub">{"closed 4 Oct"}</span>
                        </td>
                        <td className="dt__td" data-label="Guest" data-w2="">
                          <a className="fd-link" href="#f-FK-10075">
                            <strong>{"Ms Neethu Krish"}</strong>
                          </a>
                          <span className="fd-sub">{"FK-10075"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Room">
                          <span className="fd-rm fd-rm--OC" title="Occupied clean">{"416"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Stay" data-w2="">
                          {"29 Sep → 4 Oct"}
                          <span className="fd-sub">{"5 nights"}</span>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹70,051.00"}</td>
                        <td className="dt__td nw" data-label="Invoice" data-w2="">{"INV/26-27/003771"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#lock" />
                            </svg>
                            {"Closed"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <div className="fo-act">
                            <a className="btn btn--ghost" href="#f-FK-10075" aria-label="View the folio (read-only)" title="View the folio (read-only)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#eye" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10075" data-leads-to="FD-O03" aria-label="Reprint invoice / bill (FD-O03)" title="Reprint invoice / bill (FD-O03)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10075" data-leads-to="FD-P27" aria-label="Credit note (FD-P27)" title="Credit note (FD-P27)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#file-minus" />
                              </svg>
                            </a>
                            <span className="fd-muted" title="Re-open is possible on the same business day only">{"Re-open: same day only"}</span>
                          </div>
                        </td>
                      </tr>
                      <tr style={{"--k0": "21", "--k1": "2", "--k2": "16", "--k3": "3", "--k4": "14", "--k5": "6", "--k6": "1"}}>
                        <td className="dt__td nw" data-label="Folio no." data-w2="" data-t="">
                          <strong>{"FL-26-10071"}</strong>
                          <span className="fd-sub">{"closed 3 Oct"}</span>
                        </td>
                        <td className="dt__td" data-label="Guest">
                          <a className="fd-link" href="#f-FK-10071">
                            <strong>{"Dr Anjali Mathew"}</strong>
                          </a>
                          <span className="fd-sub">{"FK-10071 · Deccan Capital Advisors"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Room">
                          <span className="fd-rm fd-rm--OC" title="Occupied clean">{"219"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Stay" data-w2="">
                          {"29 Sep → 3 Oct"}
                          <span className="fd-sub">{"4 nights"}</span>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹29,092.00"}</td>
                        <td className="dt__td nw" data-label="Invoice" data-w2="">{"INV/26-27/003770"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#lock" />
                            </svg>
                            {"Closed"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <div className="fo-act">
                            <a className="btn btn--ghost" href="#f-FK-10071" aria-label="View the folio (read-only)" title="View the folio (read-only)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#eye" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10071" data-leads-to="FD-O03" aria-label="Reprint invoice / bill (FD-O03)" title="Reprint invoice / bill (FD-O03)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10071" data-leads-to="FD-P27" aria-label="Credit note (FD-P27)" title="Credit note (FD-P27)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#file-minus" />
                              </svg>
                            </a>
                            <span className="fd-muted" title="Re-open is possible on the same business day only">{"Re-open: same day only"}</span>
                          </div>
                        </td>
                      </tr>
                      <tr style={{"--k0": "10", "--k1": "32", "--k2": "8", "--k3": "4", "--k4": "5", "--k5": "5", "--k6": "1"}}>
                        <td className="dt__td nw" data-label="Folio no." data-w2="" data-t="">
                          <strong>{"FL-26-10038"}</strong>
                          <span className="fd-sub">{"closed 2 Oct"}</span>
                        </td>
                        <td className="dt__td" data-label="Guest">
                          <a className="fd-link" href="#f-FK-10038">
                            <strong>{"Mr Srinivas Siddharth"}</strong>
                          </a>
                          <span className="fd-sub">{"FK-10038"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Room">
                          <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"117"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Stay" data-w2="">
                          {"30 Sep → 2 Oct"}
                          <span className="fd-sub">{"2 nights"}</span>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹16,578.00"}</td>
                        <td className="dt__td nw" data-label="Invoice" data-w2="">{"INV/26-27/003769"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#lock" />
                            </svg>
                            {"Closed"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <div className="fo-act">
                            <a className="btn btn--ghost" href="#f-FK-10038" aria-label="View the folio (read-only)" title="View the folio (read-only)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#eye" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10038" data-leads-to="FD-O03" aria-label="Reprint invoice / bill (FD-O03)" title="Reprint invoice / bill (FD-O03)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10038" data-leads-to="FD-P27" aria-label="Credit note (FD-P27)" title="Credit note (FD-P27)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#file-minus" />
                              </svg>
                            </a>
                            <span className="fd-muted" title="Re-open is possible on the same business day only">{"Re-open: same day only"}</span>
                          </div>
                        </td>
                      </tr>
                      <tr style={{"--k0": "8", "--k1": "6", "--k2": "28", "--k3": "4", "--k4": "6", "--k5": "4", "--k6": "1"}}>
                        <td className="dt__td nw" data-label="Folio no." data-w2="" data-t="">
                          <strong>{"FL-26-10026"}</strong>
                          <span className="fd-sub">{"closed 2 Oct"}</span>
                        </td>
                        <td className="dt__td" data-label="Guest" data-w2="">
                          <a className="fd-link" href="#f-FK-10026">
                            <strong>{"Dr Claire Dubois"}</strong>
                          </a>
                          <span className="fd-sub">{"FK-10026"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Room">
                          <span className="fd-rm fd-rm--OC" title="Occupied clean">{"511"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Stay" data-w2="">
                          {"30 Sep → 2 Oct"}
                          <span className="fd-sub">{"2 nights"}</span>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹17,588.00"}</td>
                        <td className="dt__td nw" data-label="Invoice" data-w2="">{"INV/26-27/003768"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#lock" />
                            </svg>
                            {"Closed"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <div className="fo-act">
                            <a className="btn btn--ghost" href="#f-FK-10026" aria-label="View the folio (read-only)" title="View the folio (read-only)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#eye" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10026" data-leads-to="FD-O03" aria-label="Reprint invoice / bill (FD-O03)" title="Reprint invoice / bill (FD-O03)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10026" data-leads-to="FD-P27" aria-label="Credit note (FD-P27)" title="Credit note (FD-P27)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#file-minus" />
                              </svg>
                            </a>
                            <span className="fd-muted" title="Re-open is possible on the same business day only">{"Re-open: same day only"}</span>
                          </div>
                        </td>
                      </tr>
                      <tr style={{"--k0": "25", "--k1": "11", "--k2": "17", "--k3": "2", "--k4": "13", "--k5": "3", "--k6": "1"}}>
                        <td className="dt__td nw" data-label="Folio no." data-w2="" data-t="">
                          <strong>{"FL-26-10078"}</strong>
                          <span className="fd-sub">{"closed 1 Oct"}</span>
                        </td>
                        <td className="dt__td" data-label="Guest">
                          <a className="fd-link" href="#f-FK-10078">
                            <strong>{"Mr Harikrishnan Rahman"}</strong>
                          </a>
                          <span className="fd-sub">{"FK-10078"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Room">
                          <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"302"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Stay" data-w2="">
                          {"28 Sep → 1 Oct"}
                          <span className="fd-sub">{"3 nights"}</span>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹28,822.00"}</td>
                        <td className="dt__td nw" data-label="Invoice" data-w2="">{"INV/26-27/003767"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#lock" />
                            </svg>
                            {"Closed"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <div className="fo-act">
                            <a className="btn btn--ghost" href="#f-FK-10078" aria-label="View the folio (read-only)" title="View the folio (read-only)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#eye" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10078" data-leads-to="FD-O03" aria-label="Reprint invoice / bill (FD-O03)" title="Reprint invoice / bill (FD-O03)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10078" data-leads-to="FD-P27" aria-label="Credit note (FD-P27)" title="Credit note (FD-P27)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#file-minus" />
                              </svg>
                            </a>
                            <span className="fd-muted" title="Re-open is possible on the same business day only">{"Re-open: same day only"}</span>
                          </div>
                        </td>
                      </tr>
                      <tr style={{"--k0": "22", "--k1": "23", "--k2": "26", "--k3": "2", "--k4": "7", "--k5": "2", "--k6": "1"}}>
                        <td className="dt__td nw" data-label="Folio no." data-w2="" data-t="">
                          <strong>{"FL-26-10072"}</strong>
                          <span className="fd-sub">{"closed 1 Oct"}</span>
                        </td>
                        <td className="dt__td" data-label="Guest">
                          <a className="fd-link" href="#f-FK-10072">
                            <strong>{"Mrs Neha Pavan"}</strong>
                          </a>
                          <span className="fd-sub">{"FK-10072 · Spice Route Hospitality Consultants"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Room">
                          <span className="fd-rm fd-rm--OC" title="Occupied clean">{"501"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Stay" data-w2="">
                          {"28 Sep → 1 Oct"}
                          <span className="fd-sub">{"3 nights"}</span>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹18,292.00"}</td>
                        <td className="dt__td nw" data-label="Invoice" data-w2="">{"INV/26-27/003766"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#lock" />
                            </svg>
                            {"Closed"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <div className="fo-act">
                            <a className="btn btn--ghost" href="#f-FK-10072" aria-label="View the folio (read-only)" title="View the folio (read-only)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#eye" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10072" data-leads-to="FD-O03" aria-label="Reprint invoice / bill (FD-O03)" title="Reprint invoice / bill (FD-O03)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10072" data-leads-to="FD-P27" aria-label="Credit note (FD-P27)" title="Credit note (FD-P27)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#file-minus" />
                              </svg>
                            </a>
                            <span className="fd-muted" title="Re-open is possible on the same business day only">{"Re-open: same day only"}</span>
                          </div>
                        </td>
                      </tr>
                      <tr style={{"--k0": "13", "--k1": "4", "--k2": "23", "--k3": "1", "--k4": "11", "--k5": "1", "--k6": "1"}}>
                        <td className="dt__td nw" data-label="Folio no." data-w2="" data-t="">
                          <strong>{"FL-26-10052"}</strong>
                          <span className="fd-sub">{"closed 1 Oct"}</span>
                        </td>
                        <td className="dt__td" data-label="Guest">
                          <a className="fd-link" href="#f-FK-10052">
                            <strong>{"Mr Arjun Varghese"}</strong>
                          </a>
                          <span className="fd-sub">{"FK-10052"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Room">
                          <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"411"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Stay" data-w2="">
                          {"27 Sep → 1 Oct"}
                          <span className="fd-sub">{"4 nights"}</span>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹27,212.00"}</td>
                        <td className="dt__td nw" data-label="Invoice" data-w2="">{"INV/26-27/003765"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#lock" />
                            </svg>
                            {"Closed"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <div className="fo-act">
                            <a className="btn btn--ghost" href="#f-FK-10052" aria-label="View the folio (read-only)" title="View the folio (read-only)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#eye" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10052" data-leads-to="FD-O03" aria-label="Reprint invoice / bill (FD-O03)" title="Reprint invoice / bill (FD-O03)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                            </a>
                            <a className="btn btn--ghost" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10052" data-leads-to="FD-P27" aria-label="Credit note (FD-P27)" title="Credit note (FD-P27)">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#file-minus" />
                              </svg>
                            </a>
                            <span className="fd-muted" title="Re-open is possible on the same business day only">{"Re-open: same day only"}</span>
                          </div>
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
                    <span className="pg-info">
                      <span>
                        {"Showing "}
                        <b>{"1–10"}</b>
                        {" of 35"}
                      </span>
                      <span>
                        {"Showing "}
                        <b>{"11–20"}</b>
                        {" of 35"}
                      </span>
                      <span>
                        {"Showing "}
                        <b>{"21–30"}</b>
                        {" of 35"}
                      </span>
                      <span>
                        {"Showing "}
                        <b>{"31–35"}</b>
                        {" of 35"}
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
                    <span className="pg-info">
                      <span>
                        {"Showing "}
                        <b>{"1–15"}</b>
                        {" of 35"}
                      </span>
                      <span>
                        {"Showing "}
                        <b>{"16–30"}</b>
                        {" of 35"}
                      </span>
                      <span>
                        {"Showing "}
                        <b>{"31–35"}</b>
                        {" of 35"}
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
                    <span className="pg-info">
                      <span>
                        {"Showing "}
                        <b>{"1–20"}</b>
                        {" of 35"}
                      </span>
                      <span>
                        {"Showing "}
                        <b>{"21–35"}</b>
                        {" of 35"}
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
                    </span>
                    <span className="pg-next">
                      <label className="pg-arr" htmlFor="pg1r20p2" title="Next page">
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
                    <span className="pg-info">
                      <span>
                        {"Showing "}
                        <b>{"1–25"}</b>
                        {" of 35"}
                      </span>
                      <span>
                        {"Showing "}
                        <b>{"26–35"}</b>
                        {" of 35"}
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
                    </span>
                    <span className="pg-next">
                      <label className="pg-arr" htmlFor="pg1r25p2" title="Next page">
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
                    <span className="pg-info">
                      <span>
                        {"Showing "}
                        <b>{"1–30"}</b>
                        {" of 35"}
                      </span>
                      <span>
                        {"Showing "}
                        <b>{"31–35"}</b>
                        {" of 35"}
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
                    </span>
                    <span className="pg-next">
                      <label className="pg-arr" htmlFor="pg1r30p2" title="Next page">
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
              <div className="modal modal--lg" id="f-FK-10052" data-code="FD-34" role="dialog" aria-modal="true" aria-labelledby="f-FK-10052-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="f-FK-10052-t">{"Closed folio – Mr Arjun Varghese"}</h2>
                      <p className="modal__desc">{"INV/26-27/003765 · 1 Oct"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Folio"}</dt>
                      <dd>
                        <strong>{"FL-26-10052"}</strong>
                        {" · closed 1 Oct"}
                      </dd>
                      <dt>{"Guest"}</dt>
                      <dd>{"Mr Arjun Varghese · FK-10052"}</dd>
                      <dt>{"Room · stay"}</dt>
                      <dd>
                        <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"411"}</span>
                        {" 27 Sep → 1 Oct · 4 nights"}
                      </dd>
                      <dt>{"Invoice"}</dt>
                      <dd>{"INV/26-27/003765 · B2C · no IRN"}</dd>
                      <dt>{"Payments"}</dt>
                      <dd>{"₹27,211.80 received – balance ₹0"}</dd>
                      <dt>{"Status"}</dt>
                      <dd>
                        <span className="pill pill--ready">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#lock" />
                          </svg>
                          {"Closed – read-only"}
                        </span>
                      </dd>
                    </dl>
                    <div className="s-scroll">
                      <table className="srt dt__table dt--hug" data-code="FD-34-folio" style={{"--srt-cols": "auto auto auto auto auto"}} data-mc="">
                        <caption className="sr-only">{"Charges of the closed folio"}</caption>
                        <thead>
                          <tr>
                            <th scope="col">
                              <input className="srt-i srt-a0" type="radio" name="stfd341" id="stfd341-0a" aria-label="Sort by Date, lowest or A first" />
                              <input className="srt-i srt-d0" type="radio" name="stfd341" id="stfd341-0d" aria-label="Sort by Date, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd341-0a">{"Date"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd341-0d" aria-hidden="true">{"Date"}</label>
                            </th>
                            <th scope="col">{"Description"}</th>
                            <th scope="col" className="dt__th--right">{"Amount"}</th>
                            <th scope="col" className="dt__th--right">{"GST"}</th>
                            <th scope="col" className="dt__th--right">{"Total"}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{"--k0": "1"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"27 Sep"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – PDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹6,479.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST">{"₹323.95"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹6,802.95"}</td>
                          </tr>
                          <tr style={{"--k0": "2"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"28 Sep"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – PDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹6,479.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST">{"₹323.95"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹6,802.95"}</td>
                          </tr>
                          <tr style={{"--k0": "3"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"29 Sep"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – PDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹6,479.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST">{"₹323.95"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹6,802.95"}</td>
                          </tr>
                          <tr style={{"--k0": "4"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"30 Sep"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – PDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹6,479.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST">{"₹323.95"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹6,802.95"}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10052" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        {"Reprint invoice"}
                      </a>
                      <a className="btn" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10052" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#receipt" />
                        </svg>
                        {"Reprint bill (final folio)"}
                      </a>
                      <a className="btn" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10052" data-leads-to="FD-P27">{"Credit note"}</a>
                    </div>
                    <p className="fd-muted">{"Closed folios cannot be changed. A mistake is corrected with a credit note; a same-day re-open needs a supervisor (FD-P16)."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="f-FK-10072" data-code="FD-34" role="dialog" aria-modal="true" aria-labelledby="f-FK-10072-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="f-FK-10072-t">{"Closed folio – Mrs Neha Pavan"}</h2>
                      <p className="modal__desc">{"INV/26-27/003766 · 1 Oct"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Folio"}</dt>
                      <dd>
                        <strong>{"FL-26-10072"}</strong>
                        {" · closed 1 Oct"}
                      </dd>
                      <dt>{"Guest"}</dt>
                      <dd>{"Mrs Neha Pavan · FK-10072"}</dd>
                      <dt>{"Room · stay"}</dt>
                      <dd>
                        <span className="fd-rm fd-rm--OC" title="Occupied clean">{"501"}</span>
                        {" 28 Sep → 1 Oct · 3 nights"}
                      </dd>
                      <dt>{"Invoice"}</dt>
                      <dd>{"INV/26-27/003766 · B2B – Spice Route Hospitality Consultants · Generated"}</dd>
                      <dt>{"Payments"}</dt>
                      <dd>{"₹18,292.05 received – balance ₹0"}</dd>
                      <dt>{"Status"}</dt>
                      <dd>
                        <span className="pill pill--ready">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#lock" />
                          </svg>
                          {"Closed – read-only"}
                        </span>
                      </dd>
                    </dl>
                    <div className="s-scroll">
                      <table className="srt dt__table dt--hug" data-code="FD-34-folio" style={{"--srt-cols": "auto auto auto auto auto"}} data-mc="">
                        <caption className="sr-only">{"Charges of the closed folio"}</caption>
                        <thead>
                          <tr>
                            <th scope="col">
                              <input className="srt-i srt-a0" type="radio" name="stfd342" id="stfd342-0a" aria-label="Sort by Date, lowest or A first" />
                              <input className="srt-i srt-d0" type="radio" name="stfd342" id="stfd342-0d" aria-label="Sort by Date, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd342-0a">{"Date"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd342-0d" aria-hidden="true">{"Date"}</label>
                            </th>
                            <th scope="col">{"Description"}</th>
                            <th scope="col" className="dt__th--right">{"Amount"}</th>
                            <th scope="col" className="dt__th--right">{"GST"}</th>
                            <th scope="col" className="dt__th--right">{"Total"}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{"--k0": "1"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"28 Sep"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – PDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹5,807.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST">{"₹290.35"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹6,097.35"}</td>
                          </tr>
                          <tr style={{"--k0": "2"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"29 Sep"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – PDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹5,807.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST">{"₹290.35"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹6,097.35"}</td>
                          </tr>
                          <tr style={{"--k0": "3"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"30 Sep"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – PDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹5,807.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST">{"₹290.35"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹6,097.35"}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10072" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        {"Reprint invoice"}
                      </a>
                      <a className="btn" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10072" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#receipt" />
                        </svg>
                        {"Reprint bill (final folio)"}
                      </a>
                      <a className="btn" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10072" data-leads-to="FD-P27">{"Credit note"}</a>
                    </div>
                    <p className="fd-muted">{"Closed folios cannot be changed. A mistake is corrected with a credit note; a same-day re-open needs a supervisor (FD-P16)."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="f-FK-10078" data-code="FD-34" role="dialog" aria-modal="true" aria-labelledby="f-FK-10078-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="f-FK-10078-t">{"Closed folio – Mr Harikrishnan Rahman"}</h2>
                      <p className="modal__desc">{"INV/26-27/003767 · 1 Oct"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Folio"}</dt>
                      <dd>
                        <strong>{"FL-26-10078"}</strong>
                        {" · closed 1 Oct"}
                      </dd>
                      <dt>{"Guest"}</dt>
                      <dd>{"Mr Harikrishnan Rahman · FK-10078"}</dd>
                      <dt>{"Room · stay"}</dt>
                      <dd>
                        <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"302"}</span>
                        {" 28 Sep → 1 Oct · 3 nights"}
                      </dd>
                      <dt>{"Invoice"}</dt>
                      <dd>{"INV/26-27/003767 · B2C · no IRN"}</dd>
                      <dt>{"Payments"}</dt>
                      <dd>{"₹28,822.35 received – balance ₹0"}</dd>
                      <dt>{"Status"}</dt>
                      <dd>
                        <span className="pill pill--ready">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#lock" />
                          </svg>
                          {"Closed – read-only"}
                        </span>
                      </dd>
                    </dl>
                    <div className="s-scroll">
                      <table className="srt dt__table dt--hug" data-code="FD-34-folio" style={{"--srt-cols": "auto auto auto auto auto"}} data-mc="">
                        <caption className="sr-only">{"Charges of the closed folio"}</caption>
                        <thead>
                          <tr>
                            <th scope="col">
                              <input className="srt-i srt-a0" type="radio" name="stfd343" id="stfd343-0a" aria-label="Sort by Date, lowest or A first" />
                              <input className="srt-i srt-d0" type="radio" name="stfd343" id="stfd343-0d" aria-label="Sort by Date, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd343-0a">{"Date"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd343-0d" aria-hidden="true">{"Date"}</label>
                            </th>
                            <th scope="col">{"Description"}</th>
                            <th scope="col" className="dt__th--right">{"Amount"}</th>
                            <th scope="col" className="dt__th--right">{"GST"}</th>
                            <th scope="col" className="dt__th--right">{"Total"}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{"--k0": "1"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"28 Sep"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹5,201.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST">{"₹260.05"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹5,461.05"}</td>
                          </tr>
                          <tr style={{"--k0": "2"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"29 Sep"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹5,201.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST">{"₹260.05"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹5,461.05"}</td>
                          </tr>
                          <tr style={{"--k0": "3"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"30 Sep"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹5,201.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST">{"₹260.05"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹5,461.05"}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10078" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        {"Reprint invoice"}
                      </a>
                      <a className="btn" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10078" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#receipt" />
                        </svg>
                        {"Reprint bill (final folio)"}
                      </a>
                      <a className="btn" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10078" data-leads-to="FD-P27">{"Credit note"}</a>
                    </div>
                    <p className="fd-muted">{"Closed folios cannot be changed. A mistake is corrected with a credit note; a same-day re-open needs a supervisor (FD-P16)."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="f-FK-10026" data-code="FD-34" role="dialog" aria-modal="true" aria-labelledby="f-FK-10026-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="f-FK-10026-t">{"Closed folio – Dr Claire Dubois"}</h2>
                      <p className="modal__desc">{"INV/26-27/003768 · 2 Oct"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Folio"}</dt>
                      <dd>
                        <strong>{"FL-26-10026"}</strong>
                        {" · closed 2 Oct"}
                      </dd>
                      <dt>{"Guest"}</dt>
                      <dd>{"Dr Claire Dubois · FK-10026"}</dd>
                      <dt>{"Room · stay"}</dt>
                      <dd>
                        <span className="fd-rm fd-rm--OC" title="Occupied clean">{"511"}</span>
                        {" 30 Sep → 2 Oct · 2 nights"}
                      </dd>
                      <dt>{"Invoice"}</dt>
                      <dd>{"INV/26-27/003768 · B2C · no IRN"}</dd>
                      <dt>{"Payments"}</dt>
                      <dd>{"₹17,587.77 received – balance ₹0"}</dd>
                      <dt>{"Status"}</dt>
                      <dd>
                        <span className="pill pill--ready">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#lock" />
                          </svg>
                          {"Closed – read-only"}
                        </span>
                      </dd>
                    </dl>
                    <div className="s-scroll">
                      <table className="dt__table dt--hug" data-code="FD-34-folio" data-mc="">
                        <caption className="sr-only">{"Charges of the closed folio"}</caption>
                        <thead>
                          <tr>
                            <th scope="col">{"Date"}</th>
                            <th scope="col">{"Description"}</th>
                            <th scope="col" className="dt__th--right">{"Amount"}</th>
                            <th scope="col" className="dt__th--right">{"GST"}</th>
                            <th scope="col" className="dt__th--right">{"Total"}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="dt__td nw" data-label="Date" data-t="">{"30 Sep"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – PDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹7,199.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST">{"₹359.95"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹7,558.95"}</td>
                          </tr>
                          <tr>
                            <td className="dt__td nw" data-label="Date" data-t="">{"1 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – PDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹8,499.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,529.82"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹10,028.82"}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10026" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        {"Reprint invoice"}
                      </a>
                      <a className="btn" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10026" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#receipt" />
                        </svg>
                        {"Reprint bill (final folio)"}
                      </a>
                      <a className="btn" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10026" data-leads-to="FD-P27">{"Credit note"}</a>
                    </div>
                    <p className="fd-muted">{"Closed folios cannot be changed. A mistake is corrected with a credit note; a same-day re-open needs a supervisor (FD-P16)."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="f-FK-10038" data-code="FD-34" role="dialog" aria-modal="true" aria-labelledby="f-FK-10038-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="f-FK-10038-t">{"Closed folio – Mr Srinivas Siddharth"}</h2>
                      <p className="modal__desc">{"INV/26-27/003769 · 2 Oct"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Folio"}</dt>
                      <dd>
                        <strong>{"FL-26-10038"}</strong>
                        {" · closed 2 Oct"}
                      </dd>
                      <dt>{"Guest"}</dt>
                      <dd>{"Mr Srinivas Siddharth · FK-10038"}</dd>
                      <dt>{"Room · stay"}</dt>
                      <dd>
                        <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"117"}</span>
                        {" 30 Sep → 2 Oct · 2 nights"}
                      </dd>
                      <dt>{"Invoice"}</dt>
                      <dd>{"INV/26-27/003769 · B2C · no IRN"}</dd>
                      <dt>{"Payments"}</dt>
                      <dd>{"₹16,577.77 received – balance ₹0"}</dd>
                      <dt>{"Status"}</dt>
                      <dd>
                        <span className="pill pill--ready">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#lock" />
                          </svg>
                          {"Closed – read-only"}
                        </span>
                      </dd>
                    </dl>
                    <div className="s-scroll">
                      <table className="dt__table dt--hug" data-code="FD-34-folio" data-mc="">
                        <caption className="sr-only">{"Charges of the closed folio"}</caption>
                        <thead>
                          <tr>
                            <th scope="col">{"Date"}</th>
                            <th scope="col">{"Description"}</th>
                            <th scope="col" className="dt__th--right">{"Amount"}</th>
                            <th scope="col" className="dt__th--right">{"GST"}</th>
                            <th scope="col" className="dt__th--right">{"Total"}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="dt__td nw" data-label="Date" data-t="">{"30 Sep"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹6,799.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST">{"₹339.95"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹7,138.95"}</td>
                          </tr>
                          <tr>
                            <td className="dt__td nw" data-label="Date" data-t="">{"1 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹7,999.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,439.82"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹9,438.82"}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10038" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        {"Reprint invoice"}
                      </a>
                      <a className="btn" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10038" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#receipt" />
                        </svg>
                        {"Reprint bill (final folio)"}
                      </a>
                      <a className="btn" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10038" data-leads-to="FD-P27">{"Credit note"}</a>
                    </div>
                    <p className="fd-muted">{"Closed folios cannot be changed. A mistake is corrected with a credit note; a same-day re-open needs a supervisor (FD-P16)."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="f-FK-10071" data-code="FD-34" role="dialog" aria-modal="true" aria-labelledby="f-FK-10071-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="f-FK-10071-t">{"Closed folio – Dr Anjali Mathew"}</h2>
                      <p className="modal__desc">{"INV/26-27/003770 · 3 Oct"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Folio"}</dt>
                      <dd>
                        <strong>{"FL-26-10071"}</strong>
                        {" · closed 3 Oct"}
                      </dd>
                      <dt>{"Guest"}</dt>
                      <dd>{"Dr Anjali Mathew · FK-10071"}</dd>
                      <dt>{"Room · stay"}</dt>
                      <dd>
                        <span className="fd-rm fd-rm--OC" title="Occupied clean">{"219"}</span>
                        {" 29 Sep → 3 Oct · 4 nights"}
                      </dd>
                      <dt>{"Invoice"}</dt>
                      <dd>{"INV/26-27/003770 · B2B – Deccan Capital Advisors · Generated"}</dd>
                      <dt>{"Payments"}</dt>
                      <dd>{"₹29,091.99 received – balance ₹0"}</dd>
                      <dt>{"Status"}</dt>
                      <dd>
                        <span className="pill pill--ready">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#lock" />
                          </svg>
                          {"Closed – read-only"}
                        </span>
                      </dd>
                    </dl>
                    <div className="s-scroll">
                      <table className="srt dt__table dt--hug" data-code="FD-34-folio" style={{"--srt-cols": "auto auto auto auto auto"}} data-mc="">
                        <caption className="sr-only">{"Charges of the closed folio"}</caption>
                        <thead>
                          <tr>
                            <th scope="col">
                              <input className="srt-i srt-a0" type="radio" name="stfd344" id="stfd344-0a" aria-label="Sort by Date, lowest or A first" />
                              <input className="srt-i srt-d0" type="radio" name="stfd344" id="stfd344-0d" aria-label="Sort by Date, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd344-0a">{"Date"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd344-0d" aria-hidden="true">{"Date"}</label>
                            </th>
                            <th scope="col">{"Description"}</th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a2" type="radio" name="stfd344" id="stfd344-2a" aria-label="Sort by Amount, lowest or A first" />
                              <input className="srt-i srt-d2" type="radio" name="stfd344" id="stfd344-2d" aria-label="Sort by Amount, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd344-2a">{"Amount"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd344-2d" aria-hidden="true">{"Amount"}</label>
                            </th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a3" type="radio" name="stfd344" id="stfd344-3a" aria-label="Sort by GST, lowest or A first" />
                              <input className="srt-i srt-d3" type="radio" name="stfd344" id="stfd344-3d" aria-label="Sort by GST, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd344-3a">{"GST"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd344-3d" aria-hidden="true">{"GST"}</label>
                            </th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a4" type="radio" name="stfd344" id="stfd344-4a" aria-label="Sort by Total, lowest or A first" />
                              <input className="srt-i srt-d4" type="radio" name="stfd344" id="stfd344-4d" aria-label="Sort by Total, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd344-4a">{"Total"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd344-4d" aria-hidden="true">{"Total"}</label>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{"--k0": "1", "--k2": "1", "--k3": "1", "--k4": "1"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"29 Sep"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹5,983.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST">{"₹299.15"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹6,282.15"}</td>
                          </tr>
                          <tr style={{"--k0": "2", "--k2": "1", "--k3": "1", "--k4": "1"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"30 Sep"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹5,983.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST">{"₹299.15"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹6,282.15"}</td>
                          </tr>
                          <tr style={{"--k0": "3", "--k2": "2", "--k3": "2", "--k4": "2"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"1 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹7,039.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST">{"₹351.95"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹7,390.95"}</td>
                          </tr>
                          <tr style={{"--k0": "4", "--k2": "3", "--k3": "3", "--k4": "3"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"2 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹7,743.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,393.74"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹9,136.74"}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10071" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        {"Reprint invoice"}
                      </a>
                      <a className="btn" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10071" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#receipt" />
                        </svg>
                        {"Reprint bill (final folio)"}
                      </a>
                      <a className="btn" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10071" data-leads-to="FD-P27">{"Credit note"}</a>
                    </div>
                    <p className="fd-muted">{"Closed folios cannot be changed. A mistake is corrected with a credit note; a same-day re-open needs a supervisor (FD-P16)."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="f-FK-10075" data-code="FD-34" role="dialog" aria-modal="true" aria-labelledby="f-FK-10075-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="f-FK-10075-t">{"Closed folio – Ms Neethu Krish"}</h2>
                      <p className="modal__desc">{"INV/26-27/003771 · 4 Oct"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Folio"}</dt>
                      <dd>
                        <strong>{"FL-26-10075"}</strong>
                        {" · closed 4 Oct"}
                      </dd>
                      <dt>{"Guest"}</dt>
                      <dd>{"Ms Neethu Krish · FK-10075"}</dd>
                      <dt>{"Room · stay"}</dt>
                      <dd>
                        <span className="fd-rm fd-rm--OC" title="Occupied clean">{"416"}</span>
                        {" 29 Sep → 4 Oct · 5 nights"}
                      </dd>
                      <dt>{"Invoice"}</dt>
                      <dd>{"INV/26-27/003771 · B2C · no IRN"}</dd>
                      <dt>{"Payments"}</dt>
                      <dd>{"₹70,050.70 received – balance ₹0"}</dd>
                      <dt>{"Status"}</dt>
                      <dd>
                        <span className="pill pill--ready">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#lock" />
                          </svg>
                          {"Closed – read-only"}
                        </span>
                      </dd>
                    </dl>
                    <div className="s-scroll">
                      <table className="srt dt__table dt--hug" data-code="FD-34-folio" style={{"--srt-cols": "auto auto auto auto auto"}} data-mc="">
                        <caption className="sr-only">{"Charges of the closed folio"}</caption>
                        <thead>
                          <tr>
                            <th scope="col">
                              <input className="srt-i srt-a0" type="radio" name="stfd345" id="stfd345-0a" aria-label="Sort by Date, lowest or A first" />
                              <input className="srt-i srt-d0" type="radio" name="stfd345" id="stfd345-0d" aria-label="Sort by Date, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd345-0a">{"Date"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd345-0d" aria-hidden="true">{"Date"}</label>
                            </th>
                            <th scope="col">{"Description"}</th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a2" type="radio" name="stfd345" id="stfd345-2a" aria-label="Sort by Amount, lowest or A first" />
                              <input className="srt-i srt-d2" type="radio" name="stfd345" id="stfd345-2d" aria-label="Sort by Amount, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd345-2a">{"Amount"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd345-2d" aria-hidden="true">{"Amount"}</label>
                            </th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a3" type="radio" name="stfd345" id="stfd345-3a" aria-label="Sort by GST, lowest or A first" />
                              <input className="srt-i srt-d3" type="radio" name="stfd345" id="stfd345-3d" aria-label="Sort by GST, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd345-3a">{"GST"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd345-3d" aria-hidden="true">{"GST"}</label>
                            </th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a4" type="radio" name="stfd345" id="stfd345-4a" aria-label="Sort by Total, lowest or A first" />
                              <input className="srt-i srt-d4" type="radio" name="stfd345" id="stfd345-4d" aria-label="Sort by Total, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd345-4a">{"Total"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd345-4d" aria-hidden="true">{"Total"}</label>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{"--k0": "1", "--k2": "1", "--k3": "1", "--k4": "1"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"29 Sep"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – PDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹9,997.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,799.46"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹11,796.46"}</td>
                          </tr>
                          <tr style={{"--k0": "2", "--k2": "1", "--k3": "1", "--k4": "1"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"30 Sep"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – PDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹9,997.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,799.46"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹11,796.46"}</td>
                          </tr>
                          <tr style={{"--k0": "3", "--k2": "2", "--k3": "2", "--k4": "2"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"1 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – PDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹11,297.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹2,033.46"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹13,330.46"}</td>
                          </tr>
                          <tr style={{"--k0": "4", "--k2": "3", "--k3": "3", "--k4": "3"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"2 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – PDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹12,097.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹2,177.46"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹14,274.46"}</td>
                          </tr>
                          <tr style={{"--k0": "5", "--k2": "3", "--k3": "3", "--k4": "3"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"3 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – PDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹12,097.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹2,177.46"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹14,274.46"}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10075" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        {"Reprint invoice"}
                      </a>
                      <a className="btn" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10075" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#receipt" />
                        </svg>
                        {"Reprint bill (final folio)"}
                      </a>
                      <a className="btn" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10075" data-leads-to="FD-P27">{"Credit note"}</a>
                    </div>
                    <p className="fd-muted">{"Closed folios cannot be changed. A mistake is corrected with a credit note; a same-day re-open needs a supervisor (FD-P16)."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="f-FK-10077" data-code="FD-34" role="dialog" aria-modal="true" aria-labelledby="f-FK-10077-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="f-FK-10077-t">{"Closed folio – Mr Vikas Harsh"}</h2>
                      <p className="modal__desc">{"INV/26-27/003772 · 4 Oct"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Folio"}</dt>
                      <dd>
                        <strong>{"FL-26-10077"}</strong>
                        {" · closed 4 Oct"}
                      </dd>
                      <dt>{"Guest"}</dt>
                      <dd>{"Mr Vikas Harsh · FK-10077"}</dd>
                      <dt>{"Room · stay"}</dt>
                      <dd>
                        <span className="fd-rm fd-rm--OC" title="Occupied clean">{"119"}</span>
                        {" 30 Sep → 4 Oct · 4 nights"}
                      </dd>
                      <dt>{"Invoice"}</dt>
                      <dd>{"INV/26-27/003772 · B2C · no IRN"}</dd>
                      <dt>{"Payments"}</dt>
                      <dd>{"₹37,343.41 received – balance ₹0"}</dd>
                      <dt>{"Status"}</dt>
                      <dd>
                        <span className="pill pill--ready">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#lock" />
                          </svg>
                          {"Closed – read-only"}
                        </span>
                      </dd>
                    </dl>
                    <div className="s-scroll">
                      <table className="srt dt__table dt--hug" data-code="FD-34-folio" style={{"--srt-cols": "auto auto auto auto auto"}} data-mc="">
                        <caption className="sr-only">{"Charges of the closed folio"}</caption>
                        <thead>
                          <tr>
                            <th scope="col">
                              <input className="srt-i srt-a0" type="radio" name="stfd346" id="stfd346-0a" aria-label="Sort by Date, lowest or A first" />
                              <input className="srt-i srt-d0" type="radio" name="stfd346" id="stfd346-0d" aria-label="Sort by Date, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd346-0a">{"Date"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd346-0d" aria-hidden="true">{"Date"}</label>
                            </th>
                            <th scope="col">{"Description"}</th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a2" type="radio" name="stfd346" id="stfd346-2a" aria-label="Sort by Amount, lowest or A first" />
                              <input className="srt-i srt-d2" type="radio" name="stfd346" id="stfd346-2d" aria-label="Sort by Amount, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd346-2a">{"Amount"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd346-2d" aria-hidden="true">{"Amount"}</label>
                            </th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a3" type="radio" name="stfd346" id="stfd346-3a" aria-label="Sort by GST, lowest or A first" />
                              <input className="srt-i srt-d3" type="radio" name="stfd346" id="stfd346-3d" aria-label="Sort by GST, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd346-3a">{"GST"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd346-3d" aria-hidden="true">{"GST"}</label>
                            </th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a4" type="radio" name="stfd346" id="stfd346-4a" aria-label="Sort by Total, lowest or A first" />
                              <input className="srt-i srt-d4" type="radio" name="stfd346" id="stfd346-4d" aria-label="Sort by Total, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd346-4a">{"Total"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd346-4d" aria-hidden="true">{"Total"}</label>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{"--k0": "1", "--k2": "1", "--k3": "1", "--k4": "1"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"30 Sep"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹6,799.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST">{"₹339.95"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹7,138.95"}</td>
                          </tr>
                          <tr style={{"--k0": "2", "--k2": "2", "--k3": "2", "--k4": "2"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"1 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹7,999.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,439.82"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹9,438.82"}</td>
                          </tr>
                          <tr style={{"--k0": "3", "--k2": "3", "--k3": "3", "--k4": "3"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"2 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹8,799.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,583.82"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹10,382.82"}</td>
                          </tr>
                          <tr style={{"--k0": "4", "--k2": "3", "--k3": "3", "--k4": "3"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"3 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹8,799.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,583.82"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹10,382.82"}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10077" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        {"Reprint invoice"}
                      </a>
                      <a className="btn" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10077" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#receipt" />
                        </svg>
                        {"Reprint bill (final folio)"}
                      </a>
                      <a className="btn" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10077" data-leads-to="FD-P27">{"Credit note"}</a>
                    </div>
                    <p className="fd-muted">{"Closed folios cannot be changed. A mistake is corrected with a credit note; a same-day re-open needs a supervisor (FD-P16)."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="f-FK-10081" data-code="FD-34" role="dialog" aria-modal="true" aria-labelledby="f-FK-10081-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="f-FK-10081-t">{"Closed folio – Mr Ravi Ranjan"}</h2>
                      <p className="modal__desc">{"INV/26-27/003773 · 4 Oct"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Folio"}</dt>
                      <dd>
                        <strong>{"FL-26-10081"}</strong>
                        {" · closed 4 Oct"}
                      </dd>
                      <dt>{"Guest"}</dt>
                      <dd>{"Mr Ravi Ranjan · FK-10081"}</dd>
                      <dt>{"Room · stay"}</dt>
                      <dd>
                        <span className="fd-rm fd-rm--VD" title="Vacant dirty">{"111"}</span>
                        {" 1 Oct → 4 Oct · 3 nights"}
                      </dd>
                      <dt>{"Invoice"}</dt>
                      <dd>{"INV/26-27/003773 · B2C · no IRN"}</dd>
                      <dt>{"Payments"}</dt>
                      <dd>{"₹26,877.25 received – balance ₹0"}</dd>
                      <dt>{"Status"}</dt>
                      <dd>
                        <span className="pill pill--ready">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#lock" />
                          </svg>
                          {"Closed – read-only"}
                        </span>
                      </dd>
                    </dl>
                    <div className="s-scroll">
                      <table className="srt dt__table dt--hug" data-code="FD-34-folio" style={{"--srt-cols": "auto auto auto auto auto"}} data-mc="">
                        <caption className="sr-only">{"Charges of the closed folio"}</caption>
                        <thead>
                          <tr>
                            <th scope="col">
                              <input className="srt-i srt-a0" type="radio" name="stfd347" id="stfd347-0a" aria-label="Sort by Date, lowest or A first" />
                              <input className="srt-i srt-d0" type="radio" name="stfd347" id="stfd347-0d" aria-label="Sort by Date, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd347-0a">{"Date"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd347-0d" aria-hidden="true">{"Date"}</label>
                            </th>
                            <th scope="col">{"Description"}</th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a2" type="radio" name="stfd347" id="stfd347-2a" aria-label="Sort by Amount, lowest or A first" />
                              <input className="srt-i srt-d2" type="radio" name="stfd347" id="stfd347-2d" aria-label="Sort by Amount, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd347-2a">{"Amount"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd347-2d" aria-hidden="true">{"Amount"}</label>
                            </th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a3" type="radio" name="stfd347" id="stfd347-3a" aria-label="Sort by GST, lowest or A first" />
                              <input className="srt-i srt-d3" type="radio" name="stfd347" id="stfd347-3d" aria-label="Sort by GST, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd347-3a">{"GST"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd347-3d" aria-hidden="true">{"GST"}</label>
                            </th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a4" type="radio" name="stfd347" id="stfd347-4a" aria-label="Sort by Total, lowest or A first" />
                              <input className="srt-i srt-d4" type="radio" name="stfd347" id="stfd347-4d" aria-label="Sort by Total, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd347-4a">{"Total"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd347-4d" aria-hidden="true">{"Total"}</label>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{"--k0": "1", "--k2": "1", "--k3": "1", "--k4": "1"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"1 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹6,659.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST">{"₹332.95"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹6,991.95"}</td>
                          </tr>
                          <tr style={{"--k0": "2", "--k2": "2", "--k3": "2", "--k4": "2"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"2 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹7,289.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST">{"₹364.45"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹7,653.45"}</td>
                          </tr>
                          <tr style={{"--k0": "3", "--k2": "2", "--k3": "2", "--k4": "2"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"3 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹7,289.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST">{"₹364.45"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹7,653.45"}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10081" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        {"Reprint invoice"}
                      </a>
                      <a className="btn" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10081" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#receipt" />
                        </svg>
                        {"Reprint bill (final folio)"}
                      </a>
                      <a className="btn" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10081" data-leads-to="FD-P27">{"Credit note"}</a>
                    </div>
                    <p className="fd-muted">{"Closed folios cannot be changed. A mistake is corrected with a credit note; a same-day re-open needs a supervisor (FD-P16)."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="f-FK-10024" data-code="FD-34" role="dialog" aria-modal="true" aria-labelledby="f-FK-10024-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="f-FK-10024-t">{"Closed folio – Mrs Kavita Ranjan"}</h2>
                      <p className="modal__desc">{"INV/26-27/003774 · 5 Oct"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Folio"}</dt>
                      <dd>
                        <strong>{"FL-26-10024"}</strong>
                        {" · closed 5 Oct"}
                      </dd>
                      <dt>{"Guest"}</dt>
                      <dd>{"Mrs Kavita Ranjan · FK-10024"}</dd>
                      <dt>{"Room · stay"}</dt>
                      <dd>
                        <span className="fd-rm fd-rm--VD" title="Vacant dirty">{"308"}</span>
                        {" 3 Oct → 5 Oct · 2 nights"}
                      </dd>
                      <dt>{"Invoice"}</dt>
                      <dd>{"INV/26-27/003774 · B2B – Malabar Spice Exports Pvt Ltd · Generated"}</dd>
                      <dt>{"Payments"}</dt>
                      <dd>{"₹18,449.90 received – balance ₹0"}</dd>
                      <dt>{"Status"}</dt>
                      <dd>
                        <span className="pill pill--ready">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#lock" />
                          </svg>
                          {"Closed – read-only"}
                        </span>
                      </dd>
                    </dl>
                    <div className="s-scroll">
                      <table className="dt__table dt--hug" data-code="FD-34-folio" data-mc="">
                        <caption className="sr-only">{"Charges of the closed folio"}</caption>
                        <thead>
                          <tr>
                            <th scope="col">{"Date"}</th>
                            <th scope="col">{"Description"}</th>
                            <th scope="col" className="dt__th--right">{"Amount"}</th>
                            <th scope="col" className="dt__th--right">{"GST"}</th>
                            <th scope="col" className="dt__th--right">{"Total"}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="dt__td nw" data-label="Date" data-t="">{"3 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹7,127.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST">{"₹356.35"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹7,483.35"}</td>
                          </tr>
                          <tr>
                            <td className="dt__td nw" data-label="Date" data-t="">{"4 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹6,511.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST">{"₹325.55"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹6,836.55"}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10024" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        {"Reprint invoice"}
                      </a>
                      <a className="btn" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10024" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#receipt" />
                        </svg>
                        {"Reprint bill (final folio)"}
                      </a>
                      <a className="btn" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10024" data-leads-to="FD-P27">{"Credit note"}</a>
                    </div>
                    <p className="fd-muted">{"Closed folios cannot be changed. A mistake is corrected with a credit note; a same-day re-open needs a supervisor (FD-P16)."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="f-FK-10053" data-code="FD-34" role="dialog" aria-modal="true" aria-labelledby="f-FK-10053-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="f-FK-10053-t">{"Closed folio – Mr Hans Mueller"}</h2>
                      <p className="modal__desc">{"INV/26-27/003775 · 5 Oct"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Folio"}</dt>
                      <dd>
                        <strong>{"FL-26-10053"}</strong>
                        {" · closed 5 Oct"}
                      </dd>
                      <dt>{"Guest"}</dt>
                      <dd>{"Mr Hans Mueller · FK-10053"}</dd>
                      <dt>{"Room · stay"}</dt>
                      <dd>
                        <span className="fd-rm fd-rm--OC" title="Occupied clean">{"318"}</span>
                        {" 1 Oct → 5 Oct · 4 nights"}
                      </dd>
                      <dt>{"Invoice"}</dt>
                      <dd>{"INV/26-27/003775 · B2B – Heritage Routes Travel · Generated"}</dd>
                      <dt>{"Payments"}</dt>
                      <dd>{"₹32,629.90 received – balance ₹0"}</dd>
                      <dt>{"Status"}</dt>
                      <dd>
                        <span className="pill pill--ready">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#lock" />
                          </svg>
                          {"Closed – read-only"}
                        </span>
                      </dd>
                    </dl>
                    <div className="s-scroll">
                      <table className="srt dt__table dt--hug" data-code="FD-34-folio" style={{"--srt-cols": "auto auto auto auto auto"}} data-mc="">
                        <caption className="sr-only">{"Charges of the closed folio"}</caption>
                        <thead>
                          <tr>
                            <th scope="col">
                              <input className="srt-i srt-a0" type="radio" name="stfd348" id="stfd348-0a" aria-label="Sort by Date, lowest or A first" />
                              <input className="srt-i srt-d0" type="radio" name="stfd348" id="stfd348-0d" aria-label="Sort by Date, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd348-0a">{"Date"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd348-0d" aria-hidden="true">{"Date"}</label>
                            </th>
                            <th scope="col">{"Description"}</th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a2" type="radio" name="stfd348" id="stfd348-2a" aria-label="Sort by Amount, lowest or A first" />
                              <input className="srt-i srt-d2" type="radio" name="stfd348" id="stfd348-2d" aria-label="Sort by Amount, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd348-2a">{"Amount"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd348-2d" aria-hidden="true">{"Amount"}</label>
                            </th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a3" type="radio" name="stfd348" id="stfd348-3a" aria-label="Sort by GST, lowest or A first" />
                              <input className="srt-i srt-d3" type="radio" name="stfd348" id="stfd348-3d" aria-label="Sort by GST, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd348-3a">{"GST"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd348-3d" aria-hidden="true">{"GST"}</label>
                            </th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a4" type="radio" name="stfd348" id="stfd348-4a" aria-label="Sort by Total, lowest or A first" />
                              <input className="srt-i srt-d4" type="radio" name="stfd348" id="stfd348-4d" aria-label="Sort by Total, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd348-4a">{"Total"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd348-4d" aria-hidden="true">{"Total"}</label>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{"--k0": "1", "--k2": "1", "--k3": "1", "--k4": "1"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"1 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – PDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹6,969.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST">{"₹348.45"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹7,317.45"}</td>
                          </tr>
                          <tr style={{"--k0": "2", "--k2": "2", "--k3": "2", "--k4": "2"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"2 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – PDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹7,625.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,372.50"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹8,997.50"}</td>
                          </tr>
                          <tr style={{"--k0": "3", "--k2": "2", "--k3": "2", "--k4": "2"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"3 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – PDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹7,625.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,372.50"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹8,997.50"}</td>
                          </tr>
                          <tr style={{"--k0": "4", "--k2": "1", "--k3": "1", "--k4": "1"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"4 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – PDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹6,969.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST">{"₹348.45"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹7,317.45"}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10053" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        {"Reprint invoice"}
                      </a>
                      <a className="btn" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10053" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#receipt" />
                        </svg>
                        {"Reprint bill (final folio)"}
                      </a>
                      <a className="btn" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10053" data-leads-to="FD-P27">{"Credit note"}</a>
                    </div>
                    <p className="fd-muted">{"Closed folios cannot be changed. A mistake is corrected with a credit note; a same-day re-open needs a supervisor (FD-P16)."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="f-FK-10063" data-code="FD-34" role="dialog" aria-modal="true" aria-labelledby="f-FK-10063-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="f-FK-10063-t">{"Closed folio – Mr Arun Krish"}</h2>
                      <p className="modal__desc">{"INV/26-27/003776 · 5 Oct"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Folio"}</dt>
                      <dd>
                        <strong>{"FL-26-10063"}</strong>
                        {" · closed 5 Oct"}
                      </dd>
                      <dt>{"Guest"}</dt>
                      <dd>{"Mr Arun Krish · FK-10063"}</dd>
                      <dt>{"Room · stay"}</dt>
                      <dd>
                        <span className="fd-rm fd-rm--OC" title="Occupied clean">{"109"}</span>
                        {" 1 Oct → 5 Oct · 4 nights"}
                      </dd>
                      <dt>{"Invoice"}</dt>
                      <dd>{"INV/26-27/003776 · B2C · no IRN"}</dd>
                      <dt>{"Payments"}</dt>
                      <dd>{"₹33,806.74 received – balance ₹0"}</dd>
                      <dt>{"Status"}</dt>
                      <dd>
                        <span className="pill pill--ready">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#lock" />
                          </svg>
                          {"Closed – read-only"}
                        </span>
                      </dd>
                    </dl>
                    <div className="s-scroll">
                      <table className="srt dt__table dt--hug" data-code="FD-34-folio" style={{"--srt-cols": "auto auto auto auto auto"}} data-mc="">
                        <caption className="sr-only">{"Charges of the closed folio"}</caption>
                        <thead>
                          <tr>
                            <th scope="col">
                              <input className="srt-i srt-a0" type="radio" name="stfd349" id="stfd349-0a" aria-label="Sort by Date, lowest or A first" />
                              <input className="srt-i srt-d0" type="radio" name="stfd349" id="stfd349-0d" aria-label="Sort by Date, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd349-0a">{"Date"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd349-0d" aria-hidden="true">{"Date"}</label>
                            </th>
                            <th scope="col">{"Description"}</th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a2" type="radio" name="stfd349" id="stfd349-2a" aria-label="Sort by Amount, lowest or A first" />
                              <input className="srt-i srt-d2" type="radio" name="stfd349" id="stfd349-2d" aria-label="Sort by Amount, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd349-2a">{"Amount"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd349-2d" aria-hidden="true">{"Amount"}</label>
                            </th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a3" type="radio" name="stfd349" id="stfd349-3a" aria-label="Sort by GST, lowest or A first" />
                              <input className="srt-i srt-d3" type="radio" name="stfd349" id="stfd349-3d" aria-label="Sort by GST, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd349-3a">{"GST"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd349-3d" aria-hidden="true">{"GST"}</label>
                            </th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a4" type="radio" name="stfd349" id="stfd349-4a" aria-label="Sort by Total, lowest or A first" />
                              <input className="srt-i srt-d4" type="radio" name="stfd349" id="stfd349-4d" aria-label="Sort by Total, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd349-4a">{"Total"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd349-4d" aria-hidden="true">{"Total"}</label>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{"--k0": "1", "--k2": "1", "--k3": "1", "--k4": "1"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"1 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹7,199.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST">{"₹359.95"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹7,558.95"}</td>
                          </tr>
                          <tr style={{"--k0": "2", "--k2": "2", "--k3": "2", "--k4": "2"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"2 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹7,919.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,425.42"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹9,344.42"}</td>
                          </tr>
                          <tr style={{"--k0": "3", "--k2": "2", "--k3": "2", "--k4": "2"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"3 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹7,919.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,425.42"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹9,344.42"}</td>
                          </tr>
                          <tr style={{"--k0": "4", "--k2": "1", "--k3": "1", "--k4": "1"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"4 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹7,199.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST">{"₹359.95"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹7,558.95"}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10063" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        {"Reprint invoice"}
                      </a>
                      <a className="btn" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10063" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#receipt" />
                        </svg>
                        {"Reprint bill (final folio)"}
                      </a>
                      <a className="btn" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10063" data-leads-to="FD-P27">{"Credit note"}</a>
                    </div>
                    <p className="fd-muted">{"Closed folios cannot be changed. A mistake is corrected with a credit note; a same-day re-open needs a supervisor (FD-P16)."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="f-FK-10055" data-code="FD-34" role="dialog" aria-modal="true" aria-labelledby="f-FK-10055-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="f-FK-10055-t">{"Closed folio – Dr Neethu Nathan"}</h2>
                      <p className="modal__desc">{"INV/26-27/003777 · 6 Oct"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Folio"}</dt>
                      <dd>
                        <strong>{"FL-26-10055"}</strong>
                        {" · closed 6 Oct"}
                      </dd>
                      <dt>{"Guest"}</dt>
                      <dd>{"Dr Neethu Nathan · FK-10055"}</dd>
                      <dt>{"Room · stay"}</dt>
                      <dd>
                        <span className="fd-rm fd-rm--OC" title="Occupied clean">{"108"}</span>
                        {" 3 Oct → 6 Oct · 3 nights"}
                      </dd>
                      <dt>{"Invoice"}</dt>
                      <dd>{"INV/26-27/003777 · B2C · no IRN"}</dd>
                      <dt>{"Payments"}</dt>
                      <dd>{"₹43,892.46 received – balance ₹0"}</dd>
                      <dt>{"Status"}</dt>
                      <dd>
                        <span className="pill pill--ready">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#lock" />
                          </svg>
                          {"Closed – read-only"}
                        </span>
                      </dd>
                    </dl>
                    <div className="s-scroll">
                      <table className="srt dt__table dt--hug" data-code="FD-34-folio" style={{"--srt-cols": "auto auto auto auto auto"}} data-mc="">
                        <caption className="sr-only">{"Charges of the closed folio"}</caption>
                        <thead>
                          <tr>
                            <th scope="col">
                              <input className="srt-i srt-a0" type="radio" name="stfd3410" id="stfd3410-0a" aria-label="Sort by Date, lowest or A first" />
                              <input className="srt-i srt-d0" type="radio" name="stfd3410" id="stfd3410-0d" aria-label="Sort by Date, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3410-0a">{"Date"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3410-0d" aria-hidden="true">{"Date"}</label>
                            </th>
                            <th scope="col">{"Description"}</th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a2" type="radio" name="stfd3410" id="stfd3410-2a" aria-label="Sort by Amount, lowest or A first" />
                              <input className="srt-i srt-d2" type="radio" name="stfd3410" id="stfd3410-2d" aria-label="Sort by Amount, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3410-2a">{"Amount"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3410-2d" aria-hidden="true">{"Amount"}</label>
                            </th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a3" type="radio" name="stfd3410" id="stfd3410-3a" aria-label="Sort by GST, lowest or A first" />
                              <input className="srt-i srt-d3" type="radio" name="stfd3410" id="stfd3410-3d" aria-label="Sort by GST, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3410-3a">{"GST"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3410-3d" aria-hidden="true">{"GST"}</label>
                            </th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a4" type="radio" name="stfd3410" id="stfd3410-4a" aria-label="Sort by Total, lowest or A first" />
                              <input className="srt-i srt-d4" type="radio" name="stfd3410" id="stfd3410-4d" aria-label="Sort by Total, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3410-4a">{"Total"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3410-4d" aria-hidden="true">{"Total"}</label>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{"--k0": "1", "--k2": "2", "--k3": "2", "--k4": "2"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"3 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹10,599.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,907.82"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹12,506.82"}</td>
                          </tr>
                          <tr style={{"--k0": "2", "--k2": "1", "--k3": "1", "--k4": "1"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"4 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹9,799.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,763.82"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹11,562.82"}</td>
                          </tr>
                          <tr style={{"--k0": "3", "--k2": "1", "--k3": "1", "--k4": "1"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"5 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹9,799.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,763.82"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹11,562.82"}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10055" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        {"Reprint invoice"}
                      </a>
                      <a className="btn" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10055" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#receipt" />
                        </svg>
                        {"Reprint bill (final folio)"}
                      </a>
                      <a className="btn" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10055" data-leads-to="FD-P27">{"Credit note"}</a>
                    </div>
                    <p className="fd-muted">{"Closed folios cannot be changed. A mistake is corrected with a credit note; a same-day re-open needs a supervisor (FD-P16)."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="f-FK-10068" data-code="FD-34" role="dialog" aria-modal="true" aria-labelledby="f-FK-10068-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="f-FK-10068-t">{"Closed folio – Ms Remya Kurian"}</h2>
                      <p className="modal__desc">{"INV/26-27/003778 · 6 Oct"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Folio"}</dt>
                      <dd>
                        <strong>{"FL-26-10068"}</strong>
                        {" · closed 6 Oct"}
                      </dd>
                      <dt>{"Guest"}</dt>
                      <dd>{"Ms Remya Kurian · FK-10068"}</dd>
                      <dt>{"Room · stay"}</dt>
                      <dd>
                        <span className="fd-rms" title="Rooms 110, 313, 502">
                          <span className="fd-rm fd-rm--OD" title="Occupied dirty">{"110"}</span>
                          <span className="fd-rm fd-rm--OC" title="Occupied clean">{"313"}</span>
                          <span className="fd-rm fd-rm--VD" title="Vacant dirty">{"502"}</span>
                        </span>
                        {" 3 Oct → 6 Oct · 3 nights"}
                      </dd>
                      <dt>{"Invoice"}</dt>
                      <dd>{"INV/26-27/003778 · B2C · no IRN"}</dd>
                      <dt>{"Payments"}</dt>
                      <dd>{"₹97,693.38 received – balance ₹0"}</dd>
                      <dt>{"Status"}</dt>
                      <dd>
                        <span className="pill pill--ready">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#lock" />
                          </svg>
                          {"Closed – read-only"}
                        </span>
                      </dd>
                    </dl>
                    <div className="s-scroll">
                      <table className="srt dt__table dt--hug" data-code="FD-34-folio" style={{"--srt-cols": "auto auto auto auto auto"}} data-mc="">
                        <caption className="sr-only">{"Charges of the closed folio"}</caption>
                        <thead>
                          <tr>
                            <th scope="col">
                              <input className="srt-i srt-a0" type="radio" name="stfd3411" id="stfd3411-0a" aria-label="Sort by Date, lowest or A first" />
                              <input className="srt-i srt-d0" type="radio" name="stfd3411" id="stfd3411-0d" aria-label="Sort by Date, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3411-0a">{"Date"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3411-0d" aria-hidden="true">{"Date"}</label>
                            </th>
                            <th scope="col">
                              <input className="srt-i srt-a1" type="radio" name="stfd3411" id="stfd3411-1a" aria-label="Sort by Description, lowest or A first" />
                              <input className="srt-i srt-d1" type="radio" name="stfd3411" id="stfd3411-1d" aria-label="Sort by Description, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3411-1a">{"Description"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3411-1d" aria-hidden="true">{"Description"}</label>
                            </th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a2" type="radio" name="stfd3411" id="stfd3411-2a" aria-label="Sort by Amount, lowest or A first" />
                              <input className="srt-i srt-d2" type="radio" name="stfd3411" id="stfd3411-2d" aria-label="Sort by Amount, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3411-2a">{"Amount"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3411-2d" aria-hidden="true">{"Amount"}</label>
                            </th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a3" type="radio" name="stfd3411" id="stfd3411-3a" aria-label="Sort by GST, lowest or A first" />
                              <input className="srt-i srt-d3" type="radio" name="stfd3411" id="stfd3411-3d" aria-label="Sort by GST, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3411-3a">{"GST"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3411-3d" aria-hidden="true">{"GST"}</label>
                            </th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a4" type="radio" name="stfd3411" id="stfd3411-4a" aria-label="Sort by Total, lowest or A first" />
                              <input className="srt-i srt-d4" type="radio" name="stfd3411" id="stfd3411-4d" aria-label="Sort by Total, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3411-4a">{"Total"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3411-4d" aria-hidden="true">{"Total"}</label>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{"--k0": "1", "--k1": "1", "--k2": "3", "--k3": "3", "--k4": "3"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"3 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹8,799.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,583.82"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹10,382.82"}</td>
                          </tr>
                          <tr style={{"--k0": "2", "--k1": "1", "--k2": "1", "--k3": "1", "--k4": "1"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"4 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹7,999.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,439.82"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹9,438.82"}</td>
                          </tr>
                          <tr style={{"--k0": "3", "--k1": "1", "--k2": "1", "--k3": "1", "--k4": "1"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"5 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹7,999.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,439.82"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹9,438.82"}</td>
                          </tr>
                          <tr style={{"--k0": "1", "--k1": "2", "--k2": "4", "--k3": "4", "--k4": "4"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"3 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – PDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹9,299.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,673.82"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹10,972.82"}</td>
                          </tr>
                          <tr style={{"--k0": "2", "--k1": "2", "--k2": "2", "--k3": "2", "--k4": "2"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"4 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – PDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹8,499.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,529.82"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹10,028.82"}</td>
                          </tr>
                          <tr style={{"--k0": "3", "--k1": "2", "--k2": "2", "--k3": "2", "--k4": "2"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"5 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – PDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹8,499.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,529.82"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹10,028.82"}</td>
                          </tr>
                          <tr style={{"--k0": "1", "--k1": "2", "--k2": "6", "--k3": "6", "--k4": "6"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"3 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – PDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹11,099.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,997.82"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹13,096.82"}</td>
                          </tr>
                          <tr style={{"--k0": "2", "--k1": "2", "--k2": "5", "--k3": "5", "--k4": "5"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"4 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – PDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹10,299.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,853.82"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹12,152.82"}</td>
                          </tr>
                          <tr style={{"--k0": "3", "--k1": "2", "--k2": "5", "--k3": "5", "--k4": "5"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"5 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – PDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹10,299.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,853.82"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹12,152.82"}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10068" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        {"Reprint invoice"}
                      </a>
                      <a className="btn" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10068" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#receipt" />
                        </svg>
                        {"Reprint bill (final folio)"}
                      </a>
                      <a className="btn" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10068" data-leads-to="FD-P27">{"Credit note"}</a>
                    </div>
                    <p className="fd-muted">{"Closed folios cannot be changed. A mistake is corrected with a credit note; a same-day re-open needs a supervisor (FD-P16)."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="f-FK-10036" data-code="FD-34" role="dialog" aria-modal="true" aria-labelledby="f-FK-10036-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="f-FK-10036-t">{"Closed folio – Mr Unni Wilson"}</h2>
                      <p className="modal__desc">{"INV/26-27/003779 · 7 Oct"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Folio"}</dt>
                      <dd>
                        <strong>{"FL-26-10036"}</strong>
                        {" · closed 7 Oct"}
                      </dd>
                      <dt>{"Guest"}</dt>
                      <dd>{"Mr Unni Wilson · FK-10036"}</dd>
                      <dt>{"Room · stay"}</dt>
                      <dd>
                        <span className="fd-rm fd-rm--OC" title="Occupied clean">{"517"}</span>
                        {" 3 Oct → 7 Oct · 4 nights"}
                      </dd>
                      <dt>{"Invoice"}</dt>
                      <dd>{"INV/26-27/003779 · B2C · no IRN"}</dd>
                      <dt>{"Payments"}</dt>
                      <dd>{"₹1,16,110.82 received – balance ₹0"}</dd>
                      <dt>{"Status"}</dt>
                      <dd>
                        <span className="pill pill--ready">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#lock" />
                          </svg>
                          {"Closed – read-only"}
                        </span>
                      </dd>
                    </dl>
                    <div className="s-scroll">
                      <table className="srt dt__table dt--hug" data-code="FD-34-folio" style={{"--srt-cols": "auto auto auto auto auto"}} data-mc="">
                        <caption className="sr-only">{"Charges of the closed folio"}</caption>
                        <thead>
                          <tr>
                            <th scope="col">
                              <input className="srt-i srt-a0" type="radio" name="stfd3412" id="stfd3412-0a" aria-label="Sort by Date, lowest or A first" />
                              <input className="srt-i srt-d0" type="radio" name="stfd3412" id="stfd3412-0d" aria-label="Sort by Date, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3412-0a">{"Date"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3412-0d" aria-hidden="true">{"Date"}</label>
                            </th>
                            <th scope="col">{"Description"}</th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a2" type="radio" name="stfd3412" id="stfd3412-2a" aria-label="Sort by Amount, lowest or A first" />
                              <input className="srt-i srt-d2" type="radio" name="stfd3412" id="stfd3412-2d" aria-label="Sort by Amount, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3412-2a">{"Amount"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3412-2d" aria-hidden="true">{"Amount"}</label>
                            </th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a3" type="radio" name="stfd3412" id="stfd3412-3a" aria-label="Sort by GST, lowest or A first" />
                              <input className="srt-i srt-d3" type="radio" name="stfd3412" id="stfd3412-3d" aria-label="Sort by GST, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3412-3a">{"GST"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3412-3d" aria-hidden="true">{"GST"}</label>
                            </th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a4" type="radio" name="stfd3412" id="stfd3412-4a" aria-label="Sort by Total, lowest or A first" />
                              <input className="srt-i srt-d4" type="radio" name="stfd3412" id="stfd3412-4d" aria-label="Sort by Total, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3412-4a">{"Total"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3412-4d" aria-hidden="true">{"Total"}</label>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{"--k0": "1", "--k2": "2", "--k3": "2", "--k4": "2"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"3 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – PRMS (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹26,399.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹4,751.82"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹31,150.82"}</td>
                          </tr>
                          <tr style={{"--k0": "2", "--k2": "1", "--k3": "1", "--k4": "1"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"4 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – PRMS (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹24,000.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹4,320.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹28,320.00"}</td>
                          </tr>
                          <tr style={{"--k0": "3", "--k2": "1", "--k3": "1", "--k4": "1"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"5 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – PRMS (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹24,000.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹4,320.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹28,320.00"}</td>
                          </tr>
                          <tr style={{"--k0": "4", "--k2": "1", "--k3": "1", "--k4": "1"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"6 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – PRMS (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹24,000.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹4,320.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹28,320.00"}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10036" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        {"Reprint invoice"}
                      </a>
                      <a className="btn" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10036" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#receipt" />
                        </svg>
                        {"Reprint bill (final folio)"}
                      </a>
                      <a className="btn" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10036" data-leads-to="FD-P27">{"Credit note"}</a>
                    </div>
                    <p className="fd-muted">{"Closed folios cannot be changed. A mistake is corrected with a credit note; a same-day re-open needs a supervisor (FD-P16)."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="f-FK-10044" data-code="FD-34" role="dialog" aria-modal="true" aria-labelledby="f-FK-10044-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="f-FK-10044-t">{"Closed folio – Mr Jayan Rahman"}</h2>
                      <p className="modal__desc">{"INV/26-27/003780 · 7 Oct"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Folio"}</dt>
                      <dd>
                        <strong>{"FL-26-10044"}</strong>
                        {" · closed 7 Oct"}
                      </dd>
                      <dt>{"Guest"}</dt>
                      <dd>{"Mr Jayan Rahman · FK-10044"}</dd>
                      <dt>{"Room · stay"}</dt>
                      <dd>
                        <span className="fd-rm fd-rm--OC" title="Occupied clean">{"112"}</span>
                        {" 3 Oct → 7 Oct · 4 nights"}
                      </dd>
                      <dt>{"Invoice"}</dt>
                      <dd>{"INV/26-27/003780 · B2C · no IRN"}</dd>
                      <dt>{"Payments"}</dt>
                      <dd>{"₹33,911.27 received – balance ₹0"}</dd>
                      <dt>{"Status"}</dt>
                      <dd>
                        <span className="pill pill--ready">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#lock" />
                          </svg>
                          {"Closed – read-only"}
                        </span>
                      </dd>
                    </dl>
                    <div className="s-scroll">
                      <table className="srt dt__table dt--hug" data-code="FD-34-folio" style={{"--srt-cols": "auto auto auto auto auto"}} data-mc="">
                        <caption className="sr-only">{"Charges of the closed folio"}</caption>
                        <thead>
                          <tr>
                            <th scope="col">
                              <input className="srt-i srt-a0" type="radio" name="stfd3413" id="stfd3413-0a" aria-label="Sort by Date, lowest or A first" />
                              <input className="srt-i srt-d0" type="radio" name="stfd3413" id="stfd3413-0d" aria-label="Sort by Date, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3413-0a">{"Date"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3413-0d" aria-hidden="true">{"Date"}</label>
                            </th>
                            <th scope="col">{"Description"}</th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a2" type="radio" name="stfd3413" id="stfd3413-2a" aria-label="Sort by Amount, lowest or A first" />
                              <input className="srt-i srt-d2" type="radio" name="stfd3413" id="stfd3413-2d" aria-label="Sort by Amount, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3413-2a">{"Amount"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3413-2d" aria-hidden="true">{"Amount"}</label>
                            </th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a3" type="radio" name="stfd3413" id="stfd3413-3a" aria-label="Sort by GST, lowest or A first" />
                              <input className="srt-i srt-d3" type="radio" name="stfd3413" id="stfd3413-3d" aria-label="Sort by GST, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3413-3a">{"GST"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3413-3d" aria-hidden="true">{"GST"}</label>
                            </th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a4" type="radio" name="stfd3413" id="stfd3413-4a" aria-label="Sort by Total, lowest or A first" />
                              <input className="srt-i srt-d4" type="radio" name="stfd3413" id="stfd3413-4d" aria-label="Sort by Total, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3413-4a">{"Total"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3413-4d" aria-hidden="true">{"Total"}</label>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{"--k0": "1", "--k2": "2", "--k3": "2", "--k4": "2"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"3 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹7,919.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,425.42"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹9,344.42"}</td>
                          </tr>
                          <tr style={{"--k0": "2", "--k2": "1", "--k3": "1", "--k4": "1"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"4 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹7,199.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST">{"₹359.95"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹7,558.95"}</td>
                          </tr>
                          <tr style={{"--k0": "3", "--k2": "1", "--k3": "1", "--k4": "1"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"5 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹7,199.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST">{"₹359.95"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹7,558.95"}</td>
                          </tr>
                          <tr style={{"--k0": "4", "--k2": "1", "--k3": "1", "--k4": "1"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"6 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹7,199.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST">{"₹359.95"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹7,558.95"}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10044" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        {"Reprint invoice"}
                      </a>
                      <a className="btn" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10044" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#receipt" />
                        </svg>
                        {"Reprint bill (final folio)"}
                      </a>
                      <a className="btn" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10044" data-leads-to="FD-P27">{"Credit note"}</a>
                    </div>
                    <p className="fd-muted">{"Closed folios cannot be changed. A mistake is corrected with a credit note; a same-day re-open needs a supervisor (FD-P16)."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="f-FK-10066" data-code="FD-34" role="dialog" aria-modal="true" aria-labelledby="f-FK-10066-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="f-FK-10066-t">{"Closed folio – Mr Marco Rossi"}</h2>
                      <p className="modal__desc">{"INV/26-27/003781 · 8 Oct"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Folio"}</dt>
                      <dd>
                        <strong>{"FL-26-10066"}</strong>
                        {" · closed 8 Oct"}
                      </dd>
                      <dt>{"Guest"}</dt>
                      <dd>{"Mr Marco Rossi · FK-10066"}</dd>
                      <dt>{"Room · stay"}</dt>
                      <dd>
                        <span className="fd-rm fd-rm--OC" title="Occupied clean">{"208"}</span>
                        {" 3 Oct → 8 Oct · 5 nights"}
                      </dd>
                      <dt>{"Invoice"}</dt>
                      <dd>{"INV/26-27/003781 · B2C · no IRN"}</dd>
                      <dt>{"Payments"}</dt>
                      <dd>{"₹40,632.62 received – balance ₹0"}</dd>
                      <dt>{"Status"}</dt>
                      <dd>
                        <span className="pill pill--ready">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#lock" />
                          </svg>
                          {"Closed – read-only"}
                        </span>
                      </dd>
                    </dl>
                    <div className="s-scroll">
                      <table className="srt dt__table dt--hug" data-code="FD-34-folio" style={{"--srt-cols": "auto auto auto auto auto"}} data-mc="">
                        <caption className="sr-only">{"Charges of the closed folio"}</caption>
                        <thead>
                          <tr>
                            <th scope="col">
                              <input className="srt-i srt-a0" type="radio" name="stfd3414" id="stfd3414-0a" aria-label="Sort by Date, lowest or A first" />
                              <input className="srt-i srt-d0" type="radio" name="stfd3414" id="stfd3414-0d" aria-label="Sort by Date, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3414-0a">{"Date"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3414-0d" aria-hidden="true">{"Date"}</label>
                            </th>
                            <th scope="col">{"Description"}</th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a2" type="radio" name="stfd3414" id="stfd3414-2a" aria-label="Sort by Amount, lowest or A first" />
                              <input className="srt-i srt-d2" type="radio" name="stfd3414" id="stfd3414-2d" aria-label="Sort by Amount, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3414-2a">{"Amount"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3414-2d" aria-hidden="true">{"Amount"}</label>
                            </th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a3" type="radio" name="stfd3414" id="stfd3414-3a" aria-label="Sort by GST, lowest or A first" />
                              <input className="srt-i srt-d3" type="radio" name="stfd3414" id="stfd3414-3d" aria-label="Sort by GST, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3414-3a">{"GST"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3414-3d" aria-hidden="true">{"GST"}</label>
                            </th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a4" type="radio" name="stfd3414" id="stfd3414-4a" aria-label="Sort by Total, lowest or A first" />
                              <input className="srt-i srt-d4" type="radio" name="stfd3414" id="stfd3414-4d" aria-label="Sort by Total, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3414-4a">{"Total"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3414-4d" aria-hidden="true">{"Total"}</label>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{"--k0": "1", "--k2": "2", "--k3": "2", "--k4": "2"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"3 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹8,099.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,457.82"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹9,556.82"}</td>
                          </tr>
                          <tr style={{"--k0": "2", "--k2": "1", "--k3": "1", "--k4": "1"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"4 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹7,399.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST">{"₹369.95"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹7,768.95"}</td>
                          </tr>
                          <tr style={{"--k0": "3", "--k2": "1", "--k3": "1", "--k4": "1"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"5 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹7,399.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST">{"₹369.95"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹7,768.95"}</td>
                          </tr>
                          <tr style={{"--k0": "4", "--k2": "1", "--k3": "1", "--k4": "1"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"6 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹7,399.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST">{"₹369.95"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹7,768.95"}</td>
                          </tr>
                          <tr style={{"--k0": "5", "--k2": "1", "--k3": "1", "--k4": "1"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"7 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹7,399.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST">{"₹369.95"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹7,768.95"}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10066" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        {"Reprint invoice"}
                      </a>
                      <a className="btn" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10066" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#receipt" />
                        </svg>
                        {"Reprint bill (final folio)"}
                      </a>
                      <a className="btn" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10066" data-leads-to="FD-P27">{"Credit note"}</a>
                    </div>
                    <p className="fd-muted">{"Closed folios cannot be changed. A mistake is corrected with a credit note; a same-day re-open needs a supervisor (FD-P16)."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="f-FK-10092" data-code="FD-34" role="dialog" aria-modal="true" aria-labelledby="f-FK-10092-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="f-FK-10092-t">{"Closed folio – Mr Rohit Neil"}</h2>
                      <p className="modal__desc">{"INV/26-27/003782 · 8 Oct"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Folio"}</dt>
                      <dd>
                        <strong>{"FL-26-10092"}</strong>
                        {" · closed 8 Oct"}
                      </dd>
                      <dt>{"Guest"}</dt>
                      <dd>{"Mr Rohit Neil · FK-10092"}</dd>
                      <dt>{"Room · stay"}</dt>
                      <dd>
                        <span className="fd-rm fd-rm--OC" title="Occupied clean">{"219"}</span>
                        {" 4 Oct → 8 Oct · 4 nights"}
                      </dd>
                      <dt>{"Invoice"}</dt>
                      <dd>{"INV/26-27/003782 · B2C · no IRN"}</dd>
                      <dt>{"Payments"}</dt>
                      <dd>{"₹50,961.84 received – balance ₹0"}</dd>
                      <dt>{"Status"}</dt>
                      <dd>
                        <span className="pill pill--ready">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#lock" />
                          </svg>
                          {"Closed – read-only"}
                        </span>
                      </dd>
                    </dl>
                    <div className="s-scroll">
                      <table className="srt dt__table dt--hug" data-code="FD-34-folio" style={{"--srt-cols": "auto auto auto auto auto"}} data-mc="">
                        <caption className="sr-only">{"Charges of the closed folio"}</caption>
                        <thead>
                          <tr>
                            <th scope="col">
                              <input className="srt-i srt-a0" type="radio" name="stfd3415" id="stfd3415-0a" aria-label="Sort by Date, lowest or A first" />
                              <input className="srt-i srt-d0" type="radio" name="stfd3415" id="stfd3415-0d" aria-label="Sort by Date, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3415-0a">{"Date"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3415-0d" aria-hidden="true">{"Date"}</label>
                            </th>
                            <th scope="col">{"Description"}</th>
                            <th scope="col" className="dt__th--right">{"Amount"}</th>
                            <th scope="col" className="dt__th--right">{"GST"}</th>
                            <th scope="col" className="dt__th--right">{"Total"}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{"--k0": "1"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"4 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹10,797.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,943.46"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹12,740.46"}</td>
                          </tr>
                          <tr style={{"--k0": "2"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"5 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹10,797.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,943.46"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹12,740.46"}</td>
                          </tr>
                          <tr style={{"--k0": "3"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"6 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹10,797.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,943.46"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹12,740.46"}</td>
                          </tr>
                          <tr style={{"--k0": "4"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"7 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹10,797.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,943.46"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹12,740.46"}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10092" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        {"Reprint invoice"}
                      </a>
                      <a className="btn" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10092" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#receipt" />
                        </svg>
                        {"Reprint bill (final folio)"}
                      </a>
                      <a className="btn" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10092" data-leads-to="FD-P27">{"Credit note"}</a>
                    </div>
                    <p className="fd-muted">{"Closed folios cannot be changed. A mistake is corrected with a credit note; a same-day re-open needs a supervisor (FD-P16)."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="f-FK-10019" data-code="FD-34" role="dialog" aria-modal="true" aria-labelledby="f-FK-10019-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="f-FK-10019-t">{"Closed folio – Ms Isha Neil"}</h2>
                      <p className="modal__desc">{"INV/26-27/003783 · 9 Oct"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Folio"}</dt>
                      <dd>
                        <strong>{"FL-26-10019"}</strong>
                        {" · closed 9 Oct"}
                      </dd>
                      <dt>{"Guest"}</dt>
                      <dd>{"Ms Isha Neil · FK-10019"}</dd>
                      <dt>{"Room · stay"}</dt>
                      <dd>
                        <span className="fd-rm fd-rm--OC" title="Occupied clean">{"103"}</span>
                        {" 5 Oct → 9 Oct · 4 nights"}
                      </dd>
                      <dt>{"Invoice"}</dt>
                      <dd>{"INV/26-27/003783 · B2C · no IRN"}</dd>
                      <dt>{"Payments"}</dt>
                      <dd>{"₹31,075.80 received – balance ₹0"}</dd>
                      <dt>{"Status"}</dt>
                      <dd>
                        <span className="pill pill--ready">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#lock" />
                          </svg>
                          {"Closed – read-only"}
                        </span>
                      </dd>
                    </dl>
                    <div className="s-scroll">
                      <table className="srt dt__table dt--hug" data-code="FD-34-folio" style={{"--srt-cols": "auto auto auto auto auto"}} data-mc="">
                        <caption className="sr-only">{"Charges of the closed folio"}</caption>
                        <thead>
                          <tr>
                            <th scope="col">
                              <input className="srt-i srt-a0" type="radio" name="stfd3416" id="stfd3416-0a" aria-label="Sort by Date, lowest or A first" />
                              <input className="srt-i srt-d0" type="radio" name="stfd3416" id="stfd3416-0d" aria-label="Sort by Date, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3416-0a">{"Date"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3416-0d" aria-hidden="true">{"Date"}</label>
                            </th>
                            <th scope="col">{"Description"}</th>
                            <th scope="col" className="dt__th--right">{"Amount"}</th>
                            <th scope="col" className="dt__th--right">{"GST"}</th>
                            <th scope="col" className="dt__th--right">{"Total"}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{"--k0": "1"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"5 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹7,399.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST">{"₹369.95"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹7,768.95"}</td>
                          </tr>
                          <tr style={{"--k0": "2"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"6 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹7,399.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST">{"₹369.95"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹7,768.95"}</td>
                          </tr>
                          <tr style={{"--k0": "3"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"7 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹7,399.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST">{"₹369.95"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹7,768.95"}</td>
                          </tr>
                          <tr style={{"--k0": "4"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"8 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹7,399.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST">{"₹369.95"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹7,768.95"}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10019" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        {"Reprint invoice"}
                      </a>
                      <a className="btn" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10019" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#receipt" />
                        </svg>
                        {"Reprint bill (final folio)"}
                      </a>
                      <a className="btn" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10019" data-leads-to="FD-P27">{"Credit note"}</a>
                    </div>
                    <p className="fd-muted">{"Closed folios cannot be changed. A mistake is corrected with a credit note; a same-day re-open needs a supervisor (FD-P16)."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="f-FK-10083" data-code="FD-34" role="dialog" aria-modal="true" aria-labelledby="f-FK-10083-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="f-FK-10083-t">{"Closed folio – Mrs Isha Kunal"}</h2>
                      <p className="modal__desc">{"INV/26-27/003784 · 9 Oct"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Folio"}</dt>
                      <dd>
                        <strong>{"FL-26-10083"}</strong>
                        {" · closed 9 Oct"}
                      </dd>
                      <dt>{"Guest"}</dt>
                      <dd>{"Mrs Isha Kunal · FK-10083"}</dd>
                      <dt>{"Room · stay"}</dt>
                      <dd>
                        <span className="fd-rm fd-rm--OC" title="Occupied clean">{"216"}</span>
                        {" 5 Oct → 9 Oct · 4 nights"}
                      </dd>
                      <dt>{"Invoice"}</dt>
                      <dd>{"INV/26-27/003784 · B2C · no IRN"}</dd>
                      <dt>{"Payments"}</dt>
                      <dd>{"₹35,867.52 received – balance ₹0"}</dd>
                      <dt>{"Status"}</dt>
                      <dd>
                        <span className="pill pill--ready">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#lock" />
                          </svg>
                          {"Closed – read-only"}
                        </span>
                      </dd>
                    </dl>
                    <div className="s-scroll">
                      <table className="srt dt__table dt--hug" data-code="FD-34-folio" style={{"--srt-cols": "auto auto auto auto auto"}} data-mc="">
                        <caption className="sr-only">{"Charges of the closed folio"}</caption>
                        <thead>
                          <tr>
                            <th scope="col">
                              <input className="srt-i srt-a0" type="radio" name="stfd3417" id="stfd3417-0a" aria-label="Sort by Date, lowest or A first" />
                              <input className="srt-i srt-d0" type="radio" name="stfd3417" id="stfd3417-0d" aria-label="Sort by Date, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3417-0a">{"Date"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3417-0d" aria-hidden="true">{"Date"}</label>
                            </th>
                            <th scope="col">{"Description"}</th>
                            <th scope="col" className="dt__th--right">{"Amount"}</th>
                            <th scope="col" className="dt__th--right">{"GST"}</th>
                            <th scope="col" className="dt__th--right">{"Total"}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{"--k0": "1"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"5 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹7,599.05"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,367.83"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹8,966.88"}</td>
                          </tr>
                          <tr style={{"--k0": "2"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"6 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹7,599.05"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,367.83"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹8,966.88"}</td>
                          </tr>
                          <tr style={{"--k0": "3"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"7 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹7,599.05"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,367.83"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹8,966.88"}</td>
                          </tr>
                          <tr style={{"--k0": "4"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"8 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹7,599.05"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,367.83"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹8,966.88"}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10083" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        {"Reprint invoice"}
                      </a>
                      <a className="btn" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10083" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#receipt" />
                        </svg>
                        {"Reprint bill (final folio)"}
                      </a>
                      <a className="btn" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10083" data-leads-to="FD-P27">{"Credit note"}</a>
                    </div>
                    <p className="fd-muted">{"Closed folios cannot be changed. A mistake is corrected with a credit note; a same-day re-open needs a supervisor (FD-P16)."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="f-FK-10099" data-code="FD-34" role="dialog" aria-modal="true" aria-labelledby="f-FK-10099-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="f-FK-10099-t">{"Closed folio – Mr Naveen Gautam"}</h2>
                      <p className="modal__desc">{"INV/26-27/003785 · 9 Oct"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Folio"}</dt>
                      <dd>
                        <strong>{"FL-26-10099"}</strong>
                        {" · closed 9 Oct"}
                      </dd>
                      <dt>{"Guest"}</dt>
                      <dd>{"Mr Naveen Gautam · FK-10099"}</dd>
                      <dt>{"Room · stay"}</dt>
                      <dd>
                        <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"312"}</span>
                        {" 7 Oct → 9 Oct · 2 nights"}
                      </dd>
                      <dt>{"Invoice"}</dt>
                      <dd>{"INV/26-27/003785 · B2B – Global Pathways DMC · Generated"}</dd>
                      <dt>{"Payments"}</dt>
                      <dd>{"₹16,369.50 received – balance ₹0"}</dd>
                      <dt>{"Status"}</dt>
                      <dd>
                        <span className="pill pill--ready">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#lock" />
                          </svg>
                          {"Closed – read-only"}
                        </span>
                      </dd>
                    </dl>
                    <div className="s-scroll">
                      <table className="dt__table dt--hug" data-code="FD-34-folio" data-mc="">
                        <caption className="sr-only">{"Charges of the closed folio"}</caption>
                        <thead>
                          <tr>
                            <th scope="col">{"Date"}</th>
                            <th scope="col">{"Description"}</th>
                            <th scope="col" className="dt__th--right">{"Amount"}</th>
                            <th scope="col" className="dt__th--right">{"GST"}</th>
                            <th scope="col" className="dt__th--right">{"Total"}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="dt__td nw" data-label="Date" data-t="">{"7 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – PDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹6,395.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST">{"₹319.75"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹6,714.75"}</td>
                          </tr>
                          <tr>
                            <td className="dt__td nw" data-label="Date" data-t="">{"8 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – PDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹6,395.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST">{"₹319.75"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹6,714.75"}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10099" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        {"Reprint invoice"}
                      </a>
                      <a className="btn" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10099" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#receipt" />
                        </svg>
                        {"Reprint bill (final folio)"}
                      </a>
                      <a className="btn" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10099" data-leads-to="FD-P27">{"Credit note"}</a>
                    </div>
                    <p className="fd-muted">{"Closed folios cannot be changed. A mistake is corrected with a credit note; a same-day re-open needs a supervisor (FD-P16)."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="f-FK-10007" data-code="FD-34" role="dialog" aria-modal="true" aria-labelledby="f-FK-10007-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="f-FK-10007-t">{"Closed folio – Mr Unni Rahman"}</h2>
                      <p className="modal__desc">{"INV/26-27/003786 · 12 Oct"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Folio"}</dt>
                      <dd>
                        <strong>{"FL-26-10007"}</strong>
                        {" · closed 12 Oct"}
                      </dd>
                      <dt>{"Guest"}</dt>
                      <dd>{"Mr Unni Rahman · FK-10007"}</dd>
                      <dt>{"Room · stay"}</dt>
                      <dd>
                        <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"204"}</span>
                        {" 11 Oct → 12 Oct · 1 night"}
                      </dd>
                      <dt>{"Invoice"}</dt>
                      <dd>{"INV/26-27/003786 · B2C · no IRN"}</dd>
                      <dt>{"Payments"}</dt>
                      <dd>{"₹7,138.95 received – balance ₹0"}</dd>
                      <dt>{"Status"}</dt>
                      <dd>
                        <span className="pill pill--ready">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#lock" />
                          </svg>
                          {"Closed – read-only"}
                        </span>
                      </dd>
                    </dl>
                    <div className="s-scroll">
                      <table className="dt__table dt--hug" data-code="FD-34-folio" data-mc="">
                        <caption className="sr-only">{"Charges of the closed folio"}</caption>
                        <thead>
                          <tr>
                            <th scope="col">{"Date"}</th>
                            <th scope="col">{"Description"}</th>
                            <th scope="col" className="dt__th--right">{"Amount"}</th>
                            <th scope="col" className="dt__th--right">{"GST"}</th>
                            <th scope="col" className="dt__th--right">{"Total"}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="dt__td nw" data-label="Date" data-t="">{"11 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹6,799.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST">{"₹339.95"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹7,138.95"}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10007" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        {"Reprint invoice"}
                      </a>
                      <a className="btn" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10007" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#receipt" />
                        </svg>
                        {"Reprint bill (final folio)"}
                      </a>
                      <a className="btn" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10007" data-leads-to="FD-P27">{"Credit note"}</a>
                    </div>
                    <p className="fd-muted">{"Closed folios cannot be changed. A mistake is corrected with a credit note; a same-day re-open needs a supervisor (FD-P16)."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="f-FK-10079" data-code="FD-34" role="dialog" aria-modal="true" aria-labelledby="f-FK-10079-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="f-FK-10079-t">{"Closed folio – Ms Claire Dubois"}</h2>
                      <p className="modal__desc">{"INV/26-27/003787 · 12 Oct"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Folio"}</dt>
                      <dd>
                        <strong>{"FL-26-10079"}</strong>
                        {" · closed 12 Oct"}
                      </dd>
                      <dt>{"Guest"}</dt>
                      <dd>{"Ms Claire Dubois · FK-10079"}</dd>
                      <dt>{"Room · stay"}</dt>
                      <dd>
                        <span className="fd-rm fd-rm--OOO" title="Out of order">{"214"}</span>
                        {" 8 Oct → 12 Oct · 4 nights"}
                      </dd>
                      <dt>{"Invoice"}</dt>
                      <dd>{"INV/26-27/003787 · B2C · no IRN"}</dd>
                      <dt>{"Payments"}</dt>
                      <dd>{"₹34,651.54 received – balance ₹0"}</dd>
                      <dt>{"Status"}</dt>
                      <dd>
                        <span className="pill pill--ready">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#lock" />
                          </svg>
                          {"Closed – read-only"}
                        </span>
                      </dd>
                    </dl>
                    <div className="s-scroll">
                      <table className="srt dt__table dt--hug" data-code="FD-34-folio" style={{"--srt-cols": "auto auto auto auto auto"}} data-mc="">
                        <caption className="sr-only">{"Charges of the closed folio"}</caption>
                        <thead>
                          <tr>
                            <th scope="col">
                              <input className="srt-i srt-a0" type="radio" name="stfd3418" id="stfd3418-0a" aria-label="Sort by Date, lowest or A first" />
                              <input className="srt-i srt-d0" type="radio" name="stfd3418" id="stfd3418-0d" aria-label="Sort by Date, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3418-0a">{"Date"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3418-0d" aria-hidden="true">{"Date"}</label>
                            </th>
                            <th scope="col">{"Description"}</th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a2" type="radio" name="stfd3418" id="stfd3418-2a" aria-label="Sort by Amount, lowest or A first" />
                              <input className="srt-i srt-d2" type="radio" name="stfd3418" id="stfd3418-2d" aria-label="Sort by Amount, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3418-2a">{"Amount"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3418-2d" aria-hidden="true">{"Amount"}</label>
                            </th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a3" type="radio" name="stfd3418" id="stfd3418-3a" aria-label="Sort by GST, lowest or A first" />
                              <input className="srt-i srt-d3" type="radio" name="stfd3418" id="stfd3418-3d" aria-label="Sort by GST, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3418-3a">{"GST"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3418-3d" aria-hidden="true">{"GST"}</label>
                            </th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a4" type="radio" name="stfd3418" id="stfd3418-4a" aria-label="Sort by Total, lowest or A first" />
                              <input className="srt-i srt-d4" type="radio" name="stfd3418" id="stfd3418-4d" aria-label="Sort by Total, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3418-4a">{"Total"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3418-4d" aria-hidden="true">{"Total"}</label>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{"--k0": "1", "--k2": "1", "--k3": "1", "--k4": "1"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"8 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹7,399.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST">{"₹369.95"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹7,768.95"}</td>
                          </tr>
                          <tr style={{"--k0": "2", "--k2": "2", "--k3": "2", "--k4": "2"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"9 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹8,099.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,457.82"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹9,556.82"}</td>
                          </tr>
                          <tr style={{"--k0": "3", "--k2": "2", "--k3": "2", "--k4": "2"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"10 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹8,099.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,457.82"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹9,556.82"}</td>
                          </tr>
                          <tr style={{"--k0": "4", "--k2": "1", "--k3": "1", "--k4": "1"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"11 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹7,399.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST">{"₹369.95"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹7,768.95"}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10079" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        {"Reprint invoice"}
                      </a>
                      <a className="btn" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10079" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#receipt" />
                        </svg>
                        {"Reprint bill (final folio)"}
                      </a>
                      <a className="btn" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10079" data-leads-to="FD-P27">{"Credit note"}</a>
                    </div>
                    <p className="fd-muted">{"Closed folios cannot be changed. A mistake is corrected with a credit note; a same-day re-open needs a supervisor (FD-P16)."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="f-FK-10090" data-code="FD-34" role="dialog" aria-modal="true" aria-labelledby="f-FK-10090-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="f-FK-10090-t">{"Closed folio – Ms Sindhu Rahman"}</h2>
                      <p className="modal__desc">{"INV/26-27/003788 · 12 Oct"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Folio"}</dt>
                      <dd>
                        <strong>{"FL-26-10090"}</strong>
                        {" · closed 12 Oct"}
                      </dd>
                      <dt>{"Guest"}</dt>
                      <dd>{"Ms Sindhu Rahman · FK-10090"}</dd>
                      <dt>{"Room · stay"}</dt>
                      <dd>
                        <span className="fd-rm fd-rm--OC" title="Occupied clean">{"201"}</span>
                        {" 7 Oct → 12 Oct · 5 nights"}
                      </dd>
                      <dt>{"Invoice"}</dt>
                      <dd>{"INV/26-27/003788 · B2B – Spice Route Hospitality Consultants · Cancelled"}</dd>
                      <dt>{"Payments"}</dt>
                      <dd>{"₹40,446.33 received – balance ₹0"}</dd>
                      <dt>{"Status"}</dt>
                      <dd>
                        <span className="pill pill--ready">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#lock" />
                          </svg>
                          {"Closed – read-only"}
                        </span>
                      </dd>
                    </dl>
                    <div className="s-scroll">
                      <table className="srt dt__table dt--hug" data-code="FD-34-folio" style={{"--srt-cols": "auto auto auto auto auto"}} data-mc="">
                        <caption className="sr-only">{"Charges of the closed folio"}</caption>
                        <thead>
                          <tr>
                            <th scope="col">
                              <input className="srt-i srt-a0" type="radio" name="stfd3419" id="stfd3419-0a" aria-label="Sort by Date, lowest or A first" />
                              <input className="srt-i srt-d0" type="radio" name="stfd3419" id="stfd3419-0d" aria-label="Sort by Date, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3419-0a">{"Date"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3419-0d" aria-hidden="true">{"Date"}</label>
                            </th>
                            <th scope="col">{"Description"}</th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a2" type="radio" name="stfd3419" id="stfd3419-2a" aria-label="Sort by Amount, lowest or A first" />
                              <input className="srt-i srt-d2" type="radio" name="stfd3419" id="stfd3419-2d" aria-label="Sort by Amount, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3419-2a">{"Amount"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3419-2d" aria-hidden="true">{"Amount"}</label>
                            </th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a3" type="radio" name="stfd3419" id="stfd3419-3a" aria-label="Sort by GST, lowest or A first" />
                              <input className="srt-i srt-d3" type="radio" name="stfd3419" id="stfd3419-3d" aria-label="Sort by GST, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3419-3a">{"GST"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3419-3d" aria-hidden="true">{"GST"}</label>
                            </th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a4" type="radio" name="stfd3419" id="stfd3419-4a" aria-label="Sort by Total, lowest or A first" />
                              <input className="srt-i srt-d4" type="radio" name="stfd3419" id="stfd3419-4d" aria-label="Sort by Total, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3419-4a">{"Total"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3419-4d" aria-hidden="true">{"Total"}</label>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{"--k0": "1", "--k2": "1", "--k3": "1", "--k4": "1"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"7 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹7,039.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST">{"₹351.95"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹7,390.95"}</td>
                          </tr>
                          <tr style={{"--k0": "2", "--k2": "1", "--k3": "1", "--k4": "1"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"8 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹7,039.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST">{"₹351.95"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹7,390.95"}</td>
                          </tr>
                          <tr style={{"--k0": "3", "--k2": "2", "--k3": "2", "--k4": "2"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"9 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹7,743.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,393.74"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹9,136.74"}</td>
                          </tr>
                          <tr style={{"--k0": "4", "--k2": "2", "--k3": "2", "--k4": "2"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"10 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹7,743.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,393.74"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹9,136.74"}</td>
                          </tr>
                          <tr style={{"--k0": "5", "--k2": "1", "--k3": "1", "--k4": "1"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"11 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹7,039.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST">{"₹351.95"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹7,390.95"}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10090" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        {"Reprint invoice"}
                      </a>
                      <a className="btn" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10090" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#receipt" />
                        </svg>
                        {"Reprint bill (final folio)"}
                      </a>
                      <a className="btn" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10090" data-leads-to="FD-P27">{"Credit note"}</a>
                    </div>
                    <p className="fd-muted">{"Closed folios cannot be changed. A mistake is corrected with a credit note; a same-day re-open needs a supervisor (FD-P16)."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="f-FK-10065" data-code="FD-34" role="dialog" aria-modal="true" aria-labelledby="f-FK-10065-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="f-FK-10065-t">{"Closed folio – Ms Parvathy Thomas"}</h2>
                      <p className="modal__desc">{"INV/26-27/003789 · 13 Oct"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Folio"}</dt>
                      <dd>
                        <strong>{"FL-26-10065"}</strong>
                        {" · closed 13 Oct"}
                      </dd>
                      <dt>{"Guest"}</dt>
                      <dd>{"Ms Parvathy Thomas · FK-10065"}</dd>
                      <dt>{"Room · stay"}</dt>
                      <dd>
                        <span className="fd-rm fd-rm--OC" title="Occupied clean">{"503"}</span>
                        {" 12 Oct → 13 Oct · 1 night"}
                      </dd>
                      <dt>{"Invoice"}</dt>
                      <dd>{"INV/26-27/003789 · B2C · no IRN"}</dd>
                      <dt>{"Payments"}</dt>
                      <dd>{"₹13,922.82 received – balance ₹0"}</dd>
                      <dt>{"Status"}</dt>
                      <dd>
                        <span className="pill pill--ready">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#lock" />
                          </svg>
                          {"Closed – read-only"}
                        </span>
                      </dd>
                    </dl>
                    <div className="s-scroll">
                      <table className="dt__table dt--hug" data-code="FD-34-folio" data-mc="">
                        <caption className="sr-only">{"Charges of the closed folio"}</caption>
                        <thead>
                          <tr>
                            <th scope="col">{"Date"}</th>
                            <th scope="col">{"Description"}</th>
                            <th scope="col" className="dt__th--right">{"Amount"}</th>
                            <th scope="col" className="dt__th--right">{"GST"}</th>
                            <th scope="col" className="dt__th--right">{"Total"}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="dt__td nw" data-label="Date" data-t="">{"12 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – PDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹11,799.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹2,123.82"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹13,922.82"}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10065" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        {"Reprint invoice"}
                      </a>
                      <a className="btn" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10065" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#receipt" />
                        </svg>
                        {"Reprint bill (final folio)"}
                      </a>
                      <a className="btn" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10065" data-leads-to="FD-P27">{"Credit note"}</a>
                    </div>
                    <p className="fd-muted">{"Closed folios cannot be changed. A mistake is corrected with a credit note; a same-day re-open needs a supervisor (FD-P16)."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="f-FK-10009" data-code="FD-34" role="dialog" aria-modal="true" aria-labelledby="f-FK-10009-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="f-FK-10009-t">{"Closed folio – Dr Sophie de Vries"}</h2>
                      <p className="modal__desc">{"INV/26-27/003790 · 17 Oct"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Folio"}</dt>
                      <dd>
                        <strong>{"FL-26-10009"}</strong>
                        {" · closed 17 Oct"}
                      </dd>
                      <dt>{"Guest"}</dt>
                      <dd>{"Dr Sophie de Vries · FK-10009"}</dd>
                      <dt>{"Room · stay"}</dt>
                      <dd>
                        <span className="fd-rm fd-rm--OC" title="Occupied clean">{"213"}</span>
                        {" 13 Oct → 17 Oct · 4 nights"}
                      </dd>
                      <dt>{"Invoice"}</dt>
                      <dd>{"INV/26-27/003790 · B2C · no IRN"}</dd>
                      <dt>{"Payments"}</dt>
                      <dd>{"₹27,724.20 received – balance ₹0"}</dd>
                      <dt>{"Status"}</dt>
                      <dd>
                        <span className="pill pill--ready">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#lock" />
                          </svg>
                          {"Closed – read-only"}
                        </span>
                      </dd>
                    </dl>
                    <div className="s-scroll">
                      <table className="srt dt__table dt--hug" data-code="FD-34-folio" style={{"--srt-cols": "auto auto auto auto auto"}} data-mc="">
                        <caption className="sr-only">{"Charges of the closed folio"}</caption>
                        <thead>
                          <tr>
                            <th scope="col">
                              <input className="srt-i srt-a0" type="radio" name="stfd3420" id="stfd3420-0a" aria-label="Sort by Date, lowest or A first" />
                              <input className="srt-i srt-d0" type="radio" name="stfd3420" id="stfd3420-0d" aria-label="Sort by Date, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3420-0a">{"Date"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3420-0d" aria-hidden="true">{"Date"}</label>
                            </th>
                            <th scope="col">{"Description"}</th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a2" type="radio" name="stfd3420" id="stfd3420-2a" aria-label="Sort by Amount, lowest or A first" />
                              <input className="srt-i srt-d2" type="radio" name="stfd3420" id="stfd3420-2d" aria-label="Sort by Amount, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3420-2a">{"Amount"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3420-2d" aria-hidden="true">{"Amount"}</label>
                            </th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a3" type="radio" name="stfd3420" id="stfd3420-3a" aria-label="Sort by GST, lowest or A first" />
                              <input className="srt-i srt-d3" type="radio" name="stfd3420" id="stfd3420-3d" aria-label="Sort by GST, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3420-3a">{"GST"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3420-3d" aria-hidden="true">{"GST"}</label>
                            </th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a4" type="radio" name="stfd3420" id="stfd3420-4a" aria-label="Sort by Total, lowest or A first" />
                              <input className="srt-i srt-d4" type="radio" name="stfd3420" id="stfd3420-4d" aria-label="Sort by Total, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3420-4a">{"Total"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3420-4d" aria-hidden="true">{"Total"}</label>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{"--k0": "1", "--k2": "1", "--k3": "1", "--k4": "1"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"13 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹6,401.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST">{"₹320.05"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹6,721.05"}</td>
                          </tr>
                          <tr style={{"--k0": "2", "--k2": "1", "--k3": "1", "--k4": "1"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"14 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹6,401.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST">{"₹320.05"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹6,721.05"}</td>
                          </tr>
                          <tr style={{"--k0": "3", "--k2": "1", "--k3": "1", "--k4": "1"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"15 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹6,401.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST">{"₹320.05"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹6,721.05"}</td>
                          </tr>
                          <tr style={{"--k0": "4", "--k2": "2", "--k3": "2", "--k4": "2"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"16 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹7,201.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST">{"₹360.05"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹7,561.05"}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10009" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        {"Reprint invoice"}
                      </a>
                      <a className="btn" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10009" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#receipt" />
                        </svg>
                        {"Reprint bill (final folio)"}
                      </a>
                      <a className="btn" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10009" data-leads-to="FD-P27">{"Credit note"}</a>
                    </div>
                    <p className="fd-muted">{"Closed folios cannot be changed. A mistake is corrected with a credit note; a same-day re-open needs a supervisor (FD-P16)."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="f-FK-10012" data-code="FD-34" role="dialog" aria-modal="true" aria-labelledby="f-FK-10012-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="f-FK-10012-t">{"Closed folio – Dr Anna Schneider"}</h2>
                      <p className="modal__desc">{"INV/26-27/003791 · 17 Oct"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Folio"}</dt>
                      <dd>
                        <strong>{"FL-26-10012"}</strong>
                        {" · closed 17 Oct"}
                      </dd>
                      <dt>{"Guest"}</dt>
                      <dd>{"Dr Anna Schneider · FK-10012"}</dd>
                      <dt>{"Room · stay"}</dt>
                      <dd>
                        <span className="fd-rm fd-rm--OC" title="Occupied clean">{"318"}</span>
                        {" 15 Oct → 17 Oct · 2 nights"}
                      </dd>
                      <dt>{"Invoice"}</dt>
                      <dd>{"INV/26-27/003791 · B2C · no IRN"}</dd>
                      <dt>{"Payments"}</dt>
                      <dd>{"₹19,349.64 received – balance ₹0"}</dd>
                      <dt>{"Status"}</dt>
                      <dd>
                        <span className="pill pill--ready">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#lock" />
                          </svg>
                          {"Closed – read-only"}
                        </span>
                      </dd>
                    </dl>
                    <div className="s-scroll">
                      <table className="dt__table dt--hug" data-code="FD-34-folio" data-mc="">
                        <caption className="sr-only">{"Charges of the closed folio"}</caption>
                        <thead>
                          <tr>
                            <th scope="col">{"Date"}</th>
                            <th scope="col">{"Description"}</th>
                            <th scope="col" className="dt__th--right">{"Amount"}</th>
                            <th scope="col" className="dt__th--right">{"GST"}</th>
                            <th scope="col" className="dt__th--right">{"Total"}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="dt__td nw" data-label="Date" data-t="">{"15 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – PDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹7,799.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,403.82"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹9,202.82"}</td>
                          </tr>
                          <tr>
                            <td className="dt__td nw" data-label="Date" data-t="">{"16 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – PDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹8,599.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,547.82"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹10,146.82"}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10012" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        {"Reprint invoice"}
                      </a>
                      <a className="btn" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10012" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#receipt" />
                        </svg>
                        {"Reprint bill (final folio)"}
                      </a>
                      <a className="btn" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10012" data-leads-to="FD-P27">{"Credit note"}</a>
                    </div>
                    <p className="fd-muted">{"Closed folios cannot be changed. A mistake is corrected with a credit note; a same-day re-open needs a supervisor (FD-P16)."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="f-FK-10070" data-code="FD-34" role="dialog" aria-modal="true" aria-labelledby="f-FK-10070-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="f-FK-10070-t">{"Closed folio – Mr Lukas Keller"}</h2>
                      <p className="modal__desc">{"INV/26-27/003792 · 18 Oct"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Folio"}</dt>
                      <dd>
                        <strong>{"FL-26-10070"}</strong>
                        {" · closed 18 Oct"}
                      </dd>
                      <dt>{"Guest"}</dt>
                      <dd>{"Mr Lukas Keller · FK-10070"}</dd>
                      <dt>{"Room · stay"}</dt>
                      <dd>
                        <span className="fd-rms" title="Rooms 315, 409">
                          <span className="fd-rm fd-rm--VC" title="Vacant clean">{"315"}</span>
                          <span className="fd-rm fd-rm--OC" title="Occupied clean">{"409"}</span>
                        </span>
                        {" 16 Oct → 18 Oct · 2 nights"}
                      </dd>
                      <dt>{"Invoice"}</dt>
                      <dd>{"INV/26-27/003792 · B2C · no IRN"}</dd>
                      <dt>{"Payments"}</dt>
                      <dd>{"₹43,891.28 received – balance ₹0"}</dd>
                      <dt>{"Status"}</dt>
                      <dd>
                        <span className="pill pill--ready">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#lock" />
                          </svg>
                          {"Closed – read-only"}
                        </span>
                      </dd>
                    </dl>
                    <div className="s-scroll">
                      <table className="srt dt__table dt--hug" data-code="FD-34-folio" style={{"--srt-cols": "auto auto auto auto auto"}} data-mc="">
                        <caption className="sr-only">{"Charges of the closed folio"}</caption>
                        <thead>
                          <tr>
                            <th scope="col">
                              <input className="srt-i srt-a0" type="radio" name="stfd3421" id="stfd3421-0a" aria-label="Sort by Date, lowest or A first" />
                              <input className="srt-i srt-d0" type="radio" name="stfd3421" id="stfd3421-0d" aria-label="Sort by Date, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3421-0a">{"Date"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3421-0d" aria-hidden="true">{"Date"}</label>
                            </th>
                            <th scope="col">{"Description"}</th>
                            <th scope="col" className="dt__th--right">{"Amount"}</th>
                            <th scope="col" className="dt__th--right">{"GST"}</th>
                            <th scope="col" className="dt__th--right">{"Total"}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{"--k0": "1"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"16 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – PDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹9,299.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,673.82"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹10,972.82"}</td>
                          </tr>
                          <tr style={{"--k0": "2"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"17 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – PDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹9,299.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,673.82"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹10,972.82"}</td>
                          </tr>
                          <tr style={{"--k0": "1"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"16 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – PDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹9,299.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,673.82"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹10,972.82"}</td>
                          </tr>
                          <tr style={{"--k0": "2"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"17 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – PDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹9,299.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,673.82"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹10,972.82"}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10070" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        {"Reprint invoice"}
                      </a>
                      <a className="btn" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10070" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#receipt" />
                        </svg>
                        {"Reprint bill (final folio)"}
                      </a>
                      <a className="btn" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10070" data-leads-to="FD-P27">{"Credit note"}</a>
                    </div>
                    <p className="fd-muted">{"Closed folios cannot be changed. A mistake is corrected with a credit note; a same-day re-open needs a supervisor (FD-P16)."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="f-FK-10110" data-code="FD-34" role="dialog" aria-modal="true" aria-labelledby="f-FK-10110-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="f-FK-10110-t">{"Closed folio – Dr Sophie de Vries"}</h2>
                      <p className="modal__desc">{"INV/26-27/003793 · 18 Oct"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Folio"}</dt>
                      <dd>
                        <strong>{"FL-26-10110"}</strong>
                        {" · closed 18 Oct"}
                      </dd>
                      <dt>{"Guest"}</dt>
                      <dd>{"Dr Sophie de Vries · FK-10110"}</dd>
                      <dt>{"Room · stay"}</dt>
                      <dd>
                        <span className="fd-rms" title="Rooms 511, 503">
                          <span className="fd-rm fd-rm--OC" title="Occupied clean">{"511"}</span>
                          <span className="fd-rm fd-rm--OC" title="Occupied clean">{"503"}</span>
                        </span>
                        {" 17 Oct → 18 Oct · 1 night"}
                      </dd>
                      <dt>{"Invoice"}</dt>
                      <dd>{"INV/26-27/003793 · B2C · no IRN"}</dd>
                      <dt>{"Payments"}</dt>
                      <dd>{"₹34,208.20 received – balance ₹0"}</dd>
                      <dt>{"Status"}</dt>
                      <dd>
                        <span className="pill pill--ready">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#lock" />
                          </svg>
                          {"Closed – read-only"}
                        </span>
                      </dd>
                    </dl>
                    <div className="s-scroll">
                      <table className="dt__table dt--hug" data-code="FD-34-folio" data-mc="">
                        <caption className="sr-only">{"Charges of the closed folio"}</caption>
                        <thead>
                          <tr>
                            <th scope="col">{"Date"}</th>
                            <th scope="col">{"Description"}</th>
                            <th scope="col" className="dt__th--right">{"Amount"}</th>
                            <th scope="col" className="dt__th--right">{"GST"}</th>
                            <th scope="col" className="dt__th--right">{"Total"}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="dt__td nw" data-label="Date" data-t="">{"17 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – PDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹14,495.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹2,609.10"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹17,104.10"}</td>
                          </tr>
                          <tr>
                            <td className="dt__td nw" data-label="Date" data-t="">{"17 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – PDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹14,495.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹2,609.10"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹17,104.10"}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10110" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        {"Reprint invoice"}
                      </a>
                      <a className="btn" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10110" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#receipt" />
                        </svg>
                        {"Reprint bill (final folio)"}
                      </a>
                      <a className="btn" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10110" data-leads-to="FD-P27">{"Credit note"}</a>
                    </div>
                    <p className="fd-muted">{"Closed folios cannot be changed. A mistake is corrected with a credit note; a same-day re-open needs a supervisor (FD-P16)."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="f-FK-10107" data-code="FD-34" role="dialog" aria-modal="true" aria-labelledby="f-FK-10107-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="f-FK-10107-t">{"Closed folio – Mr Karthik Jatin"}</h2>
                      <p className="modal__desc">{"INV/26-27/003794 · 19 Oct"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Folio"}</dt>
                      <dd>
                        <strong>{"FL-26-10107"}</strong>
                        {" · closed 19 Oct"}
                      </dd>
                      <dt>{"Guest"}</dt>
                      <dd>{"Mr Karthik Jatin · FK-10107"}</dd>
                      <dt>{"Room · stay"}</dt>
                      <dd>
                        <span className="fd-rm fd-rm--OC" title="Occupied clean">{"406"}</span>
                        {" 14 Oct → 19 Oct · 5 nights"}
                      </dd>
                      <dt>{"Invoice"}</dt>
                      <dd>{"INV/26-27/003794 · B2C · no IRN"}</dd>
                      <dt>{"Payments"}</dt>
                      <dd>{"₹52,032.10 received – balance ₹0"}</dd>
                      <dt>{"Status"}</dt>
                      <dd>
                        <span className="pill pill--ready">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#lock" />
                          </svg>
                          {"Closed – read-only"}
                        </span>
                      </dd>
                    </dl>
                    <div className="s-scroll">
                      <table className="srt dt__table dt--hug" data-code="FD-34-folio" style={{"--srt-cols": "auto auto auto auto auto"}} data-mc="">
                        <caption className="sr-only">{"Charges of the closed folio"}</caption>
                        <thead>
                          <tr>
                            <th scope="col">
                              <input className="srt-i srt-a0" type="radio" name="stfd3422" id="stfd3422-0a" aria-label="Sort by Date, lowest or A first" />
                              <input className="srt-i srt-d0" type="radio" name="stfd3422" id="stfd3422-0d" aria-label="Sort by Date, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3422-0a">{"Date"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3422-0d" aria-hidden="true">{"Date"}</label>
                            </th>
                            <th scope="col">{"Description"}</th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a2" type="radio" name="stfd3422" id="stfd3422-2a" aria-label="Sort by Amount, lowest or A first" />
                              <input className="srt-i srt-d2" type="radio" name="stfd3422" id="stfd3422-2d" aria-label="Sort by Amount, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3422-2a">{"Amount"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3422-2d" aria-hidden="true">{"Amount"}</label>
                            </th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a3" type="radio" name="stfd3422" id="stfd3422-3a" aria-label="Sort by GST, lowest or A first" />
                              <input className="srt-i srt-d3" type="radio" name="stfd3422" id="stfd3422-3d" aria-label="Sort by GST, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3422-3a">{"GST"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3422-3d" aria-hidden="true">{"GST"}</label>
                            </th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a4" type="radio" name="stfd3422" id="stfd3422-4a" aria-label="Sort by Total, lowest or A first" />
                              <input className="srt-i srt-d4" type="radio" name="stfd3422" id="stfd3422-4d" aria-label="Sort by Total, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3422-4a">{"Total"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3422-4d" aria-hidden="true">{"Total"}</label>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{"--k0": "1", "--k2": "1", "--k3": "1", "--k4": "1"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"14 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – PDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹8,499.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,529.82"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹10,028.82"}</td>
                          </tr>
                          <tr style={{"--k0": "2", "--k2": "1", "--k3": "1", "--k4": "1"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"15 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – PDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹8,499.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,529.82"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹10,028.82"}</td>
                          </tr>
                          <tr style={{"--k0": "3", "--k2": "2", "--k3": "2", "--k4": "2"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"16 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – PDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹9,299.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,673.82"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹10,972.82"}</td>
                          </tr>
                          <tr style={{"--k0": "4", "--k2": "2", "--k3": "2", "--k4": "2"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"17 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – PDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹9,299.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,673.82"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹10,972.82"}</td>
                          </tr>
                          <tr style={{"--k0": "5", "--k2": "1", "--k3": "1", "--k4": "1"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"18 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – PDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹8,499.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,529.82"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹10,028.82"}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10107" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        {"Reprint invoice"}
                      </a>
                      <a className="btn" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10107" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#receipt" />
                        </svg>
                        {"Reprint bill (final folio)"}
                      </a>
                      <a className="btn" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10107" data-leads-to="FD-P27">{"Credit note"}</a>
                    </div>
                    <p className="fd-muted">{"Closed folios cannot be changed. A mistake is corrected with a credit note; a same-day re-open needs a supervisor (FD-P16)."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="f-FK-10163" data-code="FD-34" role="dialog" aria-modal="true" aria-labelledby="f-FK-10163-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="f-FK-10163-t">{"Closed folio – Mr Karthik Siddharth"}</h2>
                      <p className="modal__desc">{"INV/26-27/003795 · 19 Oct"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Folio"}</dt>
                      <dd>
                        <strong>{"FL-26-10163"}</strong>
                        {" · closed 19 Oct"}
                      </dd>
                      <dt>{"Guest"}</dt>
                      <dd>{"Mr Karthik Siddharth · FK-10163"}</dd>
                      <dt>{"Room · stay"}</dt>
                      <dd>
                        <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"413"}</span>
                        {" 16 Oct → 19 Oct · 3 nights"}
                      </dd>
                      <dt>{"Invoice"}</dt>
                      <dd>{"INV/26-27/003795 · B2C · no IRN"}</dd>
                      <dt>{"Payments"}</dt>
                      <dd>{"₹31,974.46 received – balance ₹0"}</dd>
                      <dt>{"Status"}</dt>
                      <dd>
                        <span className="pill pill--ready">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#lock" />
                          </svg>
                          {"Closed – read-only"}
                        </span>
                      </dd>
                    </dl>
                    <div className="s-scroll">
                      <table className="srt dt__table dt--hug" data-code="FD-34-folio" style={{"--srt-cols": "auto auto auto auto auto"}} data-mc="">
                        <caption className="sr-only">{"Charges of the closed folio"}</caption>
                        <thead>
                          <tr>
                            <th scope="col">
                              <input className="srt-i srt-a0" type="radio" name="stfd3423" id="stfd3423-0a" aria-label="Sort by Date, lowest or A first" />
                              <input className="srt-i srt-d0" type="radio" name="stfd3423" id="stfd3423-0d" aria-label="Sort by Date, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3423-0a">{"Date"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3423-0d" aria-hidden="true">{"Date"}</label>
                            </th>
                            <th scope="col">{"Description"}</th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a2" type="radio" name="stfd3423" id="stfd3423-2a" aria-label="Sort by Amount, lowest or A first" />
                              <input className="srt-i srt-d2" type="radio" name="stfd3423" id="stfd3423-2d" aria-label="Sort by Amount, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3423-2a">{"Amount"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3423-2d" aria-hidden="true">{"Amount"}</label>
                            </th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a3" type="radio" name="stfd3423" id="stfd3423-3a" aria-label="Sort by GST, lowest or A first" />
                              <input className="srt-i srt-d3" type="radio" name="stfd3423" id="stfd3423-3d" aria-label="Sort by GST, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3423-3a">{"GST"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3423-3d" aria-hidden="true">{"GST"}</label>
                            </th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a4" type="radio" name="stfd3423" id="stfd3423-4a" aria-label="Sort by Total, lowest or A first" />
                              <input className="srt-i srt-d4" type="radio" name="stfd3423" id="stfd3423-4d" aria-label="Sort by Total, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3423-4a">{"Total"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3423-4d" aria-hidden="true">{"Total"}</label>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{"--k0": "1", "--k2": "2", "--k3": "2", "--k4": "2"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"16 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – PDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹9,299.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,673.82"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹10,972.82"}</td>
                          </tr>
                          <tr style={{"--k0": "2", "--k2": "2", "--k3": "2", "--k4": "2"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"17 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – PDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹9,299.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,673.82"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹10,972.82"}</td>
                          </tr>
                          <tr style={{"--k0": "3", "--k2": "1", "--k3": "1", "--k4": "1"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"18 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – PDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹8,499.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,529.82"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹10,028.82"}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10163" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        {"Reprint invoice"}
                      </a>
                      <a className="btn" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10163" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#receipt" />
                        </svg>
                        {"Reprint bill (final folio)"}
                      </a>
                      <a className="btn" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10163" data-leads-to="FD-P27">{"Credit note"}</a>
                    </div>
                    <p className="fd-muted">{"Closed folios cannot be changed. A mistake is corrected with a credit note; a same-day re-open needs a supervisor (FD-P16)."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="f-FK-10001" data-code="FD-34" role="dialog" aria-modal="true" aria-labelledby="f-FK-10001-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="f-FK-10001-t">{"Closed folio – Mr Ethan Anderson"}</h2>
                      <p className="modal__desc">{"INV/26-27/003796 · 20 Oct"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Folio"}</dt>
                      <dd>
                        <strong>{"FL-26-10001"}</strong>
                        {" · closed 20 Oct"}
                      </dd>
                      <dt>{"Guest"}</dt>
                      <dd>{"Mr Ethan Anderson · FK-10001"}</dd>
                      <dt>{"Room · stay"}</dt>
                      <dd>
                        <span className="fd-rm fd-rm--OC" title="Occupied clean">{"108"}</span>
                        {" 15 Oct → 20 Oct · 5 nights"}
                      </dd>
                      <dt>{"Invoice"}</dt>
                      <dd>{"INV/26-27/003796 · B2C · no IRN"}</dd>
                      <dt>{"Payments"}</dt>
                      <dd>{"₹49,082.10 received – balance ₹0"}</dd>
                      <dt>{"Status"}</dt>
                      <dd>
                        <span className="pill pill--ready">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#lock" />
                          </svg>
                          {"Closed – read-only"}
                        </span>
                      </dd>
                    </dl>
                    <div className="s-scroll">
                      <table className="srt dt__table dt--hug" data-code="FD-34-folio" style={{"--srt-cols": "auto auto auto auto auto"}} data-mc="">
                        <caption className="sr-only">{"Charges of the closed folio"}</caption>
                        <thead>
                          <tr>
                            <th scope="col">
                              <input className="srt-i srt-a0" type="radio" name="stfd3424" id="stfd3424-0a" aria-label="Sort by Date, lowest or A first" />
                              <input className="srt-i srt-d0" type="radio" name="stfd3424" id="stfd3424-0d" aria-label="Sort by Date, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3424-0a">{"Date"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3424-0d" aria-hidden="true">{"Date"}</label>
                            </th>
                            <th scope="col">{"Description"}</th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a2" type="radio" name="stfd3424" id="stfd3424-2a" aria-label="Sort by Amount, lowest or A first" />
                              <input className="srt-i srt-d2" type="radio" name="stfd3424" id="stfd3424-2d" aria-label="Sort by Amount, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3424-2a">{"Amount"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3424-2d" aria-hidden="true">{"Amount"}</label>
                            </th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a3" type="radio" name="stfd3424" id="stfd3424-3a" aria-label="Sort by GST, lowest or A first" />
                              <input className="srt-i srt-d3" type="radio" name="stfd3424" id="stfd3424-3d" aria-label="Sort by GST, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3424-3a">{"GST"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3424-3d" aria-hidden="true">{"GST"}</label>
                            </th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a4" type="radio" name="stfd3424" id="stfd3424-4a" aria-label="Sort by Total, lowest or A first" />
                              <input className="srt-i srt-d4" type="radio" name="stfd3424" id="stfd3424-4d" aria-label="Sort by Total, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3424-4a">{"Total"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3424-4d" aria-hidden="true">{"Total"}</label>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{"--k0": "1", "--k2": "1", "--k3": "1", "--k4": "1"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"15 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹7,999.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,439.82"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹9,438.82"}</td>
                          </tr>
                          <tr style={{"--k0": "2", "--k2": "2", "--k3": "2", "--k4": "2"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"16 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹8,799.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,583.82"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹10,382.82"}</td>
                          </tr>
                          <tr style={{"--k0": "3", "--k2": "2", "--k3": "2", "--k4": "2"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"17 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹8,799.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,583.82"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹10,382.82"}</td>
                          </tr>
                          <tr style={{"--k0": "4", "--k2": "1", "--k3": "1", "--k4": "1"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"18 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹7,999.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,439.82"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹9,438.82"}</td>
                          </tr>
                          <tr style={{"--k0": "5", "--k2": "1", "--k3": "1", "--k4": "1"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"19 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹7,999.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,439.82"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹9,438.82"}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10001" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        {"Reprint invoice"}
                      </a>
                      <a className="btn" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10001" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#receipt" />
                        </svg>
                        {"Reprint bill (final folio)"}
                      </a>
                      <a className="btn" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10001" data-leads-to="FD-P27">{"Credit note"}</a>
                    </div>
                    <p className="fd-muted">{"Closed folios cannot be changed. A mistake is corrected with a credit note; a same-day re-open needs a supervisor (FD-P16)."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="f-FK-10155" data-code="FD-34" role="dialog" aria-modal="true" aria-labelledby="f-FK-10155-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="f-FK-10155-t">{"Closed folio – Ms Divya Thomas"}</h2>
                      <p className="modal__desc">{"INV/26-27/003797 · 20 Oct"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Folio"}</dt>
                      <dd>
                        <strong>{"FL-26-10155"}</strong>
                        {" · closed 20 Oct"}
                      </dd>
                      <dt>{"Guest"}</dt>
                      <dd>
                        {"Ms Divya Thomas · "}
                        <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10155" data-leads-to="RS-07">{"FK-10155"}</a>
                      </dd>
                      <dt>{"Room · stay"}</dt>
                      <dd>
                        <span className="fd-rm fd-rm--VD" title="Vacant dirty">{"512"}</span>
                        {" 18 Oct → 20 Oct · 2 nights"}
                      </dd>
                      <dt>{"Invoice"}</dt>
                      <dd>{"INV/26-27/003797 · B2C · no IRN"}</dd>
                      <dt>{"Payments"}</dt>
                      <dd>{"₹16,377.90 received – balance ₹0"}</dd>
                      <dt>{"Status"}</dt>
                      <dd>
                        <span className="pill pill--ready">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#lock" />
                          </svg>
                          {"Closed – read-only"}
                        </span>
                      </dd>
                    </dl>
                    <div className="s-scroll">
                      <table className="dt__table dt--hug" data-code="FD-34-folio" data-mc="">
                        <caption className="sr-only">{"Charges of the closed folio"}</caption>
                        <thead>
                          <tr>
                            <th scope="col">{"Date"}</th>
                            <th scope="col">{"Description"}</th>
                            <th scope="col" className="dt__th--right">{"Amount"}</th>
                            <th scope="col" className="dt__th--right">{"GST"}</th>
                            <th scope="col" className="dt__th--right">{"Total"}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="dt__td nw" data-label="Date" data-t="">{"18 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – PDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹7,000.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST">{"₹350.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹7,350.00"}</td>
                          </tr>
                          <tr>
                            <td className="dt__td nw" data-label="Date" data-t="">{"19 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – PDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹7,000.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST">{"₹350.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹7,350.00"}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10155" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        {"Reprint invoice"}
                      </a>
                      <a className="btn" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10155" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#receipt" />
                        </svg>
                        {"Reprint bill (final folio)"}
                      </a>
                      <a className="btn" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10155" data-leads-to="FD-P27">{"Credit note"}</a>
                    </div>
                    <p className="fd-muted">{"Closed folios cannot be changed. A mistake is corrected with a credit note; a same-day re-open needs a supervisor (FD-P16)."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="f-FK-10018" data-code="FD-34" role="dialog" aria-modal="true" aria-labelledby="f-FK-10018-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="f-FK-10018-t">{"Closed folio – Mr Sanjay Joseph"}</h2>
                      <p className="modal__desc">{"INV/26-27/003798 · 21 Oct"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Folio"}</dt>
                      <dd>
                        <strong>{"FL-26-10018"}</strong>
                        {" · closed 21 Oct"}
                      </dd>
                      <dt>{"Guest"}</dt>
                      <dd>{"Mr Sanjay Joseph · FK-10018"}</dd>
                      <dt>{"Room · stay"}</dt>
                      <dd>
                        <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"411"}</span>
                        {" 18 Oct → 21 Oct · 3 nights"}
                      </dd>
                      <dt>{"Invoice"}</dt>
                      <dd>{"INV/26-27/003798 · B2B – Willingdon Logistics LLP · Generated"}</dd>
                      <dt>{"Payments"}</dt>
                      <dd>{"₹51,673.38 received – balance ₹0"}</dd>
                      <dt>{"Status"}</dt>
                      <dd>
                        <span className="pill pill--ready">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#lock" />
                          </svg>
                          {"Closed – read-only"}
                        </span>
                      </dd>
                    </dl>
                    <div className="s-scroll">
                      <table className="srt dt__table dt--hug" data-code="FD-34-folio" style={{"--srt-cols": "auto auto auto auto auto"}} data-mc="">
                        <caption className="sr-only">{"Charges of the closed folio"}</caption>
                        <thead>
                          <tr>
                            <th scope="col">
                              <input className="srt-i srt-a0" type="radio" name="stfd3425" id="stfd3425-0a" aria-label="Sort by Date, lowest or A first" />
                              <input className="srt-i srt-d0" type="radio" name="stfd3425" id="stfd3425-0d" aria-label="Sort by Date, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3425-0a">{"Date"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3425-0d" aria-hidden="true">{"Date"}</label>
                            </th>
                            <th scope="col">{"Description"}</th>
                            <th scope="col" className="dt__th--right">{"Amount"}</th>
                            <th scope="col" className="dt__th--right">{"GST"}</th>
                            <th scope="col" className="dt__th--right">{"Total"}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{"--k0": "1"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"18 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – PDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹14,597.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹2,627.46"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹17,224.46"}</td>
                          </tr>
                          <tr style={{"--k0": "2"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"19 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – PDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹14,597.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹2,627.46"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹17,224.46"}</td>
                          </tr>
                          <tr style={{"--k0": "3"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"20 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – PDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹14,597.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹2,627.46"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹17,224.46"}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10018" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        {"Reprint invoice"}
                      </a>
                      <a className="btn" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10018" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#receipt" />
                        </svg>
                        {"Reprint bill (final folio)"}
                      </a>
                      <a className="btn" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27-FK-10018" data-leads-to="FD-P27">{"Credit note"}</a>
                    </div>
                    <p className="fd-muted">{"Closed folios cannot be changed. A mistake is corrected with a credit note; a same-day re-open needs a supervisor (FD-P16)."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="f-FK-10047" data-code="FD-34" role="dialog" aria-modal="true" aria-labelledby="f-FK-10047-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="f-FK-10047-t">{"Closed folio – Mr Ajay Rishi"}</h2>
                      <p className="modal__desc">{"INV/26-27/003799 · 21 Oct"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Folio"}</dt>
                      <dd>
                        <strong>{"FL-26-10047"}</strong>
                        {" · closed 21 Oct"}
                      </dd>
                      <dt>{"Guest"}</dt>
                      <dd>{"Mr Ajay Rishi · FK-10047"}</dd>
                      <dt>{"Room · stay"}</dt>
                      <dd>
                        <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"102"}</span>
                        {" 17 Oct → 21 Oct · 4 nights"}
                      </dd>
                      <dt>{"Invoice"}</dt>
                      <dd>{"INV/26-27/003799 · B2B – TechPark Kochi Systems · Failed"}</dd>
                      <dt>{"Payments"}</dt>
                      <dd>{"₹38,699.28 received – balance ₹0"}</dd>
                      <dt>{"Status"}</dt>
                      <dd>
                        <span className="pill pill--ready">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#lock" />
                          </svg>
                          {"Closed – read-only"}
                        </span>
                      </dd>
                    </dl>
                    <div className="s-scroll">
                      <table className="srt dt__table dt--hug" data-code="FD-34-folio" style={{"--srt-cols": "auto auto auto auto auto"}} data-mc="">
                        <caption className="sr-only">{"Charges of the closed folio"}</caption>
                        <thead>
                          <tr>
                            <th scope="col">
                              <input className="srt-i srt-a0" type="radio" name="stfd3426" id="stfd3426-0a" aria-label="Sort by Date, lowest or A first" />
                              <input className="srt-i srt-d0" type="radio" name="stfd3426" id="stfd3426-0d" aria-label="Sort by Date, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3426-0a">{"Date"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3426-0d" aria-hidden="true">{"Date"}</label>
                            </th>
                            <th scope="col">{"Description"}</th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a2" type="radio" name="stfd3426" id="stfd3426-2a" aria-label="Sort by Amount, lowest or A first" />
                              <input className="srt-i srt-d2" type="radio" name="stfd3426" id="stfd3426-2d" aria-label="Sort by Amount, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3426-2a">{"Amount"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3426-2d" aria-hidden="true">{"Amount"}</label>
                            </th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a3" type="radio" name="stfd3426" id="stfd3426-3a" aria-label="Sort by GST, lowest or A first" />
                              <input className="srt-i srt-d3" type="radio" name="stfd3426" id="stfd3426-3d" aria-label="Sort by GST, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3426-3a">{"GST"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3426-3d" aria-hidden="true">{"GST"}</label>
                            </th>
                            <th scope="col" className="dt__th--right">
                              <input className="srt-i srt-a4" type="radio" name="stfd3426" id="stfd3426-4a" aria-label="Sort by Total, lowest or A first" />
                              <input className="srt-i srt-d4" type="radio" name="stfd3426" id="stfd3426-4d" aria-label="Sort by Total, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="stfd3426-4a">{"Total"}</label>
                              <label className="srt-l srt-l--d" htmlFor="stfd3426-4d" aria-hidden="true">{"Total"}</label>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{"--k0": "1", "--k2": "2", "--k3": "2", "--k4": "2"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"17 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹8,799.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,583.82"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹10,382.82"}</td>
                          </tr>
                          <tr style={{"--k0": "2", "--k2": "1", "--k3": "1", "--k4": "1"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"18 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹7,999.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,439.82"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹9,438.82"}</td>
                          </tr>
                          <tr style={{"--k0": "3", "--k2": "1", "--k3": "1", "--k4": "1"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"19 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹7,999.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,439.82"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹9,438.82"}</td>
                          </tr>
                          <tr style={{"--k0": "4", "--k2": "1", "--k3": "1", "--k4": "1"}}>
                            <td className="dt__td nw" data-label="Date" data-t="">{"20 Oct"}</td>
                            <td className="dt__td" data-label="Description">{"Room charge – GDLX (incl. breakfast)"}</td>
                            <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹7,999.00"}</td>
                            <td className="dt__td dt__td--right num" data-label="GST" data-w2="">{"₹1,439.82"}</td>
                            <td className="dt__td dt__td--right num" data-label="Total" data-w2="">{"₹9,438.82"}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10047" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        {"Reprint invoice"}
                      </a>
                      <a className="btn" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10047" data-leads-to="FD-O03">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#receipt" />
                        </svg>
                        {"Reprint bill (final folio)"}
                      </a>
                      <a className="btn" href="/front-desk/fd-16-invoices-credit-notes/#FD-P27" data-leads-to="FD-P27">{"Credit note"}</a>
                    </div>
                    <p className="fd-muted">{"Closed folios cannot be changed. A mistake is corrected with a credit note; a same-day re-open needs a supervisor (FD-P16)."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <details className="helpbox">
                <summary>
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#help" />
                  </svg>
                  {" Help for this screen "}
                  <span className="code-chip">{"FD-34"}</span>
                </summary>
                <dl className="helpbox__body">
                  <dt>{"What it is for"}</dt>
                  <dd>{"Closed folios, reprint invoices, folio trail of who posted, moved, split or re-opened"}</dd>
                  <dt>{"Opened from"}</dt>
                  <dd>
                    {"Sidebar, "}
                    <Link to={"/front-desk/fd-16-invoices-credit-notes"}>{"FD-16"}</Link>
                  </dd>
                  <dt>{"Leads to"}</dt>
                  <dd>
                    <Link to={"/front-desk/fd-08-guest-folio"}>{"FD-08"}</Link>
                    {" (read-only), "}
                    <Link to={"/front-desk/fd-16-invoices-credit-notes"}>{"FD-16"}</Link>
                  </dd>
                  <dt>{"Note"}</dt>
                  <dd>{"Static screen (HTML and CSS only): it shows the layout, fields and sample data. Saving and live data come when the backend is connected."}</dd>
                </dl>
              </details>
            </main>
          </div>
        </div>
      </div>
    </ScreenShell>
  );
}
