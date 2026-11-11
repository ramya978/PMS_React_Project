// GENERATED from public/reservation/rs-25-room-allocation/index.html by scripts/convert_legacy.py.
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
    "href": "/reservation/rs-25-room-allocation/rs-25-room-allocation.css",
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

export default function ReservationRs25RoomAllocation() {
  return (
    <ScreenShell title="Room Allocation" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="RS-25" data-code="RS-25" data-static="1" className="legacy-body">
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
                  <Link className="nav__item is-active" data-nav="RS-25" title="Room Allocation" aria-current="page" to={"/reservation/rs-25-room-allocation"}>
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
            <main className="app__content" id="main" data-code="RS-25" tabIndex="-1">
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
                        <span aria-current="page">{"Room Allocation"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">{"Room Allocation"}</h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"RS-25"}</span>
                  <div className="page-header__filters">
                    <div className="hctl">
                      <div className="hsearch">
                        <input className="hsearch__input" id="rs25-s" type="search" name="q" placeholder="Search by guest, booking no., agent or partner confirmation no." aria-label="Search by guest, booking no., agent or partner confirmation no." autoComplete="off" />
                        <label className="hsearch__ic" htmlFor="rs25-s" title="Search">
                          <svg className="icon" width="17" height="17" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#search" />
                          </svg>
                          <span className="sr-only">{"Search"}</span>
                        </label>
                      </div>
                      <label className="hfilter__btn" htmlFor="rs25-f" title="Show or hide the filters">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#filter" />
                        </svg>
                        <span>{"Filter"}</span>
                        <i className="hfilter__dot" aria-hidden="true" />
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </label>
                      <input className="hfilter__tg" type="checkbox" id="rs25-f" aria-label="Show filters" />
                      <div className="hfilter" role="search" aria-label="Filters">
                        <span className="hfilter__hic" title="Filters">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#filter" />
                          </svg>
                        </span>
                        <div className="hfilter__grid">
                          <label className="hf-f">
                            <span className="hf-f__l">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#calendar" />
                              </svg>
                              {"Arrival from"}
                            </span>
                            <input className="hf-f__c" type="date" name="ra-from" defaultValue={"2026-10-22"} />
                          </label>
                          <label className="hf-f">
                            <span className="hf-f__l">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#calendar" />
                              </svg>
                              {"Arrival to"}
                            </span>
                            <input className="hf-f__c" type="date" name="ra-to" defaultValue={"2026-10-23"} />
                          </label>
                          <label className="hf-f">
                            <span className="hf-f__l">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#users" />
                              </svg>
                              {"Agent / corporate"}
                            </span>
                            <select className="hf-f__c" name="ra-ag" defaultValue={"ALL"}>
                              <option>{"ALL"}</option>
                              <option>{"Agoda"}</option>
                              <option>{"Booking.com"}</option>
                              <option>{"Cochin Marine Services Ltd"}</option>
                              <option>{"Email"}</option>
                              <option>{"Expedia"}</option>
                              <option>{"MakeMyTrip / Goibibo"}</option>
                              <option>{"Malabar Spice Exports Pvt Ltd"}</option>
                              <option>{"Phone"}</option>
                              <option>{"Self booking"}</option>
                              <option>{"Aviv mobile app"}</option>
                            </select>
                            <svg className="icon hf-f__chev" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                          <label className="hf-f">
                            <span className="hf-f__l">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#star" />
                              </svg>
                              {"Guest class"}
                            </span>
                            <select className="hf-f__c" name="ra-gc" defaultValue={"ALL"}>
                              <option>{"ALL"}</option>
                              <option>{"Corporate"}</option>
                              <option>{"Regular"}</option>
                              <option>{"VIP"}</option>
                              <option>{"Aviv Club Gold"}</option>
                              <option>{"Aviv Club Platinum"}</option>
                              <option>{"Aviv Club Silver"}</option>
                            </select>
                            <svg className="icon hf-f__chev" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                          <label className="hf-f">
                            <span className="hf-f__l">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#bed" />
                              </svg>
                              {"Room type"}
                            </span>
                            <select className="hf-f__c" name="ra-rt" defaultValue={"ALL"}>
                              <option>{"ALL"}</option>
                              <option>{"GDLX · Garden Deluxe"}</option>
                              <option>{"PDLX · Pool Deluxe"}</option>
                              <option>{"DLXS · Deluxe Suite"}</option>
                              <option>{"PRMS · Premium Suite"}</option>
                            </select>
                            <svg className="icon hf-f__chev" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                          <label className="hf-f">
                            <span className="hf-f__l">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#door-open" />
                              </svg>
                              {"Room allocation"}
                            </span>
                            <select className="hf-f__c" name="ra-al" defaultValue={"ALL"}>
                              <option>{"ALL"}</option>
                              <option>{"Allocated"}</option>
                              <option>{"Not allocated"}</option>
                            </select>
                            <svg className="icon hf-f__chev" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                          <label className="hf-f">
                            <span className="hf-f__l">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Nights"}
                            </span>
                            <select className="hf-f__c" name="ra-nt" defaultValue={"ALL"}>
                              <option>{"ALL"}</option>
                              <option>{"1 night"}</option>
                              <option>{"2 nights"}</option>
                              <option>{"3 or more"}</option>
                            </select>
                            <svg className="icon hf-f__chev" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                          <label className="hf-f">
                            <span className="hf-f__l">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pen-line" />
                              </svg>
                              {"Allocation remarks"}
                            </span>
                            <input className="hf-f__c" type="text" name="ra-rem" placeholder="Words in the remarks" />
                          </label>
                          <label className="hf-f">
                            <span className="hf-f__l">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#smile" />
                              </svg>
                              {"Guest preferences"}
                            </span>
                            <select className="hf-f__c" name="ra-pf" defaultValue={"ALL"}>
                              <option>{"ALL"}</option>
                              <option>{"High floor"}</option>
                              <option>{"Non-smoking"}</option>
                              <option>{"Garden view"}</option>
                              <option>{"Pool view"}</option>
                              <option>{"Twin beds"}</option>
                              <option>{"Quiet room"}</option>
                              <option>{"Near lift"}</option>
                              <option>{"King bed"}</option>
                              <option>{"Extra pillows"}</option>
                              <option>{"Baby cot"}</option>
                              <option>{"Vegetarian meals"}</option>
                              <option>{"Jain meals"}</option>
                              <option>{"Nut allergy"}</option>
                              <option>{"Early check-in"}</option>
                              <option>{"Late check-out"}</option>
                              <option>{"Accessible room"}</option>
                              <option>{"Adjoining rooms"}</option>
                            </select>
                            <svg className="icon hf-f__chev" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                          <label className="hf-f">
                            <span className="hf-f__l">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#hash" />
                              </svg>
                              {"Last room no."}
                            </span>
                            <input className="hf-f__c" type="text" name="ra-last" placeholder="Room the guest had before" />
                          </label>
                        </div>
                        <div className="hfilter__more">
                          <fieldset className="arl-cols">
                            <legend>
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#columns" />
                              </svg>
                              {"Show columns"}
                            </legend>
                            <label className="arl-col">
                              <input type="checkbox" name="col" value="tar" id="rac-tar" defaultChecked={true} />
                              {"Room tariff"}
                            </label>
                            <label className="arl-col">
                              <input type="checkbox" name="col" value="pref" id="rac-pref" defaultChecked={true} />
                              {"Guest preferences"}
                            </label>
                            <label className="arl-col">
                              <input type="checkbox" name="col" value="rem" id="rac-rem" />
                              {"Allocation remarks"}
                            </label>
                            <label className="arl-col">
                              <input type="checkbox" name="col" value="last" id="rac-last" />
                              {"Last room no."}
                            </label>
                            <label className="arl-col">
                              <input type="checkbox" name="col" value="adv" id="rac-adv" />
                              {"Advance received"}
                            </label>
                            <label className="arl-col">
                              <input type="checkbox" name="col" value="src" id="rac-src" />
                              {"Source"}
                            </label>
                            <label className="arl-col">
                              <input type="checkbox" name="col" value="by" id="rac-by" />
                              {"Allocated by / when"}
                            </label>
                          </fieldset>
                        </div>
                        <div className="hfilter__acts">
                          <button className="hfilter__clear" type="reset" title="Clear all filters">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#refresh" />
                            </svg>
                            <span>{"Clear"}</span>
                          </button>
                          <label className="hfilter__done" htmlFor="rs25-f">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check" />
                            </svg>
                            {"Close"}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="page-header__actions">
                    <a className="btn ph-ic" href="#RS-25-auto">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#sparkles" />
                      </svg>
                      {"Auto-allocate"}
                    </a>
                    <a className="btn ph-ic" href="#RS-25-export">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#download" />
                      </svg>
                      {"Export"}
                    </a>
                    <Link className="btn ph-ic" data-leads-to="RS-26" to={"/reservation/rs-26-expected-arrivals"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#log-in" />
                      </svg>
                      {"Expected arrivals"}
                    </Link>
                  </div>
                </div>
              </header>
              <section className="st-tiles" data-n="4" aria-label="Summary">
                <div className="st-tile">
                  <span className="st-tile__ic">
                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#log-in" />
                    </svg>
                  </span>
                  <span className="st-tile__l">{"Arrivals in range"}</span>
                  <span className="st-tile__v">
                    <b className="st-tile__n">{"16"}</b>
                  </span>
                </div>
                <div className="st-tile">
                  <span className="st-tile__ic">
                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#door-open" />
                    </svg>
                  </span>
                  <span className="st-tile__l">{"Allocated"}</span>
                  <span className="st-tile__v">
                    <b className="st-tile__n">{"7"}</b>
                  </span>
                </div>
                <div className="st-tile">
                  <span className="st-tile__ic">
                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#clock" />
                    </svg>
                  </span>
                  <span className="st-tile__l">{"Not allocated"}</span>
                  <span className="st-tile__v">
                    <b className="st-tile__n">{"9"}</b>
                  </span>
                </div>
                <div className="st-tile">
                  <span className="st-tile__ic">
                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#sparkles" />
                    </svg>
                  </span>
                  <span className="st-tile__l">{"Rooms ready to allocate"}</span>
                  <span className="st-tile__v">
                    <b className="st-tile__n">{"21"}</b>
                  </span>
                </div>
              </section>
              <div className="ra-note" data-code="RS-25-rule">
                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#info" />
                </svg>
                <span>
                  <b>{"Allocate before arrival is on."}</b>
                  {" Rooms can be allocated up to 7 days before arrival and stay changeable until check-in. Change it in "}
                  <Link data-leads-to="RSS-14" to={"/setup/rss-14-reservation-parameters"}>{"Reservation Parameters"}</Link>
                  {"."}
                </span>
              </div>
              <div className="arl-wrap">
                <div className="s-scroll s-scroll--tall arl ra-list" data-code="RS-25-list">
                  <table className="srt dt__table arl-t ra-t" data-code="RS-25-table" style={{"--srt-cols": "auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto"}} data-mc="">
                    <caption className="sr-only">{"Arrivals and their rooms"}</caption>
                    <thead>
                      <tr>
                        <th scope="col" className="arl-bk">
                          <input className="srt-i srt-a0" type="radio" name="strs250" id="strs250-0a" aria-label="Sort by Booking no., lowest or A first" />
                          <input className="srt-i srt-d0" type="radio" name="strs250" id="strs250-0d" aria-label="Sort by Booking no., highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="strs250-0a">{"Booking no."}</label>
                          <label className="srt-l srt-l--d" htmlFor="strs250-0d" aria-hidden="true">{"Booking no."}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a1" type="radio" name="strs250" id="strs250-1a" aria-label="Sort by Guest name, lowest or A first" />
                          <input className="srt-i srt-d1" type="radio" name="strs250" id="strs250-1d" aria-label="Sort by Guest name, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="strs250-1a">{"Guest name"}</label>
                          <label className="srt-l srt-l--d" htmlFor="strs250-1d" aria-hidden="true">{"Guest name"}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a2" type="radio" name="strs250" id="strs250-2a" aria-label="Sort by Room type, lowest or A first" />
                          <input className="srt-i srt-d2" type="radio" name="strs250" id="strs250-2d" aria-label="Sort by Room type, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="strs250-2a">{"Room type"}</label>
                          <label className="srt-l srt-l--d" htmlFor="strs250-2d" aria-hidden="true">{"Room type"}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a3" type="radio" name="strs250" id="strs250-3a" aria-label="Sort by Room no., lowest or A first" />
                          <input className="srt-i srt-d3" type="radio" name="strs250" id="strs250-3d" aria-label="Sort by Room no., highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="strs250-3a">{"Room no."}</label>
                          <label className="srt-l srt-l--d" htmlFor="strs250-3d" aria-hidden="true">{"Room no."}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a4" type="radio" name="strs250" id="strs250-4a" aria-label="Sort by FO status, lowest or A first" />
                          <input className="srt-i srt-d4" type="radio" name="strs250" id="strs250-4d" aria-label="Sort by FO status, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="strs250-4a">{"FO status"}</label>
                          <label className="srt-l srt-l--d" htmlFor="strs250-4d" aria-hidden="true">{"FO status"}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a5" type="radio" name="strs250" id="strs250-5a" aria-label="Sort by ETA, lowest or A first" />
                          <input className="srt-i srt-d5" type="radio" name="strs250" id="strs250-5d" aria-label="Sort by ETA, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="strs250-5a">{"ETA"}</label>
                          <label className="srt-l srt-l--d" htmlFor="strs250-5d" aria-hidden="true">{"ETA"}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a6" type="radio" name="strs250" id="strs250-6a" aria-label="Sort by Arrival, lowest or A first" />
                          <input className="srt-i srt-d6" type="radio" name="strs250" id="strs250-6d" aria-label="Sort by Arrival, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="strs250-6a">{"Arrival"}</label>
                          <label className="srt-l srt-l--d" htmlFor="strs250-6d" aria-hidden="true">{"Arrival"}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a7" type="radio" name="strs250" id="strs250-7a" aria-label="Sort by Departure, lowest or A first" />
                          <input className="srt-i srt-d7" type="radio" name="strs250" id="strs250-7d" aria-label="Sort by Departure, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="strs250-7a">{"Departure"}</label>
                          <label className="srt-l srt-l--d" htmlFor="strs250-7d" aria-hidden="true">{"Departure"}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a8" type="radio" name="strs250" id="strs250-8a" aria-label="Sort by Nights, lowest or A first" />
                          <input className="srt-i srt-d8" type="radio" name="strs250" id="strs250-8d" aria-label="Sort by Nights, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="strs250-8a">{"Nights"}</label>
                          <label className="srt-l srt-l--d" htmlFor="strs250-8d" aria-hidden="true">{"Nights"}</label>
                        </th>
                        <th scope="col" className="c-tar">
                          <input className="srt-i srt-a9" type="radio" name="strs250" id="strs250-9a" aria-label="Sort by Room tariff, lowest or A first" />
                          <input className="srt-i srt-d9" type="radio" name="strs250" id="strs250-9d" aria-label="Sort by Room tariff, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="strs250-9a">{"Room tariff"}</label>
                          <label className="srt-l srt-l--d" htmlFor="strs250-9d" aria-hidden="true">{"Room tariff"}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a10" type="radio" name="strs250" id="strs250-10a" aria-label="Sort by Adults, lowest or A first" />
                          <input className="srt-i srt-d10" type="radio" name="strs250" id="strs250-10d" aria-label="Sort by Adults, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="strs250-10a">{"Adults"}</label>
                          <label className="srt-l srt-l--d" htmlFor="strs250-10d" aria-hidden="true">{"Adults"}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a11" type="radio" name="strs250" id="strs250-11a" aria-label="Sort by Child, lowest or A first" />
                          <input className="srt-i srt-d11" type="radio" name="strs250" id="strs250-11d" aria-label="Sort by Child, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="strs250-11a">{"Child"}</label>
                          <label className="srt-l srt-l--d" htmlFor="strs250-11d" aria-hidden="true">{"Child"}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a12" type="radio" name="strs250" id="strs250-12a" aria-label="Sort by Rate plan, lowest or A first" />
                          <input className="srt-i srt-d12" type="radio" name="strs250" id="strs250-12d" aria-label="Sort by Rate plan, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="strs250-12a">{"Rate plan"}</label>
                          <label className="srt-l srt-l--d" htmlFor="strs250-12d" aria-hidden="true">{"Rate plan"}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a13" type="radio" name="strs250" id="strs250-13a" aria-label="Sort by Meal, lowest or A first" />
                          <input className="srt-i srt-d13" type="radio" name="strs250" id="strs250-13d" aria-label="Sort by Meal, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="strs250-13a">{"Meal"}</label>
                          <label className="srt-l srt-l--d" htmlFor="strs250-13d" aria-hidden="true">{"Meal"}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a14" type="radio" name="strs250" id="strs250-14a" aria-label="Sort by Repeat guest, lowest or A first" />
                          <input className="srt-i srt-d14" type="radio" name="strs250" id="strs250-14d" aria-label="Sort by Repeat guest, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="strs250-14a">{"Repeat guest"}</label>
                          <label className="srt-l srt-l--d" htmlFor="strs250-14d" aria-hidden="true">{"Repeat guest"}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a15" type="radio" name="strs250" id="strs250-15a" aria-label="Sort by Guest class, lowest or A first" />
                          <input className="srt-i srt-d15" type="radio" name="strs250" id="strs250-15d" aria-label="Sort by Guest class, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="strs250-15a">{"Guest class"}</label>
                          <label className="srt-l srt-l--d" htmlFor="strs250-15d" aria-hidden="true">{"Guest class"}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a16" type="radio" name="strs250" id="strs250-16a" aria-label="Sort by Agent / corporate, lowest or A first" />
                          <input className="srt-i srt-d16" type="radio" name="strs250" id="strs250-16d" aria-label="Sort by Agent / corporate, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="strs250-16a">{"Agent / corporate"}</label>
                          <label className="srt-l srt-l--d" htmlFor="strs250-16d" aria-hidden="true">{"Agent / corporate"}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a17" type="radio" name="strs250" id="strs250-17a" aria-label="Sort by Allocation, lowest or A first" />
                          <input className="srt-i srt-d17" type="radio" name="strs250" id="strs250-17d" aria-label="Sort by Allocation, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="strs250-17a">{"Allocation"}</label>
                          <label className="srt-l srt-l--d" htmlFor="strs250-17d" aria-hidden="true">{"Allocation"}</label>
                        </th>
                        <th scope="col" className="c-pref">
                          <input className="srt-i srt-a18" type="radio" name="strs250" id="strs250-18a" aria-label="Sort by Guest preferences, lowest or A first" />
                          <input className="srt-i srt-d18" type="radio" name="strs250" id="strs250-18d" aria-label="Sort by Guest preferences, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="strs250-18a">{"Guest preferences"}</label>
                          <label className="srt-l srt-l--d" htmlFor="strs250-18d" aria-hidden="true">{"Guest preferences"}</label>
                        </th>
                        <th scope="col" className="c-rem">
                          <input className="srt-i srt-a19" type="radio" name="strs250" id="strs250-19a" aria-label="Sort by Allocation remarks, lowest or A first" />
                          <input className="srt-i srt-d19" type="radio" name="strs250" id="strs250-19d" aria-label="Sort by Allocation remarks, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="strs250-19a">{"Allocation remarks"}</label>
                          <label className="srt-l srt-l--d" htmlFor="strs250-19d" aria-hidden="true">{"Allocation remarks"}</label>
                        </th>
                        <th scope="col" className="c-last">
                          <input className="srt-i srt-a20" type="radio" name="strs250" id="strs250-20a" aria-label="Sort by Last room no., lowest or A first" />
                          <input className="srt-i srt-d20" type="radio" name="strs250" id="strs250-20d" aria-label="Sort by Last room no., highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="strs250-20a">{"Last room no."}</label>
                          <label className="srt-l srt-l--d" htmlFor="strs250-20d" aria-hidden="true">{"Last room no."}</label>
                        </th>
                        <th scope="col" className="c-adv">
                          <input className="srt-i srt-a21" type="radio" name="strs250" id="strs250-21a" aria-label="Sort by Advance received, lowest or A first" />
                          <input className="srt-i srt-d21" type="radio" name="strs250" id="strs250-21d" aria-label="Sort by Advance received, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="strs250-21a">{"Advance received"}</label>
                          <label className="srt-l srt-l--d" htmlFor="strs250-21d" aria-hidden="true">{"Advance received"}</label>
                        </th>
                        <th scope="col" className="c-src">
                          <input className="srt-i srt-a22" type="radio" name="strs250" id="strs250-22a" aria-label="Sort by Source, lowest or A first" />
                          <input className="srt-i srt-d22" type="radio" name="strs250" id="strs250-22d" aria-label="Sort by Source, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="strs250-22a">{"Source"}</label>
                          <label className="srt-l srt-l--d" htmlFor="strs250-22d" aria-hidden="true">{"Source"}</label>
                        </th>
                        <th scope="col" className="c-by">
                          <input className="srt-i srt-a23" type="radio" name="strs250" id="strs250-23a" aria-label="Sort by Allocated by / when, lowest or A first" />
                          <input className="srt-i srt-d23" type="radio" name="strs250" id="strs250-23d" aria-label="Sort by Allocated by / when, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="strs250-23a">{"Allocated by / when"}</label>
                          <label className="srt-l srt-l--d" htmlFor="strs250-23d" aria-hidden="true">{"Allocated by / when"}</label>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="ra-FK-10006 rt-PDLX al-yes gc-aviv-club-silver ag-booking-com nt-3 pf-non-smoking pf-high-floor ad-22" style={{"--k0": "1", "--k1": "13", "--k2": "3", "--k3": "5", "--k4": "4", "--k5": "1", "--k6": "1", "--k7": "4", "--k8": "4", "--k9": "2", "--k10": "1", "--k11": "1", "--k12": "2", "--k13": "1", "--k14": "3", "--k15": "6", "--k16": "2", "--k17": "1", "--k18": "6", "--k19": "4", "--k20": "6", "--k21": "7", "--k22": "7", "--k23": "4"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel ra-sel" type="radio" name="ra" id="ra-FK-10006" aria-label="Select Mr Ravi Kabir" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10006" data-leads-to="RS-07">{"FK-10006/1"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <Link className="fd-link" data-leads-to="RS-18" to={"/reservation/rs-18-guest-profile"}>{"Mr Ravi Kabir"}</Link>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PDLX"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms fd-rms">
                            <span className="fd-rm fd-rm--OC" title="Vacant inspected">{"505"}</span>
                          </span>
                          <a className="arl-assign ra-chg" href="#RS-25-alloc">{"Change"}</a>
                        </td>
                        <td className="dt__td" data-label="FO status" data-w2="">
                          <span className="ra-fo ra-fo--ok">{"Vacant · inspected"}</span>
                        </td>
                        <td className="dt__td" data-label="ETA" data-m="">{"09:15"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 22 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"26 Oct"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"4"}</td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹8,199 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"1"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"0"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"CP"}</td>
                        <td className="dt__td" data-label="Repeat guest" data-w2="" data-m="">{"Yes · 2"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="" data-m="">{"Aviv Club Silver"}</td>
                        <td className="dt__td" data-label="Agent / corporate" data-w2="" data-m="">
                          <span className="arl-ag">{"Booking.com"}</span>
                        </td>
                        <td className="dt__td" data-label="Allocation" data-w2="" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Allocated"}
                          </span>
                        </td>
                        <td className="dt__td c-pref" data-label="Guest preferences" data-w2="" data-m="">{"Non-smoking, High floor"}</td>
                        <td className="dt__td c-rem" data-label="Allocation remarks" data-m="">{"Early arrival – room needed by 09:00"}</td>
                        <td className="dt__td c-last" data-label="Last room no." data-w2="" data-m="">{"412"}</td>
                        <td className="dt__td c-adv" data-label="Advance received" data-w2="" data-m="">{"₹43,277.68"}</td>
                        <td className="dt__td c-src" data-label="Source" data-w2="" data-m="">{"OTA prepaid"}</td>
                        <td className="dt__td c-by" data-label="Allocated by / when" data-w2="" data-m="">{"Meera P. · 21 Oct 17:40"}</td>
                      </tr>
                      <tr className="ra-FK-10015 rt-GDLX al-no gc-regular ag-booking-com nt-2 pf-garden-view ad-22" style={{"--k0": "2", "--k1": "2", "--k2": "2", "--k3": "8", "--k4": "5", "--k5": "8", "--k6": "1", "--k7": "2", "--k8": "2", "--k9": "1", "--k10": "2", "--k11": "1", "--k12": "2", "--k13": "1", "--k14": "1", "--k15": "2", "--k16": "2", "--k17": "2", "--k18": "2", "--k19": "10", "--k20": "10", "--k21": "10", "--k22": "6", "--k23": "8"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel ra-sel" type="radio" name="ra" id="ra-FK-10015" aria-label="Select Mr Dileep Kurian" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10015" data-leads-to="RS-07">{"FK-10015/1"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <Link className="fd-link" data-leads-to="RS-18" to={"/reservation/rs-18-guest-profile"}>{"Mr Dileep Kurian"}</Link>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <a className="arl-assign" href="#RS-25-alloc">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#plus" />
                            </svg>
                            {"Assign"}
                          </a>
                        </td>
                        <td className="dt__td" data-label="FO status" data-e="">
                          <span className="ra-fo">{"–"}</span>
                        </td>
                        <td className="dt__td" data-label="ETA" data-m="">{"13:30"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 22 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"24 Oct"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"2"}</td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹6,820 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"2"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"0"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"CP"}</td>
                        <td className="dt__td" data-label="Repeat guest" data-w2="" data-m="">{"No"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="" data-m="">{"Regular"}</td>
                        <td className="dt__td" data-label="Agent / corporate" data-w2="" data-m="">
                          <span className="arl-ag">{"Booking.com"}</span>
                        </td>
                        <td className="dt__td" data-label="Allocation" data-w2="" data-s="">
                          <span className="pill pill--tentative">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"Not allocated"}
                          </span>
                        </td>
                        <td className="dt__td c-pref" data-label="Guest preferences" data-w2="" data-m="">{"Garden view"}</td>
                        <td className="dt__td c-rem" data-label="Allocation remarks" data-e="">{"–"}</td>
                        <td className="dt__td c-last" data-label="Last room no." data-e="">{"–"}</td>
                        <td className="dt__td c-adv" data-label="Advance received" data-e="">{"–"}</td>
                        <td className="dt__td c-src" data-label="Source" data-m="">{"OTA"}</td>
                        <td className="dt__td c-by" data-label="Allocated by / when" data-e="">{"–"}</td>
                      </tr>
                      <tr className="ra-FK-10022 rt-PDLX al-no gc-aviv-club-gold ag-email nt-3 pf-quiet-room pf-pool-view ad-22" style={{"--k0": "3", "--k1": "7", "--k2": "3", "--k3": "8", "--k4": "5", "--k5": "11", "--k6": "1", "--k7": "5", "--k8": "5", "--k9": "2", "--k10": "1", "--k11": "1", "--k12": "3", "--k13": "2", "--k14": "2", "--k15": "4", "--k16": "4", "--k17": "2", "--k18": "11", "--k19": "3", "--k20": "5", "--k21": "5", "--k22": "1", "--k23": "8"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel ra-sel" type="radio" name="ra" id="ra-FK-10022" aria-label="Select Ms Lakshmi Mathew" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10022" data-leads-to="RS-07">{"FK-10022/1"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <Link className="fd-link" data-leads-to="RS-18" to={"/reservation/rs-18-guest-profile"}>{"Ms Lakshmi Mathew"}</Link>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PDLX"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <a className="arl-assign" href="#RS-25-alloc">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#plus" />
                            </svg>
                            {"Assign"}
                          </a>
                        </td>
                        <td className="dt__td" data-label="FO status" data-e="">
                          <span className="ra-fo">{"–"}</span>
                        </td>
                        <td className="dt__td" data-label="ETA" data-m="">{"15:00"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 22 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"27 Oct"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"5"}</td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹8,199 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"1"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"0"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-EP"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"EP"}</td>
                        <td className="dt__td" data-label="Repeat guest" data-w2="" data-m="">{"Yes · 1"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="" data-m="">{"Aviv Club Gold"}</td>
                        <td className="dt__td" data-label="Agent / corporate" data-w2="" data-m="">
                          <span className="arl-ag">{"Email"}</span>
                        </td>
                        <td className="dt__td" data-label="Allocation" data-w2="" data-s="">
                          <span className="pill pill--tentative">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"Not allocated"}
                          </span>
                        </td>
                        <td className="dt__td c-pref" data-label="Guest preferences" data-w2="" data-m="">{"Quiet room, Pool view"}</td>
                        <td className="dt__td c-rem" data-label="Allocation remarks" data-m="">{"Celebrating anniversary – cake"}</td>
                        <td className="dt__td c-last" data-label="Last room no." data-w2="" data-m="">{"407"}</td>
                        <td className="dt__td c-adv" data-label="Advance received" data-w2="" data-m="">{"₹41,409.04"}</td>
                        <td className="dt__td c-src" data-label="Source" data-w2="" data-m="">{"Bank transfer"}</td>
                        <td className="dt__td c-by" data-label="Allocated by / when" data-e="">{"–"}</td>
                      </tr>
                      <tr className="ra-FK-10034 rt-GDLX al-yes gc-corporate ag-cochin-marine-services-ltd nt-3 pf-non-smoking ad-22" style={{"--k0": "4", "--k1": "11", "--k2": "2", "--k3": "1", "--k4": "2", "--k5": "3", "--k6": "1", "--k7": "5", "--k8": "5", "--k9": "1", "--k10": "2", "--k11": "1", "--k12": "6", "--k13": "3", "--k14": "5", "--k15": "1", "--k16": "3", "--k17": "1", "--k18": "5", "--k19": "10", "--k20": "3", "--k21": "10", "--k22": "5", "--k23": "2"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel ra-sel" type="radio" name="ra" id="ra-FK-10034" aria-label="Select Ms Pooja Neil" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10034" data-leads-to="RS-07">{"FK-10034/1"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <Link className="fd-link" data-leads-to="RS-18" to={"/reservation/rs-18-guest-profile"}>{"Ms Pooja Neil"}</Link>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms fd-rms">
                            <span className="fd-rm fd-rm--OC" title="Vacant clean">{"106"}</span>
                          </span>
                          <a className="arl-assign ra-chg" href="#RS-25-alloc">{"Change"}</a>
                        </td>
                        <td className="dt__td" data-label="FO status" data-w2="">
                          <span className="ra-fo ra-fo--ok">{"Vacant · clean"}</span>
                        </td>
                        <td className="dt__td" data-label="ETA" data-m="">{"11:00"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 22 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"27 Oct"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"5"}</td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹6,820 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"2"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"0"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"CORP-MAP"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"MAP"}</td>
                        <td className="dt__td" data-label="Repeat guest" data-w2="" data-m="">{"Yes · 4"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="" data-m="">{"Corporate"}</td>
                        <td className="dt__td" data-label="Agent / corporate" data-m="">
                          <span className="arl-ag">{"Cochin Marine Services Ltd"}</span>
                        </td>
                        <td className="dt__td" data-label="Allocation" data-w2="" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Allocated"}
                          </span>
                        </td>
                        <td className="dt__td c-pref" data-label="Guest preferences" data-w2="" data-m="">{"Non-smoking"}</td>
                        <td className="dt__td c-rem" data-label="Allocation remarks" data-e="">{"–"}</td>
                        <td className="dt__td c-last" data-label="Last room no." data-w2="" data-m="">{"204"}</td>
                        <td className="dt__td c-adv" data-label="Advance received" data-e="">{"–"}</td>
                        <td className="dt__td c-src" data-label="Source" data-w2="" data-m="">{"Company bill"}</td>
                        <td className="dt__td c-by" data-label="Allocated by / when" data-w2="" data-m="">{"Anita M. · 21 Oct 11:20"}</td>
                      </tr>
                      <tr className="ra-FK-10039 rt-PDLX al-no gc-regular ag-expedia nt-1 pf-twin-beds ad-22" style={{"--k0": "5", "--k1": "3", "--k2": "3", "--k3": "8", "--k4": "5", "--k5": "13", "--k6": "1", "--k7": "1", "--k8": "1", "--k9": "2", "--k10": "2", "--k11": "2", "--k12": "2", "--k13": "1", "--k14": "1", "--k15": "2", "--k16": "5", "--k17": "2", "--k18": "13", "--k19": "2", "--k20": "10", "--k21": "10", "--k22": "6", "--k23": "8"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel ra-sel" type="radio" name="ra" id="ra-FK-10039" aria-label="Select Mr Dileep Pranav" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10039" data-leads-to="RS-07">{"FK-10039/1"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <Link className="fd-link" data-leads-to="RS-18" to={"/reservation/rs-18-guest-profile"}>{"Mr Dileep Pranav"}</Link>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PDLX"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <a className="arl-assign" href="#RS-25-alloc">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#plus" />
                            </svg>
                            {"Assign"}
                          </a>
                        </td>
                        <td className="dt__td" data-label="FO status" data-e="">
                          <span className="ra-fo">{"–"}</span>
                        </td>
                        <td className="dt__td" data-label="ETA" data-m="">{"16:45"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 22 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"23 Oct"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"1"}</td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹8,199 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"2"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"1"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"CP"}</td>
                        <td className="dt__td" data-label="Repeat guest" data-w2="" data-m="">{"No"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="" data-m="">{"Regular"}</td>
                        <td className="dt__td" data-label="Agent / corporate" data-w2="" data-m="">
                          <span className="arl-ag">{"Expedia"}</span>
                        </td>
                        <td className="dt__td" data-label="Allocation" data-w2="" data-s="">
                          <span className="pill pill--tentative">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"Not allocated"}
                          </span>
                        </td>
                        <td className="dt__td c-pref" data-label="Guest preferences" data-w2="" data-m="">{"Twin beds"}</td>
                        <td className="dt__td c-rem" data-label="Allocation remarks" data-m="">{"3 rooms – keep on the same floor"}</td>
                        <td className="dt__td c-last" data-label="Last room no." data-e="">{"–"}</td>
                        <td className="dt__td c-adv" data-label="Advance received" data-e="">{"–"}</td>
                        <td className="dt__td c-src" data-label="Source" data-m="">{"OTA"}</td>
                        <td className="dt__td c-by" data-label="Allocated by / when" data-e="">{"–"}</td>
                      </tr>
                      <tr className="ra-FK-10067 rt-PDLX al-yes gc-vip ag-self-booking nt-3 pf-high-floor pf-near-lift ad-22" style={{"--k0": "6", "--k1": "8", "--k2": "3", "--k3": "4", "--k4": "4", "--k5": "6", "--k6": "1", "--k7": "5", "--k8": "5", "--k9": "3", "--k10": "2", "--k11": "1", "--k12": "2", "--k13": "1", "--k14": "4", "--k15": "3", "--k16": "9", "--k17": "1", "--k18": "4", "--k19": "9", "--k20": "4", "--k21": "9", "--k22": "2", "--k23": "5"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel ra-sel" type="radio" name="ra" id="ra-FK-10067" aria-label="Select Mr Lukas Keller" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10067" data-leads-to="RS-07">{"FK-10067/1"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <Link className="fd-link" data-leads-to="RS-18" to={"/reservation/rs-18-guest-profile"}>{"Mr Lukas Keller"}</Link>
                          {" "}
                          <span className="arl-mk arl-mk--vip" title="VIP">{"VIP"}</span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PDLX"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms fd-rms">
                            <span className="fd-rm fd-rm--OC" title="Vacant inspected">{"314"}</span>
                          </span>
                          <a className="arl-assign ra-chg" href="#RS-25-alloc">{"Change"}</a>
                        </td>
                        <td className="dt__td" data-label="FO status" data-w2="">
                          <span className="ra-fo ra-fo--ok">{"Vacant · inspected"}</span>
                        </td>
                        <td className="dt__td" data-label="ETA" data-m="">{"12:30"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 22 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"27 Oct"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"5"}</td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹9,150 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"2"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"0"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"CP"}</td>
                        <td className="dt__td" data-label="Repeat guest" data-w2="" data-m="">{"Yes · 3"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="" data-m="">{"VIP"}</td>
                        <td className="dt__td" data-label="Agent / corporate" data-w2="" data-m="">
                          <span className="arl-ag">{"Self booking"}</span>
                        </td>
                        <td className="dt__td" data-label="Allocation" data-w2="" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Allocated"}
                          </span>
                        </td>
                        <td className="dt__td c-pref" data-label="Guest preferences" data-w2="" data-m="">{"High floor, Near lift"}</td>
                        <td className="dt__td c-rem" data-label="Allocation remarks" data-m="">{"VIP welcome – fruit basket"}</td>
                        <td className="dt__td c-last" data-label="Last room no." data-w2="" data-m="">{"314"}</td>
                        <td className="dt__td c-adv" data-label="Advance received" data-w2="" data-m="">{"₹52,032.10"}</td>
                        <td className="dt__td c-src" data-label="Source" data-m="">{"Card"}</td>
                        <td className="dt__td c-by" data-label="Allocated by / when" data-w2="" data-m="">{"Rahul V. · 21 Oct 18:05"}</td>
                      </tr>
                      <tr className="ra-FK-10096 rt-GDLX al-yes gc-regular ag-phone nt-2 pf-adjoining-rooms ad-22" style={{"--k0": "8", "--k1": "5", "--k2": "2", "--k3": "3", "--k4": "3", "--k5": "9", "--k6": "1", "--k7": "2", "--k8": "2", "--k9": "1", "--k10": "2", "--k11": "1", "--k12": "2", "--k13": "1", "--k14": "1", "--k15": "2", "--k16": "8", "--k17": "1", "--k18": "1", "--k19": "1", "--k20": "10", "--k21": "6", "--k22": "2", "--k23": "6"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel ra-sel" type="radio" name="ra" id="ra-FK-10096" aria-label="Select Mr Hans Mueller" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10096" data-leads-to="RS-07">{"FK-10096/1"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <Link className="fd-link" data-leads-to="RS-18" to={"/reservation/rs-18-guest-profile"}>{"Mr Hans Mueller"}</Link>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms fd-rms">
                            <span className="fd-rm fd-rm--VD" title="Vacant dirty">{"302"}</span>
                          </span>
                          <a className="arl-assign ra-chg" href="#RS-25-alloc">{"Change"}</a>
                        </td>
                        <td className="dt__td" data-label="FO status" data-w2="">
                          <span className="ra-fo ra-fo--wait">{"Vacant · dirty"}</span>
                        </td>
                        <td className="dt__td" data-label="ETA" data-m="">{"14:00"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 22 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"24 Oct"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"2"}</td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹6,820 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"2"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"0"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"CP"}</td>
                        <td className="dt__td" data-label="Repeat guest" data-w2="" data-m="">{"No"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="" data-m="">{"Regular"}</td>
                        <td className="dt__td" data-label="Agent / corporate" data-w2="" data-m="">
                          <span className="arl-ag">{"Phone"}</span>
                        </td>
                        <td className="dt__td" data-label="Allocation" data-w2="" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Allocated"}
                          </span>
                        </td>
                        <td className="dt__td c-pref" data-label="Guest preferences" data-w2="" data-m="">{"Adjoining rooms"}</td>
                        <td className="dt__td c-rem" data-label="Allocation remarks" data-m="">{"2 rooms (302, 111) – family"}</td>
                        <td className="dt__td c-last" data-label="Last room no." data-e="">{"–"}</td>
                        <td className="dt__td c-adv" data-label="Advance received" data-w2="" data-m="">{"₹41,533.28"}</td>
                        <td className="dt__td c-src" data-label="Source" data-m="">{"Card"}</td>
                        <td className="dt__td c-by" data-label="Allocated by / when" data-w2="" data-m="">{"Sneha J. · 21 Oct 15:12"}</td>
                      </tr>
                      <tr className="ra-FK-10121 rt-GDLX al-no gc-vip ag-aviv-mobile-app nt-3 pf-prayer-mat pf-non-smoking ad-22" style={{"--k0": "9", "--k1": "10", "--k2": "2", "--k3": "8", "--k4": "5", "--k5": "14", "--k6": "1", "--k7": "5", "--k8": "5", "--k9": "1", "--k10": "2", "--k11": "1", "--k12": "4", "--k13": "3", "--k14": "2", "--k15": "3", "--k16": "10", "--k17": "2", "--k18": "8", "--k19": "7", "--k20": "2", "--k21": "10", "--k22": "3", "--k23": "8"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel ra-sel" type="radio" name="ra" id="ra-FK-10121" aria-label="Select Ms Noura Al Saud" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10121" data-leads-to="RS-07">{"FK-10121/1"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <Link className="fd-link" data-leads-to="RS-18" to={"/reservation/rs-18-guest-profile"}>{"Ms Noura Al Saud"}</Link>
                          {" "}
                          <span className="arl-mk arl-mk--vip" title="VIP">{"VIP"}</span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <a className="arl-assign" href="#RS-25-alloc">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#plus" />
                            </svg>
                            {"Assign"}
                          </a>
                        </td>
                        <td className="dt__td" data-label="FO status" data-e="">
                          <span className="ra-fo">{"–"}</span>
                        </td>
                        <td className="dt__td" data-label="ETA" data-m="">{"18:00"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 22 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"27 Oct"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"5"}</td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹6,820 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"2"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"0"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-MAP"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"MAP"}</td>
                        <td className="dt__td" data-label="Repeat guest" data-w2="" data-m="">{"Yes · 1"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="" data-m="">{"VIP"}</td>
                        <td className="dt__td" data-label="Agent / corporate" data-w2="" data-m="">
                          <span className="arl-ag">{"Aviv mobile app"}</span>
                        </td>
                        <td className="dt__td" data-label="Allocation" data-w2="" data-s="">
                          <span className="pill pill--tentative">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"Not allocated"}
                          </span>
                        </td>
                        <td className="dt__td c-pref" data-label="Guest preferences" data-w2="" data-m="">{"Prayer mat, Non-smoking"}</td>
                        <td className="dt__td c-rem" data-label="Allocation remarks" data-m="">{"Halal meals; late check-in"}</td>
                        <td className="dt__td c-last" data-label="Last room no." data-w2="" data-m="">{"110"}</td>
                        <td className="dt__td c-adv" data-label="Advance received" data-e="">{"–"}</td>
                        <td className="dt__td c-src" data-label="Source" data-w2="" data-m="">{"Card on file"}</td>
                        <td className="dt__td c-by" data-label="Allocated by / when" data-e="">{"–"}</td>
                      </tr>
                      <tr className="ra-FK-10146 rt-PDLX al-no gc-corporate ag-malabar-spice-exports-pvt-ltd nt-3 pf-quiet-room ad-22" style={{"--k0": "10", "--k1": "4", "--k2": "3", "--k3": "8", "--k4": "5", "--k5": "15", "--k6": "1", "--k7": "3", "--k8": "3", "--k9": "2", "--k10": "1", "--k11": "1", "--k12": "5", "--k13": "1", "--k14": "3", "--k15": "1", "--k16": "7", "--k17": "2", "--k18": "10", "--k19": "10", "--k20": "7", "--k21": "10", "--k22": "5", "--k23": "8"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel ra-sel" type="radio" name="ra" id="ra-FK-10146" aria-label="Select Mr Ganesh Mihir" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10146" data-leads-to="RS-07">{"FK-10146/1"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <Link className="fd-link" data-leads-to="RS-18" to={"/reservation/rs-18-guest-profile"}>{"Mr Ganesh Mihir"}</Link>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PDLX"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <a className="arl-assign" href="#RS-25-alloc">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#plus" />
                            </svg>
                            {"Assign"}
                          </a>
                        </td>
                        <td className="dt__td" data-label="FO status" data-e="">
                          <span className="ra-fo">{"–"}</span>
                        </td>
                        <td className="dt__td" data-label="ETA" data-m="">{"20:00"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 22 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"25 Oct"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"3"}</td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹8,199 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"1"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"0"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"CORP-CP"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"CP"}</td>
                        <td className="dt__td" data-label="Repeat guest" data-w2="" data-m="">{"Yes · 2"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="" data-m="">{"Corporate"}</td>
                        <td className="dt__td" data-label="Agent / corporate" data-m="">
                          <span className="arl-ag">{"Malabar Spice Exports Pvt Ltd"}</span>
                        </td>
                        <td className="dt__td" data-label="Allocation" data-w2="" data-s="">
                          <span className="pill pill--tentative">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"Not allocated"}
                          </span>
                        </td>
                        <td className="dt__td c-pref" data-label="Guest preferences" data-w2="" data-m="">{"Quiet room"}</td>
                        <td className="dt__td c-rem" data-label="Allocation remarks" data-e="">{"–"}</td>
                        <td className="dt__td c-last" data-label="Last room no." data-w2="" data-m="">{"505"}</td>
                        <td className="dt__td c-adv" data-label="Advance received" data-e="">{"–"}</td>
                        <td className="dt__td c-src" data-label="Source" data-w2="" data-m="">{"Company bill"}</td>
                        <td className="dt__td c-by" data-label="Allocated by / when" data-e="">{"–"}</td>
                      </tr>
                      <tr className="ra-FK-10089 rt-PDLX al-no gc-regular ag-makemytrip-goibibo nt-3 pf-non-smoking ad-22" style={{"--k0": "7", "--k1": "14", "--k2": "3", "--k3": "8", "--k4": "5", "--k5": "2", "--k6": "1", "--k7": "4", "--k8": "4", "--k9": "2", "--k10": "1", "--k11": "1", "--k12": "2", "--k13": "1", "--k14": "1", "--k15": "2", "--k16": "6", "--k17": "2", "--k18": "5", "--k19": "10", "--k20": "10", "--k21": "4", "--k22": "7", "--k23": "8"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel ra-sel" type="radio" name="ra" id="ra-FK-10089" aria-label="Select Dr Shruti Manav" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10089" data-leads-to="RS-07">{"FK-10089/1"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <Link className="fd-link" data-leads-to="RS-18" to={"/reservation/rs-18-guest-profile"}>{"Dr Shruti Manav"}</Link>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PDLX"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <a className="arl-assign" href="#RS-25-alloc">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#plus" />
                            </svg>
                            {"Assign"}
                          </a>
                        </td>
                        <td className="dt__td" data-label="FO status" data-e="">
                          <span className="ra-fo">{"–"}</span>
                        </td>
                        <td className="dt__td" data-label="ETA" data-m="">{"10:20"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 22 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"26 Oct"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"4"}</td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹8,199 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"1"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"0"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"CP"}</td>
                        <td className="dt__td" data-label="Repeat guest" data-w2="" data-m="">{"No"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="" data-m="">{"Regular"}</td>
                        <td className="dt__td" data-label="Agent / corporate" data-w2="" data-m="">
                          <span className="arl-ag">{"MakeMyTrip / Goibibo"}</span>
                        </td>
                        <td className="dt__td" data-label="Allocation" data-w2="" data-s="">
                          <span className="pill pill--tentative">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"Not allocated"}
                          </span>
                        </td>
                        <td className="dt__td c-pref" data-label="Guest preferences" data-w2="" data-m="">{"Non-smoking"}</td>
                        <td className="dt__td c-rem" data-label="Allocation remarks" data-e="">{"–"}</td>
                        <td className="dt__td c-last" data-label="Last room no." data-e="">{"–"}</td>
                        <td className="dt__td c-adv" data-label="Advance received" data-w2="" data-m="">{"₹32,666.46"}</td>
                        <td className="dt__td c-src" data-label="Source" data-w2="" data-m="">{"OTA prepaid"}</td>
                        <td className="dt__td c-by" data-label="Allocated by / when" data-e="">{"–"}</td>
                      </tr>
                      <tr className="ra-FK-10201 rt-PDLX al-yes gc-aviv-club-silver ag-aviv-mobile-app nt-2 pf-pool-view ad-22" style={{"--k0": "11", "--k1": "6", "--k2": "3", "--k3": "6", "--k4": "4", "--k5": "4", "--k6": "1", "--k7": "2", "--k8": "2", "--k9": "2", "--k10": "1", "--k11": "1", "--k12": "2", "--k13": "1", "--k14": "3", "--k15": "6", "--k16": "10", "--k17": "1", "--k18": "7", "--k19": "10", "--k20": "8", "--k21": "3", "--k22": "8", "--k23": "3"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel ra-sel" type="radio" name="ra" id="ra-FK-10201" aria-label="Select Mr Karthik Jatin" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10201" data-leads-to="RS-07">{"FK-10201/1"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <Link className="fd-link" data-leads-to="RS-18" to={"/reservation/rs-18-guest-profile"}>{"Mr Karthik Jatin"}</Link>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PDLX"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms fd-rms">
                            <span className="fd-rm fd-rm--OC" title="Vacant inspected">{"512"}</span>
                          </span>
                          <a className="arl-assign ra-chg" href="#RS-25-alloc">{"Change"}</a>
                        </td>
                        <td className="dt__td" data-label="FO status" data-w2="">
                          <span className="ra-fo ra-fo--ok">{"Vacant · inspected"}</span>
                        </td>
                        <td className="dt__td" data-label="ETA" data-m="">{"11:30"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 22 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"24 Oct"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"2"}</td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹8,199 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"1"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"0"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"CP"}</td>
                        <td className="dt__td" data-label="Repeat guest" data-w2="" data-m="">{"Yes · 2"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="" data-m="">{"Aviv Club Silver"}</td>
                        <td className="dt__td" data-label="Agent / corporate" data-w2="" data-m="">
                          <span className="arl-ag">{"Aviv mobile app"}</span>
                        </td>
                        <td className="dt__td" data-label="Allocation" data-w2="" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Allocated"}
                          </span>
                        </td>
                        <td className="dt__td c-pref" data-label="Guest preferences" data-w2="" data-m="">{"Pool view"}</td>
                        <td className="dt__td c-rem" data-label="Allocation remarks" data-e="">{"–"}</td>
                        <td className="dt__td c-last" data-label="Last room no." data-w2="" data-m="">{"512"}</td>
                        <td className="dt__td c-adv" data-label="Advance received" data-w2="" data-m="">{"₹21,001.64"}</td>
                        <td className="dt__td c-src" data-label="Source" data-w2="" data-m="">{"Aviv app"}</td>
                        <td className="dt__td c-by" data-label="Allocated by / when" data-m="">{"Auto-allocated · 21 Oct 23:00"}</td>
                      </tr>
                      <tr className="ra-FK-10216 rt-PDLX al-no gc-regular ag-booking-com nt-1  ad-22" style={{"--k0": "12", "--k1": "15", "--k2": "3", "--k3": "8", "--k4": "5", "--k5": "10", "--k6": "1", "--k7": "1", "--k8": "1", "--k9": "2", "--k10": "2", "--k11": "1", "--k12": "2", "--k13": "1", "--k14": "1", "--k15": "2", "--k16": "2", "--k17": "2", "--k18": "14", "--k19": "10", "--k20": "10", "--k21": "10", "--k22": "6", "--k23": "8"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel ra-sel" type="radio" name="ra" id="ra-FK-10216" aria-label="Select Mrs Swathi Sahil" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10216" data-leads-to="RS-07">{"FK-10216/1"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <Link className="fd-link" data-leads-to="RS-18" to={"/reservation/rs-18-guest-profile"}>{"Mrs Swathi Sahil"}</Link>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PDLX"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <a className="arl-assign" href="#RS-25-alloc">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#plus" />
                            </svg>
                            {"Assign"}
                          </a>
                        </td>
                        <td className="dt__td" data-label="FO status" data-e="">
                          <span className="ra-fo">{"–"}</span>
                        </td>
                        <td className="dt__td" data-label="ETA" data-m="">{"14:15"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 22 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"23 Oct"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"1"}</td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹8,199 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"2"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"0"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"CP"}</td>
                        <td className="dt__td" data-label="Repeat guest" data-w2="" data-m="">{"No"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="" data-m="">{"Regular"}</td>
                        <td className="dt__td" data-label="Agent / corporate" data-w2="" data-m="">
                          <span className="arl-ag">{"Booking.com"}</span>
                        </td>
                        <td className="dt__td" data-label="Allocation" data-w2="" data-s="">
                          <span className="pill pill--tentative">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"Not allocated"}
                          </span>
                        </td>
                        <td className="dt__td c-pref" data-label="Guest preferences" data-e="">{"–"}</td>
                        <td className="dt__td c-rem" data-label="Allocation remarks" data-e="">{"–"}</td>
                        <td className="dt__td c-last" data-label="Last room no." data-e="">{"–"}</td>
                        <td className="dt__td c-adv" data-label="Advance received" data-e="">{"–"}</td>
                        <td className="dt__td c-src" data-label="Source" data-m="">{"OTA"}</td>
                        <td className="dt__td c-by" data-label="Allocated by / when" data-e="">{"–"}</td>
                      </tr>
                      <tr className="ra-FK-10231 rt-GDLX al-no gc-aviv-club-platinum ag-self-booking nt-3 pf-ground-floor pf-garden-view ad-23" style={{"--k0": "13", "--k1": "1", "--k2": "2", "--k3": "8", "--k4": "5", "--k5": "7", "--k6": "2", "--k7": "4", "--k8": "3", "--k9": "1", "--k10": "2", "--k11": "2", "--k12": "1", "--k13": "1", "--k14": "6", "--k15": "5", "--k16": "9", "--k17": "2", "--k18": "3", "--k19": "5", "--k20": "1", "--k21": "2", "--k22": "2", "--k23": "8"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel ra-sel" type="radio" name="ra" id="ra-FK-10231" aria-label="Select Mr Anil Varghese" />
                          {"FK-10231/1"}
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <Link className="fd-link" data-leads-to="RS-18" to={"/reservation/rs-18-guest-profile"}>{"Mr Anil Varghese"}</Link>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <a className="arl-assign" href="#RS-25-alloc">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#plus" />
                            </svg>
                            {"Assign"}
                          </a>
                        </td>
                        <td className="dt__td" data-label="FO status" data-e="">
                          <span className="ra-fo">{"–"}</span>
                        </td>
                        <td className="dt__td" data-label="ETA" data-m="">{"13:00"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Fri 23 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"26 Oct"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"3"}</td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹6,820 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"2"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"1"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"ADV15"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"CP"}</td>
                        <td className="dt__td" data-label="Repeat guest" data-w2="" data-m="">{"Yes · 5"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="" data-m="">{"Aviv Club Platinum"}</td>
                        <td className="dt__td" data-label="Agent / corporate" data-w2="" data-m="">
                          <span className="arl-ag">{"Self booking"}</span>
                        </td>
                        <td className="dt__td" data-label="Allocation" data-w2="" data-s="">
                          <span className="pill pill--tentative">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"Not allocated"}
                          </span>
                        </td>
                        <td className="dt__td c-pref" data-label="Guest preferences" data-w2="" data-m="">{"Ground floor, Garden view"}</td>
                        <td className="dt__td c-rem" data-label="Allocation remarks" data-w2="" data-m="">{"Extra bed already booked"}</td>
                        <td className="dt__td c-last" data-label="Last room no." data-w2="" data-m="">{"106"}</td>
                        <td className="dt__td c-adv" data-label="Advance received" data-w2="" data-m="">{"₹18,420"}</td>
                        <td className="dt__td c-src" data-label="Source" data-m="">{"Card"}</td>
                        <td className="dt__td c-by" data-label="Allocated by / when" data-e="">{"–"}</td>
                      </tr>
                      <tr className="ra-FK-10233 rt-GDLX al-yes gc-regular ag-agoda nt-2 pf-twin-beds ad-23" style={{"--k0": "14", "--k1": "12", "--k2": "2", "--k3": "2", "--k4": "2", "--k5": "11", "--k6": "2", "--k7": "3", "--k8": "2", "--k9": "1", "--k10": "2", "--k11": "1", "--k12": "2", "--k13": "1", "--k14": "1", "--k15": "2", "--k16": "1", "--k17": "1", "--k18": "13", "--k19": "10", "--k20": "10", "--k21": "10", "--k22": "6", "--k23": "7"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel ra-sel" type="radio" name="ra" id="ra-FK-10233" aria-label="Select Mrs Radhika Mohan" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10233" data-leads-to="RS-07">{"FK-10233/1"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <Link className="fd-link" data-leads-to="RS-18" to={"/reservation/rs-18-guest-profile"}>{"Mrs Radhika Mohan"}</Link>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms fd-rms">
                            <span className="fd-rm fd-rm--OC" title="Vacant clean">{"118"}</span>
                          </span>
                          <a className="arl-assign ra-chg" href="#RS-25-alloc">{"Change"}</a>
                        </td>
                        <td className="dt__td" data-label="FO status" data-w2="">
                          <span className="ra-fo ra-fo--ok">{"Vacant · clean"}</span>
                        </td>
                        <td className="dt__td" data-label="ETA" data-m="">{"15:00"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Fri 23 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"25 Oct"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"2"}</td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹6,820 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"2"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"0"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"CP"}</td>
                        <td className="dt__td" data-label="Repeat guest" data-w2="" data-m="">{"No"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="" data-m="">{"Regular"}</td>
                        <td className="dt__td" data-label="Agent / corporate" data-w2="" data-m="">
                          <span className="arl-ag">{"Agoda"}</span>
                        </td>
                        <td className="dt__td" data-label="Allocation" data-w2="" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Allocated"}
                          </span>
                        </td>
                        <td className="dt__td c-pref" data-label="Guest preferences" data-w2="" data-m="">{"Twin beds"}</td>
                        <td className="dt__td c-rem" data-label="Allocation remarks" data-e="">{"–"}</td>
                        <td className="dt__td c-last" data-label="Last room no." data-e="">{"–"}</td>
                        <td className="dt__td c-adv" data-label="Advance received" data-e="">{"–"}</td>
                        <td className="dt__td c-src" data-label="Source" data-m="">{"OTA"}</td>
                        <td className="dt__td c-by" data-label="Allocated by / when" data-w2="" data-m="">{"Sneha J. · 21 Oct 19:48"}</td>
                      </tr>
                      <tr className="ra-FK-10240 rt-DLXS al-yes gc-aviv-club-gold ag-phone nt-2 pf-suite pf-pool-view ad-23" style={{"--k0": "15", "--k1": "16", "--k2": "1", "--k3": "7", "--k4": "1", "--k5": "12", "--k6": "2", "--k7": "3", "--k8": "2", "--k9": "4", "--k10": "2", "--k11": "1", "--k12": "3", "--k13": "2", "--k14": "2", "--k15": "4", "--k16": "8", "--k17": "1", "--k18": "12", "--k19": "8", "--k20": "10", "--k21": "1", "--k22": "4", "--k23": "1"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel ra-sel" type="radio" name="ra" id="ra-FK-10240" aria-label="Select Mr Vikram Ranjan" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10240" data-leads-to="RS-07">{"FK-10240/1"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <Link className="fd-link" data-leads-to="RS-18" to={"/reservation/rs-18-guest-profile"}>{"Mr Vikram Ranjan"}</Link>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"DLXS"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms fd-rms">
                            <span className="fd-rm fd-rm--OOO" title="Out of order">{"516"}</span>
                          </span>
                          <a className="arl-assign ra-chg" href="#RS-25-alloc">{"Move"}</a>
                        </td>
                        <td className="dt__td" data-label="FO status" data-w2="">
                          <span className="ra-fo ra-fo--no">{"Out of order"}</span>
                        </td>
                        <td className="dt__td" data-label="ETA" data-m="">{"16:30"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Fri 23 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"25 Oct"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"2"}</td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹16,500 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"2"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"0"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-EP"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"EP"}</td>
                        <td className="dt__td" data-label="Repeat guest" data-w2="" data-m="">{"Yes · 1"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="" data-m="">{"Aviv Club Gold"}</td>
                        <td className="dt__td" data-label="Agent / corporate" data-w2="" data-m="">
                          <span className="arl-ag">{"Phone"}</span>
                        </td>
                        <td className="dt__td" data-label="Allocation" data-w2="" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Allocated"}
                          </span>
                        </td>
                        <td className="dt__td c-pref" data-label="Guest preferences" data-w2="" data-m="">{"Suite, Pool view"}</td>
                        <td className="dt__td c-rem" data-label="Allocation remarks" data-m="">{"Suite 516 is out of order – move"}</td>
                        <td className="dt__td c-last" data-label="Last room no." data-e="">{"–"}</td>
                        <td className="dt__td c-adv" data-label="Advance received" data-w2="" data-m="">{"₹15,000"}</td>
                        <td className="dt__td c-src" data-label="Source" data-m="">{"Cash"}</td>
                        <td className="dt__td c-by" data-label="Allocated by / when" data-w2="" data-m="">{"Anita M. · 20 Oct 10:30"}</td>
                      </tr>
                      <tr className="ra-FK-10244 rt-PRMS al-no gc-vip ag-self-booking nt-3 pf-premium-suite-only ad-23" style={{"--k0": "16", "--k1": "9", "--k2": "4", "--k3": "8", "--k4": "5", "--k5": "5", "--k6": "2", "--k7": "4", "--k8": "3", "--k9": "5", "--k10": "2", "--k11": "1", "--k12": "4", "--k13": "3", "--k14": "7", "--k15": "3", "--k16": "9", "--k17": "2", "--k18": "9", "--k19": "6", "--k20": "9", "--k21": "8", "--k22": "1", "--k23": "8"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel ra-sel" type="radio" name="ra" id="ra-FK-10244" aria-label="Select Ms Meera Noel" />
                          {"FK-10244/1"}
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <Link className="fd-link" data-leads-to="RS-18" to={"/reservation/rs-18-guest-profile"}>{"Ms Meera Noel"}</Link>
                          {" "}
                          <span className="arl-mk arl-mk--vip" title="VIP">{"VIP"}</span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PRMS"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <a className="arl-assign" href="#RS-25-alloc">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#plus" />
                            </svg>
                            {"Assign"}
                          </a>
                        </td>
                        <td className="dt__td" data-label="FO status" data-e="">
                          <span className="ra-fo">{"–"}</span>
                        </td>
                        <td className="dt__td" data-label="ETA" data-m="">{"11:45"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Fri 23 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"26 Oct"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"3"}</td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹32,000 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"2"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"0"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-MAP"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"MAP"}</td>
                        <td className="dt__td" data-label="Repeat guest" data-w2="" data-m="">{"Yes · 6"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="" data-m="">{"VIP"}</td>
                        <td className="dt__td" data-label="Agent / corporate" data-w2="" data-m="">
                          <span className="arl-ag">{"Self booking"}</span>
                        </td>
                        <td className="dt__td" data-label="Allocation" data-w2="" data-s="">
                          <span className="pill pill--tentative">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"Not allocated"}
                          </span>
                        </td>
                        <td className="dt__td c-pref" data-label="Guest preferences" data-w2="" data-m="">{"Premium Suite only"}</td>
                        <td className="dt__td c-rem" data-label="Allocation remarks" data-m="">{"GM's guest – flowers on arrival"}</td>
                        <td className="dt__td c-last" data-label="Last room no." data-w2="" data-m="">{"517"}</td>
                        <td className="dt__td c-adv" data-label="Advance received" data-w2="" data-m="">{"₹50,000"}</td>
                        <td className="dt__td c-src" data-label="Source" data-w2="" data-m="">{"Bank transfer"}</td>
                        <td className="dt__td c-by" data-label="Allocated by / when" data-e="">{"–"}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="arl-foot">
                  <span className="arl-count">{"arrivals shown"}</span>
                  <span className="arl-hint">
                    <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#info" />
                    </svg>
                    {"Click a column title to sort · use "}
                    <b>{"Filter"}</b>
                    {" for date range, agent, guest class, room type, allocation, nights, preferences and extra columns."}
                  </span>
                </p>
              </div>
              <div className="ra-bar" data-code="RS-25-bar" role="toolbar" aria-label="Actions for the selected booking">
                <span className="ra-bar__hint">
                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#info" />
                  </svg>
                  <span className="ra-bar__off">{"Tick a booking to use these actions"}</span>
                  <span className="ra-bar__on">{"Actions apply to the ticked booking"}</span>
                </span>
                <div className="ra-bar__btns">
                  <a className="btn btn--primary" href="#RS-25-alloc">{"Allocate"}</a>
                  <a className="btn" href="#RS-25-un">{"Un-allocate"}</a>
                  <a className="btn" href="#RS-25-swap">{"Swap"}</a>
                  <Link className="btn" data-leads-to="RS-07" to={"/reservation/rs-07-reservation-details"}>{"Reservation"}</Link>
                  <Link className="btn" data-leads-to="RS-18" to={"/reservation/rs-18-guest-profile"}>{"Guest profile"}</Link>
                  <Link className="btn" data-leads-to="RS-10" to={"/reservation/rs-10-payments-and-deposits"}>{"Advance"}</Link>
                  <Link className="btn" data-leads-to="FD-03" to={"/front-desk/fd-03-check-in"}>{"Reg. card"}</Link>
                  <Link className="btn" data-leads-to="FD-03" to={"/front-desk/fd-03-check-in"}>{"Check-in"}</Link>
                </div>
              </div>
              <div className="modal modal--lg" id="RS-25-alloc" data-code="RS-25-alloc" role="dialog" aria-modal="true" aria-labelledby="RS-25-alloc-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RS-25-alloc-t">{"Allocate a room"}</h2>
                      <p className="modal__desc">{"Pick a clean or inspected room first; the guest keeps this room until check-in unless you change it."}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="ra-pick">
                      <div className="ra-ctx">
                        <label className="field">
                          <span className="field__label">{"Booking to allocate"}</span>
                          <select className="field__input field__input--select" name="ra-book">
                            <option value="GDLX">{"FK-10015 · Mr Dileep Kurian · GDLX · Thu 22 Oct · 2 nights"}</option>
                            <option value="PDLX">{"FK-10022 · Ms Lakshmi Mathew · PDLX · Thu 22 Oct · 5 nights"}</option>
                            <option value="PDLX">{"FK-10039 · Mr Dileep Pranav · PDLX · Thu 22 Oct · 1 night"}</option>
                            <option value="GDLX">{"FK-10121 · Ms Noura Al Saud · GDLX · Thu 22 Oct · 5 nights"}</option>
                            <option value="PRMS">{"FK-10244 · Ms Meera Noel · PRMS · Fri 23 Oct · 3 nights"}</option>
                          </select>
                        </label>
                        <p className="ra-rule">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#info" />
                          </svg>
                          {"Rooms are offered for the whole stay. Same-type rooms have no rate change; a higher type is an "}
                          <b>{"upgrade"}</b>
                          {" and needs approval (RS-20). Dirty rooms can be allocated but the guest is shown the room only once Housekeeping marks it ready."}
                        </p>
                      </div>
                      <label className="field" data-flow="rs25-up">
                        <span className="field__label">{"Reason, if this is an upgrade"}</span>
                        <select className="field__input field__input--select" defaultValue={"Not an upgrade"}>
                          <option>{"Not an upgrade"}</option>
                          <option>{"VIP upgrade"}</option>
                          <option>{"Room type oversold"}</option>
                        </select>
                      </label>
                      <section className="ra-grp" data-t="GDLX">
                        <h3>
                          {"Garden Deluxe Room "}
                          <span className="ra-grp__n">{"6 free"}</span>
                          <span className="ra-grp__tag">{"Same type"}</span>
                        </h3>
                        <div className="ra-grid">
                          <label className="ra-rm ra-rm--ok">
                            <input type="radio" name="ra-room" value="107" />
                            <span className="ra-rm__n">{"107"}</span>
                            <span className="ra-rm__d">{"First · Garden · King"}</span>
                            <span className="ra-rm__s">{"Inspected"}</span>
                            <span className="ra-rm__best">{"Best match"}</span>
                          </label>
                          <label className="ra-rm ra-rm--ok">
                            <input type="radio" name="ra-room" value="108" />
                            <span className="ra-rm__n">{"108"}</span>
                            <span className="ra-rm__d">{"First · Garden · Twin"}</span>
                            <span className="ra-rm__s">{"Clean"}</span>
                          </label>
                          <label className="ra-rm ra-rm--ok">
                            <input type="radio" name="ra-room" value="110" />
                            <span className="ra-rm__n">{"110"}</span>
                            <span className="ra-rm__d">{"First · Garden · King"}</span>
                            <span className="ra-rm__s">{"Clean"}</span>
                          </label>
                          <label className="ra-rm ra-rm--wait">
                            <input type="radio" name="ra-room" value="112" />
                            <span className="ra-rm__n">{"112"}</span>
                            <span className="ra-rm__d">{"First · Garden · King"}</span>
                            <span className="ra-rm__s">{"Dirty · ready by 13:00"}</span>
                          </label>
                          <label className="ra-rm ra-rm--ok">
                            <input type="radio" name="ra-room" value="204" />
                            <span className="ra-rm__n">{"204"}</span>
                            <span className="ra-rm__d">{"Second · Garden · King"}</span>
                            <span className="ra-rm__s">{"Inspected"}</span>
                          </label>
                          <label className="ra-rm ra-rm--ok">
                            <input type="radio" name="ra-room" value="209" />
                            <span className="ra-rm__n">{"209"}</span>
                            <span className="ra-rm__d">{"Second · Garden · Twin"}</span>
                            <span className="ra-rm__s">{"Clean"}</span>
                          </label>
                        </div>
                      </section>
                      <section className="ra-grp" data-t="PDLX">
                        <h3>
                          {"Pool Deluxe Room "}
                          <span className="ra-grp__n">{"5 free"}</span>
                          <span className="ra-grp__tag">{"Same type"}</span>
                        </h3>
                        <div className="ra-grid">
                          <label className="ra-rm ra-rm--ok">
                            <input type="radio" name="ra-room" value="407" />
                            <span className="ra-rm__n">{"407"}</span>
                            <span className="ra-rm__d">{"Fourth · Pool · King"}</span>
                            <span className="ra-rm__s">{"Inspected"}</span>
                            <span className="ra-rm__best">{"Best match"}</span>
                          </label>
                          <label className="ra-rm ra-rm--ok">
                            <input type="radio" name="ra-room" value="409" />
                            <span className="ra-rm__n">{"409"}</span>
                            <span className="ra-rm__d">{"Fourth · Pool · King"}</span>
                            <span className="ra-rm__s">{"Clean"}</span>
                          </label>
                          <label className="ra-rm ra-rm--ok">
                            <input type="radio" name="ra-room" value="412" />
                            <span className="ra-rm__n">{"412"}</span>
                            <span className="ra-rm__d">{"Fourth · Pool · Twin"}</span>
                            <span className="ra-rm__s">{"Clean"}</span>
                          </label>
                          <label className="ra-rm ra-rm--ok">
                            <input type="radio" name="ra-room" value="503" />
                            <span className="ra-rm__n">{"503"}</span>
                            <span className="ra-rm__d">{"Fifth · Pool · King"}</span>
                            <span className="ra-rm__s">{"Inspected"}</span>
                          </label>
                          <label className="ra-rm ra-rm--wait">
                            <input type="radio" name="ra-room" value="508" />
                            <span className="ra-rm__n">{"508"}</span>
                            <span className="ra-rm__d">{"Fifth · Pool · King"}</span>
                            <span className="ra-rm__s">{"Dirty · ready by 13:00"}</span>
                          </label>
                        </div>
                      </section>
                      <section className="ra-grp" data-t="PRMS">
                        <h3>
                          {"Suites (Deluxe and Premium) "}
                          <span className="ra-grp__n">{"2 free"}</span>
                          <span className="ra-grp__tag">{"Upgrade · approval needed"}</span>
                        </h3>
                        <div className="ra-grid">
                          <label className="ra-rm ra-rm--ok">
                            <input type="radio" name="ra-room" value="514" />
                            <span className="ra-rm__n">{"514"}</span>
                            <span className="ra-rm__d">{"Fifth · Pool · King"}</span>
                            <span className="ra-rm__s">{"Clean"}</span>
                          </label>
                          <label className="ra-rm ra-rm--ok">
                            <input type="radio" name="ra-room" value="517" />
                            <span className="ra-rm__n">{"517"}</span>
                            <span className="ra-rm__d">{"Fifth · Pool · King"}</span>
                            <span className="ra-rm__s">{"Inspected"}</span>
                          </label>
                        </div>
                      </section>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">
                      <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#check" />
                      </svg>
                      {"Allocate room"}
                    </a>
                  </div>
                </div>
              </div>
              <div className="modal modal--md" id="RS-25-swap" data-code="RS-25-swap" role="dialog" aria-modal="true" aria-labelledby="RS-25-swap-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RS-25-swap-t">{"Swap rooms"}</h2>
                      <p className="modal__desc">{"Two allocated bookings exchange rooms."}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p className="modal__note">{"Swap the rooms of two bookings that have not checked in. Both guests keep their rate; the system re-checks the room type of each booking."}</p>
                    <div className="ra-swap">
                      <label className="field">
                        <span className="field__label">{"First booking"}</span>
                        <select className="field__input field__input--select">
                          <option>{"FK-10034 · Ms Pooja Neil · room 106 (GDLX)"}</option>
                          <option>{"FK-10096 · Mr Hans Mueller · room 302 (GDLX)"}</option>
                          <option>{"FK-10233 · Mrs Radhika Mohan · room 118 (GDLX)"}</option>
                        </select>
                      </label>
                      <span className="ra-swap__ar">
                        <svg className="icon" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#arrow-left-right" />
                        </svg>
                      </span>
                      <label className="field">
                        <span className="field__label">{"Second booking"}</span>
                        <select className="field__input field__input--select">
                          <option>{"FK-10096 · Mr Hans Mueller · room 302 (GDLX)"}</option>
                          <option>{"FK-10034 · Ms Pooja Neil · room 106 (GDLX)"}</option>
                          <option>{"FK-10233 · Mrs Radhika Mohan · room 118 (GDLX)"}</option>
                        </select>
                      </label>
                    </div>
                    <label className="field">
                      <span className="field__label">{"Reason"}</span>
                      <select className="field__input field__input--select">
                        <option>{"Guest request"}</option>
                        <option>{"Preference – floor / view"}</option>
                        <option>{"Keep a group together"}</option>
                        <option>{"Room problem (maintenance)"}</option>
                      </select>
                    </label>
                    <p className="ra-rule">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#info" />
                      </svg>
                      {"Different room types cannot be swapped here – use "}
                      <Link data-leads-to="RS-08" to={"/reservation/rs-08-modify-reservation"}>{"Modify reservation"}</Link>
                      {" for an upgrade or downgrade."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#rs25-swap">
                      <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#arrow-left-right" />
                      </svg>
                      {"Swap rooms"}
                    </a>
                  </div>
                </div>
              </div>
              <div className="modal modal--sm" id="RS-25-un" data-code="RS-25-un" role="dialog" aria-modal="true" aria-labelledby="RS-25-un-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RS-25-un-t">{"Un-allocate this room?"}</h2>
                      <p className="modal__desc">
                        {"The booking goes back to "}
                        <b>{"Not allocated"}</b>
                        {"; the room becomes free for other arrivals."}
                      </p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <label className="field">
                      <span className="field__label">{"Reason"}</span>
                      <select className="field__input field__input--select">
                        <option>{"Guest asked for another room"}</option>
                        <option>{"Room problem"}</option>
                        <option>{"Re-planning allocations"}</option>
                        <option>{"Other"}</option>
                      </select>
                    </label>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Keep the room"}</a>
                    <a className="btn btn--danger" href="#flow-done">{"Un-allocate"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--md" id="RS-25-auto" data-code="RS-25-auto" role="dialog" aria-modal="true" aria-labelledby="RS-25-auto-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RS-25-auto-t">{"Auto-allocate arrivals"}</h2>
                      <p className="modal__desc">{"Let the system suggest rooms for every booking that is not allocated; you can change any room afterwards."}</p>
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
                        <span className="field__label">{"Arrival date"}</span>
                        <select className="field__input field__input--select">
                          <option>{"Thu 22 Oct 2026 · 12 arrivals"}</option>
                          <option>{"Fri 23 Oct 2026 · 4 arrivals"}</option>
                          <option>{"Both days · 16 arrivals"}</option>
                        </select>
                      </label>
                      <label className="field">
                        <span className="field__label">{"Allocate in this order"}</span>
                        <select className="field__input field__input--select">
                          <option>{"VIP and Aviv Club tier first"}</option>
                          <option>{"Earliest ETA first"}</option>
                          <option>{"Longest stay first"}</option>
                          <option>{"Booking number"}</option>
                        </select>
                      </label>
                    </div>
                    <div className="ra-rules">
                      <label className="sw">
                        <input type="checkbox" role="switch" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Honour guest preferences (floor, view, bed type)"}
                      </label>
                      <label className="sw">
                        <input type="checkbox" role="switch" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Give a repeat guest their last room when it is free"}
                      </label>
                      <label className="sw">
                        <input type="checkbox" role="switch" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Keep rooms of one booking together (same floor)"}
                      </label>
                      <label className="sw">
                        <input type="checkbox" role="switch" defaultChecked={true} />
                        <span className="sw__track" />
                        {"Only clean or inspected rooms"}
                      </label>
                      <label className="sw">
                        <input type="checkbox" role="switch" />
                        <span className="sw__track" />
                        {"Allow a free upgrade when the booked type is sold out (approval still needed)"}
                      </label>
                    </div>
                    <div className="ra-preview">
                      <b>{"Preview"}</b>
                      <span>{"7 arrivals will get a room · 1 needs a manual choice (no Premium Suite free) · rooms already allocated are left as they are."}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">
                      <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#sparkles" />
                      </svg>
                      {"Allocate now"}
                    </a>
                  </div>
                </div>
              </div>
              <div className="modal modal--md" id="RS-25-export" data-code="RS-25-export" role="dialog" aria-modal="true" aria-labelledby="RS-25-export-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RS-25-export-t">{"Export room allocation"}</h2>
                      <p className="modal__desc">{"Choose what goes into the file."}</p>
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
                        <span className="field__label">{"Arrival from"}</span>
                        <input className="field__input num" type="date" defaultValue={"2026-10-22"} />
                      </label>
                      <label className="field">
                        <span className="field__label">{"Arrival to"}</span>
                        <input className="field__input num" type="date" defaultValue={"2026-10-23"} />
                      </label>
                      <label className="field">
                        <span className="field__label">{"Room allocation"}</span>
                        <select className="field__input field__input--select">
                          <option>{"All arrivals"}</option>
                          <option>{"Allocated only"}</option>
                          <option>{"Not allocated only"}</option>
                        </select>
                      </label>
                      <label className="field">
                        <span className="field__label">{"Agent / corporate"}</span>
                        <select className="field__input field__input--select">
                          <option>{"All agents and corporates"}</option>
                          <option>{"Agoda"}</option>
                          <option>{"Booking.com"}</option>
                          <option>{"Cochin Marine Services Ltd"}</option>
                          <option>{"Email"}</option>
                          <option>{"Expedia"}</option>
                          <option>{"MakeMyTrip / Goibibo"}</option>
                          <option>{"Malabar Spice Exports Pvt Ltd"}</option>
                          <option>{"Phone"}</option>
                          <option>{"Self booking"}</option>
                          <option>{"Aviv mobile app"}</option>
                        </select>
                      </label>
                      <label className="field">
                        <span className="field__label">{"Room type"}</span>
                        <select className="field__input field__input--select">
                          <option>{"All room types"}</option>
                          <option>{"GDLX"}</option>
                          <option>{"PDLX"}</option>
                          <option>{"DLXS"}</option>
                          <option>{"PRMS"}</option>
                        </select>
                      </label>
                      <label className="field">
                        <span className="field__label">{"Format"}</span>
                        <select className="field__input field__input--select">
                          <option>{"Excel (.xlsx)"}</option>
                          <option>{"CSV"}</option>
                          <option>{"PDF"}</option>
                        </select>
                      </label>
                    </div>
                    <p className="ra-rule">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#info" />
                      </svg>
                      {"The file has the columns you have switched on under Filter → Show columns."}
                    </p>
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
                  <span className="code-chip">{"RS-25"}</span>
                </summary>
                <dl className="helpbox__body">
                  <dt>{"What it is for"}</dt>
                  <dd>{"Give arrivals a room before they reach the hotel: see who still needs a room, assign, change, swap or un-allocate, and hand over to check-in."}</dd>
                  <dt>{"Opened from"}</dt>
                  <dd>
                    {"Reservations menu, "}
                    <Link to={"/reservation/rs-26-expected-arrivals"}>{"RS-26"}</Link>
                    {", "}
                    <Link to={"/reservation/rs-07-reservation-details"}>{"RS-07"}</Link>
                  </dd>
                  <dt>{"Leads to"}</dt>
                  <dd>
                    <Link to={"/reservation/rs-07-reservation-details"}>{"RS-07"}</Link>
                    {", "}
                    <Link to={"/reservation/rs-18-guest-profile"}>{"RS-18"}</Link>
                    {", "}
                    <Link to={"/reservation/rs-10-payments-and-deposits"}>{"RS-10"}</Link>
                    {", "}
                    <Link to={"/front-desk/fd-03-check-in"}>{"FD-03"}</Link>
                    {", "}
                    <Link to={"/reservation/rs-09-room-assignment"}>{"RS-09"}</Link>
                  </dd>
                  <dt>{"Note"}</dt>
                  <dd>{"Static screen (HTML and CSS only). Single bookings are allocated here; RS-09 is the room-by-room studio for a booking with several rooms."}</dd>
                </dl>
              </details>
              <div className="modal" id="rs25-swap" data-flow="add-form" role="dialog" aria-modal="true" aria-labelledby="rs25-swap-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="rs25-swap-t">{"Swap rooms"}</h2>
                      <p className="modal__desc">{"Exchange rooms between the ticked booking and another arrival."}</p>
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
                        <label className="field__label" htmlFor="rs25-swap-f1">
                          {"Swap with booking "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="rs25-swap-f1" type="text" placeholder="FK-10006" />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rs25-swap-f2">
                          {"Reason "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rs25-swap-f2" defaultValue={""}>
                            <option value="">{"Select…"}</option>
                            <option>{"Guest asked for another room"}</option>
                            <option>{"Room problem"}</option>
                            <option>{"Re-planning allocations"}</option>
                            <option>{"Other"}</option>
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
                    <a className="btn btn--primary" href="#flow-done">{"Confirm swap"}</a>
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
