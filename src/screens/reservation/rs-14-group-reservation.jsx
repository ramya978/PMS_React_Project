// GENERATED from public/reservation/rs-14-group-reservation/index.html by scripts/convert_legacy.py.
// Markup converted to JSX. Legacy page scripts and inline on* handlers are not ported yet.
import { Link } from '../../lib/router.jsx';
import ScreenShell from '../../components/ScreenShell.jsx';

const SHEETS = [
  {
    "href": "/css/aviv/aviv.css",
    "media": null
  },
  {
    "href": "/css/aviv/reservation.css",
    "media": null
  },
  {
    "href": "/reservation/rs-14-group-reservation/rs-14-group-reservation.css",
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

export default function ReservationRs14GroupReservation() {
  return (
    <ScreenShell title="Group Reservation" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="RS-14" data-code="RS-14" data-static="1" className="legacy-body">
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
              <details className="nav__sub" data-group="reservations" open={true}>
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
                  <Link className="nav__item is-active" data-nav="RS-14" aria-current="page" title="Group Reservation" to={"/reservation/rs-14-group-reservation"}>
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
            <main data-flow="rs14-rates" className="app__content" id="main" data-code="RS-14" tabIndex="-1">
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
                        <Link to={"/reservation/rs-01-reservation-dashboard"}>{"Reservations"}</Link>
                      </li>
                      <li>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-right" />
                        </svg>
                        <span aria-current="page">{"Group Reservation"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">{"Group Reservation"}</h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"RS-14"}</span>
                  <div className="page-header__filters">
                    <div className="hctl">
                      <label className="hfilter__btn" htmlFor="rs-14-f" title="Show or hide the filters">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#filter" />
                        </svg>
                        <span>{"Filter"}</span>
                        <i className="hfilter__dot" aria-hidden="true" />
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </label>
                      <input className="hfilter__tg" type="checkbox" id="rs-14-f" aria-label="Show filters" />
                      <form className="hfilter" method="get" action="" role="search" aria-label="Filters">
                        <span className="hfilter__hic" title="Filters">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#filter" />
                          </svg>
                        </span>
                        <div className="hfilter__grid">
                          <label className="hf-f">
                            <span className="hf-f__l">{"From"}</span>
                            <input className="hf-f__c" type="date" name="from" defaultValue={"2026-10-22"} />
                          </label>
                          <label className="hf-f">
                            <span className="hf-f__l">{"To"}</span>
                            <input className="hf-f__c" type="date" name="to" defaultValue={"2026-11-30"} />
                          </label>
                          <label className="hf-f">
                            <span className="hf-f__l">{"Status"}</span>
                            <select className="hf-f__c" name="status">
                              <option>{"All"}</option>
                              <option>{"Tentative"}</option>
                              <option>{"Definite"}</option>
                              <option>{"Cut-off near"}</option>
                              <option>{"Cancelled"}</option>
                            </select>
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                        </div>
                        <div className="hfilter__acts">
                          <button className="hfilter__clear" type="reset">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#x" />
                            </svg>
                            <span>{"Clear"}</span>
                          </button>
                          <a className="hfilter__done" href="#flow-filter">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check" />
                            </svg>
                            {"Apply"}
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="page-header__actions">
                    <Link className="btn" data-leads-to="RV-10" to={"/revenue-management/rv-10-group-evaluation"}>
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#users" />
                      </svg>
                      {"Evaluate a group (RV-10)"}
                    </Link>
                    <Link className="btn btn--primary" data-leads-to="RS-14b" to={"/reservation/rs-14-group-reservation/new-group"}>
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#plus" />
                      </svg>
                      {"New group"}
                    </Link>
                  </div>
                </div>
              </header>
              <div className="variants">
                <span className="va" id="list" />
                <span className="va" id="GRP-0001" />
                <span className="va" id="GRP-0002" />
                <span className="va" id="GRP-0003" />
                <div className="variant v-list is-default">
                  <div data-code="RS-14-L">
                    <div className="s-scroll">
                      <table className="srt dt__table dt--hug" data-code="RS-14-L-list" style={{"--srt-cols": "auto auto auto auto auto auto auto auto max-content"}} data-mc="grid">
                        <caption className="sr-only">{"Groups"}</caption>
                        <thead>
                          <tr>
                            <th scope="col">
                              <input className="srt-i srt-a0" type="radio" name="strs140" id="strs140-0a" aria-label="Sort by Group, lowest or A first" />
                              <input className="srt-i srt-d0" type="radio" name="strs140" id="strs140-0d" aria-label="Sort by Group, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="strs140-0a">{"Group"}</label>
                              <label className="srt-l srt-l--d" htmlFor="strs140-0d" aria-hidden="true">{"Group"}</label>
                            </th>
                            <th scope="col">
                              <input className="srt-i srt-a1" type="radio" name="strs140" id="strs140-1a" aria-label="Sort by Name, lowest or A first" />
                              <input className="srt-i srt-d1" type="radio" name="strs140" id="strs140-1d" aria-label="Sort by Name, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="strs140-1a">{"Name"}</label>
                              <label className="srt-l srt-l--d" htmlFor="strs140-1d" aria-hidden="true">{"Name"}</label>
                            </th>
                            <th scope="col">
                              <input className="srt-i srt-a2" type="radio" name="strs140" id="strs140-2a" aria-label="Sort by Type, lowest or A first" />
                              <input className="srt-i srt-d2" type="radio" name="strs140" id="strs140-2d" aria-label="Sort by Type, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="strs140-2a">{"Type"}</label>
                              <label className="srt-l srt-l--d" htmlFor="strs140-2d" aria-hidden="true">{"Type"}</label>
                            </th>
                            <th scope="col">
                              <input className="srt-i srt-a3" type="radio" name="strs140" id="strs140-3a" aria-label="Sort by Dates, lowest or A first" />
                              <input className="srt-i srt-d3" type="radio" name="strs140" id="strs140-3d" aria-label="Sort by Dates, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="strs140-3a">{"Dates"}</label>
                              <label className="srt-l srt-l--d" htmlFor="strs140-3d" aria-hidden="true">{"Dates"}</label>
                            </th>
                            <th scope="col">
                              <input className="srt-i srt-a4" type="radio" name="strs140" id="strs140-4a" aria-label="Sort by Block, lowest or A first" />
                              <input className="srt-i srt-d4" type="radio" name="strs140" id="strs140-4d" aria-label="Sort by Block, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="strs140-4a">{"Block"}</label>
                              <label className="srt-l srt-l--d" htmlFor="strs140-4d" aria-hidden="true">{"Block"}</label>
                            </th>
                            <th scope="col">
                              <input className="srt-i srt-a5" type="radio" name="strs140" id="strs140-5a" aria-label="Sort by Picked up, lowest or A first" />
                              <input className="srt-i srt-d5" type="radio" name="strs140" id="strs140-5d" aria-label="Sort by Picked up, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="strs140-5a">{"Picked up"}</label>
                              <label className="srt-l srt-l--d" htmlFor="strs140-5d" aria-hidden="true">{"Picked up"}</label>
                            </th>
                            <th scope="col">
                              <input className="srt-i srt-a6" type="radio" name="strs140" id="strs140-6a" aria-label="Sort by Cut-off, lowest or A first" />
                              <input className="srt-i srt-d6" type="radio" name="strs140" id="strs140-6d" aria-label="Sort by Cut-off, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="strs140-6a">{"Cut-off"}</label>
                              <label className="srt-l srt-l--d" htmlFor="strs140-6d" aria-hidden="true">{"Cut-off"}</label>
                            </th>
                            <th scope="col">
                              <input className="srt-i srt-a7" type="radio" name="strs140" id="strs140-7a" aria-label="Sort by Status, lowest or A first" />
                              <input className="srt-i srt-d7" type="radio" name="strs140" id="strs140-7d" aria-label="Sort by Status, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="strs140-7a">{"Status"}</label>
                              <label className="srt-l srt-l--d" htmlFor="strs140-7d" aria-hidden="true">{"Status"}</label>
                            </th>
                            <th scope="col" />
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{"--k0": "1", "--k1": "3", "--k2": "3", "--k3": "2", "--k4": "2", "--k5": "2", "--k6": "2", "--k7": "1"}}>
                            <td className="dt__td nw" data-label="Group" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <a href="#GRP-0001">
                                <strong>{"GRP-0001"}</strong>
                              </a>
                            </td>
                            <td className="dt__td nw" data-label="Name" data-w2="">{"Vijay–Nathan wedding"}</td>
                            <td className="dt__td nw" data-label="Type">{"Wedding"}</td>
                            <td className="dt__td nw" data-label="Dates" data-w2="">{"22 – 25 Nov"}</td>
                            <td className="dt__td nw" data-label="Block" data-w2="">{"22 per night"}</td>
                            <td className="dt__td nw" data-label="Picked up" data-w2="">{"27 / 66 (41%)"}</td>
                            <td className="dt__td nw" data-label="Cut-off" data-w2="" data-m="">{"8 Nov · 17 d"}</td>
                            <td className="dt__td" data-label="Status" data-w2="" data-s="">
                              <span className="pill pill--ready">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Definite"}
                              </span>
                            </td>
                            <td className="dt__td nw" data-a="">
                              <a className="btn" href="#GRP-0001">{"Open"}</a>
                            </td>
                          </tr>
                          <tr style={{"--k0": "2", "--k1": "1", "--k2": "1", "--k3": "1", "--k4": "3", "--k5": "3", "--k6": "3", "--k7": "2"}}>
                            <td className="dt__td nw" data-label="Group" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <a href="#GRP-0002">
                                <strong>{"GRP-0002"}</strong>
                              </a>
                            </td>
                            <td className="dt__td" data-label="Name" data-w="">{"Backwater Analytics annual conference"}</td>
                            <td className="dt__td nw" data-label="Type" data-w2="">{"Conference"}</td>
                            <td className="dt__td nw" data-label="Dates" data-w2="">{"7 – 9 Dec"}</td>
                            <td className="dt__td nw" data-label="Block" data-w2="">{"35 per night"}</td>
                            <td className="dt__td nw" data-label="Picked up" data-w2="">{"33 / 70 (47%)"}</td>
                            <td className="dt__td nw" data-label="Cut-off" data-w2="" data-m="">{"21 Nov · 30 d"}</td>
                            <td className="dt__td" data-label="Status" data-w2="" data-s="">
                              <span className="pill pill--tentative">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#clock" />
                                </svg>
                                {"Tentative"}
                              </span>
                            </td>
                            <td className="dt__td nw" data-a="">
                              <a className="btn" href="#GRP-0002">{"Open"}</a>
                            </td>
                          </tr>
                          <tr style={{"--k0": "3", "--k1": "2", "--k2": "2", "--k3": "2", "--k4": "1", "--k5": "1", "--k6": "1", "--k7": "1"}}>
                            <td className="dt__td nw" data-label="Group" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <a href="#GRP-0003">
                                <strong>{"GRP-0003"}</strong>
                              </a>
                            </td>
                            <td className="dt__td" data-label="Name" data-w="">{"Cochin Marine Services – surveyors' visit"}</td>
                            <td className="dt__td nw" data-label="Type" data-w2="">{"Corporate"}</td>
                            <td className="dt__td nw" data-label="Dates" data-w2="">{"22 – 24 Oct"}</td>
                            <td className="dt__td nw" data-label="Block" data-w2="">{"4 per night"}</td>
                            <td className="dt__td nw" data-label="Picked up" data-w2="">{"8 / 8 (100%)"}</td>
                            <td className="dt__td nw" data-label="Cut-off" data-w2="" data-m="">{"15 Oct · -7 d"}</td>
                            <td className="dt__td" data-label="Status" data-w2="" data-s="">
                              <span className="pill pill--ready">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Definite"}
                              </span>
                            </td>
                            <td className="dt__td nw" data-a="">
                              <a className="btn" href="#GRP-0003">{"Open"}</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="s-note">
                    <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#info" />
                    </svg>
                    <span>{"Open a group to see its room block, members, billing and history."}</span>
                  </div>
                </div>
                <div className="variant v-GRP-0001">
                  <div className="bk-bar">
                    <a className="btn" href="#list">{"← All groups"}</a>
                    <span className="s-spacer" />
                    <a className="btn" href="/reservation/rs-15-rooming-list/#GRP-0001" data-leads-to="RS-15">{"Rooming list"}</a>
                    <Link className="btn" data-leads-to="RS-12" to={"/reservation/rs-12-cancellation"}>{"Cancel group rooms"}</Link>
                    <a className="btn" href="#RS-14-conf-GRP-0001" data-opens="RS-14c">{"Group confirmation"}</a>
                  </div>
                  <section className="card bk-hero" data-code="RS-14-hero">
                    <div>
                      <p className="field__hint">{"Group GRP-0001"}</p>
                      <h2 className="bk-hero__t">{"Vijay–Nathan wedding"}</h2>
                      <p className="bk-hero__s">{"22 – 25 Nov · 12 member bookings · cut-off 8 Nov (in 17 days)"}</p>
                      <span className="pill pill--ready">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#check-circle" />
                        </svg>
                        {"Definite"}
                      </span>
                    </div>
                    <div style={{"minWidth": "220px"}}>
                      <strong className="num">{"27 / 66"}</strong>
                      {" picked up"}
                      <div className="rs04-meter" role="img" aria-label="41 percent picked up">
                        <span style={{"width": "41%"}} />
                      </div>
                    </div>
                  </section>
                  <div style={{"marginTop": "12px"}}>
                    <div className="stabs">
                      <input type="radio" name="tGRP0001" id="tGRP0001-1" aria-label="Details" defaultChecked={true} />
                      <input type="radio" name="tGRP0001" id="tGRP0001-2" aria-label="Room block" />
                      <input type="radio" name="tGRP0001" id="tGRP0001-r" aria-label="Rates & meals" />
                      <input type="radio" name="tGRP0001" id="tGRP0001-3" aria-label="Members" />
                      <input type="radio" name="tGRP0001" id="tGRP0001-4" aria-label="Billing & deposits" />
                      <input type="radio" name="tGRP0001" id="tGRP0001-5" aria-label="Communication" />
                      <input type="radio" name="tGRP0001" id="tGRP0001-6" aria-label="History" />
                      <div className="stabs__list" role="tablist">
                        <label htmlFor="tGRP0001-1">{"Details"}</label>
                        <label htmlFor="tGRP0001-2">{"Room block"}</label>
                        <label htmlFor="tGRP0001-r">{"Rates & meals"}</label>
                        <label htmlFor="tGRP0001-3">{"Members"}</label>
                        <label htmlFor="tGRP0001-4">{"Billing & deposits"}</label>
                        <label htmlFor="tGRP0001-5">{"Communication"}</label>
                        <label htmlFor="tGRP0001-6">{"History"}</label>
                      </div>
                      <div className="stabs__panels">
                        <section className="stabs__panel" data-code="RS-14-1" aria-label="Details">
                          <div className="s-grid2">
                            <section className="card">
                              <dl className="s-kv">
                                <dt>{"Group"}</dt>
                                <dd>{"GRP-0001"}</dd>
                                <dt>{"Name"}</dt>
                                <dd>{"Vijay–Nathan wedding"}</dd>
                                <dt>{"Type"}</dt>
                                <dd>{"Wedding"}</dd>
                                <dt data-flow="rs14-seg">{"Segment"}</dt>
                                <dd>{"Wedding"}</dd>
                                <dt>{"Children"}</dt>
                                <dd>{"11 and under free with existing beds (max 2 per room)"}</dd>
                                <dt>{"Extras available"}</dt>
                                <dd>{"Extra bed, Breakfast, Airport transfer (one way), Gala dinner, Ayurveda therapy session, Seafood Grill dinner, Early check-in, Late check-out (until 18:00), Celebration cake"}</dd>
                                <dt>{"Status"}</dt>
                                <dd>
                                  <span className="pill pill--ready">
                                    <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                      <use href="/assets/icons/sprite.svg#check-circle" />
                                    </svg>
                                    {"Definite"}
                                  </span>
                                </dd>
                                <dt>{"Contact"}</dt>
                                <dd>{"Sunil Vijay · +91 9847012345"}</dd>
                                <dt>{"Email"}</dt>
                                <dd>{"sunil.vijay@example.com"}</dd>
                                <dt>{"Company"}</dt>
                                <dd>{"–"}</dd>
                              </dl>
                            </section>
                            <section className="card">
                              <dl className="s-kv">
                                <dt>{"Arrival"}</dt>
                                <dd>{"Sun 22 Nov"}</dd>
                                <dt>{"Departure"}</dt>
                                <dd>{"Wed 25 Nov"}</dd>
                                <dt>{"Cut-off date"}</dt>
                                <dd>{"Sun 8 Nov · in 17 days"}</dd>
                                <dt>{"Group rate plan"}</dt>
                                <dd>{"GROUP – Group rate"}</dd>
                                <dt>{"Halls"}</dt>
                                <dd>{"Meenachil Hall"}</dd>
                                <dt>{"Sales person"}</dt>
                                <dd>{"Farah Khan"}</dd>
                              </dl>
                            </section>
                          </div>
                          <section className="card" style={{"marginTop": "12px"}} data-code="RS-14-notes">
                            <div className="field">
                              <label className="field__label" htmlFor="f1">{"Notes"}</label>
                              <textarea className="field__input field__input--area" id="f1" defaultValue={"Two-day wedding celebrations with a reception in Meenachil Hall. Vegetarian catering for most guests."} />
                              <span className="field__hint">{"Internal notes about this group: contract points, special arrangements, who to call"}</span>
                            </div>
                            <div className="s-actions">
                              <a className="btn btn--primary" href="#flow-done">{"Save notes"}</a>
                            </div>
                          </section>
                          <section className="card" style={{"marginTop": "12px"}} data-code="RS-14-terms">
                            <h2 className="s-card-title" style={{"marginBottom": "10px"}}>{"Contract terms"}</h2>
                            <div className="s-grid3">
                              <div className="field">
                                <label className="field__label" htmlFor="f2">{"Block type"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="f2" defaultValue={"Deducting – the rooms are held back from sale"}>
                                    <option>{"Deducting – the rooms are held back from sale"}</option>
                                    <option>{"Non-deducting – a wish list, rooms stay on sale"}</option>
                                  </select>
                                  <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                                <span className="field__hint">{"Decides whether the block reduces rooms left"}</span>
                              </div>
                              <div className="field" data-fw="s">
                                <label className="field__label" htmlFor="f3">{"Cut-off (date and time, IST)"}</label>
                                <div className="dpk-dt">
                                  <div className="dpk">
                                    <button type="button" className="dpk-f field__input" id="f3" aria-haspopup="dialog">
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
                                      <span className="dpk-f__ph">{"Date"}</span>
                                    </button>
                                    <div className="dpk-pop" tabIndex="-1" role="dialog" aria-label="Choose a date">
                                      <div className="dpk-h">
                                        <select className="dpk-m" name="f3-month" aria-label="Month" defaultValue={"11"}>
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
                                        <select className="dpk-y" name="f3-year" aria-label="Year" defaultValue={"2026"}>
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
                                          <input type="radio" name="f3" value="01" />
                                          {"1"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f3" value="02" />
                                          {"2"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f3" value="03" />
                                          {"3"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f3" value="04" />
                                          {"4"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f3" value="05" />
                                          {"5"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f3" value="06" />
                                          {"6"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f3" value="07" />
                                          {"7"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f3" value="08" defaultChecked={true} />
                                          {"8"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f3" value="09" />
                                          {"9"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f3" value="10" />
                                          {"10"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f3" value="11" />
                                          {"11"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f3" value="12" />
                                          {"12"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f3" value="13" />
                                          {"13"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f3" value="14" />
                                          {"14"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f3" value="15" />
                                          {"15"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f3" value="16" />
                                          {"16"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f3" value="17" />
                                          {"17"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f3" value="18" />
                                          {"18"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f3" value="19" />
                                          {"19"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f3" value="20" />
                                          {"20"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f3" value="21" />
                                          {"21"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f3" value="22" />
                                          {"22"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f3" value="23" />
                                          {"23"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f3" value="24" />
                                          {"24"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f3" value="25" />
                                          {"25"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f3" value="26" />
                                          {"26"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f3" value="27" />
                                          {"27"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f3" value="28" />
                                          {"28"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f3" value="29" />
                                          {"29"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f3" value="30" />
                                          {"30"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f3" value="31" />
                                          {"31"}
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                  <input className="field__input num dpk-time" type="time" name="f3-time" aria-label="Time" defaultValue={"18:00"} />
                                </div>
                                <span className="field__hint">{"Unpicked rooms are released at exactly this time"}</span>
                              </div>
                              <div className="field" data-fw="s">
                                <label className="field__label" htmlFor="f4">{"Rooming list due"}</label>
                                <div className="dpk">
                                  <button type="button" className="dpk-f field__input" id="f4" aria-haspopup="dialog">
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
                                      <select className="dpk-m" name="f4-month" aria-label="Month" defaultValue={"11"}>
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
                                      <select className="dpk-y" name="f4-year" aria-label="Year" defaultValue={"2026"}>
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
                                        <input type="radio" name="f4" value="01" />
                                        {"1"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f4" value="02" />
                                        {"2"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f4" value="03" />
                                        {"3"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f4" value="04" />
                                        {"4"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f4" value="05" defaultChecked={true} />
                                        {"5"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f4" value="06" />
                                        {"6"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f4" value="07" />
                                        {"7"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f4" value="08" />
                                        {"8"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f4" value="09" />
                                        {"9"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f4" value="10" />
                                        {"10"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f4" value="11" />
                                        {"11"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f4" value="12" />
                                        {"12"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f4" value="13" />
                                        {"13"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f4" value="14" />
                                        {"14"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f4" value="15" />
                                        {"15"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f4" value="16" />
                                        {"16"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f4" value="17" />
                                        {"17"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f4" value="18" />
                                        {"18"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f4" value="19" />
                                        {"19"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f4" value="20" />
                                        {"20"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f4" value="21" />
                                        {"21"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f4" value="22" />
                                        {"22"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f4" value="23" />
                                        {"23"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f4" value="24" />
                                        {"24"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f4" value="25" />
                                        {"25"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f4" value="26" />
                                        {"26"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f4" value="27" />
                                        {"27"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f4" value="28" />
                                        {"28"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f4" value="29" />
                                        {"29"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f4" value="30" />
                                        {"30"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f4" value="31" />
                                        {"31"}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <span className="field__hint">{"Names after this date need a manager"}</span>
                              </div>
                              <div className="field" data-fw="x">
                                <label className="field__label" htmlFor="f5">{"Attrition allowance (%)"}</label>
                                <input className="field__input num" id="f5" type="number" defaultValue={"10"} />
                                <span className="field__hint">{"Share of the block the group may release without charge"}</span>
                              </div>
                              <div className="field">
                                <label className="field__label" htmlFor="f6">{"A member cancels before cut-off"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="f6" defaultValue={"Room goes back to the group block"}>
                                    <option>{"Room goes back to the group block"}</option>
                                    <option>{"Room goes to general sale"}</option>
                                  </select>
                                  <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </div>
                              <div className="field">
                                <label className="field__label" htmlFor="f7">{"A member cancels after cut-off"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="f7" defaultValue={"Room goes to general sale"}>
                                    <option>{"Room goes to general sale"}</option>
                                    <option>{"Room goes back to the group block"}</option>
                                  </select>
                                  <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </div>
                              <div className="field">
                                <label className="field__label" htmlFor="f8">{"Payment responsibility"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="f8" defaultValue={"Master bill: rooms and tax · guests: incidentals"}>
                                    <option>{"Master bill: rooms and tax · guests: incidentals"}</option>
                                    <option>{"Master bill: everything"}</option>
                                    <option>{"Each guest pays their own"}</option>
                                  </select>
                                  <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </div>
                              <div className="field">
                                <label className="field__label" htmlFor="f9">{"Contract / agreement no."}</label>
                                <input className="field__input" id="f9" type="text" defaultValue={""} />
                                <span className="field__hint">{"Signed agreement the block follows"}</span>
                              </div>
                              <div className="field" data-fw="s">
                                <label className="field__label" htmlFor="f10">{"Contract signed on"}</label>
                                <div className="dpk">
                                  <button type="button" className="dpk-f field__input" id="f10" aria-haspopup="dialog">
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
                                      <select className="dpk-m" name="f10-month" aria-label="Month" defaultValue={"10"}>
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
                                      <select className="dpk-y" name="f10-year" aria-label="Year" defaultValue={"2026"}>
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
                                        <input type="radio" name="f10" value="01" />
                                        {"1"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f10" value="02" />
                                        {"2"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f10" value="03" />
                                        {"3"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f10" value="04" />
                                        {"4"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f10" value="05" />
                                        {"5"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f10" value="06" />
                                        {"6"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f10" value="07" />
                                        {"7"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f10" value="08" />
                                        {"8"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f10" value="09" />
                                        {"9"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f10" value="10" />
                                        {"10"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f10" value="11" />
                                        {"11"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f10" value="12" />
                                        {"12"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f10" value="13" />
                                        {"13"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f10" value="14" />
                                        {"14"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f10" value="15" />
                                        {"15"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f10" value="16" />
                                        {"16"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f10" value="17" />
                                        {"17"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f10" value="18" />
                                        {"18"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f10" value="19" />
                                        {"19"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f10" value="20" />
                                        {"20"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f10" value="21" />
                                        {"21"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f10" value="22" />
                                        {"22"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f10" value="23" />
                                        {"23"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f10" value="24" />
                                        {"24"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f10" value="25" />
                                        {"25"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f10" value="26" />
                                        {"26"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f10" value="27" />
                                        {"27"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f10" value="28" />
                                        {"28"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f10" value="29" />
                                        {"29"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f10" value="30" />
                                        {"30"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f10" value="31" />
                                        {"31"}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="s-note">
                              <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#info" />
                              </svg>
                              <span>{"How many rooms the group holds: on the busiest night the block is 22 rooms, of which 12 are already member bookings and 10 are not picked up yet. The group holds 22 rooms in total – the 12 member bookings replace their part of the block, they are not counted twice."}</span>
                            </div>
                          </section>
                        </section>
                        <section className="stabs__panel" data-code="RS-14-2" aria-label="Room block">
                          <div className="s-scroll">
                            <table className="dt__table dt--hug" data-code="RS-14-2-grid" data-mc="">
                              <caption className="sr-only">{"Room block"}</caption>
                              <thead>
                                <tr>
                                  <th scope="col">{"Room type"}</th>
                                  <th scope="col" className="dt__th--right">{"Sun 22 Nov"}</th>
                                  <th scope="col" className="dt__th--right">{"Mon 23 Nov"}</th>
                                  <th scope="col" className="dt__th--right">{"Tue 24 Nov"}</th>
                                  <th scope="col" className="dt__th--right">{"Picked up"}</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                    <strong>{"Pool Deluxe Room"}</strong>
                                  </td>
                                  <td className="dt__td dt__td--right num" data-label="Sun 22 Nov" data-w2="">
                                    <input className="field__input num" style={{"width": "64px"}} type="number" min="0" aria-label="PDLX blocked, 22 Nov" defaultValue={"8"} />
                                    {" "}
                                    <span className="field__hint">{"picked 2"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right num" data-label="Mon 23 Nov" data-w2="">
                                    <input className="field__input num" style={{"width": "64px"}} type="number" min="0" aria-label="PDLX blocked, 23 Nov" defaultValue={"8"} />
                                    {" "}
                                    <span className="field__hint">{"picked 6"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right num" data-label="Tue 24 Nov" data-w2="">
                                    <input className="field__input num" style={{"width": "64px"}} type="number" min="0" aria-label="PDLX blocked, 24 Nov" defaultValue={"8"} />
                                    {" "}
                                    <span className="field__hint">{"picked 6"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right num" data-label="Picked up" data-w2="">{"14 / 24"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                    <strong>{"Garden Deluxe Room"}</strong>
                                  </td>
                                  <td className="dt__td dt__td--right num" data-label="Sun 22 Nov" data-w2="">
                                    <input className="field__input num" style={{"width": "64px"}} type="number" min="0" aria-label="GDLX blocked, 22 Nov" defaultValue={"14"} />
                                    {" "}
                                    <span className="field__hint">{"picked 1"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right num" data-label="Mon 23 Nov" data-w2="">
                                    <input className="field__input num" style={{"width": "64px"}} type="number" min="0" aria-label="GDLX blocked, 23 Nov" defaultValue={"14"} />
                                    {" "}
                                    <span className="field__hint">{"picked 6"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right num" data-label="Tue 24 Nov" data-w2="">
                                    <input className="field__input num" style={{"width": "64px"}} type="number" min="0" aria-label="GDLX blocked, 24 Nov" defaultValue={"14"} />
                                    {" "}
                                    <span className="field__hint">{"picked 6"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right num" data-label="Picked up" data-w2="">{"13 / 42"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                    <strong>{"Deluxe Suite"}</strong>
                                  </td>
                                  <td className="dt__td dt__td--right num" data-label="Sun 22 Nov" data-w2="">
                                    <input className="field__input num" style={{"width": "64px"}} type="number" min="0" aria-label="DLXS blocked, Sun 22 Nov" defaultValue={"0"} />
                                    {" "}
                                    <span className="field__hint">{"picked 0"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right num" data-label="Mon 23 Nov" data-w2="">
                                    <input className="field__input num" style={{"width": "64px"}} type="number" min="0" aria-label="DLXS blocked, Mon 23 Nov" defaultValue={"0"} />
                                    {" "}
                                    <span className="field__hint">{"picked 0"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right num" data-label="Tue 24 Nov" data-w2="">
                                    <input className="field__input num" style={{"width": "64px"}} type="number" min="0" aria-label="DLXS blocked, Tue 24 Nov" defaultValue={"0"} />
                                    {" "}
                                    <span className="field__hint">{"picked 0"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right num" data-label="Picked up" data-w2="">{"0 / 0"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                    <strong>{"Premium Suite"}</strong>
                                  </td>
                                  <td className="dt__td dt__td--right num" data-label="Sun 22 Nov" data-w2="">
                                    <input className="field__input num" style={{"width": "64px"}} type="number" min="0" aria-label="PRMS blocked, Sun 22 Nov" defaultValue={"0"} />
                                    {" "}
                                    <span className="field__hint">{"picked 0"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right num" data-label="Mon 23 Nov" data-w2="">
                                    <input className="field__input num" style={{"width": "64px"}} type="number" min="0" aria-label="PRMS blocked, Mon 23 Nov" defaultValue={"0"} />
                                    {" "}
                                    <span className="field__hint">{"picked 0"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right num" data-label="Tue 24 Nov" data-w2="">
                                    <input className="field__input num" style={{"width": "64px"}} type="number" min="0" aria-label="PRMS blocked, Tue 24 Nov" defaultValue={"0"} />
                                    {" "}
                                    <span className="field__hint">{"picked 0"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right num" data-label="Picked up" data-w2="">{"0 / 0"}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="rs04-meter" role="img" aria-label="41 percent picked up">
                            <span style={{"width": "41%"}} />
                          </div>
                          <p className="field__hint">
                            <strong>{"27 of 66 block room-nights picked up (41%)."}</strong>
                            {" Cut-off in 17 days; unpicked rooms are released automatically."}
                          </p>
                          <div className="row">
                            <a className="btn" href="#RS-14a-GRP-0001" data-opens="RS-14a">{"Release unused rooms"}</a>
                            <a className="btn" href="/reservation/rs-15-rooming-list/#GRP-0001" data-leads-to="RS-15">{"Open rooming list"}</a>
                            <a className="btn btn--primary" href="#flow-done">{"Save block"}</a>
                          </div>
                        </section>
                        <section className="stabs__panel" data-code="RS-14-rates" aria-label="Rates & meals">
                          <section className="card" data-code="RS-14-7-matrix">
                            <header className="rs14-h">
                              <div>
                                <h3 className="s-card-title">{"Group rates · Vijay–Nathan wedding"}</h3>
                                <p className="field__hint">{"Every room category of the hotel can be in the group. Price each one for single, double and triple occupancy and for every meal plan – by hand, or fill from BAR or the company's grid and then adjust. Rates are per room per night before GST."}</p>
                              </div>
                              <div className="rs14-acts">
                                <label className="rs14-src">
                                  <span>{"Fill from"}</span>
                                  <select className="field__input field__input--select">
                                    <option>{"Group discount on BAR (12 %)"}</option>
                                    <option>{"Company rate grid"}</option>
                                    <option>{"Another group"}</option>
                                    <option>{"Nothing – I type every rate"}</option>
                                  </select>
                                </label>
                                <a className="btn" href="#rs14-upload">
                                  <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#upload" />
                                  </svg>
                                  {"Upload rates"}
                                </a>
                              </div>
                            </header>
                            <div className="s-scroll rs14-gridscroll">
                              <table className="dt__table dt--hug" data-nosort="" data-mc="">
                                <caption className="sr-only">{"Group rates by room category, meal plan and occupancy"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Room category"}</th>
                                    <th scope="col">{"Meal plan"}</th>
                                    <th scope="col">{"Single (SGL)"}</th>
                                    <th scope="col">{"Double (DBL)"}</th>
                                    <th scope="col">{"Triple (TPL)"}</th>
                                    <th scope="col" className="dt__th--right">{"Extra adult"}</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room category" data-w2="" data-t="">
                                      <span className="code-chip">{"GDLX"}</span>
                                      {" Garden Deluxe Room"}
                                    </td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"EP"}</td>
                                    <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="GDLX EP Single (SGL)" defaultValue={"6,335"} />
                                    </td>
                                    <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="GDLX EP Double (DBL)" defaultValue={"7,655"} />
                                    </td>
                                    <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="GDLX EP Triple (TPL)" defaultValue={"8,975"} />
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Extra adult" data-w2="">{"₹1,320"}</td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room category" data-w2="" data-t="">
                                      <span className="code-chip">{"GDLX"}</span>
                                      {" Garden Deluxe Room"}
                                    </td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"CP"}</td>
                                    <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="GDLX CP Single (SGL)" defaultValue={"7,040"} />
                                    </td>
                                    <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="GDLX CP Double (DBL)" defaultValue={"9,060"} />
                                    </td>
                                    <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="GDLX CP Triple (TPL)" defaultValue={"11,085"} />
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Extra adult" data-w2="">{"₹2,025"}</td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room category" data-w2="" data-t="">
                                      <span className="code-chip">{"GDLX"}</span>
                                      {" Garden Deluxe Room"}
                                    </td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"MAP"}</td>
                                    <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="GDLX MAP Single (SGL)" defaultValue={"8,005"} />
                                    </td>
                                    <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="GDLX MAP Double (DBL)" defaultValue={"11,000"} />
                                    </td>
                                    <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="GDLX MAP Triple (TPL)" defaultValue={"13,990"} />
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Extra adult" data-w2="">{"₹2,990"}</td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room category" data-w2="" data-t="">
                                      <span className="code-chip">{"GDLX"}</span>
                                      {" Garden Deluxe Room"}
                                    </td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"AP"}</td>
                                    <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="GDLX AP Single (SGL)" defaultValue={"8,845"} />
                                    </td>
                                    <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="GDLX AP Double (DBL)" defaultValue={"12,670"} />
                                    </td>
                                    <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="GDLX AP Triple (TPL)" defaultValue={"16,495"} />
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Extra adult" data-w2="">{"₹3,825"}</td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room category" data-w2="" data-t="">
                                      <span className="code-chip">{"PDLX"}</span>
                                      {" Pool Deluxe Room"}
                                    </td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"EP"}</td>
                                    <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PDLX EP Single (SGL)" defaultValue={"6,775"} />
                                    </td>
                                    <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PDLX EP Double (DBL)" defaultValue={"8,095"} />
                                    </td>
                                    <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PDLX EP Triple (TPL)" defaultValue={"9,415"} />
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Extra adult" data-w2="">{"₹1,320"}</td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room category" data-w2="" data-t="">
                                      <span className="code-chip">{"PDLX"}</span>
                                      {" Pool Deluxe Room"}
                                    </td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"CP"}</td>
                                    <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PDLX CP Single (SGL)" defaultValue={"7,480"} />
                                    </td>
                                    <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PDLX CP Double (DBL)" defaultValue={"9,500"} />
                                    </td>
                                    <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PDLX CP Triple (TPL)" defaultValue={"11,525"} />
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Extra adult" data-w2="">{"₹2,025"}</td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room category" data-w2="" data-t="">
                                      <span className="code-chip">{"PDLX"}</span>
                                      {" Pool Deluxe Room"}
                                    </td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"MAP"}</td>
                                    <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PDLX MAP Single (SGL)" defaultValue={"8,445"} />
                                    </td>
                                    <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PDLX MAP Double (DBL)" defaultValue={"11,440"} />
                                    </td>
                                    <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PDLX MAP Triple (TPL)" defaultValue={"14,430"} />
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Extra adult" data-w2="">{"₹2,990"}</td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room category" data-w2="" data-t="">
                                      <span className="code-chip">{"PDLX"}</span>
                                      {" Pool Deluxe Room"}
                                    </td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"AP"}</td>
                                    <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PDLX AP Single (SGL)" defaultValue={"9,285"} />
                                    </td>
                                    <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PDLX AP Double (DBL)" defaultValue={"13,110"} />
                                    </td>
                                    <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PDLX AP Triple (TPL)" defaultValue={"16,935"} />
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Extra adult" data-w2="">{"₹3,825"}</td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room category" data-w2="" data-t="">
                                      <span className="code-chip">{"DLXS"}</span>
                                      {" Deluxe Suite"}
                                    </td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"EP"}</td>
                                    <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="DLXS EP Single (SGL)" defaultValue={"13,375"} />
                                    </td>
                                    <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="DLXS EP Double (DBL)" defaultValue={"14,695"} />
                                    </td>
                                    <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="DLXS EP Triple (TPL)" defaultValue={"16,015"} />
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Extra adult" data-w2="">{"₹1,320"}</td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room category" data-w2="" data-t="">
                                      <span className="code-chip">{"DLXS"}</span>
                                      {" Deluxe Suite"}
                                    </td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"CP"}</td>
                                    <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="DLXS CP Single (SGL)" defaultValue={"14,080"} />
                                    </td>
                                    <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="DLXS CP Double (DBL)" defaultValue={"16,100"} />
                                    </td>
                                    <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="DLXS CP Triple (TPL)" defaultValue={"18,125"} />
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Extra adult" data-w2="">{"₹2,025"}</td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room category" data-w2="" data-t="">
                                      <span className="code-chip">{"DLXS"}</span>
                                      {" Deluxe Suite"}
                                    </td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"MAP"}</td>
                                    <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="DLXS MAP Single (SGL)" defaultValue={"15,045"} />
                                    </td>
                                    <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="DLXS MAP Double (DBL)" defaultValue={"18,040"} />
                                    </td>
                                    <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="DLXS MAP Triple (TPL)" defaultValue={"21,030"} />
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Extra adult" data-w2="">{"₹2,990"}</td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room category" data-w2="" data-t="">
                                      <span className="code-chip">{"DLXS"}</span>
                                      {" Deluxe Suite"}
                                    </td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"AP"}</td>
                                    <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="DLXS AP Single (SGL)" defaultValue={"15,885"} />
                                    </td>
                                    <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="DLXS AP Double (DBL)" defaultValue={"19,710"} />
                                    </td>
                                    <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="DLXS AP Triple (TPL)" defaultValue={"23,535"} />
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Extra adult" data-w2="">{"₹3,825"}</td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room category" data-w2="" data-t="">
                                      <span className="code-chip">{"PRMS"}</span>
                                      {" Premium Suite"}
                                    </td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"EP"}</td>
                                    <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PRMS EP Single (SGL)" defaultValue={"20,415"} />
                                    </td>
                                    <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PRMS EP Double (DBL)" defaultValue={"21,735"} />
                                    </td>
                                    <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PRMS EP Triple (TPL)" defaultValue={"23,055"} />
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Extra adult" data-w2="">{"₹1,320"}</td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room category" data-w2="" data-t="">
                                      <span className="code-chip">{"PRMS"}</span>
                                      {" Premium Suite"}
                                    </td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"CP"}</td>
                                    <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PRMS CP Single (SGL)" defaultValue={"21,120"} />
                                    </td>
                                    <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PRMS CP Double (DBL)" defaultValue={"23,145"} />
                                    </td>
                                    <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PRMS CP Triple (TPL)" defaultValue={"25,165"} />
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Extra adult" data-w2="">{"₹2,025"}</td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room category" data-w2="" data-t="">
                                      <span className="code-chip">{"PRMS"}</span>
                                      {" Premium Suite"}
                                    </td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"MAP"}</td>
                                    <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PRMS MAP Single (SGL)" defaultValue={"22,090"} />
                                    </td>
                                    <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PRMS MAP Double (DBL)" defaultValue={"25,080"} />
                                    </td>
                                    <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PRMS MAP Triple (TPL)" defaultValue={"28,070"} />
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Extra adult" data-w2="">{"₹2,990"}</td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room category" data-w2="" data-t="">
                                      <span className="code-chip">{"PRMS"}</span>
                                      {" Premium Suite"}
                                    </td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"AP"}</td>
                                    <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PRMS AP Single (SGL)" defaultValue={"22,925"} />
                                    </td>
                                    <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PRMS AP Double (DBL)" defaultValue={"26,750"} />
                                    </td>
                                    <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PRMS AP Triple (TPL)" defaultValue={"30,580"} />
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Extra adult" data-w2="">{"₹3,825"}</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </section>
                          <section className="card" data-code="RS-14-7-days">
                            <h3 className="s-card-title">{"Meal plan for each day"}</h3>
                            <p className="field__hint">{"Each night of the stay can have its own meal plan – for example breakfast only on arrival, half board on the conference day. The plan chosen here picks the rate from the grid above for that night."}</p>
                            <div className="s-scroll">
                              <table className="dt__table dt--hug" data-nosort="" data-mc="">
                                <caption className="sr-only">{"Meal plan for each day of the stay"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Night"}</th>
                                    <th scope="col">{"Meal plan that day"}</th>
                                    <th scope="col">{"Includes"}</th>
                                    <th scope="col">{"Applies to"}</th>
                                    <th scope="col" className="dt__th--right">{"Pool Deluxe · double"}</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="dt__td" data-label="Night" data-w2="" data-t="">
                                      <b>{"Sun 22 Nov"}</b>
                                    </td>
                                    <td className="dt__td" data-label="Meal plan that day" data-w2="">
                                      <div className="field__wrap">
                                        <select className="field__input field__input--select" aria-label="Meal plan on Sun 22 Nov" defaultValue={"CP"}>
                                          <option>{"EP"}</option>
                                          <option>{"CP"}</option>
                                          <option>{"MAP"}</option>
                                          <option>{"AP"}</option>
                                        </select>
                                      </div>
                                    </td>
                                    <td className="dt__td nw" data-label="Includes" data-w2="">{"Breakfast"}</td>
                                    <td className="dt__td" data-label="Applies to" data-w2="">
                                      <div className="field__wrap">
                                        <select className="field__input field__input--select" aria-label="Applies to on Sun 22 Nov" defaultValue={"All rooms"}>
                                          <option>{"All rooms"}</option>
                                          <option>{"Chosen room categories"}</option>
                                          <option>{"Chosen rooms"}</option>
                                        </select>
                                      </div>
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Pool Deluxe · double" data-w2="">{"₹9,500"}</td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td" data-label="Night" data-w2="" data-t="">
                                      <b>{"Mon 23 Nov"}</b>
                                    </td>
                                    <td className="dt__td" data-label="Meal plan that day" data-w2="">
                                      <div className="field__wrap">
                                        <select className="field__input field__input--select" aria-label="Meal plan on Mon 23 Nov" defaultValue={"MAP"}>
                                          <option>{"EP"}</option>
                                          <option>{"CP"}</option>
                                          <option>{"MAP"}</option>
                                          <option>{"AP"}</option>
                                        </select>
                                      </div>
                                    </td>
                                    <td className="dt__td nw" data-label="Includes" data-w2="">{"Breakfast · Dinner"}</td>
                                    <td className="dt__td" data-label="Applies to" data-w2="">
                                      <div className="field__wrap">
                                        <select className="field__input field__input--select" aria-label="Applies to on Mon 23 Nov" defaultValue={"All rooms"}>
                                          <option>{"All rooms"}</option>
                                          <option>{"Chosen room categories"}</option>
                                          <option>{"Chosen rooms"}</option>
                                        </select>
                                      </div>
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Pool Deluxe · double" data-w2="">{"₹11,440"}</td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td" data-label="Night" data-w2="" data-t="">
                                      <b>{"Tue 24 Nov"}</b>
                                    </td>
                                    <td className="dt__td" data-label="Meal plan that day" data-w2="">
                                      <div className="field__wrap">
                                        <select className="field__input field__input--select" aria-label="Meal plan on Tue 24 Nov" defaultValue={"CP"}>
                                          <option>{"EP"}</option>
                                          <option>{"CP"}</option>
                                          <option>{"MAP"}</option>
                                          <option>{"AP"}</option>
                                        </select>
                                      </div>
                                    </td>
                                    <td className="dt__td nw" data-label="Includes" data-w2="">{"Breakfast"}</td>
                                    <td className="dt__td" data-label="Applies to" data-w2="">
                                      <div className="field__wrap">
                                        <select className="field__input field__input--select" aria-label="Applies to on Tue 24 Nov" defaultValue={"All rooms"}>
                                          <option>{"All rooms"}</option>
                                          <option>{"Chosen room categories"}</option>
                                          <option>{"Chosen rooms"}</option>
                                        </select>
                                      </div>
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Pool Deluxe · double" data-w2="">{"₹9,500"}</td>
                                  </tr>
                                  <tr className="rs14-tot">
                                    <td className="dt__td" data-label="Night" data-w2="" data-t="">
                                      <b>{"3 nights"}</b>
                                    </td>
                                    <td className="dt__td" data-e="" />
                                    <td className="dt__td" data-e="" />
                                    <td className="dt__td" data-e="" />
                                    <td className="dt__td dt__td--right num" data-label="Pool Deluxe · double" data-w2="">
                                      <b>{"₹30,440"}</b>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div className="s-note">
                              <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#info" />
                              </svg>
                              <span>
                                <b>{"Billing follows the confirmation."}</b>
                                {" The meal plan and rate of each night, as sent in the group confirmation, are the only ones posted to the guest folios. A change after confirmation needs a new confirmation (RS-11)."}
                              </span>
                            </div>
                          </section>
                          <section className="card" data-code="RS-14-7-rooms">
                            <h3 className="s-card-title">{"Price for each room"}</h3>
                            <p className="field__hint">{"Type an own price for a single room when it differs from the group rate (a VIP, a complimentary room). A different price needs a reason and may go for approval (RS-20)."}</p>
                            <div className="s-scroll">
                              <table className="dt__table dt--hug" data-nosort="" data-mc="">
                                <caption className="sr-only">{"Price for each room"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Room"}</th>
                                    <th scope="col">{"Category"}</th>
                                    <th scope="col">{"Occupancy"}</th>
                                    <th scope="col">{"Meal plan"}</th>
                                    <th scope="col" className="dt__th--right">{"Group rate"}</th>
                                    <th scope="col">{"Own price (₹)"}</th>
                                    <th scope="col">{"Reason"}</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room" data-t="">
                                      <b>{"Room 1"}</b>
                                    </td>
                                    <td className="dt__td nw" data-label="Category" data-w2="">{"PDLX"}</td>
                                    <td className="dt__td nw" data-label="Occupancy" data-w2="">{"DBL"}</td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"CP"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Group rate" data-w2="">{"₹9,500"}</td>
                                    <td className="dt__td" data-label="Own price (₹)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="Room 1 own price" defaultValue={"9,500"} />
                                    </td>
                                    <td className="dt__td" data-label="Reason">
                                      <input className="field__input" type="text" placeholder="Why a different price?" aria-label="Room 1 reason" />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room" data-t="">
                                      <b>{"Room 2"}</b>
                                    </td>
                                    <td className="dt__td nw" data-label="Category" data-w2="">{"PDLX"}</td>
                                    <td className="dt__td nw" data-label="Occupancy" data-w2="">{"DBL"}</td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"CP"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Group rate" data-w2="">{"₹9,500"}</td>
                                    <td className="dt__td" data-label="Own price (₹)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="Room 2 own price" defaultValue={"9,500"} />
                                    </td>
                                    <td className="dt__td" data-label="Reason">
                                      <input className="field__input" type="text" placeholder="Why a different price?" aria-label="Room 2 reason" />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room" data-t="">
                                      <b>{"Room 3"}</b>
                                    </td>
                                    <td className="dt__td nw" data-label="Category" data-w2="">{"PDLX"}</td>
                                    <td className="dt__td nw" data-label="Occupancy" data-w2="">{"SGL"}</td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"CP"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Group rate" data-w2="">{"₹7,480"}</td>
                                    <td className="dt__td" data-label="Own price (₹)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="Room 3 own price" defaultValue={"7,480"} />
                                    </td>
                                    <td className="dt__td" data-label="Reason">
                                      <input className="field__input" type="text" placeholder="Why a different price?" aria-label="Room 3 reason" />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room" data-t="">
                                      <b>{"Room 4"}</b>
                                    </td>
                                    <td className="dt__td nw" data-label="Category" data-w2="">{"GDLX"}</td>
                                    <td className="dt__td nw" data-label="Occupancy" data-w2="">{"DBL"}</td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"MAP"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Group rate" data-w2="">{"₹11,000"}</td>
                                    <td className="dt__td" data-label="Own price (₹)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="Room 4 own price" defaultValue={"11,000"} />
                                    </td>
                                    <td className="dt__td" data-label="Reason">
                                      <input className="field__input" type="text" placeholder="Why a different price?" aria-label="Room 4 reason" />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room" data-t="">
                                      <b>{"Room 5"}</b>
                                    </td>
                                    <td className="dt__td nw" data-label="Category" data-w2="">{"GDLX"}</td>
                                    <td className="dt__td nw" data-label="Occupancy" data-w2="">{"TPL"}</td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"CP"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Group rate" data-w2="">{"₹11,085"}</td>
                                    <td className="dt__td" data-label="Own price (₹)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="Room 5 own price" defaultValue={"11,085"} />
                                    </td>
                                    <td className="dt__td" data-label="Reason">
                                      <input className="field__input" type="text" placeholder="Why a different price?" aria-label="Room 5 reason" />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room" data-t="">
                                      <b>{"Room 6"}</b>
                                    </td>
                                    <td className="dt__td nw" data-label="Category" data-w2="">{"DLXS"}</td>
                                    <td className="dt__td nw" data-label="Occupancy" data-w2="">{"DBL"}</td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"MAP"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Group rate" data-w2="">{"₹18,040"}</td>
                                    <td className="dt__td" data-label="Own price (₹)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="Room 6 own price" defaultValue={"18,040"} />
                                    </td>
                                    <td className="dt__td" data-label="Reason">
                                      <input className="field__input" type="text" placeholder="Why a different price?" aria-label="Room 6 reason" />
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div className="row">
                              <a className="btn" href="#">{"Cancel"}</a>
                              <a className="btn btn--primary" href="#flow-done">{"Save rates"}</a>
                            </div>
                          </section>
                        </section>
                        <section className="stabs__panel" data-code="RS-14-3" aria-label="Members">
                          <div className="pgw">
                            <div className="s-scroll">
                              <table className="srt dt__table dt--hug" data-code="RS-14-3-list" style={{"--srt-cols": "auto auto auto auto auto auto"}} data-mc="">
                                <caption className="sr-only">{"Members"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">
                                      <input className="srt-i srt-a0" type="radio" name="strs141" id="strs141-0a" aria-label="Sort by Booking, lowest or A first" />
                                      <input className="srt-i srt-d0" type="radio" name="strs141" id="strs141-0d" aria-label="Sort by Booking, highest or Z first" />
                                      <label className="srt-l srt-l--a" htmlFor="strs141-0a">{"Booking"}</label>
                                      <label className="srt-l srt-l--d" htmlFor="strs141-0d" aria-hidden="true">{"Booking"}</label>
                                    </th>
                                    <th scope="col">
                                      <input className="srt-i srt-a1" type="radio" name="strs141" id="strs141-1a" aria-label="Sort by Guest, lowest or A first" />
                                      <input className="srt-i srt-d1" type="radio" name="strs141" id="strs141-1d" aria-label="Sort by Guest, highest or Z first" />
                                      <label className="srt-l srt-l--a" htmlFor="strs141-1a">{"Guest"}</label>
                                      <label className="srt-l srt-l--d" htmlFor="strs141-1d" aria-hidden="true">{"Guest"}</label>
                                    </th>
                                    <th scope="col">{"Room type"}</th>
                                    <th scope="col">{"Room"}</th>
                                    <th scope="col">
                                      <input className="srt-i srt-a4" type="radio" name="strs141" id="strs141-4a" aria-label="Sort by Stay, lowest or A first" />
                                      <input className="srt-i srt-d4" type="radio" name="strs141" id="strs141-4d" aria-label="Sort by Stay, highest or Z first" />
                                      <label className="srt-l srt-l--a" htmlFor="strs141-4a">{"Stay"}</label>
                                      <label className="srt-l srt-l--d" htmlFor="strs141-4d" aria-hidden="true">{"Stay"}</label>
                                    </th>
                                    <th scope="col">{"Status"}</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr style={{"--k0": "1", "--k1": "7", "--k4": "2"}}>
                                    <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                      <a href="/reservation/rs-07-reservation-details/#FK-10014" data-leads-to="RS-07">
                                        <strong>{"FK-10014"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Guest" data-w2="">
                                      <a href="/reservation/rs-18-guest-profile/#GP-0257" data-leads-to="RS-18">
                                        <strong>{"Mrs Kavita Ranjan"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Room type" data-w2="">{"1 × PDLX"}</td>
                                    <td className="dt__td nw" data-e="">{"–"}</td>
                                    <td className="dt__td nw" data-label="Stay" data-w2="">{"23 – 25 Nov"}</td>
                                    <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#shield-check" />
                                        </svg>
                                        {"Guaranteed"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "2", "--k1": "11", "--k4": "1"}}>
                                    <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                      <a href="/reservation/rs-07-reservation-details/#FK-10030" data-leads-to="RS-07">
                                        <strong>{"FK-10030"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td" data-label="Guest" data-w2="">
                                      <a href="/reservation/rs-18-guest-profile/#GP-0035" data-leads-to="RS-18">
                                        <strong>{"Mr Sanjay Nirav"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Room type" data-w2="">{"1 × PDLX"}</td>
                                    <td className="dt__td nw" data-e="">{"–"}</td>
                                    <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 25 Nov"}</td>
                                    <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#shield-check" />
                                        </svg>
                                        {"Guaranteed"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "3", "--k1": "4", "--k4": "2"}}>
                                    <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                      <a href="/reservation/rs-07-reservation-details/#FK-10080" data-leads-to="RS-07">
                                        <strong>{"FK-10080"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Guest" data-w2="">
                                      <a href="/reservation/rs-18-guest-profile/#GP-0105" data-leads-to="RS-18">
                                        <strong>{"Mrs Elsa Lindberg"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Room type" data-w2="">{"1 × PDLX"}</td>
                                    <td className="dt__td nw" data-e="">{"–"}</td>
                                    <td className="dt__td nw" data-label="Stay" data-w2="">{"23 – 25 Nov"}</td>
                                    <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#shield-check" />
                                        </svg>
                                        {"Guaranteed"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "4", "--k1": "1", "--k4": "2"}}>
                                    <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                      <a href="/reservation/rs-07-reservation-details/#FK-10093" data-leads-to="RS-07">
                                        <strong>{"FK-10093"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Guest" data-w2="">
                                      <a href="/reservation/rs-18-guest-profile/#GP-0053" data-leads-to="RS-18">
                                        <strong>{"Mr Ajay Rishi"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Room type" data-w2="">{"1 × GDLX"}</td>
                                    <td className="dt__td nw" data-e="">{"–"}</td>
                                    <td className="dt__td nw" data-label="Stay" data-w2="">{"23 – 25 Nov"}</td>
                                    <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#shield-check" />
                                        </svg>
                                        {"Guaranteed"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "5", "--k1": "8", "--k4": "2"}}>
                                    <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                      <a href="/reservation/rs-07-reservation-details/#FK-10116" data-leads-to="RS-07">
                                        <strong>{"FK-10116"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Guest" data-w2="">
                                      <a href="/reservation/rs-18-guest-profile/#GP-0065" data-leads-to="RS-18">
                                        <strong>{"Mr Ravi Ranjan"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Room type" data-w2="">{"1 × PDLX"}</td>
                                    <td className="dt__td nw" data-e="">{"–"}</td>
                                    <td className="dt__td nw" data-label="Stay" data-w2="">{"23 – 25 Nov"}</td>
                                    <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#shield-check" />
                                        </svg>
                                        {"Guaranteed"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "6", "--k1": "12", "--k4": "2"}}>
                                    <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                      <a href="/reservation/rs-07-reservation-details/#FK-10144" data-leads-to="RS-07">
                                        <strong>{"FK-10144"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Guest" data-w2="">
                                      <a href="/reservation/rs-18-guest-profile/#GP-0346" data-leads-to="RS-18">
                                        <strong>{"Ms Sreelakshmi Krish"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Room type" data-w2="">{"1 × GDLX"}</td>
                                    <td className="dt__td nw" data-e="">{"–"}</td>
                                    <td className="dt__td nw" data-label="Stay" data-w2="">{"23 – 25 Nov"}</td>
                                    <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#shield-check" />
                                        </svg>
                                        {"Guaranteed"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "7", "--k1": "3", "--k4": "2"}}>
                                    <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                      <a href="/reservation/rs-07-reservation-details/#FK-10166" data-leads-to="RS-07">
                                        <strong>{"FK-10166"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Guest" data-w2="">
                                      <a href="/reservation/rs-18-guest-profile/#GP-0337" data-leads-to="RS-18">
                                        <strong>{"Mr Dileep Kurian"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Room type" data-w2="">{"1 × PDLX"}</td>
                                    <td className="dt__td nw" data-e="">{"–"}</td>
                                    <td className="dt__td nw" data-label="Stay" data-w2="">{"23 – 25 Nov"}</td>
                                    <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#shield-check" />
                                        </svg>
                                        {"Guaranteed"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "8", "--k1": "9", "--k4": "1"}}>
                                    <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                      <a href="/reservation/rs-07-reservation-details/#FK-10182" data-leads-to="RS-07">
                                        <strong>{"FK-10182"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Guest" data-w2="">
                                      <a href="/reservation/rs-18-guest-profile/#GP-0319" data-leads-to="RS-18">
                                        <strong>{"Ms Rekha Khan"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Room type" data-w2="">{"1 × PDLX"}</td>
                                    <td className="dt__td nw" data-e="">{"–"}</td>
                                    <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 25 Nov"}</td>
                                    <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#shield-check" />
                                        </svg>
                                        {"Guaranteed"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "9", "--k1": "10", "--k4": "1"}}>
                                    <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                      <a href="/reservation/rs-07-reservation-details/#FK-10190" data-leads-to="RS-07">
                                        <strong>{"FK-10190"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Guest" data-w2="">
                                      <a href="/reservation/rs-18-guest-profile/#GP-0147" data-leads-to="RS-18">
                                        <strong>{"Dr Ritu Chirag"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Room type" data-w2="">{"1 × GDLX"}</td>
                                    <td className="dt__td nw" data-e="">{"–"}</td>
                                    <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 25 Nov"}</td>
                                    <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#shield-check" />
                                        </svg>
                                        {"Guaranteed"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "10", "--k1": "6", "--k4": "2"}}>
                                    <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                      <a href="/reservation/rs-07-reservation-details/#FK-10209" data-leads-to="RS-07">
                                        <strong>{"FK-10209"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Guest" data-w2="">
                                      <a href="/reservation/rs-18-guest-profile/#GP-0375" data-leads-to="RS-18">
                                        <strong>{"Mr Jithin Jacob"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Room type" data-w2="">{"1 × GDLX"}</td>
                                    <td className="dt__td nw" data-e="">{"–"}</td>
                                    <td className="dt__td nw" data-label="Stay" data-w2="">{"23 – 25 Nov"}</td>
                                    <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#shield-check" />
                                        </svg>
                                        {"Guaranteed"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "11", "--k1": "5", "--k4": "2"}}>
                                    <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                      <a href="/reservation/rs-07-reservation-details/#FK-10238" data-leads-to="RS-07">
                                        <strong>{"FK-10238"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Guest" data-w2="">
                                      <a href="/reservation/rs-18-guest-profile/#GP-0360" data-leads-to="RS-18">
                                        <strong>{"Ms Irina Petrova"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Room type" data-w2="">{"1 × GDLX"}</td>
                                    <td className="dt__td nw" data-e="">{"–"}</td>
                                    <td className="dt__td nw" data-label="Stay" data-w2="">{"23 – 25 Nov"}</td>
                                    <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#shield-check" />
                                        </svg>
                                        {"Guaranteed"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "12", "--k1": "2", "--k4": "2"}}>
                                    <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                      <a href="/reservation/rs-07-reservation-details/#FK-10243" data-leads-to="RS-07">
                                        <strong>{"FK-10243"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Guest" data-w2="">
                                      <a href="/reservation/rs-18-guest-profile/#GP-0316" data-leads-to="RS-18">
                                        <strong>{"Dr Ayesha Pavan"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Room type" data-w2="">{"1 × GDLX"}</td>
                                    <td className="dt__td nw" data-e="">{"–"}</td>
                                    <td className="dt__td nw" data-label="Stay" data-w2="">{"23 – 25 Nov"}</td>
                                    <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#shield-check" />
                                        </svg>
                                        {"Guaranteed"}
                                      </span>
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
                                    {" of 12"}
                                  </span>
                                  <span>
                                    {"Showing "}
                                    <b>{"11–12"}</b>
                                    {" of 12"}
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
                                    <b>{"1–12"}</b>
                                    {" of 12"}
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
                                    <b>{"1–12"}</b>
                                    {" of 12"}
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
                                    <b>{"1–12"}</b>
                                    {" of 12"}
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
                                    <b>{"1–12"}</b>
                                    {" of 12"}
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
                          <p style={{"marginTop": "10px"}}>
                            <a className="btn btn--primary" href="/reservation/rs-15-rooming-list/#GRP-0001" data-leads-to="RS-15">{"Add members from the rooming list"}</a>
                          </p>
                        </section>
                        <section className="stabs__panel" data-code="RS-14-4" aria-label="Billing & deposits">
                          <div className="s-grid2">
                            <section className="card">
                              <dl className="s-kv">
                                <dt>{"Master bill"}</dt>
                                <dd>{"Sunil Vijay"}</dd>
                                <dt>{"Rooms billed to"}</dt>
                                <dd>{"Master bill"}</dd>
                                <dt>{"Incidentals"}</dt>
                                <dd>{"Members pay"}</dd>
                                <dt>{"Estimated room charges"}</dt>
                                <dd>{"₹4,31,934.00"}</dd>
                                <dt>{"Advance policy"}</dt>
                                <dd>{"Group – 25% at confirmation"}</dd>
                              </dl>
                            </section>
                            <section className="card">
                              <h3 className="s-card-title">{"Deposit schedule"}</h3>
                              <div className="s-scroll">
                                <table className="dt__table dt--hug" data-mc="">
                                  <caption className="sr-only">{"Deposits"}</caption>
                                  <thead>
                                    <tr>
                                      <th scope="col">{"Due"}</th>
                                      <th scope="col">{"What"}</th>
                                      <th scope="col" className="dt__th--right">{"Amount"}</th>
                                      <th scope="col">{"Status"}</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="dt__td nw" data-label="Due" data-w2="" data-t="">{"3 Oct 2026"}</td>
                                      <td className="dt__td nw" data-label="What" data-w2="">{"25% at confirmation"}</td>
                                      <td className="dt__td dt__td--right num nw" data-label="Amount" data-w2="">{"₹1,07,983.50"}</td>
                                      <td className="dt__td" data-label="Status" data-s="">
                                        <span className="pill pill--tentative">
                                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                            <use href="/assets/icons/sprite.svg#clock" />
                                          </svg>
                                          {"Due"}
                                        </span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="dt__td nw" data-label="Due" data-w2="" data-t="">{"15 Nov 2026"}</td>
                                      <td className="dt__td" data-label="What" data-w2="">{"Balance before arrival"}</td>
                                      <td className="dt__td dt__td--right num nw" data-label="Amount" data-w2="">{"₹3,23,950.50"}</td>
                                      <td className="dt__td" data-label="Status" data-s="">
                                        <span className="pill pill--ooo">
                                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                            <use href="/assets/icons/sprite.svg#clock" />
                                          </svg>
                                          {"Later"}
                                        </span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </section>
                          </div>
                          <p style={{"marginTop": "10px"}}>
                            <Link className="btn" data-leads-to="RS-10" to={"/reservation/rs-10-payments-and-deposits"}>{"Payments"}</Link>
                          </p>
                        </section>
                        <section className="stabs__panel" data-code="RS-14-5" aria-label="Communication">
                          <div className="s-empty">{"Group confirmations are sent from the Group confirmation button at the top of this booking."}</div>
                          <p>
                            <Link className="btn" data-leads-to="RS-11" to={"/reservation/rs-11-confirmation-and-voucher"}>{"Open confirmation"}</Link>
                          </p>
                        </section>
                        <section className="stabs__panel" data-code="RS-14-6" aria-label="History">
                          <ol className="notif__list">
                            <li className="notif__item">
                              <span className="notif__text">
                                <strong>{"Group created"}</strong>
                                <span>{"GRP-0001 · Farah Khan"}</span>
                              </span>
                              <span className="notif__time">{"26 Sep 11:30"}</span>
                            </li>
                          </ol>
                        </section>
                      </div>
                    </div>
                  </div>
                  <div className="modal modal--lg" id="RS-14-conf-GRP-0001" data-code="RS-14c" role="dialog" aria-modal="true" aria-labelledby="RS-14-conf-GRP-0001-t">
                    <a className="modal__backdrop" href="#GRP-0001" aria-label="Close" tabIndex="-1" />
                    <div className="modal__box">
                      <div className="modal__head">
                        <div>
                          <h2 className="modal__title" id="RS-14-conf-GRP-0001-t">{"Group confirmation"}</h2>
                          <p className="modal__desc">{"GRP-0001 · Vijay–Nathan wedding"}</p>
                        </div>
                        <a className="modal__close" href="#GRP-0001" aria-label="Close">
                          <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#x" />
                          </svg>
                        </a>
                      </div>
                      <div className="modal__body">
                        <h3 className="s-card-title">{"Rate for each day · Pool Deluxe, double"}</h3>
                        <div className="s-scroll">
                          <table className="dt__table dt--hug" data-nosort="" data-mc="">
                            <caption className="sr-only">{"Rate for each day of the stay"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">{"Night"}</th>
                                <th scope="col">{"Meal plan"}</th>
                                <th scope="col" className="dt__th--right">{"Rate"}</th>
                                <th scope="col" className="dt__th--right">{"GST"}</th>
                                <th scope="col" className="dt__th--right">{"Night total"}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="dt__td nw" data-label="Night" data-w2="" data-t="">
                                  <b>{"Sun 22 Nov"}</b>
                                </td>
                                <td className="dt__td" data-label="Meal plan" data-w2="">
                                  <b>{"CP"}</b>
                                  {" · Breakfast"}
                                </td>
                                <td className="dt__td dt__td--right num nw" data-label="Rate" data-w2="">{"₹9,500.00"}</td>
                                <td className="dt__td dt__td--right num nw" data-label="GST" data-w2="">{"₹1,710.00 (18%)"}</td>
                                <td className="dt__td dt__td--right num nw" data-label="Night total" data-w2="">{"₹11,210.00"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td nw" data-label="Night" data-w2="" data-t="">
                                  <b>{"Mon 23 Nov"}</b>
                                </td>
                                <td className="dt__td" data-label="Meal plan" data-w2="">
                                  <b>{"MAP"}</b>
                                  {" · Breakfast · Dinner"}
                                </td>
                                <td className="dt__td dt__td--right num nw" data-label="Rate" data-w2="">{"₹11,440.00"}</td>
                                <td className="dt__td dt__td--right num nw" data-label="GST" data-w2="">{"₹2,059.20 (18%)"}</td>
                                <td className="dt__td dt__td--right num nw" data-label="Night total" data-w2="">{"₹13,499.20"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td nw" data-label="Night" data-w2="" data-t="">
                                  <b>{"Tue 24 Nov"}</b>
                                </td>
                                <td className="dt__td" data-label="Meal plan" data-w2="">
                                  <b>{"CP"}</b>
                                  {" · Breakfast"}
                                </td>
                                <td className="dt__td dt__td--right num nw" data-label="Rate" data-w2="">{"₹9,500.00"}</td>
                                <td className="dt__td dt__td--right num nw" data-label="GST" data-w2="">{"₹1,710.00 (18%)"}</td>
                                <td className="dt__td dt__td--right num nw" data-label="Night total" data-w2="">{"₹11,210.00"}</td>
                              </tr>
                              <tr className="rs14-ctot">
                                <td className="dt__td" colSpan="2">
                                  <strong>{"Total room rate · 3 night(s)"}</strong>
                                </td>
                                <td className="dt__td dt__td--right num nw" data-label="Rate" data-w2="" data-t="">
                                  <strong>{"₹30,440.00"}</strong>
                                </td>
                                <td className="dt__td dt__td--right num nw" data-label="GST" data-w2="">
                                  <strong>{"₹5,479.20"}</strong>
                                </td>
                                <td className="dt__td dt__td--right num nw" data-label="Night total" data-w2="">
                                  <strong>{"₹35,919.20"}</strong>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p className="field__hint rs14-cnote">{"The document lists every room category in the same way, at the rate set for its occupancy and each day's meal plan. These are the rates billed to the guest folios."}</p>
                      </div>
                      <div className="modal__foot">
                        <a className="btn" href="#GRP-0001">{"Close"}</a>
                        <a className="btn btn--primary" href="#GRP-0001">{"Send to the organiser"}</a>
                      </div>
                    </div>
                  </div>
                  <div className="modal" id="RS-14a-GRP-0001" data-code="RS-14a" role="dialog" aria-modal="true" aria-labelledby="RS-14a-GRP-0001-t">
                    <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                    <form className="modal__box" action="#" noValidate={true}>
                      <div className="modal__head">
                        <div>
                          <h2 className="modal__title" id="RS-14a-GRP-0001-t">{"Release unused rooms"}</h2>
                          <p className="modal__desc">{"GRP-0001"}</p>
                        </div>
                        <a className="modal__close" href="#" aria-label="Close">
                          <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#x" />
                          </svg>
                        </a>
                      </div>
                      <div className="modal__body">
                        <div className="s-scroll">
                          <table className="dt__table dt--hug" data-mc="">
                            <thead>
                              <tr>
                                <th scope="col">{"Room type"}</th>
                                <th scope="col" className="dt__th--right">{"Unpicked (max per night)"}</th>
                                <th scope="col" className="dt__th--right">{"Release"}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">{"Pool Deluxe Room"}</td>
                                <td className="dt__td dt__td--right num" data-label="Unpicked (max per night)" data-w2="">{"6"}</td>
                                <td className="dt__td dt__td--right" data-label="Release" data-w2="">
                                  <input className="field__input num" style={{"width": "72px"}} type="number" min="0" aria-label="Release PDLX" defaultValue={"0"} />
                                </td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">{"Garden Deluxe Room"}</td>
                                <td className="dt__td dt__td--right num" data-label="Unpicked (max per night)" data-w2="">{"13"}</td>
                                <td className="dt__td dt__td--right" data-label="Release" data-w2="">
                                  <input className="field__input num" style={{"width": "72px"}} type="number" min="0" aria-label="Release GDLX" defaultValue={"0"} />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f11">
                            {"Reason "}
                            <span className="field__req">{"*"}</span>
                          </label>
                          <textarea className="field__input field__input--area" id="f11" defaultValue={""} />
                        </div>
                      </div>
                      <div className="modal__foot">
                        <a className="btn" href="#">{"Cancel"}</a>
                        <a className="btn btn--primary" href="#flow-done">{"Release rooms"}</a>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="variant v-GRP-0002">
                  <div className="bk-bar">
                    <a className="btn" href="#list">{"← All groups"}</a>
                    <span className="s-spacer" />
                    <a className="btn" href="/reservation/rs-15-rooming-list/#GRP-0002" data-leads-to="RS-15">{"Rooming list"}</a>
                    <Link className="btn" data-leads-to="RS-12" to={"/reservation/rs-12-cancellation"}>{"Cancel group rooms"}</Link>
                    <a className="btn" href="#RS-14-conf-GRP-0002" data-opens="RS-14c">{"Group confirmation"}</a>
                  </div>
                  <section className="card bk-hero" data-code="RS-14-hero">
                    <div>
                      <p className="field__hint">{"Group GRP-0002"}</p>
                      <h2 className="bk-hero__t">{"Backwater Analytics annual conference"}</h2>
                      <p className="bk-hero__s">{"7 – 9 Dec · 18 member bookings · cut-off 21 Nov (in 30 days)"}</p>
                      <span className="pill pill--tentative">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#clock" />
                        </svg>
                        {"Tentative"}
                      </span>
                    </div>
                    <div style={{"minWidth": "220px"}}>
                      <strong className="num">{"33 / 70"}</strong>
                      {" picked up"}
                      <div className="rs04-meter" role="img" aria-label="47 percent picked up">
                        <span style={{"width": "47%"}} />
                      </div>
                    </div>
                  </section>
                  <div style={{"marginTop": "12px"}}>
                    <div className="stabs">
                      <input type="radio" name="tGRP0002" id="tGRP0002-1" aria-label="Details" defaultChecked={true} />
                      <input type="radio" name="tGRP0002" id="tGRP0002-2" aria-label="Room block" />
                      <input type="radio" name="tGRP0002" id="tGRP0002-r" aria-label="Rates & meals" />
                      <input type="radio" name="tGRP0002" id="tGRP0002-3" aria-label="Members" />
                      <input type="radio" name="tGRP0002" id="tGRP0002-4" aria-label="Billing & deposits" />
                      <input type="radio" name="tGRP0002" id="tGRP0002-5" aria-label="Communication" />
                      <input type="radio" name="tGRP0002" id="tGRP0002-6" aria-label="History" />
                      <div className="stabs__list" role="tablist">
                        <label htmlFor="tGRP0002-1">{"Details"}</label>
                        <label htmlFor="tGRP0002-2">{"Room block"}</label>
                        <label htmlFor="tGRP0002-r">{"Rates & meals"}</label>
                        <label htmlFor="tGRP0002-3">{"Members"}</label>
                        <label htmlFor="tGRP0002-4">{"Billing & deposits"}</label>
                        <label htmlFor="tGRP0002-5">{"Communication"}</label>
                        <label htmlFor="tGRP0002-6">{"History"}</label>
                      </div>
                      <div className="stabs__panels">
                        <section className="stabs__panel" data-code="RS-14-1" aria-label="Details">
                          <div className="s-grid2">
                            <section className="card">
                              <dl className="s-kv">
                                <dt>{"Group"}</dt>
                                <dd>{"GRP-0002"}</dd>
                                <dt>{"Name"}</dt>
                                <dd>{"Backwater Analytics annual conference"}</dd>
                                <dt>{"Type"}</dt>
                                <dd>{"Conference"}</dd>
                                <dt data-flow="rs14-seg">{"Segment"}</dt>
                                <dd>{"Conference & events"}</dd>
                                <dt>{"Children"}</dt>
                                <dd>{"11 and under free with existing beds (max 2 per room)"}</dd>
                                <dt>{"Extras available"}</dt>
                                <dd>{"Extra bed, Breakfast, Airport transfer (one way), Gala dinner, Ayurveda therapy session, Seafood Grill dinner, Early check-in, Late check-out (until 18:00), Celebration cake"}</dd>
                                <dt>{"Status"}</dt>
                                <dd>
                                  <span className="pill pill--tentative">
                                    <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                      <use href="/assets/icons/sprite.svg#clock" />
                                    </svg>
                                    {"Tentative"}
                                  </span>
                                </dd>
                                <dt>{"Contact"}</dt>
                                <dd>{"Preethi Ishaan · +91 9847054321"}</dd>
                                <dt>{"Email"}</dt>
                                <dd>{"events@example.com"}</dd>
                                <dt>{"Company"}</dt>
                                <dd>{"Periyar Infotech Solutions"}</dd>
                              </dl>
                            </section>
                            <section className="card">
                              <dl className="s-kv">
                                <dt>{"Arrival"}</dt>
                                <dd>{"Mon 7 Dec"}</dd>
                                <dt>{"Departure"}</dt>
                                <dd>{"Wed 9 Dec"}</dd>
                                <dt>{"Cut-off date"}</dt>
                                <dd>{"Sat 21 Nov · in 30 days"}</dd>
                                <dt>{"Group rate plan"}</dt>
                                <dd>{"GROUP – Group rate"}</dd>
                                <dt>{"Halls"}</dt>
                                <dd>{"Periyar Hall"}</dd>
                                <dt>{"Sales person"}</dt>
                                <dd>{"Farah Khan"}</dd>
                              </dl>
                            </section>
                          </div>
                          <section className="card" style={{"marginTop": "12px"}} data-code="RS-14-notes">
                            <div className="field">
                              <label className="field__label" htmlFor="f12">{"Notes"}</label>
                              <textarea className="field__input field__input--area" id="f12" defaultValue={"Two-day conference for 80 delegates in Periyar Hall. Rooming list expected before cut-off."} />
                              <span className="field__hint">{"Internal notes about this group: contract points, special arrangements, who to call"}</span>
                            </div>
                            <div className="s-actions">
                              <a className="btn btn--primary" href="#flow-done">{"Save notes"}</a>
                            </div>
                          </section>
                          <section className="card" style={{"marginTop": "12px"}} data-code="RS-14-terms">
                            <h2 className="s-card-title" style={{"marginBottom": "10px"}}>{"Contract terms"}</h2>
                            <div className="s-grid3">
                              <div className="field">
                                <label className="field__label" htmlFor="f13">{"Block type"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="f13" defaultValue={"Deducting – the rooms are held back from sale"}>
                                    <option>{"Deducting – the rooms are held back from sale"}</option>
                                    <option>{"Non-deducting – a wish list, rooms stay on sale"}</option>
                                  </select>
                                  <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                                <span className="field__hint">{"Decides whether the block reduces rooms left"}</span>
                              </div>
                              <div className="field" data-fw="s">
                                <label className="field__label" htmlFor="f14">{"Cut-off (date and time, IST)"}</label>
                                <div className="dpk-dt">
                                  <div className="dpk">
                                    <button type="button" className="dpk-f field__input" id="f14" aria-haspopup="dialog">
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
                                      <span className="dpk-f__ph">{"Date"}</span>
                                    </button>
                                    <div className="dpk-pop" tabIndex="-1" role="dialog" aria-label="Choose a date">
                                      <div className="dpk-h">
                                        <select className="dpk-m" name="f14-month" aria-label="Month" defaultValue={"11"}>
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
                                        <select className="dpk-y" name="f14-year" aria-label="Year" defaultValue={"2026"}>
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
                                          <input type="radio" name="f14" value="01" />
                                          {"1"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f14" value="02" />
                                          {"2"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f14" value="03" />
                                          {"3"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f14" value="04" />
                                          {"4"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f14" value="05" />
                                          {"5"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f14" value="06" />
                                          {"6"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f14" value="07" />
                                          {"7"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f14" value="08" />
                                          {"8"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f14" value="09" />
                                          {"9"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f14" value="10" />
                                          {"10"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f14" value="11" />
                                          {"11"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f14" value="12" />
                                          {"12"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f14" value="13" />
                                          {"13"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f14" value="14" />
                                          {"14"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f14" value="15" />
                                          {"15"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f14" value="16" />
                                          {"16"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f14" value="17" />
                                          {"17"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f14" value="18" />
                                          {"18"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f14" value="19" />
                                          {"19"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f14" value="20" />
                                          {"20"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f14" value="21" defaultChecked={true} />
                                          {"21"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f14" value="22" />
                                          {"22"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f14" value="23" />
                                          {"23"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f14" value="24" />
                                          {"24"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f14" value="25" />
                                          {"25"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f14" value="26" />
                                          {"26"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f14" value="27" />
                                          {"27"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f14" value="28" />
                                          {"28"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f14" value="29" />
                                          {"29"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f14" value="30" />
                                          {"30"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f14" value="31" />
                                          {"31"}
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                  <input className="field__input num dpk-time" type="time" name="f14-time" aria-label="Time" defaultValue={"18:00"} />
                                </div>
                                <span className="field__hint">{"Unpicked rooms are released at exactly this time"}</span>
                              </div>
                              <div className="field" data-fw="s">
                                <label className="field__label" htmlFor="f15">{"Rooming list due"}</label>
                                <div className="dpk">
                                  <button type="button" className="dpk-f field__input" id="f15" aria-haspopup="dialog">
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
                                      <select className="dpk-m" name="f15-month" aria-label="Month" defaultValue={"11"}>
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
                                      <select className="dpk-y" name="f15-year" aria-label="Year" defaultValue={"2026"}>
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
                                        <input type="radio" name="f15" value="01" />
                                        {"1"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f15" value="02" />
                                        {"2"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f15" value="03" />
                                        {"3"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f15" value="04" />
                                        {"4"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f15" value="05" />
                                        {"5"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f15" value="06" />
                                        {"6"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f15" value="07" />
                                        {"7"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f15" value="08" />
                                        {"8"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f15" value="09" />
                                        {"9"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f15" value="10" />
                                        {"10"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f15" value="11" />
                                        {"11"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f15" value="12" />
                                        {"12"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f15" value="13" />
                                        {"13"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f15" value="14" />
                                        {"14"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f15" value="15" />
                                        {"15"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f15" value="16" />
                                        {"16"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f15" value="17" />
                                        {"17"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f15" value="18" defaultChecked={true} />
                                        {"18"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f15" value="19" />
                                        {"19"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f15" value="20" />
                                        {"20"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f15" value="21" />
                                        {"21"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f15" value="22" />
                                        {"22"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f15" value="23" />
                                        {"23"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f15" value="24" />
                                        {"24"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f15" value="25" />
                                        {"25"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f15" value="26" />
                                        {"26"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f15" value="27" />
                                        {"27"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f15" value="28" />
                                        {"28"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f15" value="29" />
                                        {"29"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f15" value="30" />
                                        {"30"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f15" value="31" />
                                        {"31"}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <span className="field__hint">{"Names after this date need a manager"}</span>
                              </div>
                              <div className="field" data-fw="x">
                                <label className="field__label" htmlFor="f16">{"Attrition allowance (%)"}</label>
                                <input className="field__input num" id="f16" type="number" defaultValue={"10"} />
                                <span className="field__hint">{"Share of the block the group may release without charge"}</span>
                              </div>
                              <div className="field">
                                <label className="field__label" htmlFor="f17">{"A member cancels before cut-off"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="f17" defaultValue={"Room goes back to the group block"}>
                                    <option>{"Room goes back to the group block"}</option>
                                    <option>{"Room goes to general sale"}</option>
                                  </select>
                                  <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </div>
                              <div className="field">
                                <label className="field__label" htmlFor="f18">{"A member cancels after cut-off"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="f18" defaultValue={"Room goes to general sale"}>
                                    <option>{"Room goes to general sale"}</option>
                                    <option>{"Room goes back to the group block"}</option>
                                  </select>
                                  <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </div>
                              <div className="field">
                                <label className="field__label" htmlFor="f19">{"Payment responsibility"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="f19" defaultValue={"Master bill: rooms and tax · guests: incidentals"}>
                                    <option>{"Master bill: rooms and tax · guests: incidentals"}</option>
                                    <option>{"Master bill: everything"}</option>
                                    <option>{"Each guest pays their own"}</option>
                                  </select>
                                  <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </div>
                              <div className="field">
                                <label className="field__label" htmlFor="f20">{"Contract / agreement no."}</label>
                                <input className="field__input" id="f20" type="text" defaultValue={""} />
                                <span className="field__hint">{"Signed agreement the block follows"}</span>
                              </div>
                              <div className="field" data-fw="s">
                                <label className="field__label" htmlFor="f21">{"Contract signed on"}</label>
                                <div className="dpk">
                                  <button type="button" className="dpk-f field__input" id="f21" aria-haspopup="dialog">
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
                                      <select className="dpk-m" name="f21-month" aria-label="Month" defaultValue={"10"}>
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
                                      <select className="dpk-y" name="f21-year" aria-label="Year" defaultValue={"2026"}>
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
                                        <input type="radio" name="f21" value="01" />
                                        {"1"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f21" value="02" />
                                        {"2"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f21" value="03" />
                                        {"3"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f21" value="04" />
                                        {"4"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f21" value="05" />
                                        {"5"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f21" value="06" />
                                        {"6"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f21" value="07" />
                                        {"7"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f21" value="08" />
                                        {"8"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f21" value="09" />
                                        {"9"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f21" value="10" />
                                        {"10"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f21" value="11" />
                                        {"11"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f21" value="12" />
                                        {"12"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f21" value="13" />
                                        {"13"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f21" value="14" />
                                        {"14"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f21" value="15" />
                                        {"15"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f21" value="16" />
                                        {"16"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f21" value="17" />
                                        {"17"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f21" value="18" />
                                        {"18"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f21" value="19" />
                                        {"19"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f21" value="20" />
                                        {"20"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f21" value="21" />
                                        {"21"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f21" value="22" />
                                        {"22"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f21" value="23" />
                                        {"23"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f21" value="24" />
                                        {"24"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f21" value="25" />
                                        {"25"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f21" value="26" />
                                        {"26"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f21" value="27" />
                                        {"27"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f21" value="28" />
                                        {"28"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f21" value="29" />
                                        {"29"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f21" value="30" />
                                        {"30"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f21" value="31" />
                                        {"31"}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="s-note">
                              <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#info" />
                              </svg>
                              <span>{"How many rooms the group holds: on the busiest night the block is 35 rooms, of which 18 are already member bookings and 17 are not picked up yet. The group holds 35 rooms in total – the 18 member bookings replace their part of the block, they are not counted twice."}</span>
                            </div>
                          </section>
                        </section>
                        <section className="stabs__panel" data-code="RS-14-2" aria-label="Room block">
                          <div className="s-scroll">
                            <table className="dt__table dt--hug" data-code="RS-14-2-grid" data-mc="">
                              <caption className="sr-only">{"Room block"}</caption>
                              <thead>
                                <tr>
                                  <th scope="col">{"Room type"}</th>
                                  <th scope="col" className="dt__th--right">{"Mon 7 Dec"}</th>
                                  <th scope="col" className="dt__th--right">{"Tue 8 Dec"}</th>
                                  <th scope="col" className="dt__th--right">{"Picked up"}</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                    <strong>{"Pool Deluxe Room"}</strong>
                                  </td>
                                  <td className="dt__td dt__td--right num" data-label="Mon 7 Dec" data-w2="">
                                    <input className="field__input num" style={{"width": "64px"}} type="number" min="0" aria-label="PDLX blocked, 7 Dec" defaultValue={"15"} />
                                    {" "}
                                    <span className="field__hint">{"picked 11"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right num" data-label="Tue 8 Dec" data-w2="">
                                    <input className="field__input num" style={{"width": "64px"}} type="number" min="0" aria-label="PDLX blocked, 8 Dec" defaultValue={"15"} />
                                    {" "}
                                    <span className="field__hint">{"picked 13"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right num" data-label="Picked up" data-w2="">{"24 / 30"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                    <strong>{"Garden Deluxe Room"}</strong>
                                  </td>
                                  <td className="dt__td dt__td--right num" data-label="Mon 7 Dec" data-w2="">
                                    <input className="field__input num" style={{"width": "64px"}} type="number" min="0" aria-label="GDLX blocked, 7 Dec" defaultValue={"20"} />
                                    {" "}
                                    <span className="field__hint">{"picked 4"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right num" data-label="Tue 8 Dec" data-w2="">
                                    <input className="field__input num" style={{"width": "64px"}} type="number" min="0" aria-label="GDLX blocked, 8 Dec" defaultValue={"20"} />
                                    {" "}
                                    <span className="field__hint">{"picked 5"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right num" data-label="Picked up" data-w2="">{"9 / 40"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                    <strong>{"Deluxe Suite"}</strong>
                                  </td>
                                  <td className="dt__td dt__td--right num" data-label="Mon 7 Dec" data-w2="">
                                    <input className="field__input num" style={{"width": "64px"}} type="number" min="0" aria-label="DLXS blocked, Mon 7 Dec" defaultValue={"0"} />
                                    {" "}
                                    <span className="field__hint">{"picked 0"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right num" data-label="Tue 8 Dec" data-w2="">
                                    <input className="field__input num" style={{"width": "64px"}} type="number" min="0" aria-label="DLXS blocked, Tue 8 Dec" defaultValue={"0"} />
                                    {" "}
                                    <span className="field__hint">{"picked 0"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right num" data-label="Picked up" data-w2="">{"0 / 0"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                    <strong>{"Premium Suite"}</strong>
                                  </td>
                                  <td className="dt__td dt__td--right num" data-label="Mon 7 Dec" data-w2="">
                                    <input className="field__input num" style={{"width": "64px"}} type="number" min="0" aria-label="PRMS blocked, Mon 7 Dec" defaultValue={"0"} />
                                    {" "}
                                    <span className="field__hint">{"picked 0"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right num" data-label="Tue 8 Dec" data-w2="">
                                    <input className="field__input num" style={{"width": "64px"}} type="number" min="0" aria-label="PRMS blocked, Tue 8 Dec" defaultValue={"0"} />
                                    {" "}
                                    <span className="field__hint">{"picked 0"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right num" data-label="Picked up" data-w2="">{"0 / 0"}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="rs04-meter" role="img" aria-label="47 percent picked up">
                            <span style={{"width": "47%"}} />
                          </div>
                          <p className="field__hint">
                            <strong>{"33 of 70 block room-nights picked up (47%)."}</strong>
                            {" Cut-off in 30 days; unpicked rooms are released automatically."}
                          </p>
                          <div className="row">
                            <a className="btn" href="#RS-14a-GRP-0002" data-opens="RS-14a">{"Release unused rooms"}</a>
                            <a className="btn" href="/reservation/rs-15-rooming-list/#GRP-0002" data-leads-to="RS-15">{"Open rooming list"}</a>
                            <a className="btn btn--primary" href="#flow-done">{"Save block"}</a>
                          </div>
                        </section>
                        <section className="stabs__panel" data-code="RS-14-rates" aria-label="Rates & meals">
                          <section className="card" data-code="RS-14-7-matrix">
                            <header className="rs14-h">
                              <div>
                                <h3 className="s-card-title">{"Group rates · Backwater Analytics annual conference"}</h3>
                                <p className="field__hint">{"Every room category of the hotel can be in the group. Price each one for single, double and triple occupancy and for every meal plan – by hand, or fill from BAR or the company's grid and then adjust. Rates are per room per night before GST."}</p>
                              </div>
                              <div className="rs14-acts">
                                <label className="rs14-src">
                                  <span>{"Fill from"}</span>
                                  <select className="field__input field__input--select">
                                    <option>{"Group discount on BAR (15 %)"}</option>
                                    <option>{"Company rate grid"}</option>
                                    <option>{"Another group"}</option>
                                    <option>{"Nothing – I type every rate"}</option>
                                  </select>
                                </label>
                                <a className="btn" href="#rs14-upload">
                                  <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#upload" />
                                  </svg>
                                  {"Upload rates"}
                                </a>
                              </div>
                            </header>
                            <div className="s-scroll rs14-gridscroll">
                              <table className="dt__table dt--hug" data-nosort="" data-mc="">
                                <caption className="sr-only">{"Group rates by room category, meal plan and occupancy"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Room category"}</th>
                                    <th scope="col">{"Meal plan"}</th>
                                    <th scope="col">{"Single (SGL)"}</th>
                                    <th scope="col">{"Double (DBL)"}</th>
                                    <th scope="col">{"Triple (TPL)"}</th>
                                    <th scope="col" className="dt__th--right">{"Extra adult"}</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room category" data-w2="" data-t="">
                                      <span className="code-chip">{"GDLX"}</span>
                                      {" Garden Deluxe Room"}
                                    </td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"EP"}</td>
                                    <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="GDLX EP Single (SGL)" defaultValue={"6,120"} />
                                    </td>
                                    <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="GDLX EP Double (DBL)" defaultValue={"7,395"} />
                                    </td>
                                    <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="GDLX EP Triple (TPL)" defaultValue={"8,670"} />
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Extra adult" data-w2="">{"₹1,275"}</td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room category" data-w2="" data-t="">
                                      <span className="code-chip">{"GDLX"}</span>
                                      {" Garden Deluxe Room"}
                                    </td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"CP"}</td>
                                    <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="GDLX CP Single (SGL)" defaultValue={"6,800"} />
                                    </td>
                                    <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="GDLX CP Double (DBL)" defaultValue={"8,755"} />
                                    </td>
                                    <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="GDLX CP Triple (TPL)" defaultValue={"10,705"} />
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Extra adult" data-w2="">{"₹1,955"}</td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room category" data-w2="" data-t="">
                                      <span className="code-chip">{"GDLX"}</span>
                                      {" Garden Deluxe Room"}
                                    </td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"MAP"}</td>
                                    <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="GDLX MAP Single (SGL)" defaultValue={"7,735"} />
                                    </td>
                                    <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="GDLX MAP Double (DBL)" defaultValue={"10,625"} />
                                    </td>
                                    <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="GDLX MAP Triple (TPL)" defaultValue={"13,510"} />
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Extra adult" data-w2="">{"₹2,890"}</td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room category" data-w2="" data-t="">
                                      <span className="code-chip">{"GDLX"}</span>
                                      {" Garden Deluxe Room"}
                                    </td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"AP"}</td>
                                    <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="GDLX AP Single (SGL)" defaultValue={"8,540"} />
                                    </td>
                                    <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="GDLX AP Double (DBL)" defaultValue={"12,240"} />
                                    </td>
                                    <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="GDLX AP Triple (TPL)" defaultValue={"15,935"} />
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Extra adult" data-w2="">{"₹3,695"}</td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room category" data-w2="" data-t="">
                                      <span className="code-chip">{"PDLX"}</span>
                                      {" Pool Deluxe Room"}
                                    </td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"EP"}</td>
                                    <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PDLX EP Single (SGL)" defaultValue={"6,545"} />
                                    </td>
                                    <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PDLX EP Double (DBL)" defaultValue={"7,820"} />
                                    </td>
                                    <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PDLX EP Triple (TPL)" defaultValue={"9,095"} />
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Extra adult" data-w2="">{"₹1,275"}</td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room category" data-w2="" data-t="">
                                      <span className="code-chip">{"PDLX"}</span>
                                      {" Pool Deluxe Room"}
                                    </td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"CP"}</td>
                                    <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PDLX CP Single (SGL)" defaultValue={"7,225"} />
                                    </td>
                                    <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PDLX CP Double (DBL)" defaultValue={"9,180"} />
                                    </td>
                                    <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PDLX CP Triple (TPL)" defaultValue={"11,130"} />
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Extra adult" data-w2="">{"₹1,955"}</td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room category" data-w2="" data-t="">
                                      <span className="code-chip">{"PDLX"}</span>
                                      {" Pool Deluxe Room"}
                                    </td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"MAP"}</td>
                                    <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PDLX MAP Single (SGL)" defaultValue={"8,160"} />
                                    </td>
                                    <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PDLX MAP Double (DBL)" defaultValue={"11,050"} />
                                    </td>
                                    <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PDLX MAP Triple (TPL)" defaultValue={"13,935"} />
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Extra adult" data-w2="">{"₹2,890"}</td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room category" data-w2="" data-t="">
                                      <span className="code-chip">{"PDLX"}</span>
                                      {" Pool Deluxe Room"}
                                    </td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"AP"}</td>
                                    <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PDLX AP Single (SGL)" defaultValue={"8,965"} />
                                    </td>
                                    <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PDLX AP Double (DBL)" defaultValue={"12,665"} />
                                    </td>
                                    <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PDLX AP Triple (TPL)" defaultValue={"16,360"} />
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Extra adult" data-w2="">{"₹3,695"}</td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room category" data-w2="" data-t="">
                                      <span className="code-chip">{"DLXS"}</span>
                                      {" Deluxe Suite"}
                                    </td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"EP"}</td>
                                    <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="DLXS EP Single (SGL)" defaultValue={"12,920"} />
                                    </td>
                                    <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="DLXS EP Double (DBL)" defaultValue={"14,195"} />
                                    </td>
                                    <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="DLXS EP Triple (TPL)" defaultValue={"15,470"} />
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Extra adult" data-w2="">{"₹1,275"}</td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room category" data-w2="" data-t="">
                                      <span className="code-chip">{"DLXS"}</span>
                                      {" Deluxe Suite"}
                                    </td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"CP"}</td>
                                    <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="DLXS CP Single (SGL)" defaultValue={"13,600"} />
                                    </td>
                                    <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="DLXS CP Double (DBL)" defaultValue={"15,555"} />
                                    </td>
                                    <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="DLXS CP Triple (TPL)" defaultValue={"17,505"} />
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Extra adult" data-w2="">{"₹1,955"}</td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room category" data-w2="" data-t="">
                                      <span className="code-chip">{"DLXS"}</span>
                                      {" Deluxe Suite"}
                                    </td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"MAP"}</td>
                                    <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="DLXS MAP Single (SGL)" defaultValue={"14,535"} />
                                    </td>
                                    <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="DLXS MAP Double (DBL)" defaultValue={"17,425"} />
                                    </td>
                                    <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="DLXS MAP Triple (TPL)" defaultValue={"20,310"} />
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Extra adult" data-w2="">{"₹2,890"}</td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room category" data-w2="" data-t="">
                                      <span className="code-chip">{"DLXS"}</span>
                                      {" Deluxe Suite"}
                                    </td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"AP"}</td>
                                    <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="DLXS AP Single (SGL)" defaultValue={"15,340"} />
                                    </td>
                                    <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="DLXS AP Double (DBL)" defaultValue={"19,040"} />
                                    </td>
                                    <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="DLXS AP Triple (TPL)" defaultValue={"22,735"} />
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Extra adult" data-w2="">{"₹3,695"}</td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room category" data-w2="" data-t="">
                                      <span className="code-chip">{"PRMS"}</span>
                                      {" Premium Suite"}
                                    </td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"EP"}</td>
                                    <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PRMS EP Single (SGL)" defaultValue={"19,720"} />
                                    </td>
                                    <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PRMS EP Double (DBL)" defaultValue={"20,995"} />
                                    </td>
                                    <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PRMS EP Triple (TPL)" defaultValue={"22,270"} />
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Extra adult" data-w2="">{"₹1,275"}</td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room category" data-w2="" data-t="">
                                      <span className="code-chip">{"PRMS"}</span>
                                      {" Premium Suite"}
                                    </td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"CP"}</td>
                                    <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PRMS CP Single (SGL)" defaultValue={"20,400"} />
                                    </td>
                                    <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PRMS CP Double (DBL)" defaultValue={"22,355"} />
                                    </td>
                                    <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PRMS CP Triple (TPL)" defaultValue={"24,310"} />
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Extra adult" data-w2="">{"₹1,955"}</td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room category" data-w2="" data-t="">
                                      <span className="code-chip">{"PRMS"}</span>
                                      {" Premium Suite"}
                                    </td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"MAP"}</td>
                                    <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PRMS MAP Single (SGL)" defaultValue={"21,335"} />
                                    </td>
                                    <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PRMS MAP Double (DBL)" defaultValue={"24,225"} />
                                    </td>
                                    <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PRMS MAP Triple (TPL)" defaultValue={"27,115"} />
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Extra adult" data-w2="">{"₹2,890"}</td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room category" data-w2="" data-t="">
                                      <span className="code-chip">{"PRMS"}</span>
                                      {" Premium Suite"}
                                    </td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"AP"}</td>
                                    <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PRMS AP Single (SGL)" defaultValue={"22,140"} />
                                    </td>
                                    <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PRMS AP Double (DBL)" defaultValue={"25,840"} />
                                    </td>
                                    <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PRMS AP Triple (TPL)" defaultValue={"29,535"} />
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Extra adult" data-w2="">{"₹3,695"}</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </section>
                          <section className="card" data-code="RS-14-7-days">
                            <h3 className="s-card-title">{"Meal plan for each day"}</h3>
                            <p className="field__hint">{"Each night of the stay can have its own meal plan – for example breakfast only on arrival, half board on the conference day. The plan chosen here picks the rate from the grid above for that night."}</p>
                            <div className="s-scroll">
                              <table className="dt__table dt--hug" data-nosort="" data-mc="">
                                <caption className="sr-only">{"Meal plan for each day of the stay"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Night"}</th>
                                    <th scope="col">{"Meal plan that day"}</th>
                                    <th scope="col">{"Includes"}</th>
                                    <th scope="col">{"Applies to"}</th>
                                    <th scope="col" className="dt__th--right">{"Pool Deluxe · double"}</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="dt__td" data-label="Night" data-w2="" data-t="">
                                      <b>{"Mon 7 Dec"}</b>
                                    </td>
                                    <td className="dt__td" data-label="Meal plan that day" data-w2="">
                                      <div className="field__wrap">
                                        <select className="field__input field__input--select" aria-label="Meal plan on Mon 7 Dec" defaultValue={"CP"}>
                                          <option>{"EP"}</option>
                                          <option>{"CP"}</option>
                                          <option>{"MAP"}</option>
                                          <option>{"AP"}</option>
                                        </select>
                                      </div>
                                    </td>
                                    <td className="dt__td nw" data-label="Includes" data-w2="">{"Breakfast"}</td>
                                    <td className="dt__td" data-label="Applies to" data-w2="">
                                      <div className="field__wrap">
                                        <select className="field__input field__input--select" aria-label="Applies to on Mon 7 Dec" defaultValue={"All rooms"}>
                                          <option>{"All rooms"}</option>
                                          <option>{"Chosen room categories"}</option>
                                          <option>{"Chosen rooms"}</option>
                                        </select>
                                      </div>
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Pool Deluxe · double" data-w2="">{"₹9,180"}</td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td" data-label="Night" data-w2="" data-t="">
                                      <b>{"Tue 8 Dec"}</b>
                                    </td>
                                    <td className="dt__td" data-label="Meal plan that day" data-w2="">
                                      <div className="field__wrap">
                                        <select className="field__input field__input--select" aria-label="Meal plan on Tue 8 Dec" defaultValue={"AP"}>
                                          <option>{"EP"}</option>
                                          <option>{"CP"}</option>
                                          <option>{"MAP"}</option>
                                          <option>{"AP"}</option>
                                        </select>
                                      </div>
                                    </td>
                                    <td className="dt__td nw" data-label="Includes">{"Breakfast · Lunch · Dinner"}</td>
                                    <td className="dt__td" data-label="Applies to" data-w2="">
                                      <div className="field__wrap">
                                        <select className="field__input field__input--select" aria-label="Applies to on Tue 8 Dec" defaultValue={"All rooms"}>
                                          <option>{"All rooms"}</option>
                                          <option>{"Chosen room categories"}</option>
                                          <option>{"Chosen rooms"}</option>
                                        </select>
                                      </div>
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Pool Deluxe · double" data-w2="">{"₹12,665"}</td>
                                  </tr>
                                  <tr className="rs14-tot">
                                    <td className="dt__td" data-label="Night" data-w2="" data-t="">
                                      <b>{"2 nights"}</b>
                                    </td>
                                    <td className="dt__td" data-e="" />
                                    <td className="dt__td" data-e="" />
                                    <td className="dt__td" data-e="" />
                                    <td className="dt__td dt__td--right num" data-label="Pool Deluxe · double" data-w2="">
                                      <b>{"₹21,845"}</b>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div className="s-note">
                              <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#info" />
                              </svg>
                              <span>
                                <b>{"Billing follows the confirmation."}</b>
                                {" The meal plan and rate of each night, as sent in the group confirmation, are the only ones posted to the guest folios. A change after confirmation needs a new confirmation (RS-11)."}
                              </span>
                            </div>
                          </section>
                          <section className="card" data-code="RS-14-7-rooms">
                            <h3 className="s-card-title">{"Price for each room"}</h3>
                            <p className="field__hint">{"Type an own price for a single room when it differs from the group rate (a VIP, a complimentary room). A different price needs a reason and may go for approval (RS-20)."}</p>
                            <div className="s-scroll">
                              <table className="dt__table dt--hug" data-nosort="" data-mc="">
                                <caption className="sr-only">{"Price for each room"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Room"}</th>
                                    <th scope="col">{"Category"}</th>
                                    <th scope="col">{"Occupancy"}</th>
                                    <th scope="col">{"Meal plan"}</th>
                                    <th scope="col" className="dt__th--right">{"Group rate"}</th>
                                    <th scope="col">{"Own price (₹)"}</th>
                                    <th scope="col">{"Reason"}</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room" data-t="">
                                      <b>{"Room 1"}</b>
                                    </td>
                                    <td className="dt__td nw" data-label="Category" data-w2="">{"PDLX"}</td>
                                    <td className="dt__td nw" data-label="Occupancy" data-w2="">{"DBL"}</td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"CP"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Group rate" data-w2="">{"₹9,180"}</td>
                                    <td className="dt__td" data-label="Own price (₹)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="Room 1 own price" defaultValue={"9,180"} />
                                    </td>
                                    <td className="dt__td" data-label="Reason">
                                      <input className="field__input" type="text" placeholder="Why a different price?" aria-label="Room 1 reason" />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room" data-t="">
                                      <b>{"Room 2"}</b>
                                    </td>
                                    <td className="dt__td nw" data-label="Category" data-w2="">{"PDLX"}</td>
                                    <td className="dt__td nw" data-label="Occupancy" data-w2="">{"DBL"}</td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"CP"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Group rate" data-w2="">{"₹9,180"}</td>
                                    <td className="dt__td" data-label="Own price (₹)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="Room 2 own price" defaultValue={"9,180"} />
                                    </td>
                                    <td className="dt__td" data-label="Reason">
                                      <input className="field__input" type="text" placeholder="Why a different price?" aria-label="Room 2 reason" />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room" data-t="">
                                      <b>{"Room 3"}</b>
                                    </td>
                                    <td className="dt__td nw" data-label="Category" data-w2="">{"PDLX"}</td>
                                    <td className="dt__td nw" data-label="Occupancy" data-w2="">{"SGL"}</td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"CP"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Group rate" data-w2="">{"₹7,225"}</td>
                                    <td className="dt__td" data-label="Own price (₹)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="Room 3 own price" defaultValue={"7,225"} />
                                    </td>
                                    <td className="dt__td" data-label="Reason">
                                      <input className="field__input" type="text" placeholder="Why a different price?" aria-label="Room 3 reason" />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room" data-t="">
                                      <b>{"Room 4"}</b>
                                    </td>
                                    <td className="dt__td nw" data-label="Category" data-w2="">{"GDLX"}</td>
                                    <td className="dt__td nw" data-label="Occupancy" data-w2="">{"DBL"}</td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"MAP"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Group rate" data-w2="">{"₹10,625"}</td>
                                    <td className="dt__td" data-label="Own price (₹)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="Room 4 own price" defaultValue={"10,625"} />
                                    </td>
                                    <td className="dt__td" data-label="Reason">
                                      <input className="field__input" type="text" placeholder="Why a different price?" aria-label="Room 4 reason" />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room" data-t="">
                                      <b>{"Room 5"}</b>
                                    </td>
                                    <td className="dt__td nw" data-label="Category" data-w2="">{"GDLX"}</td>
                                    <td className="dt__td nw" data-label="Occupancy" data-w2="">{"TPL"}</td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"CP"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Group rate" data-w2="">{"₹10,705"}</td>
                                    <td className="dt__td" data-label="Own price (₹)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="Room 5 own price" defaultValue={"10,705"} />
                                    </td>
                                    <td className="dt__td" data-label="Reason">
                                      <input className="field__input" type="text" placeholder="Why a different price?" aria-label="Room 5 reason" />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room" data-t="">
                                      <b>{"Room 6"}</b>
                                    </td>
                                    <td className="dt__td nw" data-label="Category" data-w2="">{"DLXS"}</td>
                                    <td className="dt__td nw" data-label="Occupancy" data-w2="">{"DBL"}</td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"MAP"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Group rate" data-w2="">{"₹17,425"}</td>
                                    <td className="dt__td" data-label="Own price (₹)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="Room 6 own price" defaultValue={"17,425"} />
                                    </td>
                                    <td className="dt__td" data-label="Reason">
                                      <input className="field__input" type="text" placeholder="Why a different price?" aria-label="Room 6 reason" />
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div className="row">
                              <a className="btn" href="#">{"Cancel"}</a>
                              <a className="btn btn--primary" href="#flow-done">{"Save rates"}</a>
                            </div>
                          </section>
                        </section>
                        <section className="stabs__panel" data-code="RS-14-3" aria-label="Members">
                          <div className="pgw">
                            <div className="s-scroll">
                              <table className="srt dt__table dt--hug" data-code="RS-14-3-list" style={{"--srt-cols": "auto auto auto auto auto auto"}} data-mc="">
                                <caption className="sr-only">{"Members"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">
                                      <input className="srt-i srt-a0" type="radio" name="strs142" id="strs142-0a" aria-label="Sort by Booking, lowest or A first" />
                                      <input className="srt-i srt-d0" type="radio" name="strs142" id="strs142-0d" aria-label="Sort by Booking, highest or Z first" />
                                      <label className="srt-l srt-l--a" htmlFor="strs142-0a">{"Booking"}</label>
                                      <label className="srt-l srt-l--d" htmlFor="strs142-0d" aria-hidden="true">{"Booking"}</label>
                                    </th>
                                    <th scope="col">
                                      <input className="srt-i srt-a1" type="radio" name="strs142" id="strs142-1a" aria-label="Sort by Guest, lowest or A first" />
                                      <input className="srt-i srt-d1" type="radio" name="strs142" id="strs142-1d" aria-label="Sort by Guest, highest or Z first" />
                                      <label className="srt-l srt-l--a" htmlFor="strs142-1a">{"Guest"}</label>
                                      <label className="srt-l srt-l--d" htmlFor="strs142-1d" aria-hidden="true">{"Guest"}</label>
                                    </th>
                                    <th scope="col">{"Room type"}</th>
                                    <th scope="col">{"Room"}</th>
                                    <th scope="col">
                                      <input className="srt-i srt-a4" type="radio" name="strs142" id="strs142-4a" aria-label="Sort by Stay, lowest or A first" />
                                      <input className="srt-i srt-d4" type="radio" name="strs142" id="strs142-4d" aria-label="Sort by Stay, highest or Z first" />
                                      <label className="srt-l srt-l--a" htmlFor="strs142-4a">{"Stay"}</label>
                                      <label className="srt-l srt-l--d" htmlFor="strs142-4d" aria-hidden="true">{"Stay"}</label>
                                    </th>
                                    <th scope="col">{"Status"}</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr style={{"--k0": "1", "--k1": "15", "--k4": "1"}}>
                                    <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                      <a href="/reservation/rs-07-reservation-details/#FK-10040" data-leads-to="RS-07">
                                        <strong>{"FK-10040"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Guest" data-w2="">
                                      <a href="/reservation/rs-18-guest-profile/#GP-0377" data-leads-to="RS-18">
                                        <strong>{"Mr Sandeep Shaan"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Room type" data-w2="">{"1 × PDLX"}</td>
                                    <td className="dt__td nw" data-e="">{"–"}</td>
                                    <td className="dt__td nw" data-label="Stay" data-w2="">{"7 – 9 Dec"}</td>
                                    <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#shield-check" />
                                        </svg>
                                        {"Guaranteed"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "2", "--k1": "2", "--k4": "1"}}>
                                    <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                      <a href="/reservation/rs-07-reservation-details/#FK-10060" data-leads-to="RS-07">
                                        <strong>{"FK-10060"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Guest" data-w2="">
                                      <a href="/reservation/rs-18-guest-profile/#GP-0071" data-leads-to="RS-18">
                                        <strong>{"Mr Biju Prem"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Room type" data-w2="">{"1 × PDLX"}</td>
                                    <td className="dt__td nw" data-e="">{"–"}</td>
                                    <td className="dt__td nw" data-label="Stay" data-w2="">{"7 – 9 Dec"}</td>
                                    <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#shield-check" />
                                        </svg>
                                        {"Guaranteed"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "3", "--k1": "12", "--k4": "1"}}>
                                    <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                      <a href="/reservation/rs-07-reservation-details/#FK-10112" data-leads-to="RS-07">
                                        <strong>{"FK-10112"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Guest" data-w2="">
                                      <a href="/reservation/rs-18-guest-profile/#GP-0118" data-leads-to="RS-18">
                                        <strong>{"Ms Priya Sagar"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Room type" data-w2="">{"1 × PDLX"}</td>
                                    <td className="dt__td nw" data-e="">{"–"}</td>
                                    <td className="dt__td nw" data-label="Stay" data-w2="">{"7 – 9 Dec"}</td>
                                    <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#shield-check" />
                                        </svg>
                                        {"Guaranteed"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "4", "--k1": "13", "--k4": "1"}}>
                                    <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                      <a href="/reservation/rs-07-reservation-details/#FK-10117" data-leads-to="RS-07">
                                        <strong>{"FK-10117"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Guest" data-w2="">
                                      <a href="/reservation/rs-18-guest-profile/#GP-0240" data-leads-to="RS-18">
                                        <strong>{"Mrs Rekha George"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Room type" data-w2="">{"1 × PDLX"}</td>
                                    <td className="dt__td nw" data-e="">{"–"}</td>
                                    <td className="dt__td nw" data-label="Stay" data-w2="">{"7 – 9 Dec"}</td>
                                    <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#shield-check" />
                                        </svg>
                                        {"Guaranteed"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "5", "--k1": "3", "--k4": "1"}}>
                                    <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                      <a href="/reservation/rs-07-reservation-details/#FK-10153" data-leads-to="RS-07">
                                        <strong>{"FK-10153"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Guest" data-w2="">
                                      <a href="/reservation/rs-18-guest-profile/#GP-0344" data-leads-to="RS-18">
                                        <strong>{"Mr Gopan Joseph"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Room type" data-w2="">{"1 × PDLX"}</td>
                                    <td className="dt__td nw" data-e="">{"–"}</td>
                                    <td className="dt__td nw" data-label="Stay" data-w2="">{"7 – 9 Dec"}</td>
                                    <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#shield-check" />
                                        </svg>
                                        {"Guaranteed"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "6", "--k1": "11", "--k4": "1"}}>
                                    <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                      <a href="/reservation/rs-07-reservation-details/#FK-10157" data-leads-to="RS-07">
                                        <strong>{"FK-10157"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Guest" data-w2="">
                                      <a href="/reservation/rs-18-guest-profile/#GP-0231" data-leads-to="RS-18">
                                        <strong>{"Ms Priya Neil"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Room type" data-w2="">{"1 × PDLX"}</td>
                                    <td className="dt__td nw" data-e="">{"–"}</td>
                                    <td className="dt__td nw" data-label="Stay" data-w2="">{"7 – 9 Dec"}</td>
                                    <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#shield-check" />
                                        </svg>
                                        {"Guaranteed"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "7", "--k1": "4", "--k4": "1"}}>
                                    <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                      <a href="/reservation/rs-07-reservation-details/#FK-10167" data-leads-to="RS-07">
                                        <strong>{"FK-10167"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Guest" data-w2="">
                                      <a href="/reservation/rs-18-guest-profile/#GP-0158" data-leads-to="RS-18">
                                        <strong>{"Mr Imran Sagar"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Room type" data-w2="">{"1 × PDLX"}</td>
                                    <td className="dt__td nw" data-e="">{"–"}</td>
                                    <td className="dt__td nw" data-label="Stay" data-w2="">{"7 – 9 Dec"}</td>
                                    <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#shield-check" />
                                        </svg>
                                        {"Guaranteed"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "8", "--k1": "7", "--k4": "1"}}>
                                    <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                      <a href="/reservation/rs-07-reservation-details/#FK-10168" data-leads-to="RS-07">
                                        <strong>{"FK-10168"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Guest" data-w2="">
                                      <a href="/reservation/rs-18-guest-profile/#GP-0107" data-leads-to="RS-18">
                                        <strong>{"Ms Meera Khan"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Room type" data-w2="">{"1 × GDLX"}</td>
                                    <td className="dt__td nw" data-e="">{"–"}</td>
                                    <td className="dt__td nw" data-label="Stay" data-w2="">{"7 – 9 Dec"}</td>
                                    <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#shield-check" />
                                        </svg>
                                        {"Guaranteed"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "9", "--k1": "8", "--k4": "1"}}>
                                    <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                      <a href="/reservation/rs-07-reservation-details/#FK-10184" data-leads-to="RS-07">
                                        <strong>{"FK-10184"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Guest" data-w2="">
                                      <a href="/reservation/rs-18-guest-profile/#GP-0063" data-leads-to="RS-18">
                                        <strong>{"Ms Nandini Jatin"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Room type" data-w2="">{"1 × GDLX"}</td>
                                    <td className="dt__td nw" data-e="">{"–"}</td>
                                    <td className="dt__td nw" data-label="Stay" data-w2="">{"7 – 9 Dec"}</td>
                                    <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#shield-check" />
                                        </svg>
                                        {"Guaranteed"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "10", "--k1": "16", "--k4": "1"}}>
                                    <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                      <a href="/reservation/rs-07-reservation-details/#FK-10185" data-leads-to="RS-07">
                                        <strong>{"FK-10185"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Guest" data-w2="">
                                      <a href="/reservation/rs-18-guest-profile/#GP-0372" data-leads-to="RS-18">
                                        <strong>{"Mr Shibu Joseph"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Room type" data-w2="">{"1 × GDLX"}</td>
                                    <td className="dt__td nw" data-e="">{"–"}</td>
                                    <td className="dt__td nw" data-label="Stay" data-w2="">{"7 – 9 Dec"}</td>
                                    <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#shield-check" />
                                        </svg>
                                        {"Guaranteed"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "11", "--k1": "17", "--k4": "2"}}>
                                    <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                      <a href="/reservation/rs-07-reservation-details/#FK-10189" data-leads-to="RS-07">
                                        <strong>{"FK-10189"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Guest" data-w2="">
                                      <a href="/reservation/rs-18-guest-profile/#GP-0398" data-leads-to="RS-18">
                                        <strong>{"Mrs Sunita Ranjan"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Room type" data-w2="">{"1 × GDLX"}</td>
                                    <td className="dt__td nw" data-e="">{"–"}</td>
                                    <td className="dt__td nw" data-label="Stay" data-w2="">{"8 – 9 Dec"}</td>
                                    <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#shield-check" />
                                        </svg>
                                        {"Guaranteed"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "12", "--k1": "9", "--k4": "2"}}>
                                    <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                      <a href="/reservation/rs-07-reservation-details/#FK-10198" data-leads-to="RS-07">
                                        <strong>{"FK-10198"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Guest" data-w2="">
                                      <a href="/reservation/rs-18-guest-profile/#GP-0016" data-leads-to="RS-18">
                                        <strong>{"Ms Parvathy Thomas"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Room type" data-w2="">{"1 × PDLX"}</td>
                                    <td className="dt__td nw" data-e="">{"–"}</td>
                                    <td className="dt__td nw" data-label="Stay" data-w2="">{"8 – 9 Dec"}</td>
                                    <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#shield-check" />
                                        </svg>
                                        {"Guaranteed"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "13", "--k1": "10", "--k4": "1"}}>
                                    <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                      <a href="/reservation/rs-07-reservation-details/#FK-10204" data-leads-to="RS-07">
                                        <strong>{"FK-10204"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Guest" data-w2="">
                                      <a href="/reservation/rs-18-guest-profile/#GP-0099" data-leads-to="RS-18">
                                        <strong>{"Ms Pooja Neil"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Room type" data-w2="">{"1 × PDLX"}</td>
                                    <td className="dt__td nw" data-e="">{"–"}</td>
                                    <td className="dt__td nw" data-label="Stay" data-w2="">{"7 – 9 Dec"}</td>
                                    <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#shield-check" />
                                        </svg>
                                        {"Guaranteed"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "14", "--k1": "17", "--k4": "1"}}>
                                    <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                      <a href="/reservation/rs-07-reservation-details/#FK-10213" data-leads-to="RS-07">
                                        <strong>{"FK-10213"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Guest" data-w2="">
                                      <a href="/reservation/rs-18-guest-profile/#GP-0398" data-leads-to="RS-18">
                                        <strong>{"Mrs Sunita Ranjan"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Room type" data-w2="">{"1 × PDLX"}</td>
                                    <td className="dt__td nw" data-e="">{"–"}</td>
                                    <td className="dt__td nw" data-label="Stay" data-w2="">{"7 – 9 Dec"}</td>
                                    <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#shield-check" />
                                        </svg>
                                        {"Guaranteed"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "15", "--k1": "1", "--k4": "1"}}>
                                    <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                      <a href="/reservation/rs-07-reservation-details/#FK-10222" data-leads-to="RS-07">
                                        <strong>{"FK-10222"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Guest" data-w2="">
                                      <a href="/reservation/rs-18-guest-profile/#GP-0008" data-leads-to="RS-18">
                                        <strong>{"Mr Ajay Jatin"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Room type" data-w2="">{"1 × PDLX"}</td>
                                    <td className="dt__td nw" data-e="">{"–"}</td>
                                    <td className="dt__td nw" data-label="Stay" data-w2="">{"7 – 9 Dec"}</td>
                                    <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#shield-check" />
                                        </svg>
                                        {"Guaranteed"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "16", "--k1": "5", "--k4": "1"}}>
                                    <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                      <a href="/reservation/rs-07-reservation-details/#FK-10223" data-leads-to="RS-07">
                                        <strong>{"FK-10223"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Guest" data-w2="">
                                      <a href="/reservation/rs-18-guest-profile/#GP-0252" data-leads-to="RS-18">
                                        <strong>{"Mr Liam Walker"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Room type" data-w2="">{"1 × PDLX"}</td>
                                    <td className="dt__td nw" data-e="">{"–"}</td>
                                    <td className="dt__td nw" data-label="Stay" data-w2="">{"7 – 9 Dec"}</td>
                                    <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#shield-check" />
                                        </svg>
                                        {"Guaranteed"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "17", "--k1": "14", "--k4": "1"}}>
                                    <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                      <a href="/reservation/rs-07-reservation-details/#FK-10226" data-leads-to="RS-07">
                                        <strong>{"FK-10226"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Guest" data-w2="">
                                      <a href="/reservation/rs-18-guest-profile/#GP-0236" data-leads-to="RS-18">
                                        <strong>{"Ms Rekha Kurian"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Room type" data-w2="">{"1 × GDLX"}</td>
                                    <td className="dt__td nw" data-e="">{"–"}</td>
                                    <td className="dt__td nw" data-label="Stay" data-w2="">{"7 – 9 Dec"}</td>
                                    <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#shield-check" />
                                        </svg>
                                        {"Guaranteed"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "18", "--k1": "6", "--k4": "2"}}>
                                    <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                      <a href="/reservation/rs-07-reservation-details/#FK-10234" data-leads-to="RS-07">
                                        <strong>{"FK-10234"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Guest" data-w2="">
                                      <a href="/reservation/rs-18-guest-profile/#GP-0142" data-leads-to="RS-18">
                                        <strong>{"Mr Manoj Nathan"}</strong>
                                      </a>
                                    </td>
                                    <td className="dt__td nw" data-label="Room type" data-w2="">{"1 × PDLX"}</td>
                                    <td className="dt__td nw" data-e="">{"–"}</td>
                                    <td className="dt__td nw" data-label="Stay" data-w2="">{"8 – 9 Dec"}</td>
                                    <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#shield-check" />
                                        </svg>
                                        {"Guaranteed"}
                                      </span>
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
                                <input className="pg-in" type="radio" name="pg2r10" id="pg2r10p1" defaultChecked={true} />
                                <label className="pg-n" htmlFor="pg2r10p1" aria-label="Page 1">{"1"}</label>
                                <input className="pg-in" type="radio" name="pg2r10" id="pg2r10p2" />
                                <label className="pg-n" htmlFor="pg2r10p2" aria-label="Page 2">{"2"}</label>
                                <span className="pg-info">
                                  <span>
                                    {"Showing "}
                                    <b>{"1–10"}</b>
                                    {" of 18"}
                                  </span>
                                  <span>
                                    {"Showing "}
                                    <b>{"11–18"}</b>
                                    {" of 18"}
                                  </span>
                                </span>
                                <span className="pg-prev">
                                  <span className="pg-arr is-off">
                                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                      <use href="/assets/icons/sprite.svg#chevron-left" />
                                    </svg>
                                  </span>
                                  <label className="pg-arr" htmlFor="pg2r10p1" title="Previous page">
                                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                      <use href="/assets/icons/sprite.svg#chevron-left" />
                                    </svg>
                                  </label>
                                </span>
                                <span className="pg-next">
                                  <label className="pg-arr" htmlFor="pg2r10p2" title="Next page">
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
                                <input className="pg-in" type="radio" name="pg2r15" id="pg2r15p1" defaultChecked={true} />
                                <label className="pg-n" htmlFor="pg2r15p1" aria-label="Page 1">{"1"}</label>
                                <input className="pg-in" type="radio" name="pg2r15" id="pg2r15p2" />
                                <label className="pg-n" htmlFor="pg2r15p2" aria-label="Page 2">{"2"}</label>
                                <span className="pg-info">
                                  <span>
                                    {"Showing "}
                                    <b>{"1–15"}</b>
                                    {" of 18"}
                                  </span>
                                  <span>
                                    {"Showing "}
                                    <b>{"16–18"}</b>
                                    {" of 18"}
                                  </span>
                                </span>
                                <span className="pg-prev">
                                  <span className="pg-arr is-off">
                                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                      <use href="/assets/icons/sprite.svg#chevron-left" />
                                    </svg>
                                  </span>
                                  <label className="pg-arr" htmlFor="pg2r15p1" title="Previous page">
                                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                      <use href="/assets/icons/sprite.svg#chevron-left" />
                                    </svg>
                                  </label>
                                </span>
                                <span className="pg-next">
                                  <label className="pg-arr" htmlFor="pg2r15p2" title="Next page">
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
                                <input className="pg-in" type="radio" name="pg2r20" id="pg2r20p1" defaultChecked={true} />
                                <label className="pg-n" htmlFor="pg2r20p1" aria-label="Page 1">{"1"}</label>
                                <span className="pg-info">
                                  <span>
                                    {"Showing "}
                                    <b>{"1–18"}</b>
                                    {" of 18"}
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
                                    <b>{"1–18"}</b>
                                    {" of 18"}
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
                                    <b>{"1–18"}</b>
                                    {" of 18"}
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
                          <p style={{"marginTop": "10px"}}>
                            <a className="btn btn--primary" href="/reservation/rs-15-rooming-list/#GRP-0002" data-leads-to="RS-15">{"Add members from the rooming list"}</a>
                          </p>
                        </section>
                        <section className="stabs__panel" data-code="RS-14-4" aria-label="Billing & deposits">
                          <div className="s-grid2">
                            <section className="card">
                              <dl className="s-kv">
                                <dt>{"Master bill"}</dt>
                                <dd>{"Periyar Infotech Solutions"}</dd>
                                <dt>{"Rooms billed to"}</dt>
                                <dd>{"Master bill"}</dd>
                                <dt>{"Incidentals"}</dt>
                                <dd>{"Members pay"}</dd>
                                <dt>{"Estimated room charges"}</dt>
                                <dd>{"₹4,59,930.00"}</dd>
                                <dt>{"Advance policy"}</dt>
                                <dd>{"Group – 25% at confirmation"}</dd>
                              </dl>
                            </section>
                            <section className="card">
                              <h3 className="s-card-title">{"Deposit schedule"}</h3>
                              <div className="s-scroll">
                                <table className="dt__table dt--hug" data-mc="">
                                  <caption className="sr-only">{"Deposits"}</caption>
                                  <thead>
                                    <tr>
                                      <th scope="col">{"Due"}</th>
                                      <th scope="col">{"What"}</th>
                                      <th scope="col" className="dt__th--right">{"Amount"}</th>
                                      <th scope="col">{"Status"}</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="dt__td nw" data-label="Due" data-w2="" data-t="">{"15 Oct 2026"}</td>
                                      <td className="dt__td nw" data-label="What" data-w2="">{"25% at confirmation"}</td>
                                      <td className="dt__td dt__td--right num nw" data-label="Amount" data-w2="">{"₹1,14,982.50"}</td>
                                      <td className="dt__td" data-label="Status" data-s="">
                                        <span className="pill pill--tentative">
                                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                            <use href="/assets/icons/sprite.svg#clock" />
                                          </svg>
                                          {"Due"}
                                        </span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="dt__td nw" data-label="Due" data-w2="" data-t="">{"30 Nov 2026"}</td>
                                      <td className="dt__td" data-label="What" data-w2="">{"Balance before arrival"}</td>
                                      <td className="dt__td dt__td--right num nw" data-label="Amount" data-w2="">{"₹3,44,947.50"}</td>
                                      <td className="dt__td" data-label="Status" data-s="">
                                        <span className="pill pill--ooo">
                                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                            <use href="/assets/icons/sprite.svg#clock" />
                                          </svg>
                                          {"Later"}
                                        </span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </section>
                          </div>
                          <p style={{"marginTop": "10px"}}>
                            <Link className="btn" data-leads-to="RS-10" to={"/reservation/rs-10-payments-and-deposits"}>{"Payments"}</Link>
                          </p>
                        </section>
                        <section className="stabs__panel" data-code="RS-14-5" aria-label="Communication">
                          <div className="s-empty">{"Group confirmations are sent from the Group confirmation button at the top of this booking."}</div>
                          <p>
                            <Link className="btn" data-leads-to="RS-11" to={"/reservation/rs-11-confirmation-and-voucher"}>{"Open confirmation"}</Link>
                          </p>
                        </section>
                        <section className="stabs__panel" data-code="RS-14-6" aria-label="History">
                          <ol className="notif__list">
                            <li className="notif__item">
                              <span className="notif__text">
                                <strong>{"Group created"}</strong>
                                <span>{"GRP-0002 · Farah Khan"}</span>
                              </span>
                              <span className="notif__time">{"8 Oct 15:10"}</span>
                            </li>
                          </ol>
                        </section>
                      </div>
                    </div>
                  </div>
                  <div className="modal modal--lg" id="RS-14-conf-GRP-0002" data-code="RS-14c" role="dialog" aria-modal="true" aria-labelledby="RS-14-conf-GRP-0002-t">
                    <a className="modal__backdrop" href="#GRP-0002" aria-label="Close" tabIndex="-1" />
                    <div className="modal__box">
                      <div className="modal__head">
                        <div>
                          <h2 className="modal__title" id="RS-14-conf-GRP-0002-t">{"Group confirmation"}</h2>
                          <p className="modal__desc">{"GRP-0002 · Backwater Analytics annual conference"}</p>
                        </div>
                        <a className="modal__close" href="#GRP-0002" aria-label="Close">
                          <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#x" />
                          </svg>
                        </a>
                      </div>
                      <div className="modal__body">
                        <h3 className="s-card-title">{"Rate for each day · Pool Deluxe, double"}</h3>
                        <div className="s-scroll">
                          <table className="dt__table dt--hug" data-nosort="" data-mc="">
                            <caption className="sr-only">{"Rate for each day of the stay"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">{"Night"}</th>
                                <th scope="col">{"Meal plan"}</th>
                                <th scope="col" className="dt__th--right">{"Rate"}</th>
                                <th scope="col" className="dt__th--right">{"GST"}</th>
                                <th scope="col" className="dt__th--right">{"Night total"}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="dt__td nw" data-label="Night" data-w2="" data-t="">
                                  <b>{"Mon 7 Dec"}</b>
                                </td>
                                <td className="dt__td" data-label="Meal plan" data-w2="">
                                  <b>{"CP"}</b>
                                  {" · Breakfast"}
                                </td>
                                <td className="dt__td dt__td--right num nw" data-label="Rate" data-w2="">{"₹9,180.00"}</td>
                                <td className="dt__td dt__td--right num nw" data-label="GST" data-w2="">{"₹1,652.40 (18%)"}</td>
                                <td className="dt__td dt__td--right num nw" data-label="Night total" data-w2="">{"₹10,832.40"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td nw" data-label="Night" data-w2="" data-t="">
                                  <b>{"Tue 8 Dec"}</b>
                                </td>
                                <td className="dt__td" data-label="Meal plan">
                                  <b>{"AP"}</b>
                                  {" · Breakfast · Lunch · Dinner"}
                                </td>
                                <td className="dt__td dt__td--right num nw" data-label="Rate" data-w2="">{"₹12,665.00"}</td>
                                <td className="dt__td dt__td--right num nw" data-label="GST" data-w2="">{"₹2,279.70 (18%)"}</td>
                                <td className="dt__td dt__td--right num nw" data-label="Night total" data-w2="">{"₹14,944.70"}</td>
                              </tr>
                              <tr className="rs14-ctot">
                                <td className="dt__td" colSpan="2">
                                  <strong>{"Total room rate · 2 night(s)"}</strong>
                                </td>
                                <td className="dt__td dt__td--right num nw" data-label="Rate" data-w2="" data-t="">
                                  <strong>{"₹21,845.00"}</strong>
                                </td>
                                <td className="dt__td dt__td--right num nw" data-label="GST" data-w2="">
                                  <strong>{"₹3,932.10"}</strong>
                                </td>
                                <td className="dt__td dt__td--right num nw" data-label="Night total" data-w2="">
                                  <strong>{"₹25,777.10"}</strong>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p className="field__hint rs14-cnote">{"The document lists every room category in the same way, at the rate set for its occupancy and each day's meal plan. These are the rates billed to the guest folios."}</p>
                      </div>
                      <div className="modal__foot">
                        <a className="btn" href="#GRP-0002">{"Close"}</a>
                        <a className="btn btn--primary" href="#GRP-0002">{"Send to the organiser"}</a>
                      </div>
                    </div>
                  </div>
                  <div className="modal" id="RS-14a-GRP-0002" data-code="RS-14a" role="dialog" aria-modal="true" aria-labelledby="RS-14a-GRP-0002-t">
                    <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                    <form className="modal__box" action="#" noValidate={true}>
                      <div className="modal__head">
                        <div>
                          <h2 className="modal__title" id="RS-14a-GRP-0002-t">{"Release unused rooms"}</h2>
                          <p className="modal__desc">{"GRP-0002"}</p>
                        </div>
                        <a className="modal__close" href="#" aria-label="Close">
                          <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#x" />
                          </svg>
                        </a>
                      </div>
                      <div className="modal__body">
                        <div className="s-scroll">
                          <table className="dt__table dt--hug" data-mc="">
                            <thead>
                              <tr>
                                <th scope="col">{"Room type"}</th>
                                <th scope="col" className="dt__th--right">{"Unpicked (max per night)"}</th>
                                <th scope="col" className="dt__th--right">{"Release"}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">{"Pool Deluxe Room"}</td>
                                <td className="dt__td dt__td--right num" data-label="Unpicked (max per night)" data-w2="">{"4"}</td>
                                <td className="dt__td dt__td--right" data-label="Release" data-w2="">
                                  <input className="field__input num" style={{"width": "72px"}} type="number" min="0" aria-label="Release PDLX" defaultValue={"0"} />
                                </td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">{"Garden Deluxe Room"}</td>
                                <td className="dt__td dt__td--right num" data-label="Unpicked (max per night)" data-w2="">{"16"}</td>
                                <td className="dt__td dt__td--right" data-label="Release" data-w2="">
                                  <input className="field__input num" style={{"width": "72px"}} type="number" min="0" aria-label="Release GDLX" defaultValue={"0"} />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f22">
                            {"Reason "}
                            <span className="field__req">{"*"}</span>
                          </label>
                          <textarea className="field__input field__input--area" id="f22" defaultValue={""} />
                        </div>
                      </div>
                      <div className="modal__foot">
                        <a className="btn" href="#">{"Cancel"}</a>
                        <a className="btn btn--primary" href="#flow-done">{"Release rooms"}</a>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="variant v-GRP-0003">
                  <div className="bk-bar">
                    <a className="btn" href="#list">{"← All groups"}</a>
                    <span className="s-spacer" />
                    <a className="btn" href="/reservation/rs-15-rooming-list/#GRP-0003" data-leads-to="RS-15">{"Rooming list"}</a>
                    <Link className="btn" data-leads-to="RS-12" to={"/reservation/rs-12-cancellation"}>{"Cancel group rooms"}</Link>
                    <a className="btn" href="#RS-14-conf-GRP-0003" data-opens="RS-14c">{"Group confirmation"}</a>
                  </div>
                  <section className="card bk-hero" data-code="RS-14-hero">
                    <div>
                      <p className="field__hint">{"Group GRP-0003"}</p>
                      <h2 className="bk-hero__t">{"Cochin Marine Services – surveyors' visit"}</h2>
                      <p className="bk-hero__s">{"22 – 24 Oct · 3 member bookings · cut-off 15 Oct (in -7 days)"}</p>
                      <span className="pill pill--ready">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#check-circle" />
                        </svg>
                        {"Definite"}
                      </span>
                    </div>
                    <div style={{"minWidth": "220px"}}>
                      <strong className="num">{"8 / 8"}</strong>
                      {" picked up"}
                      <div className="rs04-meter" role="img" aria-label="100 percent picked up">
                        <span style={{"width": "100%"}} />
                      </div>
                    </div>
                  </section>
                  <div style={{"marginTop": "12px"}}>
                    <div className="stabs">
                      <input type="radio" name="tGRP0003" id="tGRP0003-1" aria-label="Details" defaultChecked={true} />
                      <input type="radio" name="tGRP0003" id="tGRP0003-2" aria-label="Room block" />
                      <input type="radio" name="tGRP0003" id="tGRP0003-r" aria-label="Rates & meals" />
                      <input type="radio" name="tGRP0003" id="tGRP0003-3" aria-label="Members" />
                      <input type="radio" name="tGRP0003" id="tGRP0003-4" aria-label="Billing & deposits" />
                      <input type="radio" name="tGRP0003" id="tGRP0003-5" aria-label="Communication" />
                      <input type="radio" name="tGRP0003" id="tGRP0003-6" aria-label="History" />
                      <div className="stabs__list" role="tablist">
                        <label htmlFor="tGRP0003-1">{"Details"}</label>
                        <label htmlFor="tGRP0003-2">{"Room block"}</label>
                        <label htmlFor="tGRP0003-r">{"Rates & meals"}</label>
                        <label htmlFor="tGRP0003-3">{"Members"}</label>
                        <label htmlFor="tGRP0003-4">{"Billing & deposits"}</label>
                        <label htmlFor="tGRP0003-5">{"Communication"}</label>
                        <label htmlFor="tGRP0003-6">{"History"}</label>
                      </div>
                      <div className="stabs__panels">
                        <section className="stabs__panel" data-code="RS-14-1" aria-label="Details">
                          <div className="s-grid2">
                            <section className="card">
                              <dl className="s-kv">
                                <dt>{"Group"}</dt>
                                <dd>{"GRP-0003"}</dd>
                                <dt>{"Name"}</dt>
                                <dd>{"Cochin Marine Services – surveyors' visit"}</dd>
                                <dt>{"Type"}</dt>
                                <dd>{"Corporate"}</dd>
                                <dt data-flow="rs14-seg">{"Segment"}</dt>
                                <dd>{"Corporate"}</dd>
                                <dt>{"Children"}</dt>
                                <dd>{"11 and under free with existing beds (max 2 per room)"}</dd>
                                <dt>{"Extras available"}</dt>
                                <dd>{"Extra bed, Breakfast, Airport transfer (one way), Gala dinner, Ayurveda therapy session, Seafood Grill dinner, Early check-in, Late check-out (until 18:00), Celebration cake"}</dd>
                                <dt>{"Status"}</dt>
                                <dd>
                                  <span className="pill pill--ready">
                                    <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                      <use href="/assets/icons/sprite.svg#check-circle" />
                                    </svg>
                                    {"Definite"}
                                  </span>
                                </dd>
                                <dt>{"Contact"}</dt>
                                <dd>{"Preethi Thomas · +91 7085193988"}</dd>
                                <dt>{"Email"}</dt>
                                <dd>{"bookings2@example.com"}</dd>
                                <dt>{"Company"}</dt>
                                <dd>{"Cochin Marine Services Ltd"}</dd>
                              </dl>
                            </section>
                            <section className="card">
                              <dl className="s-kv">
                                <dt>{"Arrival"}</dt>
                                <dd>{"Thu 22 Oct"}</dd>
                                <dt>{"Departure"}</dt>
                                <dd>{"Sat 24 Oct"}</dd>
                                <dt>{"Cut-off date"}</dt>
                                <dd>{"Thu 15 Oct · in -7 days"}</dd>
                                <dt>{"Group rate plan"}</dt>
                                <dd>{"CORP – Corporate rate"}</dd>
                                <dt>{"Halls"}</dt>
                                <dd>{"–"}</dd>
                                <dt>{"Sales person"}</dt>
                                <dd>{"Farah Khan"}</dd>
                              </dl>
                            </section>
                          </div>
                          <section className="card" style={{"marginTop": "12px"}} data-code="RS-14-notes">
                            <div className="field">
                              <label className="field__label" htmlFor="f23">{"Notes"}</label>
                              <textarea className="field__input field__input--area" id="f23" defaultValue={"Four rooms for visiting marine surveyors. Rooms and extras are billed to Cochin Marine Services Ltd (group master); personal extras to each guest."} />
                              <span className="field__hint">{"Internal notes about this group: contract points, special arrangements, who to call"}</span>
                            </div>
                            <div className="s-actions">
                              <a className="btn btn--primary" href="#flow-done">{"Save notes"}</a>
                            </div>
                          </section>
                          <section className="card" style={{"marginTop": "12px"}} data-code="RS-14-terms">
                            <h2 className="s-card-title" style={{"marginBottom": "10px"}}>{"Contract terms"}</h2>
                            <div className="s-grid3">
                              <div className="field">
                                <label className="field__label" htmlFor="f24">{"Block type"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="f24" defaultValue={"Deducting – the rooms are held back from sale"}>
                                    <option>{"Deducting – the rooms are held back from sale"}</option>
                                    <option>{"Non-deducting – a wish list, rooms stay on sale"}</option>
                                  </select>
                                  <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                                <span className="field__hint">{"Decides whether the block reduces rooms left"}</span>
                              </div>
                              <div className="field" data-fw="s">
                                <label className="field__label" htmlFor="f25">{"Cut-off (date and time, IST)"}</label>
                                <div className="dpk-dt">
                                  <div className="dpk">
                                    <button type="button" className="dpk-f field__input" id="f25" aria-haspopup="dialog">
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
                                      <span className="dpk-f__ph">{"Date"}</span>
                                    </button>
                                    <div className="dpk-pop" tabIndex="-1" role="dialog" aria-label="Choose a date">
                                      <div className="dpk-h">
                                        <select className="dpk-m" name="f25-month" aria-label="Month" defaultValue={"10"}>
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
                                        <select className="dpk-y" name="f25-year" aria-label="Year" defaultValue={"2026"}>
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
                                          <input type="radio" name="f25" value="01" />
                                          {"1"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f25" value="02" />
                                          {"2"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f25" value="03" />
                                          {"3"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f25" value="04" />
                                          {"4"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f25" value="05" />
                                          {"5"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f25" value="06" />
                                          {"6"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f25" value="07" />
                                          {"7"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f25" value="08" />
                                          {"8"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f25" value="09" />
                                          {"9"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f25" value="10" />
                                          {"10"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f25" value="11" />
                                          {"11"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f25" value="12" />
                                          {"12"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f25" value="13" />
                                          {"13"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f25" value="14" />
                                          {"14"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f25" value="15" defaultChecked={true} />
                                          {"15"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f25" value="16" />
                                          {"16"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f25" value="17" />
                                          {"17"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f25" value="18" />
                                          {"18"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f25" value="19" />
                                          {"19"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f25" value="20" />
                                          {"20"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f25" value="21" />
                                          {"21"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f25" value="22" />
                                          {"22"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f25" value="23" />
                                          {"23"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f25" value="24" />
                                          {"24"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f25" value="25" />
                                          {"25"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f25" value="26" />
                                          {"26"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f25" value="27" />
                                          {"27"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f25" value="28" />
                                          {"28"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f25" value="29" />
                                          {"29"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f25" value="30" />
                                          {"30"}
                                        </label>
                                        <label className="dpk-d">
                                          <input type="radio" name="f25" value="31" />
                                          {"31"}
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                  <input className="field__input num dpk-time" type="time" name="f25-time" aria-label="Time" defaultValue={"18:00"} />
                                </div>
                                <span className="field__hint">{"Unpicked rooms are released at exactly this time"}</span>
                              </div>
                              <div className="field" data-fw="s">
                                <label className="field__label" htmlFor="f26">{"Rooming list due"}</label>
                                <div className="dpk">
                                  <button type="button" className="dpk-f field__input" id="f26" aria-haspopup="dialog">
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
                                      <select className="dpk-m" name="f26-month" aria-label="Month" defaultValue={"10"}>
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
                                      <select className="dpk-y" name="f26-year" aria-label="Year" defaultValue={"2026"}>
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
                                        <input type="radio" name="f26" value="01" />
                                        {"1"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f26" value="02" />
                                        {"2"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f26" value="03" />
                                        {"3"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f26" value="04" />
                                        {"4"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f26" value="05" />
                                        {"5"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f26" value="06" />
                                        {"6"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f26" value="07" />
                                        {"7"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f26" value="08" />
                                        {"8"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f26" value="09" />
                                        {"9"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f26" value="10" />
                                        {"10"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f26" value="11" />
                                        {"11"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f26" value="12" defaultChecked={true} />
                                        {"12"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f26" value="13" />
                                        {"13"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f26" value="14" />
                                        {"14"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f26" value="15" />
                                        {"15"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f26" value="16" />
                                        {"16"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f26" value="17" />
                                        {"17"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f26" value="18" />
                                        {"18"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f26" value="19" />
                                        {"19"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f26" value="20" />
                                        {"20"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f26" value="21" />
                                        {"21"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f26" value="22" />
                                        {"22"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f26" value="23" />
                                        {"23"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f26" value="24" />
                                        {"24"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f26" value="25" />
                                        {"25"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f26" value="26" />
                                        {"26"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f26" value="27" />
                                        {"27"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f26" value="28" />
                                        {"28"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f26" value="29" />
                                        {"29"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f26" value="30" />
                                        {"30"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f26" value="31" />
                                        {"31"}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <span className="field__hint">{"Names after this date need a manager"}</span>
                              </div>
                              <div className="field" data-fw="x">
                                <label className="field__label" htmlFor="f27">{"Attrition allowance (%)"}</label>
                                <input className="field__input num" id="f27" type="number" defaultValue={"10"} />
                                <span className="field__hint">{"Share of the block the group may release without charge"}</span>
                              </div>
                              <div className="field">
                                <label className="field__label" htmlFor="f28">{"A member cancels before cut-off"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="f28" defaultValue={"Room goes back to the group block"}>
                                    <option>{"Room goes back to the group block"}</option>
                                    <option>{"Room goes to general sale"}</option>
                                  </select>
                                  <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </div>
                              <div className="field">
                                <label className="field__label" htmlFor="f29">{"A member cancels after cut-off"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="f29" defaultValue={"Room goes to general sale"}>
                                    <option>{"Room goes to general sale"}</option>
                                    <option>{"Room goes back to the group block"}</option>
                                  </select>
                                  <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </div>
                              <div className="field">
                                <label className="field__label" htmlFor="f30">{"Payment responsibility"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="f30" defaultValue={"Master bill: rooms and tax · guests: incidentals"}>
                                    <option>{"Master bill: rooms and tax · guests: incidentals"}</option>
                                    <option>{"Master bill: everything"}</option>
                                    <option>{"Each guest pays their own"}</option>
                                  </select>
                                  <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </div>
                              <div className="field">
                                <label className="field__label" htmlFor="f31">{"Contract / agreement no."}</label>
                                <input className="field__input" id="f31" type="text" defaultValue={""} />
                                <span className="field__hint">{"Signed agreement the block follows"}</span>
                              </div>
                              <div className="field" data-fw="s">
                                <label className="field__label" htmlFor="f32">{"Contract signed on"}</label>
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
                                      <select className="dpk-m" name="f32-month" aria-label="Month" defaultValue={"10"}>
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
                                      <select className="dpk-y" name="f32-year" aria-label="Year" defaultValue={"2026"}>
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
                                        <input type="radio" name="f32" value="01" />
                                        {"1"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f32" value="02" />
                                        {"2"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f32" value="03" />
                                        {"3"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f32" value="04" />
                                        {"4"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f32" value="05" />
                                        {"5"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f32" value="06" />
                                        {"6"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f32" value="07" />
                                        {"7"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f32" value="08" />
                                        {"8"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f32" value="09" />
                                        {"9"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f32" value="10" />
                                        {"10"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f32" value="11" />
                                        {"11"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f32" value="12" />
                                        {"12"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f32" value="13" />
                                        {"13"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f32" value="14" />
                                        {"14"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f32" value="15" />
                                        {"15"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f32" value="16" />
                                        {"16"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f32" value="17" />
                                        {"17"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f32" value="18" />
                                        {"18"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f32" value="19" />
                                        {"19"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f32" value="20" />
                                        {"20"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f32" value="21" />
                                        {"21"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f32" value="22" />
                                        {"22"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f32" value="23" />
                                        {"23"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f32" value="24" />
                                        {"24"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f32" value="25" />
                                        {"25"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f32" value="26" />
                                        {"26"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f32" value="27" />
                                        {"27"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f32" value="28" />
                                        {"28"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f32" value="29" />
                                        {"29"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f32" value="30" />
                                        {"30"}
                                      </label>
                                      <label className="dpk-d">
                                        <input type="radio" name="f32" value="31" />
                                        {"31"}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="s-note">
                              <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#info" />
                              </svg>
                              <span>{"How many rooms the group holds: on the busiest night the block is 4 rooms, of which 4 are already member bookings and 0 are not picked up yet. The group holds 4 rooms in total – the 4 member bookings replace their part of the block, they are not counted twice."}</span>
                            </div>
                          </section>
                        </section>
                        <section className="stabs__panel" data-code="RS-14-2" aria-label="Room block">
                          <div className="s-scroll">
                            <table className="dt__table dt--hug" data-code="RS-14-2-grid" data-mc="">
                              <caption className="sr-only">{"Room block"}</caption>
                              <thead>
                                <tr>
                                  <th scope="col">{"Room type"}</th>
                                  <th scope="col" className="dt__th--right">{"Thu 22 Oct"}</th>
                                  <th scope="col" className="dt__th--right">{"Fri 23 Oct"}</th>
                                  <th scope="col" className="dt__th--right">{"Picked up"}</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                    <strong>{"Pool Deluxe Room"}</strong>
                                  </td>
                                  <td className="dt__td dt__td--right num" data-label="Thu 22 Oct" data-w2="">
                                    <input className="field__input num" style={{"width": "64px"}} type="number" min="0" aria-label="PDLX blocked, 22 Oct" defaultValue={"1"} />
                                    {" "}
                                    <span className="field__hint">{"picked 1"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right num" data-label="Fri 23 Oct" data-w2="">
                                    <input className="field__input num" style={{"width": "64px"}} type="number" min="0" aria-label="PDLX blocked, 23 Oct" defaultValue={"1"} />
                                    {" "}
                                    <span className="field__hint">{"picked 1"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right num" data-label="Picked up" data-w2="">{"2 / 2"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                    <strong>{"Garden Deluxe Room"}</strong>
                                  </td>
                                  <td className="dt__td dt__td--right num" data-label="Thu 22 Oct" data-w2="">
                                    <input className="field__input num" style={{"width": "64px"}} type="number" min="0" aria-label="GDLX blocked, 22 Oct" defaultValue={"3"} />
                                    {" "}
                                    <span className="field__hint">{"picked 3"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right num" data-label="Fri 23 Oct" data-w2="">
                                    <input className="field__input num" style={{"width": "64px"}} type="number" min="0" aria-label="GDLX blocked, 23 Oct" defaultValue={"3"} />
                                    {" "}
                                    <span className="field__hint">{"picked 3"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right num" data-label="Picked up" data-w2="">{"6 / 6"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                    <strong>{"Deluxe Suite"}</strong>
                                  </td>
                                  <td className="dt__td dt__td--right num" data-label="Thu 22 Oct" data-w2="">
                                    <input className="field__input num" style={{"width": "64px"}} type="number" min="0" aria-label="DLXS blocked, Thu 22 Oct" defaultValue={"0"} />
                                    {" "}
                                    <span className="field__hint">{"picked 0"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right num" data-label="Fri 23 Oct" data-w2="">
                                    <input className="field__input num" style={{"width": "64px"}} type="number" min="0" aria-label="DLXS blocked, Fri 23 Oct" defaultValue={"0"} />
                                    {" "}
                                    <span className="field__hint">{"picked 0"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right num" data-label="Picked up" data-w2="">{"0 / 0"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td" data-label="Room type" data-w2="" data-t="">
                                    <strong>{"Premium Suite"}</strong>
                                  </td>
                                  <td className="dt__td dt__td--right num" data-label="Thu 22 Oct" data-w2="">
                                    <input className="field__input num" style={{"width": "64px"}} type="number" min="0" aria-label="PRMS blocked, Thu 22 Oct" defaultValue={"0"} />
                                    {" "}
                                    <span className="field__hint">{"picked 0"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right num" data-label="Fri 23 Oct" data-w2="">
                                    <input className="field__input num" style={{"width": "64px"}} type="number" min="0" aria-label="PRMS blocked, Fri 23 Oct" defaultValue={"0"} />
                                    {" "}
                                    <span className="field__hint">{"picked 0"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right num" data-label="Picked up" data-w2="">{"0 / 0"}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="rs04-meter" role="img" aria-label="100 percent picked up">
                            <span style={{"width": "100%"}} />
                          </div>
                          <p className="field__hint">
                            <strong>{"8 of 8 block room-nights picked up (100%)."}</strong>
                            {" Cut-off in -7 days; unpicked rooms are released automatically."}
                          </p>
                          <div className="row">
                            <a className="btn" href="#RS-14a-GRP-0003" data-opens="RS-14a">{"Release unused rooms"}</a>
                            <a className="btn" href="/reservation/rs-15-rooming-list/#GRP-0003" data-leads-to="RS-15">{"Open rooming list"}</a>
                            <a className="btn btn--primary" href="#flow-done">{"Save block"}</a>
                          </div>
                        </section>
                        <section className="stabs__panel" data-code="RS-14-rates" aria-label="Rates & meals">
                          <section className="card" data-code="RS-14-7-matrix">
                            <header className="rs14-h">
                              <div>
                                <h3 className="s-card-title">{"Group rates · Cochin Marine Services – surveyors' visit"}</h3>
                                <p className="field__hint">{"Every room category of the hotel can be in the group. Price each one for single, double and triple occupancy and for every meal plan – by hand, or fill from BAR or the company's grid and then adjust. Rates are per room per night before GST."}</p>
                              </div>
                              <div className="rs14-acts">
                                <label className="rs14-src">
                                  <span>{"Fill from"}</span>
                                  <select className="field__input field__input--select">
                                    <option>{"Group discount on BAR (18 %)"}</option>
                                    <option>{"Company rate grid"}</option>
                                    <option>{"Another group"}</option>
                                    <option>{"Nothing – I type every rate"}</option>
                                  </select>
                                </label>
                                <a className="btn" href="#rs14-upload">
                                  <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#upload" />
                                  </svg>
                                  {"Upload rates"}
                                </a>
                              </div>
                            </header>
                            <div className="s-scroll rs14-gridscroll">
                              <table className="dt__table dt--hug" data-nosort="" data-mc="">
                                <caption className="sr-only">{"Group rates by room category, meal plan and occupancy"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Room category"}</th>
                                    <th scope="col">{"Meal plan"}</th>
                                    <th scope="col">{"Single (SGL)"}</th>
                                    <th scope="col">{"Double (DBL)"}</th>
                                    <th scope="col">{"Triple (TPL)"}</th>
                                    <th scope="col" className="dt__th--right">{"Extra adult"}</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room category" data-w2="" data-t="">
                                      <span className="code-chip">{"GDLX"}</span>
                                      {" Garden Deluxe Room"}
                                    </td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"EP"}</td>
                                    <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="GDLX EP Single (SGL)" defaultValue={"5,905"} />
                                    </td>
                                    <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="GDLX EP Double (DBL)" defaultValue={"7,135"} />
                                    </td>
                                    <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="GDLX EP Triple (TPL)" defaultValue={"8,365"} />
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Extra adult" data-w2="">{"₹1,230"}</td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room category" data-w2="" data-t="">
                                      <span className="code-chip">{"GDLX"}</span>
                                      {" Garden Deluxe Room"}
                                    </td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"CP"}</td>
                                    <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="GDLX CP Single (SGL)" defaultValue={"6,560"} />
                                    </td>
                                    <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="GDLX CP Double (DBL)" defaultValue={"8,445"} />
                                    </td>
                                    <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="GDLX CP Triple (TPL)" defaultValue={"10,330"} />
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Extra adult" data-w2="">{"₹1,885"}</td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room category" data-w2="" data-t="">
                                      <span className="code-chip">{"GDLX"}</span>
                                      {" Garden Deluxe Room"}
                                    </td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"MAP"}</td>
                                    <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="GDLX MAP Single (SGL)" defaultValue={"7,460"} />
                                    </td>
                                    <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="GDLX MAP Double (DBL)" defaultValue={"10,250"} />
                                    </td>
                                    <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="GDLX MAP Triple (TPL)" defaultValue={"13,035"} />
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Extra adult" data-w2="">{"₹2,785"}</td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room category" data-w2="" data-t="">
                                      <span className="code-chip">{"GDLX"}</span>
                                      {" Garden Deluxe Room"}
                                    </td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"AP"}</td>
                                    <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="GDLX AP Single (SGL)" defaultValue={"8,240"} />
                                    </td>
                                    <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="GDLX AP Double (DBL)" defaultValue={"11,805"} />
                                    </td>
                                    <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="GDLX AP Triple (TPL)" defaultValue={"15,375"} />
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Extra adult" data-w2="">{"₹3,565"}</td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room category" data-w2="" data-t="">
                                      <span className="code-chip">{"PDLX"}</span>
                                      {" Pool Deluxe Room"}
                                    </td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"EP"}</td>
                                    <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PDLX EP Single (SGL)" defaultValue={"6,315"} />
                                    </td>
                                    <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PDLX EP Double (DBL)" defaultValue={"7,545"} />
                                    </td>
                                    <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PDLX EP Triple (TPL)" defaultValue={"8,775"} />
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Extra adult" data-w2="">{"₹1,230"}</td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room category" data-w2="" data-t="">
                                      <span className="code-chip">{"PDLX"}</span>
                                      {" Pool Deluxe Room"}
                                    </td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"CP"}</td>
                                    <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PDLX CP Single (SGL)" defaultValue={"6,970"} />
                                    </td>
                                    <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PDLX CP Double (DBL)" defaultValue={"8,855"} />
                                    </td>
                                    <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PDLX CP Triple (TPL)" defaultValue={"10,740"} />
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Extra adult" data-w2="">{"₹1,885"}</td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room category" data-w2="" data-t="">
                                      <span className="code-chip">{"PDLX"}</span>
                                      {" Pool Deluxe Room"}
                                    </td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"MAP"}</td>
                                    <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PDLX MAP Single (SGL)" defaultValue={"7,870"} />
                                    </td>
                                    <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PDLX MAP Double (DBL)" defaultValue={"10,660"} />
                                    </td>
                                    <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PDLX MAP Triple (TPL)" defaultValue={"13,445"} />
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Extra adult" data-w2="">{"₹2,785"}</td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room category" data-w2="" data-t="">
                                      <span className="code-chip">{"PDLX"}</span>
                                      {" Pool Deluxe Room"}
                                    </td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"AP"}</td>
                                    <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PDLX AP Single (SGL)" defaultValue={"8,650"} />
                                    </td>
                                    <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PDLX AP Double (DBL)" defaultValue={"12,215"} />
                                    </td>
                                    <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PDLX AP Triple (TPL)" defaultValue={"15,785"} />
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Extra adult" data-w2="">{"₹3,565"}</td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room category" data-w2="" data-t="">
                                      <span className="code-chip">{"DLXS"}</span>
                                      {" Deluxe Suite"}
                                    </td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"EP"}</td>
                                    <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="DLXS EP Single (SGL)" defaultValue={"12,465"} />
                                    </td>
                                    <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="DLXS EP Double (DBL)" defaultValue={"13,695"} />
                                    </td>
                                    <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="DLXS EP Triple (TPL)" defaultValue={"14,925"} />
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Extra adult" data-w2="">{"₹1,230"}</td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room category" data-w2="" data-t="">
                                      <span className="code-chip">{"DLXS"}</span>
                                      {" Deluxe Suite"}
                                    </td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"CP"}</td>
                                    <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="DLXS CP Single (SGL)" defaultValue={"13,120"} />
                                    </td>
                                    <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="DLXS CP Double (DBL)" defaultValue={"15,005"} />
                                    </td>
                                    <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="DLXS CP Triple (TPL)" defaultValue={"16,890"} />
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Extra adult" data-w2="">{"₹1,885"}</td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room category" data-w2="" data-t="">
                                      <span className="code-chip">{"DLXS"}</span>
                                      {" Deluxe Suite"}
                                    </td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"MAP"}</td>
                                    <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="DLXS MAP Single (SGL)" defaultValue={"14,020"} />
                                    </td>
                                    <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="DLXS MAP Double (DBL)" defaultValue={"16,810"} />
                                    </td>
                                    <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="DLXS MAP Triple (TPL)" defaultValue={"19,595"} />
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Extra adult" data-w2="">{"₹2,785"}</td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room category" data-w2="" data-t="">
                                      <span className="code-chip">{"DLXS"}</span>
                                      {" Deluxe Suite"}
                                    </td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"AP"}</td>
                                    <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="DLXS AP Single (SGL)" defaultValue={"14,800"} />
                                    </td>
                                    <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="DLXS AP Double (DBL)" defaultValue={"18,365"} />
                                    </td>
                                    <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="DLXS AP Triple (TPL)" defaultValue={"21,935"} />
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Extra adult" data-w2="">{"₹3,565"}</td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room category" data-w2="" data-t="">
                                      <span className="code-chip">{"PRMS"}</span>
                                      {" Premium Suite"}
                                    </td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"EP"}</td>
                                    <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PRMS EP Single (SGL)" defaultValue={"19,025"} />
                                    </td>
                                    <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PRMS EP Double (DBL)" defaultValue={"20,255"} />
                                    </td>
                                    <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PRMS EP Triple (TPL)" defaultValue={"21,485"} />
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Extra adult" data-w2="">{"₹1,230"}</td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room category" data-w2="" data-t="">
                                      <span className="code-chip">{"PRMS"}</span>
                                      {" Premium Suite"}
                                    </td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"CP"}</td>
                                    <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PRMS CP Single (SGL)" defaultValue={"19,680"} />
                                    </td>
                                    <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PRMS CP Double (DBL)" defaultValue={"21,565"} />
                                    </td>
                                    <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PRMS CP Triple (TPL)" defaultValue={"23,450"} />
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Extra adult" data-w2="">{"₹1,885"}</td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room category" data-w2="" data-t="">
                                      <span className="code-chip">{"PRMS"}</span>
                                      {" Premium Suite"}
                                    </td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"MAP"}</td>
                                    <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PRMS MAP Single (SGL)" defaultValue={"20,580"} />
                                    </td>
                                    <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PRMS MAP Double (DBL)" defaultValue={"23,370"} />
                                    </td>
                                    <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PRMS MAP Triple (TPL)" defaultValue={"26,155"} />
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Extra adult" data-w2="">{"₹2,785"}</td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room category" data-w2="" data-t="">
                                      <span className="code-chip">{"PRMS"}</span>
                                      {" Premium Suite"}
                                    </td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"AP"}</td>
                                    <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PRMS AP Single (SGL)" defaultValue={"21,360"} />
                                    </td>
                                    <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PRMS AP Double (DBL)" defaultValue={"24,925"} />
                                    </td>
                                    <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PRMS AP Triple (TPL)" defaultValue={"28,495"} />
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Extra adult" data-w2="">{"₹3,565"}</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </section>
                          <section className="card" data-code="RS-14-7-days">
                            <h3 className="s-card-title">{"Meal plan for each day"}</h3>
                            <p className="field__hint">{"Each night of the stay can have its own meal plan – for example breakfast only on arrival, half board on the conference day. The plan chosen here picks the rate from the grid above for that night."}</p>
                            <div className="s-scroll">
                              <table className="dt__table dt--hug" data-nosort="" data-mc="">
                                <caption className="sr-only">{"Meal plan for each day of the stay"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Night"}</th>
                                    <th scope="col">{"Meal plan that day"}</th>
                                    <th scope="col">{"Includes"}</th>
                                    <th scope="col">{"Applies to"}</th>
                                    <th scope="col" className="dt__th--right">{"Pool Deluxe · double"}</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="dt__td" data-label="Night" data-w2="" data-t="">
                                      <b>{"Thu 22 Oct"}</b>
                                    </td>
                                    <td className="dt__td" data-label="Meal plan that day" data-w2="">
                                      <div className="field__wrap">
                                        <select className="field__input field__input--select" aria-label="Meal plan on Thu 22 Oct" defaultValue={"EP"}>
                                          <option>{"EP"}</option>
                                          <option>{"CP"}</option>
                                          <option>{"MAP"}</option>
                                          <option>{"AP"}</option>
                                        </select>
                                      </div>
                                    </td>
                                    <td className="dt__td nw" data-label="Includes" data-w2="">{"Room only"}</td>
                                    <td className="dt__td" data-label="Applies to" data-w2="">
                                      <div className="field__wrap">
                                        <select className="field__input field__input--select" aria-label="Applies to on Thu 22 Oct" defaultValue={"All rooms"}>
                                          <option>{"All rooms"}</option>
                                          <option>{"Chosen room categories"}</option>
                                          <option>{"Chosen rooms"}</option>
                                        </select>
                                      </div>
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Pool Deluxe · double" data-w2="">{"₹7,545"}</td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td" data-label="Night" data-w2="" data-t="">
                                      <b>{"Fri 23 Oct"}</b>
                                    </td>
                                    <td className="dt__td" data-label="Meal plan that day" data-w2="">
                                      <div className="field__wrap">
                                        <select className="field__input field__input--select" aria-label="Meal plan on Fri 23 Oct" defaultValue={"CP"}>
                                          <option>{"EP"}</option>
                                          <option>{"CP"}</option>
                                          <option>{"MAP"}</option>
                                          <option>{"AP"}</option>
                                        </select>
                                      </div>
                                    </td>
                                    <td className="dt__td nw" data-label="Includes" data-w2="">{"Breakfast"}</td>
                                    <td className="dt__td" data-label="Applies to" data-w2="">
                                      <div className="field__wrap">
                                        <select className="field__input field__input--select" aria-label="Applies to on Fri 23 Oct" defaultValue={"All rooms"}>
                                          <option>{"All rooms"}</option>
                                          <option>{"Chosen room categories"}</option>
                                          <option>{"Chosen rooms"}</option>
                                        </select>
                                      </div>
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Pool Deluxe · double" data-w2="">{"₹8,855"}</td>
                                  </tr>
                                  <tr className="rs14-tot">
                                    <td className="dt__td" data-label="Night" data-w2="" data-t="">
                                      <b>{"2 nights"}</b>
                                    </td>
                                    <td className="dt__td" data-e="" />
                                    <td className="dt__td" data-e="" />
                                    <td className="dt__td" data-e="" />
                                    <td className="dt__td dt__td--right num" data-label="Pool Deluxe · double" data-w2="">
                                      <b>{"₹16,400"}</b>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div className="s-note">
                              <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#info" />
                              </svg>
                              <span>
                                <b>{"Billing follows the confirmation."}</b>
                                {" The meal plan and rate of each night, as sent in the group confirmation, are the only ones posted to the guest folios. A change after confirmation needs a new confirmation (RS-11)."}
                              </span>
                            </div>
                          </section>
                          <section className="card" data-code="RS-14-7-rooms">
                            <h3 className="s-card-title">{"Price for each room"}</h3>
                            <p className="field__hint">{"Type an own price for a single room when it differs from the group rate (a VIP, a complimentary room). A different price needs a reason and may go for approval (RS-20)."}</p>
                            <div className="s-scroll">
                              <table className="dt__table dt--hug" data-nosort="" data-mc="">
                                <caption className="sr-only">{"Price for each room"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Room"}</th>
                                    <th scope="col">{"Category"}</th>
                                    <th scope="col">{"Occupancy"}</th>
                                    <th scope="col">{"Meal plan"}</th>
                                    <th scope="col" className="dt__th--right">{"Group rate"}</th>
                                    <th scope="col">{"Own price (₹)"}</th>
                                    <th scope="col">{"Reason"}</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room" data-t="">
                                      <b>{"Room 1"}</b>
                                    </td>
                                    <td className="dt__td nw" data-label="Category" data-w2="">{"PDLX"}</td>
                                    <td className="dt__td nw" data-label="Occupancy" data-w2="">{"DBL"}</td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"CP"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Group rate" data-w2="">{"₹8,855"}</td>
                                    <td className="dt__td" data-label="Own price (₹)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="Room 1 own price" defaultValue={"8,855"} />
                                    </td>
                                    <td className="dt__td" data-label="Reason">
                                      <input className="field__input" type="text" placeholder="Why a different price?" aria-label="Room 1 reason" />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room" data-t="">
                                      <b>{"Room 2"}</b>
                                    </td>
                                    <td className="dt__td nw" data-label="Category" data-w2="">{"PDLX"}</td>
                                    <td className="dt__td nw" data-label="Occupancy" data-w2="">{"DBL"}</td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"CP"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Group rate" data-w2="">{"₹8,855"}</td>
                                    <td className="dt__td" data-label="Own price (₹)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="Room 2 own price" defaultValue={"8,855"} />
                                    </td>
                                    <td className="dt__td" data-label="Reason">
                                      <input className="field__input" type="text" placeholder="Why a different price?" aria-label="Room 2 reason" />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room" data-t="">
                                      <b>{"Room 3"}</b>
                                    </td>
                                    <td className="dt__td nw" data-label="Category" data-w2="">{"PDLX"}</td>
                                    <td className="dt__td nw" data-label="Occupancy" data-w2="">{"SGL"}</td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"CP"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Group rate" data-w2="">{"₹6,970"}</td>
                                    <td className="dt__td" data-label="Own price (₹)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="Room 3 own price" defaultValue={"6,970"} />
                                    </td>
                                    <td className="dt__td" data-label="Reason">
                                      <input className="field__input" type="text" placeholder="Why a different price?" aria-label="Room 3 reason" />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room" data-t="">
                                      <b>{"Room 4"}</b>
                                    </td>
                                    <td className="dt__td nw" data-label="Category" data-w2="">{"GDLX"}</td>
                                    <td className="dt__td nw" data-label="Occupancy" data-w2="">{"DBL"}</td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"MAP"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Group rate" data-w2="">{"₹10,250"}</td>
                                    <td className="dt__td" data-label="Own price (₹)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="Room 4 own price" defaultValue={"10,250"} />
                                    </td>
                                    <td className="dt__td" data-label="Reason">
                                      <input className="field__input" type="text" placeholder="Why a different price?" aria-label="Room 4 reason" />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room" data-t="">
                                      <b>{"Room 5"}</b>
                                    </td>
                                    <td className="dt__td nw" data-label="Category" data-w2="">{"GDLX"}</td>
                                    <td className="dt__td nw" data-label="Occupancy" data-w2="">{"TPL"}</td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"CP"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Group rate" data-w2="">{"₹10,330"}</td>
                                    <td className="dt__td" data-label="Own price (₹)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="Room 5 own price" defaultValue={"10,330"} />
                                    </td>
                                    <td className="dt__td" data-label="Reason">
                                      <input className="field__input" type="text" placeholder="Why a different price?" aria-label="Room 5 reason" />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td nw" data-label="Room" data-t="">
                                      <b>{"Room 6"}</b>
                                    </td>
                                    <td className="dt__td nw" data-label="Category" data-w2="">{"DLXS"}</td>
                                    <td className="dt__td nw" data-label="Occupancy" data-w2="">{"DBL"}</td>
                                    <td className="dt__td nw" data-label="Meal plan" data-w2="">{"MAP"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Group rate" data-w2="">{"₹16,810"}</td>
                                    <td className="dt__td" data-label="Own price (₹)" data-w2="">
                                      <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="Room 6 own price" defaultValue={"16,810"} />
                                    </td>
                                    <td className="dt__td" data-label="Reason">
                                      <input className="field__input" type="text" placeholder="Why a different price?" aria-label="Room 6 reason" />
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div className="row">
                              <a className="btn" href="#">{"Cancel"}</a>
                              <a className="btn btn--primary" href="#flow-done">{"Save rates"}</a>
                            </div>
                          </section>
                        </section>
                        <section className="stabs__panel" data-code="RS-14-3" aria-label="Members">
                          <div className="s-scroll">
                            <table className="srt dt__table dt--hug" data-code="RS-14-3-list" style={{"--srt-cols": "auto auto auto auto auto auto"}} data-mc="">
                              <caption className="sr-only">{"Members"}</caption>
                              <thead>
                                <tr>
                                  <th scope="col">
                                    <input className="srt-i srt-a0" type="radio" name="strs143" id="strs143-0a" aria-label="Sort by Booking, lowest or A first" />
                                    <input className="srt-i srt-d0" type="radio" name="strs143" id="strs143-0d" aria-label="Sort by Booking, highest or Z first" />
                                    <label className="srt-l srt-l--a" htmlFor="strs143-0a">{"Booking"}</label>
                                    <label className="srt-l srt-l--d" htmlFor="strs143-0d" aria-hidden="true">{"Booking"}</label>
                                  </th>
                                  <th scope="col">
                                    <input className="srt-i srt-a1" type="radio" name="strs143" id="strs143-1a" aria-label="Sort by Guest, lowest or A first" />
                                    <input className="srt-i srt-d1" type="radio" name="strs143" id="strs143-1d" aria-label="Sort by Guest, highest or Z first" />
                                    <label className="srt-l srt-l--a" htmlFor="strs143-1a">{"Guest"}</label>
                                    <label className="srt-l srt-l--d" htmlFor="strs143-1d" aria-hidden="true">{"Guest"}</label>
                                  </th>
                                  <th scope="col">
                                    <input className="srt-i srt-a2" type="radio" name="strs143" id="strs143-2a" aria-label="Sort by Room type, lowest or A first" />
                                    <input className="srt-i srt-d2" type="radio" name="strs143" id="strs143-2d" aria-label="Sort by Room type, highest or Z first" />
                                    <label className="srt-l srt-l--a" htmlFor="strs143-2a">{"Room type"}</label>
                                    <label className="srt-l srt-l--d" htmlFor="strs143-2d" aria-hidden="true">{"Room type"}</label>
                                  </th>
                                  <th scope="col">
                                    <input className="srt-i srt-a3" type="radio" name="strs143" id="strs143-3a" aria-label="Sort by Room, lowest or A first" />
                                    <input className="srt-i srt-d3" type="radio" name="strs143" id="strs143-3d" aria-label="Sort by Room, highest or Z first" />
                                    <label className="srt-l srt-l--a" htmlFor="strs143-3a">{"Room"}</label>
                                    <label className="srt-l srt-l--d" htmlFor="strs143-3d" aria-hidden="true">{"Room"}</label>
                                  </th>
                                  <th scope="col">{"Stay"}</th>
                                  <th scope="col">
                                    <input className="srt-i srt-a5" type="radio" name="strs143" id="strs143-5a" aria-label="Sort by Status, lowest or A first" />
                                    <input className="srt-i srt-d5" type="radio" name="strs143" id="strs143-5d" aria-label="Sort by Status, highest or Z first" />
                                    <label className="srt-l srt-l--a" htmlFor="strs143-5a">{"Status"}</label>
                                    <label className="srt-l srt-l--d" htmlFor="strs143-5d" aria-hidden="true">{"Status"}</label>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr style={{"--k0": "1", "--k1": "1", "--k2": "1", "--k3": "3", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                    <a href="/reservation/rs-07-reservation-details/#FK-10015" data-leads-to="RS-07">
                                      <strong>{"FK-10015"}</strong>
                                    </a>
                                  </td>
                                  <td className="dt__td nw" data-label="Guest" data-w2="">
                                    <a href="/reservation/rs-18-guest-profile/#GP-0337" data-leads-to="RS-18">
                                      <strong>{"Mr Dileep Kurian"}</strong>
                                    </a>
                                  </td>
                                  <td className="dt__td nw" data-label="Room type" data-w2="">{"1 × GDLX"}</td>
                                  <td className="dt__td nw" data-e="">{"–"}</td>
                                  <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 24 Oct"}</td>
                                  <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Confirmed"}
                                    </span>
                                  </td>
                                </tr>
                                <tr style={{"--k0": "2", "--k1": "2", "--k2": "2", "--k3": "1", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                    <a href="/reservation/rs-07-reservation-details/#FK-10096" data-leads-to="RS-07">
                                      <strong>{"FK-10096"}</strong>
                                    </a>
                                  </td>
                                  <td className="dt__td nw" data-label="Guest" data-w2="">
                                    <a href="/reservation/rs-18-guest-profile/#GP-0108" data-leads-to="RS-18">
                                      <strong>{"Mr Hans Mueller"}</strong>
                                    </a>
                                  </td>
                                  <td className="dt__td nw" data-label="Room type" data-w2="">{"2 × GDLX"}</td>
                                  <td className="dt__td nw" data-label="Room" data-w2="">{"302, 111"}</td>
                                  <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 24 Oct"}</td>
                                  <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Confirmed"}
                                    </span>
                                  </td>
                                </tr>
                                <tr style={{"--k0": "3", "--k1": "3", "--k2": "1", "--k3": "2", "--k5": "2"}}>
                                  <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                    <a href="/reservation/rs-07-reservation-details/#FK-10201" data-leads-to="RS-07">
                                      <strong>{"FK-10201"}</strong>
                                    </a>
                                  </td>
                                  <td className="dt__td nw" data-label="Guest" data-w2="">
                                    <a href="/reservation/rs-18-guest-profile/#GP-0013" data-leads-to="RS-18">
                                      <strong>{"Mr Karthik Jatin"}</strong>
                                    </a>
                                  </td>
                                  <td className="dt__td nw" data-label="Room type" data-w2="">{"1 × PDLX"}</td>
                                  <td className="dt__td nw" data-label="Room">{"512"}</td>
                                  <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 24 Oct"}</td>
                                  <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#shield-check" />
                                      </svg>
                                      {"Guaranteed"}
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <p style={{"marginTop": "10px"}}>
                            <a className="btn btn--primary" href="/reservation/rs-15-rooming-list/#GRP-0003" data-leads-to="RS-15">{"Add members from the rooming list"}</a>
                          </p>
                        </section>
                        <section className="stabs__panel" data-code="RS-14-4" aria-label="Billing & deposits">
                          <div className="s-grid2">
                            <section className="card">
                              <dl className="s-kv">
                                <dt>{"Master bill"}</dt>
                                <dd>{"Cochin Marine Services Ltd"}</dd>
                                <dt>{"Rooms billed to"}</dt>
                                <dd>{"Master bill"}</dd>
                                <dt>{"Incidentals"}</dt>
                                <dd>{"Members pay"}</dd>
                                <dt>{"Estimated room charges"}</dt>
                                <dd>{"₹60,008.00"}</dd>
                                <dt>{"Advance policy"}</dt>
                                <dd>{"Group – 25% at confirmation"}</dd>
                              </dl>
                            </section>
                            <section className="card">
                              <h3 className="s-card-title">{"Deposit schedule"}</h3>
                              <div className="s-scroll">
                                <table className="dt__table dt--hug" data-mc="">
                                  <caption className="sr-only">{"Deposits"}</caption>
                                  <thead>
                                    <tr>
                                      <th scope="col">{"Due"}</th>
                                      <th scope="col">{"What"}</th>
                                      <th scope="col" className="dt__th--right">{"Amount"}</th>
                                      <th scope="col">{"Status"}</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="dt__td nw" data-label="Due" data-w2="" data-t="">{"12 Oct 2026"}</td>
                                      <td className="dt__td nw" data-label="What" data-w2="">{"25% at confirmation"}</td>
                                      <td className="dt__td dt__td--right num nw" data-label="Amount" data-w2="">{"₹15,002.00"}</td>
                                      <td className="dt__td" data-label="Status" data-s="">
                                        <span className="pill pill--tentative">
                                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                            <use href="/assets/icons/sprite.svg#clock" />
                                          </svg>
                                          {"Due"}
                                        </span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="dt__td nw" data-label="Due" data-w2="" data-t="">{"15 Oct 2026"}</td>
                                      <td className="dt__td" data-label="What" data-w2="">{"Balance before arrival"}</td>
                                      <td className="dt__td dt__td--right num nw" data-label="Amount" data-w2="">{"₹45,006.00"}</td>
                                      <td className="dt__td" data-label="Status" data-s="">
                                        <span className="pill pill--ooo">
                                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                            <use href="/assets/icons/sprite.svg#clock" />
                                          </svg>
                                          {"Later"}
                                        </span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </section>
                          </div>
                          <p style={{"marginTop": "10px"}}>
                            <Link className="btn" data-leads-to="RS-10" to={"/reservation/rs-10-payments-and-deposits"}>{"Payments"}</Link>
                          </p>
                        </section>
                        <section className="stabs__panel" data-code="RS-14-5" aria-label="Communication">
                          <div className="s-empty">{"Group confirmations are sent from the Group confirmation button at the top of this booking."}</div>
                          <p>
                            <Link className="btn" data-leads-to="RS-11" to={"/reservation/rs-11-confirmation-and-voucher"}>{"Open confirmation"}</Link>
                          </p>
                        </section>
                        <section className="stabs__panel" data-code="RS-14-6" aria-label="History">
                          <ol className="notif__list">
                            <li className="notif__item">
                              <span className="notif__text">
                                <strong>{"Group created"}</strong>
                                <span>{"GRP-0003 · Farah Khan"}</span>
                              </span>
                              <span className="notif__time">{"5 Oct 11:00"}</span>
                            </li>
                          </ol>
                        </section>
                      </div>
                    </div>
                  </div>
                  <div className="modal modal--lg" id="RS-14-conf-GRP-0003" data-code="RS-14c" role="dialog" aria-modal="true" aria-labelledby="RS-14-conf-GRP-0003-t">
                    <a className="modal__backdrop" href="#GRP-0003" aria-label="Close" tabIndex="-1" />
                    <div className="modal__box">
                      <div className="modal__head">
                        <div>
                          <h2 className="modal__title" id="RS-14-conf-GRP-0003-t">{"Group confirmation"}</h2>
                          <p className="modal__desc">{"GRP-0003 · Cochin Marine Services – surveyors' visit"}</p>
                        </div>
                        <a className="modal__close" href="#GRP-0003" aria-label="Close">
                          <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#x" />
                          </svg>
                        </a>
                      </div>
                      <div className="modal__body">
                        <h3 className="s-card-title">{"Rate for each day · Pool Deluxe, double"}</h3>
                        <div className="s-scroll">
                          <table className="dt__table dt--hug" data-nosort="" data-mc="">
                            <caption className="sr-only">{"Rate for each day of the stay"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">{"Night"}</th>
                                <th scope="col">{"Meal plan"}</th>
                                <th scope="col" className="dt__th--right">{"Rate"}</th>
                                <th scope="col" className="dt__th--right">{"GST"}</th>
                                <th scope="col" className="dt__th--right">{"Night total"}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="dt__td nw" data-label="Night" data-w2="" data-t="">
                                  <b>{"Thu 22 Oct"}</b>
                                </td>
                                <td className="dt__td" data-label="Meal plan" data-w2="">
                                  <b>{"EP"}</b>
                                  {" · Room only"}
                                </td>
                                <td className="dt__td dt__td--right num nw" data-label="Rate" data-w2="">{"₹7,545.00"}</td>
                                <td className="dt__td dt__td--right num nw" data-label="GST" data-w2="">{"₹1,358.10 (18%)"}</td>
                                <td className="dt__td dt__td--right num nw" data-label="Night total" data-w2="">{"₹8,903.10"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td nw" data-label="Night" data-w2="" data-t="">
                                  <b>{"Fri 23 Oct"}</b>
                                </td>
                                <td className="dt__td" data-label="Meal plan" data-w2="">
                                  <b>{"CP"}</b>
                                  {" · Breakfast"}
                                </td>
                                <td className="dt__td dt__td--right num nw" data-label="Rate" data-w2="">{"₹8,855.00"}</td>
                                <td className="dt__td dt__td--right num nw" data-label="GST" data-w2="">{"₹1,593.90 (18%)"}</td>
                                <td className="dt__td dt__td--right num nw" data-label="Night total" data-w2="">{"₹10,448.90"}</td>
                              </tr>
                              <tr className="rs14-ctot">
                                <td className="dt__td" colSpan="2">
                                  <strong>{"Total room rate · 2 night(s)"}</strong>
                                </td>
                                <td className="dt__td dt__td--right num nw" data-label="Rate" data-w2="" data-t="">
                                  <strong>{"₹16,400.00"}</strong>
                                </td>
                                <td className="dt__td dt__td--right num nw" data-label="GST" data-w2="">
                                  <strong>{"₹2,952.00"}</strong>
                                </td>
                                <td className="dt__td dt__td--right num nw" data-label="Night total" data-w2="">
                                  <strong>{"₹19,352.00"}</strong>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p className="field__hint rs14-cnote">{"The document lists every room category in the same way, at the rate set for its occupancy and each day's meal plan. These are the rates billed to the guest folios."}</p>
                      </div>
                      <div className="modal__foot">
                        <a className="btn" href="#GRP-0003">{"Close"}</a>
                        <a className="btn btn--primary" href="#GRP-0003">{"Send to the organiser"}</a>
                      </div>
                    </div>
                  </div>
                  <div className="modal" id="RS-14a-GRP-0003" data-code="RS-14a" role="dialog" aria-modal="true" aria-labelledby="RS-14a-GRP-0003-t">
                    <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                    <form className="modal__box" action="#" noValidate={true}>
                      <div className="modal__head">
                        <div>
                          <h2 className="modal__title" id="RS-14a-GRP-0003-t">{"Release unused rooms"}</h2>
                          <p className="modal__desc">{"GRP-0003"}</p>
                        </div>
                        <a className="modal__close" href="#" aria-label="Close">
                          <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#x" />
                          </svg>
                        </a>
                      </div>
                      <div className="modal__body">
                        <div className="s-scroll">
                          <table className="dt__table dt--hug" data-mc="">
                            <thead>
                              <tr>
                                <th scope="col">{"Room type"}</th>
                                <th scope="col" className="dt__th--right">{"Unpicked (max per night)"}</th>
                                <th scope="col" className="dt__th--right">{"Release"}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">{"Pool Deluxe Room"}</td>
                                <td className="dt__td dt__td--right num" data-label="Unpicked (max per night)" data-w2="">{"0"}</td>
                                <td className="dt__td dt__td--right" data-label="Release" data-w2="">
                                  <input className="field__input num" style={{"width": "72px"}} type="number" min="0" aria-label="Release PDLX" defaultValue={"0"} />
                                </td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Room type" data-w2="" data-t="">{"Garden Deluxe Room"}</td>
                                <td className="dt__td dt__td--right num" data-label="Unpicked (max per night)" data-w2="">{"0"}</td>
                                <td className="dt__td dt__td--right" data-label="Release" data-w2="">
                                  <input className="field__input num" style={{"width": "72px"}} type="number" min="0" aria-label="Release GDLX" defaultValue={"0"} />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f33">
                            {"Reason "}
                            <span className="field__req">{"*"}</span>
                          </label>
                          <textarea className="field__input field__input--area" id="f33" defaultValue={""} />
                        </div>
                      </div>
                      <div className="modal__foot">
                        <a className="btn" href="#">{"Cancel"}</a>
                        <a className="btn btn--primary" href="#flow-done">{"Release rooms"}</a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <details className="helpbox">
                <summary>
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#help" />
                  </svg>
                  {" Help for this screen "}
                  <span className="code-chip">{"RS-14"}</span>
                </summary>
                <dl className="helpbox__body">
                  <dt>{"What it is for"}</dt>
                  <dd>{"Group master, room block, group rate, billing, cut-off"}</dd>
                  <dt>{"Opened from"}</dt>
                  <dd>
                    <Link to={"/reservation/rs-01-reservation-dashboard"}>{"RS-01"}</Link>
                    {", menu"}
                  </dd>
                  <dt>{"Leads to"}</dt>
                  <dd>
                    <Link to={"/reservation/rs-15-rooming-list"}>{"RS-15"}</Link>
                    {", "}
                    <Link to={"/reservation/rs-07-reservation-details"}>{"RS-07"}</Link>
                    {", "}
                    <Link to={"/reservation/rs-10-payments-and-deposits"}>{"RS-10"}</Link>
                    {", "}
                    <Link to={"/reservation/rs-11-confirmation-and-voucher"}>{"RS-11"}</Link>
                    {", "}
                    <Link to={"/reservation/rs-12-cancellation"}>{"RS-12"}</Link>
                  </dd>
                  <dt>{"Note"}</dt>
                  <dd>{"Static screen (HTML and CSS only): it shows the layout, fields and sample data. Saving and live data come when the backend is connected."}</dd>
                </dl>
              </details>
              <div className="modal" id="rs14-upload" data-flow="add-form" role="dialog" aria-modal="true" aria-labelledby="rs14-upload-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="rs14-upload-t">{"Upload group rates"}</h2>
                      <p className="modal__desc">{"One Excel or CSV file with every room category, meal plan and occupancy."}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="rs14-upload-f1">
                          {"File "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="rs14-upload-f1" type="file" placeholder="" />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rs14-upload-f2">{"When a rate already exists"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rs14-upload-f2" defaultValue={""}>
                            <option value="">{"Select…"}</option>
                            <option>{"Replace it"}</option>
                            <option>{"Keep the existing rate"}</option>
                            <option>{"Ask me for each line"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Check and upload"}</a>
                  </div>
                </div>
              </div>
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
              <div className="modal modal--sm" id="flow-filter" data-flow="flow-filter" role="dialog" aria-modal="true" aria-labelledby="flow-filter-t">
                <a className="modal__backdrop" href="#" aria-label="Close" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="flow-filter-t">{"Filter applied"}</h2>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close" />
                  </div>
                  <div className="modal__body">
                    <p className="field__hint">{"In the live system the list now shows only what matches your choices. The demo rows stay as they are until the system is connected."}</p>
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
