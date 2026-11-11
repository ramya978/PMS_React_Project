// GENERATED from public/front-desk/fd-14-departures/checked-out.html by scripts/convert_legacy.py.
// Markup converted to JSX. Legacy page scripts and inline on* handlers are not ported yet.
import { Link } from '../../../lib/router.jsx';
import ScreenShell from '../../../components/ScreenShell.jsx';

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
    "href": "/front-desk/fd-14-departures/checked-out.css",
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

export default function FrontDeskFd14DeparturesCheckedOut() {
  return (
    <ScreenShell title="Departures" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="FD-14-2" data-code="FD-14-2" data-static="1" className="legacy-body">
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
              <details className="nav__sub" data-group="front-desk" open={true}>
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
                  <Link className="nav__item is-active" data-nav="FD-14" title="Departures" to={"/front-desk/fd-14-departures"}>
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
            <main className="app__content" id="main" data-code="FD-14-2" tabIndex="-1">
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
                        <Link to={"/front-desk/fd-14-departures"}>{"Departures"}</Link>
                      </li>
                      <li>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-right" />
                        </svg>
                        <span aria-current="page">{"Checked out today"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">{"Departures"}</h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"FD-14-2"}</span>
                  <div className="page-header__filters">
                    <div className="hctl">
                      <div className="hsearch">
                        <input className="hsearch__input" id="hs110" type="search" name="q" placeholder="Name, room, booking or company" aria-label="Search departures" autoComplete="off" />
                        <label className="hsearch__ic" htmlFor="hs110" title="Search">
                          <svg className="icon" width="17" height="17" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#search" />
                          </svg>
                          <span className="sr-only">{"Search"}</span>
                        </label>
                      </div>
                      <label className="hfilter__btn" htmlFor="hf111" title="Show or hide the filters">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#filter" />
                        </svg>
                        <span>{"Filter"}</span>
                        <i className="hfilter__dot" aria-hidden="true" />
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </label>
                      <input className="hfilter__tg" type="checkbox" id="hf111" aria-label="Show filters" />
                      <form className="hfilter" method="get" role="search" aria-label="Filter departures">
                        <span className="hfilter__hic" title="Filter departures">
                          <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#sliders" />
                          </svg>
                        </span>
                        <div className="hfilter__grid">
                          <label className="hf-f ">
                            <span className="hf-f__l">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#bed" />
                              </svg>
                              {"Room type"}
                            </span>
                            <select className="hf-f__c" name="roomtype">
                              <option>{"All types"}</option>
                              <option>{"GDLX"}</option>
                              <option>{"PDLX"}</option>
                              <option>{"DLXS"}</option>
                              <option>{"PRMS"}</option>
                            </select>
                            <svg className="icon hf-f__chev" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                          <label className="hf-f ">
                            <span className="hf-f__l">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#receipt" />
                              </svg>
                              {"Bill to"}
                            </span>
                            <select className="hf-f__c" name="billto">
                              <option>{"All bills"}</option>
                              <option>{"Guest"}</option>
                              <option>{"Company"}</option>
                              <option>{"Agent"}</option>
                            </select>
                            <svg className="icon hf-f__chev" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                          <label className="hf-f ">
                            <span className="hf-f__l">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#filter" />
                              </svg>
                              {"Show"}
                            </span>
                            <select className="hf-f__c" name="show">
                              <option>{"All due out"}</option>
                              <option>{"Express eligible"}</option>
                              <option>{"Pending postings"}</option>
                              <option>{"With a balance"}</option>
                              <option>{"Late check-out"}</option>
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
                          <label className="hfilter__done" htmlFor="hf111">
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
                    <Link className="btn" data-leads-to="FD-04" to={"/front-desk/fd-04-walk-in-check-in"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#log-in" />
                      </svg>
                      {"Walk-in"}
                    </Link>
                  </div>
                </div>
              </header>
              <section className="arr-deck dp-deck" data-code="FD-14-deck" aria-label="Departures views and actions">
                <nav className="ltabs" aria-label="Sections">
                  <div className="ltabs__list">
                    <Link data-leads-to="FD-14" to={"/front-desk/fd-14-departures"}>
                      {"Due out"}
                      <span className="ltabs__n">{"8"}</span>
                    </Link>
                    <Link aria-current="page" data-leads-to="FD-14-2" to={"/front-desk/fd-14-departures/checked-out"}>
                      {"Checked out today"}
                      <span className="ltabs__n">{"0"}</span>
                    </Link>
                    <Link data-leads-to="FD-14-3" to={"/front-desk/fd-14-departures/express"}>
                      {"Express / bulk check-out"}
                      <span className="ltabs__n">{"3"}</span>
                    </Link>
                  </div>
                </nav>
              </section>
              <div className="cotab">
                <div className="pgw">
                  <div className="s-scroll" data-code="FD-14-2">
                    <table className="dt__table dt--hug" data-code="FD-14-2-table" data-mc="">
                      <caption className="sr-only">{"Checked out today"}</caption>
                      <thead>
                        <tr>
                          <th scope="col">{"Checked out at"}</th>
                          <th scope="col">{"Room"}</th>
                          <th scope="col">{"Guest"}</th>
                          <th scope="col">{"Invoice(s)"}</th>
                          <th scope="col">{"Settled by"}</th>
                          <th scope="col" className="dt__th--right">{"Amount"}</th>
                          <th scope="col">{"By"}</th>
                          <th scope="col" />
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="fd-empty-row">
                          <td className="dt__td" colSpan="8">
                            <span className="fd-muted">
                              {"No guest has checked out yet today – 8 are due out. After a check-out the guest is listed here with the invoice. Example: "}
                              <a className="fd-link" href="/front-desk/fd-14-departures/checked-out.html#co-FK-10142" data-leads-to="FD-14-2">{"Mrs Maya Mohan checked out"}</a>
                              {"."}
                            </span>
                          </td>
                        </tr>
                        <tr className="fd-after" id="co-FK-10108">
                          <td className="dt__td nw" data-label="Checked out at" data-w2="" data-t="">{"09:42"}</td>
                          <td className="dt__td nw" data-label="Room">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"205"}</span>
                          </td>
                          <td className="dt__td" data-label="Guest">
                            <strong>{"Ms Anna Schneider"}</strong>
                            <span className="fd-sub">
                              {"FK-10108 · "}
                              <span className="pill pill--vip">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#star" />
                                </svg>
                                {"Aviv Club Gold"}
                              </span>
                              {" "}
                              <span className="fd-flag" title="Foreign national – Form III required">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#globe" />
                                </svg>
                                {"German"}
                              </span>
                              {" "}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Invoice(s)" data-w2="">
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10108-g" data-leads-to="FD-O03">{"INV/26-27/003800"}</a>
                          </td>
                          <td className="dt__td" data-label="Settled by" data-w2="">{"Card at the desk"}</td>
                          <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹24,623.00"}</td>
                          <td className="dt__td" data-label="By" data-w2="">{"Sneha Joseph"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="stack">
                              <a className="btn" href="#FD-P35-FK-10108">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#undo" />
                                </svg>
                                {"Reinstate"}
                              </a>
                              <a className="btn" href="/front-desk/fd-08-guest-folio/#FK-10108" data-leads-to="FD-08">{"Folio"}</a>
                            </div>
                            <div className="fd-toast fd-toast--in" role="status">
                              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              <div className="fd-toast__text">
                                {"Ms Anna Schneider checked out – room 205"}
                                <small>{"Reservation FK-10108 is Checked-out · room Vacant Dirty (housekeeping told) · invoice INV/26-27/003800 issued · Form III departure report due (FD-20)"}</small>
                              </div>
                              <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#x" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="fd-after fd-after--x" id="co-FK-10104">
                          <td className="dt__td nw" data-label="Checked out at" data-w2="" data-t="">{"09:42"}</td>
                          <td className="dt__td nw" data-label="Room">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"207"}</span>
                          </td>
                          <td className="dt__td" data-label="Guest">
                            <strong>{"Mr Amit Chirag"}</strong>
                            <span className="fd-sub">{"FK-10104 · "}</span>
                          </td>
                          <td className="dt__td" data-label="Invoice(s)" data-w2="">
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10104-c" data-leads-to="FD-O03">{"INV/26-27/003801"}</a>
                          </td>
                          <td className="dt__td" data-label="Settled by" data-w2="">{"Company ledger"}</td>
                          <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹20,660.85"}</td>
                          <td className="dt__td" data-label="By" data-w2="">{"Sneha Joseph"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="stack">
                              <a className="btn" href="#FD-P35-FK-10104">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#undo" />
                                </svg>
                                {"Reinstate"}
                              </a>
                              <a className="btn" href="/front-desk/fd-08-guest-folio/#FK-10104" data-leads-to="FD-08">{"Folio"}</a>
                            </div>
                            <div className="fd-toast fd-toast--in" role="status">
                              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              <div className="fd-toast__text">
                                {"Mr Amit Chirag checked out – room 207"}
                                <small>{"Reservation FK-10104 is Checked-out · room Vacant Dirty (housekeeping told) · invoice INV/26-27/003801 issued · e-invoice (IRN) generated"}</small>
                              </div>
                              <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#x" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="fd-after fd-after--x" id="co-FK-10193">
                          <td className="dt__td nw" data-label="Checked out at" data-w2="" data-t="">{"09:42"}</td>
                          <td className="dt__td nw" data-label="Room">
                            <span className="fd-rms" title="Rooms 216, 305">
                              <span className="fd-rm fd-rm--OC" title="Occupied clean">{"216"}</span>
                              <span className="fd-rm fd-rm--OC" title="Occupied clean">{"305"}</span>
                            </span>
                          </td>
                          <td className="dt__td" data-label="Guest">
                            <strong>{"Mrs Sindhu Wilson"}</strong>
                            <span className="fd-sub">{"FK-10193 · "}</span>
                          </td>
                          <td className="dt__td" data-label="Invoice(s)" data-w2="">
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10193-g" data-leads-to="FD-O03">{"INV/26-27/003802"}</a>
                          </td>
                          <td className="dt__td" data-label="Settled by" data-w2="">{"Paid in advance"}</td>
                          <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹13,442.10"}</td>
                          <td className="dt__td" data-label="By" data-w2="">{"Sneha Joseph"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="stack">
                              <a className="btn" href="#FD-P35-FK-10193">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#undo" />
                                </svg>
                                {"Reinstate"}
                              </a>
                              <a className="btn" href="/front-desk/fd-08-guest-folio/#FK-10193" data-leads-to="FD-08">{"Folio"}</a>
                            </div>
                            <div className="fd-toast fd-toast--in" role="status">
                              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              <div className="fd-toast__text">
                                {"Mrs Sindhu Wilson checked out – room 216, 305"}
                                <small>{"Reservation FK-10193 is Checked-out · room Vacant Dirty (housekeeping told) · invoice INV/26-27/003802 issued"}</small>
                              </div>
                              <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#x" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="fd-after" id="co-FK-10102">
                          <td className="dt__td nw" data-label="Checked out at" data-w2="" data-t="">{"09:42"}</td>
                          <td className="dt__td nw" data-label="Room">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"319"}</span>
                          </td>
                          <td className="dt__td" data-label="Guest">
                            <strong>{"Ms Remya Kurian"}</strong>
                            <span className="fd-sub">{"FK-10102 · "}</span>
                          </td>
                          <td className="dt__td" data-label="Invoice(s)" data-w2="">
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10102-g" data-leads-to="FD-O03">{"INV/26-27/003803"}</a>
                          </td>
                          <td className="dt__td" data-label="Settled by" data-w2="">{"Card at the desk"}</td>
                          <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹28,984.00"}</td>
                          <td className="dt__td" data-label="By" data-w2="">{"Sneha Joseph"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="stack">
                              <a className="btn" href="#FD-P35-FK-10102">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#undo" />
                                </svg>
                                {"Reinstate"}
                              </a>
                              <a className="btn" href="/front-desk/fd-08-guest-folio/#FK-10102" data-leads-to="FD-08">{"Folio"}</a>
                            </div>
                            <div className="fd-toast fd-toast--in" role="status">
                              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              <div className="fd-toast__text">
                                {"Ms Remya Kurian checked out – room 319"}
                                <small>{"Reservation FK-10102 is Checked-out · room Vacant Dirty (housekeeping told) · invoice INV/26-27/003803 issued"}</small>
                              </div>
                              <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#x" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="fd-after" id="co-FK-10187">
                          <td className="dt__td nw" data-label="Checked out at" data-w2="" data-t="">{"09:42"}</td>
                          <td className="dt__td nw" data-label="Room" data-w2="">
                            <span className="fd-rms" title="Rooms 406, 503, 404">
                              <span className="fd-rm fd-rm--OC" title="Occupied clean">{"406"}</span>
                              <span className="fd-rm fd-rm--OC" title="Occupied clean">{"503"}</span>
                              <span className="fd-rm fd-rm--OC" title="Occupied clean">{"404"}</span>
                            </span>
                          </td>
                          <td className="dt__td" data-label="Guest" data-w2="">
                            <strong>{"Mrs Kavita Ranjan"}</strong>
                            <span className="fd-sub">{"FK-10187 · "}</span>
                          </td>
                          <td className="dt__td" data-label="Invoice(s)" data-w2="">
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10187-g" data-leads-to="FD-O03">{"INV/26-27/003804"}</a>
                          </td>
                          <td className="dt__td" data-label="Settled by" data-w2="">{"Card at the desk"}</td>
                          <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹67,808.00"}</td>
                          <td className="dt__td" data-label="By" data-w2="">{"Sneha Joseph"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="stack">
                              <a className="btn" href="#FD-P35-FK-10187">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#undo" />
                                </svg>
                                {"Reinstate"}
                              </a>
                              <a className="btn" href="/front-desk/fd-08-guest-folio/#FK-10187" data-leads-to="FD-08">{"Folio"}</a>
                            </div>
                            <div className="fd-toast fd-toast--in" role="status">
                              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              <div className="fd-toast__text">
                                {"Mrs Kavita Ranjan checked out – room 406, 503, 404"}
                                <small>{"Reservation FK-10187 is Checked-out · room Vacant Dirty (housekeeping told) · invoice INV/26-27/003804 issued"}</small>
                              </div>
                              <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#x" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="fd-after" id="co-FK-10172">
                          <td className="dt__td nw" data-label="Checked out at" data-w2="" data-t="">{"09:42"}</td>
                          <td className="dt__td nw" data-label="Room">
                            <span className="fd-rms" title="Rooms 415, 316">
                              <span className="fd-rm fd-rm--OC" title="Occupied clean">{"415"}</span>
                              <span className="fd-rm fd-rm--OC" title="Occupied clean">{"316"}</span>
                            </span>
                          </td>
                          <td className="dt__td" data-label="Guest">
                            <strong>{"Ms Shruti Siddharth"}</strong>
                            <span className="fd-sub">
                              {"FK-10172 · "}
                              <span className="pill pill--vip">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#star" />
                                </svg>
                                {"Aviv Club Member"}
                              </span>
                              {" "}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Invoice(s)" data-w2="">
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10172-g" data-leads-to="FD-O03">{"INV/26-27/003805"}</a>
                          </td>
                          <td className="dt__td" data-label="Settled by" data-w2="">{"Card at the desk"}</td>
                          <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹77,016.00"}</td>
                          <td className="dt__td" data-label="By" data-w2="">{"Sneha Joseph"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="stack">
                              <a className="btn" href="#FD-P35-FK-10172">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#undo" />
                                </svg>
                                {"Reinstate"}
                              </a>
                              <a className="btn" href="/front-desk/fd-08-guest-folio/#FK-10172" data-leads-to="FD-08">{"Folio"}</a>
                            </div>
                            <div className="fd-toast fd-toast--in" role="status">
                              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              <div className="fd-toast__text">
                                {"Ms Shruti Siddharth checked out – room 415, 316"}
                                <small>{"Reservation FK-10172 is Checked-out · room Vacant Dirty (housekeeping told) · invoice INV/26-27/003805 issued"}</small>
                              </div>
                              <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#x" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="fd-after" id="co-FK-10123">
                          <td className="dt__td nw" data-label="Checked out at" data-w2="" data-t="">{"09:42"}</td>
                          <td className="dt__td nw" data-label="Room">
                            <span className="fd-rms" title="Rooms 416, 505">
                              <span className="fd-rm fd-rm--OC" title="Occupied clean">{"416"}</span>
                              <span className="fd-rm fd-rm--OC" title="Occupied clean">{"505"}</span>
                            </span>
                          </td>
                          <td className="dt__td" data-label="Guest">
                            <strong>{"Mrs Isha Neil"}</strong>
                            <span className="fd-sub">
                              {"FK-10123 · "}
                              <span className="pill pill--vip">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#star" />
                                </svg>
                                {"Aviv Club Silver"}
                              </span>
                              {" "}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Invoice(s)" data-w2="">
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10123-g" data-leads-to="FD-O03">{"INV/26-27/003806"}</a>
                          </td>
                          <td className="dt__td" data-label="Settled by" data-w2="">{"Card at the desk"}</td>
                          <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹30,012.00"}</td>
                          <td className="dt__td" data-label="By" data-w2="">{"Sneha Joseph"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="stack">
                              <a className="btn" href="#FD-P35-FK-10123">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#undo" />
                                </svg>
                                {"Reinstate"}
                              </a>
                              <a className="btn" href="/front-desk/fd-08-guest-folio/#FK-10123" data-leads-to="FD-08">{"Folio"}</a>
                            </div>
                            <div className="fd-toast fd-toast--in" role="status">
                              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              <div className="fd-toast__text">
                                {"Mrs Isha Neil checked out – room 416, 505"}
                                <small>{"Reservation FK-10123 is Checked-out · room Vacant Dirty (housekeeping told) · invoice INV/26-27/003806 issued"}</small>
                              </div>
                              <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#x" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="fd-after fd-after--x" id="co-FK-10142">
                          <td className="dt__td nw" data-label="Checked out at" data-w2="" data-t="">{"09:42"}</td>
                          <td className="dt__td nw" data-label="Room">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"517"}</span>
                          </td>
                          <td className="dt__td" data-label="Guest" data-w2="">
                            <strong>{"Mrs Maya Mohan"}</strong>
                            <span className="fd-sub">{"FK-10142 · "}</span>
                          </td>
                          <td className="dt__td" data-label="Invoice(s)" data-w2="">
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10142-g" data-leads-to="FD-O03">{"INV/26-27/003807"}</a>
                          </td>
                          <td className="dt__td" data-label="Settled by" data-w2="">{"Paid in advance"}</td>
                          <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹78,230.46"}</td>
                          <td className="dt__td" data-label="By" data-w2="">{"Sneha Joseph"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="stack">
                              <a className="btn" href="#FD-P35-FK-10142">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#undo" />
                                </svg>
                                {"Reinstate"}
                              </a>
                              <a className="btn" href="/front-desk/fd-08-guest-folio/#FK-10142" data-leads-to="FD-08">{"Folio"}</a>
                            </div>
                            <div className="fd-toast fd-toast--in" role="status">
                              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              <div className="fd-toast__text">
                                {"Mrs Maya Mohan checked out – room 517"}
                                <small>{"Reservation FK-10142 is Checked-out · room Vacant Dirty (housekeeping told) · invoice INV/26-27/003807 issued"}</small>
                              </div>
                              <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#x" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="fd-after" id="co-FK-10002">
                          <td className="dt__td nw" data-label="Checked out at" data-w2="" data-t="">{"09:42"}</td>
                          <td className="dt__td nw" data-label="Room">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"107"}</span>
                          </td>
                          <td className="dt__td" data-label="Guest">
                            <strong>{"Mrs Jyoti Jatin"}</strong>
                            <span className="fd-sub">{"FK-10002 · "}</span>
                          </td>
                          <td className="dt__td" data-label="Invoice(s)" data-w2="">
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10002-g" data-leads-to="FD-O03">{"INV/26-27/003808"}</a>
                          </td>
                          <td className="dt__td" data-label="Settled by" data-w2="">{"Pre-authorised card"}</td>
                          <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹15,239.00"}</td>
                          <td className="dt__td" data-label="By" data-w2="">{"Sneha Joseph"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="stack">
                              <a className="btn" href="#FD-P35-FK-10002">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#undo" />
                                </svg>
                                {"Reinstate"}
                              </a>
                              <a className="btn" href="/front-desk/fd-08-guest-folio/#FK-10002" data-leads-to="FD-08">{"Folio"}</a>
                            </div>
                            <div className="fd-toast fd-toast--in" role="status">
                              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              <div className="fd-toast__text">
                                {"Mrs Jyoti Jatin checked out – room 107"}
                                <small>{"Reservation FK-10002 is Checked-out · room Vacant Dirty (housekeeping told) · invoice INV/26-27/003808 issued"}</small>
                              </div>
                              <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#x" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="fd-after" id="co-FK-10008">
                          <td className="dt__td nw" data-label="Checked out at" data-w2="" data-t="">{"09:42"}</td>
                          <td className="dt__td nw" data-label="Room" data-w2="">
                            <span className="fd-rms" title="Rooms 219, 112, 103">
                              <span className="fd-rm fd-rm--OC" title="Occupied clean">{"219"}</span>
                              <span className="fd-rm fd-rm--OC" title="Occupied clean">{"112"}</span>
                              <span className="fd-rm fd-rm--OC" title="Occupied clean">{"103"}</span>
                            </span>
                          </td>
                          <td className="dt__td" data-label="Guest" data-w2="">
                            <strong>{"Mr Ajay Jatin"}</strong>
                            <span className="fd-sub">{"FK-10008 · "}</span>
                          </td>
                          <td className="dt__td" data-label="Invoice(s)" data-w2="">
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10008-g" data-leads-to="FD-O03">{"INV/26-27/003809"}</a>
                          </td>
                          <td className="dt__td" data-label="Settled by" data-w2="">{"Card at the desk"}</td>
                          <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹79,424.00"}</td>
                          <td className="dt__td" data-label="By" data-w2="">{"Sneha Joseph"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="stack">
                              <a className="btn" href="#FD-P35-FK-10008">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#undo" />
                                </svg>
                                {"Reinstate"}
                              </a>
                              <a className="btn" href="/front-desk/fd-08-guest-folio/#FK-10008" data-leads-to="FD-08">{"Folio"}</a>
                            </div>
                            <div className="fd-toast fd-toast--in" role="status">
                              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              <div className="fd-toast__text">
                                {"Mr Ajay Jatin checked out – room 219, 112, 103"}
                                <small>{"Reservation FK-10008 is Checked-out · room Vacant Dirty (housekeeping told) · invoice INV/26-27/003809 issued"}</small>
                              </div>
                              <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#x" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="fd-after" id="co-FK-10010">
                          <td className="dt__td nw" data-label="Checked out at" data-w2="" data-t="">{"09:42"}</td>
                          <td className="dt__td nw" data-label="Room">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"507"}</span>
                          </td>
                          <td className="dt__td" data-label="Guest">
                            <strong>{"Mrs Pooja Kunal"}</strong>
                            <span className="fd-sub">{"FK-10010 · "}</span>
                          </td>
                          <td className="dt__td" data-label="Invoice(s)" data-w2="">
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10010-g" data-leads-to="FD-O03">{"INV/26-27/003810"}</a>
                          </td>
                          <td className="dt__td" data-label="Settled by" data-w2="">{"Paid in advance"}</td>
                          <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹24,074.36"}</td>
                          <td className="dt__td" data-label="By" data-w2="">{"Sneha Joseph"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="stack">
                              <a className="btn" href="#FD-P35-FK-10010">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#undo" />
                                </svg>
                                {"Reinstate"}
                              </a>
                              <a className="btn" href="/front-desk/fd-08-guest-folio/#FK-10010" data-leads-to="FD-08">{"Folio"}</a>
                            </div>
                            <div className="fd-toast fd-toast--in" role="status">
                              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              <div className="fd-toast__text">
                                {"Mrs Pooja Kunal checked out – room 507"}
                                <small>{"Reservation FK-10010 is Checked-out · room Vacant Dirty (housekeeping told) · invoice INV/26-27/003810 issued"}</small>
                              </div>
                              <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#x" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="fd-after" id="co-FK-10011">
                          <td className="dt__td nw" data-label="Checked out at" data-w2="" data-t="">{"09:42"}</td>
                          <td className="dt__td nw" data-label="Room">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"116"}</span>
                          </td>
                          <td className="dt__td" data-label="Guest">
                            <strong>{"Mr Amit Bijoy"}</strong>
                            <span className="fd-sub">
                              {"FK-10011 · "}
                              <span className="pill pill--vip">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#star" />
                                </svg>
                                {"Aviv Club Platinum"}
                              </span>
                              {" "}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Invoice(s)" data-w2="">
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10011-g" data-leads-to="FD-O03">{"INV/26-27/003811"}</a>
                          </td>
                          <td className="dt__td" data-label="Settled by" data-w2="">{"Pre-authorised card"}</td>
                          <td className="dt__td dt__td--right num" data-label="Amount">{"₹16.00"}</td>
                          <td className="dt__td" data-label="By" data-w2="">{"Sneha Joseph"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="stack">
                              <a className="btn" href="#FD-P35-FK-10011">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#undo" />
                                </svg>
                                {"Reinstate"}
                              </a>
                              <a className="btn" href="/front-desk/fd-08-guest-folio/#FK-10011" data-leads-to="FD-08">{"Folio"}</a>
                            </div>
                            <div className="fd-toast fd-toast--in" role="status">
                              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              <div className="fd-toast__text">
                                {"Mr Amit Bijoy checked out – room 116"}
                                <small>{"Reservation FK-10011 is Checked-out · room Vacant Dirty (housekeeping told) · invoice INV/26-27/003811 issued"}</small>
                              </div>
                              <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#x" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="fd-after" id="co-FK-10027">
                          <td className="dt__td nw" data-label="Checked out at" data-w2="" data-t="">{"09:42"}</td>
                          <td className="dt__td nw" data-label="Room">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"504"}</span>
                          </td>
                          <td className="dt__td" data-label="Guest">
                            <strong>{"Dr Claire Dubois"}</strong>
                            <span className="fd-sub">
                              {"FK-10027 · "}
                              <span className="pill pill--vip">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#star" />
                                </svg>
                                {"Aviv Club Member"}
                              </span>
                              {" "}
                              <span className="fd-flag" title="Foreign national – Form III required">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#globe" />
                                </svg>
                                {"French"}
                              </span>
                              {" "}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Invoice(s)" data-w2="">
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10027-g" data-leads-to="FD-O03">{"INV/26-27/003812"}</a>
                          </td>
                          <td className="dt__td" data-label="Settled by" data-w2="">{"Card at the desk"}</td>
                          <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹60,594.00"}</td>
                          <td className="dt__td" data-label="By" data-w2="">{"Sneha Joseph"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="stack">
                              <a className="btn" href="#FD-P35-FK-10027">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#undo" />
                                </svg>
                                {"Reinstate"}
                              </a>
                              <a className="btn" href="/front-desk/fd-08-guest-folio/#FK-10027" data-leads-to="FD-08">{"Folio"}</a>
                            </div>
                            <div className="fd-toast fd-toast--in" role="status">
                              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              <div className="fd-toast__text">
                                {"Dr Claire Dubois checked out – room 504"}
                                <small>{"Reservation FK-10027 is Checked-out · room Vacant Dirty (housekeeping told) · invoice INV/26-27/003812 issued · Form III departure report due (FD-20)"}</small>
                              </div>
                              <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#x" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="fd-after" id="co-FK-10029">
                          <td className="dt__td nw" data-label="Checked out at" data-w2="" data-t="">{"09:42"}</td>
                          <td className="dt__td nw" data-label="Room">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"515"}</span>
                          </td>
                          <td className="dt__td" data-label="Guest">
                            <strong>{"Mrs Rekha Krish"}</strong>
                            <span className="fd-sub">{"FK-10029 · "}</span>
                          </td>
                          <td className="dt__td" data-label="Invoice(s)">
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10029-g" data-leads-to="FD-O03">{"INV/26-27/003813"}</a>
                            {" · "}
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10029-c" data-leads-to="FD-O03">{"INV/26-27/003814"}</a>
                          </td>
                          <td className="dt__td" data-label="Settled by" data-w2="">{"Card at the desk"}</td>
                          <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹6,419.00"}</td>
                          <td className="dt__td" data-label="By" data-w2="">{"Sneha Joseph"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="stack">
                              <a className="btn" href="#FD-P35-FK-10029">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#undo" />
                                </svg>
                                {"Reinstate"}
                              </a>
                              <a className="btn" href="/front-desk/fd-08-guest-folio/#FK-10029" data-leads-to="FD-08">{"Folio"}</a>
                            </div>
                            <div className="fd-toast fd-toast--in" role="status">
                              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              <div className="fd-toast__text">
                                {"Mrs Rekha Krish checked out – room 515"}
                                <small>{"Reservation FK-10029 is Checked-out · room Vacant Dirty (housekeeping told) · invoice INV/26-27/003813 and INV/26-27/003814 issued · e-invoice (IRN) generated"}</small>
                              </div>
                              <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#x" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="fd-after" id="co-FK-10031">
                          <td className="dt__td nw" data-label="Checked out at" data-w2="" data-t="">{"09:42"}</td>
                          <td className="dt__td nw" data-label="Room">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"303"}</span>
                          </td>
                          <td className="dt__td" data-label="Guest">
                            <strong>{"Ms Charlotte Fraser"}</strong>
                            <span className="fd-sub">
                              {"FK-10031 · "}
                              <span className="pill pill--vip">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#star" />
                                </svg>
                                {"Aviv Club Silver"}
                              </span>
                              {" "}
                              <span className="fd-flag" title="Foreign national – Form III required">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#globe" />
                                </svg>
                                {"British"}
                              </span>
                              {" "}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Invoice(s)" data-w2="">
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10031-g" data-leads-to="FD-O03">{"INV/26-27/003815"}</a>
                          </td>
                          <td className="dt__td" data-label="Settled by" data-w2="">{"Card at the desk"}</td>
                          <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹20,857.00"}</td>
                          <td className="dt__td" data-label="By" data-w2="">{"Sneha Joseph"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="stack">
                              <a className="btn" href="#FD-P35-FK-10031">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#undo" />
                                </svg>
                                {"Reinstate"}
                              </a>
                              <a className="btn" href="/front-desk/fd-08-guest-folio/#FK-10031" data-leads-to="FD-08">{"Folio"}</a>
                            </div>
                            <div className="fd-toast fd-toast--in" role="status">
                              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              <div className="fd-toast__text">
                                {"Ms Charlotte Fraser checked out – room 303"}
                                <small>{"Reservation FK-10031 is Checked-out · room Vacant Dirty (housekeeping told) · invoice INV/26-27/003815 issued · Form III departure report due (FD-20)"}</small>
                              </div>
                              <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#x" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="fd-after" id="co-FK-10033">
                          <td className="dt__td nw" data-label="Checked out at" data-w2="" data-t="">{"09:42"}</td>
                          <td className="dt__td nw" data-label="Room">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"208"}</span>
                          </td>
                          <td className="dt__td" data-label="Guest">
                            <strong>{"Ms Elsa Lindberg"}</strong>
                            <span className="fd-sub">
                              {"FK-10033 · "}
                              <span className="pill pill--vip">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#star" />
                                </svg>
                                {"Aviv Club Member"}
                              </span>
                              {" "}
                              <span className="fd-flag" title="Foreign national – Form III required">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#globe" />
                                </svg>
                                {"Swedish"}
                              </span>
                              {" "}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Invoice(s)" data-w2="">
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10033-g" data-leads-to="FD-O03">{"INV/26-27/003816"}</a>
                          </td>
                          <td className="dt__td" data-label="Settled by" data-w2="">{"Paid in advance"}</td>
                          <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹53,761.05"}</td>
                          <td className="dt__td" data-label="By" data-w2="">{"Sneha Joseph"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="stack">
                              <a className="btn" href="#FD-P35-FK-10033">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#undo" />
                                </svg>
                                {"Reinstate"}
                              </a>
                              <a className="btn" href="/front-desk/fd-08-guest-folio/#FK-10033" data-leads-to="FD-08">{"Folio"}</a>
                            </div>
                            <div className="fd-toast fd-toast--in" role="status">
                              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              <div className="fd-toast__text">
                                {"Ms Elsa Lindberg checked out – room 208"}
                                <small>{"Reservation FK-10033 is Checked-out · room Vacant Dirty (housekeeping told) · invoice INV/26-27/003816 issued · Form III departure report due (FD-20)"}</small>
                              </div>
                              <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#x" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="fd-after" id="co-FK-10035">
                          <td className="dt__td nw" data-label="Checked out at" data-w2="" data-t="">{"09:42"}</td>
                          <td className="dt__td nw" data-label="Room" data-w2="">
                            <span className="fd-rms" title="Rooms 110, 119, 109">
                              <span className="fd-rm fd-rm--OD" title="Occupied dirty">{"110"}</span>
                              <span className="fd-rm fd-rm--OC" title="Occupied clean">{"119"}</span>
                              <span className="fd-rm fd-rm--OC" title="Occupied clean">{"109"}</span>
                            </span>
                          </td>
                          <td className="dt__td" data-label="Guest">
                            <strong>{"Mrs Priya Kabir"}</strong>
                            <span className="fd-sub">{"FK-10035 · "}</span>
                          </td>
                          <td className="dt__td" data-label="Invoice(s)" data-w2="">
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10035-g" data-leads-to="FD-O03">{"INV/26-27/003817"}</a>
                          </td>
                          <td className="dt__td" data-label="Settled by" data-w2="">{"Card at the desk"}</td>
                          <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹1,11,813.00"}</td>
                          <td className="dt__td" data-label="By" data-w2="">{"Sneha Joseph"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="stack">
                              <a className="btn" href="#FD-P35-FK-10035">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#undo" />
                                </svg>
                                {"Reinstate"}
                              </a>
                              <a className="btn" href="/front-desk/fd-08-guest-folio/#FK-10035" data-leads-to="FD-08">{"Folio"}</a>
                            </div>
                            <div className="fd-toast fd-toast--in" role="status">
                              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              <div className="fd-toast__text">
                                {"Mrs Priya Kabir checked out – room 110, 119, 109"}
                                <small>{"Reservation FK-10035 is Checked-out · room Vacant Dirty (housekeeping told) · invoice INV/26-27/003817 issued"}</small>
                              </div>
                              <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#x" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="fd-after" id="co-FK-10042">
                          <td className="dt__td nw" data-label="Checked out at" data-w2="" data-t="">{"09:42"}</td>
                          <td className="dt__td nw" data-label="Room">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"516"}</span>
                          </td>
                          <td className="dt__td" data-label="Guest">
                            <strong>{"Ms Nandini Jatin"}</strong>
                            <span className="fd-sub">{"FK-10042 · "}</span>
                          </td>
                          <td className="dt__td" data-label="Invoice(s)">
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10042-g" data-leads-to="FD-O03">{"INV/26-27/003818"}</a>
                            {" · "}
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10042-c" data-leads-to="FD-O03">{"INV/26-27/003819"}</a>
                          </td>
                          <td className="dt__td" data-label="Settled by" data-w2="">{"Card at the desk"}</td>
                          <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹5,254.00"}</td>
                          <td className="dt__td" data-label="By" data-w2="">{"Sneha Joseph"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="stack">
                              <a className="btn" href="#FD-P35-FK-10042">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#undo" />
                                </svg>
                                {"Reinstate"}
                              </a>
                              <a className="btn" href="/front-desk/fd-08-guest-folio/#FK-10042" data-leads-to="FD-08">{"Folio"}</a>
                            </div>
                            <div className="fd-toast fd-toast--in" role="status">
                              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              <div className="fd-toast__text">
                                {"Ms Nandini Jatin checked out – room 516"}
                                <small>{"Reservation FK-10042 is Checked-out · room Vacant Dirty (housekeeping told) · invoice INV/26-27/003818 and INV/26-27/003819 issued · e-invoice (IRN) generated"}</small>
                              </div>
                              <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#x" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="fd-after" id="co-FK-10048">
                          <td className="dt__td nw" data-label="Checked out at" data-w2="" data-t="">{"09:42"}</td>
                          <td className="dt__td nw" data-label="Room">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"402"}</span>
                          </td>
                          <td className="dt__td" data-label="Guest">
                            <strong>{"Mrs Kavita Siddharth"}</strong>
                            <span className="fd-sub">{"FK-10048 · "}</span>
                          </td>
                          <td className="dt__td" data-label="Invoice(s)" data-w2="">
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10048-g" data-leads-to="FD-O03">{"INV/26-27/003820"}</a>
                          </td>
                          <td className="dt__td" data-label="Settled by" data-w2="">{"Paid in advance"}</td>
                          <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹83,062.56"}</td>
                          <td className="dt__td" data-label="By" data-w2="">{"Sneha Joseph"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="stack">
                              <a className="btn" href="#FD-P35-FK-10048">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#undo" />
                                </svg>
                                {"Reinstate"}
                              </a>
                              <a className="btn" href="/front-desk/fd-08-guest-folio/#FK-10048" data-leads-to="FD-08">{"Folio"}</a>
                            </div>
                            <div className="fd-toast fd-toast--in" role="status">
                              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              <div className="fd-toast__text">
                                {"Mrs Kavita Siddharth checked out – room 402"}
                                <small>{"Reservation FK-10048 is Checked-out · room Vacant Dirty (housekeeping told) · invoice INV/26-27/003820 issued"}</small>
                              </div>
                              <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#x" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="fd-after" id="co-FK-10050">
                          <td className="dt__td nw" data-label="Checked out at" data-w2="" data-t="">{"09:42"}</td>
                          <td className="dt__td nw" data-label="Room">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"114"}</span>
                          </td>
                          <td className="dt__td" data-label="Guest">
                            <strong>{"Mrs Fatima Al Mansoori"}</strong>
                            <span className="fd-sub">
                              {"FK-10050 · "}
                              <span className="fd-flag" title="Foreign national – Form III required">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#globe" />
                                </svg>
                                {"Emirati"}
                              </span>
                              {" "}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Invoice(s)" data-w2="">
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10050-g" data-leads-to="FD-O03">{"INV/26-27/003821"}</a>
                          </td>
                          <td className="dt__td" data-label="Settled by" data-w2="">{"Pre-authorised card"}</td>
                          <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹15,909.00"}</td>
                          <td className="dt__td" data-label="By" data-w2="">{"Sneha Joseph"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="stack">
                              <a className="btn" href="#FD-P35-FK-10050">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#undo" />
                                </svg>
                                {"Reinstate"}
                              </a>
                              <a className="btn" href="/front-desk/fd-08-guest-folio/#FK-10050" data-leads-to="FD-08">{"Folio"}</a>
                            </div>
                            <div className="fd-toast fd-toast--in" role="status">
                              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              <div className="fd-toast__text">
                                {"Mrs Fatima Al Mansoori checked out – room 114"}
                                <small>{"Reservation FK-10050 is Checked-out · room Vacant Dirty (housekeeping told) · invoice INV/26-27/003821 issued · Form III departure report due (FD-20)"}</small>
                              </div>
                              <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#x" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="fd-after" id="co-FK-10056">
                          <td className="dt__td nw" data-label="Checked out at" data-w2="" data-t="">{"09:42"}</td>
                          <td className="dt__td nw" data-label="Room">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"105"}</span>
                          </td>
                          <td className="dt__td" data-label="Guest">
                            <strong>{"Ms Noura Al Saud"}</strong>
                            <span className="fd-sub">
                              {"FK-10056 · "}
                              <span className="fd-flag" title="Foreign national – Form III required">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#globe" />
                                </svg>
                                {"Saudi"}
                              </span>
                              {" "}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Invoice(s)" data-w2="">
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10056-c" data-leads-to="FD-O03">{"INV/26-27/003822"}</a>
                          </td>
                          <td className="dt__td" data-label="Settled by" data-w2="">{"Company ledger"}</td>
                          <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹20,660.85"}</td>
                          <td className="dt__td" data-label="By" data-w2="">{"Sneha Joseph"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="stack">
                              <a className="btn" href="#FD-P35-FK-10056">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#undo" />
                                </svg>
                                {"Reinstate"}
                              </a>
                              <a className="btn" href="/front-desk/fd-08-guest-folio/#FK-10056" data-leads-to="FD-08">{"Folio"}</a>
                            </div>
                            <div className="fd-toast fd-toast--in" role="status">
                              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              <div className="fd-toast__text">
                                {"Ms Noura Al Saud checked out – room 105"}
                                <small>{"Reservation FK-10056 is Checked-out · room Vacant Dirty (housekeeping told) · invoice INV/26-27/003822 issued · e-invoice (IRN) generated · Form III departure report due (FD-20)"}</small>
                              </div>
                              <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#x" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="fd-after" id="co-FK-10058">
                          <td className="dt__td nw" data-label="Checked out at" data-w2="" data-t="">{"09:42"}</td>
                          <td className="dt__td nw" data-label="Room">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"104"}</span>
                          </td>
                          <td className="dt__td" data-label="Guest" data-w2="">
                            <strong>{"Mr Shibu Krish"}</strong>
                            <span className="fd-sub">{"FK-10058 · "}</span>
                          </td>
                          <td className="dt__td" data-label="Invoice(s)" data-w2="">
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10058-g" data-leads-to="FD-O03">{"INV/26-27/003823"}</a>
                          </td>
                          <td className="dt__td" data-label="Settled by" data-w2="">{"Paid in advance"}</td>
                          <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹46,584.70"}</td>
                          <td className="dt__td" data-label="By" data-w2="">{"Sneha Joseph"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="stack">
                              <a className="btn" href="#FD-P35-FK-10058">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#undo" />
                                </svg>
                                {"Reinstate"}
                              </a>
                              <a className="btn" href="/front-desk/fd-08-guest-folio/#FK-10058" data-leads-to="FD-08">{"Folio"}</a>
                            </div>
                            <div className="fd-toast fd-toast--in" role="status">
                              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              <div className="fd-toast__text">
                                {"Mr Shibu Krish checked out – room 104"}
                                <small>{"Reservation FK-10058 is Checked-out · room Vacant Dirty (housekeeping told) · invoice INV/26-27/003823 issued"}</small>
                              </div>
                              <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#x" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="fd-after" id="co-FK-10061">
                          <td className="dt__td nw" data-label="Checked out at" data-w2="" data-t="">{"09:42"}</td>
                          <td className="dt__td nw" data-label="Room">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"309"}</span>
                          </td>
                          <td className="dt__td" data-label="Guest">
                            <strong>{"Ms Nandini Rishi"}</strong>
                            <span className="fd-sub">{"FK-10061 · "}</span>
                          </td>
                          <td className="dt__td" data-label="Invoice(s)" data-w2="">
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10061-g" data-leads-to="FD-O03">{"INV/26-27/003824"}</a>
                          </td>
                          <td className="dt__td" data-label="Settled by" data-w2="">{"Paid in advance"}</td>
                          <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹35,306.45"}</td>
                          <td className="dt__td" data-label="By" data-w2="">{"Sneha Joseph"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="stack">
                              <a className="btn" href="#FD-P35-FK-10061">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#undo" />
                                </svg>
                                {"Reinstate"}
                              </a>
                              <a className="btn" href="/front-desk/fd-08-guest-folio/#FK-10061" data-leads-to="FD-08">{"Folio"}</a>
                            </div>
                            <div className="fd-toast fd-toast--in" role="status">
                              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              <div className="fd-toast__text">
                                {"Ms Nandini Rishi checked out – room 309"}
                                <small>{"Reservation FK-10061 is Checked-out · room Vacant Dirty (housekeeping told) · invoice INV/26-27/003824 issued"}</small>
                              </div>
                              <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#x" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="fd-after" id="co-FK-10069">
                          <td className="dt__td nw" data-label="Checked out at" data-w2="" data-t="">{"09:42"}</td>
                          <td className="dt__td nw" data-label="Room">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"301"}</span>
                          </td>
                          <td className="dt__td" data-label="Guest">
                            <strong>{"Mr Biju George"}</strong>
                            <span className="fd-sub">
                              {"FK-10069 · "}
                              <span className="pill pill--vip">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#star" />
                                </svg>
                                {"Aviv Club Member"}
                              </span>
                              {" "}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Invoice(s)">
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10069-g" data-leads-to="FD-O03">{"INV/26-27/003825"}</a>
                            {" · "}
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10069-c" data-leads-to="FD-O03">{"INV/26-27/003826"}</a>
                          </td>
                          <td className="dt__td" data-label="Settled by" data-w2="">{"Card at the desk"}</td>
                          <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹1,754.00"}</td>
                          <td className="dt__td" data-label="By" data-w2="">{"Sneha Joseph"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="stack">
                              <a className="btn" href="#FD-P35-FK-10069">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#undo" />
                                </svg>
                                {"Reinstate"}
                              </a>
                              <a className="btn" href="/front-desk/fd-08-guest-folio/#FK-10069" data-leads-to="FD-08">{"Folio"}</a>
                            </div>
                            <div className="fd-toast fd-toast--in" role="status">
                              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              <div className="fd-toast__text">
                                {"Mr Biju George checked out – room 301"}
                                <small>{"Reservation FK-10069 is Checked-out · room Vacant Dirty (housekeeping told) · invoice INV/26-27/003825 and INV/26-27/003826 issued · e-invoice (IRN) generated"}</small>
                              </div>
                              <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#x" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="fd-after" id="co-FK-10074">
                          <td className="dt__td nw" data-label="Checked out at" data-w2="" data-t="">{"09:42"}</td>
                          <td className="dt__td nw" data-label="Room">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"108"}</span>
                          </td>
                          <td className="dt__td" data-label="Guest">
                            <strong>{"Mrs Shruti Shaan"}</strong>
                            <span className="fd-sub">
                              {"FK-10074 · "}
                              <span className="pill pill--vip">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#star" />
                                </svg>
                                {"Aviv Club Gold"}
                              </span>
                              {" "}
                            </span>
                          </td>
                          <td className="dt__td" data-e="" />
                          <td className="dt__td" data-label="Settled by" data-w2="">{"Paid in advance"}</td>
                          <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹7,558.95"}</td>
                          <td className="dt__td" data-label="By" data-w2="">{"Sneha Joseph"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="stack">
                              <a className="btn" href="#FD-P35-FK-10074">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#undo" />
                                </svg>
                                {"Reinstate"}
                              </a>
                              <a className="btn" href="/front-desk/fd-08-guest-folio/#FK-10074" data-leads-to="FD-08">{"Folio"}</a>
                            </div>
                            <div className="fd-toast fd-toast--in" role="status">
                              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              <div className="fd-toast__text">
                                {"Mrs Shruti Shaan checked out – room 108"}
                                <small>{"Reservation FK-10074 is Checked-out · room Vacant Dirty (housekeeping told) · invoice issued"}</small>
                              </div>
                              <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#x" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="fd-after" id="co-FK-10082">
                          <td className="dt__td nw" data-label="Checked out at" data-w2="" data-t="">{"09:42"}</td>
                          <td className="dt__td nw" data-label="Room">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"101"}</span>
                          </td>
                          <td className="dt__td" data-label="Guest" data-w2="">
                            <strong>{"Mr Rohit Neil"}</strong>
                            <span className="fd-sub">{"FK-10082 · "}</span>
                          </td>
                          <td className="dt__td" data-label="Invoice(s)" data-w2="">
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10082-g" data-leads-to="FD-O03">{"INV/26-27/003827"}</a>
                          </td>
                          <td className="dt__td" data-label="Settled by" data-w2="">{"Card at the desk"}</td>
                          <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹13,780.00"}</td>
                          <td className="dt__td" data-label="By" data-w2="">{"Sneha Joseph"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="stack">
                              <a className="btn" href="#FD-P35-FK-10082">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#undo" />
                                </svg>
                                {"Reinstate"}
                              </a>
                              <a className="btn" href="/front-desk/fd-08-guest-folio/#FK-10082" data-leads-to="FD-08">{"Folio"}</a>
                            </div>
                            <div className="fd-toast fd-toast--in" role="status">
                              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              <div className="fd-toast__text">
                                {"Mr Rohit Neil checked out – room 101"}
                                <small>{"Reservation FK-10082 is Checked-out · room Vacant Dirty (housekeeping told) · invoice INV/26-27/003827 issued"}</small>
                              </div>
                              <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#x" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="fd-after" id="co-FK-10084">
                          <td className="dt__td nw" data-label="Checked out at" data-w2="" data-t="">{"09:42"}</td>
                          <td className="dt__td nw" data-label="Room">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"202"}</span>
                          </td>
                          <td className="dt__td" data-label="Guest" data-s="">
                            <strong>{"Dr Aswathy Vijay"}</strong>
                            <span className="fd-sub">
                              {"FK-10084 · "}
                              <span className="pill pill--vip">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#star" />
                                </svg>
                                {"VIP"}
                              </span>
                              {" "}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Invoice(s)" data-w2="">
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10084-g" data-leads-to="FD-O03">{"INV/26-27/003828"}</a>
                          </td>
                          <td className="dt__td" data-label="Settled by" data-w2="">{"Pre-authorised card"}</td>
                          <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹28,839.00"}</td>
                          <td className="dt__td" data-label="By" data-w2="">{"Sneha Joseph"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="stack">
                              <a className="btn" href="#FD-P35-FK-10084">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#undo" />
                                </svg>
                                {"Reinstate"}
                              </a>
                              <a className="btn" href="/front-desk/fd-08-guest-folio/#FK-10084" data-leads-to="FD-08">{"Folio"}</a>
                            </div>
                            <div className="fd-toast fd-toast--in" role="status">
                              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              <div className="fd-toast__text">
                                {"Dr Aswathy Vijay checked out – room 202"}
                                <small>{"Reservation FK-10084 is Checked-out · room Vacant Dirty (housekeeping told) · invoice INV/26-27/003828 issued"}</small>
                              </div>
                              <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#x" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="fd-after" id="co-FK-10097">
                          <td className="dt__td nw" data-label="Checked out at" data-w2="" data-t="">{"09:42"}</td>
                          <td className="dt__td nw" data-label="Room">
                            <span className="fd-rms" title="Rooms 508, 217">
                              <span className="fd-rm fd-rm--OC" title="Occupied clean">{"508"}</span>
                              <span className="fd-rm fd-rm--OC" title="Occupied clean">{"217"}</span>
                            </span>
                          </td>
                          <td className="dt__td" data-label="Guest">
                            <strong>{"Ms Sindhu Rahman"}</strong>
                            <span className="fd-sub">{"FK-10097 · "}</span>
                          </td>
                          <td className="dt__td" data-label="Invoice(s)" data-w2="">
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10097-g" data-leads-to="FD-O03">{"INV/26-27/003829"}</a>
                          </td>
                          <td className="dt__td" data-label="Settled by" data-w2="">{"Card at the desk"}</td>
                          <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹74,532.00"}</td>
                          <td className="dt__td" data-label="By" data-w2="">{"Sneha Joseph"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="stack">
                              <a className="btn" href="#FD-P35-FK-10097">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#undo" />
                                </svg>
                                {"Reinstate"}
                              </a>
                              <a className="btn" href="/front-desk/fd-08-guest-folio/#FK-10097" data-leads-to="FD-08">{"Folio"}</a>
                            </div>
                            <div className="fd-toast fd-toast--in" role="status">
                              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              <div className="fd-toast__text">
                                {"Ms Sindhu Rahman checked out – room 508, 217"}
                                <small>{"Reservation FK-10097 is Checked-out · room Vacant Dirty (housekeeping told) · invoice INV/26-27/003829 issued"}</small>
                              </div>
                              <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#x" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="fd-after" id="co-FK-10101">
                          <td className="dt__td nw" data-label="Checked out at" data-w2="" data-t="">{"09:42"}</td>
                          <td className="dt__td nw" data-label="Room">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"201"}</span>
                          </td>
                          <td className="dt__td" data-label="Guest">
                            <strong>{"Ms Kavita Siddharth"}</strong>
                            <span className="fd-sub">{"FK-10101 · "}</span>
                          </td>
                          <td className="dt__td" data-label="Invoice(s)" data-w2="">
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10101-g" data-leads-to="FD-O03">{"INV/26-27/003830"}</a>
                          </td>
                          <td className="dt__td" data-label="Settled by" data-w2="">{"Paid in advance"}</td>
                          <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹46,200.00"}</td>
                          <td className="dt__td" data-label="By" data-w2="">{"Sneha Joseph"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="stack">
                              <a className="btn" href="#FD-P35-FK-10101">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#undo" />
                                </svg>
                                {"Reinstate"}
                              </a>
                              <a className="btn" href="/front-desk/fd-08-guest-folio/#FK-10101" data-leads-to="FD-08">{"Folio"}</a>
                            </div>
                            <div className="fd-toast fd-toast--in" role="status">
                              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              <div className="fd-toast__text">
                                {"Ms Kavita Siddharth checked out – room 201"}
                                <small>{"Reservation FK-10101 is Checked-out · room Vacant Dirty (housekeeping told) · invoice INV/26-27/003830 issued"}</small>
                              </div>
                              <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#x" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="fd-after" id="co-FK-10103">
                          <td className="dt__td nw" data-label="Checked out at" data-w2="" data-t="">{"09:42"}</td>
                          <td className="dt__td nw" data-label="Room">
                            <span className="fd-rm fd-rm--OD" title="Occupied dirty">{"310"}</span>
                          </td>
                          <td className="dt__td" data-label="Guest">
                            <strong>{"Mr Prasad Pavan"}</strong>
                            <span className="fd-sub">{"FK-10103 · "}</span>
                          </td>
                          <td className="dt__td" data-label="Invoice(s)" data-w2="">
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10103-g" data-leads-to="FD-O03">{"INV/26-27/003831"}</a>
                          </td>
                          <td className="dt__td" data-label="Settled by" data-w2="">{"Card at the desk"}</td>
                          <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹52,457.00"}</td>
                          <td className="dt__td" data-label="By" data-w2="">{"Sneha Joseph"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="stack">
                              <a className="btn" href="#FD-P35-FK-10103">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#undo" />
                                </svg>
                                {"Reinstate"}
                              </a>
                              <a className="btn" href="/front-desk/fd-08-guest-folio/#FK-10103" data-leads-to="FD-08">{"Folio"}</a>
                            </div>
                            <div className="fd-toast fd-toast--in" role="status">
                              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              <div className="fd-toast__text">
                                {"Mr Prasad Pavan checked out – room 310"}
                                <small>{"Reservation FK-10103 is Checked-out · room Vacant Dirty (housekeeping told) · invoice INV/26-27/003831 issued"}</small>
                              </div>
                              <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#x" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="fd-after" id="co-FK-10105">
                          <td className="dt__td nw" data-label="Checked out at" data-w2="" data-t="">{"09:42"}</td>
                          <td className="dt__td nw" data-label="Room">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"306"}</span>
                          </td>
                          <td className="dt__td" data-label="Guest" data-s="">
                            <strong>{"Ms Jyoti Kabir"}</strong>
                            <span className="fd-sub">
                              {"FK-10105 · "}
                              <span className="pill pill--vip">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#star" />
                                </svg>
                                {"VIP"}
                              </span>
                              {" "}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Invoice(s)" data-w2="">
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10105-g" data-leads-to="FD-O03">{"INV/26-27/003832"}</a>
                          </td>
                          <td className="dt__td" data-label="Settled by" data-w2="">{"Card at the desk"}</td>
                          <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹55,135.00"}</td>
                          <td className="dt__td" data-label="By" data-w2="">{"Sneha Joseph"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="stack">
                              <a className="btn" href="#FD-P35-FK-10105">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#undo" />
                                </svg>
                                {"Reinstate"}
                              </a>
                              <a className="btn" href="/front-desk/fd-08-guest-folio/#FK-10105" data-leads-to="FD-08">{"Folio"}</a>
                            </div>
                            <div className="fd-toast fd-toast--in" role="status">
                              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              <div className="fd-toast__text">
                                {"Ms Jyoti Kabir checked out – room 306"}
                                <small>{"Reservation FK-10105 is Checked-out · room Vacant Dirty (housekeeping told) · invoice INV/26-27/003832 issued"}</small>
                              </div>
                              <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#x" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="fd-after" id="co-FK-10106">
                          <td className="dt__td nw" data-label="Checked out at" data-w2="" data-t="">{"09:42"}</td>
                          <td className="dt__td nw" data-label="Room">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"313"}</span>
                          </td>
                          <td className="dt__td" data-label="Guest">
                            <strong>{"Ms Nandini Jatin"}</strong>
                            <span className="fd-sub">{"FK-10106 · "}</span>
                          </td>
                          <td className="dt__td" data-label="Invoice(s)" data-w2="">
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10106-g" data-leads-to="FD-O03">{"INV/26-27/003833"}</a>
                          </td>
                          <td className="dt__td" data-label="Settled by" data-w2="">{"Paid in advance"}</td>
                          <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹40,000.00"}</td>
                          <td className="dt__td" data-label="By" data-w2="">{"Sneha Joseph"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="stack">
                              <a className="btn" href="#FD-P35-FK-10106">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#undo" />
                                </svg>
                                {"Reinstate"}
                              </a>
                              <a className="btn" href="/front-desk/fd-08-guest-folio/#FK-10106" data-leads-to="FD-08">{"Folio"}</a>
                            </div>
                            <div className="fd-toast fd-toast--in" role="status">
                              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              <div className="fd-toast__text">
                                {"Ms Nandini Jatin checked out – room 313"}
                                <small>{"Reservation FK-10106 is Checked-out · room Vacant Dirty (housekeeping told) · invoice INV/26-27/003833 issued"}</small>
                              </div>
                              <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#x" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="fd-after" id="co-FK-10109">
                          <td className="dt__td nw" data-label="Checked out at" data-w2="" data-t="">{"09:42"}</td>
                          <td className="dt__td nw" data-label="Room">
                            <span className="fd-rms" title="Rooms 511, 410">
                              <span className="fd-rm fd-rm--OC" title="Occupied clean">{"511"}</span>
                              <span className="fd-rm fd-rm--OD" title="Occupied dirty">{"410"}</span>
                            </span>
                          </td>
                          <td className="dt__td" data-label="Guest">
                            <strong>{"Mr Naveen Chirag"}</strong>
                            <span className="fd-sub">{"FK-10109 · "}</span>
                          </td>
                          <td className="dt__td" data-label="Invoice(s)" data-w2="">
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10109-g" data-leads-to="FD-O03">{"INV/26-27/003834"}</a>
                          </td>
                          <td className="dt__td" data-label="Settled by" data-w2="">{"Card at the desk"}</td>
                          <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹13,866.00"}</td>
                          <td className="dt__td" data-label="By" data-w2="">{"Sneha Joseph"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="stack">
                              <a className="btn" href="#FD-P35-FK-10109">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#undo" />
                                </svg>
                                {"Reinstate"}
                              </a>
                              <a className="btn" href="/front-desk/fd-08-guest-folio/#FK-10109" data-leads-to="FD-08">{"Folio"}</a>
                            </div>
                            <div className="fd-toast fd-toast--in" role="status">
                              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              <div className="fd-toast__text">
                                {"Mr Naveen Chirag checked out – room 511, 410"}
                                <small>{"Reservation FK-10109 is Checked-out · room Vacant Dirty (housekeeping told) · invoice INV/26-27/003834 issued"}</small>
                              </div>
                              <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#x" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="fd-after" id="co-FK-10118">
                          <td className="dt__td nw" data-label="Checked out at" data-w2="" data-t="">{"09:42"}</td>
                          <td className="dt__td nw" data-label="Room">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"115"}</span>
                          </td>
                          <td className="dt__td" data-label="Guest" data-w2="">
                            <strong>{"Ms Isha Dhruv"}</strong>
                            <span className="fd-sub">{"FK-10118 · "}</span>
                          </td>
                          <td className="dt__td" data-label="Invoice(s)" data-w2="">
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10118-g" data-leads-to="FD-O03">{"INV/26-27/003835"}</a>
                          </td>
                          <td className="dt__td" data-label="Settled by" data-w2="">{"Card at the desk"}</td>
                          <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹91,638.00"}</td>
                          <td className="dt__td" data-label="By" data-w2="">{"Sneha Joseph"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="stack">
                              <a className="btn" href="#FD-P35-FK-10118">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#undo" />
                                </svg>
                                {"Reinstate"}
                              </a>
                              <a className="btn" href="/front-desk/fd-08-guest-folio/#FK-10118" data-leads-to="FD-08">{"Folio"}</a>
                            </div>
                            <div className="fd-toast fd-toast--in" role="status">
                              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              <div className="fd-toast__text">
                                {"Ms Isha Dhruv checked out – room 115"}
                                <small>{"Reservation FK-10118 is Checked-out · room Vacant Dirty (housekeeping told) · invoice INV/26-27/003835 issued"}</small>
                              </div>
                              <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#x" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="fd-after" id="co-FK-10120">
                          <td className="dt__td nw" data-label="Checked out at" data-w2="" data-t="">{"09:42"}</td>
                          <td className="dt__td nw" data-label="Room">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"407"}</span>
                          </td>
                          <td className="dt__td" data-label="Guest">
                            <strong>{"Ms Ayesha Sahil"}</strong>
                            <span className="fd-sub">
                              {"FK-10120 · "}
                              <span className="pill pill--vip">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#star" />
                                </svg>
                                {"Aviv Club Platinum"}
                              </span>
                              {" "}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Invoice(s)" data-w2="">
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10120-g" data-leads-to="FD-O03">{"INV/26-27/003836"}</a>
                          </td>
                          <td className="dt__td" data-label="Settled by" data-w2="">{"Card at the desk"}</td>
                          <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹22,181.00"}</td>
                          <td className="dt__td" data-label="By" data-w2="">{"Sneha Joseph"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="stack">
                              <a className="btn" href="#FD-P35-FK-10120">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#undo" />
                                </svg>
                                {"Reinstate"}
                              </a>
                              <a className="btn" href="/front-desk/fd-08-guest-folio/#FK-10120" data-leads-to="FD-08">{"Folio"}</a>
                            </div>
                            <div className="fd-toast fd-toast--in" role="status">
                              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              <div className="fd-toast__text">
                                {"Ms Ayesha Sahil checked out – room 407"}
                                <small>{"Reservation FK-10120 is Checked-out · room Vacant Dirty (housekeeping told) · invoice INV/26-27/003836 issued"}</small>
                              </div>
                              <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#x" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="fd-after" id="co-FK-10140">
                          <td className="dt__td nw" data-label="Checked out at" data-w2="" data-t="">{"09:42"}</td>
                          <td className="dt__td nw" data-label="Room">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"213"}</span>
                          </td>
                          <td className="dt__td" data-label="Guest">
                            <strong>{"Mr Omar Al Farsi"}</strong>
                            <span className="fd-sub">
                              {"FK-10140 · "}
                              <span className="fd-flag" title="Foreign national – Form III required">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#globe" />
                                </svg>
                                {"Emirati"}
                              </span>
                              {" "}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Invoice(s)" data-w2="">
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10140-g" data-leads-to="FD-O03">{"INV/26-27/003837"}</a>
                          </td>
                          <td className="dt__td" data-label="Settled by" data-w2="">{"Paid in advance"}</td>
                          <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹49,980.00"}</td>
                          <td className="dt__td" data-label="By" data-w2="">{"Sneha Joseph"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="stack">
                              <a className="btn" href="#FD-P35-FK-10140">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#undo" />
                                </svg>
                                {"Reinstate"}
                              </a>
                              <a className="btn" href="/front-desk/fd-08-guest-folio/#FK-10140" data-leads-to="FD-08">{"Folio"}</a>
                            </div>
                            <div className="fd-toast fd-toast--in" role="status">
                              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              <div className="fd-toast__text">
                                {"Mr Omar Al Farsi checked out – room 213"}
                                <small>{"Reservation FK-10140 is Checked-out · room Vacant Dirty (housekeeping told) · invoice INV/26-27/003837 issued · Form III departure report due (FD-20)"}</small>
                              </div>
                              <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#x" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="fd-after" id="co-FK-10143">
                          <td className="dt__td nw" data-label="Checked out at" data-w2="" data-t="">{"09:42"}</td>
                          <td className="dt__td nw" data-label="Room">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"304"}</span>
                          </td>
                          <td className="dt__td" data-label="Guest">
                            <strong>{"Mr Oliver Hughes"}</strong>
                            <span className="fd-sub">
                              {"FK-10143 · "}
                              <span className="pill pill--vip">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#star" />
                                </svg>
                                {"Aviv Club Gold"}
                              </span>
                              {" "}
                              <span className="fd-flag" title="Foreign national – Form III required">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#globe" />
                                </svg>
                                {"British"}
                              </span>
                              {" "}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Invoice(s)" data-w2="">
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10143-g" data-leads-to="FD-O03">{"INV/26-27/003838"}</a>
                          </td>
                          <td className="dt__td" data-label="Settled by" data-w2="">{"Card at the desk"}</td>
                          <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹21,167.00"}</td>
                          <td className="dt__td" data-label="By" data-w2="">{"Sneha Joseph"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="stack">
                              <a className="btn" href="#FD-P35-FK-10143">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#undo" />
                                </svg>
                                {"Reinstate"}
                              </a>
                              <a className="btn" href="/front-desk/fd-08-guest-folio/#FK-10143" data-leads-to="FD-08">{"Folio"}</a>
                            </div>
                            <div className="fd-toast fd-toast--in" role="status">
                              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              <div className="fd-toast__text">
                                {"Mr Oliver Hughes checked out – room 304"}
                                <small>{"Reservation FK-10143 is Checked-out · room Vacant Dirty (housekeeping told) · invoice INV/26-27/003838 issued · Form III departure report due (FD-20)"}</small>
                              </div>
                              <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#x" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="fd-after" id="co-FK-10145">
                          <td className="dt__td nw" data-label="Checked out at" data-w2="" data-t="">{"09:42"}</td>
                          <td className="dt__td nw" data-label="Room">
                            <span className="fd-rm fd-rm--OD" title="Occupied dirty">{"510"}</span>
                          </td>
                          <td className="dt__td" data-label="Guest" data-s="">
                            <strong>{"Ms Sheela Nathan"}</strong>
                            <span className="fd-sub">
                              {"FK-10145 · "}
                              <span className="pill pill--vip">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#star" />
                                </svg>
                                {"Aviv Club Gold"}
                              </span>
                              {" "}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Invoice(s)" data-w2="">
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10145-g" data-leads-to="FD-O03">{"INV/26-27/003839"}</a>
                          </td>
                          <td className="dt__td" data-label="Settled by" data-w2="">{"Pre-authorised card"}</td>
                          <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹2,078.00"}</td>
                          <td className="dt__td" data-label="By" data-w2="">{"Sneha Joseph"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="stack">
                              <a className="btn" href="#FD-P35-FK-10145">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#undo" />
                                </svg>
                                {"Reinstate"}
                              </a>
                              <a className="btn" href="/front-desk/fd-08-guest-folio/#FK-10145" data-leads-to="FD-08">{"Folio"}</a>
                            </div>
                            <div className="fd-toast fd-toast--in" role="status">
                              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              <div className="fd-toast__text">
                                {"Ms Sheela Nathan checked out – room 510"}
                                <small>{"Reservation FK-10145 is Checked-out · room Vacant Dirty (housekeeping told) · invoice INV/26-27/003839 issued"}</small>
                              </div>
                              <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#x" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="fd-after" id="co-FK-10159">
                          <td className="dt__td nw" data-label="Checked out at" data-w2="" data-t="">{"09:42"}</td>
                          <td className="dt__td nw" data-label="Room">
                            <span className="fd-rms" title="Rooms 506, 318">
                              <span className="fd-rm fd-rm--OC" title="Occupied clean">{"506"}</span>
                              <span className="fd-rm fd-rm--OC" title="Occupied clean">{"318"}</span>
                            </span>
                          </td>
                          <td className="dt__td" data-label="Guest">
                            <strong>{"Dr Ayesha Chirag"}</strong>
                            <span className="fd-sub">{"FK-10159 · "}</span>
                          </td>
                          <td className="dt__td" data-label="Invoice(s)" data-w2="">
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10159-g" data-leads-to="FD-O03">{"INV/26-27/003840"}</a>
                          </td>
                          <td className="dt__td" data-label="Settled by" data-w2="">{"Card at the desk"}</td>
                          <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹1,30,610.00"}</td>
                          <td className="dt__td" data-label="By" data-w2="">{"Sneha Joseph"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="stack">
                              <a className="btn" href="#FD-P35-FK-10159">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#undo" />
                                </svg>
                                {"Reinstate"}
                              </a>
                              <a className="btn" href="/front-desk/fd-08-guest-folio/#FK-10159" data-leads-to="FD-08">{"Folio"}</a>
                            </div>
                            <div className="fd-toast fd-toast--in" role="status">
                              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              <div className="fd-toast__text">
                                {"Dr Ayesha Chirag checked out – room 506, 318"}
                                <small>{"Reservation FK-10159 is Checked-out · room Vacant Dirty (housekeeping told) · invoice INV/26-27/003840 issued"}</small>
                              </div>
                              <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#x" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="fd-after" id="co-FK-10161">
                          <td className="dt__td nw" data-label="Checked out at" data-w2="" data-t="">{"09:42"}</td>
                          <td className="dt__td nw" data-label="Room">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"408"}</span>
                          </td>
                          <td className="dt__td" data-label="Guest">
                            <strong>{"Ms Lakshmi Mathew"}</strong>
                            <span className="fd-sub">{"FK-10161 · "}</span>
                          </td>
                          <td className="dt__td" data-label="Invoice(s)">
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10161-g" data-leads-to="FD-O03">{"INV/26-27/003841"}</a>
                            {" · "}
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10161-c" data-leads-to="FD-O03">{"INV/26-27/003842"}</a>
                          </td>
                          <td className="dt__td" data-label="Settled by" data-w2="">{"Card at the desk"}</td>
                          <td className="dt__td dt__td--right num" data-label="Amount">{"₹920.00"}</td>
                          <td className="dt__td" data-label="By" data-w2="">{"Sneha Joseph"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="stack">
                              <a className="btn" href="#FD-P35-FK-10161">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#undo" />
                                </svg>
                                {"Reinstate"}
                              </a>
                              <a className="btn" href="/front-desk/fd-08-guest-folio/#FK-10161" data-leads-to="FD-08">{"Folio"}</a>
                            </div>
                            <div className="fd-toast fd-toast--in" role="status">
                              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              <div className="fd-toast__text">
                                {"Ms Lakshmi Mathew checked out – room 408"}
                                <small>{"Reservation FK-10161 is Checked-out · room Vacant Dirty (housekeeping told) · invoice INV/26-27/003841 and INV/26-27/003842 issued · e-invoice (IRN) generated"}</small>
                              </div>
                              <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#x" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="fd-after" id="co-FK-10162">
                          <td className="dt__td nw" data-label="Checked out at" data-w2="" data-t="">{"09:42"}</td>
                          <td className="dt__td nw" data-label="Room">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"212"}</span>
                          </td>
                          <td className="dt__td" data-label="Guest">
                            <strong>{"Mr Ethan Anderson"}</strong>
                            <span className="fd-sub">
                              {"FK-10162 · "}
                              <span className="fd-flag" title="Foreign national – Form III required">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#globe" />
                                </svg>
                                {"Canadian"}
                              </span>
                              {" "}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Invoice(s)" data-w2="">
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10162-g" data-leads-to="FD-O03">{"INV/26-27/003843"}</a>
                          </td>
                          <td className="dt__td" data-label="Settled by" data-w2="">{"Paid in advance"}</td>
                          <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹46,200.00"}</td>
                          <td className="dt__td" data-label="By" data-w2="">{"Sneha Joseph"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="stack">
                              <a className="btn" href="#FD-P35-FK-10162">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#undo" />
                                </svg>
                                {"Reinstate"}
                              </a>
                              <a className="btn" href="/front-desk/fd-08-guest-folio/#FK-10162" data-leads-to="FD-08">{"Folio"}</a>
                            </div>
                            <div className="fd-toast fd-toast--in" role="status">
                              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              <div className="fd-toast__text">
                                {"Mr Ethan Anderson checked out – room 212"}
                                <small>{"Reservation FK-10162 is Checked-out · room Vacant Dirty (housekeeping told) · invoice INV/26-27/003843 issued · Form III departure report due (FD-20)"}</small>
                              </div>
                              <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#x" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="fd-after" id="co-FK-10165">
                          <td className="dt__td nw" data-label="Checked out at" data-w2="" data-t="">{"09:42"}</td>
                          <td className="dt__td nw" data-label="Room">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"113"}</span>
                          </td>
                          <td className="dt__td" data-label="Guest">
                            <strong>{"Mrs Isha Vihaan"}</strong>
                            <span className="fd-sub">
                              {"FK-10165 · "}
                              <span className="pill pill--vip">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#star" />
                                </svg>
                                {"Aviv Club Member"}
                              </span>
                              {" "}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Invoice(s)">
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10165-g" data-leads-to="FD-O03">{"INV/26-27/003844"}</a>
                            {" · "}
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10165-c" data-leads-to="FD-O03">{"INV/26-27/003845"}</a>
                          </td>
                          <td className="dt__td" data-label="Settled by" data-w2="">{"Card at the desk"}</td>
                          <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹1,754.00"}</td>
                          <td className="dt__td" data-label="By" data-w2="">{"Sneha Joseph"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="stack">
                              <a className="btn" href="#FD-P35-FK-10165">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#undo" />
                                </svg>
                                {"Reinstate"}
                              </a>
                              <a className="btn" href="/front-desk/fd-08-guest-folio/#FK-10165" data-leads-to="FD-08">{"Folio"}</a>
                            </div>
                            <div className="fd-toast fd-toast--in" role="status">
                              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              <div className="fd-toast__text">
                                {"Mrs Isha Vihaan checked out – room 113"}
                                <small>{"Reservation FK-10165 is Checked-out · room Vacant Dirty (housekeeping told) · invoice INV/26-27/003844 and INV/26-27/003845 issued · e-invoice (IRN) generated"}</small>
                              </div>
                              <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#x" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="fd-after" id="co-FK-10170">
                          <td className="dt__td nw" data-label="Checked out at" data-w2="" data-t="">{"09:42"}</td>
                          <td className="dt__td nw" data-label="Room">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"211"}</span>
                          </td>
                          <td className="dt__td" data-label="Guest">
                            <strong>{"Mr Marco Rossi"}</strong>
                            <span className="fd-sub">
                              {"FK-10170 · "}
                              <span className="pill pill--vip">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#star" />
                                </svg>
                                {"Aviv Club Member"}
                              </span>
                              {" "}
                              <span className="fd-flag" title="Foreign national – Form III required">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#globe" />
                                </svg>
                                {"Italian"}
                              </span>
                              {" "}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Invoice(s)" data-w2="">
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10170-g" data-leads-to="FD-O03">{"INV/26-27/003846"}</a>
                          </td>
                          <td className="dt__td" data-label="Settled by" data-w2="">{"Card at the desk"}</td>
                          <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹45,392.00"}</td>
                          <td className="dt__td" data-label="By" data-w2="">{"Sneha Joseph"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="stack">
                              <a className="btn" href="#FD-P35-FK-10170">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#undo" />
                                </svg>
                                {"Reinstate"}
                              </a>
                              <a className="btn" href="/front-desk/fd-08-guest-folio/#FK-10170" data-leads-to="FD-08">{"Folio"}</a>
                            </div>
                            <div className="fd-toast fd-toast--in" role="status">
                              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              <div className="fd-toast__text">
                                {"Mr Marco Rossi checked out – room 211"}
                                <small>{"Reservation FK-10170 is Checked-out · room Vacant Dirty (housekeeping told) · invoice INV/26-27/003846 issued · Form III departure report due (FD-20)"}</small>
                              </div>
                              <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#x" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="fd-after" id="co-FK-10178">
                          <td className="dt__td nw" data-label="Checked out at" data-w2="" data-t="">{"09:42"}</td>
                          <td className="dt__td nw" data-label="Room">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"501"}</span>
                          </td>
                          <td className="dt__td" data-label="Guest">
                            <strong>{"Mr Prasad Manav"}</strong>
                            <span className="fd-sub">{"FK-10178 · "}</span>
                          </td>
                          <td className="dt__td" data-label="Invoice(s)" data-w2="">
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10178-g" data-leads-to="FD-O03">{"INV/26-27/003847"}</a>
                          </td>
                          <td className="dt__td" data-label="Settled by" data-w2="">{"Card at the desk"}</td>
                          <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹51,274.00"}</td>
                          <td className="dt__td" data-label="By" data-w2="">{"Sneha Joseph"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="stack">
                              <a className="btn" href="#FD-P35-FK-10178">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#undo" />
                                </svg>
                                {"Reinstate"}
                              </a>
                              <a className="btn" href="/front-desk/fd-08-guest-folio/#FK-10178" data-leads-to="FD-08">{"Folio"}</a>
                            </div>
                            <div className="fd-toast fd-toast--in" role="status">
                              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              <div className="fd-toast__text">
                                {"Mr Prasad Manav checked out – room 501"}
                                <small>{"Reservation FK-10178 is Checked-out · room Vacant Dirty (housekeeping told) · invoice INV/26-27/003847 issued"}</small>
                              </div>
                              <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#x" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="fd-after" id="co-FK-10180">
                          <td className="dt__td nw" data-label="Checked out at" data-w2="" data-t="">{"09:42"}</td>
                          <td className="dt__td nw" data-label="Room">
                            <span className="fd-rms" title="Rooms 403, 509">
                              <span className="fd-rm fd-rm--OC" title="Occupied clean">{"403"}</span>
                              <span className="fd-rm fd-rm--OC" title="Occupied clean">{"509"}</span>
                            </span>
                          </td>
                          <td className="dt__td" data-label="Guest">
                            <strong>{"Mr Luc Moreau"}</strong>
                            <span className="fd-sub">
                              {"FK-10180 · "}
                              <span className="fd-flag" title="Foreign national – Form III required">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#globe" />
                                </svg>
                                {"French"}
                              </span>
                              {" "}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Invoice(s)" data-w2="">
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10180-g" data-leads-to="FD-O03">{"INV/26-27/003848"}</a>
                          </td>
                          <td className="dt__td" data-label="Settled by" data-w2="">{"Paid in advance"}</td>
                          <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹1,21,647.62"}</td>
                          <td className="dt__td" data-label="By" data-w2="">{"Sneha Joseph"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="stack">
                              <a className="btn" href="#FD-P35-FK-10180">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#undo" />
                                </svg>
                                {"Reinstate"}
                              </a>
                              <a className="btn" href="/front-desk/fd-08-guest-folio/#FK-10180" data-leads-to="FD-08">{"Folio"}</a>
                            </div>
                            <div className="fd-toast fd-toast--in" role="status">
                              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              <div className="fd-toast__text">
                                {"Mr Luc Moreau checked out – room 403, 509"}
                                <small>{"Reservation FK-10180 is Checked-out · room Vacant Dirty (housekeeping told) · invoice INV/26-27/003848 issued · Form III departure report due (FD-20)"}</small>
                              </div>
                              <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#x" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="fd-after" id="co-FK-10197">
                          <td className="dt__td nw" data-label="Checked out at" data-w2="" data-t="">{"09:42"}</td>
                          <td className="dt__td nw" data-label="Room">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"401"}</span>
                          </td>
                          <td className="dt__td" data-label="Guest">
                            <strong>{"Mr Rahul Philip"}</strong>
                            <span className="fd-sub">
                              {"FK-10197 · "}
                              <span className="pill pill--vip">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#star" />
                                </svg>
                                {"Aviv Club Gold"}
                              </span>
                              {" "}
                            </span>
                          </td>
                          <td className="dt__td" data-e="" />
                          <td className="dt__td" data-label="Settled by" data-w2="">{"Paid in advance"}</td>
                          <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹9,202.82"}</td>
                          <td className="dt__td" data-label="By" data-w2="">{"Sneha Joseph"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="stack">
                              <a className="btn" href="#FD-P35-FK-10197">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#undo" />
                                </svg>
                                {"Reinstate"}
                              </a>
                              <a className="btn" href="/front-desk/fd-08-guest-folio/#FK-10197" data-leads-to="FD-08">{"Folio"}</a>
                            </div>
                            <div className="fd-toast fd-toast--in" role="status">
                              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              <div className="fd-toast__text">
                                {"Mr Rahul Philip checked out – room 401"}
                                <small>{"Reservation FK-10197 is Checked-out · room Vacant Dirty (housekeeping told) · invoice issued"}</small>
                              </div>
                              <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#x" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="fd-after" id="co-FK-10200">
                          <td className="dt__td nw" data-label="Checked out at" data-w2="" data-t="">{"09:42"}</td>
                          <td className="dt__td nw" data-label="Room">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"409"}</span>
                          </td>
                          <td className="dt__td" data-label="Guest">
                            <strong>{"Mr Oliver Hughes"}</strong>
                            <span className="fd-sub">
                              {"FK-10200 · "}
                              <span className="fd-flag" title="Foreign national – Form III required">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#globe" />
                                </svg>
                                {"British"}
                              </span>
                              {" "}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Invoice(s)" data-w2="">
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10200-g" data-leads-to="FD-O03">{"INV/26-27/003849"}</a>
                          </td>
                          <td className="dt__td" data-label="Settled by" data-w2="">{"Card at the desk"}</td>
                          <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹20,695.00"}</td>
                          <td className="dt__td" data-label="By" data-w2="">{"Sneha Joseph"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="stack">
                              <a className="btn" href="#FD-P35-FK-10200">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#undo" />
                                </svg>
                                {"Reinstate"}
                              </a>
                              <a className="btn" href="/front-desk/fd-08-guest-folio/#FK-10200" data-leads-to="FD-08">{"Folio"}</a>
                            </div>
                            <div className="fd-toast fd-toast--in" role="status">
                              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              <div className="fd-toast__text">
                                {"Mr Oliver Hughes checked out – room 409"}
                                <small>{"Reservation FK-10200 is Checked-out · room Vacant Dirty (housekeeping told) · invoice INV/26-27/003849 issued · Form III departure report due (FD-20)"}</small>
                              </div>
                              <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#x" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="fd-after" id="co-FK-10203">
                          <td className="dt__td nw" data-label="Checked out at" data-w2="" data-t="">{"09:42"}</td>
                          <td className="dt__td nw" data-label="Room">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"417"}</span>
                          </td>
                          <td className="dt__td" data-label="Guest">
                            <strong>{"Mrs Kavita Siddharth"}</strong>
                            <span className="fd-sub">{"FK-10203 · "}</span>
                          </td>
                          <td className="dt__td" data-label="Invoice(s)" data-w2="">
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10203-g" data-leads-to="FD-O03">{"INV/26-27/003850"}</a>
                          </td>
                          <td className="dt__td" data-label="Settled by" data-w2="">{"Card at the desk"}</td>
                          <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹23,744.00"}</td>
                          <td className="dt__td" data-label="By" data-w2="">{"Sneha Joseph"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="stack">
                              <a className="btn" href="#FD-P35-FK-10203">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#undo" />
                                </svg>
                                {"Reinstate"}
                              </a>
                              <a className="btn" href="/front-desk/fd-08-guest-folio/#FK-10203" data-leads-to="FD-08">{"Folio"}</a>
                            </div>
                            <div className="fd-toast fd-toast--in" role="status">
                              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              <div className="fd-toast__text">
                                {"Mrs Kavita Siddharth checked out – room 417"}
                                <small>{"Reservation FK-10203 is Checked-out · room Vacant Dirty (housekeeping told) · invoice INV/26-27/003850 issued"}</small>
                              </div>
                              <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#x" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="fd-after" id="co-FK-10205">
                          <td className="dt__td nw" data-label="Checked out at" data-w2="" data-t="">{"09:42"}</td>
                          <td className="dt__td nw" data-label="Room">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"218"}</span>
                          </td>
                          <td className="dt__td" data-label="Guest">
                            <strong>{"Dr Anjali Rahman"}</strong>
                            <span className="fd-sub">{"FK-10205 · "}</span>
                          </td>
                          <td className="dt__td" data-label="Invoice(s)" data-w2="">
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10205-g" data-leads-to="FD-O03">{"INV/26-27/003851"}</a>
                          </td>
                          <td className="dt__td" data-label="Settled by" data-w2="">{"Card at the desk"}</td>
                          <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹19,823.00"}</td>
                          <td className="dt__td" data-label="By" data-w2="">{"Sneha Joseph"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="stack">
                              <a className="btn" href="#FD-P35-FK-10205">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#undo" />
                                </svg>
                                {"Reinstate"}
                              </a>
                              <a className="btn" href="/front-desk/fd-08-guest-folio/#FK-10205" data-leads-to="FD-08">{"Folio"}</a>
                            </div>
                            <div className="fd-toast fd-toast--in" role="status">
                              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              <div className="fd-toast__text">
                                {"Dr Anjali Rahman checked out – room 218"}
                                <small>{"Reservation FK-10205 is Checked-out · room Vacant Dirty (housekeeping told) · invoice INV/26-27/003851 issued"}</small>
                              </div>
                              <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#x" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="fd-after" id="co-FK-10232">
                          <td className="dt__td nw" data-label="Checked out at" data-w2="" data-t="">{"09:42"}</td>
                          <td className="dt__td nw" data-label="Room">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"514"}</span>
                          </td>
                          <td className="dt__td" data-label="Guest">
                            <strong>{"Mr Jithin Mathew"}</strong>
                            <span className="fd-sub">{"FK-10232 · "}</span>
                          </td>
                          <td className="dt__td" data-label="Invoice(s)" data-w2="">
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10232-g" data-leads-to="FD-O03">{"INV/26-27/003852"}</a>
                          </td>
                          <td className="dt__td" data-label="Settled by" data-w2="">{"Paid in advance"}</td>
                          <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹34,220.00"}</td>
                          <td className="dt__td" data-label="By" data-w2="">{"Sneha Joseph"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="stack">
                              <a className="btn" href="#FD-P35-FK-10232">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#undo" />
                                </svg>
                                {"Reinstate"}
                              </a>
                              <a className="btn" href="/front-desk/fd-08-guest-folio/#FK-10232" data-leads-to="FD-08">{"Folio"}</a>
                            </div>
                            <div className="fd-toast fd-toast--in" role="status">
                              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              <div className="fd-toast__text">
                                {"Mr Jithin Mathew checked out – room 514"}
                                <small>{"Reservation FK-10232 is Checked-out · room Vacant Dirty (housekeeping told) · invoice INV/26-27/003852 issued"}</small>
                              </div>
                              <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#x" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="fd-after" id="co-FK-10250">
                          <td className="dt__td nw" data-label="Checked out at" data-w2="" data-t="">{"09:42"}</td>
                          <td className="dt__td nw" data-label="Room">
                            <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"204"}</span>
                          </td>
                          <td className="dt__td" data-label="Guest">
                            <strong>{"Ms Anjali Mohan"}</strong>
                            <span className="fd-sub">{"FK-10250 · "}</span>
                          </td>
                          <td className="dt__td" data-label="Invoice(s)" data-w2="">
                            <a className="fd-link" href="/front-desk/fd-o03-gst-tax-invoice/#i-FK-10250-g" data-leads-to="FD-O03">{"INV/26-27/003853"}</a>
                          </td>
                          <td className="dt__td" data-label="Settled by" data-w2="">{"Paid in advance"}</td>
                          <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹7,768.95"}</td>
                          <td className="dt__td" data-label="By" data-w2="">{"Sneha Joseph"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="stack">
                              <a className="btn" href="#FD-P35-FK-10250">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#undo" />
                                </svg>
                                {"Reinstate"}
                              </a>
                              <a className="btn" href="/front-desk/fd-08-guest-folio/#FK-10250" data-leads-to="FD-08">{"Folio"}</a>
                            </div>
                            <div className="fd-toast fd-toast--in" role="status">
                              <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              <div className="fd-toast__text">
                                {"Ms Anjali Mohan checked out – room 204"}
                                <small>{"Reservation FK-10250 is Checked-out · room Vacant Dirty (housekeeping told) · invoice INV/26-27/003853 issued"}</small>
                              </div>
                              <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#x" />
                                </svg>
                              </a>
                            </div>
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
                      <input className="pg-in" type="radio" name="pg1r10" id="pg1r10p1" defaultChecked={true} />
                      <label className="pg-n" htmlFor="pg1r10p1" aria-label="Page 1">{"1"}</label>
                      <span className="pg-info">
                        <span>{"No rows to show"}</span>
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
                      <input className="pg-in" type="radio" name="pg1r15" id="pg1r15p1" defaultChecked={true} />
                      <label className="pg-n" htmlFor="pg1r15p1" aria-label="Page 1">{"1"}</label>
                      <span className="pg-info">
                        <span>{"No rows to show"}</span>
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
                        <span>{"No rows to show"}</span>
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
                        <span>{"No rows to show"}</span>
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
                        <span>{"No rows to show"}</span>
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
              </div>
              <div className="s-note">
                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#info" />
                </svg>
                <span>{"Reinstate is possible on the same business day only (FDS-04) and needs the room to be free tonight. The invoice is cancelled and credit-noted, the folio is re-opened and the guest is back in In-house Guests."}</span>
              </div>
              <div className="modal modal--lg" id="FD-P35-FK-10108" data-code="FD-P35" role="dialog" aria-modal="true" aria-labelledby="FD-P35-FK-10108-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-07-in-house-guests/#reinstated-FK-10108" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P35-FK-10108-t">{"Reinstate check-out – Ms Anna Schneider"}</h2>
                      <p className="modal__desc">{"Same business day only. The stay goes back to Checked-in and the folio is re-opened."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-banner fd-banner--bad">
                      <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x-circle" />
                      </svg>
                      <div className="fd-banner__t">
                        <strong>{"Reinstating is not possible"}</strong>
                        {"The room is already given to tonight's arrival. Move that arrival first (Room Board FD-06), then reinstate."}
                      </div>
                    </div>
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room / checked out at"}</span>
                        <div className="fd-display">{"Ms Anna Schneider · room 205 · checked out today 09:42"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room still vacant"}</span>
                        <div className="fd-display">{"No – room 205 is promised to Mr Rahul George (FK-10239) tonight"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f114">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f114" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="EARLYCO – Checked out by mistake">{"EARLYCO – Checked out by mistake"}</option>
                            <option value="GSTRET – Guest returned">{"GSTRET – Guest returned"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-19"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Invoice"}</span>
                        <div className="fd-display">{"The issued invoice(s) INV/26-27/003800 will be cancelled and credit-noted; the e-invoice (IRN) is cancelled if issued today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" disabled={true} title="The room is not free tonight">{"Reinstate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P35-FK-10104" data-code="FD-P35" role="dialog" aria-modal="true" aria-labelledby="FD-P35-FK-10104-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-07-in-house-guests/#reinstated-FK-10104" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P35-FK-10104-t">{"Reinstate check-out – Mr Amit Chirag"}</h2>
                      <p className="modal__desc">{"Same business day only. The stay goes back to Checked-in and the folio is re-opened."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room / checked out at"}</span>
                        <div className="fd-display">{"Mr Amit Chirag · room 207 · checked out today 09:42"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room still vacant"}</span>
                        <div className="fd-display">{"Yes – the room is Vacant Dirty and free tonight"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f118">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f118" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="EARLYCO – Checked out by mistake">{"EARLYCO – Checked out by mistake"}</option>
                            <option value="GSTRET – Guest returned">{"GSTRET – Guest returned"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-19"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Invoice"}</span>
                        <div className="fd-display">{"The issued invoice(s) INV/26-27/003801 will be cancelled and credit-noted; the e-invoice (IRN) is cancelled if issued today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Reinstate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P35-FK-10193" data-code="FD-P35" role="dialog" aria-modal="true" aria-labelledby="FD-P35-FK-10193-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-07-in-house-guests/#reinstated-FK-10193" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P35-FK-10193-t">{"Reinstate check-out – Mrs Sindhu Wilson"}</h2>
                      <p className="modal__desc">{"Same business day only. The stay goes back to Checked-in and the folio is re-opened."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-banner fd-banner--bad">
                      <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x-circle" />
                      </svg>
                      <div className="fd-banner__t">
                        <strong>{"Reinstating is not possible"}</strong>
                        {"The room is already given to tonight's arrival. Move that arrival first (Room Board FD-06), then reinstate."}
                      </div>
                    </div>
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room / checked out at"}</span>
                        <div className="fd-display">{"Mrs Sindhu Wilson · room 216, 305 · checked out today 09:42"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room still vacant"}</span>
                        <div className="fd-display">{"No – room 305 is promised to Mr Srinivas Manav (FK-10091) tonight"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f122">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f122" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="EARLYCO – Checked out by mistake">{"EARLYCO – Checked out by mistake"}</option>
                            <option value="GSTRET – Guest returned">{"GSTRET – Guest returned"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-19"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Invoice"}</span>
                        <div className="fd-display">{"The issued invoice(s) INV/26-27/003802 will be cancelled and credit-noted; the e-invoice (IRN) is cancelled if issued today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" disabled={true} title="The room is not free tonight">{"Reinstate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P35-FK-10102" data-code="FD-P35" role="dialog" aria-modal="true" aria-labelledby="FD-P35-FK-10102-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-07-in-house-guests/#reinstated-FK-10102" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P35-FK-10102-t">{"Reinstate check-out – Ms Remya Kurian"}</h2>
                      <p className="modal__desc">{"Same business day only. The stay goes back to Checked-in and the folio is re-opened."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room / checked out at"}</span>
                        <div className="fd-display">{"Ms Remya Kurian · room 319 · checked out today 09:42"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room still vacant"}</span>
                        <div className="fd-display">{"Yes – the room is Vacant Dirty and free tonight"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f126">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f126" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="EARLYCO – Checked out by mistake">{"EARLYCO – Checked out by mistake"}</option>
                            <option value="GSTRET – Guest returned">{"GSTRET – Guest returned"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-19"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Invoice"}</span>
                        <div className="fd-display">{"The issued invoice(s) INV/26-27/003803 will be cancelled and credit-noted; the e-invoice (IRN) is cancelled if issued today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Reinstate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P35-FK-10187" data-code="FD-P35" role="dialog" aria-modal="true" aria-labelledby="FD-P35-FK-10187-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-07-in-house-guests/#reinstated-FK-10187" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P35-FK-10187-t">{"Reinstate check-out – Mrs Kavita Ranjan"}</h2>
                      <p className="modal__desc">{"Same business day only. The stay goes back to Checked-in and the folio is re-opened."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room / checked out at"}</span>
                        <div className="fd-display">{"Mrs Kavita Ranjan · room 406, 503, 404 · checked out today 09:42"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room still vacant"}</span>
                        <div className="fd-display">{"Yes – the room is Vacant Dirty and free tonight"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f130">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f130" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="EARLYCO – Checked out by mistake">{"EARLYCO – Checked out by mistake"}</option>
                            <option value="GSTRET – Guest returned">{"GSTRET – Guest returned"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-19"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Invoice"}</span>
                        <div className="fd-display">{"The issued invoice(s) INV/26-27/003804 will be cancelled and credit-noted; the e-invoice (IRN) is cancelled if issued today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Reinstate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P35-FK-10172" data-code="FD-P35" role="dialog" aria-modal="true" aria-labelledby="FD-P35-FK-10172-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-07-in-house-guests/#reinstated-FK-10172" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P35-FK-10172-t">{"Reinstate check-out – Ms Shruti Siddharth"}</h2>
                      <p className="modal__desc">{"Same business day only. The stay goes back to Checked-in and the folio is re-opened."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room / checked out at"}</span>
                        <div className="fd-display">{"Ms Shruti Siddharth · room 415, 316 · checked out today 09:42"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room still vacant"}</span>
                        <div className="fd-display">{"Yes – the room is Vacant Dirty and free tonight"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f134">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f134" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="EARLYCO – Checked out by mistake">{"EARLYCO – Checked out by mistake"}</option>
                            <option value="GSTRET – Guest returned">{"GSTRET – Guest returned"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-19"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Invoice"}</span>
                        <div className="fd-display">{"The issued invoice(s) INV/26-27/003805 will be cancelled and credit-noted; the e-invoice (IRN) is cancelled if issued today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Reinstate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P35-FK-10123" data-code="FD-P35" role="dialog" aria-modal="true" aria-labelledby="FD-P35-FK-10123-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-07-in-house-guests/#reinstated-FK-10123" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P35-FK-10123-t">{"Reinstate check-out – Mrs Isha Neil"}</h2>
                      <p className="modal__desc">{"Same business day only. The stay goes back to Checked-in and the folio is re-opened."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-banner fd-banner--bad">
                      <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x-circle" />
                      </svg>
                      <div className="fd-banner__t">
                        <strong>{"Reinstating is not possible"}</strong>
                        {"The room is already given to tonight's arrival. Move that arrival first (Room Board FD-06), then reinstate."}
                      </div>
                    </div>
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room / checked out at"}</span>
                        <div className="fd-display">{"Mrs Isha Neil · room 416, 505 · checked out today 09:42"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room still vacant"}</span>
                        <div className="fd-display">{"No – room 505 is promised to Mr Ravi Kabir (FK-10006) tonight"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f138">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f138" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="EARLYCO – Checked out by mistake">{"EARLYCO – Checked out by mistake"}</option>
                            <option value="GSTRET – Guest returned">{"GSTRET – Guest returned"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-19"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Invoice"}</span>
                        <div className="fd-display">{"The issued invoice(s) INV/26-27/003806 will be cancelled and credit-noted; the e-invoice (IRN) is cancelled if issued today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" disabled={true} title="The room is not free tonight">{"Reinstate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P35-FK-10142" data-code="FD-P35" role="dialog" aria-modal="true" aria-labelledby="FD-P35-FK-10142-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-07-in-house-guests/#reinstated-FK-10142" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P35-FK-10142-t">{"Reinstate check-out – Mrs Maya Mohan"}</h2>
                      <p className="modal__desc">{"Same business day only. The stay goes back to Checked-in and the folio is re-opened."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-banner fd-banner--bad">
                      <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x-circle" />
                      </svg>
                      <div className="fd-banner__t">
                        <strong>{"Reinstating is not possible"}</strong>
                        {"The room is already given to tonight's arrival. Move that arrival first (Room Board FD-06), then reinstate."}
                      </div>
                    </div>
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room / checked out at"}</span>
                        <div className="fd-display">{"Mrs Maya Mohan · room 517 · checked out today 09:42"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room still vacant"}</span>
                        <div className="fd-display">{"No – room 517 is promised to Mrs Athira Nirav (FK-10013) tonight"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f142">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f142" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="EARLYCO – Checked out by mistake">{"EARLYCO – Checked out by mistake"}</option>
                            <option value="GSTRET – Guest returned">{"GSTRET – Guest returned"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-19"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Invoice"}</span>
                        <div className="fd-display">{"The issued invoice(s) INV/26-27/003807 will be cancelled and credit-noted; the e-invoice (IRN) is cancelled if issued today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" disabled={true} title="The room is not free tonight">{"Reinstate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P35-FK-10002" data-code="FD-P35" role="dialog" aria-modal="true" aria-labelledby="FD-P35-FK-10002-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-07-in-house-guests/#reinstated-FK-10002" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P35-FK-10002-t">{"Reinstate check-out – Mrs Jyoti Jatin"}</h2>
                      <p className="modal__desc">{"Same business day only. The stay goes back to Checked-in and the folio is re-opened."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room / checked out at"}</span>
                        <div className="fd-display">{"Mrs Jyoti Jatin · room 107 · checked out today 09:42"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room still vacant"}</span>
                        <div className="fd-display">{"Yes – the room is Vacant Dirty and free tonight"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f146">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f146" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="EARLYCO – Checked out by mistake">{"EARLYCO – Checked out by mistake"}</option>
                            <option value="GSTRET – Guest returned">{"GSTRET – Guest returned"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-19"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Invoice"}</span>
                        <div className="fd-display">{"The issued invoice(s) INV/26-27/003808 will be cancelled and credit-noted; the e-invoice (IRN) is cancelled if issued today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Reinstate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P35-FK-10008" data-code="FD-P35" role="dialog" aria-modal="true" aria-labelledby="FD-P35-FK-10008-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-07-in-house-guests/#reinstated-FK-10008" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P35-FK-10008-t">{"Reinstate check-out – Mr Ajay Jatin"}</h2>
                      <p className="modal__desc">{"Same business day only. The stay goes back to Checked-in and the folio is re-opened."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room / checked out at"}</span>
                        <div className="fd-display">{"Mr Ajay Jatin · room 219, 112, 103 · checked out today 09:42"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room still vacant"}</span>
                        <div className="fd-display">{"Yes – the room is Vacant Dirty and free tonight"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f150">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f150" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="EARLYCO – Checked out by mistake">{"EARLYCO – Checked out by mistake"}</option>
                            <option value="GSTRET – Guest returned">{"GSTRET – Guest returned"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-19"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Invoice"}</span>
                        <div className="fd-display">{"The issued invoice(s) INV/26-27/003809 will be cancelled and credit-noted; the e-invoice (IRN) is cancelled if issued today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Reinstate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P35-FK-10010" data-code="FD-P35" role="dialog" aria-modal="true" aria-labelledby="FD-P35-FK-10010-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-07-in-house-guests/#reinstated-FK-10010" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P35-FK-10010-t">{"Reinstate check-out – Mrs Pooja Kunal"}</h2>
                      <p className="modal__desc">{"Same business day only. The stay goes back to Checked-in and the folio is re-opened."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room / checked out at"}</span>
                        <div className="fd-display">{"Mrs Pooja Kunal · room 507 · checked out today 09:42"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room still vacant"}</span>
                        <div className="fd-display">{"Yes – the room is Vacant Dirty and free tonight"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f154">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f154" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="EARLYCO – Checked out by mistake">{"EARLYCO – Checked out by mistake"}</option>
                            <option value="GSTRET – Guest returned">{"GSTRET – Guest returned"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-19"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Invoice"}</span>
                        <div className="fd-display">{"The issued invoice(s) INV/26-27/003810 will be cancelled and credit-noted; the e-invoice (IRN) is cancelled if issued today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Reinstate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P35-FK-10011" data-code="FD-P35" role="dialog" aria-modal="true" aria-labelledby="FD-P35-FK-10011-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-07-in-house-guests/#reinstated-FK-10011" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P35-FK-10011-t">{"Reinstate check-out – Mr Amit Bijoy"}</h2>
                      <p className="modal__desc">{"Same business day only. The stay goes back to Checked-in and the folio is re-opened."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room / checked out at"}</span>
                        <div className="fd-display">{"Mr Amit Bijoy · room 116 · checked out today 09:42"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room still vacant"}</span>
                        <div className="fd-display">{"Yes – the room is Vacant Dirty and free tonight"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f158">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f158" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="EARLYCO – Checked out by mistake">{"EARLYCO – Checked out by mistake"}</option>
                            <option value="GSTRET – Guest returned">{"GSTRET – Guest returned"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-19"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Invoice"}</span>
                        <div className="fd-display">{"The issued invoice(s) INV/26-27/003811 will be cancelled and credit-noted; the e-invoice (IRN) is cancelled if issued today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Reinstate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P35-FK-10027" data-code="FD-P35" role="dialog" aria-modal="true" aria-labelledby="FD-P35-FK-10027-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-07-in-house-guests/#reinstated-FK-10027" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P35-FK-10027-t">{"Reinstate check-out – Dr Claire Dubois"}</h2>
                      <p className="modal__desc">{"Same business day only. The stay goes back to Checked-in and the folio is re-opened."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room / checked out at"}</span>
                        <div className="fd-display">{"Dr Claire Dubois · room 504 · checked out today 09:42"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room still vacant"}</span>
                        <div className="fd-display">{"Yes – the room is Vacant Dirty and free tonight"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f162">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f162" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="EARLYCO – Checked out by mistake">{"EARLYCO – Checked out by mistake"}</option>
                            <option value="GSTRET – Guest returned">{"GSTRET – Guest returned"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-19"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Invoice"}</span>
                        <div className="fd-display">{"The issued invoice(s) INV/26-27/003812 will be cancelled and credit-noted; the e-invoice (IRN) is cancelled if issued today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Reinstate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P35-FK-10029" data-code="FD-P35" role="dialog" aria-modal="true" aria-labelledby="FD-P35-FK-10029-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-07-in-house-guests/#reinstated-FK-10029" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P35-FK-10029-t">{"Reinstate check-out – Mrs Rekha Krish"}</h2>
                      <p className="modal__desc">{"Same business day only. The stay goes back to Checked-in and the folio is re-opened."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room / checked out at"}</span>
                        <div className="fd-display">{"Mrs Rekha Krish · room 515 · checked out today 09:42"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room still vacant"}</span>
                        <div className="fd-display">{"Yes – the room is Vacant Dirty and free tonight"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f166">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f166" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="EARLYCO – Checked out by mistake">{"EARLYCO – Checked out by mistake"}</option>
                            <option value="GSTRET – Guest returned">{"GSTRET – Guest returned"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-19"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Invoice"}</span>
                        <div className="fd-display">{"The issued invoice(s) INV/26-27/003813, INV/26-27/003814 will be cancelled and credit-noted; the e-invoice (IRN) is cancelled if issued today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Reinstate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P35-FK-10031" data-code="FD-P35" role="dialog" aria-modal="true" aria-labelledby="FD-P35-FK-10031-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-07-in-house-guests/#reinstated-FK-10031" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P35-FK-10031-t">{"Reinstate check-out – Ms Charlotte Fraser"}</h2>
                      <p className="modal__desc">{"Same business day only. The stay goes back to Checked-in and the folio is re-opened."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room / checked out at"}</span>
                        <div className="fd-display">{"Ms Charlotte Fraser · room 303 · checked out today 09:42"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room still vacant"}</span>
                        <div className="fd-display">{"Yes – the room is Vacant Dirty and free tonight"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f170">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f170" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="EARLYCO – Checked out by mistake">{"EARLYCO – Checked out by mistake"}</option>
                            <option value="GSTRET – Guest returned">{"GSTRET – Guest returned"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-19"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Invoice"}</span>
                        <div className="fd-display">{"The issued invoice(s) INV/26-27/003815 will be cancelled and credit-noted; the e-invoice (IRN) is cancelled if issued today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Reinstate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P35-FK-10033" data-code="FD-P35" role="dialog" aria-modal="true" aria-labelledby="FD-P35-FK-10033-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-07-in-house-guests/#reinstated-FK-10033" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P35-FK-10033-t">{"Reinstate check-out – Ms Elsa Lindberg"}</h2>
                      <p className="modal__desc">{"Same business day only. The stay goes back to Checked-in and the folio is re-opened."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room / checked out at"}</span>
                        <div className="fd-display">{"Ms Elsa Lindberg · room 208 · checked out today 09:42"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room still vacant"}</span>
                        <div className="fd-display">{"Yes – the room is Vacant Dirty and free tonight"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f174">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f174" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="EARLYCO – Checked out by mistake">{"EARLYCO – Checked out by mistake"}</option>
                            <option value="GSTRET – Guest returned">{"GSTRET – Guest returned"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-19"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Invoice"}</span>
                        <div className="fd-display">{"The issued invoice(s) INV/26-27/003816 will be cancelled and credit-noted; the e-invoice (IRN) is cancelled if issued today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Reinstate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P35-FK-10035" data-code="FD-P35" role="dialog" aria-modal="true" aria-labelledby="FD-P35-FK-10035-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-07-in-house-guests/#reinstated-FK-10035" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P35-FK-10035-t">{"Reinstate check-out – Mrs Priya Kabir"}</h2>
                      <p className="modal__desc">{"Same business day only. The stay goes back to Checked-in and the folio is re-opened."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room / checked out at"}</span>
                        <div className="fd-display">{"Mrs Priya Kabir · room 110, 119, 109 · checked out today 09:42"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room still vacant"}</span>
                        <div className="fd-display">{"Yes – the room is Vacant Dirty and free tonight"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f178">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f178" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="EARLYCO – Checked out by mistake">{"EARLYCO – Checked out by mistake"}</option>
                            <option value="GSTRET – Guest returned">{"GSTRET – Guest returned"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-19"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Invoice"}</span>
                        <div className="fd-display">{"The issued invoice(s) INV/26-27/003817 will be cancelled and credit-noted; the e-invoice (IRN) is cancelled if issued today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Reinstate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P35-FK-10042" data-code="FD-P35" role="dialog" aria-modal="true" aria-labelledby="FD-P35-FK-10042-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-07-in-house-guests/#reinstated-FK-10042" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P35-FK-10042-t">{"Reinstate check-out – Ms Nandini Jatin"}</h2>
                      <p className="modal__desc">{"Same business day only. The stay goes back to Checked-in and the folio is re-opened."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room / checked out at"}</span>
                        <div className="fd-display">{"Ms Nandini Jatin · room 516 · checked out today 09:42"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room still vacant"}</span>
                        <div className="fd-display">{"Yes – the room is Vacant Dirty and free tonight"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f182">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f182" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="EARLYCO – Checked out by mistake">{"EARLYCO – Checked out by mistake"}</option>
                            <option value="GSTRET – Guest returned">{"GSTRET – Guest returned"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-19"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Invoice"}</span>
                        <div className="fd-display">{"The issued invoice(s) INV/26-27/003818, INV/26-27/003819 will be cancelled and credit-noted; the e-invoice (IRN) is cancelled if issued today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Reinstate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P35-FK-10048" data-code="FD-P35" role="dialog" aria-modal="true" aria-labelledby="FD-P35-FK-10048-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-07-in-house-guests/#reinstated-FK-10048" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P35-FK-10048-t">{"Reinstate check-out – Mrs Kavita Siddharth"}</h2>
                      <p className="modal__desc">{"Same business day only. The stay goes back to Checked-in and the folio is re-opened."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room / checked out at"}</span>
                        <div className="fd-display">{"Mrs Kavita Siddharth · room 402 · checked out today 09:42"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room still vacant"}</span>
                        <div className="fd-display">{"Yes – the room is Vacant Dirty and free tonight"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f186">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f186" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="EARLYCO – Checked out by mistake">{"EARLYCO – Checked out by mistake"}</option>
                            <option value="GSTRET – Guest returned">{"GSTRET – Guest returned"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-19"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Invoice"}</span>
                        <div className="fd-display">{"The issued invoice(s) INV/26-27/003820 will be cancelled and credit-noted; the e-invoice (IRN) is cancelled if issued today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Reinstate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P35-FK-10050" data-code="FD-P35" role="dialog" aria-modal="true" aria-labelledby="FD-P35-FK-10050-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-07-in-house-guests/#reinstated-FK-10050" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P35-FK-10050-t">{"Reinstate check-out – Mrs Fatima Al Mansoori"}</h2>
                      <p className="modal__desc">{"Same business day only. The stay goes back to Checked-in and the folio is re-opened."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room / checked out at"}</span>
                        <div className="fd-display">{"Mrs Fatima Al Mansoori · room 114 · checked out today 09:42"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room still vacant"}</span>
                        <div className="fd-display">{"Yes – the room is Vacant Dirty and free tonight"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f190">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f190" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="EARLYCO – Checked out by mistake">{"EARLYCO – Checked out by mistake"}</option>
                            <option value="GSTRET – Guest returned">{"GSTRET – Guest returned"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-19"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Invoice"}</span>
                        <div className="fd-display">{"The issued invoice(s) INV/26-27/003821 will be cancelled and credit-noted; the e-invoice (IRN) is cancelled if issued today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Reinstate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P35-FK-10056" data-code="FD-P35" role="dialog" aria-modal="true" aria-labelledby="FD-P35-FK-10056-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-07-in-house-guests/#reinstated-FK-10056" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P35-FK-10056-t">{"Reinstate check-out – Ms Noura Al Saud"}</h2>
                      <p className="modal__desc">{"Same business day only. The stay goes back to Checked-in and the folio is re-opened."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room / checked out at"}</span>
                        <div className="fd-display">{"Ms Noura Al Saud · room 105 · checked out today 09:42"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room still vacant"}</span>
                        <div className="fd-display">{"Yes – the room is Vacant Dirty and free tonight"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f194">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f194" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="EARLYCO – Checked out by mistake">{"EARLYCO – Checked out by mistake"}</option>
                            <option value="GSTRET – Guest returned">{"GSTRET – Guest returned"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-19"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Invoice"}</span>
                        <div className="fd-display">{"The issued invoice(s) INV/26-27/003822 will be cancelled and credit-noted; the e-invoice (IRN) is cancelled if issued today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Reinstate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P35-FK-10058" data-code="FD-P35" role="dialog" aria-modal="true" aria-labelledby="FD-P35-FK-10058-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-07-in-house-guests/#reinstated-FK-10058" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P35-FK-10058-t">{"Reinstate check-out – Mr Shibu Krish"}</h2>
                      <p className="modal__desc">{"Same business day only. The stay goes back to Checked-in and the folio is re-opened."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room / checked out at"}</span>
                        <div className="fd-display">{"Mr Shibu Krish · room 104 · checked out today 09:42"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room still vacant"}</span>
                        <div className="fd-display">{"Yes – the room is Vacant Dirty and free tonight"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f198">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f198" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="EARLYCO – Checked out by mistake">{"EARLYCO – Checked out by mistake"}</option>
                            <option value="GSTRET – Guest returned">{"GSTRET – Guest returned"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-19"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Invoice"}</span>
                        <div className="fd-display">{"The issued invoice(s) INV/26-27/003823 will be cancelled and credit-noted; the e-invoice (IRN) is cancelled if issued today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Reinstate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P35-FK-10061" data-code="FD-P35" role="dialog" aria-modal="true" aria-labelledby="FD-P35-FK-10061-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-07-in-house-guests/#reinstated-FK-10061" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P35-FK-10061-t">{"Reinstate check-out – Ms Nandini Rishi"}</h2>
                      <p className="modal__desc">{"Same business day only. The stay goes back to Checked-in and the folio is re-opened."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room / checked out at"}</span>
                        <div className="fd-display">{"Ms Nandini Rishi · room 309 · checked out today 09:42"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room still vacant"}</span>
                        <div className="fd-display">{"Yes – the room is Vacant Dirty and free tonight"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f202">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f202" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="EARLYCO – Checked out by mistake">{"EARLYCO – Checked out by mistake"}</option>
                            <option value="GSTRET – Guest returned">{"GSTRET – Guest returned"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-19"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Invoice"}</span>
                        <div className="fd-display">{"The issued invoice(s) INV/26-27/003824 will be cancelled and credit-noted; the e-invoice (IRN) is cancelled if issued today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Reinstate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P35-FK-10069" data-code="FD-P35" role="dialog" aria-modal="true" aria-labelledby="FD-P35-FK-10069-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-07-in-house-guests/#reinstated-FK-10069" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P35-FK-10069-t">{"Reinstate check-out – Mr Biju George"}</h2>
                      <p className="modal__desc">{"Same business day only. The stay goes back to Checked-in and the folio is re-opened."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room / checked out at"}</span>
                        <div className="fd-display">{"Mr Biju George · room 301 · checked out today 09:42"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room still vacant"}</span>
                        <div className="fd-display">{"Yes – the room is Vacant Dirty and free tonight"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f206">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f206" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="EARLYCO – Checked out by mistake">{"EARLYCO – Checked out by mistake"}</option>
                            <option value="GSTRET – Guest returned">{"GSTRET – Guest returned"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-19"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Invoice"}</span>
                        <div className="fd-display">{"The issued invoice(s) INV/26-27/003825, INV/26-27/003826 will be cancelled and credit-noted; the e-invoice (IRN) is cancelled if issued today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Reinstate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P35-FK-10074" data-code="FD-P35" role="dialog" aria-modal="true" aria-labelledby="FD-P35-FK-10074-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-07-in-house-guests/#reinstated-FK-10074" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P35-FK-10074-t">{"Reinstate check-out – Mrs Shruti Shaan"}</h2>
                      <p className="modal__desc">{"Same business day only. The stay goes back to Checked-in and the folio is re-opened."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room / checked out at"}</span>
                        <div className="fd-display">{"Mrs Shruti Shaan · room 108 · checked out today 09:42"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room still vacant"}</span>
                        <div className="fd-display">{"Yes – the room is Vacant Dirty and free tonight"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f210">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f210" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="EARLYCO – Checked out by mistake">{"EARLYCO – Checked out by mistake"}</option>
                            <option value="GSTRET – Guest returned">{"GSTRET – Guest returned"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-19"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Invoice"}</span>
                        <div className="fd-display">{"No invoice issued"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Reinstate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P35-FK-10082" data-code="FD-P35" role="dialog" aria-modal="true" aria-labelledby="FD-P35-FK-10082-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-07-in-house-guests/#reinstated-FK-10082" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P35-FK-10082-t">{"Reinstate check-out – Mr Rohit Neil"}</h2>
                      <p className="modal__desc">{"Same business day only. The stay goes back to Checked-in and the folio is re-opened."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room / checked out at"}</span>
                        <div className="fd-display">{"Mr Rohit Neil · room 101 · checked out today 09:42"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room still vacant"}</span>
                        <div className="fd-display">{"Yes – the room is Vacant Dirty and free tonight"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f214">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f214" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="EARLYCO – Checked out by mistake">{"EARLYCO – Checked out by mistake"}</option>
                            <option value="GSTRET – Guest returned">{"GSTRET – Guest returned"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-19"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Invoice"}</span>
                        <div className="fd-display">{"The issued invoice(s) INV/26-27/003827 will be cancelled and credit-noted; the e-invoice (IRN) is cancelled if issued today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Reinstate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P35-FK-10084" data-code="FD-P35" role="dialog" aria-modal="true" aria-labelledby="FD-P35-FK-10084-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-07-in-house-guests/#reinstated-FK-10084" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P35-FK-10084-t">{"Reinstate check-out – Dr Aswathy Vijay"}</h2>
                      <p className="modal__desc">{"Same business day only. The stay goes back to Checked-in and the folio is re-opened."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room / checked out at"}</span>
                        <div className="fd-display">{"Dr Aswathy Vijay · room 202 · checked out today 09:42"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room still vacant"}</span>
                        <div className="fd-display">{"Yes – the room is Vacant Dirty and free tonight"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f218">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f218" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="EARLYCO – Checked out by mistake">{"EARLYCO – Checked out by mistake"}</option>
                            <option value="GSTRET – Guest returned">{"GSTRET – Guest returned"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-19"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Invoice"}</span>
                        <div className="fd-display">{"The issued invoice(s) INV/26-27/003828 will be cancelled and credit-noted; the e-invoice (IRN) is cancelled if issued today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Reinstate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P35-FK-10097" data-code="FD-P35" role="dialog" aria-modal="true" aria-labelledby="FD-P35-FK-10097-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-07-in-house-guests/#reinstated-FK-10097" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P35-FK-10097-t">{"Reinstate check-out – Ms Sindhu Rahman"}</h2>
                      <p className="modal__desc">{"Same business day only. The stay goes back to Checked-in and the folio is re-opened."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room / checked out at"}</span>
                        <div className="fd-display">{"Ms Sindhu Rahman · room 508, 217 · checked out today 09:42"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room still vacant"}</span>
                        <div className="fd-display">{"Yes – the room is Vacant Dirty and free tonight"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f222">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f222" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="EARLYCO – Checked out by mistake">{"EARLYCO – Checked out by mistake"}</option>
                            <option value="GSTRET – Guest returned">{"GSTRET – Guest returned"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-19"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Invoice"}</span>
                        <div className="fd-display">{"The issued invoice(s) INV/26-27/003829 will be cancelled and credit-noted; the e-invoice (IRN) is cancelled if issued today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Reinstate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P35-FK-10101" data-code="FD-P35" role="dialog" aria-modal="true" aria-labelledby="FD-P35-FK-10101-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-07-in-house-guests/#reinstated-FK-10101" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P35-FK-10101-t">{"Reinstate check-out – Ms Kavita Siddharth"}</h2>
                      <p className="modal__desc">{"Same business day only. The stay goes back to Checked-in and the folio is re-opened."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room / checked out at"}</span>
                        <div className="fd-display">{"Ms Kavita Siddharth · room 201 · checked out today 09:42"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room still vacant"}</span>
                        <div className="fd-display">{"Yes – the room is Vacant Dirty and free tonight"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f226">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f226" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="EARLYCO – Checked out by mistake">{"EARLYCO – Checked out by mistake"}</option>
                            <option value="GSTRET – Guest returned">{"GSTRET – Guest returned"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-19"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Invoice"}</span>
                        <div className="fd-display">{"The issued invoice(s) INV/26-27/003830 will be cancelled and credit-noted; the e-invoice (IRN) is cancelled if issued today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Reinstate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P35-FK-10103" data-code="FD-P35" role="dialog" aria-modal="true" aria-labelledby="FD-P35-FK-10103-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-07-in-house-guests/#reinstated-FK-10103" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P35-FK-10103-t">{"Reinstate check-out – Mr Prasad Pavan"}</h2>
                      <p className="modal__desc">{"Same business day only. The stay goes back to Checked-in and the folio is re-opened."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room / checked out at"}</span>
                        <div className="fd-display">{"Mr Prasad Pavan · room 310 · checked out today 09:42"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room still vacant"}</span>
                        <div className="fd-display">{"Yes – the room is Vacant Dirty and free tonight"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f230">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f230" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="EARLYCO – Checked out by mistake">{"EARLYCO – Checked out by mistake"}</option>
                            <option value="GSTRET – Guest returned">{"GSTRET – Guest returned"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-19"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Invoice"}</span>
                        <div className="fd-display">{"The issued invoice(s) INV/26-27/003831 will be cancelled and credit-noted; the e-invoice (IRN) is cancelled if issued today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Reinstate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P35-FK-10105" data-code="FD-P35" role="dialog" aria-modal="true" aria-labelledby="FD-P35-FK-10105-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-07-in-house-guests/#reinstated-FK-10105" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P35-FK-10105-t">{"Reinstate check-out – Ms Jyoti Kabir"}</h2>
                      <p className="modal__desc">{"Same business day only. The stay goes back to Checked-in and the folio is re-opened."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room / checked out at"}</span>
                        <div className="fd-display">{"Ms Jyoti Kabir · room 306 · checked out today 09:42"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room still vacant"}</span>
                        <div className="fd-display">{"Yes – the room is Vacant Dirty and free tonight"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f234">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f234" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="EARLYCO – Checked out by mistake">{"EARLYCO – Checked out by mistake"}</option>
                            <option value="GSTRET – Guest returned">{"GSTRET – Guest returned"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-19"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Invoice"}</span>
                        <div className="fd-display">{"The issued invoice(s) INV/26-27/003832 will be cancelled and credit-noted; the e-invoice (IRN) is cancelled if issued today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Reinstate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P35-FK-10106" data-code="FD-P35" role="dialog" aria-modal="true" aria-labelledby="FD-P35-FK-10106-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-07-in-house-guests/#reinstated-FK-10106" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P35-FK-10106-t">{"Reinstate check-out – Ms Nandini Jatin"}</h2>
                      <p className="modal__desc">{"Same business day only. The stay goes back to Checked-in and the folio is re-opened."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room / checked out at"}</span>
                        <div className="fd-display">{"Ms Nandini Jatin · room 313 · checked out today 09:42"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room still vacant"}</span>
                        <div className="fd-display">{"Yes – the room is Vacant Dirty and free tonight"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f238">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f238" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="EARLYCO – Checked out by mistake">{"EARLYCO – Checked out by mistake"}</option>
                            <option value="GSTRET – Guest returned">{"GSTRET – Guest returned"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-19"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Invoice"}</span>
                        <div className="fd-display">{"The issued invoice(s) INV/26-27/003833 will be cancelled and credit-noted; the e-invoice (IRN) is cancelled if issued today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Reinstate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P35-FK-10109" data-code="FD-P35" role="dialog" aria-modal="true" aria-labelledby="FD-P35-FK-10109-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-07-in-house-guests/#reinstated-FK-10109" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P35-FK-10109-t">{"Reinstate check-out – Mr Naveen Chirag"}</h2>
                      <p className="modal__desc">{"Same business day only. The stay goes back to Checked-in and the folio is re-opened."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room / checked out at"}</span>
                        <div className="fd-display">{"Mr Naveen Chirag · room 511, 410 · checked out today 09:42"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room still vacant"}</span>
                        <div className="fd-display">{"Yes – the room is Vacant Dirty and free tonight"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f242">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f242" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="EARLYCO – Checked out by mistake">{"EARLYCO – Checked out by mistake"}</option>
                            <option value="GSTRET – Guest returned">{"GSTRET – Guest returned"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-19"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Invoice"}</span>
                        <div className="fd-display">{"The issued invoice(s) INV/26-27/003834 will be cancelled and credit-noted; the e-invoice (IRN) is cancelled if issued today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Reinstate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P35-FK-10118" data-code="FD-P35" role="dialog" aria-modal="true" aria-labelledby="FD-P35-FK-10118-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-07-in-house-guests/#reinstated-FK-10118" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P35-FK-10118-t">{"Reinstate check-out – Ms Isha Dhruv"}</h2>
                      <p className="modal__desc">{"Same business day only. The stay goes back to Checked-in and the folio is re-opened."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room / checked out at"}</span>
                        <div className="fd-display">{"Ms Isha Dhruv · room 115 · checked out today 09:42"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room still vacant"}</span>
                        <div className="fd-display">{"Yes – the room is Vacant Dirty and free tonight"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f246">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f246" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="EARLYCO – Checked out by mistake">{"EARLYCO – Checked out by mistake"}</option>
                            <option value="GSTRET – Guest returned">{"GSTRET – Guest returned"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-19"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Invoice"}</span>
                        <div className="fd-display">{"The issued invoice(s) INV/26-27/003835 will be cancelled and credit-noted; the e-invoice (IRN) is cancelled if issued today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Reinstate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P35-FK-10120" data-code="FD-P35" role="dialog" aria-modal="true" aria-labelledby="FD-P35-FK-10120-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-07-in-house-guests/#reinstated-FK-10120" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P35-FK-10120-t">{"Reinstate check-out – Ms Ayesha Sahil"}</h2>
                      <p className="modal__desc">{"Same business day only. The stay goes back to Checked-in and the folio is re-opened."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room / checked out at"}</span>
                        <div className="fd-display">{"Ms Ayesha Sahil · room 407 · checked out today 09:42"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room still vacant"}</span>
                        <div className="fd-display">{"Yes – the room is Vacant Dirty and free tonight"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f250">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f250" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="EARLYCO – Checked out by mistake">{"EARLYCO – Checked out by mistake"}</option>
                            <option value="GSTRET – Guest returned">{"GSTRET – Guest returned"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-19"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Invoice"}</span>
                        <div className="fd-display">{"The issued invoice(s) INV/26-27/003836 will be cancelled and credit-noted; the e-invoice (IRN) is cancelled if issued today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Reinstate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P35-FK-10140" data-code="FD-P35" role="dialog" aria-modal="true" aria-labelledby="FD-P35-FK-10140-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-07-in-house-guests/#reinstated-FK-10140" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P35-FK-10140-t">{"Reinstate check-out – Mr Omar Al Farsi"}</h2>
                      <p className="modal__desc">{"Same business day only. The stay goes back to Checked-in and the folio is re-opened."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room / checked out at"}</span>
                        <div className="fd-display">{"Mr Omar Al Farsi · room 213 · checked out today 09:42"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room still vacant"}</span>
                        <div className="fd-display">{"Yes – the room is Vacant Dirty and free tonight"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f254">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f254" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="EARLYCO – Checked out by mistake">{"EARLYCO – Checked out by mistake"}</option>
                            <option value="GSTRET – Guest returned">{"GSTRET – Guest returned"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-19"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Invoice"}</span>
                        <div className="fd-display">{"The issued invoice(s) INV/26-27/003837 will be cancelled and credit-noted; the e-invoice (IRN) is cancelled if issued today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Reinstate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P35-FK-10143" data-code="FD-P35" role="dialog" aria-modal="true" aria-labelledby="FD-P35-FK-10143-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-07-in-house-guests/#reinstated-FK-10143" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P35-FK-10143-t">{"Reinstate check-out – Mr Oliver Hughes"}</h2>
                      <p className="modal__desc">{"Same business day only. The stay goes back to Checked-in and the folio is re-opened."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room / checked out at"}</span>
                        <div className="fd-display">{"Mr Oliver Hughes · room 304 · checked out today 09:42"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room still vacant"}</span>
                        <div className="fd-display">{"Yes – the room is Vacant Dirty and free tonight"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f258">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f258" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="EARLYCO – Checked out by mistake">{"EARLYCO – Checked out by mistake"}</option>
                            <option value="GSTRET – Guest returned">{"GSTRET – Guest returned"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-19"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Invoice"}</span>
                        <div className="fd-display">{"The issued invoice(s) INV/26-27/003838 will be cancelled and credit-noted; the e-invoice (IRN) is cancelled if issued today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Reinstate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P35-FK-10145" data-code="FD-P35" role="dialog" aria-modal="true" aria-labelledby="FD-P35-FK-10145-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-07-in-house-guests/#reinstated-FK-10145" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P35-FK-10145-t">{"Reinstate check-out – Ms Sheela Nathan"}</h2>
                      <p className="modal__desc">{"Same business day only. The stay goes back to Checked-in and the folio is re-opened."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room / checked out at"}</span>
                        <div className="fd-display">{"Ms Sheela Nathan · room 510 · checked out today 09:42"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room still vacant"}</span>
                        <div className="fd-display">{"Yes – the room is Vacant Dirty and free tonight"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f262">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f262" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="EARLYCO – Checked out by mistake">{"EARLYCO – Checked out by mistake"}</option>
                            <option value="GSTRET – Guest returned">{"GSTRET – Guest returned"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-19"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Invoice"}</span>
                        <div className="fd-display">{"The issued invoice(s) INV/26-27/003839 will be cancelled and credit-noted; the e-invoice (IRN) is cancelled if issued today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Reinstate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P35-FK-10159" data-code="FD-P35" role="dialog" aria-modal="true" aria-labelledby="FD-P35-FK-10159-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-07-in-house-guests/#reinstated-FK-10159" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P35-FK-10159-t">{"Reinstate check-out – Dr Ayesha Chirag"}</h2>
                      <p className="modal__desc">{"Same business day only. The stay goes back to Checked-in and the folio is re-opened."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room / checked out at"}</span>
                        <div className="fd-display">{"Dr Ayesha Chirag · room 506, 318 · checked out today 09:42"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room still vacant"}</span>
                        <div className="fd-display">{"Yes – the room is Vacant Dirty and free tonight"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f266">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f266" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="EARLYCO – Checked out by mistake">{"EARLYCO – Checked out by mistake"}</option>
                            <option value="GSTRET – Guest returned">{"GSTRET – Guest returned"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-19"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Invoice"}</span>
                        <div className="fd-display">{"The issued invoice(s) INV/26-27/003840 will be cancelled and credit-noted; the e-invoice (IRN) is cancelled if issued today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Reinstate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P35-FK-10161" data-code="FD-P35" role="dialog" aria-modal="true" aria-labelledby="FD-P35-FK-10161-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-07-in-house-guests/#reinstated-FK-10161" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P35-FK-10161-t">{"Reinstate check-out – Ms Lakshmi Mathew"}</h2>
                      <p className="modal__desc">{"Same business day only. The stay goes back to Checked-in and the folio is re-opened."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room / checked out at"}</span>
                        <div className="fd-display">{"Ms Lakshmi Mathew · room 408 · checked out today 09:42"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room still vacant"}</span>
                        <div className="fd-display">{"Yes – the room is Vacant Dirty and free tonight"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f270">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f270" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="EARLYCO – Checked out by mistake">{"EARLYCO – Checked out by mistake"}</option>
                            <option value="GSTRET – Guest returned">{"GSTRET – Guest returned"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-19"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Invoice"}</span>
                        <div className="fd-display">{"The issued invoice(s) INV/26-27/003841, INV/26-27/003842 will be cancelled and credit-noted; the e-invoice (IRN) is cancelled if issued today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Reinstate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P35-FK-10162" data-code="FD-P35" role="dialog" aria-modal="true" aria-labelledby="FD-P35-FK-10162-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-07-in-house-guests/#reinstated-FK-10162" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P35-FK-10162-t">{"Reinstate check-out – Mr Ethan Anderson"}</h2>
                      <p className="modal__desc">{"Same business day only. The stay goes back to Checked-in and the folio is re-opened."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room / checked out at"}</span>
                        <div className="fd-display">{"Mr Ethan Anderson · room 212 · checked out today 09:42"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room still vacant"}</span>
                        <div className="fd-display">{"Yes – the room is Vacant Dirty and free tonight"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f274">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f274" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="EARLYCO – Checked out by mistake">{"EARLYCO – Checked out by mistake"}</option>
                            <option value="GSTRET – Guest returned">{"GSTRET – Guest returned"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-19"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Invoice"}</span>
                        <div className="fd-display">{"The issued invoice(s) INV/26-27/003843 will be cancelled and credit-noted; the e-invoice (IRN) is cancelled if issued today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Reinstate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P35-FK-10165" data-code="FD-P35" role="dialog" aria-modal="true" aria-labelledby="FD-P35-FK-10165-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-07-in-house-guests/#reinstated-FK-10165" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P35-FK-10165-t">{"Reinstate check-out – Mrs Isha Vihaan"}</h2>
                      <p className="modal__desc">{"Same business day only. The stay goes back to Checked-in and the folio is re-opened."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room / checked out at"}</span>
                        <div className="fd-display">{"Mrs Isha Vihaan · room 113 · checked out today 09:42"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room still vacant"}</span>
                        <div className="fd-display">{"Yes – the room is Vacant Dirty and free tonight"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f278">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f278" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="EARLYCO – Checked out by mistake">{"EARLYCO – Checked out by mistake"}</option>
                            <option value="GSTRET – Guest returned">{"GSTRET – Guest returned"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-19"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Invoice"}</span>
                        <div className="fd-display">{"The issued invoice(s) INV/26-27/003844, INV/26-27/003845 will be cancelled and credit-noted; the e-invoice (IRN) is cancelled if issued today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Reinstate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P35-FK-10170" data-code="FD-P35" role="dialog" aria-modal="true" aria-labelledby="FD-P35-FK-10170-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-07-in-house-guests/#reinstated-FK-10170" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P35-FK-10170-t">{"Reinstate check-out – Mr Marco Rossi"}</h2>
                      <p className="modal__desc">{"Same business day only. The stay goes back to Checked-in and the folio is re-opened."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room / checked out at"}</span>
                        <div className="fd-display">{"Mr Marco Rossi · room 211 · checked out today 09:42"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room still vacant"}</span>
                        <div className="fd-display">{"Yes – the room is Vacant Dirty and free tonight"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f282">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f282" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="EARLYCO – Checked out by mistake">{"EARLYCO – Checked out by mistake"}</option>
                            <option value="GSTRET – Guest returned">{"GSTRET – Guest returned"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-19"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Invoice"}</span>
                        <div className="fd-display">{"The issued invoice(s) INV/26-27/003846 will be cancelled and credit-noted; the e-invoice (IRN) is cancelled if issued today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Reinstate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P35-FK-10178" data-code="FD-P35" role="dialog" aria-modal="true" aria-labelledby="FD-P35-FK-10178-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-07-in-house-guests/#reinstated-FK-10178" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P35-FK-10178-t">{"Reinstate check-out – Mr Prasad Manav"}</h2>
                      <p className="modal__desc">{"Same business day only. The stay goes back to Checked-in and the folio is re-opened."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room / checked out at"}</span>
                        <div className="fd-display">{"Mr Prasad Manav · room 501 · checked out today 09:42"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room still vacant"}</span>
                        <div className="fd-display">{"Yes – the room is Vacant Dirty and free tonight"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f286">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f286" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="EARLYCO – Checked out by mistake">{"EARLYCO – Checked out by mistake"}</option>
                            <option value="GSTRET – Guest returned">{"GSTRET – Guest returned"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-19"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Invoice"}</span>
                        <div className="fd-display">{"The issued invoice(s) INV/26-27/003847 will be cancelled and credit-noted; the e-invoice (IRN) is cancelled if issued today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Reinstate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P35-FK-10180" data-code="FD-P35" role="dialog" aria-modal="true" aria-labelledby="FD-P35-FK-10180-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-07-in-house-guests/#reinstated-FK-10180" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P35-FK-10180-t">{"Reinstate check-out – Mr Luc Moreau"}</h2>
                      <p className="modal__desc">{"Same business day only. The stay goes back to Checked-in and the folio is re-opened."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room / checked out at"}</span>
                        <div className="fd-display">{"Mr Luc Moreau · room 403, 509 · checked out today 09:42"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room still vacant"}</span>
                        <div className="fd-display">{"Yes – the room is Vacant Dirty and free tonight"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f290">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f290" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="EARLYCO – Checked out by mistake">{"EARLYCO – Checked out by mistake"}</option>
                            <option value="GSTRET – Guest returned">{"GSTRET – Guest returned"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-19"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Invoice"}</span>
                        <div className="fd-display">{"The issued invoice(s) INV/26-27/003848 will be cancelled and credit-noted; the e-invoice (IRN) is cancelled if issued today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Reinstate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P35-FK-10197" data-code="FD-P35" role="dialog" aria-modal="true" aria-labelledby="FD-P35-FK-10197-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-07-in-house-guests/#reinstated-FK-10197" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P35-FK-10197-t">{"Reinstate check-out – Mr Rahul Philip"}</h2>
                      <p className="modal__desc">{"Same business day only. The stay goes back to Checked-in and the folio is re-opened."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room / checked out at"}</span>
                        <div className="fd-display">{"Mr Rahul Philip · room 401 · checked out today 09:42"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room still vacant"}</span>
                        <div className="fd-display">{"Yes – the room is Vacant Dirty and free tonight"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f294">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f294" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="EARLYCO – Checked out by mistake">{"EARLYCO – Checked out by mistake"}</option>
                            <option value="GSTRET – Guest returned">{"GSTRET – Guest returned"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-19"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Invoice"}</span>
                        <div className="fd-display">{"No invoice issued"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Reinstate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P35-FK-10200" data-code="FD-P35" role="dialog" aria-modal="true" aria-labelledby="FD-P35-FK-10200-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-07-in-house-guests/#reinstated-FK-10200" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P35-FK-10200-t">{"Reinstate check-out – Mr Oliver Hughes"}</h2>
                      <p className="modal__desc">{"Same business day only. The stay goes back to Checked-in and the folio is re-opened."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room / checked out at"}</span>
                        <div className="fd-display">{"Mr Oliver Hughes · room 409 · checked out today 09:42"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room still vacant"}</span>
                        <div className="fd-display">{"Yes – the room is Vacant Dirty and free tonight"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f298">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f298" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="EARLYCO – Checked out by mistake">{"EARLYCO – Checked out by mistake"}</option>
                            <option value="GSTRET – Guest returned">{"GSTRET – Guest returned"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-19"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Invoice"}</span>
                        <div className="fd-display">{"The issued invoice(s) INV/26-27/003849 will be cancelled and credit-noted; the e-invoice (IRN) is cancelled if issued today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Reinstate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P35-FK-10203" data-code="FD-P35" role="dialog" aria-modal="true" aria-labelledby="FD-P35-FK-10203-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-07-in-house-guests/#reinstated-FK-10203" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P35-FK-10203-t">{"Reinstate check-out – Mrs Kavita Siddharth"}</h2>
                      <p className="modal__desc">{"Same business day only. The stay goes back to Checked-in and the folio is re-opened."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room / checked out at"}</span>
                        <div className="fd-display">{"Mrs Kavita Siddharth · room 417 · checked out today 09:42"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room still vacant"}</span>
                        <div className="fd-display">{"Yes – the room is Vacant Dirty and free tonight"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f302">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f302" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="EARLYCO – Checked out by mistake">{"EARLYCO – Checked out by mistake"}</option>
                            <option value="GSTRET – Guest returned">{"GSTRET – Guest returned"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-19"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Invoice"}</span>
                        <div className="fd-display">{"The issued invoice(s) INV/26-27/003850 will be cancelled and credit-noted; the e-invoice (IRN) is cancelled if issued today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Reinstate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P35-FK-10205" data-code="FD-P35" role="dialog" aria-modal="true" aria-labelledby="FD-P35-FK-10205-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-07-in-house-guests/#reinstated-FK-10205" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P35-FK-10205-t">{"Reinstate check-out – Dr Anjali Rahman"}</h2>
                      <p className="modal__desc">{"Same business day only. The stay goes back to Checked-in and the folio is re-opened."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room / checked out at"}</span>
                        <div className="fd-display">{"Dr Anjali Rahman · room 218 · checked out today 09:42"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room still vacant"}</span>
                        <div className="fd-display">{"Yes – the room is Vacant Dirty and free tonight"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f306">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f306" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="EARLYCO – Checked out by mistake">{"EARLYCO – Checked out by mistake"}</option>
                            <option value="GSTRET – Guest returned">{"GSTRET – Guest returned"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-19"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Invoice"}</span>
                        <div className="fd-display">{"The issued invoice(s) INV/26-27/003851 will be cancelled and credit-noted; the e-invoice (IRN) is cancelled if issued today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Reinstate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P35-FK-10232" data-code="FD-P35" role="dialog" aria-modal="true" aria-labelledby="FD-P35-FK-10232-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-07-in-house-guests/#reinstated-FK-10232" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P35-FK-10232-t">{"Reinstate check-out – Mr Jithin Mathew"}</h2>
                      <p className="modal__desc">{"Same business day only. The stay goes back to Checked-in and the folio is re-opened."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room / checked out at"}</span>
                        <div className="fd-display">{"Mr Jithin Mathew · room 514 · checked out today 09:42"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room still vacant"}</span>
                        <div className="fd-display">{"Yes – the room is Vacant Dirty and free tonight"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f310">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f310" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="EARLYCO – Checked out by mistake">{"EARLYCO – Checked out by mistake"}</option>
                            <option value="GSTRET – Guest returned">{"GSTRET – Guest returned"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-19"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Invoice"}</span>
                        <div className="fd-display">{"The issued invoice(s) INV/26-27/003852 will be cancelled and credit-noted; the e-invoice (IRN) is cancelled if issued today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Reinstate"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P35-FK-10250" data-code="FD-P35" role="dialog" aria-modal="true" aria-labelledby="FD-P35-FK-10250-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-07-in-house-guests/#reinstated-FK-10250" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P35-FK-10250-t">{"Reinstate check-out – Ms Anjali Mohan"}</h2>
                      <p className="modal__desc">{"Same business day only. The stay goes back to Checked-in and the folio is re-opened."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room / checked out at"}</span>
                        <div className="fd-display">{"Ms Anjali Mohan · room 204 · checked out today 09:42"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room still vacant"}</span>
                        <div className="fd-display">{"Yes – the room is Vacant Dirty and free tonight"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f314">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f314" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="EARLYCO – Checked out by mistake">{"EARLYCO – Checked out by mistake"}</option>
                            <option value="GSTRET – Guest returned">{"GSTRET – Guest returned"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-19"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Invoice"}</span>
                        <div className="fd-display">{"The issued invoice(s) INV/26-27/003853 will be cancelled and credit-noted; the e-invoice (IRN) is cancelled if issued today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Reinstate"}</button>
                  </div>
                </form>
              </div>
              <details className="helpbox">
                <summary>
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#help" />
                  </svg>
                  {" Help for this screen "}
                  <span className="code-chip">{"FD-14-2"}</span>
                </summary>
                <dl className="helpbox__body">
                  <dt>{"What it is for"}</dt>
                  <dd>{"Due-outs, balances, pending postings, late check-out, express and bulk check-out, checked-out today"}</dd>
                  <dt>{"Opened from"}</dt>
                  <dd>
                    <Link to={"/front-desk/fd-01-front-desk-home"}>{"FD-01"}</Link>
                    {", sidebar"}
                  </dd>
                  <dt>{"Leads to"}</dt>
                  <dd>
                    <Link to={"/front-desk/fd-15-check-out-settlement"}>{"FD-15"}</Link>
                    {", "}
                    <Link to={"/front-desk/fd-10-extend-shorten-stay"}>{"FD-10"}</Link>
                    {", "}
                    <a href="/front-desk/fd-14-departures/#FD-P18">{"FD-P18"}</a>
                    {", "}
                    <a href="/front-desk/fd-14-departures/#FD-P30">{"FD-P30"}</a>
                    {", "}
                    <a href="/front-desk/fd-14-departures/#FD-P35">{"FD-P35"}</a>
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
