// GENERATED from public/reservation/rs-06-reservation-search-list/index.html by scripts/convert_legacy.py.
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
    "href": "/reservation/rs-06-reservation-search-list/rs-06-reservation-search-list.css",
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

export default function ReservationRs06ReservationSearchList() {
  return (
    <ScreenShell title="Reservation Search / List" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="RS-06" data-code="RS-06" data-static="1" className="legacy-body">
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
                  <Link className="nav__item is-active" data-nav="RS-06" aria-current="page" title="Reservation Search / List" to={"/reservation/rs-06-reservation-search-list"}>
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
            <main className="app__content" id="main" data-code="RS-06" tabIndex="-1">
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
                        <span aria-current="page">{"Reservation Search / List"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">{"Reservation Search / List"}</h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"RS-06"}</span>
                  <div className="page-header__filters">
                    <div className="hctl">
                      <div className="hsearch">
                        <input className="hsearch__input" id="hs1923" type="search" name="q" placeholder="Search booking no., partner reference, guest, mobile or email" aria-label="Search bookings, guests, mobile or email" autoComplete="off" />
                        <label className="hsearch__ic" htmlFor="hs1923" title="Search">
                          <svg className="icon" width="17" height="17" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#search" />
                          </svg>
                          <span className="sr-only">{"Search"}</span>
                        </label>
                      </div>
                      <label className="hfilter__btn" htmlFor="hf1924" title="Show or hide the filters">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#filter" />
                        </svg>
                        <span>{"Filter"}</span>
                        <i className="hfilter__dot" aria-hidden="true" />
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </label>
                      <input className="hfilter__tg" type="checkbox" id="hf1924" aria-label="Show filters" />
                      <form className="hfilter" method="get" role="search" aria-label="Filter reservations">
                        <span className="hfilter__hic" title="Filter reservations">
                          <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#sliders" />
                          </svg>
                        </span>
                        <div className="hfilter__grid">
                          <label className="hf-f ">
                            <span className="hf-f__l">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#layers" />
                              </svg>
                              {"Saved view"}
                            </span>
                            <select className="hf-f__c" name="view">
                              <option>{"All bookings"}</option>
                              <option>{"Unpaid arrivals this week"}</option>
                              <option>{"VIP arrivals"}</option>
                              <option>{"Group blocks"}</option>
                            </select>
                            <svg className="icon hf-f__chev" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                          <label className="hf-f ">
                            <span className="hf-f__l">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Status"}
                            </span>
                            <select className="hf-f__c" name="status">
                              <option>{"All statuses"}</option>
                              <option>{"Tentative"}</option>
                              <option>{"Confirmed"}</option>
                              <option>{"Guaranteed"}</option>
                              <option>{"Checked in"}</option>
                              <option>{"Cancelled"}</option>
                              <option>{"No-show"}</option>
                            </select>
                            <svg className="icon hf-f__chev" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                          <label className="hf-f ">
                            <span className="hf-f__l">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#globe" />
                              </svg>
                              {"Source"}
                            </span>
                            <select className="hf-f__c" name="source">
                              <option>{"All sources"}</option>
                              <option>{"Aviv mobile app"}</option>
                              <option>{"Aviv website"}</option>
                              <option>{"Booking.com"}</option>
                              <option>{"Agoda"}</option>
                              <option>{"Expedia"}</option>
                              <option>{"MakeMyTrip / Goibibo"}</option>
                              <option>{"EaseMyTrip"}</option>
                              <option>{"Trip.com"}</option>
                              <option>{"Walk-in"}</option>
                              <option>{"Phone"}</option>
                              <option>{"Email"}</option>
                              <option>{"WhatsApp"}</option>
                              <option>{"Travel agent"}</option>
                              <option>{"Company booking"}</option>
                            </select>
                            <svg className="icon hf-f__chev" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                          <label className="hf-f ">
                            <span className="hf-f__l">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#link" />
                              </svg>
                              {"Booking channel"}
                            </span>
                            <select className="hf-f__c" name="channel">
                              <option>{"Any"}</option>
                              <option>{"Direct"}</option>
                              <option>{"Aviv app / website"}</option>
                              <option>{"OTA"}</option>
                              <option>{"Travel agent"}</option>
                              <option>{"Company"}</option>
                            </select>
                            <svg className="icon hf-f__chev" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                          <label className="hf-f ">
                            <span className="hf-f__l">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#calendar" />
                              </svg>
                              {"Arrival from"}
                            </span>
                            <div className="dpk">
                              <button type="button" className="dpk-f hf-f__c" aria-haspopup="dialog">
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
                                    <input type="radio" name="from" value="01" />
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
                                    <input type="radio" name="from" value="22" defaultChecked={true} />
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
                          </label>
                          <label className="hf-f ">
                            <span className="hf-f__l">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#calendar" />
                              </svg>
                              {"Arrival to"}
                            </span>
                            <div className="dpk">
                              <button type="button" className="dpk-f hf-f__c" aria-haspopup="dialog">
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
                                  <select className="dpk-m" name="to-month" aria-label="Month" defaultValue={"11"}>
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
                                    <input type="radio" name="to" value="21" defaultChecked={true} />
                                    {"21"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="to" value="22" />
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
                          </label>
                          <label className="hf-f ">
                            <span className="hf-f__l">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#bed" />
                              </svg>
                              {"Room type"}
                            </span>
                            <select className="hf-f__c" name="type">
                              <option>{"All"}</option>
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
                                <use href="/assets/icons/sprite.svg#wallet" />
                              </svg>
                              {"Balance"}
                            </span>
                            <select className="hf-f__c" name="balance">
                              <option>{"Any"}</option>
                              <option>{"Advance pending"}</option>
                              <option>{"Fully paid"}</option>
                              <option>{"Balance due"}</option>
                            </select>
                            <svg className="icon hf-f__chev" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                          <label className="hf-f ">
                            <span className="hf-f__l">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Guarantee due"}
                            </span>
                            <select className="hf-f__c" name="gdue">
                              <option>{"Any"}</option>
                              <option>{"Due today"}</option>
                              <option>{"Overdue"}</option>
                              <option>{"Due in 3 days"}</option>
                              <option>{"Not required"}</option>
                            </select>
                            <svg className="icon hf-f__chev" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                          <label className="hf-f ">
                            <span className="hf-f__l">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Guarantee status"}
                            </span>
                            <select className="hf-f__c" name="gstatus">
                              <option>{"Any"}</option>
                              <option>{"Not required"}</option>
                              <option>{"Pending"}</option>
                              <option>{"Satisfied"}</option>
                              <option>{"Waived"}</option>
                            </select>
                            <svg className="icon hf-f__chev" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                          <label className="hf-f ">
                            <span className="hf-f__l">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#credit-card" />
                              </svg>
                              {"Payment state"}
                            </span>
                            <select className="hf-f__c" name="pay">
                              <option>{"Any"}</option>
                              <option>{"Unpaid"}</option>
                              <option>{"Part paid"}</option>
                              <option>{"Paid in full"}</option>
                              <option>{"Refund pending"}</option>
                              <option>{"Needs reconciliation"}</option>
                            </select>
                            <svg className="icon hf-f__chev" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                          <label className="hf-f ">
                            <span className="hf-f__l">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#timer" />
                              </svg>
                              {"Auto release"}
                            </span>
                            <select className="hf-f__c" name="release">
                              <option>{"Any"}</option>
                              <option>{"Releases today"}</option>
                              <option>{"Releases in 24 hours"}</option>
                              <option>{"Released (expired)"}</option>
                            </select>
                            <svg className="icon hf-f__chev" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                          <label className="hf-f ">
                            <span className="hf-f__l">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#hash" />
                              </svg>
                              {"External reservation ID"}
                            </span>
                            <input className="hf-f__c" type="text" name="ext" placeholder="Channel booking number" />
                          </label>
                        </div>
                        <div className="hfilter__acts">
                          <button className="hfilter__clear" type="reset" title="Clear all filters">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#refresh" />
                            </svg>
                            <span>{"Clear"}</span>
                          </button>
                          <label className="hfilter__done" htmlFor="hf1924">
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
                    <a className="btn" href="#RS-06a" data-opens="RS-06a">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#copy" />
                      </svg>
                      {"Save view"}
                    </a>
                    <a className="btn ph-ic" href="#RS-06-export" data-opens="RS-06-export">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#download" />
                      </svg>
                      {"Export"}
                    </a>
                    <Link className="btn btn--primary" data-leads-to="RS-05" to={"/reservation/rs-05-new-reservation"}>
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#plus" />
                      </svg>
                      {"New reservation"}
                    </Link>
                  </div>
                </div>
              </header>
              <div className="stabs">
                <input type="radio" name="q6" id="q6-1" aria-label="All" defaultChecked={true} />
                <input type="radio" name="q6" id="q6-2" aria-label="Arrivals today" />
                <input type="radio" name="q6" id="q6-3" aria-label="Departures today" />
                <input type="radio" name="q6" id="q6-4" aria-label="Tentative" />
                <input type="radio" name="q6" id="q6-5" aria-label="Unassigned" />
                <input type="radio" name="q6" id="q6-6" aria-label="Cancelled / no-show" />
                <div className="stabs__list" role="tablist">
                  <label htmlFor="q6-1">
                    {"All"}
                    <span className="stabs__n">{"128"}</span>
                  </label>
                  <label htmlFor="q6-2">
                    {"Arrivals today"}
                    <span className="stabs__n">{"18"}</span>
                  </label>
                  <label htmlFor="q6-3">
                    {"Departures today"}
                    <span className="stabs__n">{"8"}</span>
                  </label>
                  <label htmlFor="q6-4">
                    {"Tentative"}
                    <span className="stabs__n">{"7"}</span>
                  </label>
                  <label htmlFor="q6-5">
                    {"Unassigned"}
                    <span className="stabs__n">{"8"}</span>
                  </label>
                  <label htmlFor="q6-6">
                    {"Cancelled / no-show"}
                    <span className="stabs__n">{"13"}</span>
                  </label>
                </div>
                <div className="stabs__extra stabs__extra--end">
                  <div className="s-bulk">
                    <span className="s-bulk__k">{"With the ticked bookings"}</span>
                    <Link className="btn" data-leads-to="RS-09" to={"/reservation/rs-09-room-assignment"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#key" />
                      </svg>
                      {"Assign rooms"}
                    </Link>
                    <Link className="btn" data-leads-to="RS-11" to={"/reservation/rs-11-confirmation-and-voucher"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#send" />
                      </svg>
                      {"Send confirmation"}
                    </Link>
                    <Link className="btn" data-leads-to="RS-12" to={"/reservation/rs-12-cancellation"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x-circle" />
                      </svg>
                      {"Cancel"}
                    </Link>
                  </div>
                </div>
                <div className="stabs__panels">
                  <section className="stabs__panel" data-code="RS-06-list" aria-label="All">
                    <div className="pgw">
                      <div className="s-scroll s-scroll--tall">
                        <table className="srt dt__table " data-code="RS-06-list" style={{"--srt-cols": "max-content auto auto auto auto auto auto auto max-content"}} data-mc="">
                          <caption className="sr-only">{"Reservations"}</caption>
                          <thead>
                            <tr>
                              <th scope="col" />
                              <th scope="col">
                                <input className="srt-i srt-a1" type="radio" name="strs060" id="strs060-1a" aria-label="Sort by Booking, lowest or A first" />
                                <input className="srt-i srt-d1" type="radio" name="strs060" id="strs060-1d" aria-label="Sort by Booking, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strs060-1a">{"Booking"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strs060-1d" aria-hidden="true">{"Booking"}</label>
                              </th>
                              <th scope="col">
                                <input className="srt-i srt-a2" type="radio" name="strs060" id="strs060-2a" aria-label="Sort by Guest, lowest or A first" />
                                <input className="srt-i srt-d2" type="radio" name="strs060" id="strs060-2d" aria-label="Sort by Guest, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strs060-2a">{"Guest"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strs060-2d" aria-hidden="true">{"Guest"}</label>
                              </th>
                              <th scope="col">
                                <input className="srt-i srt-a3" type="radio" name="strs060" id="strs060-3a" aria-label="Sort by Stay, lowest or A first" />
                                <input className="srt-i srt-d3" type="radio" name="strs060" id="strs060-3d" aria-label="Sort by Stay, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strs060-3a">{"Stay"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strs060-3d" aria-hidden="true">{"Stay"}</label>
                              </th>
                              <th scope="col">
                                <input className="srt-i srt-a4" type="radio" name="strs060" id="strs060-4a" aria-label="Sort by Rooms, lowest or A first" />
                                <input className="srt-i srt-d4" type="radio" name="strs060" id="strs060-4d" aria-label="Sort by Rooms, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strs060-4a">{"Rooms"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strs060-4d" aria-hidden="true">{"Rooms"}</label>
                              </th>
                              <th scope="col">
                                <input className="srt-i srt-a5" type="radio" name="strs060" id="strs060-5a" aria-label="Sort by Status, lowest or A first" />
                                <input className="srt-i srt-d5" type="radio" name="strs060" id="strs060-5d" aria-label="Sort by Status, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strs060-5a">{"Status"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strs060-5d" aria-hidden="true">{"Status"}</label>
                              </th>
                              <th scope="col" className="dt__th--right">
                                <input className="srt-i srt-a6" type="radio" name="strs060" id="strs060-6a" aria-label="Sort by Total, lowest or A first" />
                                <input className="srt-i srt-d6" type="radio" name="strs060" id="strs060-6d" aria-label="Sort by Total, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strs060-6a">{"Total"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strs060-6d" aria-hidden="true">{"Total"}</label>
                              </th>
                              <th scope="col" className="dt__th--right">
                                <input className="srt-i srt-a7" type="radio" name="strs060" id="strs060-7a" aria-label="Sort by Balance, lowest or A first" />
                                <input className="srt-i srt-d7" type="radio" name="strs060" id="strs060-7d" aria-label="Sort by Balance, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strs060-7a">{"Balance"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strs060-7d" aria-hidden="true">{"Balance"}</label>
                              </th>
                              <th scope="col" />
                            </tr>
                          </thead>
                          <tbody>
                            <tr style={{"--k1": "3", "--k2": "73", "--k3": "18", "--k4": "1", "--k5": "4", "--k6": "61", "--k7": "1"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10006" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10006" data-leads-to="RS-07">
                                  <strong>{"FK-10006"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Booking.com · BO-446947201"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0289" data-leads-to="RS-18">
                                  <strong>{"Mr Ravi Kabir"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Silver"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 26 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · 505"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹43,277.68"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹0"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10006" data-leads-to="RS-07" aria-label="Open FK-10006">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "7", "--k2": "11", "--k3": "18", "--k4": "1", "--k5": "7", "--k6": "101", "--k7": "76"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10013" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10013" data-leads-to="RS-07">
                                  <strong>{"FK-10013"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Walk-in"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0232" data-leads-to="RS-18">
                                  <strong>{"Mrs Athira Nirav"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Member"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 26 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PRMS · 517"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--tentative">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Tentative"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹1,27,201.64"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹1,27,201.64"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10013" data-leads-to="RS-07" aria-label="Open FK-10013">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "9", "--k2": "20", "--k3": "18", "--k4": "1", "--k5": "3", "--k6": "37", "--k7": "30"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10015" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10015" data-leads-to="RS-07">
                                  <strong>{"FK-10015"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Booking.com · BO-523266015"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0337" data-leads-to="RS-18">
                                  <strong>{"Mr Dileep Kurian"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Gold"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 24 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Confirmed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹24,400.04"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹24,400.04"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10015" data-leads-to="RS-07" aria-label="Open FK-10015">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "11", "--k2": "47", "--k3": "18", "--k4": "1", "--k5": "4", "--k6": "57", "--k7": "1"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10022" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10022" data-leads-to="RS-07">
                                  <strong>{"FK-10022"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Email"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0052" data-leads-to="RS-18">
                                  <strong>{"Ms Lakshmi Mathew"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 27 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹41,409.04"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹0"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10022" data-leads-to="RS-07" aria-label="Open FK-10022">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "17", "--k2": "65", "--k3": "18", "--k4": "1", "--k5": "4", "--k6": "53", "--k7": "42"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10034" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10034" data-leads-to="RS-07">
                                  <strong>{"FK-10034"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Travel agent"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0099" data-leads-to="RS-18">
                                  <strong>{"Ms Pooja Neil"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Gold"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 27 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · 106"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹35,812.35"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹35,812.35"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10034" data-leads-to="RS-07" aria-label="Open FK-10034">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "19", "--k2": "21", "--k3": "18", "--k4": "3", "--k5": "4", "--k6": "49", "--k7": "40"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10039" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10039" data-leads-to="RS-07">
                                  <strong>{"FK-10039"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Expedia · EX-730809750"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0347" data-leads-to="RS-18">
                                  <strong>{"Mr Dileep Pranav"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 23 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"3 × PDLX · –, –, –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹33,980.46"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹33,980.46"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10039" data-leads-to="RS-07" aria-label="Open FK-10039">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "32", "--k2": "50", "--k3": "18", "--k4": "1", "--k5": "3", "--k6": "73", "--k7": "58"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10067" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10067" data-leads-to="RS-07">
                                  <strong>{"FK-10067"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Phone"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0210" data-leads-to="RS-18">
                                  <strong>{"Mr Lukas Keller"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 27 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · 314"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Confirmed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹52,032.10"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹52,032.10"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10067" data-leads-to="RS-07" aria-label="Open FK-10067">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "34", "--k2": "88", "--k3": "18", "--k4": "1", "--k5": "5", "--k6": "42", "--k7": "18"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10074" />
                              </td>
                              <td className="dt__td" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10074" data-leads-to="RS-07">
                                  <strong>{"FK-10074"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Aviv mobile app · MR-33324691"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0183" data-leads-to="RS-18">
                                  <strong>{"Mrs Shruti Shaan"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Gold"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 25 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · 108"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹28,536.99"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹20,978.04"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10074" data-leads-to="RS-07" aria-label="Open FK-10074">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "39", "--k2": "87", "--k3": "18", "--k4": "1", "--k5": "4", "--k6": "48", "--k7": "39"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10089" />
                              </td>
                              <td className="dt__td" data-label="Booking" data-w="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10089" data-leads-to="RS-07">
                                  <strong>{"FK-10089"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"MakeMyTrip / Goibibo · MM-418649606"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0353" data-leads-to="RS-18">
                                  <strong>{"Dr Shruti Manav"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Silver"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 26 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹32,666.46"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹32,666.46"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10089" data-leads-to="RS-07" aria-label="Open FK-10089">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "40", "--k2": "94", "--k3": "18", "--k4": "1", "--k5": "3", "--k6": "56", "--k7": "47"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10091" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10091" data-leads-to="RS-07">
                                  <strong>{"FK-10091"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Email"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0359" data-leads-to="RS-18">
                                  <strong>{"Mr Srinivas Manav"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Gold"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 27 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · 305"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Confirmed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹41,365.69"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹41,365.69"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10091" data-leads-to="RS-07" aria-label="Open FK-10091">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "43", "--k2": "30", "--k3": "18", "--k4": "2", "--k5": "3", "--k6": "58", "--k7": "48"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10096" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10096" data-leads-to="RS-07">
                                  <strong>{"FK-10096"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Phone"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0108" data-leads-to="RS-18">
                                  <strong>{"Mr Hans Mueller"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 24 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"2 × GDLX · 302, 111"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Confirmed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹41,533.28"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹41,533.28"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10096" data-leads-to="RS-07" aria-label="Open FK-10096">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "62", "--k2": "59", "--k3": "18", "--k4": "1", "--k5": "7", "--k6": "59", "--k7": "49"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10121" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10121" data-leads-to="RS-07">
                                  <strong>{"FK-10121"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Phone"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0268" data-leads-to="RS-18">
                                  <strong>{"Ms Noura Al Saud"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 27 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--tentative">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Tentative"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹42,608.15"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹42,608.15"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10121" data-leads-to="RS-07" aria-label="Open FK-10121">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "73", "--k2": "28", "--k3": "18", "--k4": "1", "--k5": "7", "--k6": "72", "--k7": "57"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10146" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10146" data-leads-to="RS-07">
                                  <strong>{"FK-10146"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Phone"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0299" data-leads-to="RS-18">
                                  <strong>{"Mr Ganesh Mihir"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 25 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--tentative">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Tentative"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹50,368.30"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹50,368.30"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10146" data-leads-to="RS-07" aria-label="Open FK-10146">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "97", "--k2": "72", "--k3": "18", "--k4": "1", "--k5": "5", "--k6": "55", "--k7": "37"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10197" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10197" data-leads-to="RS-07">
                                  <strong>{"FK-10197"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Phone"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0280" data-leads-to="RS-18">
                                  <strong>{"Mr Rahul Philip"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Gold"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 26 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · 401"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹38,699.28"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹29,496.46"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10197" data-leads-to="RS-07" aria-label="Open FK-10197">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "100", "--k2": "44", "--k3": "18", "--k4": "1", "--k5": "4", "--k6": "27", "--k7": "19"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10201" />
                              </td>
                              <td className="dt__td" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10201" data-leads-to="RS-07">
                                  <strong>{"FK-10201"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Aviv mobile app · MR-84092234"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0013" data-leads-to="RS-18">
                                  <strong>{"Mr Karthik Jatin"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 24 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · 512"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹21,001.64"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹21,001.64"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10201" data-leads-to="RS-07" aria-label="Open FK-10201">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "108", "--k2": "100", "--k3": "18", "--k4": "1", "--k5": "4", "--k6": "7", "--k7": "1"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10216" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10216" data-leads-to="RS-07">
                                  <strong>{"FK-10216"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Booking.com · BO-293317163"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-w2="" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0017" data-leads-to="RS-18">
                                  <strong>{"Mrs Swathi Sahil"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"VIP"}
                                </span>
                                {" "}
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 23 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹10,028.82"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹0"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10216" data-leads-to="RS-07" aria-label="Open FK-10216">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "118", "--k2": "31", "--k3": "18", "--k4": "1", "--k5": "4", "--k6": "68", "--k7": "1"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10233" />
                              </td>
                              <td className="dt__td" data-label="Booking" data-w="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10233" data-leads-to="RS-07">
                                  <strong>{"FK-10233"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"MakeMyTrip / Goibibo · MM-930569184"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0247" data-leads-to="RS-18">
                                  <strong>{"Mr Imran Dhruv"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 27 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹49,082.10"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹0"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10233" data-leads-to="RS-07" aria-label="Open FK-10233">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "123", "--k2": "71", "--k3": "18", "--k4": "1", "--k5": "4", "--k6": "30", "--k7": "22"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10239" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10239" data-leads-to="RS-07">
                                  <strong>{"FK-10239"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Travel agent"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0197" data-leads-to="RS-18">
                                  <strong>{"Mr Rahul George"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Gold"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 25 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · 205"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹22,038.45"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹22,038.45"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10239" data-leads-to="RS-07" aria-label="Open FK-10239">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "47", "--k2": "79", "--k3": "14", "--k4": "1", "--k5": "5", "--k6": "43", "--k7": "35"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10102" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10102" data-leads-to="RS-07">
                                  <strong>{"FK-10102"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Agoda · AG-128708417"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0329" data-leads-to="RS-18">
                                  <strong>{"Ms Remya Kurian"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"18 – 22 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · 319"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹28,984.20"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹28,984.20"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10102" data-leads-to="RS-07" aria-label="Open FK-10102">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "49", "--k2": "4", "--k3": "15", "--k4": "1", "--k5": "5", "--k6": "34", "--k7": "26"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10104" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10104" data-leads-to="RS-07">
                                  <strong>{"FK-10104"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Travel agent"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0262" data-leads-to="RS-18">
                                  <strong>{"Mr Amit Chirag"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"19 – 22 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · 207"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹22,950.05"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹22,950.05"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10104" data-leads-to="RS-07" aria-label="Open FK-10104">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "52", "--k2": "7", "--k3": "15", "--k4": "1", "--k5": "5", "--k6": "38", "--k7": "31"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10108" />
                              </td>
                              <td className="dt__td" data-label="Booking" data-w="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10108" data-leads-to="RS-07">
                                  <strong>{"FK-10108"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"MakeMyTrip / Goibibo · MM-458149701"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0254" data-leads-to="RS-18">
                                  <strong>{"Ms Anna Schneider"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Gold"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"19 – 22 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · 205"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹24,741.55"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹24,741.55"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10108" data-leads-to="RS-07" aria-label="Open FK-10108">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "63", "--k2": "36", "--k3": "16", "--k4": "2", "--k5": "5", "--k6": "40", "--k7": "33"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10123" />
                              </td>
                              <td className="dt__td" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10123" data-leads-to="RS-07">
                                  <strong>{"FK-10123"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Aviv mobile app · MR-15849046"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0369" data-leads-to="RS-18">
                                  <strong>{"Mrs Isha Neil"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Silver"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"20 – 22 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"2 × PDLX · 416, 505"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹27,722.54"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹27,722.54"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10123" data-leads-to="RS-07" aria-label="Open FK-10123">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "69", "--k2": "54", "--k3": "15", "--k4": "1", "--k5": "5", "--k6": "87", "--k7": "1"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10142" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10142" data-leads-to="RS-07">
                                  <strong>{"FK-10142"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Trip.com · TR-905446920"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0310" data-leads-to="RS-18">
                                  <strong>{"Mrs Maya Mohan"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"19 – 22 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PRMS · 517"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹78,230.46"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹0"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10142" data-leads-to="RS-07" aria-label="Open FK-10142">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "85", "--k2": "89", "--k3": "14", "--k4": "2", "--k5": "5", "--k6": "92", "--k7": "65"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10172" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10172" data-leads-to="RS-07">
                                  <strong>{"FK-10172"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Walk-in"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0078" data-leads-to="RS-18">
                                  <strong>{"Ms Shruti Siddharth"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Member"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"18 – 22 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"2 × PDLX · 415, 316"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹89,717.17"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹77,680.17"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10172" data-leads-to="RS-07" aria-label="Open FK-10172">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "91", "--k2": "45", "--k3": "16", "--k4": "3", "--k5": "5", "--k6": "82", "--k7": "61"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10187" />
                              </td>
                              <td className="dt__td" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10187" data-leads-to="RS-07">
                                  <strong>{"FK-10187"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Aviv mobile app · MR-15430548"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0257" data-leads-to="RS-18">
                                  <strong>{"Mrs Kavita Ranjan"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"20 – 22 Oct"}</td>
                              <td className="dt__td" data-label="Rooms" data-w2="">{"3 × PDLX · 406, 503, 404"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹65,137.92"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹65,137.92"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10187" data-leads-to="RS-07" aria-label="Open FK-10187">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "95", "--k2": "92", "--k3": "17", "--k4": "2", "--k5": "5", "--k6": "17", "--k7": "1"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10193" />
                              </td>
                              <td className="dt__td" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10193" data-leads-to="RS-07">
                                  <strong>{"FK-10193"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Aviv mobile app · MR-17112246"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0253" data-leads-to="RS-18">
                                  <strong>{"Mrs Sindhu Wilson"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"21 – 22 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"2 × GDLX · 216, 305"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹13,442.10"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹0"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10193" data-leads-to="RS-07" aria-label="Open FK-10193">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "1", "--k2": "41", "--k3": "16", "--k4": "1", "--k5": "5", "--k6": "67", "--k7": "36"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10002" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10002" data-leads-to="RS-07">
                                  <strong>{"FK-10002"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Email"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0092" data-leads-to="RS-18">
                                  <strong>{"Mrs Jyoti Jatin"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"20 – 23 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · 107"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹48,999.50"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹28,999.50"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10002" data-leads-to="RS-07" aria-label="Open FK-10002">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "4", "--k2": "1", "--k3": "14", "--k4": "3", "--k5": "5", "--k6": "98", "--k7": "73"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10008" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10008" data-leads-to="RS-07">
                                  <strong>{"FK-10008"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Phone"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0008" data-leads-to="RS-18">
                                  <strong>{"Mr Ajay Jatin"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"18 – 24 Oct"}</td>
                              <td className="dt__td" data-label="Rooms" data-w2="">{"3 × GDLX · 219, 112, 103"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹1,18,415.25"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹1,12,030.25"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10008" data-leads-to="RS-07" aria-label="Open FK-10008">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "5", "--k2": "64", "--k3": "17", "--k4": "1", "--k5": "5", "--k6": "36", "--k7": "1"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10010" />
                              </td>
                              <td className="dt__td" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10010" data-leads-to="RS-07">
                                  <strong>{"FK-10010"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Aviv mobile app · MR-27082398"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0288" data-leads-to="RS-18">
                                  <strong>{"Mrs Pooja Kunal"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"21 – 23 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · 507"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹24,074.36"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹0"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10010" data-leads-to="RS-07" aria-label="Open FK-10010">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "6", "--k2": "3", "--k3": "15", "--k4": "1", "--k5": "5", "--k6": "84", "--k7": "44"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10011" />
                              </td>
                              <td className="dt__td" data-label="Booking" data-w="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10011" data-leads-to="RS-07">
                                  <strong>{"FK-10011"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"MakeMyTrip / Goibibo · MM-101556867"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0293" data-leads-to="RS-18">
                                  <strong>{"Mr Amit Bijoy"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Platinum"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"19 – 26 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · 116"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹67,959.74"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹37,959.74"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10011" data-leads-to="RS-07" aria-label="Open FK-10011">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "12", "--k2": "19", "--k3": "13", "--k4": "1", "--k5": "5", "--k6": "95", "--k7": "71"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10027" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10027" data-leads-to="RS-07">
                                  <strong>{"FK-10027"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Trip.com · TR-285325506"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0348" data-leads-to="RS-18">
                                  <strong>{"Dr Claire Dubois"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Member"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"17 – 26 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · 504"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹1,01,351.38"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹1,01,351.38"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10027" data-leads-to="RS-07" aria-label="Open FK-10027">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "13", "--k2": "78", "--k3": "14", "--k4": "1", "--k5": "5", "--k6": "97", "--k7": "74"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10029" />
                              </td>
                              <td className="dt__td" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10029" data-leads-to="RS-07">
                                  <strong>{"FK-10029"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Company booking"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0026" data-leads-to="RS-18">
                                  <strong>{"Mrs Rekha Krish"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"18 – 25 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × DLXS · 515"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹1,13,088.84"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹1,13,088.84"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10029" data-leads-to="RS-07" aria-label="Open FK-10029">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "15", "--k2": "18", "--k3": "13", "--k4": "1", "--k5": "5", "--k6": "62", "--k7": "51"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10031" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10031" data-leads-to="RS-07">
                                  <strong>{"FK-10031"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Walk-in"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0015" data-leads-to="RS-18">
                                  <strong>{"Ms Charlotte Fraser"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Silver"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"17 – 23 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · 303"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹43,547.70"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹43,547.70"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10031" data-leads-to="RS-07" aria-label="Open FK-10031">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "16", "--k2": "24", "--k3": "15", "--k4": "1", "--k5": "5", "--k6": "74", "--k7": "1"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10033" />
                              </td>
                              <td className="dt__td" data-label="Booking" data-w="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10033" data-leads-to="RS-07">
                                  <strong>{"FK-10033"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"MakeMyTrip / Goibibo · MM-167290585"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0227" data-leads-to="RS-18">
                                  <strong>{"Ms Elsa Lindberg"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Member"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"19 – 26 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · 208"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹53,761.05"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹0"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10033" data-leads-to="RS-07" aria-label="Open FK-10033">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "18", "--k2": "68", "--k3": "15", "--k4": "3", "--k5": "5", "--k6": "104", "--k7": "79"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10035" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10035" data-leads-to="RS-07">
                                  <strong>{"FK-10035"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"EaseMyTrip · EA-834984906"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0022" data-leads-to="RS-18">
                                  <strong>{"Mrs Priya Kabir"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"19 – 25 Oct"}</td>
                              <td className="dt__td" data-label="Rooms" data-w2="">{"3 × GDLX · 110, 119, 109"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹2,22,290.76"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹2,22,290.76"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10035" data-leads-to="RS-07" aria-label="Open FK-10035">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "22", "--k2": "56", "--k3": "16", "--k4": "1", "--k5": "5", "--k6": "86", "--k7": "64"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10042" />
                              </td>
                              <td className="dt__td" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10042" data-leads-to="RS-07">
                                  <strong>{"FK-10042"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Company booking"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0063" data-leads-to="RS-18">
                                  <strong>{"Ms Nandini Jatin"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"20 – 25 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × DLXS · 516"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹71,955.22"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹71,955.22"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10042" data-leads-to="RS-07" aria-label="Open FK-10042">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "23", "--k2": "46", "--k3": "13", "--k4": "1", "--k5": "5", "--k6": "90", "--k7": "1"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10048" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10048" data-leads-to="RS-07">
                                  <strong>{"FK-10048"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Booking.com · BO-202864313"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0115" data-leads-to="RS-18">
                                  <strong>{"Mrs Kavita Siddharth"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"17 – 25 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · 402"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹83,062.56"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹0"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10048" data-leads-to="RS-07" aria-label="Open FK-10048">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "25", "--k2": "26", "--k3": "16", "--k4": "1", "--k5": "5", "--k6": "68", "--k7": "45"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10050" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10050" data-leads-to="RS-07">
                                  <strong>{"FK-10050"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Walk-in"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0132" data-leads-to="RS-18">
                                  <strong>{"Mrs Fatima Al Mansoori"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"20 – 25 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · 114"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹49,082.10"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹39,643.10"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10050" data-leads-to="RS-07" aria-label="Open FK-10050">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "26", "--k2": "59", "--k3": "15", "--k4": "1", "--k5": "5", "--k6": "51", "--k7": "41"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10056" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10056" data-leads-to="RS-07">
                                  <strong>{"FK-10056"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Travel agent"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0234" data-leads-to="RS-18">
                                  <strong>{"Ms Noura Al Saud"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"19 – 24 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · 105"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹35,123.55"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹35,123.55"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10056" data-leads-to="RS-07" aria-label="Open FK-10056">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "27", "--k2": "86", "--k3": "15", "--k4": "1", "--k5": "5", "--k6": "65", "--k7": "1"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10058" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10058" data-leads-to="RS-07">
                                  <strong>{"FK-10058"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Agoda · AG-249112477"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0358" data-leads-to="RS-18">
                                  <strong>{"Mr Shibu Krish"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"19 – 25 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · 104"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹46,584.70"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹0"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10058" data-leads-to="RS-07" aria-label="Open FK-10058">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "29", "--k2": "57", "--k3": "14", "--k4": "1", "--k5": "5", "--k6": "52", "--k7": "1"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10061" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10061" data-leads-to="RS-07">
                                  <strong>{"FK-10061"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Aviv website"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0168" data-leads-to="RS-18">
                                  <strong>{"Ms Nandini Rishi"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"18 – 23 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · 309"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹35,306.45"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹0"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10061" data-leads-to="RS-07" aria-label="Open FK-10061">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "33", "--k2": "15", "--k3": "17", "--k4": "1", "--k5": "5", "--k6": "18", "--k7": "12"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10069" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10069" data-leads-to="RS-07">
                                  <strong>{"FK-10069"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Travel agent"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0222" data-leads-to="RS-18">
                                  <strong>{"Mr Biju George"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Member"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"21 – 23 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · 301"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹13,773.90"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹13,773.90"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10069" data-leads-to="RS-07" aria-label="Open FK-10069">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "36", "--k2": "81", "--k3": "17", "--k4": "1", "--k5": "5", "--k6": "77", "--k7": "60"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10082" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10082" data-leads-to="RS-07">
                                  <strong>{"FK-10082"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Walk-in"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0072" data-leads-to="RS-18">
                                  <strong>{"Mr Rohit Neil"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"21 – 26 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · 101"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹59,123.90"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹59,123.90"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10082" data-leads-to="RS-07" aria-label="Open FK-10082">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "37", "--k2": "9", "--k3": "13", "--k4": "1", "--k5": "5", "--k6": "79", "--k7": "52"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10084" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10084" data-leads-to="RS-07">
                                  <strong>{"FK-10084"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Phone"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-w2="" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0042" data-leads-to="RS-18">
                                  <strong>{"Dr Aswathy Vijay"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"VIP"}
                                </span>
                                {" "}
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"17 – 25 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · 202"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹61,322.10"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹46,322.10"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10084" data-leads-to="RS-07" aria-label="Open FK-10084">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "44", "--k2": "91", "--k3": "14", "--k4": "1", "--k5": "5", "--k6": "100", "--k7": "75"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10097" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10097" data-leads-to="RS-07">
                                  <strong>{"FK-10097"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Walk-in"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0098" data-leads-to="RS-18">
                                  <strong>{"Ms Sindhu Rahman"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"18 – 24 Oct"}</td>
                              <td className="dt__td" data-label="Rooms">{"1 × PDLX + 1 × GDLX · 508, 217"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹1,26,953.84"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹1,16,924.84"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10097" data-leads-to="RS-07" aria-label="Open FK-10097">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "46", "--k2": "46", "--k3": "14", "--k4": "1", "--k5": "5", "--k6": "63", "--k7": "1"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10101" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10101" data-leads-to="RS-07">
                                  <strong>{"FK-10101"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Booking.com · BO-818578232"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0291" data-leads-to="RS-18">
                                  <strong>{"Ms Kavita Siddharth"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"18 – 24 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · 201"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total">{"₹46,200"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹0"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10101" data-leads-to="RS-07" aria-label="Open FK-10101">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "48", "--k2": "67", "--k3": "13", "--k4": "1", "--k5": "5", "--k6": "88", "--k7": "66"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10103" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10103" data-leads-to="RS-07">
                                  <strong>{"FK-10103"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Phone"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0164" data-leads-to="RS-18">
                                  <strong>{"Mr Prasad Pavan"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"17 – 25 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · 310"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹78,342.56"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹78,342.56"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10103" data-leads-to="RS-07" aria-label="Open FK-10103">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "50", "--k2": "42", "--k3": "13", "--k4": "1", "--k5": "5", "--k6": "83", "--k7": "62"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10105" />
                              </td>
                              <td className="dt__td" data-label="Booking" data-w="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10105" data-leads-to="RS-07">
                                  <strong>{"FK-10105"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"MakeMyTrip / Goibibo · MM-133541391"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-w2="" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0311" data-leads-to="RS-18">
                                  <strong>{"Ms Jyoti Kabir"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"VIP"}
                                </span>
                                {" "}
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"17 – 23 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · 306"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹65,836.92"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹65,836.92"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10105" data-leads-to="RS-07" aria-label="Open FK-10105">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "51", "--k2": "56", "--k3": "17", "--k4": "1", "--k5": "5", "--k6": "76", "--k7": "16"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10106" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10106" data-leads-to="RS-07">
                                  <strong>{"FK-10106"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Aviv website"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0063" data-leads-to="RS-18">
                                  <strong>{"Ms Nandini Jatin"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"21 – 25 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · 313"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹57,579.28"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹17,579.28"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10106" data-leads-to="RS-07" aria-label="Open FK-10106">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "53", "--k2": "58", "--k3": "17", "--k4": "2", "--k5": "5", "--k6": "89", "--k7": "67"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10109" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10109" data-leads-to="RS-07">
                                  <strong>{"FK-10109"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Booking.com · BO-700966349"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0361" data-leads-to="RS-18">
                                  <strong>{"Mr Naveen Chirag"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"21 – 26 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"2 × PDLX · 511, 410"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹80,073.80"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹80,073.80"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10109" data-leads-to="RS-07" aria-label="Open FK-10109">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "60", "--k2": "35", "--k3": "13", "--k4": "1", "--k5": "5", "--k6": "93", "--k7": "69"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10118" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10118" data-leads-to="RS-07">
                                  <strong>{"FK-10118"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Email"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0204" data-leads-to="RS-18">
                                  <strong>{"Ms Isha Dhruv"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"17 – 23 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · 115"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹1,00,750.76"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹1,00,750.76"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10118" data-leads-to="RS-07" aria-label="Open FK-10118">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "61", "--k2": "14", "--k3": "15", "--k4": "1", "--k5": "5", "--k6": "80", "--k7": "59"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10120" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10120" data-leads-to="RS-07">
                                  <strong>{"FK-10120"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Phone"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0057" data-leads-to="RS-18">
                                  <strong>{"Ms Ayesha Sahil"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Platinum"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"19 – 26 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · 407"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹64,879.94"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹55,853.94"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10120" data-leads-to="RS-07" aria-label="Open FK-10120">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "68", "--k2": "62", "--k3": "15", "--k4": "1", "--k5": "5", "--k6": "71", "--k7": "1"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10140" />
                              </td>
                              <td className="dt__td" data-label="Booking" data-w="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10140" data-leads-to="RS-07">
                                  <strong>{"FK-10140"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"MakeMyTrip / Goibibo · MM-491097721"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0086" data-leads-to="RS-18">
                                  <strong>{"Mr Omar Al Farsi"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"19 – 26 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · 213"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total">{"₹49,980"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹0"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10140" data-leads-to="RS-07" aria-label="Open FK-10140">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "70", "--k2": "61", "--k3": "16", "--k4": "1", "--k5": "5", "--k6": "68", "--k7": "54"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10143" />
                              </td>
                              <td className="dt__td" data-label="Booking" data-w="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10143" data-leads-to="RS-07">
                                  <strong>{"FK-10143"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"MakeMyTrip / Goibibo · MM-344635970"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0263" data-leads-to="RS-18">
                                  <strong>{"Mr Oliver Hughes"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Gold"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"20 – 25 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · 304"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹49,082.10"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹49,082.10"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10143" data-leads-to="RS-07" aria-label="Open FK-10143">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "72", "--k2": "84", "--k3": "15", "--k4": "1", "--k5": "5", "--k6": "81", "--k7": "46"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10145" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10145" data-leads-to="RS-07">
                                  <strong>{"FK-10145"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Booking.com · BO-565092894"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0382" data-leads-to="RS-18">
                                  <strong>{"Ms Sheela Nathan"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Gold"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"19 – 26 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · 510"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹64,880.78"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹39,880.78"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10145" data-leads-to="RS-07" aria-label="Open FK-10145">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "77", "--k2": "12", "--k3": "13", "--k4": "2", "--k5": "5", "--k6": "103", "--k7": "78"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10159" />
                              </td>
                              <td className="dt__td" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10159" data-leads-to="RS-07">
                                  <strong>{"FK-10159"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Aviv mobile app · MR-20604276"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0321" data-leads-to="RS-18">
                                  <strong>{"Dr Ayesha Chirag"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"17 – 24 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"2 × PDLX · 506, 318"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹1,73,327.48"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹1,73,327.48"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10159" data-leads-to="RS-07" aria-label="Open FK-10159">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "78", "--k2": "47", "--k3": "13", "--k4": "1", "--k5": "5", "--k6": "85", "--k7": "63"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10161" />
                              </td>
                              <td className="dt__td" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10161" data-leads-to="RS-07">
                                  <strong>{"FK-10161"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Company booking"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0052" data-leads-to="RS-18">
                                  <strong>{"Ms Lakshmi Mathew"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"17 – 25 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · 408"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹68,232.57"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹68,232.57"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10161" data-leads-to="RS-07" aria-label="Open FK-10161">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "79", "--k2": "25", "--k3": "13", "--k4": "1", "--k5": "5", "--k6": "63", "--k7": "1"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10162" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10162" data-leads-to="RS-07">
                                  <strong>{"FK-10162"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Booking.com · BO-684278952"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0384" data-leads-to="RS-18">
                                  <strong>{"Mr Ethan Anderson"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"17 – 23 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · 212"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total">{"₹46,200"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹0"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10162" data-leads-to="RS-07" aria-label="Open FK-10162">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "80", "--k2": "37", "--k3": "16", "--k4": "1", "--k5": "5", "--k6": "41", "--k7": "34"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10165" />
                              </td>
                              <td className="dt__td" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10165" data-leads-to="RS-07">
                                  <strong>{"FK-10165"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Company booking"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0397" data-leads-to="RS-18">
                                  <strong>{"Mrs Isha Vihaan"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Member"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"20 – 24 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · 113"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total">{"₹27,993"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹27,993"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10165" data-leads-to="RS-07" aria-label="Open FK-10165">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "84", "--k2": "52", "--k3": "14", "--k4": "1", "--k5": "5", "--k6": "69", "--k7": "55"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10170" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10170" data-leads-to="RS-07">
                                  <strong>{"FK-10170"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Phone"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0235" data-leads-to="RS-18">
                                  <strong>{"Mr Marco Rossi"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Member"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"18 – 23 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · 211"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹49,084.10"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹49,084.10"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10170" data-leads-to="RS-07" aria-label="Open FK-10170">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "86", "--k2": "66", "--k3": "15", "--k4": "1", "--k5": "5", "--k6": "94", "--k7": "70"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10178" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10178" data-leads-to="RS-07">
                                  <strong>{"FK-10178"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Trip.com · TR-471498538"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0060" data-leads-to="RS-18">
                                  <strong>{"Mr Prasad Manav"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"19 – 26 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · 501"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹1,01,237.74"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹1,01,237.74"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10178" data-leads-to="RS-07" aria-label="Open FK-10178">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "87", "--k2": "49", "--k3": "14", "--k4": "2", "--k5": "5", "--k6": "99", "--k7": "1"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10180" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10180" data-leads-to="RS-07">
                                  <strong>{"FK-10180"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Expedia · EX-146876005"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0260" data-leads-to="RS-18">
                                  <strong>{"Mr Luc Moreau"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"18 – 25 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"2 × PDLX · 403, 509"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹1,21,647.62"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹0"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10180" data-leads-to="RS-07" aria-label="Open FK-10180">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "99", "--k2": "60", "--k3": "16", "--k4": "1", "--k5": "5", "--k6": "54", "--k7": "43"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10200" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10200" data-leads-to="RS-07">
                                  <strong>{"FK-10200"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Agoda · AG-939237235"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0294" data-leads-to="RS-18">
                                  <strong>{"Mr Oliver Hughes"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"20 – 24 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · 409"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹37,755.28"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹37,755.28"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10200" data-leads-to="RS-07" aria-label="Open FK-10200">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "101", "--k2": "46", "--k3": "15", "--k4": "1", "--k5": "5", "--k6": "43", "--k7": "35"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10203" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10203" data-leads-to="RS-07">
                                  <strong>{"FK-10203"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"WhatsApp"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0115" data-leads-to="RS-18">
                                  <strong>{"Mrs Kavita Siddharth"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"19 – 23 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · 417"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹28,984.20"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹28,984.20"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10203" data-leads-to="RS-07" aria-label="Open FK-10203">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "103", "--k2": "6", "--k3": "16", "--k4": "1", "--k5": "5", "--k6": "68", "--k7": "54"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10205" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10205" data-leads-to="RS-07">
                                  <strong>{"FK-10205"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Trip.com · TR-276866563"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0335" data-leads-to="RS-18">
                                  <strong>{"Dr Anjali Rahman"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"20 – 25 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · 218"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹49,082.10"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹49,082.10"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10205" data-leads-to="RS-07" aria-label="Open FK-10205">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "117", "--k2": "40", "--k3": "17", "--k4": "1", "--k5": "5", "--k6": "50", "--k7": "1"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10232" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10232" data-leads-to="RS-07">
                                  <strong>{"FK-10232"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Booking.com · BO-778489184"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0255" data-leads-to="RS-18">
                                  <strong>{"Mr Jithin Mathew"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"21 – 23 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × DLXS · 514"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total">{"₹34,220"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹0"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10232" data-leads-to="RS-07" aria-label="Open FK-10232">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "114", "--k2": "53", "--k3": "3", "--k4": "1", "--k5": "7", "--k6": "24", "--k7": "17"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10227" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10227" data-leads-to="RS-07">
                                  <strong>{"FK-10227"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Agoda · AG-582665625"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0165" data-leads-to="RS-18">
                                  <strong>{"Mr Marco Rossi"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Silver"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"4 – 6 Nov"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--tentative">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Tentative"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹18,870.12"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹18,870.12"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10227" data-leads-to="RS-07" aria-label="Open FK-10227">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "66", "--k2": "101", "--k3": "4", "--k4": "1", "--k5": "7", "--k6": "102", "--k7": "77"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10133" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10133" data-leads-to="RS-07">
                                  <strong>{"FK-10133"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Booking.com · BO-130641251"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0191" data-leads-to="RS-18">
                                  <strong>{"Dr Yuki Tanaka"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"5 – 12 Nov"}</td>
                              <td className="dt__td" data-label="Rooms">{"1 × PDLX + 1 × GDLX · –, –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--tentative">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Tentative"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹1,39,931.48"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹1,39,931.48"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10133" data-leads-to="RS-07" aria-label="Open FK-10133">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "67", "--k2": "16", "--k3": "11", "--k4": "1", "--k5": "7", "--k6": "70", "--k7": "56"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10139" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10139" data-leads-to="RS-07">
                                  <strong>{"FK-10139"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Booking.com · BO-301831646"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0201" data-leads-to="RS-18">
                                  <strong>{"Mr Biju Joseph"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"14 – 19 Nov"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--tentative">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Tentative"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹49,329.90"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹49,329.90"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10139" data-leads-to="RS-07" aria-label="Open FK-10139">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "10", "--k2": "101", "--k3": "21", "--k4": "1", "--k5": "1", "--k6": "1", "--k7": "80"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10017" />
                              </td>
                              <td className="dt__td" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10017" data-leads-to="RS-07">
                                  <strong>{"FK-10017"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Aviv mobile app · MR-65859012"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0191" data-leads-to="RS-18">
                                  <strong>{"Dr Yuki Tanaka"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"26 – 27 Sep"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--cancelled">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x-circle" />
                                  </svg>
                                  {"Cancelled"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total">{"₹0"}</td>
                              <td className="dt__td dt__td--right num nw" data-e="">{"–"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10017" data-leads-to="RS-07" aria-label="Open FK-10017">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "24", "--k2": "99", "--k3": "23", "--k4": "1", "--k5": "1", "--k6": "3", "--k7": "80"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10049" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10049" data-leads-to="RS-07">
                                  <strong>{"FK-10049"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Booking.com · BO-655461122"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0146" data-leads-to="RS-18">
                                  <strong>{"Dr Swathi Manav"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"29 Sep – 3 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--cancelled">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x-circle" />
                                  </svg>
                                  {"Cancelled"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹7,558.95"}</td>
                              <td className="dt__td dt__td--right num nw" data-e="">{"–"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10049" data-leads-to="RS-07" aria-label="Open FK-10049">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "30", "--k2": "96", "--k3": "1", "--k4": "1", "--k5": "1", "--k6": "1", "--k7": "80"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10062" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10062" data-leads-to="RS-07">
                                  <strong>{"FK-10062"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Walk-in"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0394" data-leads-to="RS-18">
                                  <strong>{"Mr Suresh Wilson"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Diamond"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"1 – 2 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--cancelled">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x-circle" />
                                  </svg>
                                  {"Cancelled"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total">{"₹0"}</td>
                              <td className="dt__td dt__td--right num nw" data-e="">{"–"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10062" data-leads-to="RS-07" aria-label="Open FK-10062">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "38", "--k2": "16", "--k3": "2", "--k4": "1", "--k5": "1", "--k6": "10", "--k7": "80"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10087" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10087" data-leads-to="RS-07">
                                  <strong>{"FK-10087"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Aviv website"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0201" data-leads-to="RS-18">
                                  <strong>{"Mr Biju Joseph"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"3 – 7 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--cancelled">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x-circle" />
                                  </svg>
                                  {"Cancelled"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹10,972.82"}</td>
                              <td className="dt__td dt__td--right num nw" data-e="">{"–"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10087" data-leads-to="RS-07" aria-label="Open FK-10087">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "55", "--k2": "3", "--k3": "18", "--k4": "1", "--k5": "1", "--k6": "1", "--k7": "80"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10113" />
                              </td>
                              <td className="dt__td" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10113" data-leads-to="RS-07">
                                  <strong>{"FK-10113"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Company booking"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0293" data-leads-to="RS-18">
                                  <strong>{"Mr Amit Bijoy"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Platinum"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 24 Nov"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × DLXS · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--cancelled">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x-circle" />
                                  </svg>
                                  {"Cancelled"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total">{"₹0"}</td>
                              <td className="dt__td dt__td--right num nw" data-e="">{"–"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10113" data-leads-to="RS-07" aria-label="Open FK-10113">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "2", "--k2": "13", "--k3": "8", "--k4": "2", "--k5": "6", "--k6": "75", "--k7": "80"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10003" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10003" data-leads-to="RS-07">
                                  <strong>{"FK-10003"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Email"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0316" data-leads-to="RS-18">
                                  <strong>{"Dr Ayesha Pavan"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Member"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"9 – 12 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"2 × PRMS · –, –"}</td>
                              <td className="dt__td" data-label="Status">
                                <span className="pill pill--ooo">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#user-x" />
                                  </svg>
                                  {"No-show"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹56,071.24"}</td>
                              <td className="dt__td dt__td--right num nw" data-e="">{"–"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10003" data-leads-to="RS-07" aria-label="Open FK-10003">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "21", "--k2": "5", "--k3": "2", "--k4": "1", "--k5": "6", "--k6": "4", "--k7": "80"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10041" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10041" data-leads-to="RS-07">
                                  <strong>{"FK-10041"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Travel agent"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0054" data-leads-to="RS-18">
                                  <strong>{"Dr Anjali Mathew"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"3 – 6 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ooo">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#user-x" />
                                  </svg>
                                  {"No-show"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹7,575.75"}</td>
                              <td className="dt__td dt__td--right num nw" data-e="">{"–"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10041" data-leads-to="RS-07" aria-label="Open FK-10041">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "31", "--k2": "27", "--k3": "8", "--k4": "1", "--k5": "6", "--k6": "6", "--k7": "80"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10064" />
                              </td>
                              <td className="dt__td" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10064" data-leads-to="RS-07">
                                  <strong>{"FK-10064"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Aviv mobile app · MR-10229644"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0066" data-leads-to="RS-18">
                                  <strong>{"Ms Fatima Al Mansoori"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Silver"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"9 – 10 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · –"}</td>
                              <td className="dt__td" data-label="Status">
                                <span className="pill pill--ooo">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#user-x" />
                                  </svg>
                                  {"No-show"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹9,875.42"}</td>
                              <td className="dt__td dt__td--right num nw" data-e="">{"–"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10064" data-leads-to="RS-07" aria-label="Open FK-10064">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "42", "--k2": "38", "--k3": "8", "--k4": "2", "--k5": "6", "--k6": "26", "--k7": "80"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10095" />
                              </td>
                              <td className="dt__td" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10095" data-leads-to="RS-07">
                                  <strong>{"FK-10095"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Aviv mobile app · MR-44171837"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0136" data-leads-to="RS-18">
                                  <strong>{"Mr Jayan Dev"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"9 – 12 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"2 × GDLX · –, –"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ooo">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#user-x" />
                                  </svg>
                                  {"No-show"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹20,765.64"}</td>
                              <td className="dt__td dt__td--right num nw" data-e="">{"–"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10095" data-leads-to="RS-07" aria-label="Open FK-10095">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "8", "--k2": "45", "--k3": "19", "--k4": "1", "--k5": "4", "--k6": "19", "--k7": "13"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10014" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10014" data-leads-to="RS-07">
                                  <strong>{"FK-10014"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Email"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0257" data-leads-to="RS-18">
                                  <strong>{"Mrs Kavita Ranjan"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"23 – 25 Nov"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹14,277.90"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹14,277.90"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10014" data-leads-to="RS-07" aria-label="Open FK-10014">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "14", "--k2": "83", "--k3": "18", "--k4": "1", "--k5": "4", "--k6": "28", "--k7": "20"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10030" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10030" data-leads-to="RS-07">
                                  <strong>{"FK-10030"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Email"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0035" data-leads-to="RS-18">
                                  <strong>{"Mr Sanjay Nirav"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 25 Nov"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹21,416.85"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹21,416.85"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10030" data-leads-to="RS-07" aria-label="Open FK-10030">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "20", "--k2": "82", "--k3": "6", "--k4": "1", "--k5": "4", "--k6": "15", "--k7": "10"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10040" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10040" data-leads-to="RS-07">
                                  <strong>{"FK-10040"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Email"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0377" data-leads-to="RS-18">
                                  <strong>{"Mr Sandeep Shaan"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"7 – 9 Dec"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹13,101.90"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹13,101.90"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10040" data-leads-to="RS-07" aria-label="Open FK-10040">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "28", "--k2": "17", "--k3": "6", "--k4": "1", "--k5": "4", "--k6": "15", "--k7": "10"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10060" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10060" data-leads-to="RS-07">
                                  <strong>{"FK-10060"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Email"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0071" data-leads-to="RS-18">
                                  <strong>{"Mr Biju Prem"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"7 – 9 Dec"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹13,101.90"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹13,101.90"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10060" data-leads-to="RS-07" aria-label="Open FK-10060">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "35", "--k2": "23", "--k3": "19", "--k4": "1", "--k5": "4", "--k6": "19", "--k7": "13"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10080" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10080" data-leads-to="RS-07">
                                  <strong>{"FK-10080"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Email"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0105" data-leads-to="RS-18">
                                  <strong>{"Mrs Elsa Lindberg"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"23 – 25 Nov"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹14,277.90"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹14,277.90"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10080" data-leads-to="RS-07" aria-label="Open FK-10080">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "41", "--k2": "2", "--k3": "19", "--k4": "1", "--k5": "4", "--k6": "16", "--k7": "11"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10093" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10093" data-leads-to="RS-07">
                                  <strong>{"FK-10093"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Email"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0053" data-leads-to="RS-18">
                                  <strong>{"Mr Ajay Rishi"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"23 – 25 Nov"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹13,437.90"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹13,437.90"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10093" data-leads-to="RS-07" aria-label="Open FK-10093">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "54", "--k2": "70", "--k3": "6", "--k4": "1", "--k5": "4", "--k6": "35", "--k7": "29"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10112" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10112" data-leads-to="RS-07">
                                  <strong>{"FK-10112"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Email"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0118" data-leads-to="RS-18">
                                  <strong>{"Ms Priya Sagar"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Diamond"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"7 – 9 Dec"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹23,833.64"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹23,833.64"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10112" data-leads-to="RS-07" aria-label="Open FK-10112">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "58", "--k2": "74", "--k3": "19", "--k4": "1", "--k5": "4", "--k6": "19", "--k7": "13"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10116" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10116" data-leads-to="RS-07">
                                  <strong>{"FK-10116"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Email"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0065" data-leads-to="RS-18">
                                  <strong>{"Mr Ravi Ranjan"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Member"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"23 – 25 Nov"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹14,277.90"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹14,277.90"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10116" data-leads-to="RS-07" aria-label="Open FK-10116">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "59", "--k2": "75", "--k3": "6", "--k4": "1", "--k5": "4", "--k6": "15", "--k7": "10"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10117" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10117" data-leads-to="RS-07">
                                  <strong>{"FK-10117"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Email"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-w2="" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0240" data-leads-to="RS-18">
                                  <strong>{"Mrs Rekha George"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"VIP"}
                                </span>
                                {" "}
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"7 – 9 Dec"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹13,101.90"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹13,101.90"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10117" data-leads-to="RS-07" aria-label="Open FK-10117">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "71", "--k2": "93", "--k3": "19", "--k4": "1", "--k5": "4", "--k6": "39", "--k7": "32"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10144" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10144" data-leads-to="RS-07">
                                  <strong>{"FK-10144"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Email"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0346" data-leads-to="RS-18">
                                  <strong>{"Ms Sreelakshmi Krish"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"23 – 25 Nov"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹24,779.64"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹24,779.64"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10144" data-leads-to="RS-07" aria-label="Open FK-10144">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "74", "--k2": "29", "--k3": "6", "--k4": "1", "--k5": "4", "--k6": "15", "--k7": "10"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10153" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10153" data-leads-to="RS-07">
                                  <strong>{"FK-10153"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Email"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0344" data-leads-to="RS-18">
                                  <strong>{"Mr Gopan Joseph"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"7 – 9 Dec"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹13,101.90"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹13,101.90"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10153" data-leads-to="RS-07" aria-label="Open FK-10153">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "76", "--k2": "69", "--k3": "6", "--k4": "1", "--k5": "4", "--k6": "32", "--k7": "24"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10157" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10157" data-leads-to="RS-07">
                                  <strong>{"FK-10157"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Email"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0231" data-leads-to="RS-18">
                                  <strong>{"Ms Priya Neil"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Diamond"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"7 – 9 Dec"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹22,537.90"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹22,537.90"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10157" data-leads-to="RS-07" aria-label="Open FK-10157">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "81", "--k2": "20", "--k3": "19", "--k4": "1", "--k5": "4", "--k6": "19", "--k7": "13"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10166" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10166" data-leads-to="RS-07">
                                  <strong>{"FK-10166"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Email"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0337" data-leads-to="RS-18">
                                  <strong>{"Mr Dileep Kurian"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Gold"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"23 – 25 Nov"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹14,277.90"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹14,277.90"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10166" data-leads-to="RS-07" aria-label="Open FK-10166">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "82", "--k2": "32", "--k3": "6", "--k4": "1", "--k5": "4", "--k6": "19", "--k7": "13"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10167" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10167" data-leads-to="RS-07">
                                  <strong>{"FK-10167"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Email"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0158" data-leads-to="RS-18">
                                  <strong>{"Mr Imran Sagar"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"7 – 9 Dec"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹14,277.90"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹14,277.90"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10167" data-leads-to="RS-07" aria-label="Open FK-10167">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "83", "--k2": "55", "--k3": "6", "--k4": "1", "--k5": "4", "--k6": "16", "--k7": "11"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10168" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10168" data-leads-to="RS-07">
                                  <strong>{"FK-10168"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Email"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0107" data-leads-to="RS-18">
                                  <strong>{"Ms Meera Khan"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Silver"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"7 – 9 Dec"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹13,437.90"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹13,437.90"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10168" data-leads-to="RS-07" aria-label="Open FK-10168">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "88", "--k2": "76", "--k3": "18", "--k4": "1", "--k5": "4", "--k6": "45", "--k7": "38"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10182" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10182" data-leads-to="RS-07">
                                  <strong>{"FK-10182"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Email"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0319" data-leads-to="RS-18">
                                  <strong>{"Ms Rekha Khan"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Member"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 25 Nov"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹30,440.46"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹30,440.46"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10182" data-leads-to="RS-07" aria-label="Open FK-10182">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "89", "--k2": "56", "--k3": "6", "--k4": "1", "--k5": "4", "--k6": "16", "--k7": "11"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10184" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10184" data-leads-to="RS-07">
                                  <strong>{"FK-10184"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Email"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0063" data-leads-to="RS-18">
                                  <strong>{"Ms Nandini Jatin"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"7 – 9 Dec"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹13,437.90"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹13,437.90"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10184" data-leads-to="RS-07" aria-label="Open FK-10184">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "90", "--k2": "85", "--k3": "6", "--k4": "1", "--k5": "4", "--k6": "14", "--k7": "9"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10185" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10185" data-leads-to="RS-07">
                                  <strong>{"FK-10185"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Email"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0372" data-leads-to="RS-18">
                                  <strong>{"Mr Shibu Joseph"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"7 – 9 Dec"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹12,429.90"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹12,429.90"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10185" data-leads-to="RS-07" aria-label="Open FK-10185">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "93", "--k2": "95", "--k3": "7", "--k4": "1", "--k5": "4", "--k6": "2", "--k7": "2"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10189" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10189" data-leads-to="RS-07">
                                  <strong>{"FK-10189"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Email"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0398" data-leads-to="RS-18">
                                  <strong>{"Mrs Sunita Ranjan"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Member"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"8 – 9 Dec"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹6,718.95"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹6,718.95"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10189" data-leads-to="RS-07" aria-label="Open FK-10189">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "94", "--k2": "80", "--k3": "18", "--k4": "1", "--k5": "4", "--k6": "31", "--k7": "23"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10190" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10190" data-leads-to="RS-07">
                                  <strong>{"FK-10190"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Email"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0147" data-leads-to="RS-18">
                                  <strong>{"Dr Ritu Chirag"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 25 Nov"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹22,446.05"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹22,446.05"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10190" data-leads-to="RS-07" aria-label="Open FK-10190">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "98", "--k2": "63", "--k3": "7", "--k4": "1", "--k5": "4", "--k6": "8", "--k7": "4"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10198" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10198" data-leads-to="RS-07">
                                  <strong>{"FK-10198"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Email"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0016" data-leads-to="RS-18">
                                  <strong>{"Ms Parvathy Thomas"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"8 – 9 Dec"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹10,146.82"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹10,146.82"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10198" data-leads-to="RS-07" aria-label="Open FK-10198">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "102", "--k2": "65", "--k3": "6", "--k4": "1", "--k5": "4", "--k6": "15", "--k7": "10"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10204" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10204" data-leads-to="RS-07">
                                  <strong>{"FK-10204"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Email"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0099" data-leads-to="RS-18">
                                  <strong>{"Ms Pooja Neil"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Gold"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"7 – 9 Dec"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹13,101.90"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹13,101.90"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10204" data-leads-to="RS-07" aria-label="Open FK-10204">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "104", "--k2": "39", "--k3": "19", "--k4": "1", "--k5": "4", "--k6": "21", "--k7": "15"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10209" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10209" data-leads-to="RS-07">
                                  <strong>{"FK-10209"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Email"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0375" data-leads-to="RS-18">
                                  <strong>{"Mr Jithin Jacob"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"23 – 25 Nov"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹15,727.10"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹15,727.10"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10209" data-leads-to="RS-07" aria-label="Open FK-10209">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "107", "--k2": "95", "--k3": "6", "--k4": "1", "--k5": "4", "--k6": "35", "--k7": "29"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10213" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10213" data-leads-to="RS-07">
                                  <strong>{"FK-10213"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Email"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0398" data-leads-to="RS-18">
                                  <strong>{"Mrs Sunita Ranjan"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Member"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"7 – 9 Dec"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹23,833.64"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹23,833.64"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10213" data-leads-to="RS-07" aria-label="Open FK-10213">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "110", "--k2": "1", "--k3": "6", "--k4": "1", "--k5": "4", "--k6": "35", "--k7": "29"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10222" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10222" data-leads-to="RS-07">
                                  <strong>{"FK-10222"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Email"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0008" data-leads-to="RS-18">
                                  <strong>{"Mr Ajay Jatin"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"7 – 9 Dec"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹23,833.64"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹23,833.64"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10222" data-leads-to="RS-07" aria-label="Open FK-10222">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "111", "--k2": "48", "--k3": "6", "--k4": "1", "--k5": "4", "--k6": "20", "--k7": "14"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10223" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10223" data-leads-to="RS-07">
                                  <strong>{"FK-10223"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Email"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0252" data-leads-to="RS-18">
                                  <strong>{"Mr Liam Walker"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"7 – 9 Dec"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹15,391.10"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹15,391.10"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10223" data-leads-to="RS-07" aria-label="Open FK-10223">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "113", "--k2": "77", "--k3": "6", "--k4": "1", "--k5": "4", "--k6": "33", "--k7": "25"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10226" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10226" data-leads-to="RS-07">
                                  <strong>{"FK-10226"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Email"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0236" data-leads-to="RS-18">
                                  <strong>{"Ms Rekha Kurian"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Gold"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"7 – 9 Dec"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹22,889.64"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹22,889.64"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10226" data-leads-to="RS-07" aria-label="Open FK-10226">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "119", "--k2": "51", "--k3": "7", "--k4": "1", "--k5": "4", "--k6": "12", "--k7": "7"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10234" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10234" data-leads-to="RS-07">
                                  <strong>{"FK-10234"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Email"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0142" data-leads-to="RS-18">
                                  <strong>{"Mr Manoj Nathan"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Platinum"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"8 – 9 Dec"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹11,129.35"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹11,129.35"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10234" data-leads-to="RS-07" aria-label="Open FK-10234">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "122", "--k2": "34", "--k3": "19", "--k4": "1", "--k5": "4", "--k6": "16", "--k7": "11"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10238" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10238" data-leads-to="RS-07">
                                  <strong>{"FK-10238"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Email"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0360" data-leads-to="RS-18">
                                  <strong>{"Ms Irina Petrova"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"23 – 25 Nov"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹13,437.90"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹13,437.90"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10238" data-leads-to="RS-07" aria-label="Open FK-10238">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "126", "--k2": "13", "--k3": "19", "--k4": "1", "--k5": "4", "--k6": "29", "--k7": "21"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10243" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10243" data-leads-to="RS-07">
                                  <strong>{"FK-10243"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Email"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0316" data-leads-to="RS-18">
                                  <strong>{"Dr Ayesha Pavan"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Member"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"23 – 25 Nov"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹21,697.90"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹21,697.90"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10243" data-leads-to="RS-07" aria-label="Open FK-10243">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "45", "--k2": "8", "--k3": "16", "--k4": "1", "--k5": "4", "--k6": "25", "--k7": "3"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10098" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10098" data-leads-to="RS-07">
                                  <strong>{"FK-10098"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"WhatsApp"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0034" data-leads-to="RS-18">
                                  <strong>{"Mrs Aswathy Nirav"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"20 – 22 Nov"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹19,113.64"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹9,556.64"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10098" data-leads-to="RS-07" aria-label="Open FK-10098">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "56", "--k2": "43", "--k3": "18", "--k4": "3", "--k5": "4", "--k6": "96", "--k7": "72"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10114" />
                              </td>
                              <td className="dt__td" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10114" data-leads-to="RS-07">
                                  <strong>{"FK-10114"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Company booking"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0139" data-leads-to="RS-18">
                                  <strong>{"Mrs Jyoti Sagar"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 26 Nov"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"3 × GDLX · –, –, –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹1,10,288.48"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹1,10,288.48"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10114" data-leads-to="RS-07" aria-label="Open FK-10114">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "96", "--k2": "82", "--k3": "20", "--k4": "1", "--k5": "3", "--k6": "9", "--k7": "5"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10194" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10194" data-leads-to="RS-07">
                                  <strong>{"FK-10194"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Aviv website"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0377" data-leads-to="RS-18">
                                  <strong>{"Mr Sandeep Shaan"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"24 – 25 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · 117"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Confirmed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹10,382.82"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹10,382.82"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10194" data-leads-to="RS-07" aria-label="Open FK-10194">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "106", "--k2": "26", "--k3": "14", "--k4": "1", "--k5": "4", "--k6": "46", "--k7": "28"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10212" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10212" data-leads-to="RS-07">
                                  <strong>{"FK-10212"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Aviv website"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0266" data-leads-to="RS-18">
                                  <strong>{"Dr Fatima Al Mansoori"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"18 – 21 Dec"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹32,488.85"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹23,284.85"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10212" data-leads-to="RS-07" aria-label="Open FK-10212">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "105", "--k2": "99", "--k3": "22", "--k4": "1", "--k5": "4", "--k6": "64", "--k7": "27"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10211" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10211" data-leads-to="RS-07">
                                  <strong>{"FK-10211"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Aviv website"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0146" data-leads-to="RS-18">
                                  <strong>{"Dr Swathi Manav"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"28 – 30 Dec"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × DLXS · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹46,253.64"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹23,126.64"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10211" data-leads-to="RS-07" aria-label="Open FK-10211">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "57", "--k2": "90", "--k3": "20", "--k4": "3", "--k5": "3", "--k6": "91", "--k7": "68"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10115" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10115" data-leads-to="RS-07">
                                  <strong>{"FK-10115"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Aviv website"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0157" data-leads-to="RS-18">
                                  <strong>{"Dr Sindhu Joseph"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"24 – 26 Nov"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"3 × PDLX · –, –, –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Confirmed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹84,561.16"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹84,561.16"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10115" data-leads-to="RS-07" aria-label="Open FK-10115">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "65", "--k2": "43", "--k3": "10", "--k4": "1", "--k5": "1", "--k6": "1", "--k7": "80"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10131" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10131" data-leads-to="RS-07">
                                  <strong>{"FK-10131"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Walk-in"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0139" data-leads-to="RS-18">
                                  <strong>{"Mrs Jyoti Sagar"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"12 – 16 Dec"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--cancelled">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x-circle" />
                                  </svg>
                                  {"Cancelled"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total">{"₹0"}</td>
                              <td className="dt__td dt__td--right num nw" data-e="">{"–"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10131" data-leads-to="RS-07" aria-label="Open FK-10131">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "92", "--k2": "28", "--k3": "12", "--k4": "1", "--k5": "3", "--k6": "13", "--k7": "8"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10188" />
                              </td>
                              <td className="dt__td" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10188" data-leads-to="RS-07">
                                  <strong>{"FK-10188"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Aviv mobile app · MR-74392816"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0299" data-leads-to="RS-18">
                                  <strong>{"Mr Ganesh Mihir"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"15 – 16 Jan"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Confirmed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹11,446.82"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹11,446.82"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10188" data-leads-to="RS-07" aria-label="Open FK-10188">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "109", "--k2": "69", "--k3": "6", "--k4": "2", "--k5": "1", "--k6": "1", "--k7": "80"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10221" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10221" data-leads-to="RS-07">
                                  <strong>{"FK-10221"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Phone"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0231" data-leads-to="RS-18">
                                  <strong>{"Ms Priya Neil"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Diamond"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"7 – 11 Dec"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"2 × PDLX · –, –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--cancelled">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x-circle" />
                                  </svg>
                                  {"Cancelled"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total">{"₹0"}</td>
                              <td className="dt__td dt__td--right num nw" data-e="">{"–"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10221" data-leads-to="RS-07" aria-label="Open FK-10221">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "75", "--k2": "22", "--k3": "14", "--k4": "1", "--k5": "2", "--k6": "22", "--k7": "80"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10155" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10155" data-leads-to="RS-07">
                                  <strong>{"FK-10155"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Aviv website"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0144" data-leads-to="RS-18">
                                  <strong>{"Ms Divya Thomas"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"18 – 20 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · 512"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ooo">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Checked out"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹16,377.90"}</td>
                              <td className="dt__td dt__td--right num nw" data-e="">{"–"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10155" data-leads-to="RS-07" aria-label="Open FK-10155">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "128", "--k2": "98", "--k3": "25", "--k4": "1", "--k5": "4", "--k6": "44", "--k7": "1"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10246" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10246" data-leads-to="RS-07">
                                  <strong>{"FK-10246"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Agoda · AG-867951739"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0317" data-leads-to="RS-18">
                                  <strong>{"Mrs Swathi Dhruv"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Gold"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"30 Nov – 3 Dec"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹30,086.46"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹0"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10246" data-leads-to="RS-07" aria-label="Open FK-10246">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "127", "--k2": "24", "--k3": "13", "--k4": "1", "--k5": "4", "--k6": "23", "--k7": "1"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10245" />
                              </td>
                              <td className="dt__td" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10245" data-leads-to="RS-07">
                                  <strong>{"FK-10245"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Aviv mobile app · MR-72365189"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0227" data-leads-to="RS-18">
                                  <strong>{"Ms Elsa Lindberg"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Member"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"17 – 19 Jan"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹17,007.90"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹0"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10245" data-leads-to="RS-07" aria-label="Open FK-10245">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "125", "--k2": "10", "--k3": "5", "--k4": "1", "--k5": "7", "--k6": "66", "--k7": "53"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10241" />
                              </td>
                              <td className="dt__td" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10241" data-leads-to="RS-07">
                                  <strong>{"FK-10241"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Aviv mobile app · MR-75369481"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0074" data-leads-to="RS-18">
                                  <strong>{"Dr Athira George"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"6 – 11 Jan"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--tentative">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Tentative"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total">{"₹46,628"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹46,628"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10241" data-leads-to="RS-07" aria-label="Open FK-10241">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "124", "--k2": "44", "--k3": "9", "--k4": "1", "--k5": "4", "--k6": "47", "--k7": "1"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10240" />
                              </td>
                              <td className="dt__td" data-label="Booking" data-w="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10240" data-leads-to="RS-07">
                                  <strong>{"FK-10240"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"MakeMyTrip / Goibibo · MM-425102875"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0013" data-leads-to="RS-18">
                                  <strong>{"Mr Karthik Jatin"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"11 – 13 Nov"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × DLXS · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total">{"₹32,509"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹0"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10240" data-leads-to="RS-07" aria-label="Open FK-10240">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "121", "--k2": "46", "--k3": "3", "--k4": "1", "--k5": "1", "--k6": "1", "--k7": "80"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10236" />
                              </td>
                              <td className="dt__td" data-label="Booking" data-w="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10236" data-leads-to="RS-07">
                                  <strong>{"FK-10236"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"MakeMyTrip / Goibibo · MM-622122832"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0291" data-leads-to="RS-18">
                                  <strong>{"Ms Kavita Siddharth"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"4 – 7 Dec"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--cancelled">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x-circle" />
                                  </svg>
                                  {"Cancelled"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total">{"₹0"}</td>
                              <td className="dt__td dt__td--right num nw" data-e="">{"–"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10236" data-leads-to="RS-07" aria-label="Open FK-10236">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "120", "--k2": "33", "--k3": "5", "--k4": "1", "--k5": "4", "--k6": "5", "--k7": "1"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10235" />
                              </td>
                              <td className="dt__td" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10235" data-leads-to="RS-07">
                                  <strong>{"FK-10235"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Aviv mobile app · MR-47944038"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0276" data-leads-to="RS-18">
                                  <strong>{"Mr Imran Shaan"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"6 – 7 Dec"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹9,438.82"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹0"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10235" data-leads-to="RS-07" aria-label="Open FK-10235">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "64", "--k2": "97", "--k3": "24", "--k4": "1", "--k5": "1", "--k6": "1", "--k7": "80"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10126" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10126" data-leads-to="RS-07">
                                  <strong>{"FK-10126"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Agoda · AG-228043732"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0208" data-leads-to="RS-18">
                                  <strong>{"Ms Swathi Chirag"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Member"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"29 Oct – 1 Nov"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--cancelled">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x-circle" />
                                  </svg>
                                  {"Cancelled"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total">{"₹0"}</td>
                              <td className="dt__td dt__td--right num nw" data-e="">{"–"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10126" data-leads-to="RS-07" aria-label="Open FK-10126">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "116", "--k2": "21", "--k3": "19", "--k4": "1", "--k5": "4", "--k6": "11", "--k7": "6"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10230" />
                              </td>
                              <td className="dt__td" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10230" data-leads-to="RS-07">
                                  <strong>{"FK-10230"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Aviv mobile app · MR-97914340"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0075" data-leads-to="RS-18">
                                  <strong>{"Mr Dileep Pranav"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"23 – 24 Jan"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total">{"₹11,094"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹11,094"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10230" data-leads-to="RS-07" aria-label="Open FK-10230">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "115", "--k2": "34", "--k3": "2", "--k4": "1", "--k5": "4", "--k6": "78", "--k7": "1"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10228" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10228" data-leads-to="RS-07">
                                  <strong>{"FK-10228"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Expedia · EX-102872320"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0360" data-leads-to="RS-18">
                                  <strong>{"Ms Irina Petrova"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"3 – 6 Nov"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × DLXS · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total">{"₹59,590"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹0"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10228" data-leads-to="RS-07" aria-label="Open FK-10228">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "112", "--k2": "94", "--k3": "1", "--k4": "1", "--k5": "3", "--k6": "60", "--k7": "50"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10224" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10224" data-leads-to="RS-07">
                                  <strong>{"FK-10224"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Expedia · EX-534320597"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0359" data-leads-to="RS-18">
                                  <strong>{"Mr Srinivas Manav"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Gold"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"1 – 4 Jan"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Confirmed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹42,714.46"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹42,714.46"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10224" data-leads-to="RS-07" aria-label="Open FK-10224">{"Open"}</a>
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
                          <input className="pg-in" type="radio" name="pg1r10" id="pg1r10p9" />
                          <label className="pg-n" htmlFor="pg1r10p9" aria-label="Page 9">{"9"}</label>
                          <input className="pg-in" type="radio" name="pg1r10" id="pg1r10p10" />
                          <label className="pg-n" htmlFor="pg1r10p10" aria-label="Page 10">{"10"}</label>
                          <input className="pg-in" type="radio" name="pg1r10" id="pg1r10p11" />
                          <label className="pg-n" htmlFor="pg1r10p11" aria-label="Page 11">{"11"}</label>
                          <input className="pg-in" type="radio" name="pg1r10" id="pg1r10p12" />
                          <label className="pg-n" htmlFor="pg1r10p12" aria-label="Page 12">{"12"}</label>
                          <input className="pg-in" type="radio" name="pg1r10" id="pg1r10p13" />
                          <label className="pg-n" htmlFor="pg1r10p13" aria-label="Page 13">{"13"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–10"}</b>
                              {" of 128"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"11–20"}</b>
                              {" of 128"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"21–30"}</b>
                              {" of 128"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"31–40"}</b>
                              {" of 128"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"41–50"}</b>
                              {" of 128"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"51–60"}</b>
                              {" of 128"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"61–70"}</b>
                              {" of 128"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"71–80"}</b>
                              {" of 128"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"81–90"}</b>
                              {" of 128"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"91–100"}</b>
                              {" of 128"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"101–110"}</b>
                              {" of 128"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"111–120"}</b>
                              {" of 128"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"121–128"}</b>
                              {" of 128"}
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
                            <label className="pg-arr" htmlFor="pg1r10p8" title="Previous page">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-left" />
                              </svg>
                            </label>
                            <label className="pg-arr" htmlFor="pg1r10p9" title="Previous page">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-left" />
                              </svg>
                            </label>
                            <label className="pg-arr" htmlFor="pg1r10p10" title="Previous page">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-left" />
                              </svg>
                            </label>
                            <label className="pg-arr" htmlFor="pg1r10p11" title="Previous page">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-left" />
                              </svg>
                            </label>
                            <label className="pg-arr" htmlFor="pg1r10p12" title="Previous page">
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
                            <label className="pg-arr" htmlFor="pg1r10p9" title="Next page">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-right" />
                              </svg>
                            </label>
                            <label className="pg-arr" htmlFor="pg1r10p10" title="Next page">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-right" />
                              </svg>
                            </label>
                            <label className="pg-arr" htmlFor="pg1r10p11" title="Next page">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-right" />
                              </svg>
                            </label>
                            <label className="pg-arr" htmlFor="pg1r10p12" title="Next page">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-right" />
                              </svg>
                            </label>
                            <label className="pg-arr" htmlFor="pg1r10p13" title="Next page">
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
                          <input className="pg-in" type="radio" name="pg1r15" id="pg1r15p6" />
                          <label className="pg-n" htmlFor="pg1r15p6" aria-label="Page 6">{"6"}</label>
                          <input className="pg-in" type="radio" name="pg1r15" id="pg1r15p7" />
                          <label className="pg-n" htmlFor="pg1r15p7" aria-label="Page 7">{"7"}</label>
                          <input className="pg-in" type="radio" name="pg1r15" id="pg1r15p8" />
                          <label className="pg-n" htmlFor="pg1r15p8" aria-label="Page 8">{"8"}</label>
                          <input className="pg-in" type="radio" name="pg1r15" id="pg1r15p9" />
                          <label className="pg-n" htmlFor="pg1r15p9" aria-label="Page 9">{"9"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–15"}</b>
                              {" of 128"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"16–30"}</b>
                              {" of 128"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"31–45"}</b>
                              {" of 128"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"46–60"}</b>
                              {" of 128"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"61–75"}</b>
                              {" of 128"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"76–90"}</b>
                              {" of 128"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"91–105"}</b>
                              {" of 128"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"106–120"}</b>
                              {" of 128"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"121–128"}</b>
                              {" of 128"}
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
                            <label className="pg-arr" htmlFor="pg1r15p5" title="Previous page">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-left" />
                              </svg>
                            </label>
                            <label className="pg-arr" htmlFor="pg1r15p6" title="Previous page">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-left" />
                              </svg>
                            </label>
                            <label className="pg-arr" htmlFor="pg1r15p7" title="Previous page">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-left" />
                              </svg>
                            </label>
                            <label className="pg-arr" htmlFor="pg1r15p8" title="Previous page">
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
                            <label className="pg-arr" htmlFor="pg1r15p6" title="Next page">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-right" />
                              </svg>
                            </label>
                            <label className="pg-arr" htmlFor="pg1r15p7" title="Next page">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-right" />
                              </svg>
                            </label>
                            <label className="pg-arr" htmlFor="pg1r15p8" title="Next page">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-right" />
                              </svg>
                            </label>
                            <label className="pg-arr" htmlFor="pg1r15p9" title="Next page">
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
                          <input className="pg-in" type="radio" name="pg1r20" id="pg1r20p5" />
                          <label className="pg-n" htmlFor="pg1r20p5" aria-label="Page 5">{"5"}</label>
                          <input className="pg-in" type="radio" name="pg1r20" id="pg1r20p6" />
                          <label className="pg-n" htmlFor="pg1r20p6" aria-label="Page 6">{"6"}</label>
                          <input className="pg-in" type="radio" name="pg1r20" id="pg1r20p7" />
                          <label className="pg-n" htmlFor="pg1r20p7" aria-label="Page 7">{"7"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–20"}</b>
                              {" of 128"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"21–40"}</b>
                              {" of 128"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"41–60"}</b>
                              {" of 128"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"61–80"}</b>
                              {" of 128"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"81–100"}</b>
                              {" of 128"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"101–120"}</b>
                              {" of 128"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"121–128"}</b>
                              {" of 128"}
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
                            <label className="pg-arr" htmlFor="pg1r20p4" title="Previous page">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-left" />
                              </svg>
                            </label>
                            <label className="pg-arr" htmlFor="pg1r20p5" title="Previous page">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-left" />
                              </svg>
                            </label>
                            <label className="pg-arr" htmlFor="pg1r20p6" title="Previous page">
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
                            <label className="pg-arr" htmlFor="pg1r20p5" title="Next page">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-right" />
                              </svg>
                            </label>
                            <label className="pg-arr" htmlFor="pg1r20p6" title="Next page">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-right" />
                              </svg>
                            </label>
                            <label className="pg-arr" htmlFor="pg1r20p7" title="Next page">
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
                          <input className="pg-in" type="radio" name="pg1r25" id="pg1r25p4" />
                          <label className="pg-n" htmlFor="pg1r25p4" aria-label="Page 4">{"4"}</label>
                          <input className="pg-in" type="radio" name="pg1r25" id="pg1r25p5" />
                          <label className="pg-n" htmlFor="pg1r25p5" aria-label="Page 5">{"5"}</label>
                          <input className="pg-in" type="radio" name="pg1r25" id="pg1r25p6" />
                          <label className="pg-n" htmlFor="pg1r25p6" aria-label="Page 6">{"6"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–25"}</b>
                              {" of 128"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"26–50"}</b>
                              {" of 128"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"51–75"}</b>
                              {" of 128"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"76–100"}</b>
                              {" of 128"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"101–125"}</b>
                              {" of 128"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"126–128"}</b>
                              {" of 128"}
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
                            <label className="pg-arr" htmlFor="pg1r25p3" title="Previous page">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-left" />
                              </svg>
                            </label>
                            <label className="pg-arr" htmlFor="pg1r25p4" title="Previous page">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-left" />
                              </svg>
                            </label>
                            <label className="pg-arr" htmlFor="pg1r25p5" title="Previous page">
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
                            <label className="pg-arr" htmlFor="pg1r25p4" title="Next page">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-right" />
                              </svg>
                            </label>
                            <label className="pg-arr" htmlFor="pg1r25p5" title="Next page">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-right" />
                              </svg>
                            </label>
                            <label className="pg-arr" htmlFor="pg1r25p6" title="Next page">
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
                          <input className="pg-in" type="radio" name="pg1r30" id="pg1r30p4" />
                          <label className="pg-n" htmlFor="pg1r30p4" aria-label="Page 4">{"4"}</label>
                          <input className="pg-in" type="radio" name="pg1r30" id="pg1r30p5" />
                          <label className="pg-n" htmlFor="pg1r30p5" aria-label="Page 5">{"5"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–30"}</b>
                              {" of 128"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"31–60"}</b>
                              {" of 128"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"61–90"}</b>
                              {" of 128"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"91–120"}</b>
                              {" of 128"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"121–128"}</b>
                              {" of 128"}
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
                            <label className="pg-arr" htmlFor="pg1r30p3" title="Previous page">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-left" />
                              </svg>
                            </label>
                            <label className="pg-arr" htmlFor="pg1r30p4" title="Previous page">
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
                            <label className="pg-arr" htmlFor="pg1r30p4" title="Next page">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-right" />
                              </svg>
                            </label>
                            <label className="pg-arr" htmlFor="pg1r30p5" title="Next page">
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
                  </section>
                  <section className="stabs__panel" data-code="RS-06-q1" aria-label="Arrivals today">
                    <div className="pgw">
                      <div className="s-scroll">
                        <table className="srt dt__table dt--hug" data-code="RS-06-q1-list" style={{"--srt-cols": "max-content auto auto auto auto auto auto auto max-content"}} data-mc="">
                          <caption className="sr-only">{"Reservations"}</caption>
                          <thead>
                            <tr>
                              <th scope="col" />
                              <th scope="col">
                                <input className="srt-i srt-a1" type="radio" name="strs061" id="strs061-1a" aria-label="Sort by Booking, lowest or A first" />
                                <input className="srt-i srt-d1" type="radio" name="strs061" id="strs061-1d" aria-label="Sort by Booking, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strs061-1a">{"Booking"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strs061-1d" aria-hidden="true">{"Booking"}</label>
                              </th>
                              <th scope="col">
                                <input className="srt-i srt-a2" type="radio" name="strs061" id="strs061-2a" aria-label="Sort by Guest, lowest or A first" />
                                <input className="srt-i srt-d2" type="radio" name="strs061" id="strs061-2d" aria-label="Sort by Guest, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strs061-2a">{"Guest"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strs061-2d" aria-hidden="true">{"Guest"}</label>
                              </th>
                              <th scope="col">{"Stay"}</th>
                              <th scope="col">
                                <input className="srt-i srt-a4" type="radio" name="strs061" id="strs061-4a" aria-label="Sort by Rooms, lowest or A first" />
                                <input className="srt-i srt-d4" type="radio" name="strs061" id="strs061-4d" aria-label="Sort by Rooms, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strs061-4a">{"Rooms"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strs061-4d" aria-hidden="true">{"Rooms"}</label>
                              </th>
                              <th scope="col">
                                <input className="srt-i srt-a5" type="radio" name="strs061" id="strs061-5a" aria-label="Sort by Status, lowest or A first" />
                                <input className="srt-i srt-d5" type="radio" name="strs061" id="strs061-5d" aria-label="Sort by Status, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strs061-5a">{"Status"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strs061-5d" aria-hidden="true">{"Status"}</label>
                              </th>
                              <th scope="col" className="dt__th--right">
                                <input className="srt-i srt-a6" type="radio" name="strs061" id="strs061-6a" aria-label="Sort by Total, lowest or A first" />
                                <input className="srt-i srt-d6" type="radio" name="strs061" id="strs061-6d" aria-label="Sort by Total, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strs061-6a">{"Total"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strs061-6d" aria-hidden="true">{"Total"}</label>
                              </th>
                              <th scope="col" className="dt__th--right">
                                <input className="srt-i srt-a7" type="radio" name="strs061" id="strs061-7a" aria-label="Sort by Balance, lowest or A first" />
                                <input className="srt-i srt-d7" type="radio" name="strs061" id="strs061-7d" aria-label="Sort by Balance, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strs061-7a">{"Balance"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strs061-7d" aria-hidden="true">{"Balance"}</label>
                              </th>
                              <th scope="col" />
                            </tr>
                          </thead>
                          <tbody>
                            <tr style={{"--k1": "1", "--k2": "14", "--k4": "1", "--k5": "2", "--k6": "14", "--k7": "1"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10006" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10006" data-leads-to="RS-07">
                                  <strong>{"FK-10006"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Booking.com · BO-446947201"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0289" data-leads-to="RS-18">
                                  <strong>{"Mr Ravi Kabir"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Silver"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 26 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · 505"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹43,277.68"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹0"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10006" data-leads-to="RS-07" aria-label="Open FK-10006">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "2", "--k2": "1", "--k4": "1", "--k5": "4", "--k6": "18", "--k7": "15"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10013" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10013" data-leads-to="RS-07">
                                  <strong>{"FK-10013"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Walk-in"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0232" data-leads-to="RS-18">
                                  <strong>{"Mrs Athira Nirav"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Member"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 26 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PRMS · 517"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--tentative">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Tentative"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹1,27,201.64"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹1,27,201.64"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10013" data-leads-to="RS-07" aria-label="Open FK-10013">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "3", "--k2": "2", "--k4": "1", "--k5": "1", "--k6": "4", "--k7": "5"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10015" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10015" data-leads-to="RS-07">
                                  <strong>{"FK-10015"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Booking.com · BO-523266015"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0337" data-leads-to="RS-18">
                                  <strong>{"Mr Dileep Kurian"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Gold"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 24 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Confirmed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹24,400.04"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹24,400.04"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10015" data-leads-to="RS-07" aria-label="Open FK-10015">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "4", "--k2": "8", "--k4": "1", "--k5": "2", "--k6": "11", "--k7": "1"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10022" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10022" data-leads-to="RS-07">
                                  <strong>{"FK-10022"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Email"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0052" data-leads-to="RS-18">
                                  <strong>{"Ms Lakshmi Mathew"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 27 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹41,409.04"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹0"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10022" data-leads-to="RS-07" aria-label="Open FK-10022">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "5", "--k2": "11", "--k4": "1", "--k5": "2", "--k6": "8", "--k7": "9"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10034" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10034" data-leads-to="RS-07">
                                  <strong>{"FK-10034"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Travel agent"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0099" data-leads-to="RS-18">
                                  <strong>{"Ms Pooja Neil"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Gold"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 27 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · 106"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹35,812.35"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹35,812.35"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10034" data-leads-to="RS-07" aria-label="Open FK-10034">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "6", "--k2": "3", "--k4": "3", "--k5": "2", "--k6": "7", "--k7": "8"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10039" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10039" data-leads-to="RS-07">
                                  <strong>{"FK-10039"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Expedia · EX-730809750"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0347" data-leads-to="RS-18">
                                  <strong>{"Mr Dileep Pranav"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 23 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"3 × PDLX · –, –, –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹33,980.46"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹33,980.46"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10039" data-leads-to="RS-07" aria-label="Open FK-10039">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "7", "--k2": "9", "--k4": "1", "--k5": "1", "--k6": "17", "--k7": "14"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10067" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10067" data-leads-to="RS-07">
                                  <strong>{"FK-10067"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Phone"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0210" data-leads-to="RS-18">
                                  <strong>{"Mr Lukas Keller"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 27 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · 314"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Confirmed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹52,032.10"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹52,032.10"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10067" data-leads-to="RS-07" aria-label="Open FK-10067">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "8", "--k2": "16", "--k4": "1", "--k5": "3", "--k6": "5", "--k7": "2"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10074" />
                              </td>
                              <td className="dt__td" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10074" data-leads-to="RS-07">
                                  <strong>{"FK-10074"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Aviv mobile app · MR-33324691"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0183" data-leads-to="RS-18">
                                  <strong>{"Mrs Shruti Shaan"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Gold"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 25 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · 108"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹28,536.99"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹20,978.04"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10074" data-leads-to="RS-07" aria-label="Open FK-10074">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "9", "--k2": "15", "--k4": "1", "--k5": "2", "--k6": "6", "--k7": "7"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10089" />
                              </td>
                              <td className="dt__td" data-label="Booking" data-w="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10089" data-leads-to="RS-07">
                                  <strong>{"FK-10089"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"MakeMyTrip / Goibibo · MM-418649606"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0353" data-leads-to="RS-18">
                                  <strong>{"Dr Shruti Manav"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Silver"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 26 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹32,666.46"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹32,666.46"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10089" data-leads-to="RS-07" aria-label="Open FK-10089">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "10", "--k2": "17", "--k4": "1", "--k5": "1", "--k6": "10", "--k7": "10"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10091" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10091" data-leads-to="RS-07">
                                  <strong>{"FK-10091"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Email"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0359" data-leads-to="RS-18">
                                  <strong>{"Mr Srinivas Manav"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Gold"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 27 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · 305"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Confirmed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹41,365.69"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹41,365.69"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10091" data-leads-to="RS-07" aria-label="Open FK-10091">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "11", "--k2": "5", "--k4": "2", "--k5": "1", "--k6": "12", "--k7": "11"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10096" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10096" data-leads-to="RS-07">
                                  <strong>{"FK-10096"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Phone"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0108" data-leads-to="RS-18">
                                  <strong>{"Mr Hans Mueller"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 24 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"2 × GDLX · 302, 111"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Confirmed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹41,533.28"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹41,533.28"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10096" data-leads-to="RS-07" aria-label="Open FK-10096">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "12", "--k2": "10", "--k4": "1", "--k5": "4", "--k6": "13", "--k7": "12"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10121" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10121" data-leads-to="RS-07">
                                  <strong>{"FK-10121"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Phone"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0268" data-leads-to="RS-18">
                                  <strong>{"Ms Noura Al Saud"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 27 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--tentative">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Tentative"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹42,608.15"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹42,608.15"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10121" data-leads-to="RS-07" aria-label="Open FK-10121">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "13", "--k2": "4", "--k4": "1", "--k5": "4", "--k6": "16", "--k7": "13"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10146" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10146" data-leads-to="RS-07">
                                  <strong>{"FK-10146"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Phone"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0299" data-leads-to="RS-18">
                                  <strong>{"Mr Ganesh Mihir"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 25 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--tentative">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Tentative"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹50,368.30"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹50,368.30"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10146" data-leads-to="RS-07" aria-label="Open FK-10146">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "14", "--k2": "13", "--k4": "1", "--k5": "3", "--k6": "9", "--k7": "6"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10197" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10197" data-leads-to="RS-07">
                                  <strong>{"FK-10197"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Phone"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0280" data-leads-to="RS-18">
                                  <strong>{"Mr Rahul Philip"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Gold"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 26 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · 401"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹38,699.28"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹29,496.46"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10197" data-leads-to="RS-07" aria-label="Open FK-10197">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "15", "--k2": "7", "--k4": "1", "--k5": "2", "--k6": "2", "--k7": "3"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10201" />
                              </td>
                              <td className="dt__td" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10201" data-leads-to="RS-07">
                                  <strong>{"FK-10201"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Aviv mobile app · MR-84092234"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0013" data-leads-to="RS-18">
                                  <strong>{"Mr Karthik Jatin"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 24 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · 512"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹21,001.64"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹21,001.64"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10201" data-leads-to="RS-07" aria-label="Open FK-10201">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "16", "--k2": "18", "--k4": "1", "--k5": "2", "--k6": "1", "--k7": "1"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10216" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10216" data-leads-to="RS-07">
                                  <strong>{"FK-10216"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Booking.com · BO-293317163"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-w2="" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0017" data-leads-to="RS-18">
                                  <strong>{"Mrs Swathi Sahil"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"VIP"}
                                </span>
                                {" "}
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 23 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹10,028.82"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹0"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10216" data-leads-to="RS-07" aria-label="Open FK-10216">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "17", "--k2": "6", "--k4": "1", "--k5": "2", "--k6": "15", "--k7": "1"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10233" />
                              </td>
                              <td className="dt__td" data-label="Booking" data-w="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10233" data-leads-to="RS-07">
                                  <strong>{"FK-10233"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"MakeMyTrip / Goibibo · MM-930569184"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0247" data-leads-to="RS-18">
                                  <strong>{"Mr Imran Dhruv"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 27 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹49,082.10"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹0"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10233" data-leads-to="RS-07" aria-label="Open FK-10233">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "18", "--k2": "12", "--k4": "1", "--k5": "2", "--k6": "3", "--k7": "4"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10239" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10239" data-leads-to="RS-07">
                                  <strong>{"FK-10239"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Travel agent"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0197" data-leads-to="RS-18">
                                  <strong>{"Mr Rahul George"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Gold"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 25 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · 205"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹22,038.45"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹22,038.45"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10239" data-leads-to="RS-07" aria-label="Open FK-10239">{"Open"}</a>
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
                  </section>
                  <section className="stabs__panel" data-code="RS-06-q2" aria-label="Departures today">
                    <div className="pgw">
                      <div className="s-scroll">
                        <table className="srt dt__table dt--hug" data-code="RS-06-q2-list" style={{"--srt-cols": "max-content auto auto auto auto auto auto auto max-content"}} data-mc="">
                          <caption className="sr-only">{"Reservations"}</caption>
                          <thead>
                            <tr>
                              <th scope="col" />
                              <th scope="col">
                                <input className="srt-i srt-a1" type="radio" name="strs062" id="strs062-1a" aria-label="Sort by Booking, lowest or A first" />
                                <input className="srt-i srt-d1" type="radio" name="strs062" id="strs062-1d" aria-label="Sort by Booking, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strs062-1a">{"Booking"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strs062-1d" aria-hidden="true">{"Booking"}</label>
                              </th>
                              <th scope="col">
                                <input className="srt-i srt-a2" type="radio" name="strs062" id="strs062-2a" aria-label="Sort by Guest, lowest or A first" />
                                <input className="srt-i srt-d2" type="radio" name="strs062" id="strs062-2d" aria-label="Sort by Guest, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strs062-2a">{"Guest"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strs062-2d" aria-hidden="true">{"Guest"}</label>
                              </th>
                              <th scope="col">
                                <input className="srt-i srt-a3" type="radio" name="strs062" id="strs062-3a" aria-label="Sort by Stay, lowest or A first" />
                                <input className="srt-i srt-d3" type="radio" name="strs062" id="strs062-3d" aria-label="Sort by Stay, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strs062-3a">{"Stay"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strs062-3d" aria-hidden="true">{"Stay"}</label>
                              </th>
                              <th scope="col">
                                <input className="srt-i srt-a4" type="radio" name="strs062" id="strs062-4a" aria-label="Sort by Rooms, lowest or A first" />
                                <input className="srt-i srt-d4" type="radio" name="strs062" id="strs062-4d" aria-label="Sort by Rooms, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strs062-4a">{"Rooms"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strs062-4d" aria-hidden="true">{"Rooms"}</label>
                              </th>
                              <th scope="col">{"Status"}</th>
                              <th scope="col" className="dt__th--right">
                                <input className="srt-i srt-a6" type="radio" name="strs062" id="strs062-6a" aria-label="Sort by Total, lowest or A first" />
                                <input className="srt-i srt-d6" type="radio" name="strs062" id="strs062-6d" aria-label="Sort by Total, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strs062-6a">{"Total"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strs062-6d" aria-hidden="true">{"Total"}</label>
                              </th>
                              <th scope="col" className="dt__th--right">
                                <input className="srt-i srt-a7" type="radio" name="strs062" id="strs062-7a" aria-label="Sort by Balance, lowest or A first" />
                                <input className="srt-i srt-d7" type="radio" name="strs062" id="strs062-7d" aria-label="Sort by Balance, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strs062-7a">{"Balance"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strs062-7d" aria-hidden="true">{"Balance"}</label>
                              </th>
                              <th scope="col" />
                            </tr>
                          </thead>
                          <tbody>
                            <tr style={{"--k1": "1", "--k2": "6", "--k3": "1", "--k4": "1", "--k6": "5", "--k7": "5"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10102" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10102" data-leads-to="RS-07">
                                  <strong>{"FK-10102"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Agoda · AG-128708417"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0329" data-leads-to="RS-18">
                                  <strong>{"Ms Remya Kurian"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"18 – 22 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · 319"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹28,984.20"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹28,984.20"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10102" data-leads-to="RS-07" aria-label="Open FK-10102">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "2", "--k2": "1", "--k3": "2", "--k4": "1", "--k6": "2", "--k7": "2"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10104" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10104" data-leads-to="RS-07">
                                  <strong>{"FK-10104"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Travel agent"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0262" data-leads-to="RS-18">
                                  <strong>{"Mr Amit Chirag"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"19 – 22 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · 207"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹22,950.05"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹22,950.05"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10104" data-leads-to="RS-07" aria-label="Open FK-10104">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "3", "--k2": "2", "--k3": "2", "--k4": "1", "--k6": "3", "--k7": "3"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10108" />
                              </td>
                              <td className="dt__td" data-label="Booking" data-w="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10108" data-leads-to="RS-07">
                                  <strong>{"FK-10108"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"MakeMyTrip / Goibibo · MM-458149701"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0254" data-leads-to="RS-18">
                                  <strong>{"Ms Anna Schneider"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Gold"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"19 – 22 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · 205"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹24,741.55"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹24,741.55"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10108" data-leads-to="RS-07" aria-label="Open FK-10108">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "4", "--k2": "3", "--k3": "3", "--k4": "2", "--k6": "4", "--k7": "4"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10123" />
                              </td>
                              <td className="dt__td" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10123" data-leads-to="RS-07">
                                  <strong>{"FK-10123"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Aviv mobile app · MR-15849046"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0369" data-leads-to="RS-18">
                                  <strong>{"Mrs Isha Neil"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Silver"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"20 – 22 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"2 × PDLX · 416, 505"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹27,722.54"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹27,722.54"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10123" data-leads-to="RS-07" aria-label="Open FK-10123">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "5", "--k2": "5", "--k3": "2", "--k4": "1", "--k6": "7", "--k7": "1"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10142" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10142" data-leads-to="RS-07">
                                  <strong>{"FK-10142"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Trip.com · TR-905446920"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0310" data-leads-to="RS-18">
                                  <strong>{"Mrs Maya Mohan"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"19 – 22 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PRMS · 517"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹78,230.46"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹0"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10142" data-leads-to="RS-07" aria-label="Open FK-10142">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "6", "--k2": "7", "--k3": "1", "--k4": "2", "--k6": "8", "--k7": "7"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10172" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10172" data-leads-to="RS-07">
                                  <strong>{"FK-10172"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Walk-in"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0078" data-leads-to="RS-18">
                                  <strong>{"Ms Shruti Siddharth"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Member"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"18 – 22 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"2 × PDLX · 415, 316"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹89,717.17"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹77,680.17"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10172" data-leads-to="RS-07" aria-label="Open FK-10172">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "7", "--k2": "4", "--k3": "3", "--k4": "3", "--k6": "6", "--k7": "6"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10187" />
                              </td>
                              <td className="dt__td" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10187" data-leads-to="RS-07">
                                  <strong>{"FK-10187"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Aviv mobile app · MR-15430548"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0257" data-leads-to="RS-18">
                                  <strong>{"Mrs Kavita Ranjan"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"20 – 22 Oct"}</td>
                              <td className="dt__td" data-label="Rooms" data-w2="">{"3 × PDLX · 406, 503, 404"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹65,137.92"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹65,137.92"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10187" data-leads-to="RS-07" aria-label="Open FK-10187">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "8", "--k2": "8", "--k3": "4", "--k4": "2", "--k6": "1", "--k7": "1"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10193" />
                              </td>
                              <td className="dt__td" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10193" data-leads-to="RS-07">
                                  <strong>{"FK-10193"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Aviv mobile app · MR-17112246"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0253" data-leads-to="RS-18">
                                  <strong>{"Mrs Sindhu Wilson"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"21 – 22 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"2 × GDLX · 216, 305"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹13,442.10"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹0"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10193" data-leads-to="RS-07" aria-label="Open FK-10193">{"Open"}</a>
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
                          <input className="pg-in" type="radio" name="pg3r10" id="pg3r10p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg3r10p1" aria-label="Page 1">{"1"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–8"}</b>
                              {" of 8"}
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
                          <input className="pg-in" type="radio" name="pg3r15" id="pg3r15p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg3r15p1" aria-label="Page 1">{"1"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–8"}</b>
                              {" of 8"}
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
                          <input className="pg-in" type="radio" name="pg3r20" id="pg3r20p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg3r20p1" aria-label="Page 1">{"1"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–8"}</b>
                              {" of 8"}
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
                          <input className="pg-in" type="radio" name="pg3r25" id="pg3r25p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg3r25p1" aria-label="Page 1">{"1"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–8"}</b>
                              {" of 8"}
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
                          <input className="pg-in" type="radio" name="pg3r30" id="pg3r30p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg3r30p1" aria-label="Page 1">{"1"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–8"}</b>
                              {" of 8"}
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
                  <section className="stabs__panel" data-code="RS-06-q3" aria-label="Tentative">
                    <div className="pgw">
                      <div className="s-scroll">
                        <table className="srt dt__table dt--hug" data-code="RS-06-q3-list" style={{"--srt-cols": "max-content auto auto auto auto auto auto auto max-content"}} data-mc="">
                          <caption className="sr-only">{"Reservations"}</caption>
                          <thead>
                            <tr>
                              <th scope="col" />
                              <th scope="col">
                                <input className="srt-i srt-a1" type="radio" name="strs063" id="strs063-1a" aria-label="Sort by Booking, lowest or A first" />
                                <input className="srt-i srt-d1" type="radio" name="strs063" id="strs063-1d" aria-label="Sort by Booking, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strs063-1a">{"Booking"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strs063-1d" aria-hidden="true">{"Booking"}</label>
                              </th>
                              <th scope="col">
                                <input className="srt-i srt-a2" type="radio" name="strs063" id="strs063-2a" aria-label="Sort by Guest, lowest or A first" />
                                <input className="srt-i srt-d2" type="radio" name="strs063" id="strs063-2d" aria-label="Sort by Guest, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strs063-2a">{"Guest"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strs063-2d" aria-hidden="true">{"Guest"}</label>
                              </th>
                              <th scope="col">
                                <input className="srt-i srt-a3" type="radio" name="strs063" id="strs063-3a" aria-label="Sort by Stay, lowest or A first" />
                                <input className="srt-i srt-d3" type="radio" name="strs063" id="strs063-3d" aria-label="Sort by Stay, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strs063-3a">{"Stay"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strs063-3d" aria-hidden="true">{"Stay"}</label>
                              </th>
                              <th scope="col">{"Rooms"}</th>
                              <th scope="col">{"Status"}</th>
                              <th scope="col" className="dt__th--right">
                                <input className="srt-i srt-a6" type="radio" name="strs063" id="strs063-6a" aria-label="Sort by Total, lowest or A first" />
                                <input className="srt-i srt-d6" type="radio" name="strs063" id="strs063-6d" aria-label="Sort by Total, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strs063-6a">{"Total"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strs063-6d" aria-hidden="true">{"Total"}</label>
                              </th>
                              <th scope="col" className="dt__th--right">
                                <input className="srt-i srt-a7" type="radio" name="strs063" id="strs063-7a" aria-label="Sort by Balance, lowest or A first" />
                                <input className="srt-i srt-d7" type="radio" name="strs063" id="strs063-7d" aria-label="Sort by Balance, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strs063-7a">{"Balance"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strs063-7d" aria-hidden="true">{"Balance"}</label>
                              </th>
                              <th scope="col" />
                            </tr>
                          </thead>
                          <tbody>
                            <tr style={{"--k1": "1", "--k2": "2", "--k3": "5", "--k6": "6", "--k7": "6"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10013" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10013" data-leads-to="RS-07">
                                  <strong>{"FK-10013"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Walk-in"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0232" data-leads-to="RS-18">
                                  <strong>{"Mrs Athira Nirav"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Member"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 26 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PRMS · 517"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--tentative">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Tentative"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹1,27,201.64"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹1,27,201.64"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10013" data-leads-to="RS-07" aria-label="Open FK-10013">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "2", "--k2": "6", "--k3": "5", "--k6": "2", "--k7": "2"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10121" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10121" data-leads-to="RS-07">
                                  <strong>{"FK-10121"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Phone"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0268" data-leads-to="RS-18">
                                  <strong>{"Ms Noura Al Saud"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 27 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--tentative">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Tentative"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹42,608.15"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹42,608.15"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10121" data-leads-to="RS-07" aria-label="Open FK-10121">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "5", "--k2": "4", "--k3": "5", "--k6": "5", "--k7": "5"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10146" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10146" data-leads-to="RS-07">
                                  <strong>{"FK-10146"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Phone"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0299" data-leads-to="RS-18">
                                  <strong>{"Mr Ganesh Mihir"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 25 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--tentative">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Tentative"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹50,368.30"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹50,368.30"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10146" data-leads-to="RS-07" aria-label="Open FK-10146">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "6", "--k2": "5", "--k3": "1", "--k6": "1", "--k7": "1"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10227" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10227" data-leads-to="RS-07">
                                  <strong>{"FK-10227"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Agoda · AG-582665625"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0165" data-leads-to="RS-18">
                                  <strong>{"Mr Marco Rossi"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Silver"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"4 – 6 Nov"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--tentative">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Tentative"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹18,870.12"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹18,870.12"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10227" data-leads-to="RS-07" aria-label="Open FK-10227">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "3", "--k2": "7", "--k3": "2", "--k6": "7", "--k7": "7"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10133" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10133" data-leads-to="RS-07">
                                  <strong>{"FK-10133"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Booking.com · BO-130641251"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0191" data-leads-to="RS-18">
                                  <strong>{"Dr Yuki Tanaka"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"5 – 12 Nov"}</td>
                              <td className="dt__td" data-label="Rooms">{"1 × PDLX + 1 × GDLX · –, –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--tentative">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Tentative"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹1,39,931.48"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹1,39,931.48"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10133" data-leads-to="RS-07" aria-label="Open FK-10133">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "4", "--k2": "3", "--k3": "4", "--k6": "4", "--k7": "4"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10139" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10139" data-leads-to="RS-07">
                                  <strong>{"FK-10139"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Booking.com · BO-301831646"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0201" data-leads-to="RS-18">
                                  <strong>{"Mr Biju Joseph"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"14 – 19 Nov"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--tentative">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Tentative"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹49,329.90"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹49,329.90"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10139" data-leads-to="RS-07" aria-label="Open FK-10139">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "7", "--k2": "1", "--k3": "3", "--k6": "3", "--k7": "3"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10241" />
                              </td>
                              <td className="dt__td" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10241" data-leads-to="RS-07">
                                  <strong>{"FK-10241"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Aviv mobile app · MR-75369481"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0074" data-leads-to="RS-18">
                                  <strong>{"Dr Athira George"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"6 – 11 Jan"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--tentative">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Tentative"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total">{"₹46,628"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹46,628"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10241" data-leads-to="RS-07" aria-label="Open FK-10241">{"Open"}</a>
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
                          <input className="pg-in" type="radio" name="pg4r10" id="pg4r10p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg4r10p1" aria-label="Page 1">{"1"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–7"}</b>
                              {" of 7"}
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
                          <input className="pg-in" type="radio" name="pg4r15" id="pg4r15p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg4r15p1" aria-label="Page 1">{"1"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–7"}</b>
                              {" of 7"}
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
                          <input className="pg-in" type="radio" name="pg4r20" id="pg4r20p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg4r20p1" aria-label="Page 1">{"1"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–7"}</b>
                              {" of 7"}
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
                          <input className="pg-in" type="radio" name="pg4r25" id="pg4r25p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg4r25p1" aria-label="Page 1">{"1"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–7"}</b>
                              {" of 7"}
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
                          <input className="pg-in" type="radio" name="pg4r30" id="pg4r30p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg4r30p1" aria-label="Page 1">{"1"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–7"}</b>
                              {" of 7"}
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
                  <section className="stabs__panel" data-code="RS-06-q4" aria-label="Unassigned">
                    <div className="pgw">
                      <div className="s-scroll">
                        <table className="srt dt__table dt--hug" data-code="RS-06-q4-list" style={{"--srt-cols": "max-content auto auto auto auto auto auto auto max-content"}} data-mc="">
                          <caption className="sr-only">{"Reservations"}</caption>
                          <thead>
                            <tr>
                              <th scope="col" />
                              <th scope="col">
                                <input className="srt-i srt-a1" type="radio" name="strs064" id="strs064-1a" aria-label="Sort by Booking, lowest or A first" />
                                <input className="srt-i srt-d1" type="radio" name="strs064" id="strs064-1d" aria-label="Sort by Booking, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strs064-1a">{"Booking"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strs064-1d" aria-hidden="true">{"Booking"}</label>
                              </th>
                              <th scope="col">
                                <input className="srt-i srt-a2" type="radio" name="strs064" id="strs064-2a" aria-label="Sort by Guest, lowest or A first" />
                                <input className="srt-i srt-d2" type="radio" name="strs064" id="strs064-2d" aria-label="Sort by Guest, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strs064-2a">{"Guest"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strs064-2d" aria-hidden="true">{"Guest"}</label>
                              </th>
                              <th scope="col">{"Stay"}</th>
                              <th scope="col">
                                <input className="srt-i srt-a4" type="radio" name="strs064" id="strs064-4a" aria-label="Sort by Rooms, lowest or A first" />
                                <input className="srt-i srt-d4" type="radio" name="strs064" id="strs064-4d" aria-label="Sort by Rooms, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strs064-4a">{"Rooms"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strs064-4d" aria-hidden="true">{"Rooms"}</label>
                              </th>
                              <th scope="col">
                                <input className="srt-i srt-a5" type="radio" name="strs064" id="strs064-5a" aria-label="Sort by Status, lowest or A first" />
                                <input className="srt-i srt-d5" type="radio" name="strs064" id="strs064-5d" aria-label="Sort by Status, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strs064-5a">{"Status"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strs064-5d" aria-hidden="true">{"Status"}</label>
                              </th>
                              <th scope="col" className="dt__th--right">
                                <input className="srt-i srt-a6" type="radio" name="strs064" id="strs064-6a" aria-label="Sort by Total, lowest or A first" />
                                <input className="srt-i srt-d6" type="radio" name="strs064" id="strs064-6d" aria-label="Sort by Total, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strs064-6a">{"Total"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strs064-6d" aria-hidden="true">{"Total"}</label>
                              </th>
                              <th scope="col" className="dt__th--right">
                                <input className="srt-i srt-a7" type="radio" name="strs064" id="strs064-7a" aria-label="Sort by Balance, lowest or A first" />
                                <input className="srt-i srt-d7" type="radio" name="strs064" id="strs064-7d" aria-label="Sort by Balance, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strs064-7a">{"Balance"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strs064-7d" aria-hidden="true">{"Balance"}</label>
                              </th>
                              <th scope="col" />
                            </tr>
                          </thead>
                          <tbody>
                            <tr style={{"--k1": "1", "--k2": "1", "--k4": "1", "--k5": "1", "--k6": "2", "--k7": "2"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10015" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10015" data-leads-to="RS-07">
                                  <strong>{"FK-10015"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Booking.com · BO-523266015"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0337" data-leads-to="RS-18">
                                  <strong>{"Mr Dileep Kurian"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Gold"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 24 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Confirmed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹24,400.04"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹24,400.04"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10015" data-leads-to="RS-07" aria-label="Open FK-10015">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "2", "--k2": "5", "--k4": "1", "--k5": "2", "--k6": "5", "--k7": "1"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10022" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10022" data-leads-to="RS-07">
                                  <strong>{"FK-10022"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Email"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0052" data-leads-to="RS-18">
                                  <strong>{"Ms Lakshmi Mathew"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 27 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹41,409.04"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹0"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10022" data-leads-to="RS-07" aria-label="Open FK-10022">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "3", "--k2": "2", "--k4": "2", "--k5": "2", "--k6": "4", "--k7": "4"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10039" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10039" data-leads-to="RS-07">
                                  <strong>{"FK-10039"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Expedia · EX-730809750"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0347" data-leads-to="RS-18">
                                  <strong>{"Mr Dileep Pranav"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 23 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"3 × PDLX · –, –, –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹33,980.46"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹33,980.46"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10039" data-leads-to="RS-07" aria-label="Open FK-10039">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "4", "--k2": "7", "--k4": "1", "--k5": "2", "--k6": "3", "--k7": "3"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10089" />
                              </td>
                              <td className="dt__td" data-label="Booking" data-w="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10089" data-leads-to="RS-07">
                                  <strong>{"FK-10089"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"MakeMyTrip / Goibibo · MM-418649606"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0353" data-leads-to="RS-18">
                                  <strong>{"Dr Shruti Manav"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Silver"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 26 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹32,666.46"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹32,666.46"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10089" data-leads-to="RS-07" aria-label="Open FK-10089">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "5", "--k2": "6", "--k4": "1", "--k5": "3", "--k6": "6", "--k7": "5"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10121" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10121" data-leads-to="RS-07">
                                  <strong>{"FK-10121"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Phone"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0268" data-leads-to="RS-18">
                                  <strong>{"Ms Noura Al Saud"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 27 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--tentative">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Tentative"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹42,608.15"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹42,608.15"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10121" data-leads-to="RS-07" aria-label="Open FK-10121">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "6", "--k2": "3", "--k4": "1", "--k5": "3", "--k6": "8", "--k7": "6"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10146" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10146" data-leads-to="RS-07">
                                  <strong>{"FK-10146"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Phone"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0299" data-leads-to="RS-18">
                                  <strong>{"Mr Ganesh Mihir"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 25 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--tentative">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Tentative"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹50,368.30"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹50,368.30"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10146" data-leads-to="RS-07" aria-label="Open FK-10146">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "7", "--k2": "8", "--k4": "1", "--k5": "2", "--k6": "1", "--k7": "1"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10216" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10216" data-leads-to="RS-07">
                                  <strong>{"FK-10216"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Booking.com · BO-293317163"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-w2="" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0017" data-leads-to="RS-18">
                                  <strong>{"Mrs Swathi Sahil"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"VIP"}
                                </span>
                                {" "}
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 23 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹10,028.82"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹0"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10216" data-leads-to="RS-07" aria-label="Open FK-10216">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "8", "--k2": "4", "--k4": "1", "--k5": "2", "--k6": "7", "--k7": "1"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10233" />
                              </td>
                              <td className="dt__td" data-label="Booking" data-w="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10233" data-leads-to="RS-07">
                                  <strong>{"FK-10233"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"MakeMyTrip / Goibibo · MM-930569184"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0247" data-leads-to="RS-18">
                                  <strong>{"Mr Imran Dhruv"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 27 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹49,082.10"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Balance" data-w2="">{"₹0"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10233" data-leads-to="RS-07" aria-label="Open FK-10233">{"Open"}</a>
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
                          <input className="pg-in" type="radio" name="pg5r10" id="pg5r10p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg5r10p1" aria-label="Page 1">{"1"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–8"}</b>
                              {" of 8"}
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
                          <input className="pg-in" type="radio" name="pg5r15" id="pg5r15p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg5r15p1" aria-label="Page 1">{"1"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–8"}</b>
                              {" of 8"}
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
                          <input className="pg-in" type="radio" name="pg5r20" id="pg5r20p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg5r20p1" aria-label="Page 1">{"1"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–8"}</b>
                              {" of 8"}
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
                          <input className="pg-in" type="radio" name="pg5r25" id="pg5r25p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg5r25p1" aria-label="Page 1">{"1"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–8"}</b>
                              {" of 8"}
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
                          <input className="pg-in" type="radio" name="pg5r30" id="pg5r30p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg5r30p1" aria-label="Page 1">{"1"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–8"}</b>
                              {" of 8"}
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
                  <section className="stabs__panel" data-code="RS-06-q5" aria-label="Cancelled / no-show">
                    <div className="pgw">
                      <div className="s-scroll">
                        <table className="srt dt__table dt--hug" data-code="RS-06-q5-list" style={{"--srt-cols": "max-content auto auto auto auto auto auto auto max-content"}} data-mc="">
                          <caption className="sr-only">{"Reservations"}</caption>
                          <thead>
                            <tr>
                              <th scope="col" />
                              <th scope="col">
                                <input className="srt-i srt-a1" type="radio" name="strs065" id="strs065-1a" aria-label="Sort by Booking, lowest or A first" />
                                <input className="srt-i srt-d1" type="radio" name="strs065" id="strs065-1d" aria-label="Sort by Booking, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strs065-1a">{"Booking"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strs065-1d" aria-hidden="true">{"Booking"}</label>
                              </th>
                              <th scope="col">
                                <input className="srt-i srt-a2" type="radio" name="strs065" id="strs065-2a" aria-label="Sort by Guest, lowest or A first" />
                                <input className="srt-i srt-d2" type="radio" name="strs065" id="strs065-2d" aria-label="Sort by Guest, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strs065-2a">{"Guest"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strs065-2d" aria-hidden="true">{"Guest"}</label>
                              </th>
                              <th scope="col">
                                <input className="srt-i srt-a3" type="radio" name="strs065" id="strs065-3a" aria-label="Sort by Stay, lowest or A first" />
                                <input className="srt-i srt-d3" type="radio" name="strs065" id="strs065-3d" aria-label="Sort by Stay, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strs065-3a">{"Stay"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strs065-3d" aria-hidden="true">{"Stay"}</label>
                              </th>
                              <th scope="col">
                                <input className="srt-i srt-a4" type="radio" name="strs065" id="strs065-4a" aria-label="Sort by Rooms, lowest or A first" />
                                <input className="srt-i srt-d4" type="radio" name="strs065" id="strs065-4d" aria-label="Sort by Rooms, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strs065-4a">{"Rooms"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strs065-4d" aria-hidden="true">{"Rooms"}</label>
                              </th>
                              <th scope="col">
                                <input className="srt-i srt-a5" type="radio" name="strs065" id="strs065-5a" aria-label="Sort by Status, lowest or A first" />
                                <input className="srt-i srt-d5" type="radio" name="strs065" id="strs065-5d" aria-label="Sort by Status, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strs065-5a">{"Status"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strs065-5d" aria-hidden="true">{"Status"}</label>
                              </th>
                              <th scope="col" className="dt__th--right">
                                <input className="srt-i srt-a6" type="radio" name="strs065" id="strs065-6a" aria-label="Sort by Total, lowest or A first" />
                                <input className="srt-i srt-d6" type="radio" name="strs065" id="strs065-6d" aria-label="Sort by Total, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strs065-6a">{"Total"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strs065-6d" aria-hidden="true">{"Total"}</label>
                              </th>
                              <th scope="col" className="dt__th--right">{"Balance"}</th>
                              <th scope="col" />
                            </tr>
                          </thead>
                          <tbody>
                            <tr style={{"--k1": "2", "--k2": "13", "--k3": "8", "--k4": "1", "--k5": "1", "--k6": "1"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10017" />
                              </td>
                              <td className="dt__td" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10017" data-leads-to="RS-07">
                                  <strong>{"FK-10017"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Aviv mobile app · MR-65859012"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0191" data-leads-to="RS-18">
                                  <strong>{"Dr Yuki Tanaka"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"26 – 27 Sep"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--cancelled">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x-circle" />
                                  </svg>
                                  {"Cancelled"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total">{"₹0"}</td>
                              <td className="dt__td dt__td--right num nw" data-e="">{"–"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10017" data-leads-to="RS-07" aria-label="Open FK-10017">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "4", "--k2": "12", "--k3": "9", "--k4": "1", "--k5": "1", "--k6": "2"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10049" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10049" data-leads-to="RS-07">
                                  <strong>{"FK-10049"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Booking.com · BO-655461122"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0146" data-leads-to="RS-18">
                                  <strong>{"Dr Swathi Manav"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"29 Sep – 3 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--cancelled">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x-circle" />
                                  </svg>
                                  {"Cancelled"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹7,558.95"}</td>
                              <td className="dt__td dt__td--right num nw" data-e="">{"–"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10049" data-leads-to="RS-07" aria-label="Open FK-10049">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "5", "--k2": "10", "--k3": "1", "--k4": "1", "--k5": "1", "--k6": "1"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10062" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10062" data-leads-to="RS-07">
                                  <strong>{"FK-10062"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Walk-in"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0394" data-leads-to="RS-18">
                                  <strong>{"Mr Suresh Wilson"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Diamond"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"1 – 2 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--cancelled">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x-circle" />
                                  </svg>
                                  {"Cancelled"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total">{"₹0"}</td>
                              <td className="dt__td dt__td--right num nw" data-e="">{"–"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10062" data-leads-to="RS-07" aria-label="Open FK-10062">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "7", "--k2": "4", "--k3": "2", "--k4": "1", "--k5": "1", "--k6": "5"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10087" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10087" data-leads-to="RS-07">
                                  <strong>{"FK-10087"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Aviv website"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0201" data-leads-to="RS-18">
                                  <strong>{"Mr Biju Joseph"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"3 – 7 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--cancelled">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x-circle" />
                                  </svg>
                                  {"Cancelled"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹10,972.82"}</td>
                              <td className="dt__td dt__td--right num nw" data-e="">{"–"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10087" data-leads-to="RS-07" aria-label="Open FK-10087">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "9", "--k2": "1", "--k3": "7", "--k4": "1", "--k5": "1", "--k6": "1"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10113" />
                              </td>
                              <td className="dt__td" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10113" data-leads-to="RS-07">
                                  <strong>{"FK-10113"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Company booking"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0293" data-leads-to="RS-18">
                                  <strong>{"Mr Amit Bijoy"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Platinum"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"22 – 24 Nov"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × DLXS · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--cancelled">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x-circle" />
                                  </svg>
                                  {"Cancelled"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total">{"₹0"}</td>
                              <td className="dt__td dt__td--right num nw" data-e="">{"–"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10113" data-leads-to="RS-07" aria-label="Open FK-10113">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "1", "--k2": "3", "--k3": "5", "--k4": "2", "--k5": "2", "--k6": "7"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10003" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10003" data-leads-to="RS-07">
                                  <strong>{"FK-10003"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Email"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0316" data-leads-to="RS-18">
                                  <strong>{"Dr Ayesha Pavan"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Member"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"9 – 12 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"2 × PRMS · –, –"}</td>
                              <td className="dt__td" data-label="Status">
                                <span className="pill pill--ooo">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#user-x" />
                                  </svg>
                                  {"No-show"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹56,071.24"}</td>
                              <td className="dt__td dt__td--right num nw" data-e="">{"–"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10003" data-leads-to="RS-07" aria-label="Open FK-10003">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "3", "--k2": "2", "--k3": "2", "--k4": "1", "--k5": "2", "--k6": "3"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10041" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10041" data-leads-to="RS-07">
                                  <strong>{"FK-10041"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Travel agent"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0054" data-leads-to="RS-18">
                                  <strong>{"Dr Anjali Mathew"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"3 – 6 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ooo">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#user-x" />
                                  </svg>
                                  {"No-show"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹7,575.75"}</td>
                              <td className="dt__td dt__td--right num nw" data-e="">{"–"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10041" data-leads-to="RS-07" aria-label="Open FK-10041">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "6", "--k2": "5", "--k3": "5", "--k4": "1", "--k5": "2", "--k6": "4"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10064" />
                              </td>
                              <td className="dt__td" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10064" data-leads-to="RS-07">
                                  <strong>{"FK-10064"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Aviv mobile app · MR-10229644"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0066" data-leads-to="RS-18">
                                  <strong>{"Ms Fatima Al Mansoori"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Silver"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"9 – 10 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · –"}</td>
                              <td className="dt__td" data-label="Status">
                                <span className="pill pill--ooo">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#user-x" />
                                  </svg>
                                  {"No-show"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹9,875.42"}</td>
                              <td className="dt__td dt__td--right num nw" data-e="">{"–"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10064" data-leads-to="RS-07" aria-label="Open FK-10064">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "8", "--k2": "6", "--k3": "5", "--k4": "2", "--k5": "2", "--k6": "6"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10095" />
                              </td>
                              <td className="dt__td" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10095" data-leads-to="RS-07">
                                  <strong>{"FK-10095"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Aviv mobile app · MR-44171837"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0136" data-leads-to="RS-18">
                                  <strong>{"Mr Jayan Dev"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"9 – 12 Oct"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"2 × GDLX · –, –"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ooo">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#user-x" />
                                  </svg>
                                  {"No-show"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total" data-w2="">{"₹20,765.64"}</td>
                              <td className="dt__td dt__td--right num nw" data-e="">{"–"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10095" data-leads-to="RS-07" aria-label="Open FK-10095">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "11", "--k2": "7", "--k3": "6", "--k4": "1", "--k5": "1", "--k6": "1"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10131" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10131" data-leads-to="RS-07">
                                  <strong>{"FK-10131"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Walk-in"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0139" data-leads-to="RS-18">
                                  <strong>{"Mrs Jyoti Sagar"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"12 – 16 Dec"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--cancelled">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x-circle" />
                                  </svg>
                                  {"Cancelled"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total">{"₹0"}</td>
                              <td className="dt__td dt__td--right num nw" data-e="">{"–"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10131" data-leads-to="RS-07" aria-label="Open FK-10131">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "12", "--k2": "9", "--k3": "4", "--k4": "2", "--k5": "1", "--k6": "1"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10221" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10221" data-leads-to="RS-07">
                                  <strong>{"FK-10221"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Phone"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0231" data-leads-to="RS-18">
                                  <strong>{"Ms Priya Neil"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Diamond"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"7 – 11 Dec"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"2 × PDLX · –, –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--cancelled">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x-circle" />
                                  </svg>
                                  {"Cancelled"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total">{"₹0"}</td>
                              <td className="dt__td dt__td--right num nw" data-e="">{"–"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10221" data-leads-to="RS-07" aria-label="Open FK-10221">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "13", "--k2": "8", "--k3": "3", "--k4": "1", "--k5": "1", "--k6": "1"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10236" />
                              </td>
                              <td className="dt__td" data-label="Booking" data-w="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10236" data-leads-to="RS-07">
                                  <strong>{"FK-10236"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"MakeMyTrip / Goibibo · MM-622122832"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Guest" data-w2="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0291" data-leads-to="RS-18">
                                  <strong>{"Ms Kavita Siddharth"}</strong>
                                </a>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"4 – 7 Dec"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × PDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--cancelled">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x-circle" />
                                  </svg>
                                  {"Cancelled"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total">{"₹0"}</td>
                              <td className="dt__td dt__td--right num nw" data-e="">{"–"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10236" data-leads-to="RS-07" aria-label="Open FK-10236">{"Open"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k1": "10", "--k2": "11", "--k3": "10", "--k4": "1", "--k5": "1", "--k6": "1"}}>
                              <td className="dt__td nw" data-sel="">
                                <input type="checkbox" aria-label="Select FK-10126" />
                              </td>
                              <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                <a href="/reservation/rs-07-reservation-details/#FK-10126" data-leads-to="RS-07">
                                  <strong>{"FK-10126"}</strong>
                                </a>
                                <br />
                                <span className="field__hint">{"Agoda · AG-228043732"}</span>
                              </td>
                              <td className="dt__td" data-label="Guest" data-s="">
                                <a href="/reservation/rs-18-guest-profile/#GP-0208" data-leads-to="RS-18">
                                  <strong>{"Ms Swathi Chirag"}</strong>
                                </a>
                                {" "}
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Aviv Club Member"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-label="Stay" data-w2="">{"29 Oct – 1 Nov"}</td>
                              <td className="dt__td nw" data-label="Rooms" data-w2="">{"1 × GDLX · –"}</td>
                              <td className="dt__td" data-label="Status" data-w2="">
                                <span className="pill pill--cancelled">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#x-circle" />
                                  </svg>
                                  {"Cancelled"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right num nw" data-label="Total">{"₹0"}</td>
                              <td className="dt__td dt__td--right num nw" data-e="">{"–"}</td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10126" data-leads-to="RS-07" aria-label="Open FK-10126">{"Open"}</a>
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
                          <input className="pg-in" type="radio" name="pg6r10" id="pg6r10p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg6r10p1" aria-label="Page 1">{"1"}</label>
                          <input className="pg-in" type="radio" name="pg6r10" id="pg6r10p2" />
                          <label className="pg-n" htmlFor="pg6r10p2" aria-label="Page 2">{"2"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–10"}</b>
                              {" of 13"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"11–13"}</b>
                              {" of 13"}
                            </span>
                          </span>
                          <span className="pg-prev">
                            <span className="pg-arr is-off">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-left" />
                              </svg>
                            </span>
                            <label className="pg-arr" htmlFor="pg6r10p1" title="Previous page">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-left" />
                              </svg>
                            </label>
                          </span>
                          <span className="pg-next">
                            <label className="pg-arr" htmlFor="pg6r10p2" title="Next page">
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
                          <input className="pg-in" type="radio" name="pg6r15" id="pg6r15p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg6r15p1" aria-label="Page 1">{"1"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–13"}</b>
                              {" of 13"}
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
                          <input className="pg-in" type="radio" name="pg6r20" id="pg6r20p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg6r20p1" aria-label="Page 1">{"1"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–13"}</b>
                              {" of 13"}
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
                          <input className="pg-in" type="radio" name="pg6r25" id="pg6r25p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg6r25p1" aria-label="Page 1">{"1"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–13"}</b>
                              {" of 13"}
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
                          <input className="pg-in" type="radio" name="pg6r30" id="pg6r30p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg6r30p1" aria-label="Page 1">{"1"}</label>
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–13"}</b>
                              {" of 13"}
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
              <p className="s-pager">
                <span>{"247 bookings in the system · showing the 128 nearest to today"}</span>
              </p>
              <div className="modal modal--sm" id="RS-06a" data-code="RS-06a" role="dialog" aria-modal="true" aria-labelledby="RS-06a-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RS-06a-t">{"Save filter view"}</h2>
                      <p className="modal__desc">{"Keeps the current filters as a named list"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <label className="field__label" htmlFor="f1925">
                        {"Name "}
                        <span className="field__req">{"*"}</span>
                      </label>
                      <input className="field__input" id="f1925" type="text" required={true} defaultValue={"Unpaid arrivals this week"} />
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Show as a tab with a count"}
                    </label>
                    <label className="sw">
                      <input type="checkbox" role="switch" />
                      <span className="sw__track" />
                      {"Share with the team"}
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save view"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--md" id="RS-06-export" data-code="RS-06-export" role="dialog" aria-modal="true" aria-labelledby="RS-06-export-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RS-06-export-t">{"Export reservations"}</h2>
                      <p className="modal__desc">{"Choose the dates and which bookings go into the file – arrivals, departures, bookings made in a period, agents and corporates."}</p>
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
                        <span className="field__label">{"What to export"}</span>
                        <select className="field__input field__input--select" defaultValue={"All bookings in these dates"}>
                          <option>{"All bookings in these dates"}</option>
                          <option>{"Arrivals"}</option>
                          <option>{"Departures"}</option>
                          <option>{"In house"}</option>
                          <option>{"Bookings made (created) in these dates"}</option>
                          <option>{"Cancellations"}</option>
                          <option>{"No-shows"}</option>
                          <option>{"Tentative and waitlist"}</option>
                        </select>
                      </label>
                      <label className="field">
                        <span className="field__label">{"Dates apply to"}</span>
                        <select className="field__input field__input--select" defaultValue={"Arrival date"}>
                          <option>{"Arrival date"}</option>
                          <option>{"Departure date"}</option>
                          <option>{"Stay date (any night in the range)"}</option>
                          <option>{"Booking date"}</option>
                          <option>{"Cancellation date"}</option>
                        </select>
                      </label>
                      <label className="field">
                        <span className="field__label">{"From"}</span>
                        <input className="field__input num" type="date" defaultValue={"2026-10-22"} />
                      </label>
                      <label className="field">
                        <span className="field__label">{"To"}</span>
                        <input className="field__input num" type="date" defaultValue={"2026-10-31"} />
                      </label>
                      <label className="field">
                        <span className="field__label">{"Status"}</span>
                        <select className="field__input field__input--select" defaultValue={"All statuses"}>
                          <option>{"All statuses"}</option>
                          <option>{"Confirmed"}</option>
                          <option>{"Guaranteed"}</option>
                          <option>{"Tentative"}</option>
                          <option>{"In house"}</option>
                          <option>{"Checked out"}</option>
                          <option>{"Cancelled"}</option>
                          <option>{"No-show"}</option>
                          <option>{"Waitlist"}</option>
                        </select>
                      </label>
                      <label className="field">
                        <span className="field__label">{"Agent / corporate"}</span>
                        <select className="field__input field__input--select" defaultValue={"All agents and corporates"}>
                          <option>{"All agents and corporates"}</option>
                          <option>{"Cochin Marine Services Ltd (CMS)"}</option>
                          <option>{"Malabar Spice Exports Pvt Ltd (MSE)"}</option>
                          <option>{"Periyar Infotech Solutions (PIS)"}</option>
                          <option>{"Kerala Holidays & Tours"}</option>
                          <option>{"Backwater Trails DMC"}</option>
                        </select>
                      </label>
                      <label className="field">
                        <span className="field__label">{"Source / channel"}</span>
                        <select className="field__input field__input--select" defaultValue={"All sources and channels"}>
                          <option>{"All sources and channels"}</option>
                          <option>{"Aviv mobile app"}</option>
                          <option>{"Aviv website"}</option>
                          <option>{"Booking.com"}</option>
                          <option>{"Expedia"}</option>
                          <option>{"MakeMyTrip / Goibibo"}</option>
                          <option>{"Agoda"}</option>
                          <option>{"Phone"}</option>
                          <option>{"E-mail"}</option>
                          <option>{"Walk-in"}</option>
                          <option>{"Travel agent"}</option>
                          <option>{"Corporate"}</option>
                          <option>{"EaseMyTrip"}</option>
                          <option>{"Trip.com"}</option>
                          <option>{"WhatsApp"}</option>
                          <option>{"Company booking"}</option>
                        </select>
                      </label>
                      <label className="field">
                        <span className="field__label">{"Room type"}</span>
                        <select className="field__input field__input--select" defaultValue={"All room types"}>
                          <option>{"All room types"}</option>
                          <option>{"GDLX · Garden Deluxe Room"}</option>
                          <option>{"PDLX · Pool Deluxe Room"}</option>
                          <option>{"DLXS · Deluxe Suite"}</option>
                          <option>{"PRMS · Premium Suite"}</option>
                        </select>
                      </label>
                      <label className="field">
                        <span className="field__label">{"Meal plan"}</span>
                        <select className="field__input field__input--select" defaultValue={"All meal plans"}>
                          <option>{"All meal plans"}</option>
                          <option>{"EP"}</option>
                          <option>{"CP"}</option>
                          <option>{"MAP"}</option>
                          <option>{"AP"}</option>
                        </select>
                      </label>
                      <label className="field">
                        <span className="field__label">{"Booked by"}</span>
                        <select className="field__input field__input--select" defaultValue={"Anyone"}>
                          <option>{"Anyone"}</option>
                          <option>{"Anita Mohan"}</option>
                          <option>{"Rahul Vijay"}</option>
                          <option>{"Sneha Joseph"}</option>
                          <option>{"Thomas Kurian"}</option>
                        </select>
                      </label>
                      <label className="field">
                        <span className="field__label">{"Columns"}</span>
                        <select className="field__input field__input--select" defaultValue={"As shown on screen"}>
                          <option>{"As shown on screen"}</option>
                          <option>{"All columns"}</option>
                          <option>{"Front-desk sheet (booking, guest, room, ETA, balance)"}</option>
                          <option>{"Accounts sheet (booking, company, rate, advance, balance)"}</option>
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
                  <span className="code-chip">{"RS-06"}</span>
                </summary>
                <dl className="helpbox__body">
                  <dt>{"What it is for"}</dt>
                  <dd>{"Find bookings; ready lists (arrivals, departures, unpaid advances…)"}</dd>
                  <dt>{"Opened from"}</dt>
                  <dd>
                    <Link to={"/reservation/rs-01-reservation-dashboard"}>{"RS-01"}</Link>
                    {", global search, menu"}
                  </dd>
                  <dt>{"Leads to"}</dt>
                  <dd>
                    <Link to={"/reservation/rs-07-reservation-details"}>{"RS-07"}</Link>
                    {", "}
                    <Link to={"/reservation/rs-05-new-reservation"}>{"RS-05"}</Link>
                    {", "}
                    <Link to={"/reservation/rs-09-room-assignment"}>{"RS-09"}</Link>
                    {", "}
                    <Link to={"/reservation/rs-11-confirmation-and-voucher"}>{"RS-11"}</Link>
                    {", "}
                    <Link to={"/reservation/rs-12-cancellation"}>{"RS-12"}</Link>
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
