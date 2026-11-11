// GENERATED from public/reservation/rs-16-waitlist/index.html by scripts/convert_legacy.py.
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
    "href": "/reservation/rs-16-waitlist/rs-16-waitlist.css",
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

export default function ReservationRs16Waitlist() {
  return (
    <ScreenShell title="Waitlist" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="RS-16" data-code="RS-16" data-static="1" className="legacy-body">
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
                  <Link className="nav__item" data-nav="RS-14" title="Group Reservation" to={"/reservation/rs-14-group-reservation"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#users" />
                    </svg>
                    <span className="nav__label">{"Groups"}</span>
                  </Link>
                  <Link className="nav__item is-active" data-nav="RS-16" aria-current="page" title="Waitlist" to={"/reservation/rs-16-waitlist"}>
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
            <main className="app__content" id="main" data-code="RS-16" tabIndex="-1">
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
                        <span aria-current="page">{"Waitlist"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">{"Waitlist"}</h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"RS-16"}</span>
                  <div className="page-header__filters">
                    <div className="hctl">
                      <div className="hsearch">
                        <input className="hsearch__input" id="hs143" type="search" name="q" placeholder="Search guest" aria-label="Search guest" autoComplete="off" />
                        <label className="hsearch__ic" htmlFor="hs143" title="Search">
                          <svg className="icon" width="17" height="17" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#search" />
                          </svg>
                          <span className="sr-only">{"Search"}</span>
                        </label>
                      </div>
                      <label className="hfilter__btn" htmlFor="hf144" title="Show or hide the filters">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#filter" />
                        </svg>
                        <span>{"Filter"}</span>
                        <i className="hfilter__dot" aria-hidden="true" />
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </label>
                      <input className="hfilter__tg" type="checkbox" id="hf144" aria-label="Show filters" />
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
                              <option>{"Active"}</option>
                              <option>{"Offered"}</option>
                              <option>{"Converted"}</option>
                              <option>{"Expired"}</option>
                              <option>{"Removed"}</option>
                            </select>
                            <svg className="icon hf-f__chev" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                          <label className="hf-f ">
                            <span className="hf-f__l">{"Room type"}</span>
                            <select className="hf-f__c">
                              <option>{"All room types"}</option>
                              <option>{"GDLX"}</option>
                              <option>{"PDLX"}</option>
                              <option>{"DLXS"}</option>
                              <option>{"PRMS"}</option>
                            </select>
                            <svg className="icon hf-f__chev" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
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
                          <label className="hfilter__done" htmlFor="hf144">
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
                    <a className="btn" href="#RS-O12-WL-0001" data-flow="opener">{"Room-available message"}</a>
                    <a className="btn" href="#RS-O12-WL-0002" data-flow="opener">{"Room-available message"}</a>
                    <a className="btn" href="#RS-O12-WL-0003" data-flow="opener">{"Room-available message"}</a>
                    <a className="btn" href="#RS-O12-WL-0004" data-flow="opener">{"Room-available message"}</a>
                    <a className="btn" href="#RS-O12-WL-0005" data-flow="opener">{"Room-available message"}</a>
                    <a className="btn" href="#RS-O12-WL-0006" data-flow="opener">{"Room-available message"}</a>
                    <a className="btn btn--primary" href="#RS-16a-new" data-opens="RS-16a">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#plus" />
                      </svg>
                      {"Add to waitlist"}
                    </a>
                  </div>
                </div>
              </header>
              <div className="s-note wl-opt" data-code="RS-16-option">
                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#info" />
                </svg>
                <span>
                  <b>{"Over-booking and waitlist are on for this hotel."}</b>
                  {" They are optional: when switched off in "}
                  <Link data-leads-to="RSS-11" to={"/setup/rss-11-inventory-and-overbooking"}>{"hotel setup"}</Link>
                  {", this screen leaves the menu and a booking with no free room only offers other dates or room types."}
                </span>
              </div>
              <section className="card wl-route" data-code="RS-16-route">
                <div className="wl-route__h">
                  <h2 className="s-card-title">{"When no room is free"}</h2>
                  <a className="btn btn--xs" href="/reservation/rs-05-new-reservation/#RS-05-nort" data-leads-to="RS-05">{"See the booking step"}</a>
                </div>
                <ol className="wl-route__s">
                  <li>
                    <b>{"Reservation person"}</b>
                    <span>{"Confirms the over-booking on the booking screen"}</span>
                  </li>
                  <li>
                    <b>{"Sales Manager"}</b>
                    <span>{"First approver"}</span>
                  </li>
                  <li>
                    <b>{"Front Office Manager"}</b>
                    <span>{"If the Sales Manager is away or the limit is above that level"}</span>
                  </li>
                  <li>
                    <b>{"General Manager"}</b>
                    <span>{"Above that limit, or more than 2 rooms over-booked on a night"}</span>
                  </li>
                </ol>
                <p className="field__hint">
                  {"Requests wait in "}
                  <Link data-leads-to="RS-20" to={"/reservation/rs-20-approvals"}>{"Approvals"}</Link>
                  {". An overdue request moves up to the next approver. A waitlist entry is kept for the hours set in hotel setup, then cancelled and the guest is told."}
                </p>
              </section>
              <div className="pgw">
                <div className="s-scroll">
                  <table className="srt dt__table wl-table dt--hug" data-code="RS-16-list" style={{"--srt-cols": "minmax(180px,1fr) auto minmax(130px,auto) auto auto minmax(150px,190px) max-content"}} data-mc="">
                    <caption className="sr-only">{"Waitlist"}</caption>
                    <thead>
                      <tr>
                        <th scope="col">
                          <input className="srt-i srt-a0" type="radio" name="strs160" id="strs160-0a" aria-label="Sort by Guest, lowest or A first" />
                          <input className="srt-i srt-d0" type="radio" name="strs160" id="strs160-0d" aria-label="Sort by Guest, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="strs160-0a">{"Guest"}</label>
                          <label className="srt-l srt-l--d" htmlFor="strs160-0d" aria-hidden="true">{"Guest"}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a1" type="radio" name="strs160" id="strs160-1a" aria-label="Sort by Room type, lowest or A first" />
                          <input className="srt-i srt-d1" type="radio" name="strs160" id="strs160-1d" aria-label="Sort by Room type, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="strs160-1a">{"Room type"}</label>
                          <label className="srt-l srt-l--d" htmlFor="strs160-1d" aria-hidden="true">{"Room type"}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a2" type="radio" name="strs160" id="strs160-2a" aria-label="Sort by Stay, lowest or A first" />
                          <input className="srt-i srt-d2" type="radio" name="strs160" id="strs160-2d" aria-label="Sort by Stay, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="strs160-2a">{"Stay"}</label>
                          <label className="srt-l srt-l--d" htmlFor="strs160-2d" aria-hidden="true">{"Stay"}</label>
                        </th>
                        <th scope="col">{"Fewest free"}</th>
                        <th scope="col">{"Status"}</th>
                        <th scope="col">{"Approval"}</th>
                        <th scope="col" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{"--k0": "4", "--k1": "1", "--k2": "1"}}>
                        <td className="dt__td" data-label="Guest" data-w="" data-t="">
                          <strong>{"Rekha Prem"}</strong>
                          {" "}
                          <span className="pill pill--tentative">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#star" />
                            </svg>
                            {"High priority"}
                          </span>
                          <br />
                          <span className="field__hint">{"+91 7033191302 · added 19 Oct 14:01"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Room type" data-w2="">
                          <strong>{"DLXS"}</strong>
                          <br />
                          <span className="field__hint">{"Deluxe Suite"}</span>
                        </td>
                        <td className="dt__td" data-label="Stay">
                          {"3 – 6 Nov"}
                          <br />
                          <span className="field__hint">{"1 room · 2 adults · valid until 29 Oct"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Fewest free" data-w2="">
                          <strong>{"0"}</strong>
                          {" free"}
                        </td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Approval">
                          <span className="pill pill--tentative">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"Awaiting approval"}
                          </span>
                          <br />
                          <span className="field__hint">{"With Sales Manager"}</span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <div className="row row--end">
                            <a className="btn" href="#RS-16a-WL-0001" data-opens="RS-16a">{"Edit"}</a>
                            <a className="btn" href="#RS-16b-WL-0001" data-opens="RS-16b">{"Remove"}</a>
                          </div>
                        </td>
                      </tr>
                      <tr style={{"--k0": "2", "--k1": "1", "--k2": "1"}}>
                        <td className="dt__td" data-label="Guest" data-w="" data-t="">
                          <strong>{"Daniel Hughes"}</strong>
                          {" "}
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"Normal"}
                          </span>
                          <br />
                          <span className="field__hint">{"+91 8070580116 · added 20 Oct 15:52"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Room type" data-w2="">
                          <strong>{"DLXS"}</strong>
                          <br />
                          <span className="field__hint">{"Deluxe Suite"}</span>
                        </td>
                        <td className="dt__td" data-label="Stay">
                          {"3 – 5 Nov"}
                          <br />
                          <span className="field__hint">{"1 room · 2 adults · valid until 29 Oct"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Fewest free" data-w2="">
                          <strong>{"0"}</strong>
                          {" free"}
                        </td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Approval">
                          <span className="pill pill--tentative">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"Awaiting approval"}
                          </span>
                          <br />
                          <span className="field__hint">{"Overdue, moved to Front Office Manager"}</span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <div className="row row--end">
                            <a className="btn" href="#RS-16a-WL-0002" data-opens="RS-16a">{"Edit"}</a>
                            <a className="btn" href="#RS-16b-WL-0002" data-opens="RS-16b">{"Remove"}</a>
                          </div>
                        </td>
                      </tr>
                      <tr style={{"--k0": "1", "--k1": "1", "--k2": "2"}}>
                        <td className="dt__td" data-label="Guest" data-w="" data-t="">
                          <strong>{"Arvind Shaan"}</strong>
                          {" "}
                          <span className="pill pill--tentative">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#star" />
                            </svg>
                            {"High priority"}
                          </span>
                          <br />
                          <span className="field__hint">{"+91 9045572697 · added 21 Oct 09:46"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Room type" data-w2="">
                          <strong>{"DLXS"}</strong>
                          <br />
                          <span className="field__hint">{"Deluxe Suite"}</span>
                        </td>
                        <td className="dt__td" data-label="Stay">
                          {"4 – 6 Nov"}
                          <br />
                          <span className="field__hint">{"1 room · 2 adults · valid until 29 Oct"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Fewest free" data-w2="">
                          <strong>{"0"}</strong>
                          {" free"}
                        </td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Approval">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check" />
                            </svg>
                            {"Approved"}
                          </span>
                          <br />
                          <span className="field__hint">{"Sales Manager, 21 Oct"}</span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <div className="row row--end">
                            <a className="btn" href="#RS-16a-WL-0003" data-opens="RS-16a">{"Edit"}</a>
                            <a className="btn" href="#RS-16b-WL-0003" data-opens="RS-16b">{"Remove"}</a>
                          </div>
                        </td>
                      </tr>
                      <tr style={{"--k0": "3", "--k1": "2", "--k2": "1"}}>
                        <td className="dt__td" data-label="Guest" data-w="" data-t="">
                          <strong>{"Meenakshi Ishaan"}</strong>
                          {" "}
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"Normal"}
                          </span>
                          <br />
                          <span className="field__hint">{"+91 9078326259 · added 18 Oct 13:15"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Room type" data-w2="">
                          <strong>{"PRMS"}</strong>
                          <br />
                          <span className="field__hint">{"Premium Suite"}</span>
                        </td>
                        <td className="dt__td" data-label="Stay">
                          {"3 – 6 Nov"}
                          <br />
                          <span className="field__hint">{"1 room · 2 adults · valid until 29 Oct"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Fewest free" data-w2="">
                          <strong>{"0"}</strong>
                          {" free"}
                        </td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Approval">
                          <span className="pill pill--tentative">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"Awaiting approval"}
                          </span>
                          <br />
                          <span className="field__hint">{"With General Manager, more than 2 rooms on a night"}</span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <div className="row row--end">
                            <a className="btn" href="#RS-16a-WL-0004" data-opens="RS-16a">{"Edit"}</a>
                            <a className="btn" href="#RS-16b-WL-0004" data-opens="RS-16b">{"Remove"}</a>
                          </div>
                        </td>
                      </tr>
                      <tr style={{"--k0": "6", "--k1": "1", "--k2": "1"}}>
                        <td className="dt__td" data-label="Guest" data-w="" data-t="">
                          <strong>{"Thomas Abraham"}</strong>
                          {" "}
                          <span className="pill pill--tentative">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#star" />
                            </svg>
                            {"High priority"}
                          </span>
                          <br />
                          <span className="field__hint">{"+91 7079210322 · added 16 Oct 17:59"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Room type" data-w2="">
                          <strong>{"DLXS"}</strong>
                          <br />
                          <span className="field__hint">{"Deluxe Suite"}</span>
                        </td>
                        <td className="dt__td" data-label="Stay">
                          {"3 – 6 Nov"}
                          <br />
                          <span className="field__hint">{"1 room · 2 adults · valid until 29 Oct"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Fewest free" data-w2="">
                          <strong>{"0"}</strong>
                          {" free"}
                        </td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Approval">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check" />
                            </svg>
                            {"Approved"}
                          </span>
                          <br />
                          <span className="field__hint">{"Front Office Manager, 19 Oct"}</span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <div className="row row--end">
                            <a className="btn" href="#RS-16a-WL-0005" data-opens="RS-16a">{"Edit"}</a>
                            <a className="btn" href="#RS-16b-WL-0005" data-opens="RS-16b">{"Remove"}</a>
                          </div>
                        </td>
                      </tr>
                      <tr style={{"--k0": "5", "--k1": "2", "--k2": "3"}}>
                        <td className="dt__td" data-label="Guest" data-w="" data-t="">
                          <strong>{"Sandra Mueller"}</strong>
                          {" "}
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"Normal"}
                          </span>
                          <br />
                          <span className="field__hint">{"+91 7042582560 · added 8 Oct 15:24"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Room type" data-w2="">
                          <strong>{"PRMS"}</strong>
                          <br />
                          <span className="field__hint">{"Premium Suite"}</span>
                        </td>
                        <td className="dt__td" data-label="Stay">
                          {"25 – 28 Oct"}
                          <br />
                          <span className="field__hint">{"1 room · 2 adults · valid until 29 Oct"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Fewest free" data-w2="">
                          <strong>{"0"}</strong>
                          {" free"}
                        </td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Approval" data-w="">
                          <span className="pill pill--cancelled">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#x" />
                            </svg>
                            {"Declined"}
                          </span>
                          <br />
                          <span className="field__hint">{"General Manager, 24 Oct: stays on the waitlist, no over-booking"}</span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <div className="row row--end">
                            <a className="btn" href="#RS-16a-WL-0006" data-opens="RS-16a">{"Edit"}</a>
                            <a className="btn" href="#RS-16b-WL-0006" data-opens="RS-16b">{"Remove"}</a>
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
                    <input className="pg-in" type="radio" name="pg1r15" id="pg1r15p1" defaultChecked={true} />
                    <label className="pg-n" htmlFor="pg1r15p1" aria-label="Page 1">{"1"}</label>
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
                    <input className="pg-in" type="radio" name="pg1r20" id="pg1r20p1" defaultChecked={true} />
                    <label className="pg-n" htmlFor="pg1r20p1" aria-label="Page 1">{"1"}</label>
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
                    <input className="pg-in" type="radio" name="pg1r25" id="pg1r25p1" defaultChecked={true} />
                    <label className="pg-n" htmlFor="pg1r25p1" aria-label="Page 1">{"1"}</label>
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
                    <input className="pg-in" type="radio" name="pg1r30" id="pg1r30p1" defaultChecked={true} />
                    <label className="pg-n" htmlFor="pg1r30p1" aria-label="Page 1">{"1"}</label>
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
              <div className="s-note">
                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#info" />
                </svg>
                <span>
                  {"When a cancellation frees rooms, matching entries light up. The room is "}
                  <strong>{"not"}</strong>
                  {" given to every matching guest: the first entry by priority gets the offer – either staff are told, or the guest is offered the room with a timed hold that ends by itself. Booking from an entry checks availability again and closes the entry only after the booking is saved. The night audit closes only entries whose own validity date has passed; a request for future dates stays active."}
                </span>
              </div>
              <div className="modal" id="RS-16a-WL-0001" data-code="RS-16a" role="dialog" aria-modal="true" aria-labelledby="RS-16a-WL-0001-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RS-16a-WL-0001-t">{"Waitlist entry"}</h2>
                      <p className="modal__desc">{"WL-0001"}</p>
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
                        <label className="field__label" htmlFor="f59">
                          {"Guest name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f59" type="text" required={true} defaultValue={"Rekha Prem"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f60">
                          {"Mobile "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f60" type="tel" required={true} defaultValue={"+91 7033191302"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f61">{"Room type"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f61" defaultValue={"Deluxe Suite"}>
                            <option>{"Garden Deluxe Room"}</option>
                            <option>{"Pool Deluxe Room"}</option>
                            <option>{"Deluxe Suite"}</option>
                            <option>{"Premium Suite"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f62">{"Arrival"}</label>
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
                              <select className="dpk-m" name="f62-month" aria-label="Month" defaultValue={"11"}>
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
                              <select className="dpk-y" name="f62-year" aria-label="Year" defaultValue={"2026"}>
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
                                <input type="radio" name="f62" value="01" />
                                {"1"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f62" value="02" />
                                {"2"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f62" value="03" defaultChecked={true} />
                                {"3"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f62" value="04" />
                                {"4"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f62" value="05" />
                                {"5"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f62" value="06" />
                                {"6"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f62" value="07" />
                                {"7"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f62" value="08" />
                                {"8"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f62" value="09" />
                                {"9"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f62" value="10" />
                                {"10"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f62" value="11" />
                                {"11"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f62" value="12" />
                                {"12"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f62" value="13" />
                                {"13"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f62" value="14" />
                                {"14"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f62" value="15" />
                                {"15"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f62" value="16" />
                                {"16"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f62" value="17" />
                                {"17"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f62" value="18" />
                                {"18"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f62" value="19" />
                                {"19"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f62" value="20" />
                                {"20"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f62" value="21" />
                                {"21"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f62" value="22" />
                                {"22"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f62" value="23" />
                                {"23"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f62" value="24" />
                                {"24"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f62" value="25" />
                                {"25"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f62" value="26" />
                                {"26"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f62" value="27" />
                                {"27"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f62" value="28" />
                                {"28"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f62" value="29" />
                                {"29"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f62" value="30" />
                                {"30"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f62" value="31" />
                                {"31"}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f63">{"Departure"}</label>
                        <div className="dpk">
                          <button type="button" className="dpk-f field__input" id="f63" aria-haspopup="dialog">
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
                              <select className="dpk-m" name="f63-month" aria-label="Month" defaultValue={"11"}>
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
                              <select className="dpk-y" name="f63-year" aria-label="Year" defaultValue={"2026"}>
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
                                <input type="radio" name="f63" value="01" />
                                {"1"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f63" value="02" />
                                {"2"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f63" value="03" />
                                {"3"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f63" value="04" />
                                {"4"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f63" value="05" />
                                {"5"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f63" value="06" defaultChecked={true} />
                                {"6"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f63" value="07" />
                                {"7"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f63" value="08" />
                                {"8"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f63" value="09" />
                                {"9"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f63" value="10" />
                                {"10"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f63" value="11" />
                                {"11"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f63" value="12" />
                                {"12"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f63" value="13" />
                                {"13"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f63" value="14" />
                                {"14"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f63" value="15" />
                                {"15"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f63" value="16" />
                                {"16"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f63" value="17" />
                                {"17"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f63" value="18" />
                                {"18"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f63" value="19" />
                                {"19"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f63" value="20" />
                                {"20"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f63" value="21" />
                                {"21"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f63" value="22" />
                                {"22"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f63" value="23" />
                                {"23"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f63" value="24" />
                                {"24"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f63" value="25" />
                                {"25"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f63" value="26" />
                                {"26"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f63" value="27" />
                                {"27"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f63" value="28" />
                                {"28"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f63" value="29" />
                                {"29"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f63" value="30" />
                                {"30"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f63" value="31" />
                                {"31"}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f64">{"Adults"}</label>
                        <input className="field__input num" id="f64" type="number" defaultValue={"2"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f65">{"Rooms"}</label>
                        <input className="field__input num" id="f65" type="number" defaultValue={"1"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f66">{"Valid until"}</label>
                        <div className="dpk">
                          <button type="button" className="dpk-f field__input" id="f66" aria-haspopup="dialog">
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
                              <select className="dpk-m" name="f66-month" aria-label="Month" defaultValue={"10"}>
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
                              <select className="dpk-y" name="f66-year" aria-label="Year" defaultValue={"2026"}>
                                <option value="2024" className="lp">{"2024"}</option>
                                <option value="2025">{"2025"}</option>
                                <option value="2026">{"2026"}</option>
                                <option value="2027">{"2027"}</option>
                                <option value="2028" className="lp">{"2028"}</option>
                                <option value="2029">{"2029"}</option>
                                <option value="2030">{"2030"}</option>
                                <option value="2031">{"2031"}</option>
                                <option value="2032" className="lp">{"2032"}</option>
                                <option value="2033">{"2033"}</option>
                                <option value="2034">{"2034"}</option>
                                <option value="2035">{"2035"}</option>
                                <option value="2036" className="lp">{"2036"}</option>
                                <option value="2037">{"2037"}</option>
                                <option value="2038">{"2038"}</option>
                                <option value="2039">{"2039"}</option>
                                <option value="2040" className="lp">{"2040"}</option>
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
                                <input type="radio" name="f66" value="01" />
                                {"1"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f66" value="02" />
                                {"2"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f66" value="03" />
                                {"3"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f66" value="04" />
                                {"4"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f66" value="05" />
                                {"5"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f66" value="06" />
                                {"6"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f66" value="07" />
                                {"7"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f66" value="08" />
                                {"8"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f66" value="09" />
                                {"9"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f66" value="10" />
                                {"10"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f66" value="11" />
                                {"11"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f66" value="12" />
                                {"12"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f66" value="13" />
                                {"13"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f66" value="14" />
                                {"14"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f66" value="15" />
                                {"15"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f66" value="16" />
                                {"16"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f66" value="17" />
                                {"17"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f66" value="18" />
                                {"18"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f66" value="19" />
                                {"19"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f66" value="20" />
                                {"20"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f66" value="21" />
                                {"21"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f66" value="22" />
                                {"22"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f66" value="23" />
                                {"23"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f66" value="24" />
                                {"24"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f66" value="25" />
                                {"25"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f66" value="26" />
                                {"26"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f66" value="27" />
                                {"27"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f66" value="28" />
                                {"28"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f66" value="29" defaultChecked={true} />
                                {"29"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f66" value="30" />
                                {"30"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f66" value="31" />
                                {"31"}
                              </label>
                            </div>
                          </div>
                        </div>
                        <span className="field__hint">{"The entry closes after this date"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f67">{"Priority"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f67" defaultValue={"Normal"}>
                            <option>{"High"}</option>
                            <option>{"Normal"}</option>
                            <option>{"Low"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Decides who is offered a freed room first"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f68">{"How to contact"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f68" defaultValue={"WhatsApp"}>
                            <option>{"WhatsApp"}</option>
                            <option>{"Phone call"}</option>
                            <option>{"Email"}</option>
                            <option>{"SMS"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f69">{"When a room frees up"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f69" defaultValue={"Tell staff only"}>
                            <option>{"Tell staff only"}</option>
                            <option>{"Offer the guest and hold the room"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"A held room is blocked for the time below and released by itself"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f70">{"Hold the offered room for"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f70" defaultValue={"6 hours"}>
                            <option>{"2 hours"}</option>
                            <option>{"6 hours"}</option>
                            <option>{"12 hours"}</option>
                            <option>{"24 hours"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="field" style={{"marginTop": "12px"}}>
                      <span className="field__label">{"Other room types the guest would accept"}</span>
                      <div className="row">
                        <label className="check">
                          <input className="check__input" type="checkbox" />
                          <span className="check__box" />
                          {"Garden Deluxe Room"}
                        </label>
                        <label className="check">
                          <input className="check__input" type="checkbox" />
                          <span className="check__box" />
                          {"Pool Deluxe Room"}
                        </label>
                        <label className="check">
                          <input className="check__input" type="checkbox" defaultChecked={true} />
                          <span className="check__box" />
                          {"Deluxe Suite"}
                        </label>
                        <label className="check">
                          <input className="check__input" type="checkbox" />
                          <span className="check__box" />
                          {"Premium Suite"}
                        </label>
                      </div>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Flexible by one day either side"}
                    </label>
                    <div className="field">
                      <label className="field__label" htmlFor="f71">{"Notes"}</label>
                      <textarea className="field__input field__input--area" id="f71" defaultValue={""} />
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save entry"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="RS-16b-WL-0001" data-code="RS-16b" role="dialog" aria-modal="true" aria-labelledby="RS-16b-WL-0001-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RS-16b-WL-0001-t">{"Remove from waitlist"}</h2>
                      <p className="modal__desc">{"Rekha Prem · WL-0001"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <label className="field__label" htmlFor="f72">
                        {"Reason "}
                        <span className="field__req">{"*"}</span>
                      </label>
                      <div className="field__wrap">
                        <select className="field__input field__input--select" id="f72" defaultValue={"Booked elsewhere"}>
                          <option>{"Booked elsewhere"}</option>
                          <option>{"Guest no longer needs it"}</option>
                          <option>{"No response"}</option>
                          <option>{"Booked with us"}</option>
                        </select>
                        <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Remove"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="RS-O12-WL-0001" data-code="RS-O12" role="dialog" aria-modal="true" aria-labelledby="RS-O12-WL-0001-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RS-O12-WL-0001-t">{"Room-available message"}</h2>
                      <p className="modal__desc">{"WhatsApp preview · WL-0001"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="bubble">
                      <p>{"Good news, Rekha – a Deluxe Suite is now available for 3 – 6 Nov. Reply within 12 hours to book it."}</p>
                      <p className="bubble__t">{"The Aviv Kochi · 09:12"}</p>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal" id="RS-16a-WL-0002" data-code="RS-16a" role="dialog" aria-modal="true" aria-labelledby="RS-16a-WL-0002-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RS-16a-WL-0002-t">{"Waitlist entry"}</h2>
                      <p className="modal__desc">{"WL-0002"}</p>
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
                        <label className="field__label" htmlFor="f73">
                          {"Guest name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f73" type="text" required={true} defaultValue={"Daniel Hughes"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f74">
                          {"Mobile "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f74" type="tel" required={true} defaultValue={"+91 8070580116"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f75">{"Room type"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f75" defaultValue={"Deluxe Suite"}>
                            <option>{"Garden Deluxe Room"}</option>
                            <option>{"Pool Deluxe Room"}</option>
                            <option>{"Deluxe Suite"}</option>
                            <option>{"Premium Suite"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f76">{"Arrival"}</label>
                        <div className="dpk">
                          <button type="button" className="dpk-f field__input" id="f76" aria-haspopup="dialog">
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
                              <select className="dpk-m" name="f76-month" aria-label="Month" defaultValue={"11"}>
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
                              <select className="dpk-y" name="f76-year" aria-label="Year" defaultValue={"2026"}>
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
                                <input type="radio" name="f76" value="01" />
                                {"1"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f76" value="02" />
                                {"2"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f76" value="03" defaultChecked={true} />
                                {"3"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f76" value="04" />
                                {"4"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f76" value="05" />
                                {"5"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f76" value="06" />
                                {"6"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f76" value="07" />
                                {"7"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f76" value="08" />
                                {"8"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f76" value="09" />
                                {"9"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f76" value="10" />
                                {"10"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f76" value="11" />
                                {"11"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f76" value="12" />
                                {"12"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f76" value="13" />
                                {"13"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f76" value="14" />
                                {"14"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f76" value="15" />
                                {"15"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f76" value="16" />
                                {"16"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f76" value="17" />
                                {"17"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f76" value="18" />
                                {"18"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f76" value="19" />
                                {"19"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f76" value="20" />
                                {"20"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f76" value="21" />
                                {"21"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f76" value="22" />
                                {"22"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f76" value="23" />
                                {"23"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f76" value="24" />
                                {"24"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f76" value="25" />
                                {"25"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f76" value="26" />
                                {"26"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f76" value="27" />
                                {"27"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f76" value="28" />
                                {"28"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f76" value="29" />
                                {"29"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f76" value="30" />
                                {"30"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f76" value="31" />
                                {"31"}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f77">{"Departure"}</label>
                        <div className="dpk">
                          <button type="button" className="dpk-f field__input" id="f77" aria-haspopup="dialog">
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
                              <select className="dpk-m" name="f77-month" aria-label="Month" defaultValue={"11"}>
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
                              <select className="dpk-y" name="f77-year" aria-label="Year" defaultValue={"2026"}>
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
                                <input type="radio" name="f77" value="01" />
                                {"1"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f77" value="02" />
                                {"2"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f77" value="03" />
                                {"3"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f77" value="04" />
                                {"4"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f77" value="05" defaultChecked={true} />
                                {"5"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f77" value="06" />
                                {"6"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f77" value="07" />
                                {"7"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f77" value="08" />
                                {"8"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f77" value="09" />
                                {"9"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f77" value="10" />
                                {"10"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f77" value="11" />
                                {"11"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f77" value="12" />
                                {"12"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f77" value="13" />
                                {"13"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f77" value="14" />
                                {"14"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f77" value="15" />
                                {"15"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f77" value="16" />
                                {"16"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f77" value="17" />
                                {"17"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f77" value="18" />
                                {"18"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f77" value="19" />
                                {"19"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f77" value="20" />
                                {"20"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f77" value="21" />
                                {"21"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f77" value="22" />
                                {"22"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f77" value="23" />
                                {"23"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f77" value="24" />
                                {"24"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f77" value="25" />
                                {"25"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f77" value="26" />
                                {"26"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f77" value="27" />
                                {"27"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f77" value="28" />
                                {"28"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f77" value="29" />
                                {"29"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f77" value="30" />
                                {"30"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f77" value="31" />
                                {"31"}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f78">{"Adults"}</label>
                        <input className="field__input num" id="f78" type="number" defaultValue={"2"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f79">{"Rooms"}</label>
                        <input className="field__input num" id="f79" type="number" defaultValue={"1"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f80">{"Valid until"}</label>
                        <div className="dpk">
                          <button type="button" className="dpk-f field__input" id="f80" aria-haspopup="dialog">
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
                              <select className="dpk-m" name="f80-month" aria-label="Month" defaultValue={"10"}>
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
                              <select className="dpk-y" name="f80-year" aria-label="Year" defaultValue={"2026"}>
                                <option value="2024" className="lp">{"2024"}</option>
                                <option value="2025">{"2025"}</option>
                                <option value="2026">{"2026"}</option>
                                <option value="2027">{"2027"}</option>
                                <option value="2028" className="lp">{"2028"}</option>
                                <option value="2029">{"2029"}</option>
                                <option value="2030">{"2030"}</option>
                                <option value="2031">{"2031"}</option>
                                <option value="2032" className="lp">{"2032"}</option>
                                <option value="2033">{"2033"}</option>
                                <option value="2034">{"2034"}</option>
                                <option value="2035">{"2035"}</option>
                                <option value="2036" className="lp">{"2036"}</option>
                                <option value="2037">{"2037"}</option>
                                <option value="2038">{"2038"}</option>
                                <option value="2039">{"2039"}</option>
                                <option value="2040" className="lp">{"2040"}</option>
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
                                <input type="radio" name="f80" value="01" />
                                {"1"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f80" value="02" />
                                {"2"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f80" value="03" />
                                {"3"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f80" value="04" />
                                {"4"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f80" value="05" />
                                {"5"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f80" value="06" />
                                {"6"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f80" value="07" />
                                {"7"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f80" value="08" />
                                {"8"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f80" value="09" />
                                {"9"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f80" value="10" />
                                {"10"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f80" value="11" />
                                {"11"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f80" value="12" />
                                {"12"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f80" value="13" />
                                {"13"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f80" value="14" />
                                {"14"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f80" value="15" />
                                {"15"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f80" value="16" />
                                {"16"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f80" value="17" />
                                {"17"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f80" value="18" />
                                {"18"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f80" value="19" />
                                {"19"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f80" value="20" />
                                {"20"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f80" value="21" />
                                {"21"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f80" value="22" />
                                {"22"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f80" value="23" />
                                {"23"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f80" value="24" />
                                {"24"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f80" value="25" />
                                {"25"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f80" value="26" />
                                {"26"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f80" value="27" />
                                {"27"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f80" value="28" />
                                {"28"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f80" value="29" defaultChecked={true} />
                                {"29"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f80" value="30" />
                                {"30"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f80" value="31" />
                                {"31"}
                              </label>
                            </div>
                          </div>
                        </div>
                        <span className="field__hint">{"The entry closes after this date"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f81">{"Priority"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f81" defaultValue={"Normal"}>
                            <option>{"High"}</option>
                            <option>{"Normal"}</option>
                            <option>{"Low"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Decides who is offered a freed room first"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f82">{"How to contact"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f82" defaultValue={"WhatsApp"}>
                            <option>{"WhatsApp"}</option>
                            <option>{"Phone call"}</option>
                            <option>{"Email"}</option>
                            <option>{"SMS"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f83">{"When a room frees up"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f83" defaultValue={"Tell staff only"}>
                            <option>{"Tell staff only"}</option>
                            <option>{"Offer the guest and hold the room"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"A held room is blocked for the time below and released by itself"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f84">{"Hold the offered room for"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f84" defaultValue={"6 hours"}>
                            <option>{"2 hours"}</option>
                            <option>{"6 hours"}</option>
                            <option>{"12 hours"}</option>
                            <option>{"24 hours"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="field" style={{"marginTop": "12px"}}>
                      <span className="field__label">{"Other room types the guest would accept"}</span>
                      <div className="row">
                        <label className="check">
                          <input className="check__input" type="checkbox" />
                          <span className="check__box" />
                          {"Garden Deluxe Room"}
                        </label>
                        <label className="check">
                          <input className="check__input" type="checkbox" />
                          <span className="check__box" />
                          {"Pool Deluxe Room"}
                        </label>
                        <label className="check">
                          <input className="check__input" type="checkbox" defaultChecked={true} />
                          <span className="check__box" />
                          {"Deluxe Suite"}
                        </label>
                        <label className="check">
                          <input className="check__input" type="checkbox" />
                          <span className="check__box" />
                          {"Premium Suite"}
                        </label>
                      </div>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Flexible by one day either side"}
                    </label>
                    <div className="field">
                      <label className="field__label" htmlFor="f85">{"Notes"}</label>
                      <textarea className="field__input field__input--area" id="f85" defaultValue={""} />
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save entry"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="RS-16b-WL-0002" data-code="RS-16b" role="dialog" aria-modal="true" aria-labelledby="RS-16b-WL-0002-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RS-16b-WL-0002-t">{"Remove from waitlist"}</h2>
                      <p className="modal__desc">{"Daniel Hughes · WL-0002"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <label className="field__label" htmlFor="f86">
                        {"Reason "}
                        <span className="field__req">{"*"}</span>
                      </label>
                      <div className="field__wrap">
                        <select className="field__input field__input--select" id="f86" defaultValue={"Booked elsewhere"}>
                          <option>{"Booked elsewhere"}</option>
                          <option>{"Guest no longer needs it"}</option>
                          <option>{"No response"}</option>
                          <option>{"Booked with us"}</option>
                        </select>
                        <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Remove"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="RS-O12-WL-0002" data-code="RS-O12" role="dialog" aria-modal="true" aria-labelledby="RS-O12-WL-0002-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RS-O12-WL-0002-t">{"Room-available message"}</h2>
                      <p className="modal__desc">{"WhatsApp preview · WL-0002"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="bubble">
                      <p>{"Good news, Daniel – a Deluxe Suite is now available for 3 – 5 Nov. Reply within 12 hours to book it."}</p>
                      <p className="bubble__t">{"The Aviv Kochi · 09:12"}</p>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal" id="RS-16a-WL-0003" data-code="RS-16a" role="dialog" aria-modal="true" aria-labelledby="RS-16a-WL-0003-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RS-16a-WL-0003-t">{"Waitlist entry"}</h2>
                      <p className="modal__desc">{"WL-0003"}</p>
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
                        <label className="field__label" htmlFor="f87">
                          {"Guest name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f87" type="text" required={true} defaultValue={"Arvind Shaan"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f88">
                          {"Mobile "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f88" type="tel" required={true} defaultValue={"+91 9045572697"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f89">{"Room type"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f89" defaultValue={"Deluxe Suite"}>
                            <option>{"Garden Deluxe Room"}</option>
                            <option>{"Pool Deluxe Room"}</option>
                            <option>{"Deluxe Suite"}</option>
                            <option>{"Premium Suite"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f90">{"Arrival"}</label>
                        <div className="dpk">
                          <button type="button" className="dpk-f field__input" id="f90" aria-haspopup="dialog">
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
                              <select className="dpk-m" name="f90-month" aria-label="Month" defaultValue={"11"}>
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
                              <select className="dpk-y" name="f90-year" aria-label="Year" defaultValue={"2026"}>
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
                                <input type="radio" name="f90" value="01" />
                                {"1"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f90" value="02" />
                                {"2"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f90" value="03" />
                                {"3"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f90" value="04" defaultChecked={true} />
                                {"4"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f90" value="05" />
                                {"5"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f90" value="06" />
                                {"6"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f90" value="07" />
                                {"7"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f90" value="08" />
                                {"8"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f90" value="09" />
                                {"9"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f90" value="10" />
                                {"10"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f90" value="11" />
                                {"11"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f90" value="12" />
                                {"12"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f90" value="13" />
                                {"13"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f90" value="14" />
                                {"14"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f90" value="15" />
                                {"15"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f90" value="16" />
                                {"16"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f90" value="17" />
                                {"17"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f90" value="18" />
                                {"18"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f90" value="19" />
                                {"19"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f90" value="20" />
                                {"20"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f90" value="21" />
                                {"21"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f90" value="22" />
                                {"22"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f90" value="23" />
                                {"23"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f90" value="24" />
                                {"24"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f90" value="25" />
                                {"25"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f90" value="26" />
                                {"26"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f90" value="27" />
                                {"27"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f90" value="28" />
                                {"28"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f90" value="29" />
                                {"29"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f90" value="30" />
                                {"30"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f90" value="31" />
                                {"31"}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f91">{"Departure"}</label>
                        <div className="dpk">
                          <button type="button" className="dpk-f field__input" id="f91" aria-haspopup="dialog">
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
                              <select className="dpk-m" name="f91-month" aria-label="Month" defaultValue={"11"}>
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
                              <select className="dpk-y" name="f91-year" aria-label="Year" defaultValue={"2026"}>
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
                                <input type="radio" name="f91" value="01" />
                                {"1"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f91" value="02" />
                                {"2"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f91" value="03" />
                                {"3"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f91" value="04" />
                                {"4"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f91" value="05" />
                                {"5"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f91" value="06" defaultChecked={true} />
                                {"6"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f91" value="07" />
                                {"7"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f91" value="08" />
                                {"8"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f91" value="09" />
                                {"9"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f91" value="10" />
                                {"10"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f91" value="11" />
                                {"11"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f91" value="12" />
                                {"12"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f91" value="13" />
                                {"13"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f91" value="14" />
                                {"14"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f91" value="15" />
                                {"15"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f91" value="16" />
                                {"16"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f91" value="17" />
                                {"17"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f91" value="18" />
                                {"18"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f91" value="19" />
                                {"19"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f91" value="20" />
                                {"20"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f91" value="21" />
                                {"21"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f91" value="22" />
                                {"22"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f91" value="23" />
                                {"23"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f91" value="24" />
                                {"24"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f91" value="25" />
                                {"25"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f91" value="26" />
                                {"26"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f91" value="27" />
                                {"27"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f91" value="28" />
                                {"28"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f91" value="29" />
                                {"29"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f91" value="30" />
                                {"30"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f91" value="31" />
                                {"31"}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f92">{"Adults"}</label>
                        <input className="field__input num" id="f92" type="number" defaultValue={"2"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f93">{"Rooms"}</label>
                        <input className="field__input num" id="f93" type="number" defaultValue={"1"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f94">{"Valid until"}</label>
                        <div className="dpk">
                          <button type="button" className="dpk-f field__input" id="f94" aria-haspopup="dialog">
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
                              <select className="dpk-m" name="f94-month" aria-label="Month" defaultValue={"10"}>
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
                              <select className="dpk-y" name="f94-year" aria-label="Year" defaultValue={"2026"}>
                                <option value="2024" className="lp">{"2024"}</option>
                                <option value="2025">{"2025"}</option>
                                <option value="2026">{"2026"}</option>
                                <option value="2027">{"2027"}</option>
                                <option value="2028" className="lp">{"2028"}</option>
                                <option value="2029">{"2029"}</option>
                                <option value="2030">{"2030"}</option>
                                <option value="2031">{"2031"}</option>
                                <option value="2032" className="lp">{"2032"}</option>
                                <option value="2033">{"2033"}</option>
                                <option value="2034">{"2034"}</option>
                                <option value="2035">{"2035"}</option>
                                <option value="2036" className="lp">{"2036"}</option>
                                <option value="2037">{"2037"}</option>
                                <option value="2038">{"2038"}</option>
                                <option value="2039">{"2039"}</option>
                                <option value="2040" className="lp">{"2040"}</option>
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
                                <input type="radio" name="f94" value="01" />
                                {"1"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f94" value="02" />
                                {"2"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f94" value="03" />
                                {"3"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f94" value="04" />
                                {"4"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f94" value="05" />
                                {"5"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f94" value="06" />
                                {"6"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f94" value="07" />
                                {"7"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f94" value="08" />
                                {"8"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f94" value="09" />
                                {"9"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f94" value="10" />
                                {"10"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f94" value="11" />
                                {"11"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f94" value="12" />
                                {"12"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f94" value="13" />
                                {"13"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f94" value="14" />
                                {"14"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f94" value="15" />
                                {"15"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f94" value="16" />
                                {"16"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f94" value="17" />
                                {"17"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f94" value="18" />
                                {"18"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f94" value="19" />
                                {"19"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f94" value="20" />
                                {"20"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f94" value="21" />
                                {"21"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f94" value="22" />
                                {"22"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f94" value="23" />
                                {"23"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f94" value="24" />
                                {"24"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f94" value="25" />
                                {"25"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f94" value="26" />
                                {"26"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f94" value="27" />
                                {"27"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f94" value="28" />
                                {"28"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f94" value="29" defaultChecked={true} />
                                {"29"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f94" value="30" />
                                {"30"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f94" value="31" />
                                {"31"}
                              </label>
                            </div>
                          </div>
                        </div>
                        <span className="field__hint">{"The entry closes after this date"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f95">{"Priority"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f95" defaultValue={"Normal"}>
                            <option>{"High"}</option>
                            <option>{"Normal"}</option>
                            <option>{"Low"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Decides who is offered a freed room first"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f96">{"How to contact"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f96" defaultValue={"WhatsApp"}>
                            <option>{"WhatsApp"}</option>
                            <option>{"Phone call"}</option>
                            <option>{"Email"}</option>
                            <option>{"SMS"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f97">{"When a room frees up"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f97" defaultValue={"Tell staff only"}>
                            <option>{"Tell staff only"}</option>
                            <option>{"Offer the guest and hold the room"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"A held room is blocked for the time below and released by itself"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f98">{"Hold the offered room for"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f98" defaultValue={"6 hours"}>
                            <option>{"2 hours"}</option>
                            <option>{"6 hours"}</option>
                            <option>{"12 hours"}</option>
                            <option>{"24 hours"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="field" style={{"marginTop": "12px"}}>
                      <span className="field__label">{"Other room types the guest would accept"}</span>
                      <div className="row">
                        <label className="check">
                          <input className="check__input" type="checkbox" />
                          <span className="check__box" />
                          {"Garden Deluxe Room"}
                        </label>
                        <label className="check">
                          <input className="check__input" type="checkbox" />
                          <span className="check__box" />
                          {"Pool Deluxe Room"}
                        </label>
                        <label className="check">
                          <input className="check__input" type="checkbox" defaultChecked={true} />
                          <span className="check__box" />
                          {"Deluxe Suite"}
                        </label>
                        <label className="check">
                          <input className="check__input" type="checkbox" />
                          <span className="check__box" />
                          {"Premium Suite"}
                        </label>
                      </div>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Flexible by one day either side"}
                    </label>
                    <div className="field">
                      <label className="field__label" htmlFor="f99">{"Notes"}</label>
                      <textarea className="field__input field__input--area" id="f99" defaultValue={""} />
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save entry"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="RS-16b-WL-0003" data-code="RS-16b" role="dialog" aria-modal="true" aria-labelledby="RS-16b-WL-0003-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RS-16b-WL-0003-t">{"Remove from waitlist"}</h2>
                      <p className="modal__desc">{"Arvind Shaan · WL-0003"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <label className="field__label" htmlFor="f100">
                        {"Reason "}
                        <span className="field__req">{"*"}</span>
                      </label>
                      <div className="field__wrap">
                        <select className="field__input field__input--select" id="f100" defaultValue={"Booked elsewhere"}>
                          <option>{"Booked elsewhere"}</option>
                          <option>{"Guest no longer needs it"}</option>
                          <option>{"No response"}</option>
                          <option>{"Booked with us"}</option>
                        </select>
                        <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Remove"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="RS-O12-WL-0003" data-code="RS-O12" role="dialog" aria-modal="true" aria-labelledby="RS-O12-WL-0003-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RS-O12-WL-0003-t">{"Room-available message"}</h2>
                      <p className="modal__desc">{"WhatsApp preview · WL-0003"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="bubble">
                      <p>{"Good news, Arvind – a Deluxe Suite is now available for 4 – 6 Nov. Reply within 12 hours to book it."}</p>
                      <p className="bubble__t">{"The Aviv Kochi · 09:12"}</p>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal" id="RS-16a-WL-0004" data-code="RS-16a" role="dialog" aria-modal="true" aria-labelledby="RS-16a-WL-0004-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RS-16a-WL-0004-t">{"Waitlist entry"}</h2>
                      <p className="modal__desc">{"WL-0004"}</p>
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
                        <label className="field__label" htmlFor="f101">
                          {"Guest name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f101" type="text" required={true} defaultValue={"Meenakshi Ishaan"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f102">
                          {"Mobile "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f102" type="tel" required={true} defaultValue={"+91 9078326259"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f103">{"Room type"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f103" defaultValue={"Premium Suite"}>
                            <option>{"Garden Deluxe Room"}</option>
                            <option>{"Pool Deluxe Room"}</option>
                            <option>{"Deluxe Suite"}</option>
                            <option>{"Premium Suite"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f104">{"Arrival"}</label>
                        <div className="dpk">
                          <button type="button" className="dpk-f field__input" id="f104" aria-haspopup="dialog">
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
                              <select className="dpk-m" name="f104-month" aria-label="Month" defaultValue={"11"}>
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
                              <select className="dpk-y" name="f104-year" aria-label="Year" defaultValue={"2026"}>
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
                                <input type="radio" name="f104" value="01" />
                                {"1"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f104" value="02" />
                                {"2"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f104" value="03" defaultChecked={true} />
                                {"3"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f104" value="04" />
                                {"4"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f104" value="05" />
                                {"5"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f104" value="06" />
                                {"6"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f104" value="07" />
                                {"7"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f104" value="08" />
                                {"8"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f104" value="09" />
                                {"9"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f104" value="10" />
                                {"10"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f104" value="11" />
                                {"11"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f104" value="12" />
                                {"12"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f104" value="13" />
                                {"13"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f104" value="14" />
                                {"14"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f104" value="15" />
                                {"15"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f104" value="16" />
                                {"16"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f104" value="17" />
                                {"17"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f104" value="18" />
                                {"18"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f104" value="19" />
                                {"19"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f104" value="20" />
                                {"20"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f104" value="21" />
                                {"21"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f104" value="22" />
                                {"22"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f104" value="23" />
                                {"23"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f104" value="24" />
                                {"24"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f104" value="25" />
                                {"25"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f104" value="26" />
                                {"26"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f104" value="27" />
                                {"27"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f104" value="28" />
                                {"28"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f104" value="29" />
                                {"29"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f104" value="30" />
                                {"30"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f104" value="31" />
                                {"31"}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f105">{"Departure"}</label>
                        <div className="dpk">
                          <button type="button" className="dpk-f field__input" id="f105" aria-haspopup="dialog">
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
                              <select className="dpk-m" name="f105-month" aria-label="Month" defaultValue={"11"}>
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
                              <select className="dpk-y" name="f105-year" aria-label="Year" defaultValue={"2026"}>
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
                                <input type="radio" name="f105" value="01" />
                                {"1"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f105" value="02" />
                                {"2"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f105" value="03" />
                                {"3"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f105" value="04" />
                                {"4"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f105" value="05" />
                                {"5"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f105" value="06" defaultChecked={true} />
                                {"6"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f105" value="07" />
                                {"7"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f105" value="08" />
                                {"8"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f105" value="09" />
                                {"9"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f105" value="10" />
                                {"10"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f105" value="11" />
                                {"11"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f105" value="12" />
                                {"12"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f105" value="13" />
                                {"13"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f105" value="14" />
                                {"14"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f105" value="15" />
                                {"15"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f105" value="16" />
                                {"16"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f105" value="17" />
                                {"17"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f105" value="18" />
                                {"18"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f105" value="19" />
                                {"19"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f105" value="20" />
                                {"20"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f105" value="21" />
                                {"21"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f105" value="22" />
                                {"22"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f105" value="23" />
                                {"23"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f105" value="24" />
                                {"24"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f105" value="25" />
                                {"25"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f105" value="26" />
                                {"26"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f105" value="27" />
                                {"27"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f105" value="28" />
                                {"28"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f105" value="29" />
                                {"29"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f105" value="30" />
                                {"30"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f105" value="31" />
                                {"31"}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f106">{"Adults"}</label>
                        <input className="field__input num" id="f106" type="number" defaultValue={"2"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f107">{"Rooms"}</label>
                        <input className="field__input num" id="f107" type="number" defaultValue={"1"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f108">{"Valid until"}</label>
                        <div className="dpk">
                          <button type="button" className="dpk-f field__input" id="f108" aria-haspopup="dialog">
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
                              <select className="dpk-m" name="f108-month" aria-label="Month" defaultValue={"10"}>
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
                              <select className="dpk-y" name="f108-year" aria-label="Year" defaultValue={"2026"}>
                                <option value="2024" className="lp">{"2024"}</option>
                                <option value="2025">{"2025"}</option>
                                <option value="2026">{"2026"}</option>
                                <option value="2027">{"2027"}</option>
                                <option value="2028" className="lp">{"2028"}</option>
                                <option value="2029">{"2029"}</option>
                                <option value="2030">{"2030"}</option>
                                <option value="2031">{"2031"}</option>
                                <option value="2032" className="lp">{"2032"}</option>
                                <option value="2033">{"2033"}</option>
                                <option value="2034">{"2034"}</option>
                                <option value="2035">{"2035"}</option>
                                <option value="2036" className="lp">{"2036"}</option>
                                <option value="2037">{"2037"}</option>
                                <option value="2038">{"2038"}</option>
                                <option value="2039">{"2039"}</option>
                                <option value="2040" className="lp">{"2040"}</option>
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
                                <input type="radio" name="f108" value="01" />
                                {"1"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f108" value="02" />
                                {"2"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f108" value="03" />
                                {"3"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f108" value="04" />
                                {"4"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f108" value="05" />
                                {"5"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f108" value="06" />
                                {"6"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f108" value="07" />
                                {"7"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f108" value="08" />
                                {"8"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f108" value="09" />
                                {"9"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f108" value="10" />
                                {"10"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f108" value="11" />
                                {"11"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f108" value="12" />
                                {"12"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f108" value="13" />
                                {"13"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f108" value="14" />
                                {"14"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f108" value="15" />
                                {"15"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f108" value="16" />
                                {"16"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f108" value="17" />
                                {"17"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f108" value="18" />
                                {"18"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f108" value="19" />
                                {"19"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f108" value="20" />
                                {"20"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f108" value="21" />
                                {"21"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f108" value="22" />
                                {"22"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f108" value="23" />
                                {"23"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f108" value="24" />
                                {"24"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f108" value="25" />
                                {"25"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f108" value="26" />
                                {"26"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f108" value="27" />
                                {"27"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f108" value="28" />
                                {"28"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f108" value="29" defaultChecked={true} />
                                {"29"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f108" value="30" />
                                {"30"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f108" value="31" />
                                {"31"}
                              </label>
                            </div>
                          </div>
                        </div>
                        <span className="field__hint">{"The entry closes after this date"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f109">{"Priority"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f109" defaultValue={"Normal"}>
                            <option>{"High"}</option>
                            <option>{"Normal"}</option>
                            <option>{"Low"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Decides who is offered a freed room first"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f110">{"How to contact"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f110" defaultValue={"WhatsApp"}>
                            <option>{"WhatsApp"}</option>
                            <option>{"Phone call"}</option>
                            <option>{"Email"}</option>
                            <option>{"SMS"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f111">{"When a room frees up"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f111" defaultValue={"Tell staff only"}>
                            <option>{"Tell staff only"}</option>
                            <option>{"Offer the guest and hold the room"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"A held room is blocked for the time below and released by itself"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f112">{"Hold the offered room for"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f112" defaultValue={"6 hours"}>
                            <option>{"2 hours"}</option>
                            <option>{"6 hours"}</option>
                            <option>{"12 hours"}</option>
                            <option>{"24 hours"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="field" style={{"marginTop": "12px"}}>
                      <span className="field__label">{"Other room types the guest would accept"}</span>
                      <div className="row">
                        <label className="check">
                          <input className="check__input" type="checkbox" />
                          <span className="check__box" />
                          {"Garden Deluxe Room"}
                        </label>
                        <label className="check">
                          <input className="check__input" type="checkbox" />
                          <span className="check__box" />
                          {"Pool Deluxe Room"}
                        </label>
                        <label className="check">
                          <input className="check__input" type="checkbox" />
                          <span className="check__box" />
                          {"Deluxe Suite"}
                        </label>
                        <label className="check">
                          <input className="check__input" type="checkbox" defaultChecked={true} />
                          <span className="check__box" />
                          {"Premium Suite"}
                        </label>
                      </div>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Flexible by one day either side"}
                    </label>
                    <div className="field">
                      <label className="field__label" htmlFor="f113">{"Notes"}</label>
                      <textarea className="field__input field__input--area" id="f113" defaultValue={""} />
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save entry"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="RS-16b-WL-0004" data-code="RS-16b" role="dialog" aria-modal="true" aria-labelledby="RS-16b-WL-0004-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RS-16b-WL-0004-t">{"Remove from waitlist"}</h2>
                      <p className="modal__desc">{"Meenakshi Ishaan · WL-0004"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <label className="field__label" htmlFor="f114">
                        {"Reason "}
                        <span className="field__req">{"*"}</span>
                      </label>
                      <div className="field__wrap">
                        <select className="field__input field__input--select" id="f114" defaultValue={"Booked elsewhere"}>
                          <option>{"Booked elsewhere"}</option>
                          <option>{"Guest no longer needs it"}</option>
                          <option>{"No response"}</option>
                          <option>{"Booked with us"}</option>
                        </select>
                        <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Remove"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="RS-O12-WL-0004" data-code="RS-O12" role="dialog" aria-modal="true" aria-labelledby="RS-O12-WL-0004-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RS-O12-WL-0004-t">{"Room-available message"}</h2>
                      <p className="modal__desc">{"WhatsApp preview · WL-0004"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="bubble">
                      <p>{"Good news, Meenakshi – a Premium Suite is now available for 3 – 6 Nov. Reply within 12 hours to book it."}</p>
                      <p className="bubble__t">{"The Aviv Kochi · 09:12"}</p>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal" id="RS-16a-WL-0005" data-code="RS-16a" role="dialog" aria-modal="true" aria-labelledby="RS-16a-WL-0005-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RS-16a-WL-0005-t">{"Waitlist entry"}</h2>
                      <p className="modal__desc">{"WL-0005"}</p>
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
                        <label className="field__label" htmlFor="f115">
                          {"Guest name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f115" type="text" required={true} defaultValue={"Thomas Abraham"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f116">
                          {"Mobile "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f116" type="tel" required={true} defaultValue={"+91 7079210322"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f117">{"Room type"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f117" defaultValue={"Deluxe Suite"}>
                            <option>{"Garden Deluxe Room"}</option>
                            <option>{"Pool Deluxe Room"}</option>
                            <option>{"Deluxe Suite"}</option>
                            <option>{"Premium Suite"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f118">{"Arrival"}</label>
                        <div className="dpk">
                          <button type="button" className="dpk-f field__input" id="f118" aria-haspopup="dialog">
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
                              <select className="dpk-m" name="f118-month" aria-label="Month" defaultValue={"11"}>
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
                              <select className="dpk-y" name="f118-year" aria-label="Year" defaultValue={"2026"}>
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
                                <input type="radio" name="f118" value="01" />
                                {"1"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f118" value="02" />
                                {"2"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f118" value="03" defaultChecked={true} />
                                {"3"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f118" value="04" />
                                {"4"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f118" value="05" />
                                {"5"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f118" value="06" />
                                {"6"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f118" value="07" />
                                {"7"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f118" value="08" />
                                {"8"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f118" value="09" />
                                {"9"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f118" value="10" />
                                {"10"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f118" value="11" />
                                {"11"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f118" value="12" />
                                {"12"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f118" value="13" />
                                {"13"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f118" value="14" />
                                {"14"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f118" value="15" />
                                {"15"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f118" value="16" />
                                {"16"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f118" value="17" />
                                {"17"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f118" value="18" />
                                {"18"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f118" value="19" />
                                {"19"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f118" value="20" />
                                {"20"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f118" value="21" />
                                {"21"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f118" value="22" />
                                {"22"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f118" value="23" />
                                {"23"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f118" value="24" />
                                {"24"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f118" value="25" />
                                {"25"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f118" value="26" />
                                {"26"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f118" value="27" />
                                {"27"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f118" value="28" />
                                {"28"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f118" value="29" />
                                {"29"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f118" value="30" />
                                {"30"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f118" value="31" />
                                {"31"}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f119">{"Departure"}</label>
                        <div className="dpk">
                          <button type="button" className="dpk-f field__input" id="f119" aria-haspopup="dialog">
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
                              <select className="dpk-m" name="f119-month" aria-label="Month" defaultValue={"11"}>
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
                              <select className="dpk-y" name="f119-year" aria-label="Year" defaultValue={"2026"}>
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
                                <input type="radio" name="f119" value="01" />
                                {"1"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f119" value="02" />
                                {"2"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f119" value="03" />
                                {"3"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f119" value="04" />
                                {"4"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f119" value="05" />
                                {"5"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f119" value="06" defaultChecked={true} />
                                {"6"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f119" value="07" />
                                {"7"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f119" value="08" />
                                {"8"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f119" value="09" />
                                {"9"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f119" value="10" />
                                {"10"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f119" value="11" />
                                {"11"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f119" value="12" />
                                {"12"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f119" value="13" />
                                {"13"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f119" value="14" />
                                {"14"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f119" value="15" />
                                {"15"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f119" value="16" />
                                {"16"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f119" value="17" />
                                {"17"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f119" value="18" />
                                {"18"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f119" value="19" />
                                {"19"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f119" value="20" />
                                {"20"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f119" value="21" />
                                {"21"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f119" value="22" />
                                {"22"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f119" value="23" />
                                {"23"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f119" value="24" />
                                {"24"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f119" value="25" />
                                {"25"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f119" value="26" />
                                {"26"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f119" value="27" />
                                {"27"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f119" value="28" />
                                {"28"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f119" value="29" />
                                {"29"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f119" value="30" />
                                {"30"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f119" value="31" />
                                {"31"}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f120">{"Adults"}</label>
                        <input className="field__input num" id="f120" type="number" defaultValue={"2"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f121">{"Rooms"}</label>
                        <input className="field__input num" id="f121" type="number" defaultValue={"1"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f122">{"Valid until"}</label>
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
                              <select className="dpk-m" name="f122-month" aria-label="Month" defaultValue={"10"}>
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
                              <select className="dpk-y" name="f122-year" aria-label="Year" defaultValue={"2026"}>
                                <option value="2024" className="lp">{"2024"}</option>
                                <option value="2025">{"2025"}</option>
                                <option value="2026">{"2026"}</option>
                                <option value="2027">{"2027"}</option>
                                <option value="2028" className="lp">{"2028"}</option>
                                <option value="2029">{"2029"}</option>
                                <option value="2030">{"2030"}</option>
                                <option value="2031">{"2031"}</option>
                                <option value="2032" className="lp">{"2032"}</option>
                                <option value="2033">{"2033"}</option>
                                <option value="2034">{"2034"}</option>
                                <option value="2035">{"2035"}</option>
                                <option value="2036" className="lp">{"2036"}</option>
                                <option value="2037">{"2037"}</option>
                                <option value="2038">{"2038"}</option>
                                <option value="2039">{"2039"}</option>
                                <option value="2040" className="lp">{"2040"}</option>
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
                                <input type="radio" name="f122" value="01" />
                                {"1"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f122" value="02" />
                                {"2"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f122" value="03" />
                                {"3"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f122" value="04" />
                                {"4"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f122" value="05" />
                                {"5"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f122" value="06" />
                                {"6"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f122" value="07" />
                                {"7"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f122" value="08" />
                                {"8"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f122" value="09" />
                                {"9"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f122" value="10" />
                                {"10"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f122" value="11" />
                                {"11"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f122" value="12" />
                                {"12"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f122" value="13" />
                                {"13"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f122" value="14" />
                                {"14"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f122" value="15" />
                                {"15"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f122" value="16" />
                                {"16"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f122" value="17" />
                                {"17"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f122" value="18" />
                                {"18"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f122" value="19" />
                                {"19"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f122" value="20" />
                                {"20"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f122" value="21" />
                                {"21"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f122" value="22" />
                                {"22"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f122" value="23" />
                                {"23"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f122" value="24" />
                                {"24"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f122" value="25" />
                                {"25"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f122" value="26" />
                                {"26"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f122" value="27" />
                                {"27"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f122" value="28" />
                                {"28"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f122" value="29" defaultChecked={true} />
                                {"29"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f122" value="30" />
                                {"30"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f122" value="31" />
                                {"31"}
                              </label>
                            </div>
                          </div>
                        </div>
                        <span className="field__hint">{"The entry closes after this date"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f123">{"Priority"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f123" defaultValue={"Normal"}>
                            <option>{"High"}</option>
                            <option>{"Normal"}</option>
                            <option>{"Low"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Decides who is offered a freed room first"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f124">{"How to contact"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f124" defaultValue={"WhatsApp"}>
                            <option>{"WhatsApp"}</option>
                            <option>{"Phone call"}</option>
                            <option>{"Email"}</option>
                            <option>{"SMS"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f125">{"When a room frees up"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f125" defaultValue={"Tell staff only"}>
                            <option>{"Tell staff only"}</option>
                            <option>{"Offer the guest and hold the room"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"A held room is blocked for the time below and released by itself"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f126">{"Hold the offered room for"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f126" defaultValue={"6 hours"}>
                            <option>{"2 hours"}</option>
                            <option>{"6 hours"}</option>
                            <option>{"12 hours"}</option>
                            <option>{"24 hours"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="field" style={{"marginTop": "12px"}}>
                      <span className="field__label">{"Other room types the guest would accept"}</span>
                      <div className="row">
                        <label className="check">
                          <input className="check__input" type="checkbox" />
                          <span className="check__box" />
                          {"Garden Deluxe Room"}
                        </label>
                        <label className="check">
                          <input className="check__input" type="checkbox" />
                          <span className="check__box" />
                          {"Pool Deluxe Room"}
                        </label>
                        <label className="check">
                          <input className="check__input" type="checkbox" defaultChecked={true} />
                          <span className="check__box" />
                          {"Deluxe Suite"}
                        </label>
                        <label className="check">
                          <input className="check__input" type="checkbox" />
                          <span className="check__box" />
                          {"Premium Suite"}
                        </label>
                      </div>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Flexible by one day either side"}
                    </label>
                    <div className="field">
                      <label className="field__label" htmlFor="f127">{"Notes"}</label>
                      <textarea className="field__input field__input--area" id="f127" defaultValue={""} />
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save entry"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="RS-16b-WL-0005" data-code="RS-16b" role="dialog" aria-modal="true" aria-labelledby="RS-16b-WL-0005-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RS-16b-WL-0005-t">{"Remove from waitlist"}</h2>
                      <p className="modal__desc">{"Thomas Abraham · WL-0005"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <label className="field__label" htmlFor="f128">
                        {"Reason "}
                        <span className="field__req">{"*"}</span>
                      </label>
                      <div className="field__wrap">
                        <select className="field__input field__input--select" id="f128" defaultValue={"Booked elsewhere"}>
                          <option>{"Booked elsewhere"}</option>
                          <option>{"Guest no longer needs it"}</option>
                          <option>{"No response"}</option>
                          <option>{"Booked with us"}</option>
                        </select>
                        <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Remove"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="RS-O12-WL-0005" data-code="RS-O12" role="dialog" aria-modal="true" aria-labelledby="RS-O12-WL-0005-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RS-O12-WL-0005-t">{"Room-available message"}</h2>
                      <p className="modal__desc">{"WhatsApp preview · WL-0005"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="bubble">
                      <p>{"Good news, Thomas – a Deluxe Suite is now available for 3 – 6 Nov. Reply within 12 hours to book it."}</p>
                      <p className="bubble__t">{"The Aviv Kochi · 09:12"}</p>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal" id="RS-16a-WL-0006" data-code="RS-16a" role="dialog" aria-modal="true" aria-labelledby="RS-16a-WL-0006-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RS-16a-WL-0006-t">{"Waitlist entry"}</h2>
                      <p className="modal__desc">{"WL-0006"}</p>
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
                        <label className="field__label" htmlFor="f129">
                          {"Guest name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f129" type="text" required={true} defaultValue={"Sandra Mueller"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f130">
                          {"Mobile "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f130" type="tel" required={true} defaultValue={"+91 7042582560"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f131">{"Room type"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f131" defaultValue={"Premium Suite"}>
                            <option>{"Garden Deluxe Room"}</option>
                            <option>{"Pool Deluxe Room"}</option>
                            <option>{"Deluxe Suite"}</option>
                            <option>{"Premium Suite"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f132">{"Arrival"}</label>
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
                              <select className="dpk-m" name="f132-month" aria-label="Month" defaultValue={"10"}>
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
                              <select className="dpk-y" name="f132-year" aria-label="Year" defaultValue={"2026"}>
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
                                <input type="radio" name="f132" value="01" />
                                {"1"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f132" value="02" />
                                {"2"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f132" value="03" />
                                {"3"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f132" value="04" />
                                {"4"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f132" value="05" />
                                {"5"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f132" value="06" />
                                {"6"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f132" value="07" />
                                {"7"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f132" value="08" />
                                {"8"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f132" value="09" />
                                {"9"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f132" value="10" />
                                {"10"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f132" value="11" />
                                {"11"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f132" value="12" />
                                {"12"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f132" value="13" />
                                {"13"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f132" value="14" />
                                {"14"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f132" value="15" />
                                {"15"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f132" value="16" />
                                {"16"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f132" value="17" />
                                {"17"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f132" value="18" />
                                {"18"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f132" value="19" />
                                {"19"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f132" value="20" />
                                {"20"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f132" value="21" />
                                {"21"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f132" value="22" />
                                {"22"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f132" value="23" />
                                {"23"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f132" value="24" />
                                {"24"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f132" value="25" defaultChecked={true} />
                                {"25"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f132" value="26" />
                                {"26"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f132" value="27" />
                                {"27"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f132" value="28" />
                                {"28"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f132" value="29" />
                                {"29"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f132" value="30" />
                                {"30"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f132" value="31" />
                                {"31"}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f133">{"Departure"}</label>
                        <div className="dpk">
                          <button type="button" className="dpk-f field__input" id="f133" aria-haspopup="dialog">
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
                              <select className="dpk-m" name="f133-month" aria-label="Month" defaultValue={"10"}>
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
                              <select className="dpk-y" name="f133-year" aria-label="Year" defaultValue={"2026"}>
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
                                <input type="radio" name="f133" value="01" />
                                {"1"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f133" value="02" />
                                {"2"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f133" value="03" />
                                {"3"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f133" value="04" />
                                {"4"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f133" value="05" />
                                {"5"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f133" value="06" />
                                {"6"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f133" value="07" />
                                {"7"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f133" value="08" />
                                {"8"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f133" value="09" />
                                {"9"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f133" value="10" />
                                {"10"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f133" value="11" />
                                {"11"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f133" value="12" />
                                {"12"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f133" value="13" />
                                {"13"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f133" value="14" />
                                {"14"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f133" value="15" />
                                {"15"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f133" value="16" />
                                {"16"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f133" value="17" />
                                {"17"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f133" value="18" />
                                {"18"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f133" value="19" />
                                {"19"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f133" value="20" />
                                {"20"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f133" value="21" />
                                {"21"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f133" value="22" />
                                {"22"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f133" value="23" />
                                {"23"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f133" value="24" />
                                {"24"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f133" value="25" />
                                {"25"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f133" value="26" />
                                {"26"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f133" value="27" />
                                {"27"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f133" value="28" defaultChecked={true} />
                                {"28"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f133" value="29" />
                                {"29"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f133" value="30" />
                                {"30"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f133" value="31" />
                                {"31"}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f134">{"Adults"}</label>
                        <input className="field__input num" id="f134" type="number" defaultValue={"2"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f135">{"Rooms"}</label>
                        <input className="field__input num" id="f135" type="number" defaultValue={"1"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f136">{"Valid until"}</label>
                        <div className="dpk">
                          <button type="button" className="dpk-f field__input" id="f136" aria-haspopup="dialog">
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
                              <select className="dpk-m" name="f136-month" aria-label="Month" defaultValue={"10"}>
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
                              <select className="dpk-y" name="f136-year" aria-label="Year" defaultValue={"2026"}>
                                <option value="2024" className="lp">{"2024"}</option>
                                <option value="2025">{"2025"}</option>
                                <option value="2026">{"2026"}</option>
                                <option value="2027">{"2027"}</option>
                                <option value="2028" className="lp">{"2028"}</option>
                                <option value="2029">{"2029"}</option>
                                <option value="2030">{"2030"}</option>
                                <option value="2031">{"2031"}</option>
                                <option value="2032" className="lp">{"2032"}</option>
                                <option value="2033">{"2033"}</option>
                                <option value="2034">{"2034"}</option>
                                <option value="2035">{"2035"}</option>
                                <option value="2036" className="lp">{"2036"}</option>
                                <option value="2037">{"2037"}</option>
                                <option value="2038">{"2038"}</option>
                                <option value="2039">{"2039"}</option>
                                <option value="2040" className="lp">{"2040"}</option>
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
                                <input type="radio" name="f136" value="01" />
                                {"1"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f136" value="02" />
                                {"2"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f136" value="03" />
                                {"3"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f136" value="04" />
                                {"4"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f136" value="05" />
                                {"5"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f136" value="06" />
                                {"6"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f136" value="07" />
                                {"7"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f136" value="08" />
                                {"8"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f136" value="09" />
                                {"9"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f136" value="10" />
                                {"10"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f136" value="11" />
                                {"11"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f136" value="12" />
                                {"12"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f136" value="13" />
                                {"13"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f136" value="14" />
                                {"14"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f136" value="15" />
                                {"15"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f136" value="16" />
                                {"16"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f136" value="17" />
                                {"17"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f136" value="18" />
                                {"18"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f136" value="19" />
                                {"19"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f136" value="20" />
                                {"20"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f136" value="21" />
                                {"21"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f136" value="22" />
                                {"22"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f136" value="23" />
                                {"23"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f136" value="24" />
                                {"24"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f136" value="25" />
                                {"25"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f136" value="26" />
                                {"26"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f136" value="27" />
                                {"27"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f136" value="28" />
                                {"28"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f136" value="29" defaultChecked={true} />
                                {"29"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f136" value="30" />
                                {"30"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f136" value="31" />
                                {"31"}
                              </label>
                            </div>
                          </div>
                        </div>
                        <span className="field__hint">{"The entry closes after this date"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f137">{"Priority"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f137" defaultValue={"Normal"}>
                            <option>{"High"}</option>
                            <option>{"Normal"}</option>
                            <option>{"Low"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Decides who is offered a freed room first"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f138">{"How to contact"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f138" defaultValue={"WhatsApp"}>
                            <option>{"WhatsApp"}</option>
                            <option>{"Phone call"}</option>
                            <option>{"Email"}</option>
                            <option>{"SMS"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f139">{"When a room frees up"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f139" defaultValue={"Tell staff only"}>
                            <option>{"Tell staff only"}</option>
                            <option>{"Offer the guest and hold the room"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"A held room is blocked for the time below and released by itself"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f140">{"Hold the offered room for"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f140" defaultValue={"6 hours"}>
                            <option>{"2 hours"}</option>
                            <option>{"6 hours"}</option>
                            <option>{"12 hours"}</option>
                            <option>{"24 hours"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="field" style={{"marginTop": "12px"}}>
                      <span className="field__label">{"Other room types the guest would accept"}</span>
                      <div className="row">
                        <label className="check">
                          <input className="check__input" type="checkbox" />
                          <span className="check__box" />
                          {"Garden Deluxe Room"}
                        </label>
                        <label className="check">
                          <input className="check__input" type="checkbox" />
                          <span className="check__box" />
                          {"Pool Deluxe Room"}
                        </label>
                        <label className="check">
                          <input className="check__input" type="checkbox" />
                          <span className="check__box" />
                          {"Deluxe Suite"}
                        </label>
                        <label className="check">
                          <input className="check__input" type="checkbox" defaultChecked={true} />
                          <span className="check__box" />
                          {"Premium Suite"}
                        </label>
                      </div>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Flexible by one day either side"}
                    </label>
                    <div className="field">
                      <label className="field__label" htmlFor="f141">{"Notes"}</label>
                      <textarea className="field__input field__input--area" id="f141" defaultValue={""} />
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save entry"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="RS-16b-WL-0006" data-code="RS-16b" role="dialog" aria-modal="true" aria-labelledby="RS-16b-WL-0006-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RS-16b-WL-0006-t">{"Remove from waitlist"}</h2>
                      <p className="modal__desc">{"Sandra Mueller · WL-0006"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <label className="field__label" htmlFor="f142">
                        {"Reason "}
                        <span className="field__req">{"*"}</span>
                      </label>
                      <div className="field__wrap">
                        <select className="field__input field__input--select" id="f142" defaultValue={"Booked elsewhere"}>
                          <option>{"Booked elsewhere"}</option>
                          <option>{"Guest no longer needs it"}</option>
                          <option>{"No response"}</option>
                          <option>{"Booked with us"}</option>
                        </select>
                        <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Remove"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="RS-O12-WL-0006" data-code="RS-O12" role="dialog" aria-modal="true" aria-labelledby="RS-O12-WL-0006-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RS-O12-WL-0006-t">{"Room-available message"}</h2>
                      <p className="modal__desc">{"WhatsApp preview · WL-0006"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="bubble">
                      <p>{"Good news, Sandra – a Premium Suite is now available for 25 – 28 Oct. Reply within 12 hours to book it."}</p>
                      <p className="bubble__t">{"The Aviv Kochi · 09:12"}</p>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal" id="RS-16a-new" data-code="RS-16a" role="dialog" aria-modal="true" aria-labelledby="RS-16a-new-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RS-16a-new-t">{"Waitlist entry"}</h2>
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
                        <label className="field__label" htmlFor="f145">
                          {"Guest name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f145" type="text" required={true} defaultValue={""} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f146">
                          {"Mobile "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f146" type="tel" required={true} defaultValue={""} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f147">{"Room type"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f147" defaultValue={"Any"}>
                            <option>{"Any"}</option>
                            <option>{"Garden Deluxe Room"}</option>
                            <option>{"Pool Deluxe Room"}</option>
                            <option>{"Deluxe Suite"}</option>
                            <option>{"Premium Suite"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f148">{"Arrival"}</label>
                        <div className="dpk">
                          <button type="button" className="dpk-f field__input" id="f148" aria-haspopup="dialog">
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
                              <select className="dpk-m" name="f148-month" aria-label="Month" defaultValue={"10"}>
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
                              <select className="dpk-y" name="f148-year" aria-label="Year" defaultValue={"2026"}>
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
                                <input type="radio" name="f148" value="01" />
                                {"1"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f148" value="02" />
                                {"2"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f148" value="03" />
                                {"3"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f148" value="04" />
                                {"4"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f148" value="05" />
                                {"5"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f148" value="06" />
                                {"6"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f148" value="07" />
                                {"7"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f148" value="08" />
                                {"8"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f148" value="09" />
                                {"9"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f148" value="10" />
                                {"10"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f148" value="11" />
                                {"11"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f148" value="12" />
                                {"12"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f148" value="13" />
                                {"13"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f148" value="14" />
                                {"14"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f148" value="15" />
                                {"15"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f148" value="16" />
                                {"16"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f148" value="17" />
                                {"17"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f148" value="18" />
                                {"18"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f148" value="19" />
                                {"19"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f148" value="20" />
                                {"20"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f148" value="21" />
                                {"21"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f148" value="22" />
                                {"22"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f148" value="23" />
                                {"23"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f148" value="24" />
                                {"24"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f148" value="25" />
                                {"25"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f148" value="26" />
                                {"26"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f148" value="27" />
                                {"27"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f148" value="28" />
                                {"28"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f148" value="29" />
                                {"29"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f148" value="30" />
                                {"30"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f148" value="31" />
                                {"31"}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f149">{"Departure"}</label>
                        <div className="dpk">
                          <button type="button" className="dpk-f field__input" id="f149" aria-haspopup="dialog">
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
                              <select className="dpk-m" name="f149-month" aria-label="Month" defaultValue={"10"}>
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
                              <select className="dpk-y" name="f149-year" aria-label="Year" defaultValue={"2026"}>
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
                                <input type="radio" name="f149" value="01" />
                                {"1"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f149" value="02" />
                                {"2"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f149" value="03" />
                                {"3"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f149" value="04" />
                                {"4"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f149" value="05" />
                                {"5"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f149" value="06" />
                                {"6"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f149" value="07" />
                                {"7"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f149" value="08" />
                                {"8"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f149" value="09" />
                                {"9"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f149" value="10" />
                                {"10"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f149" value="11" />
                                {"11"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f149" value="12" />
                                {"12"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f149" value="13" />
                                {"13"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f149" value="14" />
                                {"14"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f149" value="15" />
                                {"15"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f149" value="16" />
                                {"16"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f149" value="17" />
                                {"17"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f149" value="18" />
                                {"18"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f149" value="19" />
                                {"19"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f149" value="20" />
                                {"20"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f149" value="21" />
                                {"21"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f149" value="22" />
                                {"22"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f149" value="23" />
                                {"23"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f149" value="24" />
                                {"24"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f149" value="25" />
                                {"25"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f149" value="26" />
                                {"26"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f149" value="27" />
                                {"27"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f149" value="28" />
                                {"28"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f149" value="29" />
                                {"29"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f149" value="30" />
                                {"30"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f149" value="31" />
                                {"31"}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f150">{"Adults"}</label>
                        <input className="field__input num" id="f150" type="number" defaultValue={"2"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f151">{"Rooms"}</label>
                        <input className="field__input num" id="f151" type="number" defaultValue={"1"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f152">{"Valid until"}</label>
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
                              <select className="dpk-m" name="f152-month" aria-label="Month" defaultValue={"10"}>
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
                              <select className="dpk-y" name="f152-year" aria-label="Year" defaultValue={"2026"}>
                                <option value="2024" className="lp">{"2024"}</option>
                                <option value="2025">{"2025"}</option>
                                <option value="2026">{"2026"}</option>
                                <option value="2027">{"2027"}</option>
                                <option value="2028" className="lp">{"2028"}</option>
                                <option value="2029">{"2029"}</option>
                                <option value="2030">{"2030"}</option>
                                <option value="2031">{"2031"}</option>
                                <option value="2032" className="lp">{"2032"}</option>
                                <option value="2033">{"2033"}</option>
                                <option value="2034">{"2034"}</option>
                                <option value="2035">{"2035"}</option>
                                <option value="2036" className="lp">{"2036"}</option>
                                <option value="2037">{"2037"}</option>
                                <option value="2038">{"2038"}</option>
                                <option value="2039">{"2039"}</option>
                                <option value="2040" className="lp">{"2040"}</option>
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
                                <input type="radio" name="f152" value="01" />
                                {"1"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f152" value="02" />
                                {"2"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f152" value="03" />
                                {"3"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f152" value="04" />
                                {"4"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f152" value="05" />
                                {"5"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f152" value="06" />
                                {"6"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f152" value="07" />
                                {"7"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f152" value="08" />
                                {"8"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f152" value="09" />
                                {"9"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f152" value="10" />
                                {"10"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f152" value="11" />
                                {"11"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f152" value="12" />
                                {"12"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f152" value="13" />
                                {"13"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f152" value="14" />
                                {"14"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f152" value="15" />
                                {"15"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f152" value="16" />
                                {"16"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f152" value="17" />
                                {"17"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f152" value="18" />
                                {"18"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f152" value="19" />
                                {"19"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f152" value="20" />
                                {"20"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f152" value="21" />
                                {"21"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f152" value="22" />
                                {"22"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f152" value="23" />
                                {"23"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f152" value="24" />
                                {"24"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f152" value="25" />
                                {"25"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f152" value="26" />
                                {"26"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f152" value="27" />
                                {"27"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f152" value="28" />
                                {"28"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f152" value="29" defaultChecked={true} />
                                {"29"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f152" value="30" />
                                {"30"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="f152" value="31" />
                                {"31"}
                              </label>
                            </div>
                          </div>
                        </div>
                        <span className="field__hint">{"The entry closes after this date"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f153">{"Priority"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f153" defaultValue={"Normal"}>
                            <option>{"High"}</option>
                            <option>{"Normal"}</option>
                            <option>{"Low"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f154">{"How to contact"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f154" defaultValue={"WhatsApp"}>
                            <option>{"WhatsApp"}</option>
                            <option>{"Phone call"}</option>
                            <option>{"Email"}</option>
                            <option>{"SMS"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f155">{"When a room frees up"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f155" defaultValue={"Tell staff only"}>
                            <option>{"Tell staff only"}</option>
                            <option>{"Offer the guest and hold the room"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f156">{"Hold the offered room for"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f156" defaultValue={"6 hours"}>
                            <option>{"2 hours"}</option>
                            <option>{"6 hours"}</option>
                            <option>{"12 hours"}</option>
                            <option>{"24 hours"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="field" style={{"marginTop": "12px"}}>
                      <span className="field__label">{"Other room types the guest would accept"}</span>
                      <div className="row">
                        <label className="check">
                          <input className="check__input" type="checkbox" />
                          <span className="check__box" />
                          {"Garden Deluxe Room"}
                        </label>
                        <label className="check">
                          <input className="check__input" type="checkbox" />
                          <span className="check__box" />
                          {"Pool Deluxe Room"}
                        </label>
                        <label className="check">
                          <input className="check__input" type="checkbox" />
                          <span className="check__box" />
                          {"Deluxe Suite"}
                        </label>
                        <label className="check">
                          <input className="check__input" type="checkbox" />
                          <span className="check__box" />
                          {"Premium Suite"}
                        </label>
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f157">{"Notes"}</label>
                      <textarea className="field__input field__input--area" id="f157" defaultValue={""} />
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save entry"}</a>
                  </div>
                </form>
              </div>
              <details className="helpbox">
                <summary>
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#help" />
                  </svg>
                  {" Help for this screen "}
                  <span className="code-chip">{"RS-16"}</span>
                </summary>
                <dl className="helpbox__body">
                  <dt>{"What it is for"}</dt>
                  <dd>{"Requests waiting for full dates; alert when rooms free up"}</dd>
                  <dt>{"Opened from"}</dt>
                  <dd>
                    <Link to={"/reservation/rs-01-reservation-dashboard"}>{"RS-01"}</Link>
                    {", "}
                    <Link to={"/reservation/rs-02-enquiry-entry"}>{"RS-02"}</Link>
                    {", "}
                    <Link to={"/reservation/rs-04-availability-and-rate-search"}>{"RS-04"}</Link>
                    {", menu"}
                  </dd>
                  <dt>{"Leads to"}</dt>
                  <dd>
                    <Link to={"/reservation/rs-05-new-reservation"}>{"RS-05"}</Link>
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
            </main>
          </div>
        </div>
      </div>
    </ScreenShell>
  );
}
