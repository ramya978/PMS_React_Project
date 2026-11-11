// GENERATED from public/front-desk/fd-04-walk-in-check-in/index.html by scripts/convert_legacy.py.
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
    "href": "/front-desk/fd-04-walk-in-check-in/fd-04-walk-in-check-in.css",
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

export default function FrontDeskFd04WalkInCheckIn() {
  return (
    <ScreenShell title="Walk-in Check-in" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="FD-04" data-code="FD-04" data-static="1" className="legacy-body">
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
                  <Link className="nav__item is-active" data-nav="FD-02" title="Arrivals" to={"/front-desk/fd-02-arrivals"}>
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
            <main className="app__content" id="main" data-code="FD-04" tabIndex="-1">
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
                        <Link to={"/front-desk/fd-02-arrivals"}>{"Arrivals"}</Link>
                      </li>
                      <li>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-right" />
                        </svg>
                        <span aria-current="page">{"Walk-in Check-in"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">{"Walk-in Check-in"}</h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"FD-04"}</span>
                  <div className="page-header__actions" />
                </div>
              </header>
              <div className="variants">
                <span className="va" id="default" />
                <span className="va" id="r-102" />
                <span className="va" id="r-106" />
                <span className="va" id="r-117" />
                <span className="va" id="r-203" />
                <span className="va" id="r-204" />
                <span className="va" id="r-206" />
                <span className="va" id="r-210" />
                <span className="va" id="r-215" />
                <span className="va" id="r-302" />
                <span className="va" id="r-307" />
                <span className="va" id="r-311" />
                <span className="va" id="r-312" />
                <span className="va" id="r-314" />
                <span className="va" id="r-315" />
                <span className="va" id="r-317" />
                <span className="va" id="r-405" />
                <span className="va" id="r-411" />
                <span className="va" id="r-412" />
                <span className="va" id="r-413" />
                <span className="va" id="r-414" />
                <div className="variant v-default is-default">
                  <nav className="ltabs ltabs--steps" aria-label="Walk-in steps">
                    <div className="ltabs__list">
                      <Link aria-current="page" to={"/front-desk/fd-04-walk-in-check-in"}>
                        <span className="ltabs__n">{"1"}</span>
                        {"Availability & rate"}
                      </Link>
                      <span className="is-todo">
                        <span className="ltabs__n">{"2"}</span>
                        {"Guest & booking details"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"3"}</span>
                        {"Check-in steps 2–7"}
                      </span>
                    </div>
                  </nav>
                  <div className="fd-split fd-split--wide" data-code="FD-04-1">
                    <div>
                      <form className="fd-form" action="/front-desk/fd-04-walk-in-check-in/step-2-guest.html" method="get">
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Availability and rate"}</h2>
                          <p className="fd-sec__d">{"Walk-in for tonight. Availability and restrictions are checked."}</p>
                          <div className="s-grid2">
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1">
                                {"Nights "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f1" type="number" name="nights" required={true} min="1" max="30" defaultValue={"1"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f2">
                                {"Departure date "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="dpk">
                                <button type="button" className="dpk-f field__input" id="f2" aria-haspopup="dialog">
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
                                    <select className="dpk-m" name="dep__1-month" aria-label="Month" defaultValue={"10"}>
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
                                    <select className="dpk-y" name="dep__1-year" aria-label="Year" defaultValue={"2026"}>
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
                                      <input type="radio" name="dep__1" value="01" required={true} />
                                      {"1"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__1" value="02" />
                                      {"2"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__1" value="03" />
                                      {"3"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__1" value="04" />
                                      {"4"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__1" value="05" />
                                      {"5"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__1" value="06" />
                                      {"6"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__1" value="07" />
                                      {"7"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__1" value="08" />
                                      {"8"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__1" value="09" />
                                      {"9"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__1" value="10" />
                                      {"10"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__1" value="11" />
                                      {"11"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__1" value="12" />
                                      {"12"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__1" value="13" />
                                      {"13"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__1" value="14" />
                                      {"14"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__1" value="15" />
                                      {"15"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__1" value="16" />
                                      {"16"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__1" value="17" />
                                      {"17"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__1" value="18" />
                                      {"18"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__1" value="19" />
                                      {"19"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__1" value="20" />
                                      {"20"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__1" value="21" />
                                      {"21"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__1" value="22" />
                                      {"22"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__1" value="23" defaultChecked={true} />
                                      {"23"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__1" value="24" />
                                      {"24"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__1" value="25" />
                                      {"25"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__1" value="26" />
                                      {"26"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__1" value="27" />
                                      {"27"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__1" value="28" />
                                      {"28"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__1" value="29" />
                                      {"29"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__1" value="30" />
                                      {"30"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__1" value="31" />
                                      {"31"}
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <span className="field__hint">{"Arrival is the business date"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f3">
                                {"Adults "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f3" type="number" name="adults" required={true} min="1" max="6" defaultValue={"1"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f4">{"Children"}</label>
                              <input className="field__input num" id="f4" type="number" name="children" min="0" max="4" defaultValue={"0"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f5">
                                {"Room type "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f5" name="type" required={true} defaultValue={"GDLX"}>
                                  <option value="GDLX">{"GDLX – Garden Deluxe Room (10 left)"}</option>
                                  <option value="PDLX">{"PDLX – Pool Deluxe Room (12 left)"}</option>
                                  <option value="DLXS">{"DLXS – Deluxe Suite (sold out)"}</option>
                                  <option value="PRMS">{"PRMS – Premium Suite (sold out)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Only types available for all nights can be chosen"}</span>
                            </div>
                            <div className="field">
                              <span className="field__label">{"Room (chosen from the board)"}</span>
                              <div className="fd-display">{"Any ready room – chosen in check-in step 4"}</div>
                              <span className="field__hint">{"From FD-06"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f7">
                                {"Rate plan "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f7" name="plan" required={true} defaultValue={"Walk-in BAR (BAR-CP)"}>
                                  <option value="Walk-in BAR (BAR-CP)">{"Walk-in BAR (BAR-CP)"}</option>
                                  <option value="BAR-EP">{"BAR-EP · room only"}</option>
                                  <option value="BAR-MAP">{"BAR-MAP · breakfast and dinner"}</option>
                                  <option value="BAR-AP">{"BAR-AP · all meals"}</option>
                                  <option value="CLUB">{"CLUB · member rate"}</option>
                                  <option value="AGENT">{"AGENT · travel agent net rate"}</option>
                                  <option value="COMP">{"COMP · complimentary"}</option>
                                  <option value="Corporate (CORP)">{"Corporate (CORP)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Walk-in / rack / company rates valid tonight"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f8">{"Meal plan"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f8" name="meal" defaultValue={"CP – breakfast included"}>
                                  <option value="EP – room only">{"EP – room only"}</option>
                                  <option value="CP – breakfast included">{"CP – breakfast included"}</option>
                                  <option value="MAP – breakfast and dinner">{"MAP – breakfast and dinner"}</option>
                                  <option value="AP – all meals">{"AP – all meals"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f9">{"Rate per night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input className="field__input num" id="f9" type="number" inputMode="decimal" name="rate" step="0.01" defaultValue={"7399.00"} />
                              </div>
                              <span className="field__hint">{"GST ₹369.95 (5 %) is added on top. Overriding the rate needs permission and a reason (FDS-22)"}</span>
                            </div>
                            <div className="field">
                              <span className="field__label">{"Total with GST"}</span>
                              <div className="fd-display">{"₹7,768.95 for 1 night (calculated)"}</div>
                            </div>
                          </div>
                        </section>
                        <div className="fd-formfoot">
                          <Link className="btn fd-spacer" data-leads-to="FD-01" to={"/front-desk/fd-01-front-desk-home"}>{"Cancel"}</Link>
                          <button className="btn btn--primary" type="submit">{"Next →"}</button>
                        </div>
                        <section className="fd-sec" data-flow="fd04-rules">
                          <h2 className="fd-sec__t">{"Stay rules and extras"}</h2>
                          <p className="field__hint">{"Minimum age of the primary guest 18 (FDS-04). Maximum 4 guests per room, 5 in the Premium Suite. Children 11 and under free with existing beds, max 2. Deposit for a walk-in: first night plus incidental deposit ₹1,000 per night."}</p>
                          <div className="s-grid3">
                            <div className="field">
                              <label className="field__label">{"Kind of stay"}</label>
                              <div className="field__wrap">
                                <select aria-label="Kind of stay" className="field__input field__input--select" defaultValue={"Overnight"}>
                                  <option>{"Overnight"}</option>
                                  <option>{"Day use (09:00–18:00)"}</option>
                                </select>
                              </div>
                              <span className="field__hint">{"Day-use window from FDS-04; posts charge code DUSE"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label">{"Add an extra"}</label>
                              <div className="field__wrap">
                                <select aria-label="Add an extra" className="field__input field__input--select" defaultValue={"No extra"}>
                                  <option>{"No extra"}</option>
                                  <option>{"Extra bed · per night"}</option>
                                  <option>{"Breakfast · per person per night"}</option>
                                  <option>{"Airport transfer (one way) · per item"}</option>
                                  <option>{"Gala dinner · per person"}</option>
                                  <option>{"Ayurveda therapy session · per person"}</option>
                                  <option>{"Seafood Grill dinner · per person"}</option>
                                  <option>{"Early check-in · per stay"}</option>
                                  <option>{"Late check-out (until 18:00) · per stay"}</option>
                                  <option>{"Celebration cake · per item"}</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </section>
                      </form>
                    </div>
                    <aside className="fd-stack fd-stack--sticky">
                      <section className="card " data-code="FD-04-avail">
                        <div className="fd-cardhead">
                          <h2 className="s-card-title">{"Availability tonight"}</h2>
                        </div>
                        <div className="s-scroll">
                          <table className="srt dt__table dt--compact" style={{"--srt-cols": "auto auto auto auto"}} data-mc="">
                            <caption className="sr-only">{"Availability tonight"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">
                                  <input className="srt-i srt-a0" type="radio" name="stfd040" id="stfd040-0a" aria-label="Sort by Room type, lowest or A first" />
                                  <input className="srt-i srt-d0" type="radio" name="stfd040" id="stfd040-0d" aria-label="Sort by Room type, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd040-0a">{"Room type"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd040-0d" aria-hidden="true">{"Room type"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a1" type="radio" name="stfd040" id="stfd040-1a" aria-label="Sort by Left tonight, lowest or A first" />
                                  <input className="srt-i srt-d1" type="radio" name="stfd040" id="stfd040-1d" aria-label="Sort by Left tonight, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd040-1a">{"Left tonight"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd040-1d" aria-hidden="true">{"Left tonight"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a2" type="radio" name="stfd040" id="stfd040-2a" aria-label="Sort by 1 adult, lowest or A first" />
                                  <input className="srt-i srt-d2" type="radio" name="stfd040" id="stfd040-2d" aria-label="Sort by 1 adult, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd040-2a">{"1 adult"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd040-2d" aria-hidden="true">{"1 adult"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a3" type="radio" name="stfd040" id="stfd040-3a" aria-label="Sort by 2 adults, lowest or A first" />
                                  <input className="srt-i srt-d3" type="radio" name="stfd040" id="stfd040-3d" aria-label="Sort by 2 adults, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd040-3a">{"2 adults"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd040-3d" aria-hidden="true">{"2 adults"}</label>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr style={{"--k0": "2", "--k1": "2", "--k2": "1", "--k3": "1"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"GDLX"}</strong>
                                  <span className="fd-sub">{"Garden Deluxe Room"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"10"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹7,399"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹7,999"}</td>
                              </tr>
                              <tr style={{"--k0": "3", "--k1": "3", "--k2": "2", "--k3": "2"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"PDLX"}</strong>
                                  <span className="fd-sub">{"Pool Deluxe Room"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"12"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹7,799"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹8,499"}</td>
                              </tr>
                              <tr style={{"--k0": "1", "--k1": "1", "--k2": "3", "--k3": "3"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"DLXS"}</strong>
                                  <span className="fd-sub">{"Deluxe Suite"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"0"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹13,299"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹14,500"}</td>
                              </tr>
                              <tr style={{"--k0": "4", "--k1": "1", "--k2": "4", "--k3": "4"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"PRMS"}</strong>
                                  <span className="fd-sub">{"Premium Suite"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"0"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹22,099"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹24,000"}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </section>
                    </aside>
                  </div>
                </div>
                <div className="variant v-r-102">
                  <nav className="ltabs ltabs--steps" aria-label="Walk-in steps">
                    <div className="ltabs__list">
                      <Link aria-current="page" to={"/front-desk/fd-04-walk-in-check-in"}>
                        <span className="ltabs__n">{"1"}</span>
                        {"Availability & rate"}
                      </Link>
                      <span className="is-todo">
                        <span className="ltabs__n">{"2"}</span>
                        {"Guest & booking details"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"3"}</span>
                        {"Check-in steps 2–7"}
                      </span>
                    </div>
                  </nav>
                  <div className="fd-split fd-split--wide" data-code="FD-04-1">
                    <div>
                      <form className="fd-form" action="/front-desk/fd-04-walk-in-check-in/step-2-guest.html" method="get">
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Availability and rate"}</h2>
                          <p className="fd-sec__d">{"Walk-in for tonight. Availability and restrictions are checked."}</p>
                          <div className="s-grid2">
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f11">
                                {"Nights "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f11" type="number" name="nights" required={true} min="1" max="30" defaultValue={"1"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f12">
                                {"Departure date "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="dpk">
                                <button type="button" className="dpk-f field__input" id="f12" aria-haspopup="dialog">
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
                                    <select className="dpk-m" name="dep__2-month" aria-label="Month" defaultValue={"10"}>
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
                                    <select className="dpk-y" name="dep__2-year" aria-label="Year" defaultValue={"2026"}>
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
                                      <input type="radio" name="dep__2" value="01" required={true} />
                                      {"1"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__2" value="02" />
                                      {"2"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__2" value="03" />
                                      {"3"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__2" value="04" />
                                      {"4"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__2" value="05" />
                                      {"5"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__2" value="06" />
                                      {"6"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__2" value="07" />
                                      {"7"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__2" value="08" />
                                      {"8"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__2" value="09" />
                                      {"9"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__2" value="10" />
                                      {"10"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__2" value="11" />
                                      {"11"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__2" value="12" />
                                      {"12"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__2" value="13" />
                                      {"13"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__2" value="14" />
                                      {"14"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__2" value="15" />
                                      {"15"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__2" value="16" />
                                      {"16"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__2" value="17" />
                                      {"17"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__2" value="18" />
                                      {"18"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__2" value="19" />
                                      {"19"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__2" value="20" />
                                      {"20"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__2" value="21" />
                                      {"21"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__2" value="22" />
                                      {"22"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__2" value="23" defaultChecked={true} />
                                      {"23"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__2" value="24" />
                                      {"24"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__2" value="25" />
                                      {"25"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__2" value="26" />
                                      {"26"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__2" value="27" />
                                      {"27"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__2" value="28" />
                                      {"28"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__2" value="29" />
                                      {"29"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__2" value="30" />
                                      {"30"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__2" value="31" />
                                      {"31"}
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <span className="field__hint">{"Arrival is the business date"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f13">
                                {"Adults "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f13" type="number" name="adults" required={true} min="1" max="6" defaultValue={"1"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f14">{"Children"}</label>
                              <input className="field__input num" id="f14" type="number" name="children" min="0" max="4" defaultValue={"0"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f15">
                                {"Room type "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f15" name="type" required={true} defaultValue={"GDLX"}>
                                  <option value="GDLX">{"GDLX – Garden Deluxe Room (10 left)"}</option>
                                  <option value="PDLX">{"PDLX – Pool Deluxe Room (12 left)"}</option>
                                  <option value="DLXS">{"DLXS – Deluxe Suite (sold out)"}</option>
                                  <option value="PRMS">{"PRMS – Premium Suite (sold out)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Only types available for all nights can be chosen"}</span>
                            </div>
                            <div className="field">
                              <span className="field__label">{"Room (chosen from the board)"}</span>
                              <div className="fd-display">
                                <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"102"}</span>
                                {" Vacant inspected"}
                              </div>
                              <span className="field__hint">{"From FD-06"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f17">
                                {"Rate plan "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f17" name="plan" required={true} defaultValue={"Walk-in BAR (BAR-CP)"}>
                                  <option value="Walk-in BAR (BAR-CP)">{"Walk-in BAR (BAR-CP)"}</option>
                                  <option value="BAR-EP">{"BAR-EP · room only"}</option>
                                  <option value="BAR-MAP">{"BAR-MAP · breakfast and dinner"}</option>
                                  <option value="BAR-AP">{"BAR-AP · all meals"}</option>
                                  <option value="CLUB">{"CLUB · member rate"}</option>
                                  <option value="AGENT">{"AGENT · travel agent net rate"}</option>
                                  <option value="COMP">{"COMP · complimentary"}</option>
                                  <option value="Corporate (CORP)">{"Corporate (CORP)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Walk-in / rack / company rates valid tonight"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f18">{"Meal plan"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f18" name="meal" defaultValue={"CP – breakfast included"}>
                                  <option value="EP – room only">{"EP – room only"}</option>
                                  <option value="CP – breakfast included">{"CP – breakfast included"}</option>
                                  <option value="MAP – breakfast and dinner">{"MAP – breakfast and dinner"}</option>
                                  <option value="AP – all meals">{"AP – all meals"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f19">{"Rate per night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input className="field__input num" id="f19" type="number" inputMode="decimal" name="rate" step="0.01" defaultValue={"7399.00"} />
                              </div>
                              <span className="field__hint">{"GST ₹369.95 (5 %) is added on top. Overriding the rate needs permission and a reason (FDS-22)"}</span>
                            </div>
                            <div className="field">
                              <span className="field__label">{"Total with GST"}</span>
                              <div className="fd-display">{"₹7,768.95 for 1 night (calculated)"}</div>
                            </div>
                          </div>
                        </section>
                        <div className="fd-formfoot">
                          <Link className="btn fd-spacer" data-leads-to="FD-01" to={"/front-desk/fd-01-front-desk-home"}>{"Cancel"}</Link>
                          <button className="btn btn--primary" type="submit">{"Next →"}</button>
                        </div>
                        <section className="fd-sec" data-flow="fd04-rules">
                          <h2 className="fd-sec__t">{"Stay rules and extras"}</h2>
                          <p className="field__hint">{"Minimum age of the primary guest 18 (FDS-04). Maximum 4 guests per room, 5 in the Premium Suite. Children 11 and under free with existing beds, max 2. Deposit for a walk-in: first night plus incidental deposit ₹1,000 per night."}</p>
                          <div className="s-grid3">
                            <div className="field">
                              <label className="field__label">{"Kind of stay"}</label>
                              <div className="field__wrap">
                                <select aria-label="Kind of stay" className="field__input field__input--select" defaultValue={"Overnight"}>
                                  <option>{"Overnight"}</option>
                                  <option>{"Day use (09:00–18:00)"}</option>
                                </select>
                              </div>
                              <span className="field__hint">{"Day-use window from FDS-04; posts charge code DUSE"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label">{"Add an extra"}</label>
                              <div className="field__wrap">
                                <select aria-label="Add an extra" className="field__input field__input--select" defaultValue={"No extra"}>
                                  <option>{"No extra"}</option>
                                  <option>{"Extra bed · per night"}</option>
                                  <option>{"Breakfast · per person per night"}</option>
                                  <option>{"Airport transfer (one way) · per item"}</option>
                                  <option>{"Gala dinner · per person"}</option>
                                  <option>{"Ayurveda therapy session · per person"}</option>
                                  <option>{"Seafood Grill dinner · per person"}</option>
                                  <option>{"Early check-in · per stay"}</option>
                                  <option>{"Late check-out (until 18:00) · per stay"}</option>
                                  <option>{"Celebration cake · per item"}</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </section>
                      </form>
                    </div>
                    <aside className="fd-stack fd-stack--sticky">
                      <section className="card " data-code="FD-04-avail">
                        <div className="fd-cardhead">
                          <h2 className="s-card-title">{"Availability tonight"}</h2>
                        </div>
                        <div className="s-scroll">
                          <table className="srt dt__table dt--compact dt--hug" style={{"--srt-cols": "auto auto auto auto"}} data-mc="">
                            <caption className="sr-only">{"Availability tonight"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">
                                  <input className="srt-i srt-a0" type="radio" name="stfd041" id="stfd041-0a" aria-label="Sort by Room type, lowest or A first" />
                                  <input className="srt-i srt-d0" type="radio" name="stfd041" id="stfd041-0d" aria-label="Sort by Room type, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd041-0a">{"Room type"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd041-0d" aria-hidden="true">{"Room type"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a1" type="radio" name="stfd041" id="stfd041-1a" aria-label="Sort by Left tonight, lowest or A first" />
                                  <input className="srt-i srt-d1" type="radio" name="stfd041" id="stfd041-1d" aria-label="Sort by Left tonight, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd041-1a">{"Left tonight"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd041-1d" aria-hidden="true">{"Left tonight"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a2" type="radio" name="stfd041" id="stfd041-2a" aria-label="Sort by 1 adult, lowest or A first" />
                                  <input className="srt-i srt-d2" type="radio" name="stfd041" id="stfd041-2d" aria-label="Sort by 1 adult, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd041-2a">{"1 adult"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd041-2d" aria-hidden="true">{"1 adult"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a3" type="radio" name="stfd041" id="stfd041-3a" aria-label="Sort by 2 adults, lowest or A first" />
                                  <input className="srt-i srt-d3" type="radio" name="stfd041" id="stfd041-3d" aria-label="Sort by 2 adults, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd041-3a">{"2 adults"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd041-3d" aria-hidden="true">{"2 adults"}</label>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr style={{"--k0": "2", "--k1": "2", "--k2": "1", "--k3": "1"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"GDLX"}</strong>
                                  <span className="fd-sub">{"Garden Deluxe Room"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"10"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹7,399"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹7,999"}</td>
                              </tr>
                              <tr style={{"--k0": "3", "--k1": "3", "--k2": "2", "--k3": "2"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"PDLX"}</strong>
                                  <span className="fd-sub">{"Pool Deluxe Room"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"12"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹7,799"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹8,499"}</td>
                              </tr>
                              <tr style={{"--k0": "1", "--k1": "1", "--k2": "3", "--k3": "3"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"DLXS"}</strong>
                                  <span className="fd-sub">{"Deluxe Suite"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"0"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹13,299"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹14,500"}</td>
                              </tr>
                              <tr style={{"--k0": "4", "--k1": "1", "--k2": "4", "--k3": "4"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"PRMS"}</strong>
                                  <span className="fd-sub">{"Premium Suite"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"0"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹22,099"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹24,000"}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </section>
                    </aside>
                  </div>
                </div>
                <div className="variant v-r-106">
                  <nav className="ltabs ltabs--steps" aria-label="Walk-in steps">
                    <div className="ltabs__list">
                      <Link aria-current="page" to={"/front-desk/fd-04-walk-in-check-in"}>
                        <span className="ltabs__n">{"1"}</span>
                        {"Availability & rate"}
                      </Link>
                      <span className="is-todo">
                        <span className="ltabs__n">{"2"}</span>
                        {"Guest & booking details"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"3"}</span>
                        {"Check-in steps 2–7"}
                      </span>
                    </div>
                  </nav>
                  <div className="fd-split fd-split--wide" data-code="FD-04-1">
                    <div>
                      <form className="fd-form" action="/front-desk/fd-04-walk-in-check-in/step-2-guest.html" method="get">
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Availability and rate"}</h2>
                          <p className="fd-sec__d">{"Walk-in for tonight. Availability and restrictions are checked."}</p>
                          <div className="s-grid2">
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f21">
                                {"Nights "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f21" type="number" name="nights" required={true} min="1" max="30" defaultValue={"1"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f22">
                                {"Departure date "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="dpk">
                                <button type="button" className="dpk-f field__input" id="f22" aria-haspopup="dialog">
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
                                    <select className="dpk-m" name="dep__3-month" aria-label="Month" defaultValue={"10"}>
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
                                    <select className="dpk-y" name="dep__3-year" aria-label="Year" defaultValue={"2026"}>
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
                                      <input type="radio" name="dep__3" value="01" required={true} />
                                      {"1"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__3" value="02" />
                                      {"2"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__3" value="03" />
                                      {"3"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__3" value="04" />
                                      {"4"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__3" value="05" />
                                      {"5"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__3" value="06" />
                                      {"6"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__3" value="07" />
                                      {"7"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__3" value="08" />
                                      {"8"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__3" value="09" />
                                      {"9"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__3" value="10" />
                                      {"10"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__3" value="11" />
                                      {"11"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__3" value="12" />
                                      {"12"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__3" value="13" />
                                      {"13"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__3" value="14" />
                                      {"14"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__3" value="15" />
                                      {"15"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__3" value="16" />
                                      {"16"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__3" value="17" />
                                      {"17"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__3" value="18" />
                                      {"18"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__3" value="19" />
                                      {"19"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__3" value="20" />
                                      {"20"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__3" value="21" />
                                      {"21"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__3" value="22" />
                                      {"22"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__3" value="23" defaultChecked={true} />
                                      {"23"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__3" value="24" />
                                      {"24"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__3" value="25" />
                                      {"25"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__3" value="26" />
                                      {"26"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__3" value="27" />
                                      {"27"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__3" value="28" />
                                      {"28"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__3" value="29" />
                                      {"29"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__3" value="30" />
                                      {"30"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__3" value="31" />
                                      {"31"}
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <span className="field__hint">{"Arrival is the business date"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f23">
                                {"Adults "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f23" type="number" name="adults" required={true} min="1" max="6" defaultValue={"1"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f24">{"Children"}</label>
                              <input className="field__input num" id="f24" type="number" name="children" min="0" max="4" defaultValue={"0"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f25">
                                {"Room type "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f25" name="type" required={true} defaultValue={"GDLX"}>
                                  <option value="GDLX">{"GDLX – Garden Deluxe Room (10 left)"}</option>
                                  <option value="PDLX">{"PDLX – Pool Deluxe Room (12 left)"}</option>
                                  <option value="DLXS">{"DLXS – Deluxe Suite (sold out)"}</option>
                                  <option value="PRMS">{"PRMS – Premium Suite (sold out)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Only types available for all nights can be chosen"}</span>
                            </div>
                            <div className="field">
                              <span className="field__label">{"Room (chosen from the board)"}</span>
                              <div className="fd-display">
                                <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"106"}</span>
                                {" Vacant inspected"}
                              </div>
                              <span className="field__hint">{"From FD-06"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f27">
                                {"Rate plan "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f27" name="plan" required={true} defaultValue={"Walk-in BAR (BAR-CP)"}>
                                  <option value="Walk-in BAR (BAR-CP)">{"Walk-in BAR (BAR-CP)"}</option>
                                  <option value="BAR-EP">{"BAR-EP · room only"}</option>
                                  <option value="BAR-MAP">{"BAR-MAP · breakfast and dinner"}</option>
                                  <option value="BAR-AP">{"BAR-AP · all meals"}</option>
                                  <option value="CLUB">{"CLUB · member rate"}</option>
                                  <option value="AGENT">{"AGENT · travel agent net rate"}</option>
                                  <option value="COMP">{"COMP · complimentary"}</option>
                                  <option value="Corporate (CORP)">{"Corporate (CORP)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Walk-in / rack / company rates valid tonight"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f28">{"Meal plan"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f28" name="meal" defaultValue={"CP – breakfast included"}>
                                  <option value="EP – room only">{"EP – room only"}</option>
                                  <option value="CP – breakfast included">{"CP – breakfast included"}</option>
                                  <option value="MAP – breakfast and dinner">{"MAP – breakfast and dinner"}</option>
                                  <option value="AP – all meals">{"AP – all meals"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f29">{"Rate per night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input className="field__input num" id="f29" type="number" inputMode="decimal" name="rate" step="0.01" defaultValue={"7399.00"} />
                              </div>
                              <span className="field__hint">{"GST ₹369.95 (5 %) is added on top. Overriding the rate needs permission and a reason (FDS-22)"}</span>
                            </div>
                            <div className="field">
                              <span className="field__label">{"Total with GST"}</span>
                              <div className="fd-display">{"₹7,768.95 for 1 night (calculated)"}</div>
                            </div>
                          </div>
                        </section>
                        <div className="fd-formfoot">
                          <Link className="btn fd-spacer" data-leads-to="FD-01" to={"/front-desk/fd-01-front-desk-home"}>{"Cancel"}</Link>
                          <button className="btn btn--primary" type="submit">{"Next →"}</button>
                        </div>
                        <section className="fd-sec" data-flow="fd04-rules">
                          <h2 className="fd-sec__t">{"Stay rules and extras"}</h2>
                          <p className="field__hint">{"Minimum age of the primary guest 18 (FDS-04). Maximum 4 guests per room, 5 in the Premium Suite. Children 11 and under free with existing beds, max 2. Deposit for a walk-in: first night plus incidental deposit ₹1,000 per night."}</p>
                          <div className="s-grid3">
                            <div className="field">
                              <label className="field__label">{"Kind of stay"}</label>
                              <div className="field__wrap">
                                <select aria-label="Kind of stay" className="field__input field__input--select" defaultValue={"Overnight"}>
                                  <option>{"Overnight"}</option>
                                  <option>{"Day use (09:00–18:00)"}</option>
                                </select>
                              </div>
                              <span className="field__hint">{"Day-use window from FDS-04; posts charge code DUSE"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label">{"Add an extra"}</label>
                              <div className="field__wrap">
                                <select aria-label="Add an extra" className="field__input field__input--select" defaultValue={"No extra"}>
                                  <option>{"No extra"}</option>
                                  <option>{"Extra bed · per night"}</option>
                                  <option>{"Breakfast · per person per night"}</option>
                                  <option>{"Airport transfer (one way) · per item"}</option>
                                  <option>{"Gala dinner · per person"}</option>
                                  <option>{"Ayurveda therapy session · per person"}</option>
                                  <option>{"Seafood Grill dinner · per person"}</option>
                                  <option>{"Early check-in · per stay"}</option>
                                  <option>{"Late check-out (until 18:00) · per stay"}</option>
                                  <option>{"Celebration cake · per item"}</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </section>
                      </form>
                    </div>
                    <aside className="fd-stack fd-stack--sticky">
                      <section className="card " data-code="FD-04-avail">
                        <div className="fd-cardhead">
                          <h2 className="s-card-title">{"Availability tonight"}</h2>
                        </div>
                        <div className="s-scroll">
                          <table className="srt dt__table dt--compact dt--hug" style={{"--srt-cols": "auto auto auto auto"}} data-mc="">
                            <caption className="sr-only">{"Availability tonight"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">
                                  <input className="srt-i srt-a0" type="radio" name="stfd042" id="stfd042-0a" aria-label="Sort by Room type, lowest or A first" />
                                  <input className="srt-i srt-d0" type="radio" name="stfd042" id="stfd042-0d" aria-label="Sort by Room type, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd042-0a">{"Room type"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd042-0d" aria-hidden="true">{"Room type"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a1" type="radio" name="stfd042" id="stfd042-1a" aria-label="Sort by Left tonight, lowest or A first" />
                                  <input className="srt-i srt-d1" type="radio" name="stfd042" id="stfd042-1d" aria-label="Sort by Left tonight, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd042-1a">{"Left tonight"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd042-1d" aria-hidden="true">{"Left tonight"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a2" type="radio" name="stfd042" id="stfd042-2a" aria-label="Sort by 1 adult, lowest or A first" />
                                  <input className="srt-i srt-d2" type="radio" name="stfd042" id="stfd042-2d" aria-label="Sort by 1 adult, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd042-2a">{"1 adult"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd042-2d" aria-hidden="true">{"1 adult"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a3" type="radio" name="stfd042" id="stfd042-3a" aria-label="Sort by 2 adults, lowest or A first" />
                                  <input className="srt-i srt-d3" type="radio" name="stfd042" id="stfd042-3d" aria-label="Sort by 2 adults, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd042-3a">{"2 adults"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd042-3d" aria-hidden="true">{"2 adults"}</label>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr style={{"--k0": "2", "--k1": "2", "--k2": "1", "--k3": "1"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"GDLX"}</strong>
                                  <span className="fd-sub">{"Garden Deluxe Room"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"10"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹7,399"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹7,999"}</td>
                              </tr>
                              <tr style={{"--k0": "3", "--k1": "3", "--k2": "2", "--k3": "2"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"PDLX"}</strong>
                                  <span className="fd-sub">{"Pool Deluxe Room"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"12"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹7,799"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹8,499"}</td>
                              </tr>
                              <tr style={{"--k0": "1", "--k1": "1", "--k2": "3", "--k3": "3"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"DLXS"}</strong>
                                  <span className="fd-sub">{"Deluxe Suite"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"0"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹13,299"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹14,500"}</td>
                              </tr>
                              <tr style={{"--k0": "4", "--k1": "1", "--k2": "4", "--k3": "4"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"PRMS"}</strong>
                                  <span className="fd-sub">{"Premium Suite"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"0"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹22,099"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹24,000"}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </section>
                    </aside>
                  </div>
                </div>
                <div className="variant v-r-117">
                  <nav className="ltabs ltabs--steps" aria-label="Walk-in steps">
                    <div className="ltabs__list">
                      <Link aria-current="page" to={"/front-desk/fd-04-walk-in-check-in"}>
                        <span className="ltabs__n">{"1"}</span>
                        {"Availability & rate"}
                      </Link>
                      <span className="is-todo">
                        <span className="ltabs__n">{"2"}</span>
                        {"Guest & booking details"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"3"}</span>
                        {"Check-in steps 2–7"}
                      </span>
                    </div>
                  </nav>
                  <div className="fd-split fd-split--wide" data-code="FD-04-1">
                    <div>
                      <form className="fd-form" action="/front-desk/fd-04-walk-in-check-in/step-2-guest.html" method="get">
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Availability and rate"}</h2>
                          <p className="fd-sec__d">{"Walk-in for tonight. Availability and restrictions are checked."}</p>
                          <div className="s-grid2">
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f31">
                                {"Nights "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f31" type="number" name="nights" required={true} min="1" max="30" defaultValue={"1"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f32">
                                {"Departure date "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="dpk">
                                <button type="button" className="dpk-f field__input" id="f32" aria-haspopup="dialog">
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
                                    <select className="dpk-m" name="dep__4-month" aria-label="Month" defaultValue={"10"}>
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
                                    <select className="dpk-y" name="dep__4-year" aria-label="Year" defaultValue={"2026"}>
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
                                      <input type="radio" name="dep__4" value="01" required={true} />
                                      {"1"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__4" value="02" />
                                      {"2"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__4" value="03" />
                                      {"3"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__4" value="04" />
                                      {"4"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__4" value="05" />
                                      {"5"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__4" value="06" />
                                      {"6"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__4" value="07" />
                                      {"7"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__4" value="08" />
                                      {"8"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__4" value="09" />
                                      {"9"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__4" value="10" />
                                      {"10"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__4" value="11" />
                                      {"11"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__4" value="12" />
                                      {"12"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__4" value="13" />
                                      {"13"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__4" value="14" />
                                      {"14"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__4" value="15" />
                                      {"15"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__4" value="16" />
                                      {"16"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__4" value="17" />
                                      {"17"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__4" value="18" />
                                      {"18"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__4" value="19" />
                                      {"19"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__4" value="20" />
                                      {"20"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__4" value="21" />
                                      {"21"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__4" value="22" />
                                      {"22"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__4" value="23" defaultChecked={true} />
                                      {"23"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__4" value="24" />
                                      {"24"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__4" value="25" />
                                      {"25"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__4" value="26" />
                                      {"26"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__4" value="27" />
                                      {"27"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__4" value="28" />
                                      {"28"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__4" value="29" />
                                      {"29"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__4" value="30" />
                                      {"30"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__4" value="31" />
                                      {"31"}
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <span className="field__hint">{"Arrival is the business date"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f33">
                                {"Adults "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f33" type="number" name="adults" required={true} min="1" max="6" defaultValue={"1"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f34">{"Children"}</label>
                              <input className="field__input num" id="f34" type="number" name="children" min="0" max="4" defaultValue={"0"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f35">
                                {"Room type "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f35" name="type" required={true} defaultValue={"GDLX"}>
                                  <option value="GDLX">{"GDLX – Garden Deluxe Room (10 left)"}</option>
                                  <option value="PDLX">{"PDLX – Pool Deluxe Room (12 left)"}</option>
                                  <option value="DLXS">{"DLXS – Deluxe Suite (sold out)"}</option>
                                  <option value="PRMS">{"PRMS – Premium Suite (sold out)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Only types available for all nights can be chosen"}</span>
                            </div>
                            <div className="field">
                              <span className="field__label">{"Room (chosen from the board)"}</span>
                              <div className="fd-display">
                                <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"117"}</span>
                                {" Vacant inspected"}
                              </div>
                              <span className="field__hint">{"From FD-06"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f37">
                                {"Rate plan "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f37" name="plan" required={true} defaultValue={"Walk-in BAR (BAR-CP)"}>
                                  <option value="Walk-in BAR (BAR-CP)">{"Walk-in BAR (BAR-CP)"}</option>
                                  <option value="BAR-EP">{"BAR-EP · room only"}</option>
                                  <option value="BAR-MAP">{"BAR-MAP · breakfast and dinner"}</option>
                                  <option value="BAR-AP">{"BAR-AP · all meals"}</option>
                                  <option value="CLUB">{"CLUB · member rate"}</option>
                                  <option value="AGENT">{"AGENT · travel agent net rate"}</option>
                                  <option value="COMP">{"COMP · complimentary"}</option>
                                  <option value="Corporate (CORP)">{"Corporate (CORP)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Walk-in / rack / company rates valid tonight"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f38">{"Meal plan"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f38" name="meal" defaultValue={"CP – breakfast included"}>
                                  <option value="EP – room only">{"EP – room only"}</option>
                                  <option value="CP – breakfast included">{"CP – breakfast included"}</option>
                                  <option value="MAP – breakfast and dinner">{"MAP – breakfast and dinner"}</option>
                                  <option value="AP – all meals">{"AP – all meals"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f39">{"Rate per night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input className="field__input num" id="f39" type="number" inputMode="decimal" name="rate" step="0.01" defaultValue={"7399.00"} />
                              </div>
                              <span className="field__hint">{"GST ₹369.95 (5 %) is added on top. Overriding the rate needs permission and a reason (FDS-22)"}</span>
                            </div>
                            <div className="field">
                              <span className="field__label">{"Total with GST"}</span>
                              <div className="fd-display">{"₹7,768.95 for 1 night (calculated)"}</div>
                            </div>
                          </div>
                        </section>
                        <div className="fd-formfoot">
                          <Link className="btn fd-spacer" data-leads-to="FD-01" to={"/front-desk/fd-01-front-desk-home"}>{"Cancel"}</Link>
                          <button className="btn btn--primary" type="submit">{"Next →"}</button>
                        </div>
                        <section className="fd-sec" data-flow="fd04-rules">
                          <h2 className="fd-sec__t">{"Stay rules and extras"}</h2>
                          <p className="field__hint">{"Minimum age of the primary guest 18 (FDS-04). Maximum 4 guests per room, 5 in the Premium Suite. Children 11 and under free with existing beds, max 2. Deposit for a walk-in: first night plus incidental deposit ₹1,000 per night."}</p>
                          <div className="s-grid3">
                            <div className="field">
                              <label className="field__label">{"Kind of stay"}</label>
                              <div className="field__wrap">
                                <select aria-label="Kind of stay" className="field__input field__input--select" defaultValue={"Overnight"}>
                                  <option>{"Overnight"}</option>
                                  <option>{"Day use (09:00–18:00)"}</option>
                                </select>
                              </div>
                              <span className="field__hint">{"Day-use window from FDS-04; posts charge code DUSE"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label">{"Add an extra"}</label>
                              <div className="field__wrap">
                                <select aria-label="Add an extra" className="field__input field__input--select" defaultValue={"No extra"}>
                                  <option>{"No extra"}</option>
                                  <option>{"Extra bed · per night"}</option>
                                  <option>{"Breakfast · per person per night"}</option>
                                  <option>{"Airport transfer (one way) · per item"}</option>
                                  <option>{"Gala dinner · per person"}</option>
                                  <option>{"Ayurveda therapy session · per person"}</option>
                                  <option>{"Seafood Grill dinner · per person"}</option>
                                  <option>{"Early check-in · per stay"}</option>
                                  <option>{"Late check-out (until 18:00) · per stay"}</option>
                                  <option>{"Celebration cake · per item"}</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </section>
                      </form>
                    </div>
                    <aside className="fd-stack fd-stack--sticky">
                      <section className="card " data-code="FD-04-avail">
                        <div className="fd-cardhead">
                          <h2 className="s-card-title">{"Availability tonight"}</h2>
                        </div>
                        <div className="s-scroll">
                          <table className="srt dt__table dt--compact dt--hug" style={{"--srt-cols": "auto auto auto auto"}} data-mc="">
                            <caption className="sr-only">{"Availability tonight"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">
                                  <input className="srt-i srt-a0" type="radio" name="stfd043" id="stfd043-0a" aria-label="Sort by Room type, lowest or A first" />
                                  <input className="srt-i srt-d0" type="radio" name="stfd043" id="stfd043-0d" aria-label="Sort by Room type, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd043-0a">{"Room type"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd043-0d" aria-hidden="true">{"Room type"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a1" type="radio" name="stfd043" id="stfd043-1a" aria-label="Sort by Left tonight, lowest or A first" />
                                  <input className="srt-i srt-d1" type="radio" name="stfd043" id="stfd043-1d" aria-label="Sort by Left tonight, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd043-1a">{"Left tonight"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd043-1d" aria-hidden="true">{"Left tonight"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a2" type="radio" name="stfd043" id="stfd043-2a" aria-label="Sort by 1 adult, lowest or A first" />
                                  <input className="srt-i srt-d2" type="radio" name="stfd043" id="stfd043-2d" aria-label="Sort by 1 adult, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd043-2a">{"1 adult"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd043-2d" aria-hidden="true">{"1 adult"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a3" type="radio" name="stfd043" id="stfd043-3a" aria-label="Sort by 2 adults, lowest or A first" />
                                  <input className="srt-i srt-d3" type="radio" name="stfd043" id="stfd043-3d" aria-label="Sort by 2 adults, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd043-3a">{"2 adults"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd043-3d" aria-hidden="true">{"2 adults"}</label>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr style={{"--k0": "2", "--k1": "2", "--k2": "1", "--k3": "1"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"GDLX"}</strong>
                                  <span className="fd-sub">{"Garden Deluxe Room"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"10"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹7,399"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹7,999"}</td>
                              </tr>
                              <tr style={{"--k0": "3", "--k1": "3", "--k2": "2", "--k3": "2"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"PDLX"}</strong>
                                  <span className="fd-sub">{"Pool Deluxe Room"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"12"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹7,799"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹8,499"}</td>
                              </tr>
                              <tr style={{"--k0": "1", "--k1": "1", "--k2": "3", "--k3": "3"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"DLXS"}</strong>
                                  <span className="fd-sub">{"Deluxe Suite"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"0"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹13,299"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹14,500"}</td>
                              </tr>
                              <tr style={{"--k0": "4", "--k1": "1", "--k2": "4", "--k3": "4"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"PRMS"}</strong>
                                  <span className="fd-sub">{"Premium Suite"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"0"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹22,099"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹24,000"}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </section>
                    </aside>
                  </div>
                </div>
                <div className="variant v-r-203">
                  <nav className="ltabs ltabs--steps" aria-label="Walk-in steps">
                    <div className="ltabs__list">
                      <Link aria-current="page" to={"/front-desk/fd-04-walk-in-check-in"}>
                        <span className="ltabs__n">{"1"}</span>
                        {"Availability & rate"}
                      </Link>
                      <span className="is-todo">
                        <span className="ltabs__n">{"2"}</span>
                        {"Guest & booking details"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"3"}</span>
                        {"Check-in steps 2–7"}
                      </span>
                    </div>
                  </nav>
                  <div className="fd-split fd-split--wide" data-code="FD-04-1">
                    <div>
                      <form className="fd-form" action="/front-desk/fd-04-walk-in-check-in/step-2-guest.html" method="get">
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Availability and rate"}</h2>
                          <p className="fd-sec__d">{"Walk-in for tonight. Availability and restrictions are checked."}</p>
                          <div className="s-grid2">
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f41">
                                {"Nights "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f41" type="number" name="nights" required={true} min="1" max="30" defaultValue={"1"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f42">
                                {"Departure date "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="dpk">
                                <button type="button" className="dpk-f field__input" id="f42" aria-haspopup="dialog">
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
                                    <select className="dpk-m" name="dep__5-month" aria-label="Month" defaultValue={"10"}>
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
                                    <select className="dpk-y" name="dep__5-year" aria-label="Year" defaultValue={"2026"}>
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
                                      <input type="radio" name="dep__5" value="01" required={true} />
                                      {"1"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__5" value="02" />
                                      {"2"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__5" value="03" />
                                      {"3"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__5" value="04" />
                                      {"4"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__5" value="05" />
                                      {"5"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__5" value="06" />
                                      {"6"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__5" value="07" />
                                      {"7"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__5" value="08" />
                                      {"8"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__5" value="09" />
                                      {"9"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__5" value="10" />
                                      {"10"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__5" value="11" />
                                      {"11"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__5" value="12" />
                                      {"12"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__5" value="13" />
                                      {"13"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__5" value="14" />
                                      {"14"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__5" value="15" />
                                      {"15"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__5" value="16" />
                                      {"16"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__5" value="17" />
                                      {"17"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__5" value="18" />
                                      {"18"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__5" value="19" />
                                      {"19"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__5" value="20" />
                                      {"20"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__5" value="21" />
                                      {"21"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__5" value="22" />
                                      {"22"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__5" value="23" defaultChecked={true} />
                                      {"23"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__5" value="24" />
                                      {"24"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__5" value="25" />
                                      {"25"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__5" value="26" />
                                      {"26"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__5" value="27" />
                                      {"27"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__5" value="28" />
                                      {"28"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__5" value="29" />
                                      {"29"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__5" value="30" />
                                      {"30"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__5" value="31" />
                                      {"31"}
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <span className="field__hint">{"Arrival is the business date"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f43">
                                {"Adults "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f43" type="number" name="adults" required={true} min="1" max="6" defaultValue={"1"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f44">{"Children"}</label>
                              <input className="field__input num" id="f44" type="number" name="children" min="0" max="4" defaultValue={"0"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f45">
                                {"Room type "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f45" name="type" required={true} defaultValue={"GDLX"}>
                                  <option value="GDLX">{"GDLX – Garden Deluxe Room (10 left)"}</option>
                                  <option value="PDLX">{"PDLX – Pool Deluxe Room (12 left)"}</option>
                                  <option value="DLXS">{"DLXS – Deluxe Suite (sold out)"}</option>
                                  <option value="PRMS">{"PRMS – Premium Suite (sold out)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Only types available for all nights can be chosen"}</span>
                            </div>
                            <div className="field">
                              <span className="field__label">{"Room (chosen from the board)"}</span>
                              <div className="fd-display">
                                <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"203"}</span>
                                {" Vacant inspected"}
                              </div>
                              <span className="field__hint">{"From FD-06"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f47">
                                {"Rate plan "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f47" name="plan" required={true} defaultValue={"Walk-in BAR (BAR-CP)"}>
                                  <option value="Walk-in BAR (BAR-CP)">{"Walk-in BAR (BAR-CP)"}</option>
                                  <option value="BAR-EP">{"BAR-EP · room only"}</option>
                                  <option value="BAR-MAP">{"BAR-MAP · breakfast and dinner"}</option>
                                  <option value="BAR-AP">{"BAR-AP · all meals"}</option>
                                  <option value="CLUB">{"CLUB · member rate"}</option>
                                  <option value="AGENT">{"AGENT · travel agent net rate"}</option>
                                  <option value="COMP">{"COMP · complimentary"}</option>
                                  <option value="Corporate (CORP)">{"Corporate (CORP)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Walk-in / rack / company rates valid tonight"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f48">{"Meal plan"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f48" name="meal" defaultValue={"CP – breakfast included"}>
                                  <option value="EP – room only">{"EP – room only"}</option>
                                  <option value="CP – breakfast included">{"CP – breakfast included"}</option>
                                  <option value="MAP – breakfast and dinner">{"MAP – breakfast and dinner"}</option>
                                  <option value="AP – all meals">{"AP – all meals"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f49">{"Rate per night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input className="field__input num" id="f49" type="number" inputMode="decimal" name="rate" step="0.01" defaultValue={"7399.00"} />
                              </div>
                              <span className="field__hint">{"GST ₹369.95 (5 %) is added on top. Overriding the rate needs permission and a reason (FDS-22)"}</span>
                            </div>
                            <div className="field">
                              <span className="field__label">{"Total with GST"}</span>
                              <div className="fd-display">{"₹7,768.95 for 1 night (calculated)"}</div>
                            </div>
                          </div>
                        </section>
                        <div className="fd-formfoot">
                          <Link className="btn fd-spacer" data-leads-to="FD-01" to={"/front-desk/fd-01-front-desk-home"}>{"Cancel"}</Link>
                          <button className="btn btn--primary" type="submit">{"Next →"}</button>
                        </div>
                        <section className="fd-sec" data-flow="fd04-rules">
                          <h2 className="fd-sec__t">{"Stay rules and extras"}</h2>
                          <p className="field__hint">{"Minimum age of the primary guest 18 (FDS-04). Maximum 4 guests per room, 5 in the Premium Suite. Children 11 and under free with existing beds, max 2. Deposit for a walk-in: first night plus incidental deposit ₹1,000 per night."}</p>
                          <div className="s-grid3">
                            <div className="field">
                              <label className="field__label">{"Kind of stay"}</label>
                              <div className="field__wrap">
                                <select aria-label="Kind of stay" className="field__input field__input--select" defaultValue={"Overnight"}>
                                  <option>{"Overnight"}</option>
                                  <option>{"Day use (09:00–18:00)"}</option>
                                </select>
                              </div>
                              <span className="field__hint">{"Day-use window from FDS-04; posts charge code DUSE"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label">{"Add an extra"}</label>
                              <div className="field__wrap">
                                <select aria-label="Add an extra" className="field__input field__input--select" defaultValue={"No extra"}>
                                  <option>{"No extra"}</option>
                                  <option>{"Extra bed · per night"}</option>
                                  <option>{"Breakfast · per person per night"}</option>
                                  <option>{"Airport transfer (one way) · per item"}</option>
                                  <option>{"Gala dinner · per person"}</option>
                                  <option>{"Ayurveda therapy session · per person"}</option>
                                  <option>{"Seafood Grill dinner · per person"}</option>
                                  <option>{"Early check-in · per stay"}</option>
                                  <option>{"Late check-out (until 18:00) · per stay"}</option>
                                  <option>{"Celebration cake · per item"}</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </section>
                      </form>
                    </div>
                    <aside className="fd-stack fd-stack--sticky">
                      <section className="card " data-code="FD-04-avail">
                        <div className="fd-cardhead">
                          <h2 className="s-card-title">{"Availability tonight"}</h2>
                        </div>
                        <div className="s-scroll">
                          <table className="srt dt__table dt--compact dt--hug" style={{"--srt-cols": "auto auto auto auto"}} data-mc="">
                            <caption className="sr-only">{"Availability tonight"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">
                                  <input className="srt-i srt-a0" type="radio" name="stfd044" id="stfd044-0a" aria-label="Sort by Room type, lowest or A first" />
                                  <input className="srt-i srt-d0" type="radio" name="stfd044" id="stfd044-0d" aria-label="Sort by Room type, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd044-0a">{"Room type"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd044-0d" aria-hidden="true">{"Room type"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a1" type="radio" name="stfd044" id="stfd044-1a" aria-label="Sort by Left tonight, lowest or A first" />
                                  <input className="srt-i srt-d1" type="radio" name="stfd044" id="stfd044-1d" aria-label="Sort by Left tonight, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd044-1a">{"Left tonight"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd044-1d" aria-hidden="true">{"Left tonight"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a2" type="radio" name="stfd044" id="stfd044-2a" aria-label="Sort by 1 adult, lowest or A first" />
                                  <input className="srt-i srt-d2" type="radio" name="stfd044" id="stfd044-2d" aria-label="Sort by 1 adult, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd044-2a">{"1 adult"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd044-2d" aria-hidden="true">{"1 adult"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a3" type="radio" name="stfd044" id="stfd044-3a" aria-label="Sort by 2 adults, lowest or A first" />
                                  <input className="srt-i srt-d3" type="radio" name="stfd044" id="stfd044-3d" aria-label="Sort by 2 adults, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd044-3a">{"2 adults"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd044-3d" aria-hidden="true">{"2 adults"}</label>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr style={{"--k0": "2", "--k1": "2", "--k2": "1", "--k3": "1"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"GDLX"}</strong>
                                  <span className="fd-sub">{"Garden Deluxe Room"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"10"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹7,399"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹7,999"}</td>
                              </tr>
                              <tr style={{"--k0": "3", "--k1": "3", "--k2": "2", "--k3": "2"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"PDLX"}</strong>
                                  <span className="fd-sub">{"Pool Deluxe Room"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"12"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹7,799"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹8,499"}</td>
                              </tr>
                              <tr style={{"--k0": "1", "--k1": "1", "--k2": "3", "--k3": "3"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"DLXS"}</strong>
                                  <span className="fd-sub">{"Deluxe Suite"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"0"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹13,299"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹14,500"}</td>
                              </tr>
                              <tr style={{"--k0": "4", "--k1": "1", "--k2": "4", "--k3": "4"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"PRMS"}</strong>
                                  <span className="fd-sub">{"Premium Suite"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"0"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹22,099"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹24,000"}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </section>
                    </aside>
                  </div>
                </div>
                <div className="variant v-r-204">
                  <nav className="ltabs ltabs--steps" aria-label="Walk-in steps">
                    <div className="ltabs__list">
                      <Link aria-current="page" to={"/front-desk/fd-04-walk-in-check-in"}>
                        <span className="ltabs__n">{"1"}</span>
                        {"Availability & rate"}
                      </Link>
                      <span className="is-todo">
                        <span className="ltabs__n">{"2"}</span>
                        {"Guest & booking details"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"3"}</span>
                        {"Check-in steps 2–7"}
                      </span>
                    </div>
                  </nav>
                  <div className="fd-split fd-split--wide" data-code="FD-04-1">
                    <div>
                      <form className="fd-form" action="/front-desk/fd-04-walk-in-check-in/step-2-guest.html" method="get">
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Availability and rate"}</h2>
                          <p className="fd-sec__d">{"Walk-in for tonight. Availability and restrictions are checked."}</p>
                          <div className="s-grid2">
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f51">
                                {"Nights "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f51" type="number" name="nights" required={true} min="1" max="30" defaultValue={"1"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f52">
                                {"Departure date "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="dpk">
                                <button type="button" className="dpk-f field__input" id="f52" aria-haspopup="dialog">
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
                                    <select className="dpk-m" name="dep__6-month" aria-label="Month" defaultValue={"10"}>
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
                                    <select className="dpk-y" name="dep__6-year" aria-label="Year" defaultValue={"2026"}>
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
                                      <input type="radio" name="dep__6" value="01" required={true} />
                                      {"1"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__6" value="02" />
                                      {"2"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__6" value="03" />
                                      {"3"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__6" value="04" />
                                      {"4"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__6" value="05" />
                                      {"5"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__6" value="06" />
                                      {"6"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__6" value="07" />
                                      {"7"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__6" value="08" />
                                      {"8"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__6" value="09" />
                                      {"9"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__6" value="10" />
                                      {"10"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__6" value="11" />
                                      {"11"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__6" value="12" />
                                      {"12"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__6" value="13" />
                                      {"13"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__6" value="14" />
                                      {"14"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__6" value="15" />
                                      {"15"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__6" value="16" />
                                      {"16"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__6" value="17" />
                                      {"17"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__6" value="18" />
                                      {"18"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__6" value="19" />
                                      {"19"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__6" value="20" />
                                      {"20"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__6" value="21" />
                                      {"21"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__6" value="22" />
                                      {"22"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__6" value="23" defaultChecked={true} />
                                      {"23"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__6" value="24" />
                                      {"24"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__6" value="25" />
                                      {"25"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__6" value="26" />
                                      {"26"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__6" value="27" />
                                      {"27"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__6" value="28" />
                                      {"28"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__6" value="29" />
                                      {"29"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__6" value="30" />
                                      {"30"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__6" value="31" />
                                      {"31"}
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <span className="field__hint">{"Arrival is the business date"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f53">
                                {"Adults "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f53" type="number" name="adults" required={true} min="1" max="6" defaultValue={"1"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f54">{"Children"}</label>
                              <input className="field__input num" id="f54" type="number" name="children" min="0" max="4" defaultValue={"0"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f55">
                                {"Room type "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f55" name="type" required={true} defaultValue={"GDLX"}>
                                  <option value="GDLX">{"GDLX – Garden Deluxe Room (10 left)"}</option>
                                  <option value="PDLX">{"PDLX – Pool Deluxe Room (12 left)"}</option>
                                  <option value="DLXS">{"DLXS – Deluxe Suite (sold out)"}</option>
                                  <option value="PRMS">{"PRMS – Premium Suite (sold out)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Only types available for all nights can be chosen"}</span>
                            </div>
                            <div className="field">
                              <span className="field__label">{"Room (chosen from the board)"}</span>
                              <div className="fd-display">
                                <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"204"}</span>
                                {" Vacant inspected"}
                              </div>
                              <span className="field__hint">{"From FD-06"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f57">
                                {"Rate plan "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f57" name="plan" required={true} defaultValue={"Walk-in BAR (BAR-CP)"}>
                                  <option value="Walk-in BAR (BAR-CP)">{"Walk-in BAR (BAR-CP)"}</option>
                                  <option value="BAR-EP">{"BAR-EP · room only"}</option>
                                  <option value="BAR-MAP">{"BAR-MAP · breakfast and dinner"}</option>
                                  <option value="BAR-AP">{"BAR-AP · all meals"}</option>
                                  <option value="CLUB">{"CLUB · member rate"}</option>
                                  <option value="AGENT">{"AGENT · travel agent net rate"}</option>
                                  <option value="COMP">{"COMP · complimentary"}</option>
                                  <option value="Corporate (CORP)">{"Corporate (CORP)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Walk-in / rack / company rates valid tonight"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f58">{"Meal plan"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f58" name="meal" defaultValue={"CP – breakfast included"}>
                                  <option value="EP – room only">{"EP – room only"}</option>
                                  <option value="CP – breakfast included">{"CP – breakfast included"}</option>
                                  <option value="MAP – breakfast and dinner">{"MAP – breakfast and dinner"}</option>
                                  <option value="AP – all meals">{"AP – all meals"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f59">{"Rate per night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input className="field__input num" id="f59" type="number" inputMode="decimal" name="rate" step="0.01" defaultValue={"7399.00"} />
                              </div>
                              <span className="field__hint">{"GST ₹369.95 (5 %) is added on top. Overriding the rate needs permission and a reason (FDS-22)"}</span>
                            </div>
                            <div className="field">
                              <span className="field__label">{"Total with GST"}</span>
                              <div className="fd-display">{"₹7,768.95 for 1 night (calculated)"}</div>
                            </div>
                          </div>
                        </section>
                        <div className="fd-formfoot">
                          <Link className="btn fd-spacer" data-leads-to="FD-01" to={"/front-desk/fd-01-front-desk-home"}>{"Cancel"}</Link>
                          <button className="btn btn--primary" type="submit">{"Next →"}</button>
                        </div>
                        <section className="fd-sec" data-flow="fd04-rules">
                          <h2 className="fd-sec__t">{"Stay rules and extras"}</h2>
                          <p className="field__hint">{"Minimum age of the primary guest 18 (FDS-04). Maximum 4 guests per room, 5 in the Premium Suite. Children 11 and under free with existing beds, max 2. Deposit for a walk-in: first night plus incidental deposit ₹1,000 per night."}</p>
                          <div className="s-grid3">
                            <div className="field">
                              <label className="field__label">{"Kind of stay"}</label>
                              <div className="field__wrap">
                                <select aria-label="Kind of stay" className="field__input field__input--select" defaultValue={"Overnight"}>
                                  <option>{"Overnight"}</option>
                                  <option>{"Day use (09:00–18:00)"}</option>
                                </select>
                              </div>
                              <span className="field__hint">{"Day-use window from FDS-04; posts charge code DUSE"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label">{"Add an extra"}</label>
                              <div className="field__wrap">
                                <select aria-label="Add an extra" className="field__input field__input--select" defaultValue={"No extra"}>
                                  <option>{"No extra"}</option>
                                  <option>{"Extra bed · per night"}</option>
                                  <option>{"Breakfast · per person per night"}</option>
                                  <option>{"Airport transfer (one way) · per item"}</option>
                                  <option>{"Gala dinner · per person"}</option>
                                  <option>{"Ayurveda therapy session · per person"}</option>
                                  <option>{"Seafood Grill dinner · per person"}</option>
                                  <option>{"Early check-in · per stay"}</option>
                                  <option>{"Late check-out (until 18:00) · per stay"}</option>
                                  <option>{"Celebration cake · per item"}</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </section>
                      </form>
                    </div>
                    <aside className="fd-stack fd-stack--sticky">
                      <section className="card " data-code="FD-04-avail">
                        <div className="fd-cardhead">
                          <h2 className="s-card-title">{"Availability tonight"}</h2>
                        </div>
                        <div className="s-scroll">
                          <table className="srt dt__table dt--compact dt--hug" style={{"--srt-cols": "auto auto auto auto"}} data-mc="">
                            <caption className="sr-only">{"Availability tonight"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">
                                  <input className="srt-i srt-a0" type="radio" name="stfd045" id="stfd045-0a" aria-label="Sort by Room type, lowest or A first" />
                                  <input className="srt-i srt-d0" type="radio" name="stfd045" id="stfd045-0d" aria-label="Sort by Room type, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd045-0a">{"Room type"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd045-0d" aria-hidden="true">{"Room type"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a1" type="radio" name="stfd045" id="stfd045-1a" aria-label="Sort by Left tonight, lowest or A first" />
                                  <input className="srt-i srt-d1" type="radio" name="stfd045" id="stfd045-1d" aria-label="Sort by Left tonight, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd045-1a">{"Left tonight"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd045-1d" aria-hidden="true">{"Left tonight"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a2" type="radio" name="stfd045" id="stfd045-2a" aria-label="Sort by 1 adult, lowest or A first" />
                                  <input className="srt-i srt-d2" type="radio" name="stfd045" id="stfd045-2d" aria-label="Sort by 1 adult, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd045-2a">{"1 adult"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd045-2d" aria-hidden="true">{"1 adult"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a3" type="radio" name="stfd045" id="stfd045-3a" aria-label="Sort by 2 adults, lowest or A first" />
                                  <input className="srt-i srt-d3" type="radio" name="stfd045" id="stfd045-3d" aria-label="Sort by 2 adults, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd045-3a">{"2 adults"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd045-3d" aria-hidden="true">{"2 adults"}</label>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr style={{"--k0": "2", "--k1": "2", "--k2": "1", "--k3": "1"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"GDLX"}</strong>
                                  <span className="fd-sub">{"Garden Deluxe Room"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"10"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹7,399"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹7,999"}</td>
                              </tr>
                              <tr style={{"--k0": "3", "--k1": "3", "--k2": "2", "--k3": "2"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"PDLX"}</strong>
                                  <span className="fd-sub">{"Pool Deluxe Room"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"12"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹7,799"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹8,499"}</td>
                              </tr>
                              <tr style={{"--k0": "1", "--k1": "1", "--k2": "3", "--k3": "3"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"DLXS"}</strong>
                                  <span className="fd-sub">{"Deluxe Suite"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"0"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹13,299"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹14,500"}</td>
                              </tr>
                              <tr style={{"--k0": "4", "--k1": "1", "--k2": "4", "--k3": "4"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"PRMS"}</strong>
                                  <span className="fd-sub">{"Premium Suite"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"0"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹22,099"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹24,000"}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </section>
                    </aside>
                  </div>
                </div>
                <div className="variant v-r-206">
                  <nav className="ltabs ltabs--steps" aria-label="Walk-in steps">
                    <div className="ltabs__list">
                      <Link aria-current="page" to={"/front-desk/fd-04-walk-in-check-in"}>
                        <span className="ltabs__n">{"1"}</span>
                        {"Availability & rate"}
                      </Link>
                      <span className="is-todo">
                        <span className="ltabs__n">{"2"}</span>
                        {"Guest & booking details"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"3"}</span>
                        {"Check-in steps 2–7"}
                      </span>
                    </div>
                  </nav>
                  <div className="fd-split fd-split--wide" data-code="FD-04-1">
                    <div>
                      <form className="fd-form" action="/front-desk/fd-04-walk-in-check-in/step-2-guest.html" method="get">
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Availability and rate"}</h2>
                          <p className="fd-sec__d">{"Walk-in for tonight. Availability and restrictions are checked."}</p>
                          <div className="s-grid2">
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f61">
                                {"Nights "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f61" type="number" name="nights" required={true} min="1" max="30" defaultValue={"1"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f62">
                                {"Departure date "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="dpk">
                                <button type="button" className="dpk-f field__input" id="f62" aria-haspopup="dialog">
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
                                    <select className="dpk-m" name="dep__7-month" aria-label="Month" defaultValue={"10"}>
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
                                    <select className="dpk-y" name="dep__7-year" aria-label="Year" defaultValue={"2026"}>
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
                                      <input type="radio" name="dep__7" value="01" required={true} />
                                      {"1"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__7" value="02" />
                                      {"2"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__7" value="03" />
                                      {"3"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__7" value="04" />
                                      {"4"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__7" value="05" />
                                      {"5"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__7" value="06" />
                                      {"6"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__7" value="07" />
                                      {"7"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__7" value="08" />
                                      {"8"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__7" value="09" />
                                      {"9"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__7" value="10" />
                                      {"10"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__7" value="11" />
                                      {"11"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__7" value="12" />
                                      {"12"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__7" value="13" />
                                      {"13"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__7" value="14" />
                                      {"14"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__7" value="15" />
                                      {"15"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__7" value="16" />
                                      {"16"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__7" value="17" />
                                      {"17"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__7" value="18" />
                                      {"18"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__7" value="19" />
                                      {"19"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__7" value="20" />
                                      {"20"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__7" value="21" />
                                      {"21"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__7" value="22" />
                                      {"22"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__7" value="23" defaultChecked={true} />
                                      {"23"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__7" value="24" />
                                      {"24"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__7" value="25" />
                                      {"25"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__7" value="26" />
                                      {"26"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__7" value="27" />
                                      {"27"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__7" value="28" />
                                      {"28"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__7" value="29" />
                                      {"29"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__7" value="30" />
                                      {"30"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__7" value="31" />
                                      {"31"}
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <span className="field__hint">{"Arrival is the business date"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f63">
                                {"Adults "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f63" type="number" name="adults" required={true} min="1" max="6" defaultValue={"1"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f64">{"Children"}</label>
                              <input className="field__input num" id="f64" type="number" name="children" min="0" max="4" defaultValue={"0"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f65">
                                {"Room type "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f65" name="type" required={true} defaultValue={"GDLX"}>
                                  <option value="GDLX">{"GDLX – Garden Deluxe Room (10 left)"}</option>
                                  <option value="PDLX">{"PDLX – Pool Deluxe Room (12 left)"}</option>
                                  <option value="DLXS">{"DLXS – Deluxe Suite (sold out)"}</option>
                                  <option value="PRMS">{"PRMS – Premium Suite (sold out)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Only types available for all nights can be chosen"}</span>
                            </div>
                            <div className="field">
                              <span className="field__label">{"Room (chosen from the board)"}</span>
                              <div className="fd-display">
                                <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"206"}</span>
                                {" Vacant inspected"}
                              </div>
                              <span className="field__hint">{"From FD-06"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f67">
                                {"Rate plan "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f67" name="plan" required={true} defaultValue={"Walk-in BAR (BAR-CP)"}>
                                  <option value="Walk-in BAR (BAR-CP)">{"Walk-in BAR (BAR-CP)"}</option>
                                  <option value="BAR-EP">{"BAR-EP · room only"}</option>
                                  <option value="BAR-MAP">{"BAR-MAP · breakfast and dinner"}</option>
                                  <option value="BAR-AP">{"BAR-AP · all meals"}</option>
                                  <option value="CLUB">{"CLUB · member rate"}</option>
                                  <option value="AGENT">{"AGENT · travel agent net rate"}</option>
                                  <option value="COMP">{"COMP · complimentary"}</option>
                                  <option value="Corporate (CORP)">{"Corporate (CORP)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Walk-in / rack / company rates valid tonight"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f68">{"Meal plan"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f68" name="meal" defaultValue={"CP – breakfast included"}>
                                  <option value="EP – room only">{"EP – room only"}</option>
                                  <option value="CP – breakfast included">{"CP – breakfast included"}</option>
                                  <option value="MAP – breakfast and dinner">{"MAP – breakfast and dinner"}</option>
                                  <option value="AP – all meals">{"AP – all meals"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f69">{"Rate per night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input className="field__input num" id="f69" type="number" inputMode="decimal" name="rate" step="0.01" defaultValue={"7399.00"} />
                              </div>
                              <span className="field__hint">{"GST ₹369.95 (5 %) is added on top. Overriding the rate needs permission and a reason (FDS-22)"}</span>
                            </div>
                            <div className="field">
                              <span className="field__label">{"Total with GST"}</span>
                              <div className="fd-display">{"₹7,768.95 for 1 night (calculated)"}</div>
                            </div>
                          </div>
                        </section>
                        <div className="fd-formfoot">
                          <Link className="btn fd-spacer" data-leads-to="FD-01" to={"/front-desk/fd-01-front-desk-home"}>{"Cancel"}</Link>
                          <button className="btn btn--primary" type="submit">{"Next →"}</button>
                        </div>
                        <section className="fd-sec" data-flow="fd04-rules">
                          <h2 className="fd-sec__t">{"Stay rules and extras"}</h2>
                          <p className="field__hint">{"Minimum age of the primary guest 18 (FDS-04). Maximum 4 guests per room, 5 in the Premium Suite. Children 11 and under free with existing beds, max 2. Deposit for a walk-in: first night plus incidental deposit ₹1,000 per night."}</p>
                          <div className="s-grid3">
                            <div className="field">
                              <label className="field__label">{"Kind of stay"}</label>
                              <div className="field__wrap">
                                <select aria-label="Kind of stay" className="field__input field__input--select" defaultValue={"Overnight"}>
                                  <option>{"Overnight"}</option>
                                  <option>{"Day use (09:00–18:00)"}</option>
                                </select>
                              </div>
                              <span className="field__hint">{"Day-use window from FDS-04; posts charge code DUSE"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label">{"Add an extra"}</label>
                              <div className="field__wrap">
                                <select aria-label="Add an extra" className="field__input field__input--select" defaultValue={"No extra"}>
                                  <option>{"No extra"}</option>
                                  <option>{"Extra bed · per night"}</option>
                                  <option>{"Breakfast · per person per night"}</option>
                                  <option>{"Airport transfer (one way) · per item"}</option>
                                  <option>{"Gala dinner · per person"}</option>
                                  <option>{"Ayurveda therapy session · per person"}</option>
                                  <option>{"Seafood Grill dinner · per person"}</option>
                                  <option>{"Early check-in · per stay"}</option>
                                  <option>{"Late check-out (until 18:00) · per stay"}</option>
                                  <option>{"Celebration cake · per item"}</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </section>
                      </form>
                    </div>
                    <aside className="fd-stack fd-stack--sticky">
                      <section className="card " data-code="FD-04-avail">
                        <div className="fd-cardhead">
                          <h2 className="s-card-title">{"Availability tonight"}</h2>
                        </div>
                        <div className="s-scroll">
                          <table className="srt dt__table dt--compact dt--hug" style={{"--srt-cols": "auto auto auto auto"}} data-mc="">
                            <caption className="sr-only">{"Availability tonight"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">
                                  <input className="srt-i srt-a0" type="radio" name="stfd046" id="stfd046-0a" aria-label="Sort by Room type, lowest or A first" />
                                  <input className="srt-i srt-d0" type="radio" name="stfd046" id="stfd046-0d" aria-label="Sort by Room type, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd046-0a">{"Room type"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd046-0d" aria-hidden="true">{"Room type"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a1" type="radio" name="stfd046" id="stfd046-1a" aria-label="Sort by Left tonight, lowest or A first" />
                                  <input className="srt-i srt-d1" type="radio" name="stfd046" id="stfd046-1d" aria-label="Sort by Left tonight, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd046-1a">{"Left tonight"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd046-1d" aria-hidden="true">{"Left tonight"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a2" type="radio" name="stfd046" id="stfd046-2a" aria-label="Sort by 1 adult, lowest or A first" />
                                  <input className="srt-i srt-d2" type="radio" name="stfd046" id="stfd046-2d" aria-label="Sort by 1 adult, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd046-2a">{"1 adult"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd046-2d" aria-hidden="true">{"1 adult"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a3" type="radio" name="stfd046" id="stfd046-3a" aria-label="Sort by 2 adults, lowest or A first" />
                                  <input className="srt-i srt-d3" type="radio" name="stfd046" id="stfd046-3d" aria-label="Sort by 2 adults, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd046-3a">{"2 adults"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd046-3d" aria-hidden="true">{"2 adults"}</label>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr style={{"--k0": "2", "--k1": "2", "--k2": "1", "--k3": "1"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"GDLX"}</strong>
                                  <span className="fd-sub">{"Garden Deluxe Room"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"10"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹7,399"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹7,999"}</td>
                              </tr>
                              <tr style={{"--k0": "3", "--k1": "3", "--k2": "2", "--k3": "2"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"PDLX"}</strong>
                                  <span className="fd-sub">{"Pool Deluxe Room"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"12"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹7,799"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹8,499"}</td>
                              </tr>
                              <tr style={{"--k0": "1", "--k1": "1", "--k2": "3", "--k3": "3"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"DLXS"}</strong>
                                  <span className="fd-sub">{"Deluxe Suite"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"0"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹13,299"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹14,500"}</td>
                              </tr>
                              <tr style={{"--k0": "4", "--k1": "1", "--k2": "4", "--k3": "4"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"PRMS"}</strong>
                                  <span className="fd-sub">{"Premium Suite"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"0"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹22,099"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹24,000"}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </section>
                    </aside>
                  </div>
                </div>
                <div className="variant v-r-210">
                  <nav className="ltabs ltabs--steps" aria-label="Walk-in steps">
                    <div className="ltabs__list">
                      <Link aria-current="page" to={"/front-desk/fd-04-walk-in-check-in"}>
                        <span className="ltabs__n">{"1"}</span>
                        {"Availability & rate"}
                      </Link>
                      <span className="is-todo">
                        <span className="ltabs__n">{"2"}</span>
                        {"Guest & booking details"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"3"}</span>
                        {"Check-in steps 2–7"}
                      </span>
                    </div>
                  </nav>
                  <div className="fd-split fd-split--wide" data-code="FD-04-1">
                    <div>
                      <form className="fd-form" action="/front-desk/fd-04-walk-in-check-in/step-2-guest.html" method="get">
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Availability and rate"}</h2>
                          <p className="fd-sec__d">{"Walk-in for tonight. Availability and restrictions are checked."}</p>
                          <div className="s-grid2">
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f71">
                                {"Nights "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f71" type="number" name="nights" required={true} min="1" max="30" defaultValue={"1"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f72">
                                {"Departure date "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="dpk">
                                <button type="button" className="dpk-f field__input" id="f72" aria-haspopup="dialog">
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
                                    <select className="dpk-m" name="dep__8-month" aria-label="Month" defaultValue={"10"}>
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
                                    <select className="dpk-y" name="dep__8-year" aria-label="Year" defaultValue={"2026"}>
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
                                      <input type="radio" name="dep__8" value="01" required={true} />
                                      {"1"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__8" value="02" />
                                      {"2"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__8" value="03" />
                                      {"3"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__8" value="04" />
                                      {"4"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__8" value="05" />
                                      {"5"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__8" value="06" />
                                      {"6"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__8" value="07" />
                                      {"7"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__8" value="08" />
                                      {"8"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__8" value="09" />
                                      {"9"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__8" value="10" />
                                      {"10"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__8" value="11" />
                                      {"11"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__8" value="12" />
                                      {"12"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__8" value="13" />
                                      {"13"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__8" value="14" />
                                      {"14"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__8" value="15" />
                                      {"15"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__8" value="16" />
                                      {"16"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__8" value="17" />
                                      {"17"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__8" value="18" />
                                      {"18"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__8" value="19" />
                                      {"19"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__8" value="20" />
                                      {"20"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__8" value="21" />
                                      {"21"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__8" value="22" />
                                      {"22"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__8" value="23" defaultChecked={true} />
                                      {"23"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__8" value="24" />
                                      {"24"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__8" value="25" />
                                      {"25"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__8" value="26" />
                                      {"26"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__8" value="27" />
                                      {"27"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__8" value="28" />
                                      {"28"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__8" value="29" />
                                      {"29"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__8" value="30" />
                                      {"30"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__8" value="31" />
                                      {"31"}
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <span className="field__hint">{"Arrival is the business date"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f73">
                                {"Adults "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f73" type="number" name="adults" required={true} min="1" max="6" defaultValue={"1"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f74">{"Children"}</label>
                              <input className="field__input num" id="f74" type="number" name="children" min="0" max="4" defaultValue={"0"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f75">
                                {"Room type "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f75" name="type" required={true} defaultValue={"GDLX"}>
                                  <option value="GDLX">{"GDLX – Garden Deluxe Room (10 left)"}</option>
                                  <option value="PDLX">{"PDLX – Pool Deluxe Room (12 left)"}</option>
                                  <option value="DLXS">{"DLXS – Deluxe Suite (sold out)"}</option>
                                  <option value="PRMS">{"PRMS – Premium Suite (sold out)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Only types available for all nights can be chosen"}</span>
                            </div>
                            <div className="field">
                              <span className="field__label">{"Room (chosen from the board)"}</span>
                              <div className="fd-display">
                                <span className="fd-rm fd-rm--VC" title="Vacant clean">{"210"}</span>
                                {" Vacant clean"}
                              </div>
                              <span className="field__hint">{"From FD-06"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f77">
                                {"Rate plan "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f77" name="plan" required={true} defaultValue={"Walk-in BAR (BAR-CP)"}>
                                  <option value="Walk-in BAR (BAR-CP)">{"Walk-in BAR (BAR-CP)"}</option>
                                  <option value="BAR-EP">{"BAR-EP · room only"}</option>
                                  <option value="BAR-MAP">{"BAR-MAP · breakfast and dinner"}</option>
                                  <option value="BAR-AP">{"BAR-AP · all meals"}</option>
                                  <option value="CLUB">{"CLUB · member rate"}</option>
                                  <option value="AGENT">{"AGENT · travel agent net rate"}</option>
                                  <option value="COMP">{"COMP · complimentary"}</option>
                                  <option value="Corporate (CORP)">{"Corporate (CORP)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Walk-in / rack / company rates valid tonight"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f78">{"Meal plan"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f78" name="meal" defaultValue={"CP – breakfast included"}>
                                  <option value="EP – room only">{"EP – room only"}</option>
                                  <option value="CP – breakfast included">{"CP – breakfast included"}</option>
                                  <option value="MAP – breakfast and dinner">{"MAP – breakfast and dinner"}</option>
                                  <option value="AP – all meals">{"AP – all meals"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f79">{"Rate per night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input className="field__input num" id="f79" type="number" inputMode="decimal" name="rate" step="0.01" defaultValue={"7399.00"} />
                              </div>
                              <span className="field__hint">{"GST ₹369.95 (5 %) is added on top. Overriding the rate needs permission and a reason (FDS-22)"}</span>
                            </div>
                            <div className="field">
                              <span className="field__label">{"Total with GST"}</span>
                              <div className="fd-display">{"₹7,768.95 for 1 night (calculated)"}</div>
                            </div>
                          </div>
                        </section>
                        <div className="fd-formfoot">
                          <Link className="btn fd-spacer" data-leads-to="FD-01" to={"/front-desk/fd-01-front-desk-home"}>{"Cancel"}</Link>
                          <button className="btn btn--primary" type="submit">{"Next →"}</button>
                        </div>
                        <section className="fd-sec" data-flow="fd04-rules">
                          <h2 className="fd-sec__t">{"Stay rules and extras"}</h2>
                          <p className="field__hint">{"Minimum age of the primary guest 18 (FDS-04). Maximum 4 guests per room, 5 in the Premium Suite. Children 11 and under free with existing beds, max 2. Deposit for a walk-in: first night plus incidental deposit ₹1,000 per night."}</p>
                          <div className="s-grid3">
                            <div className="field">
                              <label className="field__label">{"Kind of stay"}</label>
                              <div className="field__wrap">
                                <select aria-label="Kind of stay" className="field__input field__input--select" defaultValue={"Overnight"}>
                                  <option>{"Overnight"}</option>
                                  <option>{"Day use (09:00–18:00)"}</option>
                                </select>
                              </div>
                              <span className="field__hint">{"Day-use window from FDS-04; posts charge code DUSE"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label">{"Add an extra"}</label>
                              <div className="field__wrap">
                                <select aria-label="Add an extra" className="field__input field__input--select" defaultValue={"No extra"}>
                                  <option>{"No extra"}</option>
                                  <option>{"Extra bed · per night"}</option>
                                  <option>{"Breakfast · per person per night"}</option>
                                  <option>{"Airport transfer (one way) · per item"}</option>
                                  <option>{"Gala dinner · per person"}</option>
                                  <option>{"Ayurveda therapy session · per person"}</option>
                                  <option>{"Seafood Grill dinner · per person"}</option>
                                  <option>{"Early check-in · per stay"}</option>
                                  <option>{"Late check-out (until 18:00) · per stay"}</option>
                                  <option>{"Celebration cake · per item"}</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </section>
                      </form>
                    </div>
                    <aside className="fd-stack fd-stack--sticky">
                      <section className="card " data-code="FD-04-avail">
                        <div className="fd-cardhead">
                          <h2 className="s-card-title">{"Availability tonight"}</h2>
                        </div>
                        <div className="s-scroll">
                          <table className="srt dt__table dt--compact dt--hug" style={{"--srt-cols": "auto auto auto auto"}} data-mc="">
                            <caption className="sr-only">{"Availability tonight"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">
                                  <input className="srt-i srt-a0" type="radio" name="stfd047" id="stfd047-0a" aria-label="Sort by Room type, lowest or A first" />
                                  <input className="srt-i srt-d0" type="radio" name="stfd047" id="stfd047-0d" aria-label="Sort by Room type, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd047-0a">{"Room type"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd047-0d" aria-hidden="true">{"Room type"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a1" type="radio" name="stfd047" id="stfd047-1a" aria-label="Sort by Left tonight, lowest or A first" />
                                  <input className="srt-i srt-d1" type="radio" name="stfd047" id="stfd047-1d" aria-label="Sort by Left tonight, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd047-1a">{"Left tonight"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd047-1d" aria-hidden="true">{"Left tonight"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a2" type="radio" name="stfd047" id="stfd047-2a" aria-label="Sort by 1 adult, lowest or A first" />
                                  <input className="srt-i srt-d2" type="radio" name="stfd047" id="stfd047-2d" aria-label="Sort by 1 adult, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd047-2a">{"1 adult"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd047-2d" aria-hidden="true">{"1 adult"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a3" type="radio" name="stfd047" id="stfd047-3a" aria-label="Sort by 2 adults, lowest or A first" />
                                  <input className="srt-i srt-d3" type="radio" name="stfd047" id="stfd047-3d" aria-label="Sort by 2 adults, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd047-3a">{"2 adults"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd047-3d" aria-hidden="true">{"2 adults"}</label>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr style={{"--k0": "2", "--k1": "2", "--k2": "1", "--k3": "1"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"GDLX"}</strong>
                                  <span className="fd-sub">{"Garden Deluxe Room"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"10"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹7,399"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹7,999"}</td>
                              </tr>
                              <tr style={{"--k0": "3", "--k1": "3", "--k2": "2", "--k3": "2"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"PDLX"}</strong>
                                  <span className="fd-sub">{"Pool Deluxe Room"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"12"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹7,799"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹8,499"}</td>
                              </tr>
                              <tr style={{"--k0": "1", "--k1": "1", "--k2": "3", "--k3": "3"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"DLXS"}</strong>
                                  <span className="fd-sub">{"Deluxe Suite"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"0"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹13,299"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹14,500"}</td>
                              </tr>
                              <tr style={{"--k0": "4", "--k1": "1", "--k2": "4", "--k3": "4"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"PRMS"}</strong>
                                  <span className="fd-sub">{"Premium Suite"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"0"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹22,099"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹24,000"}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </section>
                    </aside>
                  </div>
                </div>
                <div className="variant v-r-215">
                  <nav className="ltabs ltabs--steps" aria-label="Walk-in steps">
                    <div className="ltabs__list">
                      <Link aria-current="page" to={"/front-desk/fd-04-walk-in-check-in"}>
                        <span className="ltabs__n">{"1"}</span>
                        {"Availability & rate"}
                      </Link>
                      <span className="is-todo">
                        <span className="ltabs__n">{"2"}</span>
                        {"Guest & booking details"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"3"}</span>
                        {"Check-in steps 2–7"}
                      </span>
                    </div>
                  </nav>
                  <div className="fd-split fd-split--wide" data-code="FD-04-1">
                    <div>
                      <form className="fd-form" action="/front-desk/fd-04-walk-in-check-in/step-2-guest.html" method="get">
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Availability and rate"}</h2>
                          <p className="fd-sec__d">{"Walk-in for tonight. Availability and restrictions are checked."}</p>
                          <div className="s-grid2">
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f81">
                                {"Nights "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f81" type="number" name="nights" required={true} min="1" max="30" defaultValue={"1"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f82">
                                {"Departure date "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="dpk">
                                <button type="button" className="dpk-f field__input" id="f82" aria-haspopup="dialog">
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
                                    <select className="dpk-m" name="dep__9-month" aria-label="Month" defaultValue={"10"}>
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
                                    <select className="dpk-y" name="dep__9-year" aria-label="Year" defaultValue={"2026"}>
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
                                      <input type="radio" name="dep__9" value="01" required={true} />
                                      {"1"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__9" value="02" />
                                      {"2"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__9" value="03" />
                                      {"3"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__9" value="04" />
                                      {"4"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__9" value="05" />
                                      {"5"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__9" value="06" />
                                      {"6"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__9" value="07" />
                                      {"7"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__9" value="08" />
                                      {"8"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__9" value="09" />
                                      {"9"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__9" value="10" />
                                      {"10"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__9" value="11" />
                                      {"11"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__9" value="12" />
                                      {"12"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__9" value="13" />
                                      {"13"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__9" value="14" />
                                      {"14"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__9" value="15" />
                                      {"15"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__9" value="16" />
                                      {"16"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__9" value="17" />
                                      {"17"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__9" value="18" />
                                      {"18"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__9" value="19" />
                                      {"19"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__9" value="20" />
                                      {"20"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__9" value="21" />
                                      {"21"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__9" value="22" />
                                      {"22"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__9" value="23" defaultChecked={true} />
                                      {"23"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__9" value="24" />
                                      {"24"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__9" value="25" />
                                      {"25"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__9" value="26" />
                                      {"26"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__9" value="27" />
                                      {"27"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__9" value="28" />
                                      {"28"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__9" value="29" />
                                      {"29"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__9" value="30" />
                                      {"30"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__9" value="31" />
                                      {"31"}
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <span className="field__hint">{"Arrival is the business date"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f83">
                                {"Adults "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f83" type="number" name="adults" required={true} min="1" max="6" defaultValue={"1"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f84">{"Children"}</label>
                              <input className="field__input num" id="f84" type="number" name="children" min="0" max="4" defaultValue={"0"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f85">
                                {"Room type "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f85" name="type" required={true} defaultValue={"GDLX"}>
                                  <option value="GDLX">{"GDLX – Garden Deluxe Room (10 left)"}</option>
                                  <option value="PDLX">{"PDLX – Pool Deluxe Room (12 left)"}</option>
                                  <option value="DLXS">{"DLXS – Deluxe Suite (sold out)"}</option>
                                  <option value="PRMS">{"PRMS – Premium Suite (sold out)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Only types available for all nights can be chosen"}</span>
                            </div>
                            <div className="field">
                              <span className="field__label">{"Room (chosen from the board)"}</span>
                              <div className="fd-display">
                                <span className="fd-rm fd-rm--VC" title="Vacant clean">{"215"}</span>
                                {" Vacant clean"}
                              </div>
                              <span className="field__hint">{"From FD-06"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f87">
                                {"Rate plan "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f87" name="plan" required={true} defaultValue={"Walk-in BAR (BAR-CP)"}>
                                  <option value="Walk-in BAR (BAR-CP)">{"Walk-in BAR (BAR-CP)"}</option>
                                  <option value="BAR-EP">{"BAR-EP · room only"}</option>
                                  <option value="BAR-MAP">{"BAR-MAP · breakfast and dinner"}</option>
                                  <option value="BAR-AP">{"BAR-AP · all meals"}</option>
                                  <option value="CLUB">{"CLUB · member rate"}</option>
                                  <option value="AGENT">{"AGENT · travel agent net rate"}</option>
                                  <option value="COMP">{"COMP · complimentary"}</option>
                                  <option value="Corporate (CORP)">{"Corporate (CORP)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Walk-in / rack / company rates valid tonight"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f88">{"Meal plan"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f88" name="meal" defaultValue={"CP – breakfast included"}>
                                  <option value="EP – room only">{"EP – room only"}</option>
                                  <option value="CP – breakfast included">{"CP – breakfast included"}</option>
                                  <option value="MAP – breakfast and dinner">{"MAP – breakfast and dinner"}</option>
                                  <option value="AP – all meals">{"AP – all meals"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f89">{"Rate per night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input className="field__input num" id="f89" type="number" inputMode="decimal" name="rate" step="0.01" defaultValue={"7399.00"} />
                              </div>
                              <span className="field__hint">{"GST ₹369.95 (5 %) is added on top. Overriding the rate needs permission and a reason (FDS-22)"}</span>
                            </div>
                            <div className="field">
                              <span className="field__label">{"Total with GST"}</span>
                              <div className="fd-display">{"₹7,768.95 for 1 night (calculated)"}</div>
                            </div>
                          </div>
                        </section>
                        <div className="fd-formfoot">
                          <Link className="btn fd-spacer" data-leads-to="FD-01" to={"/front-desk/fd-01-front-desk-home"}>{"Cancel"}</Link>
                          <button className="btn btn--primary" type="submit">{"Next →"}</button>
                        </div>
                        <section className="fd-sec" data-flow="fd04-rules">
                          <h2 className="fd-sec__t">{"Stay rules and extras"}</h2>
                          <p className="field__hint">{"Minimum age of the primary guest 18 (FDS-04). Maximum 4 guests per room, 5 in the Premium Suite. Children 11 and under free with existing beds, max 2. Deposit for a walk-in: first night plus incidental deposit ₹1,000 per night."}</p>
                          <div className="s-grid3">
                            <div className="field">
                              <label className="field__label">{"Kind of stay"}</label>
                              <div className="field__wrap">
                                <select aria-label="Kind of stay" className="field__input field__input--select" defaultValue={"Overnight"}>
                                  <option>{"Overnight"}</option>
                                  <option>{"Day use (09:00–18:00)"}</option>
                                </select>
                              </div>
                              <span className="field__hint">{"Day-use window from FDS-04; posts charge code DUSE"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label">{"Add an extra"}</label>
                              <div className="field__wrap">
                                <select aria-label="Add an extra" className="field__input field__input--select" defaultValue={"No extra"}>
                                  <option>{"No extra"}</option>
                                  <option>{"Extra bed · per night"}</option>
                                  <option>{"Breakfast · per person per night"}</option>
                                  <option>{"Airport transfer (one way) · per item"}</option>
                                  <option>{"Gala dinner · per person"}</option>
                                  <option>{"Ayurveda therapy session · per person"}</option>
                                  <option>{"Seafood Grill dinner · per person"}</option>
                                  <option>{"Early check-in · per stay"}</option>
                                  <option>{"Late check-out (until 18:00) · per stay"}</option>
                                  <option>{"Celebration cake · per item"}</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </section>
                      </form>
                    </div>
                    <aside className="fd-stack fd-stack--sticky">
                      <section className="card " data-code="FD-04-avail">
                        <div className="fd-cardhead">
                          <h2 className="s-card-title">{"Availability tonight"}</h2>
                        </div>
                        <div className="s-scroll">
                          <table className="srt dt__table dt--compact dt--hug" style={{"--srt-cols": "auto auto auto auto"}} data-mc="">
                            <caption className="sr-only">{"Availability tonight"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">
                                  <input className="srt-i srt-a0" type="radio" name="stfd048" id="stfd048-0a" aria-label="Sort by Room type, lowest or A first" />
                                  <input className="srt-i srt-d0" type="radio" name="stfd048" id="stfd048-0d" aria-label="Sort by Room type, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd048-0a">{"Room type"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd048-0d" aria-hidden="true">{"Room type"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a1" type="radio" name="stfd048" id="stfd048-1a" aria-label="Sort by Left tonight, lowest or A first" />
                                  <input className="srt-i srt-d1" type="radio" name="stfd048" id="stfd048-1d" aria-label="Sort by Left tonight, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd048-1a">{"Left tonight"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd048-1d" aria-hidden="true">{"Left tonight"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a2" type="radio" name="stfd048" id="stfd048-2a" aria-label="Sort by 1 adult, lowest or A first" />
                                  <input className="srt-i srt-d2" type="radio" name="stfd048" id="stfd048-2d" aria-label="Sort by 1 adult, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd048-2a">{"1 adult"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd048-2d" aria-hidden="true">{"1 adult"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a3" type="radio" name="stfd048" id="stfd048-3a" aria-label="Sort by 2 adults, lowest or A first" />
                                  <input className="srt-i srt-d3" type="radio" name="stfd048" id="stfd048-3d" aria-label="Sort by 2 adults, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd048-3a">{"2 adults"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd048-3d" aria-hidden="true">{"2 adults"}</label>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr style={{"--k0": "2", "--k1": "2", "--k2": "1", "--k3": "1"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"GDLX"}</strong>
                                  <span className="fd-sub">{"Garden Deluxe Room"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"10"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹7,399"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹7,999"}</td>
                              </tr>
                              <tr style={{"--k0": "3", "--k1": "3", "--k2": "2", "--k3": "2"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"PDLX"}</strong>
                                  <span className="fd-sub">{"Pool Deluxe Room"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"12"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹7,799"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹8,499"}</td>
                              </tr>
                              <tr style={{"--k0": "1", "--k1": "1", "--k2": "3", "--k3": "3"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"DLXS"}</strong>
                                  <span className="fd-sub">{"Deluxe Suite"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"0"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹13,299"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹14,500"}</td>
                              </tr>
                              <tr style={{"--k0": "4", "--k1": "1", "--k2": "4", "--k3": "4"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"PRMS"}</strong>
                                  <span className="fd-sub">{"Premium Suite"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"0"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹22,099"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹24,000"}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </section>
                    </aside>
                  </div>
                </div>
                <div className="variant v-r-302">
                  <nav className="ltabs ltabs--steps" aria-label="Walk-in steps">
                    <div className="ltabs__list">
                      <Link aria-current="page" to={"/front-desk/fd-04-walk-in-check-in"}>
                        <span className="ltabs__n">{"1"}</span>
                        {"Availability & rate"}
                      </Link>
                      <span className="is-todo">
                        <span className="ltabs__n">{"2"}</span>
                        {"Guest & booking details"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"3"}</span>
                        {"Check-in steps 2–7"}
                      </span>
                    </div>
                  </nav>
                  <div className="fd-split fd-split--wide" data-code="FD-04-1">
                    <div>
                      <form className="fd-form" action="/front-desk/fd-04-walk-in-check-in/step-2-guest.html" method="get">
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Availability and rate"}</h2>
                          <p className="fd-sec__d">{"Walk-in for tonight. Availability and restrictions are checked."}</p>
                          <div className="s-grid2">
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f91">
                                {"Nights "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f91" type="number" name="nights" required={true} min="1" max="30" defaultValue={"1"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f92">
                                {"Departure date "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="dpk">
                                <button type="button" className="dpk-f field__input" id="f92" aria-haspopup="dialog">
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
                                    <select className="dpk-m" name="dep__10-month" aria-label="Month" defaultValue={"10"}>
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
                                    <select className="dpk-y" name="dep__10-year" aria-label="Year" defaultValue={"2026"}>
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
                                      <input type="radio" name="dep__10" value="01" required={true} />
                                      {"1"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__10" value="02" />
                                      {"2"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__10" value="03" />
                                      {"3"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__10" value="04" />
                                      {"4"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__10" value="05" />
                                      {"5"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__10" value="06" />
                                      {"6"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__10" value="07" />
                                      {"7"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__10" value="08" />
                                      {"8"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__10" value="09" />
                                      {"9"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__10" value="10" />
                                      {"10"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__10" value="11" />
                                      {"11"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__10" value="12" />
                                      {"12"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__10" value="13" />
                                      {"13"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__10" value="14" />
                                      {"14"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__10" value="15" />
                                      {"15"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__10" value="16" />
                                      {"16"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__10" value="17" />
                                      {"17"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__10" value="18" />
                                      {"18"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__10" value="19" />
                                      {"19"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__10" value="20" />
                                      {"20"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__10" value="21" />
                                      {"21"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__10" value="22" />
                                      {"22"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__10" value="23" defaultChecked={true} />
                                      {"23"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__10" value="24" />
                                      {"24"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__10" value="25" />
                                      {"25"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__10" value="26" />
                                      {"26"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__10" value="27" />
                                      {"27"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__10" value="28" />
                                      {"28"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__10" value="29" />
                                      {"29"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__10" value="30" />
                                      {"30"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__10" value="31" />
                                      {"31"}
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <span className="field__hint">{"Arrival is the business date"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f93">
                                {"Adults "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f93" type="number" name="adults" required={true} min="1" max="6" defaultValue={"1"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f94">{"Children"}</label>
                              <input className="field__input num" id="f94" type="number" name="children" min="0" max="4" defaultValue={"0"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f95">
                                {"Room type "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f95" name="type" required={true} defaultValue={"GDLX"}>
                                  <option value="GDLX">{"GDLX – Garden Deluxe Room (10 left)"}</option>
                                  <option value="PDLX">{"PDLX – Pool Deluxe Room (12 left)"}</option>
                                  <option value="DLXS">{"DLXS – Deluxe Suite (sold out)"}</option>
                                  <option value="PRMS">{"PRMS – Premium Suite (sold out)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Only types available for all nights can be chosen"}</span>
                            </div>
                            <div className="field">
                              <span className="field__label">{"Room (chosen from the board)"}</span>
                              <div className="fd-display">
                                <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"302"}</span>
                                {" Vacant inspected"}
                              </div>
                              <span className="field__hint">{"From FD-06"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f97">
                                {"Rate plan "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f97" name="plan" required={true} defaultValue={"Walk-in BAR (BAR-CP)"}>
                                  <option value="Walk-in BAR (BAR-CP)">{"Walk-in BAR (BAR-CP)"}</option>
                                  <option value="BAR-EP">{"BAR-EP · room only"}</option>
                                  <option value="BAR-MAP">{"BAR-MAP · breakfast and dinner"}</option>
                                  <option value="BAR-AP">{"BAR-AP · all meals"}</option>
                                  <option value="CLUB">{"CLUB · member rate"}</option>
                                  <option value="AGENT">{"AGENT · travel agent net rate"}</option>
                                  <option value="COMP">{"COMP · complimentary"}</option>
                                  <option value="Corporate (CORP)">{"Corporate (CORP)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Walk-in / rack / company rates valid tonight"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f98">{"Meal plan"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f98" name="meal" defaultValue={"CP – breakfast included"}>
                                  <option value="EP – room only">{"EP – room only"}</option>
                                  <option value="CP – breakfast included">{"CP – breakfast included"}</option>
                                  <option value="MAP – breakfast and dinner">{"MAP – breakfast and dinner"}</option>
                                  <option value="AP – all meals">{"AP – all meals"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f99">{"Rate per night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input className="field__input num" id="f99" type="number" inputMode="decimal" name="rate" step="0.01" defaultValue={"7399.00"} />
                              </div>
                              <span className="field__hint">{"GST ₹369.95 (5 %) is added on top. Overriding the rate needs permission and a reason (FDS-22)"}</span>
                            </div>
                            <div className="field">
                              <span className="field__label">{"Total with GST"}</span>
                              <div className="fd-display">{"₹7,768.95 for 1 night (calculated)"}</div>
                            </div>
                          </div>
                        </section>
                        <div className="fd-formfoot">
                          <Link className="btn fd-spacer" data-leads-to="FD-01" to={"/front-desk/fd-01-front-desk-home"}>{"Cancel"}</Link>
                          <button className="btn btn--primary" type="submit">{"Next →"}</button>
                        </div>
                        <section className="fd-sec" data-flow="fd04-rules">
                          <h2 className="fd-sec__t">{"Stay rules and extras"}</h2>
                          <p className="field__hint">{"Minimum age of the primary guest 18 (FDS-04). Maximum 4 guests per room, 5 in the Premium Suite. Children 11 and under free with existing beds, max 2. Deposit for a walk-in: first night plus incidental deposit ₹1,000 per night."}</p>
                          <div className="s-grid3">
                            <div className="field">
                              <label className="field__label">{"Kind of stay"}</label>
                              <div className="field__wrap">
                                <select aria-label="Kind of stay" className="field__input field__input--select" defaultValue={"Overnight"}>
                                  <option>{"Overnight"}</option>
                                  <option>{"Day use (09:00–18:00)"}</option>
                                </select>
                              </div>
                              <span className="field__hint">{"Day-use window from FDS-04; posts charge code DUSE"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label">{"Add an extra"}</label>
                              <div className="field__wrap">
                                <select aria-label="Add an extra" className="field__input field__input--select" defaultValue={"No extra"}>
                                  <option>{"No extra"}</option>
                                  <option>{"Extra bed · per night"}</option>
                                  <option>{"Breakfast · per person per night"}</option>
                                  <option>{"Airport transfer (one way) · per item"}</option>
                                  <option>{"Gala dinner · per person"}</option>
                                  <option>{"Ayurveda therapy session · per person"}</option>
                                  <option>{"Seafood Grill dinner · per person"}</option>
                                  <option>{"Early check-in · per stay"}</option>
                                  <option>{"Late check-out (until 18:00) · per stay"}</option>
                                  <option>{"Celebration cake · per item"}</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </section>
                      </form>
                    </div>
                    <aside className="fd-stack fd-stack--sticky">
                      <section className="card " data-code="FD-04-avail">
                        <div className="fd-cardhead">
                          <h2 className="s-card-title">{"Availability tonight"}</h2>
                        </div>
                        <div className="s-scroll">
                          <table className="srt dt__table dt--compact dt--hug" style={{"--srt-cols": "auto auto auto auto"}} data-mc="">
                            <caption className="sr-only">{"Availability tonight"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">
                                  <input className="srt-i srt-a0" type="radio" name="stfd049" id="stfd049-0a" aria-label="Sort by Room type, lowest or A first" />
                                  <input className="srt-i srt-d0" type="radio" name="stfd049" id="stfd049-0d" aria-label="Sort by Room type, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd049-0a">{"Room type"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd049-0d" aria-hidden="true">{"Room type"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a1" type="radio" name="stfd049" id="stfd049-1a" aria-label="Sort by Left tonight, lowest or A first" />
                                  <input className="srt-i srt-d1" type="radio" name="stfd049" id="stfd049-1d" aria-label="Sort by Left tonight, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd049-1a">{"Left tonight"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd049-1d" aria-hidden="true">{"Left tonight"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a2" type="radio" name="stfd049" id="stfd049-2a" aria-label="Sort by 1 adult, lowest or A first" />
                                  <input className="srt-i srt-d2" type="radio" name="stfd049" id="stfd049-2d" aria-label="Sort by 1 adult, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd049-2a">{"1 adult"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd049-2d" aria-hidden="true">{"1 adult"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a3" type="radio" name="stfd049" id="stfd049-3a" aria-label="Sort by 2 adults, lowest or A first" />
                                  <input className="srt-i srt-d3" type="radio" name="stfd049" id="stfd049-3d" aria-label="Sort by 2 adults, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd049-3a">{"2 adults"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd049-3d" aria-hidden="true">{"2 adults"}</label>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr style={{"--k0": "2", "--k1": "2", "--k2": "1", "--k3": "1"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"GDLX"}</strong>
                                  <span className="fd-sub">{"Garden Deluxe Room"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"10"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹7,399"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹7,999"}</td>
                              </tr>
                              <tr style={{"--k0": "3", "--k1": "3", "--k2": "2", "--k3": "2"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"PDLX"}</strong>
                                  <span className="fd-sub">{"Pool Deluxe Room"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"12"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹7,799"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹8,499"}</td>
                              </tr>
                              <tr style={{"--k0": "1", "--k1": "1", "--k2": "3", "--k3": "3"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"DLXS"}</strong>
                                  <span className="fd-sub">{"Deluxe Suite"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"0"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹13,299"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹14,500"}</td>
                              </tr>
                              <tr style={{"--k0": "4", "--k1": "1", "--k2": "4", "--k3": "4"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"PRMS"}</strong>
                                  <span className="fd-sub">{"Premium Suite"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"0"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹22,099"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹24,000"}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </section>
                    </aside>
                  </div>
                </div>
                <div className="variant v-r-307">
                  <nav className="ltabs ltabs--steps" aria-label="Walk-in steps">
                    <div className="ltabs__list">
                      <Link aria-current="page" to={"/front-desk/fd-04-walk-in-check-in"}>
                        <span className="ltabs__n">{"1"}</span>
                        {"Availability & rate"}
                      </Link>
                      <span className="is-todo">
                        <span className="ltabs__n">{"2"}</span>
                        {"Guest & booking details"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"3"}</span>
                        {"Check-in steps 2–7"}
                      </span>
                    </div>
                  </nav>
                  <div className="fd-split fd-split--wide" data-code="FD-04-1">
                    <div>
                      <form className="fd-form" action="/front-desk/fd-04-walk-in-check-in/step-2-guest.html" method="get">
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Availability and rate"}</h2>
                          <p className="fd-sec__d">{"Walk-in for tonight. Availability and restrictions are checked."}</p>
                          <div className="s-grid2">
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f101">
                                {"Nights "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f101" type="number" name="nights" required={true} min="1" max="30" defaultValue={"1"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f102">
                                {"Departure date "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="dpk">
                                <button type="button" className="dpk-f field__input" id="f102" aria-haspopup="dialog">
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
                                    <select className="dpk-m" name="dep__11-month" aria-label="Month" defaultValue={"10"}>
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
                                    <select className="dpk-y" name="dep__11-year" aria-label="Year" defaultValue={"2026"}>
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
                                      <input type="radio" name="dep__11" value="01" required={true} />
                                      {"1"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__11" value="02" />
                                      {"2"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__11" value="03" />
                                      {"3"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__11" value="04" />
                                      {"4"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__11" value="05" />
                                      {"5"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__11" value="06" />
                                      {"6"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__11" value="07" />
                                      {"7"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__11" value="08" />
                                      {"8"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__11" value="09" />
                                      {"9"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__11" value="10" />
                                      {"10"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__11" value="11" />
                                      {"11"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__11" value="12" />
                                      {"12"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__11" value="13" />
                                      {"13"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__11" value="14" />
                                      {"14"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__11" value="15" />
                                      {"15"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__11" value="16" />
                                      {"16"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__11" value="17" />
                                      {"17"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__11" value="18" />
                                      {"18"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__11" value="19" />
                                      {"19"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__11" value="20" />
                                      {"20"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__11" value="21" />
                                      {"21"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__11" value="22" />
                                      {"22"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__11" value="23" defaultChecked={true} />
                                      {"23"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__11" value="24" />
                                      {"24"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__11" value="25" />
                                      {"25"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__11" value="26" />
                                      {"26"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__11" value="27" />
                                      {"27"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__11" value="28" />
                                      {"28"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__11" value="29" />
                                      {"29"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__11" value="30" />
                                      {"30"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__11" value="31" />
                                      {"31"}
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <span className="field__hint">{"Arrival is the business date"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f103">
                                {"Adults "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f103" type="number" name="adults" required={true} min="1" max="6" defaultValue={"1"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f104">{"Children"}</label>
                              <input className="field__input num" id="f104" type="number" name="children" min="0" max="4" defaultValue={"0"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f105">
                                {"Room type "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f105" name="type" required={true} defaultValue={"GDLX"}>
                                  <option value="GDLX">{"GDLX – Garden Deluxe Room (10 left)"}</option>
                                  <option value="PDLX">{"PDLX – Pool Deluxe Room (12 left)"}</option>
                                  <option value="DLXS">{"DLXS – Deluxe Suite (sold out)"}</option>
                                  <option value="PRMS">{"PRMS – Premium Suite (sold out)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Only types available for all nights can be chosen"}</span>
                            </div>
                            <div className="field">
                              <span className="field__label">{"Room (chosen from the board)"}</span>
                              <div className="fd-display">
                                <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"307"}</span>
                                {" Vacant inspected"}
                              </div>
                              <span className="field__hint">{"From FD-06"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f107">
                                {"Rate plan "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f107" name="plan" required={true} defaultValue={"Walk-in BAR (BAR-CP)"}>
                                  <option value="Walk-in BAR (BAR-CP)">{"Walk-in BAR (BAR-CP)"}</option>
                                  <option value="BAR-EP">{"BAR-EP · room only"}</option>
                                  <option value="BAR-MAP">{"BAR-MAP · breakfast and dinner"}</option>
                                  <option value="BAR-AP">{"BAR-AP · all meals"}</option>
                                  <option value="CLUB">{"CLUB · member rate"}</option>
                                  <option value="AGENT">{"AGENT · travel agent net rate"}</option>
                                  <option value="COMP">{"COMP · complimentary"}</option>
                                  <option value="Corporate (CORP)">{"Corporate (CORP)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Walk-in / rack / company rates valid tonight"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f108">{"Meal plan"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f108" name="meal" defaultValue={"CP – breakfast included"}>
                                  <option value="EP – room only">{"EP – room only"}</option>
                                  <option value="CP – breakfast included">{"CP – breakfast included"}</option>
                                  <option value="MAP – breakfast and dinner">{"MAP – breakfast and dinner"}</option>
                                  <option value="AP – all meals">{"AP – all meals"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f109">{"Rate per night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input className="field__input num" id="f109" type="number" inputMode="decimal" name="rate" step="0.01" defaultValue={"7399.00"} />
                              </div>
                              <span className="field__hint">{"GST ₹369.95 (5 %) is added on top. Overriding the rate needs permission and a reason (FDS-22)"}</span>
                            </div>
                            <div className="field">
                              <span className="field__label">{"Total with GST"}</span>
                              <div className="fd-display">{"₹7,768.95 for 1 night (calculated)"}</div>
                            </div>
                          </div>
                        </section>
                        <div className="fd-formfoot">
                          <Link className="btn fd-spacer" data-leads-to="FD-01" to={"/front-desk/fd-01-front-desk-home"}>{"Cancel"}</Link>
                          <button className="btn btn--primary" type="submit">{"Next →"}</button>
                        </div>
                        <section className="fd-sec" data-flow="fd04-rules">
                          <h2 className="fd-sec__t">{"Stay rules and extras"}</h2>
                          <p className="field__hint">{"Minimum age of the primary guest 18 (FDS-04). Maximum 4 guests per room, 5 in the Premium Suite. Children 11 and under free with existing beds, max 2. Deposit for a walk-in: first night plus incidental deposit ₹1,000 per night."}</p>
                          <div className="s-grid3">
                            <div className="field">
                              <label className="field__label">{"Kind of stay"}</label>
                              <div className="field__wrap">
                                <select aria-label="Kind of stay" className="field__input field__input--select" defaultValue={"Overnight"}>
                                  <option>{"Overnight"}</option>
                                  <option>{"Day use (09:00–18:00)"}</option>
                                </select>
                              </div>
                              <span className="field__hint">{"Day-use window from FDS-04; posts charge code DUSE"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label">{"Add an extra"}</label>
                              <div className="field__wrap">
                                <select aria-label="Add an extra" className="field__input field__input--select" defaultValue={"No extra"}>
                                  <option>{"No extra"}</option>
                                  <option>{"Extra bed · per night"}</option>
                                  <option>{"Breakfast · per person per night"}</option>
                                  <option>{"Airport transfer (one way) · per item"}</option>
                                  <option>{"Gala dinner · per person"}</option>
                                  <option>{"Ayurveda therapy session · per person"}</option>
                                  <option>{"Seafood Grill dinner · per person"}</option>
                                  <option>{"Early check-in · per stay"}</option>
                                  <option>{"Late check-out (until 18:00) · per stay"}</option>
                                  <option>{"Celebration cake · per item"}</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </section>
                      </form>
                    </div>
                    <aside className="fd-stack fd-stack--sticky">
                      <section className="card " data-code="FD-04-avail">
                        <div className="fd-cardhead">
                          <h2 className="s-card-title">{"Availability tonight"}</h2>
                        </div>
                        <div className="s-scroll">
                          <table className="srt dt__table dt--compact dt--hug" style={{"--srt-cols": "auto auto auto auto"}} data-mc="">
                            <caption className="sr-only">{"Availability tonight"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">
                                  <input className="srt-i srt-a0" type="radio" name="stfd0410" id="stfd0410-0a" aria-label="Sort by Room type, lowest or A first" />
                                  <input className="srt-i srt-d0" type="radio" name="stfd0410" id="stfd0410-0d" aria-label="Sort by Room type, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd0410-0a">{"Room type"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd0410-0d" aria-hidden="true">{"Room type"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a1" type="radio" name="stfd0410" id="stfd0410-1a" aria-label="Sort by Left tonight, lowest or A first" />
                                  <input className="srt-i srt-d1" type="radio" name="stfd0410" id="stfd0410-1d" aria-label="Sort by Left tonight, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd0410-1a">{"Left tonight"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd0410-1d" aria-hidden="true">{"Left tonight"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a2" type="radio" name="stfd0410" id="stfd0410-2a" aria-label="Sort by 1 adult, lowest or A first" />
                                  <input className="srt-i srt-d2" type="radio" name="stfd0410" id="stfd0410-2d" aria-label="Sort by 1 adult, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd0410-2a">{"1 adult"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd0410-2d" aria-hidden="true">{"1 adult"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a3" type="radio" name="stfd0410" id="stfd0410-3a" aria-label="Sort by 2 adults, lowest or A first" />
                                  <input className="srt-i srt-d3" type="radio" name="stfd0410" id="stfd0410-3d" aria-label="Sort by 2 adults, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd0410-3a">{"2 adults"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd0410-3d" aria-hidden="true">{"2 adults"}</label>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr style={{"--k0": "2", "--k1": "2", "--k2": "1", "--k3": "1"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"GDLX"}</strong>
                                  <span className="fd-sub">{"Garden Deluxe Room"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"10"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹7,399"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹7,999"}</td>
                              </tr>
                              <tr style={{"--k0": "3", "--k1": "3", "--k2": "2", "--k3": "2"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"PDLX"}</strong>
                                  <span className="fd-sub">{"Pool Deluxe Room"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"12"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹7,799"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹8,499"}</td>
                              </tr>
                              <tr style={{"--k0": "1", "--k1": "1", "--k2": "3", "--k3": "3"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"DLXS"}</strong>
                                  <span className="fd-sub">{"Deluxe Suite"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"0"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹13,299"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹14,500"}</td>
                              </tr>
                              <tr style={{"--k0": "4", "--k1": "1", "--k2": "4", "--k3": "4"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"PRMS"}</strong>
                                  <span className="fd-sub">{"Premium Suite"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"0"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹22,099"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹24,000"}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </section>
                    </aside>
                  </div>
                </div>
                <div className="variant v-r-311">
                  <nav className="ltabs ltabs--steps" aria-label="Walk-in steps">
                    <div className="ltabs__list">
                      <Link aria-current="page" to={"/front-desk/fd-04-walk-in-check-in"}>
                        <span className="ltabs__n">{"1"}</span>
                        {"Availability & rate"}
                      </Link>
                      <span className="is-todo">
                        <span className="ltabs__n">{"2"}</span>
                        {"Guest & booking details"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"3"}</span>
                        {"Check-in steps 2–7"}
                      </span>
                    </div>
                  </nav>
                  <div className="fd-split fd-split--wide" data-code="FD-04-1">
                    <div>
                      <form className="fd-form" action="/front-desk/fd-04-walk-in-check-in/step-2-guest.html" method="get">
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Availability and rate"}</h2>
                          <p className="fd-sec__d">{"Walk-in for tonight. Availability and restrictions are checked."}</p>
                          <div className="s-grid2">
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f111">
                                {"Nights "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f111" type="number" name="nights" required={true} min="1" max="30" defaultValue={"1"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f112">
                                {"Departure date "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="dpk">
                                <button type="button" className="dpk-f field__input" id="f112" aria-haspopup="dialog">
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
                                    <select className="dpk-m" name="dep__12-month" aria-label="Month" defaultValue={"10"}>
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
                                    <select className="dpk-y" name="dep__12-year" aria-label="Year" defaultValue={"2026"}>
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
                                      <input type="radio" name="dep__12" value="01" required={true} />
                                      {"1"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__12" value="02" />
                                      {"2"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__12" value="03" />
                                      {"3"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__12" value="04" />
                                      {"4"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__12" value="05" />
                                      {"5"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__12" value="06" />
                                      {"6"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__12" value="07" />
                                      {"7"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__12" value="08" />
                                      {"8"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__12" value="09" />
                                      {"9"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__12" value="10" />
                                      {"10"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__12" value="11" />
                                      {"11"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__12" value="12" />
                                      {"12"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__12" value="13" />
                                      {"13"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__12" value="14" />
                                      {"14"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__12" value="15" />
                                      {"15"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__12" value="16" />
                                      {"16"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__12" value="17" />
                                      {"17"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__12" value="18" />
                                      {"18"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__12" value="19" />
                                      {"19"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__12" value="20" />
                                      {"20"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__12" value="21" />
                                      {"21"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__12" value="22" />
                                      {"22"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__12" value="23" defaultChecked={true} />
                                      {"23"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__12" value="24" />
                                      {"24"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__12" value="25" />
                                      {"25"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__12" value="26" />
                                      {"26"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__12" value="27" />
                                      {"27"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__12" value="28" />
                                      {"28"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__12" value="29" />
                                      {"29"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__12" value="30" />
                                      {"30"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__12" value="31" />
                                      {"31"}
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <span className="field__hint">{"Arrival is the business date"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f113">
                                {"Adults "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f113" type="number" name="adults" required={true} min="1" max="6" defaultValue={"1"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f114">{"Children"}</label>
                              <input className="field__input num" id="f114" type="number" name="children" min="0" max="4" defaultValue={"0"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f115">
                                {"Room type "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f115" name="type" required={true} defaultValue={"PDLX"}>
                                  <option value="GDLX">{"GDLX – Garden Deluxe Room (10 left)"}</option>
                                  <option value="PDLX">{"PDLX – Pool Deluxe Room (12 left)"}</option>
                                  <option value="DLXS">{"DLXS – Deluxe Suite (sold out)"}</option>
                                  <option value="PRMS">{"PRMS – Premium Suite (sold out)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Only types available for all nights can be chosen"}</span>
                            </div>
                            <div className="field">
                              <span className="field__label">{"Room (chosen from the board)"}</span>
                              <div className="fd-display">
                                <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"311"}</span>
                                {" Vacant inspected"}
                              </div>
                              <span className="field__hint">{"From FD-06"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f117">
                                {"Rate plan "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f117" name="plan" required={true} defaultValue={"Walk-in BAR (BAR-CP)"}>
                                  <option value="Walk-in BAR (BAR-CP)">{"Walk-in BAR (BAR-CP)"}</option>
                                  <option value="BAR-EP">{"BAR-EP · room only"}</option>
                                  <option value="BAR-MAP">{"BAR-MAP · breakfast and dinner"}</option>
                                  <option value="BAR-AP">{"BAR-AP · all meals"}</option>
                                  <option value="CLUB">{"CLUB · member rate"}</option>
                                  <option value="AGENT">{"AGENT · travel agent net rate"}</option>
                                  <option value="COMP">{"COMP · complimentary"}</option>
                                  <option value="Corporate (CORP)">{"Corporate (CORP)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Walk-in / rack / company rates valid tonight"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f118">{"Meal plan"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f118" name="meal" defaultValue={"CP – breakfast included"}>
                                  <option value="EP – room only">{"EP – room only"}</option>
                                  <option value="CP – breakfast included">{"CP – breakfast included"}</option>
                                  <option value="MAP – breakfast and dinner">{"MAP – breakfast and dinner"}</option>
                                  <option value="AP – all meals">{"AP – all meals"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f119">{"Rate per night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input className="field__input num" id="f119" type="number" inputMode="decimal" name="rate" step="0.01" defaultValue={"7799.00"} />
                              </div>
                              <span className="field__hint">{"GST ₹1,403.82 (18 %) is added on top. Overriding the rate needs permission and a reason (FDS-22)"}</span>
                            </div>
                            <div className="field">
                              <span className="field__label">{"Total with GST"}</span>
                              <div className="fd-display">{"₹9,202.82 for 1 night (calculated)"}</div>
                            </div>
                          </div>
                        </section>
                        <div className="fd-formfoot">
                          <Link className="btn fd-spacer" data-leads-to="FD-01" to={"/front-desk/fd-01-front-desk-home"}>{"Cancel"}</Link>
                          <button className="btn btn--primary" type="submit">{"Next →"}</button>
                        </div>
                        <section className="fd-sec" data-flow="fd04-rules">
                          <h2 className="fd-sec__t">{"Stay rules and extras"}</h2>
                          <p className="field__hint">{"Minimum age of the primary guest 18 (FDS-04). Maximum 4 guests per room, 5 in the Premium Suite. Children 11 and under free with existing beds, max 2. Deposit for a walk-in: first night plus incidental deposit ₹1,000 per night."}</p>
                          <div className="s-grid3">
                            <div className="field">
                              <label className="field__label">{"Kind of stay"}</label>
                              <div className="field__wrap">
                                <select aria-label="Kind of stay" className="field__input field__input--select" defaultValue={"Overnight"}>
                                  <option>{"Overnight"}</option>
                                  <option>{"Day use (09:00–18:00)"}</option>
                                </select>
                              </div>
                              <span className="field__hint">{"Day-use window from FDS-04; posts charge code DUSE"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label">{"Add an extra"}</label>
                              <div className="field__wrap">
                                <select aria-label="Add an extra" className="field__input field__input--select" defaultValue={"No extra"}>
                                  <option>{"No extra"}</option>
                                  <option>{"Extra bed · per night"}</option>
                                  <option>{"Breakfast · per person per night"}</option>
                                  <option>{"Airport transfer (one way) · per item"}</option>
                                  <option>{"Gala dinner · per person"}</option>
                                  <option>{"Ayurveda therapy session · per person"}</option>
                                  <option>{"Seafood Grill dinner · per person"}</option>
                                  <option>{"Early check-in · per stay"}</option>
                                  <option>{"Late check-out (until 18:00) · per stay"}</option>
                                  <option>{"Celebration cake · per item"}</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </section>
                      </form>
                    </div>
                    <aside className="fd-stack fd-stack--sticky">
                      <section className="card " data-code="FD-04-avail">
                        <div className="fd-cardhead">
                          <h2 className="s-card-title">{"Availability tonight"}</h2>
                        </div>
                        <div className="s-scroll">
                          <table className="srt dt__table dt--compact dt--hug" style={{"--srt-cols": "auto auto auto auto"}} data-mc="">
                            <caption className="sr-only">{"Availability tonight"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">
                                  <input className="srt-i srt-a0" type="radio" name="stfd0411" id="stfd0411-0a" aria-label="Sort by Room type, lowest or A first" />
                                  <input className="srt-i srt-d0" type="radio" name="stfd0411" id="stfd0411-0d" aria-label="Sort by Room type, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd0411-0a">{"Room type"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd0411-0d" aria-hidden="true">{"Room type"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a1" type="radio" name="stfd0411" id="stfd0411-1a" aria-label="Sort by Left tonight, lowest or A first" />
                                  <input className="srt-i srt-d1" type="radio" name="stfd0411" id="stfd0411-1d" aria-label="Sort by Left tonight, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd0411-1a">{"Left tonight"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd0411-1d" aria-hidden="true">{"Left tonight"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a2" type="radio" name="stfd0411" id="stfd0411-2a" aria-label="Sort by 1 adult, lowest or A first" />
                                  <input className="srt-i srt-d2" type="radio" name="stfd0411" id="stfd0411-2d" aria-label="Sort by 1 adult, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd0411-2a">{"1 adult"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd0411-2d" aria-hidden="true">{"1 adult"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a3" type="radio" name="stfd0411" id="stfd0411-3a" aria-label="Sort by 2 adults, lowest or A first" />
                                  <input className="srt-i srt-d3" type="radio" name="stfd0411" id="stfd0411-3d" aria-label="Sort by 2 adults, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd0411-3a">{"2 adults"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd0411-3d" aria-hidden="true">{"2 adults"}</label>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr style={{"--k0": "2", "--k1": "2", "--k2": "1", "--k3": "1"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"GDLX"}</strong>
                                  <span className="fd-sub">{"Garden Deluxe Room"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"10"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹7,399"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹7,999"}</td>
                              </tr>
                              <tr style={{"--k0": "3", "--k1": "3", "--k2": "2", "--k3": "2"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"PDLX"}</strong>
                                  <span className="fd-sub">{"Pool Deluxe Room"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"12"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹7,799"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹8,499"}</td>
                              </tr>
                              <tr style={{"--k0": "1", "--k1": "1", "--k2": "3", "--k3": "3"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"DLXS"}</strong>
                                  <span className="fd-sub">{"Deluxe Suite"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"0"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹13,299"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹14,500"}</td>
                              </tr>
                              <tr style={{"--k0": "4", "--k1": "1", "--k2": "4", "--k3": "4"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"PRMS"}</strong>
                                  <span className="fd-sub">{"Premium Suite"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"0"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹22,099"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹24,000"}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </section>
                    </aside>
                  </div>
                </div>
                <div className="variant v-r-312">
                  <nav className="ltabs ltabs--steps" aria-label="Walk-in steps">
                    <div className="ltabs__list">
                      <Link aria-current="page" to={"/front-desk/fd-04-walk-in-check-in"}>
                        <span className="ltabs__n">{"1"}</span>
                        {"Availability & rate"}
                      </Link>
                      <span className="is-todo">
                        <span className="ltabs__n">{"2"}</span>
                        {"Guest & booking details"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"3"}</span>
                        {"Check-in steps 2–7"}
                      </span>
                    </div>
                  </nav>
                  <div className="fd-split fd-split--wide" data-code="FD-04-1">
                    <div>
                      <form className="fd-form" action="/front-desk/fd-04-walk-in-check-in/step-2-guest.html" method="get">
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Availability and rate"}</h2>
                          <p className="fd-sec__d">{"Walk-in for tonight. Availability and restrictions are checked."}</p>
                          <div className="s-grid2">
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f121">
                                {"Nights "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f121" type="number" name="nights" required={true} min="1" max="30" defaultValue={"1"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f122">
                                {"Departure date "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="dpk">
                                <button type="button" className="dpk-f field__input" id="f122" aria-haspopup="dialog">
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
                                    <select className="dpk-m" name="dep__13-month" aria-label="Month" defaultValue={"10"}>
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
                                    <select className="dpk-y" name="dep__13-year" aria-label="Year" defaultValue={"2026"}>
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
                                      <input type="radio" name="dep__13" value="01" required={true} />
                                      {"1"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__13" value="02" />
                                      {"2"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__13" value="03" />
                                      {"3"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__13" value="04" />
                                      {"4"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__13" value="05" />
                                      {"5"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__13" value="06" />
                                      {"6"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__13" value="07" />
                                      {"7"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__13" value="08" />
                                      {"8"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__13" value="09" />
                                      {"9"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__13" value="10" />
                                      {"10"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__13" value="11" />
                                      {"11"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__13" value="12" />
                                      {"12"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__13" value="13" />
                                      {"13"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__13" value="14" />
                                      {"14"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__13" value="15" />
                                      {"15"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__13" value="16" />
                                      {"16"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__13" value="17" />
                                      {"17"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__13" value="18" />
                                      {"18"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__13" value="19" />
                                      {"19"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__13" value="20" />
                                      {"20"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__13" value="21" />
                                      {"21"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__13" value="22" />
                                      {"22"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__13" value="23" defaultChecked={true} />
                                      {"23"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__13" value="24" />
                                      {"24"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__13" value="25" />
                                      {"25"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__13" value="26" />
                                      {"26"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__13" value="27" />
                                      {"27"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__13" value="28" />
                                      {"28"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__13" value="29" />
                                      {"29"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__13" value="30" />
                                      {"30"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__13" value="31" />
                                      {"31"}
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <span className="field__hint">{"Arrival is the business date"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f123">
                                {"Adults "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f123" type="number" name="adults" required={true} min="1" max="6" defaultValue={"1"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f124">{"Children"}</label>
                              <input className="field__input num" id="f124" type="number" name="children" min="0" max="4" defaultValue={"0"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f125">
                                {"Room type "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f125" name="type" required={true} defaultValue={"PDLX"}>
                                  <option value="GDLX">{"GDLX – Garden Deluxe Room (10 left)"}</option>
                                  <option value="PDLX">{"PDLX – Pool Deluxe Room (12 left)"}</option>
                                  <option value="DLXS">{"DLXS – Deluxe Suite (sold out)"}</option>
                                  <option value="PRMS">{"PRMS – Premium Suite (sold out)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Only types available for all nights can be chosen"}</span>
                            </div>
                            <div className="field">
                              <span className="field__label">{"Room (chosen from the board)"}</span>
                              <div className="fd-display">
                                <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"312"}</span>
                                {" Vacant inspected"}
                              </div>
                              <span className="field__hint">{"From FD-06"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f127">
                                {"Rate plan "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f127" name="plan" required={true} defaultValue={"Walk-in BAR (BAR-CP)"}>
                                  <option value="Walk-in BAR (BAR-CP)">{"Walk-in BAR (BAR-CP)"}</option>
                                  <option value="BAR-EP">{"BAR-EP · room only"}</option>
                                  <option value="BAR-MAP">{"BAR-MAP · breakfast and dinner"}</option>
                                  <option value="BAR-AP">{"BAR-AP · all meals"}</option>
                                  <option value="CLUB">{"CLUB · member rate"}</option>
                                  <option value="AGENT">{"AGENT · travel agent net rate"}</option>
                                  <option value="COMP">{"COMP · complimentary"}</option>
                                  <option value="Corporate (CORP)">{"Corporate (CORP)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Walk-in / rack / company rates valid tonight"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f128">{"Meal plan"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f128" name="meal" defaultValue={"CP – breakfast included"}>
                                  <option value="EP – room only">{"EP – room only"}</option>
                                  <option value="CP – breakfast included">{"CP – breakfast included"}</option>
                                  <option value="MAP – breakfast and dinner">{"MAP – breakfast and dinner"}</option>
                                  <option value="AP – all meals">{"AP – all meals"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f129">{"Rate per night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input className="field__input num" id="f129" type="number" inputMode="decimal" name="rate" step="0.01" defaultValue={"7799.00"} />
                              </div>
                              <span className="field__hint">{"GST ₹1,403.82 (18 %) is added on top. Overriding the rate needs permission and a reason (FDS-22)"}</span>
                            </div>
                            <div className="field">
                              <span className="field__label">{"Total with GST"}</span>
                              <div className="fd-display">{"₹9,202.82 for 1 night (calculated)"}</div>
                            </div>
                          </div>
                        </section>
                        <div className="fd-formfoot">
                          <Link className="btn fd-spacer" data-leads-to="FD-01" to={"/front-desk/fd-01-front-desk-home"}>{"Cancel"}</Link>
                          <button className="btn btn--primary" type="submit">{"Next →"}</button>
                        </div>
                        <section className="fd-sec" data-flow="fd04-rules">
                          <h2 className="fd-sec__t">{"Stay rules and extras"}</h2>
                          <p className="field__hint">{"Minimum age of the primary guest 18 (FDS-04). Maximum 4 guests per room, 5 in the Premium Suite. Children 11 and under free with existing beds, max 2. Deposit for a walk-in: first night plus incidental deposit ₹1,000 per night."}</p>
                          <div className="s-grid3">
                            <div className="field">
                              <label className="field__label">{"Kind of stay"}</label>
                              <div className="field__wrap">
                                <select aria-label="Kind of stay" className="field__input field__input--select" defaultValue={"Overnight"}>
                                  <option>{"Overnight"}</option>
                                  <option>{"Day use (09:00–18:00)"}</option>
                                </select>
                              </div>
                              <span className="field__hint">{"Day-use window from FDS-04; posts charge code DUSE"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label">{"Add an extra"}</label>
                              <div className="field__wrap">
                                <select aria-label="Add an extra" className="field__input field__input--select" defaultValue={"No extra"}>
                                  <option>{"No extra"}</option>
                                  <option>{"Extra bed · per night"}</option>
                                  <option>{"Breakfast · per person per night"}</option>
                                  <option>{"Airport transfer (one way) · per item"}</option>
                                  <option>{"Gala dinner · per person"}</option>
                                  <option>{"Ayurveda therapy session · per person"}</option>
                                  <option>{"Seafood Grill dinner · per person"}</option>
                                  <option>{"Early check-in · per stay"}</option>
                                  <option>{"Late check-out (until 18:00) · per stay"}</option>
                                  <option>{"Celebration cake · per item"}</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </section>
                      </form>
                    </div>
                    <aside className="fd-stack fd-stack--sticky">
                      <section className="card " data-code="FD-04-avail">
                        <div className="fd-cardhead">
                          <h2 className="s-card-title">{"Availability tonight"}</h2>
                        </div>
                        <div className="s-scroll">
                          <table className="srt dt__table dt--compact dt--hug" style={{"--srt-cols": "auto auto auto auto"}} data-mc="">
                            <caption className="sr-only">{"Availability tonight"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">
                                  <input className="srt-i srt-a0" type="radio" name="stfd0412" id="stfd0412-0a" aria-label="Sort by Room type, lowest or A first" />
                                  <input className="srt-i srt-d0" type="radio" name="stfd0412" id="stfd0412-0d" aria-label="Sort by Room type, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd0412-0a">{"Room type"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd0412-0d" aria-hidden="true">{"Room type"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a1" type="radio" name="stfd0412" id="stfd0412-1a" aria-label="Sort by Left tonight, lowest or A first" />
                                  <input className="srt-i srt-d1" type="radio" name="stfd0412" id="stfd0412-1d" aria-label="Sort by Left tonight, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd0412-1a">{"Left tonight"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd0412-1d" aria-hidden="true">{"Left tonight"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a2" type="radio" name="stfd0412" id="stfd0412-2a" aria-label="Sort by 1 adult, lowest or A first" />
                                  <input className="srt-i srt-d2" type="radio" name="stfd0412" id="stfd0412-2d" aria-label="Sort by 1 adult, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd0412-2a">{"1 adult"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd0412-2d" aria-hidden="true">{"1 adult"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a3" type="radio" name="stfd0412" id="stfd0412-3a" aria-label="Sort by 2 adults, lowest or A first" />
                                  <input className="srt-i srt-d3" type="radio" name="stfd0412" id="stfd0412-3d" aria-label="Sort by 2 adults, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd0412-3a">{"2 adults"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd0412-3d" aria-hidden="true">{"2 adults"}</label>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr style={{"--k0": "2", "--k1": "2", "--k2": "1", "--k3": "1"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"GDLX"}</strong>
                                  <span className="fd-sub">{"Garden Deluxe Room"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"10"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹7,399"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹7,999"}</td>
                              </tr>
                              <tr style={{"--k0": "3", "--k1": "3", "--k2": "2", "--k3": "2"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"PDLX"}</strong>
                                  <span className="fd-sub">{"Pool Deluxe Room"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"12"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹7,799"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹8,499"}</td>
                              </tr>
                              <tr style={{"--k0": "1", "--k1": "1", "--k2": "3", "--k3": "3"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"DLXS"}</strong>
                                  <span className="fd-sub">{"Deluxe Suite"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"0"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹13,299"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹14,500"}</td>
                              </tr>
                              <tr style={{"--k0": "4", "--k1": "1", "--k2": "4", "--k3": "4"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"PRMS"}</strong>
                                  <span className="fd-sub">{"Premium Suite"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"0"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹22,099"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹24,000"}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </section>
                    </aside>
                  </div>
                </div>
                <div className="variant v-r-314">
                  <nav className="ltabs ltabs--steps" aria-label="Walk-in steps">
                    <div className="ltabs__list">
                      <Link aria-current="page" to={"/front-desk/fd-04-walk-in-check-in"}>
                        <span className="ltabs__n">{"1"}</span>
                        {"Availability & rate"}
                      </Link>
                      <span className="is-todo">
                        <span className="ltabs__n">{"2"}</span>
                        {"Guest & booking details"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"3"}</span>
                        {"Check-in steps 2–7"}
                      </span>
                    </div>
                  </nav>
                  <div className="fd-split fd-split--wide" data-code="FD-04-1">
                    <div>
                      <form className="fd-form" action="/front-desk/fd-04-walk-in-check-in/step-2-guest.html" method="get">
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Availability and rate"}</h2>
                          <p className="fd-sec__d">{"Walk-in for tonight. Availability and restrictions are checked."}</p>
                          <div className="s-grid2">
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f131">
                                {"Nights "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f131" type="number" name="nights" required={true} min="1" max="30" defaultValue={"1"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f132">
                                {"Departure date "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="dpk">
                                <button type="button" className="dpk-f field__input" id="f132" aria-haspopup="dialog">
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
                                    <select className="dpk-m" name="dep__14-month" aria-label="Month" defaultValue={"10"}>
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
                                    <select className="dpk-y" name="dep__14-year" aria-label="Year" defaultValue={"2026"}>
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
                                      <input type="radio" name="dep__14" value="01" required={true} />
                                      {"1"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__14" value="02" />
                                      {"2"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__14" value="03" />
                                      {"3"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__14" value="04" />
                                      {"4"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__14" value="05" />
                                      {"5"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__14" value="06" />
                                      {"6"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__14" value="07" />
                                      {"7"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__14" value="08" />
                                      {"8"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__14" value="09" />
                                      {"9"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__14" value="10" />
                                      {"10"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__14" value="11" />
                                      {"11"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__14" value="12" />
                                      {"12"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__14" value="13" />
                                      {"13"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__14" value="14" />
                                      {"14"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__14" value="15" />
                                      {"15"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__14" value="16" />
                                      {"16"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__14" value="17" />
                                      {"17"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__14" value="18" />
                                      {"18"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__14" value="19" />
                                      {"19"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__14" value="20" />
                                      {"20"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__14" value="21" />
                                      {"21"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__14" value="22" />
                                      {"22"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__14" value="23" defaultChecked={true} />
                                      {"23"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__14" value="24" />
                                      {"24"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__14" value="25" />
                                      {"25"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__14" value="26" />
                                      {"26"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__14" value="27" />
                                      {"27"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__14" value="28" />
                                      {"28"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__14" value="29" />
                                      {"29"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__14" value="30" />
                                      {"30"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__14" value="31" />
                                      {"31"}
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <span className="field__hint">{"Arrival is the business date"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f133">
                                {"Adults "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f133" type="number" name="adults" required={true} min="1" max="6" defaultValue={"1"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f134">{"Children"}</label>
                              <input className="field__input num" id="f134" type="number" name="children" min="0" max="4" defaultValue={"0"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f135">
                                {"Room type "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f135" name="type" required={true} defaultValue={"PDLX"}>
                                  <option value="GDLX">{"GDLX – Garden Deluxe Room (10 left)"}</option>
                                  <option value="PDLX">{"PDLX – Pool Deluxe Room (12 left)"}</option>
                                  <option value="DLXS">{"DLXS – Deluxe Suite (sold out)"}</option>
                                  <option value="PRMS">{"PRMS – Premium Suite (sold out)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Only types available for all nights can be chosen"}</span>
                            </div>
                            <div className="field">
                              <span className="field__label">{"Room (chosen from the board)"}</span>
                              <div className="fd-display">
                                <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"314"}</span>
                                {" Vacant inspected"}
                              </div>
                              <span className="field__hint">{"From FD-06"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f137">
                                {"Rate plan "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f137" name="plan" required={true} defaultValue={"Walk-in BAR (BAR-CP)"}>
                                  <option value="Walk-in BAR (BAR-CP)">{"Walk-in BAR (BAR-CP)"}</option>
                                  <option value="BAR-EP">{"BAR-EP · room only"}</option>
                                  <option value="BAR-MAP">{"BAR-MAP · breakfast and dinner"}</option>
                                  <option value="BAR-AP">{"BAR-AP · all meals"}</option>
                                  <option value="CLUB">{"CLUB · member rate"}</option>
                                  <option value="AGENT">{"AGENT · travel agent net rate"}</option>
                                  <option value="COMP">{"COMP · complimentary"}</option>
                                  <option value="Corporate (CORP)">{"Corporate (CORP)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Walk-in / rack / company rates valid tonight"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f138">{"Meal plan"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f138" name="meal" defaultValue={"CP – breakfast included"}>
                                  <option value="EP – room only">{"EP – room only"}</option>
                                  <option value="CP – breakfast included">{"CP – breakfast included"}</option>
                                  <option value="MAP – breakfast and dinner">{"MAP – breakfast and dinner"}</option>
                                  <option value="AP – all meals">{"AP – all meals"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f139">{"Rate per night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input className="field__input num" id="f139" type="number" inputMode="decimal" name="rate" step="0.01" defaultValue={"7799.00"} />
                              </div>
                              <span className="field__hint">{"GST ₹1,403.82 (18 %) is added on top. Overriding the rate needs permission and a reason (FDS-22)"}</span>
                            </div>
                            <div className="field">
                              <span className="field__label">{"Total with GST"}</span>
                              <div className="fd-display">{"₹9,202.82 for 1 night (calculated)"}</div>
                            </div>
                          </div>
                        </section>
                        <div className="fd-formfoot">
                          <Link className="btn fd-spacer" data-leads-to="FD-01" to={"/front-desk/fd-01-front-desk-home"}>{"Cancel"}</Link>
                          <button className="btn btn--primary" type="submit">{"Next →"}</button>
                        </div>
                        <section className="fd-sec" data-flow="fd04-rules">
                          <h2 className="fd-sec__t">{"Stay rules and extras"}</h2>
                          <p className="field__hint">{"Minimum age of the primary guest 18 (FDS-04). Maximum 4 guests per room, 5 in the Premium Suite. Children 11 and under free with existing beds, max 2. Deposit for a walk-in: first night plus incidental deposit ₹1,000 per night."}</p>
                          <div className="s-grid3">
                            <div className="field">
                              <label className="field__label">{"Kind of stay"}</label>
                              <div className="field__wrap">
                                <select aria-label="Kind of stay" className="field__input field__input--select" defaultValue={"Overnight"}>
                                  <option>{"Overnight"}</option>
                                  <option>{"Day use (09:00–18:00)"}</option>
                                </select>
                              </div>
                              <span className="field__hint">{"Day-use window from FDS-04; posts charge code DUSE"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label">{"Add an extra"}</label>
                              <div className="field__wrap">
                                <select aria-label="Add an extra" className="field__input field__input--select" defaultValue={"No extra"}>
                                  <option>{"No extra"}</option>
                                  <option>{"Extra bed · per night"}</option>
                                  <option>{"Breakfast · per person per night"}</option>
                                  <option>{"Airport transfer (one way) · per item"}</option>
                                  <option>{"Gala dinner · per person"}</option>
                                  <option>{"Ayurveda therapy session · per person"}</option>
                                  <option>{"Seafood Grill dinner · per person"}</option>
                                  <option>{"Early check-in · per stay"}</option>
                                  <option>{"Late check-out (until 18:00) · per stay"}</option>
                                  <option>{"Celebration cake · per item"}</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </section>
                      </form>
                    </div>
                    <aside className="fd-stack fd-stack--sticky">
                      <section className="card " data-code="FD-04-avail">
                        <div className="fd-cardhead">
                          <h2 className="s-card-title">{"Availability tonight"}</h2>
                        </div>
                        <div className="s-scroll">
                          <table className="srt dt__table dt--compact dt--hug" style={{"--srt-cols": "auto auto auto auto"}} data-mc="">
                            <caption className="sr-only">{"Availability tonight"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">
                                  <input className="srt-i srt-a0" type="radio" name="stfd0413" id="stfd0413-0a" aria-label="Sort by Room type, lowest or A first" />
                                  <input className="srt-i srt-d0" type="radio" name="stfd0413" id="stfd0413-0d" aria-label="Sort by Room type, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd0413-0a">{"Room type"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd0413-0d" aria-hidden="true">{"Room type"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a1" type="radio" name="stfd0413" id="stfd0413-1a" aria-label="Sort by Left tonight, lowest or A first" />
                                  <input className="srt-i srt-d1" type="radio" name="stfd0413" id="stfd0413-1d" aria-label="Sort by Left tonight, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd0413-1a">{"Left tonight"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd0413-1d" aria-hidden="true">{"Left tonight"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a2" type="radio" name="stfd0413" id="stfd0413-2a" aria-label="Sort by 1 adult, lowest or A first" />
                                  <input className="srt-i srt-d2" type="radio" name="stfd0413" id="stfd0413-2d" aria-label="Sort by 1 adult, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd0413-2a">{"1 adult"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd0413-2d" aria-hidden="true">{"1 adult"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a3" type="radio" name="stfd0413" id="stfd0413-3a" aria-label="Sort by 2 adults, lowest or A first" />
                                  <input className="srt-i srt-d3" type="radio" name="stfd0413" id="stfd0413-3d" aria-label="Sort by 2 adults, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd0413-3a">{"2 adults"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd0413-3d" aria-hidden="true">{"2 adults"}</label>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr style={{"--k0": "2", "--k1": "2", "--k2": "1", "--k3": "1"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"GDLX"}</strong>
                                  <span className="fd-sub">{"Garden Deluxe Room"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"10"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹7,399"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹7,999"}</td>
                              </tr>
                              <tr style={{"--k0": "3", "--k1": "3", "--k2": "2", "--k3": "2"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"PDLX"}</strong>
                                  <span className="fd-sub">{"Pool Deluxe Room"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"12"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹7,799"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹8,499"}</td>
                              </tr>
                              <tr style={{"--k0": "1", "--k1": "1", "--k2": "3", "--k3": "3"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"DLXS"}</strong>
                                  <span className="fd-sub">{"Deluxe Suite"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"0"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹13,299"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹14,500"}</td>
                              </tr>
                              <tr style={{"--k0": "4", "--k1": "1", "--k2": "4", "--k3": "4"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"PRMS"}</strong>
                                  <span className="fd-sub">{"Premium Suite"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"0"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹22,099"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹24,000"}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </section>
                    </aside>
                  </div>
                </div>
                <div className="variant v-r-315">
                  <nav className="ltabs ltabs--steps" aria-label="Walk-in steps">
                    <div className="ltabs__list">
                      <Link aria-current="page" to={"/front-desk/fd-04-walk-in-check-in"}>
                        <span className="ltabs__n">{"1"}</span>
                        {"Availability & rate"}
                      </Link>
                      <span className="is-todo">
                        <span className="ltabs__n">{"2"}</span>
                        {"Guest & booking details"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"3"}</span>
                        {"Check-in steps 2–7"}
                      </span>
                    </div>
                  </nav>
                  <div className="fd-split fd-split--wide" data-code="FD-04-1">
                    <div>
                      <form className="fd-form" action="/front-desk/fd-04-walk-in-check-in/step-2-guest.html" method="get">
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Availability and rate"}</h2>
                          <p className="fd-sec__d">{"Walk-in for tonight. Availability and restrictions are checked."}</p>
                          <div className="s-grid2">
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f141">
                                {"Nights "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f141" type="number" name="nights" required={true} min="1" max="30" defaultValue={"1"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f142">
                                {"Departure date "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="dpk">
                                <button type="button" className="dpk-f field__input" id="f142" aria-haspopup="dialog">
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
                                    <select className="dpk-m" name="dep__15-month" aria-label="Month" defaultValue={"10"}>
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
                                    <select className="dpk-y" name="dep__15-year" aria-label="Year" defaultValue={"2026"}>
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
                                      <input type="radio" name="dep__15" value="01" required={true} />
                                      {"1"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__15" value="02" />
                                      {"2"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__15" value="03" />
                                      {"3"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__15" value="04" />
                                      {"4"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__15" value="05" />
                                      {"5"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__15" value="06" />
                                      {"6"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__15" value="07" />
                                      {"7"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__15" value="08" />
                                      {"8"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__15" value="09" />
                                      {"9"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__15" value="10" />
                                      {"10"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__15" value="11" />
                                      {"11"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__15" value="12" />
                                      {"12"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__15" value="13" />
                                      {"13"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__15" value="14" />
                                      {"14"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__15" value="15" />
                                      {"15"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__15" value="16" />
                                      {"16"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__15" value="17" />
                                      {"17"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__15" value="18" />
                                      {"18"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__15" value="19" />
                                      {"19"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__15" value="20" />
                                      {"20"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__15" value="21" />
                                      {"21"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__15" value="22" />
                                      {"22"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__15" value="23" defaultChecked={true} />
                                      {"23"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__15" value="24" />
                                      {"24"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__15" value="25" />
                                      {"25"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__15" value="26" />
                                      {"26"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__15" value="27" />
                                      {"27"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__15" value="28" />
                                      {"28"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__15" value="29" />
                                      {"29"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__15" value="30" />
                                      {"30"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__15" value="31" />
                                      {"31"}
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <span className="field__hint">{"Arrival is the business date"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f143">
                                {"Adults "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f143" type="number" name="adults" required={true} min="1" max="6" defaultValue={"1"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f144">{"Children"}</label>
                              <input className="field__input num" id="f144" type="number" name="children" min="0" max="4" defaultValue={"0"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f145">
                                {"Room type "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f145" name="type" required={true} defaultValue={"PDLX"}>
                                  <option value="GDLX">{"GDLX – Garden Deluxe Room (10 left)"}</option>
                                  <option value="PDLX">{"PDLX – Pool Deluxe Room (12 left)"}</option>
                                  <option value="DLXS">{"DLXS – Deluxe Suite (sold out)"}</option>
                                  <option value="PRMS">{"PRMS – Premium Suite (sold out)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Only types available for all nights can be chosen"}</span>
                            </div>
                            <div className="field">
                              <span className="field__label">{"Room (chosen from the board)"}</span>
                              <div className="fd-display">
                                <span className="fd-rm fd-rm--VC" title="Vacant clean">{"315"}</span>
                                {" Vacant clean"}
                              </div>
                              <span className="field__hint">{"From FD-06"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f147">
                                {"Rate plan "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f147" name="plan" required={true} defaultValue={"Walk-in BAR (BAR-CP)"}>
                                  <option value="Walk-in BAR (BAR-CP)">{"Walk-in BAR (BAR-CP)"}</option>
                                  <option value="BAR-EP">{"BAR-EP · room only"}</option>
                                  <option value="BAR-MAP">{"BAR-MAP · breakfast and dinner"}</option>
                                  <option value="BAR-AP">{"BAR-AP · all meals"}</option>
                                  <option value="CLUB">{"CLUB · member rate"}</option>
                                  <option value="AGENT">{"AGENT · travel agent net rate"}</option>
                                  <option value="COMP">{"COMP · complimentary"}</option>
                                  <option value="Corporate (CORP)">{"Corporate (CORP)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Walk-in / rack / company rates valid tonight"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f148">{"Meal plan"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f148" name="meal" defaultValue={"CP – breakfast included"}>
                                  <option value="EP – room only">{"EP – room only"}</option>
                                  <option value="CP – breakfast included">{"CP – breakfast included"}</option>
                                  <option value="MAP – breakfast and dinner">{"MAP – breakfast and dinner"}</option>
                                  <option value="AP – all meals">{"AP – all meals"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f149">{"Rate per night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input className="field__input num" id="f149" type="number" inputMode="decimal" name="rate" step="0.01" defaultValue={"7799.00"} />
                              </div>
                              <span className="field__hint">{"GST ₹1,403.82 (18 %) is added on top. Overriding the rate needs permission and a reason (FDS-22)"}</span>
                            </div>
                            <div className="field">
                              <span className="field__label">{"Total with GST"}</span>
                              <div className="fd-display">{"₹9,202.82 for 1 night (calculated)"}</div>
                            </div>
                          </div>
                        </section>
                        <div className="fd-formfoot">
                          <Link className="btn fd-spacer" data-leads-to="FD-01" to={"/front-desk/fd-01-front-desk-home"}>{"Cancel"}</Link>
                          <button className="btn btn--primary" type="submit">{"Next →"}</button>
                        </div>
                        <section className="fd-sec" data-flow="fd04-rules">
                          <h2 className="fd-sec__t">{"Stay rules and extras"}</h2>
                          <p className="field__hint">{"Minimum age of the primary guest 18 (FDS-04). Maximum 4 guests per room, 5 in the Premium Suite. Children 11 and under free with existing beds, max 2. Deposit for a walk-in: first night plus incidental deposit ₹1,000 per night."}</p>
                          <div className="s-grid3">
                            <div className="field">
                              <label className="field__label">{"Kind of stay"}</label>
                              <div className="field__wrap">
                                <select aria-label="Kind of stay" className="field__input field__input--select" defaultValue={"Overnight"}>
                                  <option>{"Overnight"}</option>
                                  <option>{"Day use (09:00–18:00)"}</option>
                                </select>
                              </div>
                              <span className="field__hint">{"Day-use window from FDS-04; posts charge code DUSE"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label">{"Add an extra"}</label>
                              <div className="field__wrap">
                                <select aria-label="Add an extra" className="field__input field__input--select" defaultValue={"No extra"}>
                                  <option>{"No extra"}</option>
                                  <option>{"Extra bed · per night"}</option>
                                  <option>{"Breakfast · per person per night"}</option>
                                  <option>{"Airport transfer (one way) · per item"}</option>
                                  <option>{"Gala dinner · per person"}</option>
                                  <option>{"Ayurveda therapy session · per person"}</option>
                                  <option>{"Seafood Grill dinner · per person"}</option>
                                  <option>{"Early check-in · per stay"}</option>
                                  <option>{"Late check-out (until 18:00) · per stay"}</option>
                                  <option>{"Celebration cake · per item"}</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </section>
                      </form>
                    </div>
                    <aside className="fd-stack fd-stack--sticky">
                      <section className="card " data-code="FD-04-avail">
                        <div className="fd-cardhead">
                          <h2 className="s-card-title">{"Availability tonight"}</h2>
                        </div>
                        <div className="s-scroll">
                          <table className="srt dt__table dt--compact dt--hug" style={{"--srt-cols": "auto auto auto auto"}} data-mc="">
                            <caption className="sr-only">{"Availability tonight"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">
                                  <input className="srt-i srt-a0" type="radio" name="stfd0414" id="stfd0414-0a" aria-label="Sort by Room type, lowest or A first" />
                                  <input className="srt-i srt-d0" type="radio" name="stfd0414" id="stfd0414-0d" aria-label="Sort by Room type, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd0414-0a">{"Room type"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd0414-0d" aria-hidden="true">{"Room type"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a1" type="radio" name="stfd0414" id="stfd0414-1a" aria-label="Sort by Left tonight, lowest or A first" />
                                  <input className="srt-i srt-d1" type="radio" name="stfd0414" id="stfd0414-1d" aria-label="Sort by Left tonight, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd0414-1a">{"Left tonight"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd0414-1d" aria-hidden="true">{"Left tonight"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a2" type="radio" name="stfd0414" id="stfd0414-2a" aria-label="Sort by 1 adult, lowest or A first" />
                                  <input className="srt-i srt-d2" type="radio" name="stfd0414" id="stfd0414-2d" aria-label="Sort by 1 adult, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd0414-2a">{"1 adult"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd0414-2d" aria-hidden="true">{"1 adult"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a3" type="radio" name="stfd0414" id="stfd0414-3a" aria-label="Sort by 2 adults, lowest or A first" />
                                  <input className="srt-i srt-d3" type="radio" name="stfd0414" id="stfd0414-3d" aria-label="Sort by 2 adults, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd0414-3a">{"2 adults"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd0414-3d" aria-hidden="true">{"2 adults"}</label>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr style={{"--k0": "2", "--k1": "2", "--k2": "1", "--k3": "1"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"GDLX"}</strong>
                                  <span className="fd-sub">{"Garden Deluxe Room"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"10"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹7,399"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹7,999"}</td>
                              </tr>
                              <tr style={{"--k0": "3", "--k1": "3", "--k2": "2", "--k3": "2"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"PDLX"}</strong>
                                  <span className="fd-sub">{"Pool Deluxe Room"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"12"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹7,799"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹8,499"}</td>
                              </tr>
                              <tr style={{"--k0": "1", "--k1": "1", "--k2": "3", "--k3": "3"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"DLXS"}</strong>
                                  <span className="fd-sub">{"Deluxe Suite"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"0"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹13,299"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹14,500"}</td>
                              </tr>
                              <tr style={{"--k0": "4", "--k1": "1", "--k2": "4", "--k3": "4"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"PRMS"}</strong>
                                  <span className="fd-sub">{"Premium Suite"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"0"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹22,099"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹24,000"}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </section>
                    </aside>
                  </div>
                </div>
                <div className="variant v-r-317">
                  <nav className="ltabs ltabs--steps" aria-label="Walk-in steps">
                    <div className="ltabs__list">
                      <Link aria-current="page" to={"/front-desk/fd-04-walk-in-check-in"}>
                        <span className="ltabs__n">{"1"}</span>
                        {"Availability & rate"}
                      </Link>
                      <span className="is-todo">
                        <span className="ltabs__n">{"2"}</span>
                        {"Guest & booking details"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"3"}</span>
                        {"Check-in steps 2–7"}
                      </span>
                    </div>
                  </nav>
                  <div className="fd-split fd-split--wide" data-code="FD-04-1">
                    <div>
                      <form className="fd-form" action="/front-desk/fd-04-walk-in-check-in/step-2-guest.html" method="get">
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Availability and rate"}</h2>
                          <p className="fd-sec__d">{"Walk-in for tonight. Availability and restrictions are checked."}</p>
                          <div className="s-grid2">
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f151">
                                {"Nights "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f151" type="number" name="nights" required={true} min="1" max="30" defaultValue={"1"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f152">
                                {"Departure date "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="dpk">
                                <button type="button" className="dpk-f field__input" id="f152" aria-haspopup="dialog">
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
                                    <select className="dpk-m" name="dep__16-month" aria-label="Month" defaultValue={"10"}>
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
                                    <select className="dpk-y" name="dep__16-year" aria-label="Year" defaultValue={"2026"}>
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
                                      <input type="radio" name="dep__16" value="01" required={true} />
                                      {"1"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__16" value="02" />
                                      {"2"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__16" value="03" />
                                      {"3"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__16" value="04" />
                                      {"4"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__16" value="05" />
                                      {"5"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__16" value="06" />
                                      {"6"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__16" value="07" />
                                      {"7"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__16" value="08" />
                                      {"8"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__16" value="09" />
                                      {"9"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__16" value="10" />
                                      {"10"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__16" value="11" />
                                      {"11"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__16" value="12" />
                                      {"12"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__16" value="13" />
                                      {"13"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__16" value="14" />
                                      {"14"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__16" value="15" />
                                      {"15"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__16" value="16" />
                                      {"16"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__16" value="17" />
                                      {"17"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__16" value="18" />
                                      {"18"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__16" value="19" />
                                      {"19"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__16" value="20" />
                                      {"20"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__16" value="21" />
                                      {"21"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__16" value="22" />
                                      {"22"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__16" value="23" defaultChecked={true} />
                                      {"23"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__16" value="24" />
                                      {"24"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__16" value="25" />
                                      {"25"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__16" value="26" />
                                      {"26"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__16" value="27" />
                                      {"27"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__16" value="28" />
                                      {"28"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__16" value="29" />
                                      {"29"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__16" value="30" />
                                      {"30"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__16" value="31" />
                                      {"31"}
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <span className="field__hint">{"Arrival is the business date"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f153">
                                {"Adults "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f153" type="number" name="adults" required={true} min="1" max="6" defaultValue={"1"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f154">{"Children"}</label>
                              <input className="field__input num" id="f154" type="number" name="children" min="0" max="4" defaultValue={"0"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f155">
                                {"Room type "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f155" name="type" required={true} defaultValue={"PDLX"}>
                                  <option value="GDLX">{"GDLX – Garden Deluxe Room (10 left)"}</option>
                                  <option value="PDLX">{"PDLX – Pool Deluxe Room (12 left)"}</option>
                                  <option value="DLXS">{"DLXS – Deluxe Suite (sold out)"}</option>
                                  <option value="PRMS">{"PRMS – Premium Suite (sold out)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Only types available for all nights can be chosen"}</span>
                            </div>
                            <div className="field">
                              <span className="field__label">{"Room (chosen from the board)"}</span>
                              <div className="fd-display">
                                <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"317"}</span>
                                {" Vacant inspected"}
                              </div>
                              <span className="field__hint">{"From FD-06"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f157">
                                {"Rate plan "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f157" name="plan" required={true} defaultValue={"Walk-in BAR (BAR-CP)"}>
                                  <option value="Walk-in BAR (BAR-CP)">{"Walk-in BAR (BAR-CP)"}</option>
                                  <option value="BAR-EP">{"BAR-EP · room only"}</option>
                                  <option value="BAR-MAP">{"BAR-MAP · breakfast and dinner"}</option>
                                  <option value="BAR-AP">{"BAR-AP · all meals"}</option>
                                  <option value="CLUB">{"CLUB · member rate"}</option>
                                  <option value="AGENT">{"AGENT · travel agent net rate"}</option>
                                  <option value="COMP">{"COMP · complimentary"}</option>
                                  <option value="Corporate (CORP)">{"Corporate (CORP)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Walk-in / rack / company rates valid tonight"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f158">{"Meal plan"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f158" name="meal" defaultValue={"CP – breakfast included"}>
                                  <option value="EP – room only">{"EP – room only"}</option>
                                  <option value="CP – breakfast included">{"CP – breakfast included"}</option>
                                  <option value="MAP – breakfast and dinner">{"MAP – breakfast and dinner"}</option>
                                  <option value="AP – all meals">{"AP – all meals"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f159">{"Rate per night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input className="field__input num" id="f159" type="number" inputMode="decimal" name="rate" step="0.01" defaultValue={"7799.00"} />
                              </div>
                              <span className="field__hint">{"GST ₹1,403.82 (18 %) is added on top. Overriding the rate needs permission and a reason (FDS-22)"}</span>
                            </div>
                            <div className="field">
                              <span className="field__label">{"Total with GST"}</span>
                              <div className="fd-display">{"₹9,202.82 for 1 night (calculated)"}</div>
                            </div>
                          </div>
                        </section>
                        <div className="fd-formfoot">
                          <Link className="btn fd-spacer" data-leads-to="FD-01" to={"/front-desk/fd-01-front-desk-home"}>{"Cancel"}</Link>
                          <button className="btn btn--primary" type="submit">{"Next →"}</button>
                        </div>
                        <section className="fd-sec" data-flow="fd04-rules">
                          <h2 className="fd-sec__t">{"Stay rules and extras"}</h2>
                          <p className="field__hint">{"Minimum age of the primary guest 18 (FDS-04). Maximum 4 guests per room, 5 in the Premium Suite. Children 11 and under free with existing beds, max 2. Deposit for a walk-in: first night plus incidental deposit ₹1,000 per night."}</p>
                          <div className="s-grid3">
                            <div className="field">
                              <label className="field__label">{"Kind of stay"}</label>
                              <div className="field__wrap">
                                <select aria-label="Kind of stay" className="field__input field__input--select" defaultValue={"Overnight"}>
                                  <option>{"Overnight"}</option>
                                  <option>{"Day use (09:00–18:00)"}</option>
                                </select>
                              </div>
                              <span className="field__hint">{"Day-use window from FDS-04; posts charge code DUSE"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label">{"Add an extra"}</label>
                              <div className="field__wrap">
                                <select aria-label="Add an extra" className="field__input field__input--select" defaultValue={"No extra"}>
                                  <option>{"No extra"}</option>
                                  <option>{"Extra bed · per night"}</option>
                                  <option>{"Breakfast · per person per night"}</option>
                                  <option>{"Airport transfer (one way) · per item"}</option>
                                  <option>{"Gala dinner · per person"}</option>
                                  <option>{"Ayurveda therapy session · per person"}</option>
                                  <option>{"Seafood Grill dinner · per person"}</option>
                                  <option>{"Early check-in · per stay"}</option>
                                  <option>{"Late check-out (until 18:00) · per stay"}</option>
                                  <option>{"Celebration cake · per item"}</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </section>
                      </form>
                    </div>
                    <aside className="fd-stack fd-stack--sticky">
                      <section className="card " data-code="FD-04-avail">
                        <div className="fd-cardhead">
                          <h2 className="s-card-title">{"Availability tonight"}</h2>
                        </div>
                        <div className="s-scroll">
                          <table className="srt dt__table dt--compact dt--hug" style={{"--srt-cols": "auto auto auto auto"}} data-mc="">
                            <caption className="sr-only">{"Availability tonight"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">
                                  <input className="srt-i srt-a0" type="radio" name="stfd0415" id="stfd0415-0a" aria-label="Sort by Room type, lowest or A first" />
                                  <input className="srt-i srt-d0" type="radio" name="stfd0415" id="stfd0415-0d" aria-label="Sort by Room type, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd0415-0a">{"Room type"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd0415-0d" aria-hidden="true">{"Room type"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a1" type="radio" name="stfd0415" id="stfd0415-1a" aria-label="Sort by Left tonight, lowest or A first" />
                                  <input className="srt-i srt-d1" type="radio" name="stfd0415" id="stfd0415-1d" aria-label="Sort by Left tonight, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd0415-1a">{"Left tonight"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd0415-1d" aria-hidden="true">{"Left tonight"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a2" type="radio" name="stfd0415" id="stfd0415-2a" aria-label="Sort by 1 adult, lowest or A first" />
                                  <input className="srt-i srt-d2" type="radio" name="stfd0415" id="stfd0415-2d" aria-label="Sort by 1 adult, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd0415-2a">{"1 adult"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd0415-2d" aria-hidden="true">{"1 adult"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a3" type="radio" name="stfd0415" id="stfd0415-3a" aria-label="Sort by 2 adults, lowest or A first" />
                                  <input className="srt-i srt-d3" type="radio" name="stfd0415" id="stfd0415-3d" aria-label="Sort by 2 adults, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd0415-3a">{"2 adults"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd0415-3d" aria-hidden="true">{"2 adults"}</label>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr style={{"--k0": "2", "--k1": "2", "--k2": "1", "--k3": "1"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"GDLX"}</strong>
                                  <span className="fd-sub">{"Garden Deluxe Room"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"10"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹7,399"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹7,999"}</td>
                              </tr>
                              <tr style={{"--k0": "3", "--k1": "3", "--k2": "2", "--k3": "2"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"PDLX"}</strong>
                                  <span className="fd-sub">{"Pool Deluxe Room"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"12"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹7,799"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹8,499"}</td>
                              </tr>
                              <tr style={{"--k0": "1", "--k1": "1", "--k2": "3", "--k3": "3"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"DLXS"}</strong>
                                  <span className="fd-sub">{"Deluxe Suite"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"0"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹13,299"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹14,500"}</td>
                              </tr>
                              <tr style={{"--k0": "4", "--k1": "1", "--k2": "4", "--k3": "4"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"PRMS"}</strong>
                                  <span className="fd-sub">{"Premium Suite"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"0"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹22,099"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹24,000"}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </section>
                    </aside>
                  </div>
                </div>
                <div className="variant v-r-405">
                  <nav className="ltabs ltabs--steps" aria-label="Walk-in steps">
                    <div className="ltabs__list">
                      <Link aria-current="page" to={"/front-desk/fd-04-walk-in-check-in"}>
                        <span className="ltabs__n">{"1"}</span>
                        {"Availability & rate"}
                      </Link>
                      <span className="is-todo">
                        <span className="ltabs__n">{"2"}</span>
                        {"Guest & booking details"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"3"}</span>
                        {"Check-in steps 2–7"}
                      </span>
                    </div>
                  </nav>
                  <div className="fd-split fd-split--wide" data-code="FD-04-1">
                    <div>
                      <form className="fd-form" action="/front-desk/fd-04-walk-in-check-in/step-2-guest.html" method="get">
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Availability and rate"}</h2>
                          <p className="fd-sec__d">{"Walk-in for tonight. Availability and restrictions are checked."}</p>
                          <div className="s-grid2">
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f161">
                                {"Nights "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f161" type="number" name="nights" required={true} min="1" max="30" defaultValue={"1"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f162">
                                {"Departure date "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="dpk">
                                <button type="button" className="dpk-f field__input" id="f162" aria-haspopup="dialog">
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
                                    <select className="dpk-m" name="dep__17-month" aria-label="Month" defaultValue={"10"}>
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
                                    <select className="dpk-y" name="dep__17-year" aria-label="Year" defaultValue={"2026"}>
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
                                      <input type="radio" name="dep__17" value="01" required={true} />
                                      {"1"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__17" value="02" />
                                      {"2"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__17" value="03" />
                                      {"3"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__17" value="04" />
                                      {"4"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__17" value="05" />
                                      {"5"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__17" value="06" />
                                      {"6"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__17" value="07" />
                                      {"7"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__17" value="08" />
                                      {"8"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__17" value="09" />
                                      {"9"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__17" value="10" />
                                      {"10"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__17" value="11" />
                                      {"11"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__17" value="12" />
                                      {"12"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__17" value="13" />
                                      {"13"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__17" value="14" />
                                      {"14"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__17" value="15" />
                                      {"15"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__17" value="16" />
                                      {"16"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__17" value="17" />
                                      {"17"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__17" value="18" />
                                      {"18"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__17" value="19" />
                                      {"19"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__17" value="20" />
                                      {"20"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__17" value="21" />
                                      {"21"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__17" value="22" />
                                      {"22"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__17" value="23" defaultChecked={true} />
                                      {"23"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__17" value="24" />
                                      {"24"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__17" value="25" />
                                      {"25"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__17" value="26" />
                                      {"26"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__17" value="27" />
                                      {"27"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__17" value="28" />
                                      {"28"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__17" value="29" />
                                      {"29"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__17" value="30" />
                                      {"30"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__17" value="31" />
                                      {"31"}
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <span className="field__hint">{"Arrival is the business date"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f163">
                                {"Adults "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f163" type="number" name="adults" required={true} min="1" max="6" defaultValue={"1"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f164">{"Children"}</label>
                              <input className="field__input num" id="f164" type="number" name="children" min="0" max="4" defaultValue={"0"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f165">
                                {"Room type "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f165" name="type" required={true} defaultValue={"PDLX"}>
                                  <option value="GDLX">{"GDLX – Garden Deluxe Room (10 left)"}</option>
                                  <option value="PDLX">{"PDLX – Pool Deluxe Room (12 left)"}</option>
                                  <option value="DLXS">{"DLXS – Deluxe Suite (sold out)"}</option>
                                  <option value="PRMS">{"PRMS – Premium Suite (sold out)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Only types available for all nights can be chosen"}</span>
                            </div>
                            <div className="field">
                              <span className="field__label">{"Room (chosen from the board)"}</span>
                              <div className="fd-display">
                                <span className="fd-rm fd-rm--VC" title="Vacant clean">{"405"}</span>
                                {" Vacant clean"}
                              </div>
                              <span className="field__hint">{"From FD-06"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f167">
                                {"Rate plan "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f167" name="plan" required={true} defaultValue={"Walk-in BAR (BAR-CP)"}>
                                  <option value="Walk-in BAR (BAR-CP)">{"Walk-in BAR (BAR-CP)"}</option>
                                  <option value="BAR-EP">{"BAR-EP · room only"}</option>
                                  <option value="BAR-MAP">{"BAR-MAP · breakfast and dinner"}</option>
                                  <option value="BAR-AP">{"BAR-AP · all meals"}</option>
                                  <option value="CLUB">{"CLUB · member rate"}</option>
                                  <option value="AGENT">{"AGENT · travel agent net rate"}</option>
                                  <option value="COMP">{"COMP · complimentary"}</option>
                                  <option value="Corporate (CORP)">{"Corporate (CORP)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Walk-in / rack / company rates valid tonight"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f168">{"Meal plan"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f168" name="meal" defaultValue={"CP – breakfast included"}>
                                  <option value="EP – room only">{"EP – room only"}</option>
                                  <option value="CP – breakfast included">{"CP – breakfast included"}</option>
                                  <option value="MAP – breakfast and dinner">{"MAP – breakfast and dinner"}</option>
                                  <option value="AP – all meals">{"AP – all meals"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f169">{"Rate per night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input className="field__input num" id="f169" type="number" inputMode="decimal" name="rate" step="0.01" defaultValue={"7799.00"} />
                              </div>
                              <span className="field__hint">{"GST ₹1,403.82 (18 %) is added on top. Overriding the rate needs permission and a reason (FDS-22)"}</span>
                            </div>
                            <div className="field">
                              <span className="field__label">{"Total with GST"}</span>
                              <div className="fd-display">{"₹9,202.82 for 1 night (calculated)"}</div>
                            </div>
                          </div>
                        </section>
                        <div className="fd-formfoot">
                          <Link className="btn fd-spacer" data-leads-to="FD-01" to={"/front-desk/fd-01-front-desk-home"}>{"Cancel"}</Link>
                          <button className="btn btn--primary" type="submit">{"Next →"}</button>
                        </div>
                        <section className="fd-sec" data-flow="fd04-rules">
                          <h2 className="fd-sec__t">{"Stay rules and extras"}</h2>
                          <p className="field__hint">{"Minimum age of the primary guest 18 (FDS-04). Maximum 4 guests per room, 5 in the Premium Suite. Children 11 and under free with existing beds, max 2. Deposit for a walk-in: first night plus incidental deposit ₹1,000 per night."}</p>
                          <div className="s-grid3">
                            <div className="field">
                              <label className="field__label">{"Kind of stay"}</label>
                              <div className="field__wrap">
                                <select aria-label="Kind of stay" className="field__input field__input--select" defaultValue={"Overnight"}>
                                  <option>{"Overnight"}</option>
                                  <option>{"Day use (09:00–18:00)"}</option>
                                </select>
                              </div>
                              <span className="field__hint">{"Day-use window from FDS-04; posts charge code DUSE"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label">{"Add an extra"}</label>
                              <div className="field__wrap">
                                <select aria-label="Add an extra" className="field__input field__input--select" defaultValue={"No extra"}>
                                  <option>{"No extra"}</option>
                                  <option>{"Extra bed · per night"}</option>
                                  <option>{"Breakfast · per person per night"}</option>
                                  <option>{"Airport transfer (one way) · per item"}</option>
                                  <option>{"Gala dinner · per person"}</option>
                                  <option>{"Ayurveda therapy session · per person"}</option>
                                  <option>{"Seafood Grill dinner · per person"}</option>
                                  <option>{"Early check-in · per stay"}</option>
                                  <option>{"Late check-out (until 18:00) · per stay"}</option>
                                  <option>{"Celebration cake · per item"}</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </section>
                      </form>
                    </div>
                    <aside className="fd-stack fd-stack--sticky">
                      <section className="card " data-code="FD-04-avail">
                        <div className="fd-cardhead">
                          <h2 className="s-card-title">{"Availability tonight"}</h2>
                        </div>
                        <div className="s-scroll">
                          <table className="srt dt__table dt--compact dt--hug" style={{"--srt-cols": "auto auto auto auto"}} data-mc="">
                            <caption className="sr-only">{"Availability tonight"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">
                                  <input className="srt-i srt-a0" type="radio" name="stfd0416" id="stfd0416-0a" aria-label="Sort by Room type, lowest or A first" />
                                  <input className="srt-i srt-d0" type="radio" name="stfd0416" id="stfd0416-0d" aria-label="Sort by Room type, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd0416-0a">{"Room type"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd0416-0d" aria-hidden="true">{"Room type"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a1" type="radio" name="stfd0416" id="stfd0416-1a" aria-label="Sort by Left tonight, lowest or A first" />
                                  <input className="srt-i srt-d1" type="radio" name="stfd0416" id="stfd0416-1d" aria-label="Sort by Left tonight, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd0416-1a">{"Left tonight"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd0416-1d" aria-hidden="true">{"Left tonight"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a2" type="radio" name="stfd0416" id="stfd0416-2a" aria-label="Sort by 1 adult, lowest or A first" />
                                  <input className="srt-i srt-d2" type="radio" name="stfd0416" id="stfd0416-2d" aria-label="Sort by 1 adult, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd0416-2a">{"1 adult"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd0416-2d" aria-hidden="true">{"1 adult"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a3" type="radio" name="stfd0416" id="stfd0416-3a" aria-label="Sort by 2 adults, lowest or A first" />
                                  <input className="srt-i srt-d3" type="radio" name="stfd0416" id="stfd0416-3d" aria-label="Sort by 2 adults, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd0416-3a">{"2 adults"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd0416-3d" aria-hidden="true">{"2 adults"}</label>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr style={{"--k0": "2", "--k1": "2", "--k2": "1", "--k3": "1"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"GDLX"}</strong>
                                  <span className="fd-sub">{"Garden Deluxe Room"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"10"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹7,399"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹7,999"}</td>
                              </tr>
                              <tr style={{"--k0": "3", "--k1": "3", "--k2": "2", "--k3": "2"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"PDLX"}</strong>
                                  <span className="fd-sub">{"Pool Deluxe Room"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"12"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹7,799"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹8,499"}</td>
                              </tr>
                              <tr style={{"--k0": "1", "--k1": "1", "--k2": "3", "--k3": "3"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"DLXS"}</strong>
                                  <span className="fd-sub">{"Deluxe Suite"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"0"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹13,299"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹14,500"}</td>
                              </tr>
                              <tr style={{"--k0": "4", "--k1": "1", "--k2": "4", "--k3": "4"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"PRMS"}</strong>
                                  <span className="fd-sub">{"Premium Suite"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"0"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹22,099"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹24,000"}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </section>
                    </aside>
                  </div>
                </div>
                <div className="variant v-r-411">
                  <nav className="ltabs ltabs--steps" aria-label="Walk-in steps">
                    <div className="ltabs__list">
                      <Link aria-current="page" to={"/front-desk/fd-04-walk-in-check-in"}>
                        <span className="ltabs__n">{"1"}</span>
                        {"Availability & rate"}
                      </Link>
                      <span className="is-todo">
                        <span className="ltabs__n">{"2"}</span>
                        {"Guest & booking details"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"3"}</span>
                        {"Check-in steps 2–7"}
                      </span>
                    </div>
                  </nav>
                  <div className="fd-split fd-split--wide" data-code="FD-04-1">
                    <div>
                      <form className="fd-form" action="/front-desk/fd-04-walk-in-check-in/step-2-guest.html" method="get">
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Availability and rate"}</h2>
                          <p className="fd-sec__d">{"Walk-in for tonight. Availability and restrictions are checked."}</p>
                          <div className="s-grid2">
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f171">
                                {"Nights "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f171" type="number" name="nights" required={true} min="1" max="30" defaultValue={"1"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f172">
                                {"Departure date "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="dpk">
                                <button type="button" className="dpk-f field__input" id="f172" aria-haspopup="dialog">
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
                                    <select className="dpk-m" name="dep__18-month" aria-label="Month" defaultValue={"10"}>
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
                                    <select className="dpk-y" name="dep__18-year" aria-label="Year" defaultValue={"2026"}>
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
                                      <input type="radio" name="dep__18" value="01" required={true} />
                                      {"1"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__18" value="02" />
                                      {"2"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__18" value="03" />
                                      {"3"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__18" value="04" />
                                      {"4"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__18" value="05" />
                                      {"5"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__18" value="06" />
                                      {"6"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__18" value="07" />
                                      {"7"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__18" value="08" />
                                      {"8"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__18" value="09" />
                                      {"9"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__18" value="10" />
                                      {"10"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__18" value="11" />
                                      {"11"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__18" value="12" />
                                      {"12"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__18" value="13" />
                                      {"13"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__18" value="14" />
                                      {"14"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__18" value="15" />
                                      {"15"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__18" value="16" />
                                      {"16"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__18" value="17" />
                                      {"17"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__18" value="18" />
                                      {"18"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__18" value="19" />
                                      {"19"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__18" value="20" />
                                      {"20"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__18" value="21" />
                                      {"21"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__18" value="22" />
                                      {"22"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__18" value="23" defaultChecked={true} />
                                      {"23"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__18" value="24" />
                                      {"24"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__18" value="25" />
                                      {"25"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__18" value="26" />
                                      {"26"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__18" value="27" />
                                      {"27"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__18" value="28" />
                                      {"28"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__18" value="29" />
                                      {"29"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__18" value="30" />
                                      {"30"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__18" value="31" />
                                      {"31"}
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <span className="field__hint">{"Arrival is the business date"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f173">
                                {"Adults "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f173" type="number" name="adults" required={true} min="1" max="6" defaultValue={"1"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f174">{"Children"}</label>
                              <input className="field__input num" id="f174" type="number" name="children" min="0" max="4" defaultValue={"0"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f175">
                                {"Room type "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f175" name="type" required={true} defaultValue={"PDLX"}>
                                  <option value="GDLX">{"GDLX – Garden Deluxe Room (10 left)"}</option>
                                  <option value="PDLX">{"PDLX – Pool Deluxe Room (12 left)"}</option>
                                  <option value="DLXS">{"DLXS – Deluxe Suite (sold out)"}</option>
                                  <option value="PRMS">{"PRMS – Premium Suite (sold out)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Only types available for all nights can be chosen"}</span>
                            </div>
                            <div className="field">
                              <span className="field__label">{"Room (chosen from the board)"}</span>
                              <div className="fd-display">
                                <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"411"}</span>
                                {" Vacant inspected"}
                              </div>
                              <span className="field__hint">{"From FD-06"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f177">
                                {"Rate plan "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f177" name="plan" required={true} defaultValue={"Walk-in BAR (BAR-CP)"}>
                                  <option value="Walk-in BAR (BAR-CP)">{"Walk-in BAR (BAR-CP)"}</option>
                                  <option value="BAR-EP">{"BAR-EP · room only"}</option>
                                  <option value="BAR-MAP">{"BAR-MAP · breakfast and dinner"}</option>
                                  <option value="BAR-AP">{"BAR-AP · all meals"}</option>
                                  <option value="CLUB">{"CLUB · member rate"}</option>
                                  <option value="AGENT">{"AGENT · travel agent net rate"}</option>
                                  <option value="COMP">{"COMP · complimentary"}</option>
                                  <option value="Corporate (CORP)">{"Corporate (CORP)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Walk-in / rack / company rates valid tonight"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f178">{"Meal plan"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f178" name="meal" defaultValue={"CP – breakfast included"}>
                                  <option value="EP – room only">{"EP – room only"}</option>
                                  <option value="CP – breakfast included">{"CP – breakfast included"}</option>
                                  <option value="MAP – breakfast and dinner">{"MAP – breakfast and dinner"}</option>
                                  <option value="AP – all meals">{"AP – all meals"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f179">{"Rate per night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input className="field__input num" id="f179" type="number" inputMode="decimal" name="rate" step="0.01" defaultValue={"7799.00"} />
                              </div>
                              <span className="field__hint">{"GST ₹1,403.82 (18 %) is added on top. Overriding the rate needs permission and a reason (FDS-22)"}</span>
                            </div>
                            <div className="field">
                              <span className="field__label">{"Total with GST"}</span>
                              <div className="fd-display">{"₹9,202.82 for 1 night (calculated)"}</div>
                            </div>
                          </div>
                        </section>
                        <div className="fd-formfoot">
                          <Link className="btn fd-spacer" data-leads-to="FD-01" to={"/front-desk/fd-01-front-desk-home"}>{"Cancel"}</Link>
                          <button className="btn btn--primary" type="submit">{"Next →"}</button>
                        </div>
                        <section className="fd-sec" data-flow="fd04-rules">
                          <h2 className="fd-sec__t">{"Stay rules and extras"}</h2>
                          <p className="field__hint">{"Minimum age of the primary guest 18 (FDS-04). Maximum 4 guests per room, 5 in the Premium Suite. Children 11 and under free with existing beds, max 2. Deposit for a walk-in: first night plus incidental deposit ₹1,000 per night."}</p>
                          <div className="s-grid3">
                            <div className="field">
                              <label className="field__label">{"Kind of stay"}</label>
                              <div className="field__wrap">
                                <select aria-label="Kind of stay" className="field__input field__input--select" defaultValue={"Overnight"}>
                                  <option>{"Overnight"}</option>
                                  <option>{"Day use (09:00–18:00)"}</option>
                                </select>
                              </div>
                              <span className="field__hint">{"Day-use window from FDS-04; posts charge code DUSE"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label">{"Add an extra"}</label>
                              <div className="field__wrap">
                                <select aria-label="Add an extra" className="field__input field__input--select" defaultValue={"No extra"}>
                                  <option>{"No extra"}</option>
                                  <option>{"Extra bed · per night"}</option>
                                  <option>{"Breakfast · per person per night"}</option>
                                  <option>{"Airport transfer (one way) · per item"}</option>
                                  <option>{"Gala dinner · per person"}</option>
                                  <option>{"Ayurveda therapy session · per person"}</option>
                                  <option>{"Seafood Grill dinner · per person"}</option>
                                  <option>{"Early check-in · per stay"}</option>
                                  <option>{"Late check-out (until 18:00) · per stay"}</option>
                                  <option>{"Celebration cake · per item"}</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </section>
                      </form>
                    </div>
                    <aside className="fd-stack fd-stack--sticky">
                      <section className="card " data-code="FD-04-avail">
                        <div className="fd-cardhead">
                          <h2 className="s-card-title">{"Availability tonight"}</h2>
                        </div>
                        <div className="s-scroll">
                          <table className="srt dt__table dt--compact dt--hug" style={{"--srt-cols": "auto auto auto auto"}} data-mc="">
                            <caption className="sr-only">{"Availability tonight"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">
                                  <input className="srt-i srt-a0" type="radio" name="stfd0417" id="stfd0417-0a" aria-label="Sort by Room type, lowest or A first" />
                                  <input className="srt-i srt-d0" type="radio" name="stfd0417" id="stfd0417-0d" aria-label="Sort by Room type, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd0417-0a">{"Room type"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd0417-0d" aria-hidden="true">{"Room type"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a1" type="radio" name="stfd0417" id="stfd0417-1a" aria-label="Sort by Left tonight, lowest or A first" />
                                  <input className="srt-i srt-d1" type="radio" name="stfd0417" id="stfd0417-1d" aria-label="Sort by Left tonight, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd0417-1a">{"Left tonight"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd0417-1d" aria-hidden="true">{"Left tonight"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a2" type="radio" name="stfd0417" id="stfd0417-2a" aria-label="Sort by 1 adult, lowest or A first" />
                                  <input className="srt-i srt-d2" type="radio" name="stfd0417" id="stfd0417-2d" aria-label="Sort by 1 adult, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd0417-2a">{"1 adult"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd0417-2d" aria-hidden="true">{"1 adult"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a3" type="radio" name="stfd0417" id="stfd0417-3a" aria-label="Sort by 2 adults, lowest or A first" />
                                  <input className="srt-i srt-d3" type="radio" name="stfd0417" id="stfd0417-3d" aria-label="Sort by 2 adults, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd0417-3a">{"2 adults"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd0417-3d" aria-hidden="true">{"2 adults"}</label>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr style={{"--k0": "2", "--k1": "2", "--k2": "1", "--k3": "1"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"GDLX"}</strong>
                                  <span className="fd-sub">{"Garden Deluxe Room"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"10"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹7,399"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹7,999"}</td>
                              </tr>
                              <tr style={{"--k0": "3", "--k1": "3", "--k2": "2", "--k3": "2"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"PDLX"}</strong>
                                  <span className="fd-sub">{"Pool Deluxe Room"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"12"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹7,799"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹8,499"}</td>
                              </tr>
                              <tr style={{"--k0": "1", "--k1": "1", "--k2": "3", "--k3": "3"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"DLXS"}</strong>
                                  <span className="fd-sub">{"Deluxe Suite"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"0"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹13,299"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹14,500"}</td>
                              </tr>
                              <tr style={{"--k0": "4", "--k1": "1", "--k2": "4", "--k3": "4"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"PRMS"}</strong>
                                  <span className="fd-sub">{"Premium Suite"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"0"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹22,099"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹24,000"}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </section>
                    </aside>
                  </div>
                </div>
                <div className="variant v-r-412">
                  <nav className="ltabs ltabs--steps" aria-label="Walk-in steps">
                    <div className="ltabs__list">
                      <Link aria-current="page" to={"/front-desk/fd-04-walk-in-check-in"}>
                        <span className="ltabs__n">{"1"}</span>
                        {"Availability & rate"}
                      </Link>
                      <span className="is-todo">
                        <span className="ltabs__n">{"2"}</span>
                        {"Guest & booking details"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"3"}</span>
                        {"Check-in steps 2–7"}
                      </span>
                    </div>
                  </nav>
                  <div className="fd-split fd-split--wide" data-code="FD-04-1">
                    <div>
                      <form className="fd-form" action="/front-desk/fd-04-walk-in-check-in/step-2-guest.html" method="get">
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Availability and rate"}</h2>
                          <p className="fd-sec__d">{"Walk-in for tonight. Availability and restrictions are checked."}</p>
                          <div className="s-grid2">
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f181">
                                {"Nights "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f181" type="number" name="nights" required={true} min="1" max="30" defaultValue={"1"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f182">
                                {"Departure date "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="dpk">
                                <button type="button" className="dpk-f field__input" id="f182" aria-haspopup="dialog">
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
                                    <select className="dpk-m" name="dep__19-month" aria-label="Month" defaultValue={"10"}>
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
                                    <select className="dpk-y" name="dep__19-year" aria-label="Year" defaultValue={"2026"}>
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
                                      <input type="radio" name="dep__19" value="01" required={true} />
                                      {"1"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__19" value="02" />
                                      {"2"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__19" value="03" />
                                      {"3"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__19" value="04" />
                                      {"4"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__19" value="05" />
                                      {"5"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__19" value="06" />
                                      {"6"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__19" value="07" />
                                      {"7"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__19" value="08" />
                                      {"8"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__19" value="09" />
                                      {"9"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__19" value="10" />
                                      {"10"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__19" value="11" />
                                      {"11"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__19" value="12" />
                                      {"12"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__19" value="13" />
                                      {"13"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__19" value="14" />
                                      {"14"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__19" value="15" />
                                      {"15"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__19" value="16" />
                                      {"16"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__19" value="17" />
                                      {"17"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__19" value="18" />
                                      {"18"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__19" value="19" />
                                      {"19"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__19" value="20" />
                                      {"20"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__19" value="21" />
                                      {"21"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__19" value="22" />
                                      {"22"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__19" value="23" defaultChecked={true} />
                                      {"23"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__19" value="24" />
                                      {"24"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__19" value="25" />
                                      {"25"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__19" value="26" />
                                      {"26"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__19" value="27" />
                                      {"27"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__19" value="28" />
                                      {"28"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__19" value="29" />
                                      {"29"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__19" value="30" />
                                      {"30"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__19" value="31" />
                                      {"31"}
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <span className="field__hint">{"Arrival is the business date"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f183">
                                {"Adults "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f183" type="number" name="adults" required={true} min="1" max="6" defaultValue={"1"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f184">{"Children"}</label>
                              <input className="field__input num" id="f184" type="number" name="children" min="0" max="4" defaultValue={"0"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f185">
                                {"Room type "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f185" name="type" required={true} defaultValue={"PDLX"}>
                                  <option value="GDLX">{"GDLX – Garden Deluxe Room (10 left)"}</option>
                                  <option value="PDLX">{"PDLX – Pool Deluxe Room (12 left)"}</option>
                                  <option value="DLXS">{"DLXS – Deluxe Suite (sold out)"}</option>
                                  <option value="PRMS">{"PRMS – Premium Suite (sold out)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Only types available for all nights can be chosen"}</span>
                            </div>
                            <div className="field">
                              <span className="field__label">{"Room (chosen from the board)"}</span>
                              <div className="fd-display">
                                <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"412"}</span>
                                {" Vacant inspected"}
                              </div>
                              <span className="field__hint">{"From FD-06"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f187">
                                {"Rate plan "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f187" name="plan" required={true} defaultValue={"Walk-in BAR (BAR-CP)"}>
                                  <option value="Walk-in BAR (BAR-CP)">{"Walk-in BAR (BAR-CP)"}</option>
                                  <option value="BAR-EP">{"BAR-EP · room only"}</option>
                                  <option value="BAR-MAP">{"BAR-MAP · breakfast and dinner"}</option>
                                  <option value="BAR-AP">{"BAR-AP · all meals"}</option>
                                  <option value="CLUB">{"CLUB · member rate"}</option>
                                  <option value="AGENT">{"AGENT · travel agent net rate"}</option>
                                  <option value="COMP">{"COMP · complimentary"}</option>
                                  <option value="Corporate (CORP)">{"Corporate (CORP)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Walk-in / rack / company rates valid tonight"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f188">{"Meal plan"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f188" name="meal" defaultValue={"CP – breakfast included"}>
                                  <option value="EP – room only">{"EP – room only"}</option>
                                  <option value="CP – breakfast included">{"CP – breakfast included"}</option>
                                  <option value="MAP – breakfast and dinner">{"MAP – breakfast and dinner"}</option>
                                  <option value="AP – all meals">{"AP – all meals"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f189">{"Rate per night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input className="field__input num" id="f189" type="number" inputMode="decimal" name="rate" step="0.01" defaultValue={"7799.00"} />
                              </div>
                              <span className="field__hint">{"GST ₹1,403.82 (18 %) is added on top. Overriding the rate needs permission and a reason (FDS-22)"}</span>
                            </div>
                            <div className="field">
                              <span className="field__label">{"Total with GST"}</span>
                              <div className="fd-display">{"₹9,202.82 for 1 night (calculated)"}</div>
                            </div>
                          </div>
                        </section>
                        <div className="fd-formfoot">
                          <Link className="btn fd-spacer" data-leads-to="FD-01" to={"/front-desk/fd-01-front-desk-home"}>{"Cancel"}</Link>
                          <button className="btn btn--primary" type="submit">{"Next →"}</button>
                        </div>
                        <section className="fd-sec" data-flow="fd04-rules">
                          <h2 className="fd-sec__t">{"Stay rules and extras"}</h2>
                          <p className="field__hint">{"Minimum age of the primary guest 18 (FDS-04). Maximum 4 guests per room, 5 in the Premium Suite. Children 11 and under free with existing beds, max 2. Deposit for a walk-in: first night plus incidental deposit ₹1,000 per night."}</p>
                          <div className="s-grid3">
                            <div className="field">
                              <label className="field__label">{"Kind of stay"}</label>
                              <div className="field__wrap">
                                <select aria-label="Kind of stay" className="field__input field__input--select" defaultValue={"Overnight"}>
                                  <option>{"Overnight"}</option>
                                  <option>{"Day use (09:00–18:00)"}</option>
                                </select>
                              </div>
                              <span className="field__hint">{"Day-use window from FDS-04; posts charge code DUSE"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label">{"Add an extra"}</label>
                              <div className="field__wrap">
                                <select aria-label="Add an extra" className="field__input field__input--select" defaultValue={"No extra"}>
                                  <option>{"No extra"}</option>
                                  <option>{"Extra bed · per night"}</option>
                                  <option>{"Breakfast · per person per night"}</option>
                                  <option>{"Airport transfer (one way) · per item"}</option>
                                  <option>{"Gala dinner · per person"}</option>
                                  <option>{"Ayurveda therapy session · per person"}</option>
                                  <option>{"Seafood Grill dinner · per person"}</option>
                                  <option>{"Early check-in · per stay"}</option>
                                  <option>{"Late check-out (until 18:00) · per stay"}</option>
                                  <option>{"Celebration cake · per item"}</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </section>
                      </form>
                    </div>
                    <aside className="fd-stack fd-stack--sticky">
                      <section className="card " data-code="FD-04-avail">
                        <div className="fd-cardhead">
                          <h2 className="s-card-title">{"Availability tonight"}</h2>
                        </div>
                        <div className="s-scroll">
                          <table className="srt dt__table dt--compact dt--hug" style={{"--srt-cols": "auto auto auto auto"}} data-mc="">
                            <caption className="sr-only">{"Availability tonight"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">
                                  <input className="srt-i srt-a0" type="radio" name="stfd0418" id="stfd0418-0a" aria-label="Sort by Room type, lowest or A first" />
                                  <input className="srt-i srt-d0" type="radio" name="stfd0418" id="stfd0418-0d" aria-label="Sort by Room type, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd0418-0a">{"Room type"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd0418-0d" aria-hidden="true">{"Room type"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a1" type="radio" name="stfd0418" id="stfd0418-1a" aria-label="Sort by Left tonight, lowest or A first" />
                                  <input className="srt-i srt-d1" type="radio" name="stfd0418" id="stfd0418-1d" aria-label="Sort by Left tonight, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd0418-1a">{"Left tonight"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd0418-1d" aria-hidden="true">{"Left tonight"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a2" type="radio" name="stfd0418" id="stfd0418-2a" aria-label="Sort by 1 adult, lowest or A first" />
                                  <input className="srt-i srt-d2" type="radio" name="stfd0418" id="stfd0418-2d" aria-label="Sort by 1 adult, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd0418-2a">{"1 adult"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd0418-2d" aria-hidden="true">{"1 adult"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a3" type="radio" name="stfd0418" id="stfd0418-3a" aria-label="Sort by 2 adults, lowest or A first" />
                                  <input className="srt-i srt-d3" type="radio" name="stfd0418" id="stfd0418-3d" aria-label="Sort by 2 adults, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd0418-3a">{"2 adults"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd0418-3d" aria-hidden="true">{"2 adults"}</label>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr style={{"--k0": "2", "--k1": "2", "--k2": "1", "--k3": "1"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"GDLX"}</strong>
                                  <span className="fd-sub">{"Garden Deluxe Room"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"10"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹7,399"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹7,999"}</td>
                              </tr>
                              <tr style={{"--k0": "3", "--k1": "3", "--k2": "2", "--k3": "2"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"PDLX"}</strong>
                                  <span className="fd-sub">{"Pool Deluxe Room"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"12"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹7,799"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹8,499"}</td>
                              </tr>
                              <tr style={{"--k0": "1", "--k1": "1", "--k2": "3", "--k3": "3"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"DLXS"}</strong>
                                  <span className="fd-sub">{"Deluxe Suite"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"0"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹13,299"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹14,500"}</td>
                              </tr>
                              <tr style={{"--k0": "4", "--k1": "1", "--k2": "4", "--k3": "4"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"PRMS"}</strong>
                                  <span className="fd-sub">{"Premium Suite"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"0"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹22,099"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹24,000"}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </section>
                    </aside>
                  </div>
                </div>
                <div className="variant v-r-413">
                  <nav className="ltabs ltabs--steps" aria-label="Walk-in steps">
                    <div className="ltabs__list">
                      <Link aria-current="page" to={"/front-desk/fd-04-walk-in-check-in"}>
                        <span className="ltabs__n">{"1"}</span>
                        {"Availability & rate"}
                      </Link>
                      <span className="is-todo">
                        <span className="ltabs__n">{"2"}</span>
                        {"Guest & booking details"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"3"}</span>
                        {"Check-in steps 2–7"}
                      </span>
                    </div>
                  </nav>
                  <div className="fd-split fd-split--wide" data-code="FD-04-1">
                    <div>
                      <form className="fd-form" action="/front-desk/fd-04-walk-in-check-in/step-2-guest.html" method="get">
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Availability and rate"}</h2>
                          <p className="fd-sec__d">{"Walk-in for tonight. Availability and restrictions are checked."}</p>
                          <div className="s-grid2">
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f191">
                                {"Nights "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f191" type="number" name="nights" required={true} min="1" max="30" defaultValue={"1"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f192">
                                {"Departure date "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="dpk">
                                <button type="button" className="dpk-f field__input" id="f192" aria-haspopup="dialog">
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
                                    <select className="dpk-m" name="dep__20-month" aria-label="Month" defaultValue={"10"}>
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
                                    <select className="dpk-y" name="dep__20-year" aria-label="Year" defaultValue={"2026"}>
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
                                      <input type="radio" name="dep__20" value="01" required={true} />
                                      {"1"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__20" value="02" />
                                      {"2"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__20" value="03" />
                                      {"3"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__20" value="04" />
                                      {"4"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__20" value="05" />
                                      {"5"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__20" value="06" />
                                      {"6"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__20" value="07" />
                                      {"7"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__20" value="08" />
                                      {"8"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__20" value="09" />
                                      {"9"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__20" value="10" />
                                      {"10"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__20" value="11" />
                                      {"11"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__20" value="12" />
                                      {"12"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__20" value="13" />
                                      {"13"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__20" value="14" />
                                      {"14"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__20" value="15" />
                                      {"15"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__20" value="16" />
                                      {"16"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__20" value="17" />
                                      {"17"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__20" value="18" />
                                      {"18"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__20" value="19" />
                                      {"19"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__20" value="20" />
                                      {"20"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__20" value="21" />
                                      {"21"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__20" value="22" />
                                      {"22"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__20" value="23" defaultChecked={true} />
                                      {"23"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__20" value="24" />
                                      {"24"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__20" value="25" />
                                      {"25"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__20" value="26" />
                                      {"26"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__20" value="27" />
                                      {"27"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__20" value="28" />
                                      {"28"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__20" value="29" />
                                      {"29"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__20" value="30" />
                                      {"30"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__20" value="31" />
                                      {"31"}
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <span className="field__hint">{"Arrival is the business date"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f193">
                                {"Adults "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f193" type="number" name="adults" required={true} min="1" max="6" defaultValue={"1"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f194">{"Children"}</label>
                              <input className="field__input num" id="f194" type="number" name="children" min="0" max="4" defaultValue={"0"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f195">
                                {"Room type "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f195" name="type" required={true} defaultValue={"PDLX"}>
                                  <option value="GDLX">{"GDLX – Garden Deluxe Room (10 left)"}</option>
                                  <option value="PDLX">{"PDLX – Pool Deluxe Room (12 left)"}</option>
                                  <option value="DLXS">{"DLXS – Deluxe Suite (sold out)"}</option>
                                  <option value="PRMS">{"PRMS – Premium Suite (sold out)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Only types available for all nights can be chosen"}</span>
                            </div>
                            <div className="field">
                              <span className="field__label">{"Room (chosen from the board)"}</span>
                              <div className="fd-display">
                                <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"413"}</span>
                                {" Vacant inspected"}
                              </div>
                              <span className="field__hint">{"From FD-06"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f197">
                                {"Rate plan "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f197" name="plan" required={true} defaultValue={"Walk-in BAR (BAR-CP)"}>
                                  <option value="Walk-in BAR (BAR-CP)">{"Walk-in BAR (BAR-CP)"}</option>
                                  <option value="BAR-EP">{"BAR-EP · room only"}</option>
                                  <option value="BAR-MAP">{"BAR-MAP · breakfast and dinner"}</option>
                                  <option value="BAR-AP">{"BAR-AP · all meals"}</option>
                                  <option value="CLUB">{"CLUB · member rate"}</option>
                                  <option value="AGENT">{"AGENT · travel agent net rate"}</option>
                                  <option value="COMP">{"COMP · complimentary"}</option>
                                  <option value="Corporate (CORP)">{"Corporate (CORP)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Walk-in / rack / company rates valid tonight"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f198">{"Meal plan"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f198" name="meal" defaultValue={"CP – breakfast included"}>
                                  <option value="EP – room only">{"EP – room only"}</option>
                                  <option value="CP – breakfast included">{"CP – breakfast included"}</option>
                                  <option value="MAP – breakfast and dinner">{"MAP – breakfast and dinner"}</option>
                                  <option value="AP – all meals">{"AP – all meals"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f199">{"Rate per night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input className="field__input num" id="f199" type="number" inputMode="decimal" name="rate" step="0.01" defaultValue={"7799.00"} />
                              </div>
                              <span className="field__hint">{"GST ₹1,403.82 (18 %) is added on top. Overriding the rate needs permission and a reason (FDS-22)"}</span>
                            </div>
                            <div className="field">
                              <span className="field__label">{"Total with GST"}</span>
                              <div className="fd-display">{"₹9,202.82 for 1 night (calculated)"}</div>
                            </div>
                          </div>
                        </section>
                        <div className="fd-formfoot">
                          <Link className="btn fd-spacer" data-leads-to="FD-01" to={"/front-desk/fd-01-front-desk-home"}>{"Cancel"}</Link>
                          <button className="btn btn--primary" type="submit">{"Next →"}</button>
                        </div>
                        <section className="fd-sec" data-flow="fd04-rules">
                          <h2 className="fd-sec__t">{"Stay rules and extras"}</h2>
                          <p className="field__hint">{"Minimum age of the primary guest 18 (FDS-04). Maximum 4 guests per room, 5 in the Premium Suite. Children 11 and under free with existing beds, max 2. Deposit for a walk-in: first night plus incidental deposit ₹1,000 per night."}</p>
                          <div className="s-grid3">
                            <div className="field">
                              <label className="field__label">{"Kind of stay"}</label>
                              <div className="field__wrap">
                                <select aria-label="Kind of stay" className="field__input field__input--select" defaultValue={"Overnight"}>
                                  <option>{"Overnight"}</option>
                                  <option>{"Day use (09:00–18:00)"}</option>
                                </select>
                              </div>
                              <span className="field__hint">{"Day-use window from FDS-04; posts charge code DUSE"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label">{"Add an extra"}</label>
                              <div className="field__wrap">
                                <select aria-label="Add an extra" className="field__input field__input--select" defaultValue={"No extra"}>
                                  <option>{"No extra"}</option>
                                  <option>{"Extra bed · per night"}</option>
                                  <option>{"Breakfast · per person per night"}</option>
                                  <option>{"Airport transfer (one way) · per item"}</option>
                                  <option>{"Gala dinner · per person"}</option>
                                  <option>{"Ayurveda therapy session · per person"}</option>
                                  <option>{"Seafood Grill dinner · per person"}</option>
                                  <option>{"Early check-in · per stay"}</option>
                                  <option>{"Late check-out (until 18:00) · per stay"}</option>
                                  <option>{"Celebration cake · per item"}</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </section>
                      </form>
                    </div>
                    <aside className="fd-stack fd-stack--sticky">
                      <section className="card " data-code="FD-04-avail">
                        <div className="fd-cardhead">
                          <h2 className="s-card-title">{"Availability tonight"}</h2>
                        </div>
                        <div className="s-scroll">
                          <table className="srt dt__table dt--compact dt--hug" style={{"--srt-cols": "auto auto auto auto"}} data-mc="">
                            <caption className="sr-only">{"Availability tonight"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">
                                  <input className="srt-i srt-a0" type="radio" name="stfd0419" id="stfd0419-0a" aria-label="Sort by Room type, lowest or A first" />
                                  <input className="srt-i srt-d0" type="radio" name="stfd0419" id="stfd0419-0d" aria-label="Sort by Room type, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd0419-0a">{"Room type"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd0419-0d" aria-hidden="true">{"Room type"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a1" type="radio" name="stfd0419" id="stfd0419-1a" aria-label="Sort by Left tonight, lowest or A first" />
                                  <input className="srt-i srt-d1" type="radio" name="stfd0419" id="stfd0419-1d" aria-label="Sort by Left tonight, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd0419-1a">{"Left tonight"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd0419-1d" aria-hidden="true">{"Left tonight"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a2" type="radio" name="stfd0419" id="stfd0419-2a" aria-label="Sort by 1 adult, lowest or A first" />
                                  <input className="srt-i srt-d2" type="radio" name="stfd0419" id="stfd0419-2d" aria-label="Sort by 1 adult, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd0419-2a">{"1 adult"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd0419-2d" aria-hidden="true">{"1 adult"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a3" type="radio" name="stfd0419" id="stfd0419-3a" aria-label="Sort by 2 adults, lowest or A first" />
                                  <input className="srt-i srt-d3" type="radio" name="stfd0419" id="stfd0419-3d" aria-label="Sort by 2 adults, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd0419-3a">{"2 adults"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd0419-3d" aria-hidden="true">{"2 adults"}</label>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr style={{"--k0": "2", "--k1": "2", "--k2": "1", "--k3": "1"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"GDLX"}</strong>
                                  <span className="fd-sub">{"Garden Deluxe Room"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"10"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹7,399"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹7,999"}</td>
                              </tr>
                              <tr style={{"--k0": "3", "--k1": "3", "--k2": "2", "--k3": "2"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"PDLX"}</strong>
                                  <span className="fd-sub">{"Pool Deluxe Room"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"12"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹7,799"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹8,499"}</td>
                              </tr>
                              <tr style={{"--k0": "1", "--k1": "1", "--k2": "3", "--k3": "3"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"DLXS"}</strong>
                                  <span className="fd-sub">{"Deluxe Suite"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"0"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹13,299"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹14,500"}</td>
                              </tr>
                              <tr style={{"--k0": "4", "--k1": "1", "--k2": "4", "--k3": "4"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"PRMS"}</strong>
                                  <span className="fd-sub">{"Premium Suite"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"0"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹22,099"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹24,000"}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </section>
                    </aside>
                  </div>
                </div>
                <div className="variant v-r-414">
                  <nav className="ltabs ltabs--steps" aria-label="Walk-in steps">
                    <div className="ltabs__list">
                      <Link aria-current="page" to={"/front-desk/fd-04-walk-in-check-in"}>
                        <span className="ltabs__n">{"1"}</span>
                        {"Availability & rate"}
                      </Link>
                      <span className="is-todo">
                        <span className="ltabs__n">{"2"}</span>
                        {"Guest & booking details"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"3"}</span>
                        {"Check-in steps 2–7"}
                      </span>
                    </div>
                  </nav>
                  <div className="fd-split fd-split--wide" data-code="FD-04-1">
                    <div>
                      <form className="fd-form" action="/front-desk/fd-04-walk-in-check-in/step-2-guest.html" method="get">
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Availability and rate"}</h2>
                          <p className="fd-sec__d">{"Walk-in for tonight. Availability and restrictions are checked."}</p>
                          <div className="s-grid2">
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f201">
                                {"Nights "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f201" type="number" name="nights" required={true} min="1" max="30" defaultValue={"1"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f202">
                                {"Departure date "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="dpk">
                                <button type="button" className="dpk-f field__input" id="f202" aria-haspopup="dialog">
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
                                    <select className="dpk-m" name="dep__21-month" aria-label="Month" defaultValue={"10"}>
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
                                    <select className="dpk-y" name="dep__21-year" aria-label="Year" defaultValue={"2026"}>
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
                                      <input type="radio" name="dep__21" value="01" required={true} />
                                      {"1"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__21" value="02" />
                                      {"2"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__21" value="03" />
                                      {"3"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__21" value="04" />
                                      {"4"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__21" value="05" />
                                      {"5"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__21" value="06" />
                                      {"6"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__21" value="07" />
                                      {"7"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__21" value="08" />
                                      {"8"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__21" value="09" />
                                      {"9"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__21" value="10" />
                                      {"10"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__21" value="11" />
                                      {"11"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__21" value="12" />
                                      {"12"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__21" value="13" />
                                      {"13"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__21" value="14" />
                                      {"14"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__21" value="15" />
                                      {"15"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__21" value="16" />
                                      {"16"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__21" value="17" />
                                      {"17"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__21" value="18" />
                                      {"18"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__21" value="19" />
                                      {"19"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__21" value="20" />
                                      {"20"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__21" value="21" />
                                      {"21"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__21" value="22" />
                                      {"22"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__21" value="23" defaultChecked={true} />
                                      {"23"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__21" value="24" />
                                      {"24"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__21" value="25" />
                                      {"25"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__21" value="26" />
                                      {"26"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__21" value="27" />
                                      {"27"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__21" value="28" />
                                      {"28"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__21" value="29" />
                                      {"29"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__21" value="30" />
                                      {"30"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dep__21" value="31" />
                                      {"31"}
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <span className="field__hint">{"Arrival is the business date"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f203">
                                {"Adults "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f203" type="number" name="adults" required={true} min="1" max="6" defaultValue={"1"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f204">{"Children"}</label>
                              <input className="field__input num" id="f204" type="number" name="children" min="0" max="4" defaultValue={"0"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f205">
                                {"Room type "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f205" name="type" required={true} defaultValue={"PDLX"}>
                                  <option value="GDLX">{"GDLX – Garden Deluxe Room (10 left)"}</option>
                                  <option value="PDLX">{"PDLX – Pool Deluxe Room (12 left)"}</option>
                                  <option value="DLXS">{"DLXS – Deluxe Suite (sold out)"}</option>
                                  <option value="PRMS">{"PRMS – Premium Suite (sold out)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Only types available for all nights can be chosen"}</span>
                            </div>
                            <div className="field">
                              <span className="field__label">{"Room (chosen from the board)"}</span>
                              <div className="fd-display">
                                <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"414"}</span>
                                {" Vacant inspected"}
                              </div>
                              <span className="field__hint">{"From FD-06"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f207">
                                {"Rate plan "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f207" name="plan" required={true} defaultValue={"Walk-in BAR (BAR-CP)"}>
                                  <option value="Walk-in BAR (BAR-CP)">{"Walk-in BAR (BAR-CP)"}</option>
                                  <option value="BAR-EP">{"BAR-EP · room only"}</option>
                                  <option value="BAR-MAP">{"BAR-MAP · breakfast and dinner"}</option>
                                  <option value="BAR-AP">{"BAR-AP · all meals"}</option>
                                  <option value="CLUB">{"CLUB · member rate"}</option>
                                  <option value="AGENT">{"AGENT · travel agent net rate"}</option>
                                  <option value="COMP">{"COMP · complimentary"}</option>
                                  <option value="Corporate (CORP)">{"Corporate (CORP)"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Walk-in / rack / company rates valid tonight"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f208">{"Meal plan"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f208" name="meal" defaultValue={"CP – breakfast included"}>
                                  <option value="EP – room only">{"EP – room only"}</option>
                                  <option value="CP – breakfast included">{"CP – breakfast included"}</option>
                                  <option value="MAP – breakfast and dinner">{"MAP – breakfast and dinner"}</option>
                                  <option value="AP – all meals">{"AP – all meals"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f209">{"Rate per night"}</label>
                              <div className="field__wrap field__wrap--money">
                                <span className="field__prefix">{"₹"}</span>
                                <input className="field__input num" id="f209" type="number" inputMode="decimal" name="rate" step="0.01" defaultValue={"7799.00"} />
                              </div>
                              <span className="field__hint">{"GST ₹1,403.82 (18 %) is added on top. Overriding the rate needs permission and a reason (FDS-22)"}</span>
                            </div>
                            <div className="field">
                              <span className="field__label">{"Total with GST"}</span>
                              <div className="fd-display">{"₹9,202.82 for 1 night (calculated)"}</div>
                            </div>
                          </div>
                        </section>
                        <div className="fd-formfoot">
                          <Link className="btn fd-spacer" data-leads-to="FD-01" to={"/front-desk/fd-01-front-desk-home"}>{"Cancel"}</Link>
                          <button className="btn btn--primary" type="submit">{"Next →"}</button>
                        </div>
                        <section className="fd-sec" data-flow="fd04-rules">
                          <h2 className="fd-sec__t">{"Stay rules and extras"}</h2>
                          <p className="field__hint">{"Minimum age of the primary guest 18 (FDS-04). Maximum 4 guests per room, 5 in the Premium Suite. Children 11 and under free with existing beds, max 2. Deposit for a walk-in: first night plus incidental deposit ₹1,000 per night."}</p>
                          <div className="s-grid3">
                            <div className="field">
                              <label className="field__label">{"Kind of stay"}</label>
                              <div className="field__wrap">
                                <select aria-label="Kind of stay" className="field__input field__input--select" defaultValue={"Overnight"}>
                                  <option>{"Overnight"}</option>
                                  <option>{"Day use (09:00–18:00)"}</option>
                                </select>
                              </div>
                              <span className="field__hint">{"Day-use window from FDS-04; posts charge code DUSE"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label">{"Add an extra"}</label>
                              <div className="field__wrap">
                                <select aria-label="Add an extra" className="field__input field__input--select" defaultValue={"No extra"}>
                                  <option>{"No extra"}</option>
                                  <option>{"Extra bed · per night"}</option>
                                  <option>{"Breakfast · per person per night"}</option>
                                  <option>{"Airport transfer (one way) · per item"}</option>
                                  <option>{"Gala dinner · per person"}</option>
                                  <option>{"Ayurveda therapy session · per person"}</option>
                                  <option>{"Seafood Grill dinner · per person"}</option>
                                  <option>{"Early check-in · per stay"}</option>
                                  <option>{"Late check-out (until 18:00) · per stay"}</option>
                                  <option>{"Celebration cake · per item"}</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </section>
                      </form>
                    </div>
                    <aside className="fd-stack fd-stack--sticky">
                      <section className="card " data-code="FD-04-avail">
                        <div className="fd-cardhead">
                          <h2 className="s-card-title">{"Availability tonight"}</h2>
                        </div>
                        <div className="s-scroll">
                          <table className="srt dt__table dt--compact dt--hug" style={{"--srt-cols": "auto auto auto auto"}} data-mc="">
                            <caption className="sr-only">{"Availability tonight"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">
                                  <input className="srt-i srt-a0" type="radio" name="stfd0420" id="stfd0420-0a" aria-label="Sort by Room type, lowest or A first" />
                                  <input className="srt-i srt-d0" type="radio" name="stfd0420" id="stfd0420-0d" aria-label="Sort by Room type, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd0420-0a">{"Room type"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd0420-0d" aria-hidden="true">{"Room type"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a1" type="radio" name="stfd0420" id="stfd0420-1a" aria-label="Sort by Left tonight, lowest or A first" />
                                  <input className="srt-i srt-d1" type="radio" name="stfd0420" id="stfd0420-1d" aria-label="Sort by Left tonight, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd0420-1a">{"Left tonight"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd0420-1d" aria-hidden="true">{"Left tonight"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a2" type="radio" name="stfd0420" id="stfd0420-2a" aria-label="Sort by 1 adult, lowest or A first" />
                                  <input className="srt-i srt-d2" type="radio" name="stfd0420" id="stfd0420-2d" aria-label="Sort by 1 adult, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd0420-2a">{"1 adult"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd0420-2d" aria-hidden="true">{"1 adult"}</label>
                                </th>
                                <th scope="col" className="dt__th--right">
                                  <input className="srt-i srt-a3" type="radio" name="stfd0420" id="stfd0420-3a" aria-label="Sort by 2 adults, lowest or A first" />
                                  <input className="srt-i srt-d3" type="radio" name="stfd0420" id="stfd0420-3d" aria-label="Sort by 2 adults, highest or Z first" />
                                  <label className="srt-l srt-l--a" htmlFor="stfd0420-3a">{"2 adults"}</label>
                                  <label className="srt-l srt-l--d" htmlFor="stfd0420-3d" aria-hidden="true">{"2 adults"}</label>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr style={{"--k0": "2", "--k1": "2", "--k2": "1", "--k3": "1"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"GDLX"}</strong>
                                  <span className="fd-sub">{"Garden Deluxe Room"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"10"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹7,399"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹7,999"}</td>
                              </tr>
                              <tr style={{"--k0": "3", "--k1": "3", "--k2": "2", "--k3": "2"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"PDLX"}</strong>
                                  <span className="fd-sub">{"Pool Deluxe Room"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"12"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹7,799"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹8,499"}</td>
                              </tr>
                              <tr style={{"--k0": "1", "--k1": "1", "--k2": "3", "--k3": "3"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"DLXS"}</strong>
                                  <span className="fd-sub">{"Deluxe Suite"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"0"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹13,299"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹14,500"}</td>
                              </tr>
                              <tr style={{"--k0": "4", "--k1": "1", "--k2": "4", "--k3": "4"}}>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                  <strong>{"PRMS"}</strong>
                                  <span className="fd-sub">{"Premium Suite"}</span>
                                </td>
                                <td className="dt__td dt__td--right num" data-label="Left tonight" data-w2="">{"0"}</td>
                                <td className="dt__td dt__td--right num" data-label="1 adult" data-w2="">{"₹22,099"}</td>
                                <td className="dt__td dt__td--right num" data-label="2 adults" data-w2="">{"₹24,000"}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </section>
                    </aside>
                  </div>
                </div>
              </div>
              <details className="helpbox">
                <summary>
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#help" />
                  </svg>
                  {" Help for this screen "}
                  <span className="code-chip">{"FD-04"}</span>
                </summary>
                <dl className="helpbox__body">
                  <dt>{"What it is for"}</dt>
                  <dd>{"Availability and rate, guest and booking details, then check-in steps"}</dd>
                  <dt>{"Opened from"}</dt>
                  <dd>
                    <Link to={"/front-desk/fd-01-front-desk-home"}>{"FD-01"}</Link>
                    {", "}
                    <Link to={"/front-desk/fd-02-arrivals"}>{"FD-02"}</Link>
                    {", "}
                    <Link to={"/front-desk/fd-06-room-board"}>{"FD-06"}</Link>
                    {" (vacant room), top bar + New"}
                  </dd>
                  <dt>{"Leads to"}</dt>
                  <dd>
                    <Link to={"/front-desk/fd-03-check-in"}>{"FD-03"}</Link>
                    {" (steps 2–7)"}
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
