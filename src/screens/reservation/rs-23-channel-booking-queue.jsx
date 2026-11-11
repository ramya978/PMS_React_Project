// GENERATED from public/reservation/rs-23-channel-booking-queue/index.html by scripts/convert_legacy.py.
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
    "href": "/reservation/rs-23-channel-booking-queue/rs-23-channel-booking-queue.css",
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

export default function ReservationRs23ChannelBookingQueue() {
  return (
    <ScreenShell title="Channel Booking Queue" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="RS-23" data-code="RS-23" data-static="1" className="legacy-body">
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
                  <Link className="nav__item" data-nav="RS-16" title="Waitlist" to={"/reservation/rs-16-waitlist"}>
                    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#clock" />
                    </svg>
                    <span className="nav__label">{"Waitlist"}</span>
                  </Link>
                  <Link className="nav__item is-active" data-nav="RS-23" aria-current="page" title="Channel Booking Queue" to={"/reservation/rs-23-channel-booking-queue"}>
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
            <main className="app__content" id="main" data-code="RS-23" tabIndex="-1">
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
                        <span aria-current="page">{"Channel Booking Queue"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">{"Channel Booking Queue"}</h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"RS-23"}</span>
                  <div className="page-header__filters">
                    <div className="hctl">
                      <label className="hfilter__btn" htmlFor="rs-23-f" title="Show or hide the filters">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#filter" />
                        </svg>
                        <span>{"Filter"}</span>
                        <i className="hfilter__dot" aria-hidden="true" />
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </label>
                      <input className="hfilter__tg" type="checkbox" id="rs-23-f" aria-label="Show filters" />
                      <form className="hfilter" method="get" action="" role="search" aria-label="Filters">
                        <span className="hfilter__hic" title="Filters">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#filter" />
                          </svg>
                        </span>
                        <div className="hfilter__grid">
                          <label className="hf-f">
                            <span className="hf-f__l">{"From"}</span>
                            <input className="hf-f__c" type="date" name="from" defaultValue={"2026-10-01"} />
                          </label>
                          <label className="hf-f">
                            <span className="hf-f__l">{"To"}</span>
                            <input className="hf-f__c" type="date" name="to" defaultValue={"2026-10-22"} />
                          </label>
                          <label className="hf-f">
                            <span className="hf-f__l">{"Channel"}</span>
                            <select className="hf-f__c" name="channel">
                              <option>{"All"}</option>
                              <option>{"Aviv mobile app (CRS)"}</option>
                              <option>{"Aviv website booking engine"}</option>
                              <option>{"Booking.com"}</option>
                              <option>{"Agoda"}</option>
                              <option>{"Expedia"}</option>
                              <option>{"MakeMyTrip / Goibibo"}</option>
                              <option>{"EaseMyTrip"}</option>
                              <option>{"Trip.com"}</option>
                            </select>
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                          <label className="hf-f">
                            <span className="hf-f__l">{"Status"}</span>
                            <select className="hf-f__c" name="status">
                              <option>{"All"}</option>
                              <option>{"New"}</option>
                              <option>{"Accepted"}</option>
                              <option>{"Rejected"}</option>
                              <option>{"Failed"}</option>
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
                  <div className="page-header__actions" />
                </div>
              </header>
              <div className="cq">
                <section className="cq-hero" aria-label="Queue summary">
                  <div className="cq-hero__text">
                    <span className="cq-hero__kicker">
                      <i className="cq-live" aria-hidden="true" />
                      {"Channel manager · live"}
                    </span>
                    <h2 className="cq-hero__title">
                      <b className="num">{"3"}</b>
                      {" bookings need you"}
                    </h2>
                    <p className="cq-hero__sub">{"2 could not be mapped to a room and rate · 1 change is waiting for its booking. Fix them before the guest arrives."}</p>
                    <dl className="cq-hero__facts">
                      <div>
                        <dt>{"Received today"}</dt>
                        <dd className="num">{"4"}</dd>
                        <dd className="cq-hero__d">{"2 processed · 2 waiting"}</dd>
                      </div>
                      <div>
                        <dt>{"Failed"}</dt>
                        <dd className="num cq-bad">{"2"}</dd>
                        <dd className="cq-hero__d">{"Booking.com, Agoda"}</dd>
                      </div>
                      <div>
                        <dt>{"Queued"}</dt>
                        <dd className="num cq-warn">{"1"}</dd>
                        <dd className="cq-hero__d">{"MakeMyTrip modification"}</dd>
                      </div>
                    </dl>
                    <div className="cq-hero__acts">
                      <a className="btn cq-hero__go" href="#RS-23-D-CMSG-F1">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sparkles" />
                        </svg>
                        {"Resolve next · BO-481920377"}
                      </a>
                      <Link className="btn cq-hero__ghost" data-leads-to="RSS-16" to={"/setup/rss-16-channel-mapping"}>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#link" />
                        </svg>
                        {"Channel mapping"}
                      </Link>
                    </div>
                  </div>
                  <div className="cq-orbit" role="img" aria-label="6 of 8 channels in sync; Agoda and Expedia have an update to retry">
                    <span className="cq-orbit__ring" aria-hidden="true" />
                    <span className="cq-orbit__ring cq-orbit__ring--in" aria-hidden="true" />
                    <ul className="cq-orbit__nodes">
                      <li className="cq-node" style={{"--i": "0", "--h": "222"}} title="Booking.com – in sync">
                        <span className="cq-node__m">{"B."}</span>
                        <span className="sr-only">{"Booking.com: in sync"}</span>
                      </li>
                      <li className="cq-node cq-node--bad" style={{"--i": "1", "--h": "8"}} title="Agoda – 1 update to retry">
                        <span className="cq-node__m">{"Ag"}</span>
                        <span className="sr-only">{"Agoda: 1 update to retry"}</span>
                      </li>
                      <li className="cq-node cq-node--bad" style={{"--i": "2", "--h": "44"}} title="Expedia – 1 update to retry">
                        <span className="cq-node__m">{"Ex"}</span>
                        <span className="sr-only">{"Expedia: 1 update to retry"}</span>
                      </li>
                      <li className="cq-node" style={{"--i": "3", "--h": "350"}} title="MakeMyTrip / Goibibo – in sync">
                        <span className="cq-node__m">{"MM"}</span>
                        <span className="sr-only">{"MakeMyTrip / Goibibo: in sync"}</span>
                      </li>
                      <li className="cq-node" style={{"--i": "4", "--h": "28"}} title="EaseMyTrip – in sync">
                        <span className="cq-node__m">{"EM"}</span>
                        <span className="sr-only">{"EaseMyTrip: in sync"}</span>
                      </li>
                      <li className="cq-node" style={{"--i": "5", "--h": "200"}} title="Trip.com – in sync">
                        <span className="cq-node__m">{"Tc"}</span>
                        <span className="sr-only">{"Trip.com: in sync"}</span>
                      </li>
                      <li className="cq-node" style={{"--i": "6", "--h": "172"}} title="Aviv website booking engine – in sync">
                        <span className="cq-node__m">{"AW"}</span>
                        <span className="sr-only">{"Aviv website booking engine: in sync"}</span>
                      </li>
                      <li className="cq-node" style={{"--i": "7", "--h": "152"}} title="Aviv mobile app (CRS) – in sync">
                        <span className="cq-node__m">{"AP"}</span>
                        <span className="sr-only">{"Aviv mobile app (CRS): in sync"}</span>
                      </li>
                    </ul>
                    <span className="cq-hub" aria-hidden="true">
                      <b>{"6/8"}</b>
                      <small>{"in sync"}</small>
                    </span>
                  </div>
                  <div className="cq-hero__gauge">
                    <div className="cq-gauge" style={{"--pct": "97"}} role="img" aria-label="70 of 72 sends acknowledged">
                      <span className="cq-gauge__n num">
                        {"70"}
                        <small>{"/72"}</small>
                      </span>
                      <span className="cq-gauge__s">{"acknowledged"}</span>
                    </div>
                    <ul className="cq-hero__legend">
                      <li>
                        <span className="cq-dot cq-dot--ok" aria-hidden="true" />
                        {"Last good update "}
                        <b className="num">{"06:00"}</b>
                      </li>
                      <li>
                        <span className="cq-dot cq-dot--bad" aria-hidden="true" />
                        {"Agoda, Expedia to retry"}
                      </li>
                      <li>
                        <span className="cq-dot" aria-hidden="true" />
                        {"Next push "}
                        <b className="num">{"10:00"}</b>
                      </li>
                    </ul>
                  </div>
                </section>
                <div className="cq-grid">
                  <div className="cq-work">
                    <div className="stabs">
                      <input type="radio" name="cq" id="cq-1" aria-label="Needs attention" defaultChecked={true} />
                      <input type="radio" name="cq" id="cq-2" aria-label="Processed" />
                      <input type="radio" name="cq" id="cq-3" aria-label="Channel sync log" />
                      <input type="radio" name="cq" id="cq-4" aria-label="Rate parity" />
                      <input type="radio" name="cq" id="cq-5" aria-label="Channel rates" />
                      <div className="stabs__list" role="tablist">
                        <label htmlFor="cq-1">
                          {"Needs attention"}
                          <span className="stabs__n">{"3"}</span>
                        </label>
                        <label htmlFor="cq-2">{"Processed"}</label>
                        <label htmlFor="cq-3">{"Channel sync log"}</label>
                        <label htmlFor="cq-4">{"Rate parity"}</label>
                        <label htmlFor="cq-5">{"Channel rates"}</label>
                      </div>
                      <div className="stabs__panels">
                        <section className="stabs__panel" data-code="RS-23-1" aria-label="Needs attention">
                          <div className="cq-list" data-code="RS-23-1-list">
                            <article className="cq-item cq-item--bad">
                              <span className="cq-mono cq-mono--lg" style={{"--h": "222"}} aria-hidden="true">{"B."}</span>
                              <div className="cq-item__main">
                                <div className="cq-item__top">
                                  <strong className="cq-item__ref">{"BO-481920377"}</strong>
                                  <span className="cq-type cq-type--booking">
                                    <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                      <use href="/assets/icons/sprite.svg#bed" />
                                    </svg>
                                    {"Booking"}
                                  </span>
                                  <span className="cq-item__ch">{"Booking.com"}</span>
                                </div>
                                <p className="cq-item__who">
                                  <b>{"Hannah Brooks"}</b>
                                  {" · 9 – 12 Nov · ₹76,800"}
                                </p>
                                <p className="cq-item__why">
                                  <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#alert" />
                                  </svg>
                                  <span>{"Room code BOO-STE-PRM with rate code BAR-RO is not mapped to a hotel room type and rate plan."}</span>
                                </p>
                                <p className="cq-item__fix">
                                  <span>{"Suggested mapping"}</span>
                                  <span className="cq-chip">{"Premium Suite"}</span>
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#arrow-right" />
                                  </svg>
                                  <span className="cq-chip">{"BAR-EP"}</span>
                                </p>
                              </div>
                              <div className="cq-item__side">
                                <div className="cq-item__st">
                                  <span className="pill pill--cancelled">
                                    <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                      <use href="/assets/icons/sprite.svg#x-circle" />
                                    </svg>
                                    {"Failed"}
                                  </span>
                                  <span className="cq-item__time">
                                    <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                      <use href="/assets/icons/sprite.svg#clock" />
                                    </svg>
                                    {"Today 08:48"}
                                  </span>
                                </div>
                                <a className="btn btn--primary" href="#RS-23-D-CMSG-F1">
                                  {"Resolve"}
                                  <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#arrow-right" />
                                  </svg>
                                </a>
                              </div>
                            </article>
                            <article className="cq-item cq-item--bad">
                              <span className="cq-mono cq-mono--lg" style={{"--h": "8"}} aria-hidden="true">{"Ag"}</span>
                              <div className="cq-item__main">
                                <div className="cq-item__top">
                                  <strong className="cq-item__ref">{"AG-770215964"}</strong>
                                  <span className="cq-type cq-type--booking">
                                    <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                      <use href="/assets/icons/sprite.svg#bed" />
                                    </svg>
                                    {"Booking"}
                                  </span>
                                  <span className="cq-item__ch">{"Agoda"}</span>
                                </div>
                                <p className="cq-item__who">
                                  <b>{"Kunal Manav"}</b>
                                  {" · 31 Oct – 2 Nov · ₹21,400"}
                                </p>
                                <p className="cq-item__why">
                                  <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#alert" />
                                  </svg>
                                  <span>{"Rate code PKG-DINNER is not mapped to a hotel rate plan."}</span>
                                </p>
                                <p className="cq-item__fix">
                                  <span>{"Suggested mapping"}</span>
                                  <span className="cq-chip">{"Pool Deluxe Room"}</span>
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#arrow-right" />
                                  </svg>
                                  <span className="cq-chip">{"BAR-MAP"}</span>
                                </p>
                              </div>
                              <div className="cq-item__side">
                                <div className="cq-item__st">
                                  <span className="pill pill--cancelled">
                                    <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                      <use href="/assets/icons/sprite.svg#x-circle" />
                                    </svg>
                                    {"Failed"}
                                  </span>
                                  <span className="cq-item__time">
                                    <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                      <use href="/assets/icons/sprite.svg#clock" />
                                    </svg>
                                    {"21 Oct 21:14"}
                                  </span>
                                </div>
                                <a className="btn btn--primary" href="#RS-23-D-CMSG-F2">
                                  {"Resolve"}
                                  <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#arrow-right" />
                                  </svg>
                                </a>
                              </div>
                            </article>
                            <article className="cq-item cq-item--wait">
                              <span className="cq-mono cq-mono--lg" style={{"--h": "350"}} aria-hidden="true">{"MM"}</span>
                              <div className="cq-item__main">
                                <div className="cq-item__top">
                                  <strong className="cq-item__ref">{"MM-559103482"}</strong>
                                  <span className="cq-type cq-type--modification">
                                    <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                      <use href="/assets/icons/sprite.svg#pencil" />
                                    </svg>
                                    {"Modification"}
                                  </span>
                                  <span className="cq-item__ch">{"MakeMyTrip / Goibibo"}</span>
                                </div>
                                <p className="cq-item__who">
                                  <b>{"Swathi Ranjan"}</b>
                                  {" · 28 – 30 Oct"}
                                </p>
                                <p className="cq-item__why">
                                  <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  <span>{"Waiting in the queue to be processed."}</span>
                                </p>
                                <p className="cq-item__fix">
                                  <span>{"Suggested mapping"}</span>
                                  <span className="cq-chip">{"Garden Deluxe Room"}</span>
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#arrow-right" />
                                  </svg>
                                  <span className="cq-chip">{"BAR-CP"}</span>
                                </p>
                              </div>
                              <div className="cq-item__side">
                                <div className="cq-item__st">
                                  <span className="pill pill--tentative">
                                    <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                      <use href="/assets/icons/sprite.svg#clock" />
                                    </svg>
                                    {"Queued"}
                                  </span>
                                  <span className="cq-item__time">
                                    <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                      <use href="/assets/icons/sprite.svg#clock" />
                                    </svg>
                                    {"Today 09:40"}
                                  </span>
                                </div>
                                <a className="btn btn--primary" href="#RS-23-D-CMSG-Q1">
                                  {"Resolve"}
                                  <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#arrow-right" />
                                  </svg>
                                </a>
                              </div>
                            </article>
                          </div>
                        </section>
                        <section className="stabs__panel" data-code="RS-23-2" aria-label="Processed">
                          <div className="pgw">
                            <div className="s-scroll">
                              <table className="srt dt__table cq-t dt--hug" data-code="RS-23-2-list" style={{"--srt-cols": "auto auto auto auto auto auto"}} data-mc="">
                                <caption className="sr-only">{"Processed"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">
                                      <input className="srt-i srt-a0" type="radio" name="strs230" id="strs230-0a" aria-label="Sort by Partner reference, lowest or A first" />
                                      <input className="srt-i srt-d0" type="radio" name="strs230" id="strs230-0d" aria-label="Sort by Partner reference, highest or Z first" />
                                      <label className="srt-l srt-l--a" htmlFor="strs230-0a">{"Partner reference"}</label>
                                      <label className="srt-l srt-l--d" htmlFor="strs230-0d" aria-hidden="true">{"Partner reference"}</label>
                                    </th>
                                    <th scope="col">
                                      <input className="srt-i srt-a1" type="radio" name="strs230" id="strs230-1a" aria-label="Sort by Guest and stay, lowest or A first" />
                                      <input className="srt-i srt-d1" type="radio" name="strs230" id="strs230-1d" aria-label="Sort by Guest and stay, highest or Z first" />
                                      <label className="srt-l srt-l--a" htmlFor="strs230-1a">{"Guest and stay"}</label>
                                      <label className="srt-l srt-l--d" htmlFor="strs230-1d" aria-hidden="true">{"Guest and stay"}</label>
                                    </th>
                                    <th scope="col">
                                      <input className="srt-i srt-a2" type="radio" name="strs230" id="strs230-2a" aria-label="Sort by Type, lowest or A first" />
                                      <input className="srt-i srt-d2" type="radio" name="strs230" id="strs230-2d" aria-label="Sort by Type, highest or Z first" />
                                      <label className="srt-l srt-l--a" htmlFor="strs230-2a">{"Type"}</label>
                                      <label className="srt-l srt-l--d" htmlFor="strs230-2d" aria-hidden="true">{"Type"}</label>
                                    </th>
                                    <th scope="col">
                                      <input className="srt-i srt-a3" type="radio" name="strs230" id="strs230-3a" aria-label="Sort by Received, lowest or A first" />
                                      <input className="srt-i srt-d3" type="radio" name="strs230" id="strs230-3d" aria-label="Sort by Received, highest or Z first" />
                                      <label className="srt-l srt-l--a" htmlFor="strs230-3a">{"Received"}</label>
                                      <label className="srt-l srt-l--d" htmlFor="strs230-3d" aria-hidden="true">{"Received"}</label>
                                    </th>
                                    <th scope="col">{"Status"}</th>
                                    <th scope="col">{"Hotel booking"}</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr style={{"--k0": "3", "--k1": "13", "--k2": "1", "--k3": "14"}}>
                                    <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                      <div className="cq-id">
                                        <span className="cq-mono" style={{"--h": "8"}} aria-hidden="true">{"Ag"}</span>
                                        <span>
                                          <strong>{"AG-867951739"}</strong>
                                          <small>{"Agoda"}</small>
                                        </span>
                                      </div>
                                    </td>
                                    <td className="dt__td" data-label="Guest and stay">
                                      <div className="cq-two">
                                        <strong>{"Swathi Dhruv"}</strong>
                                        <small>{"30 Nov – 3 Dec"}</small>
                                      </div>
                                    </td>
                                    <td className="dt__td" data-label="Type">
                                      <span className="cq-type cq-type--booking">
                                        <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#bed" />
                                        </svg>
                                        {"Booking"}
                                      </span>
                                    </td>
                                    <td className="dt__td nw" data-label="Received" data-w2="">{"Today 14:51"}</td>
                                    <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Processed"}
                                      </span>
                                    </td>
                                    <td className="dt__td nw" data-a="">
                                      <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10246" data-leads-to="RS-07">{"Open booking"}</a>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "5", "--k1": "3", "--k2": "1", "--k3": "13"}}>
                                    <td className="dt__td" data-label="Booking" data-w="" data-t="">
                                      <div className="cq-id">
                                        <span className="cq-mono" style={{"--h": "152"}} aria-hidden="true">{"AP"}</span>
                                        <span>
                                          <strong>{"MR-72365189"}</strong>
                                          <small>{"Aviv mobile app (CRS)"}</small>
                                        </span>
                                      </div>
                                    </td>
                                    <td className="dt__td" data-label="Guest and stay" data-w2="">
                                      <div className="cq-two">
                                        <strong>{"Elsa Lindberg"}</strong>
                                        <small>{"17 – 19 Jan"}</small>
                                      </div>
                                    </td>
                                    <td className="dt__td" data-label="Type">
                                      <span className="cq-type cq-type--booking">
                                        <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#bed" />
                                        </svg>
                                        {"Booking"}
                                      </span>
                                    </td>
                                    <td className="dt__td nw" data-label="Received" data-w2="">{"Today 13:25"}</td>
                                    <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Processed"}
                                      </span>
                                    </td>
                                    <td className="dt__td nw" data-a="">
                                      <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10245" data-leads-to="RS-07">{"Open booking"}</a>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "6", "--k1": "1", "--k2": "1", "--k3": "12"}}>
                                    <td className="dt__td" data-label="Booking" data-w="" data-t="">
                                      <div className="cq-id">
                                        <span className="cq-mono" style={{"--h": "152"}} aria-hidden="true">{"AP"}</span>
                                        <span>
                                          <strong>{"MR-75369481"}</strong>
                                          <small>{"Aviv mobile app (CRS)"}</small>
                                        </span>
                                      </div>
                                    </td>
                                    <td className="dt__td" data-label="Guest and stay" data-w2="">
                                      <div className="cq-two">
                                        <strong>{"Athira George"}</strong>
                                        <small>{"6 – 11 Jan"}</small>
                                      </div>
                                    </td>
                                    <td className="dt__td" data-label="Type">
                                      <span className="cq-type cq-type--booking">
                                        <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#bed" />
                                        </svg>
                                        {"Booking"}
                                      </span>
                                    </td>
                                    <td className="dt__td nw" data-label="Received" data-w2="">{"21 Oct 20:10"}</td>
                                    <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Processed"}
                                      </span>
                                    </td>
                                    <td className="dt__td nw" data-a="">
                                      <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10241" data-leads-to="RS-07">{"Open booking"}</a>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "11", "--k1": "8", "--k2": "1", "--k3": "11"}}>
                                    <td className="dt__td" data-label="Booking" data-w="" data-t="">
                                      <div className="cq-id">
                                        <span className="cq-mono" style={{"--h": "350"}} aria-hidden="true">{"MM"}</span>
                                        <span>
                                          <strong>{"MM-425102875"}</strong>
                                          <small>{"MakeMyTrip / Goibibo"}</small>
                                        </span>
                                      </div>
                                    </td>
                                    <td className="dt__td" data-label="Guest and stay" data-w2="">
                                      <div className="cq-two">
                                        <strong>{"Karthik Jatin"}</strong>
                                        <small>{"11 – 13 Nov"}</small>
                                      </div>
                                    </td>
                                    <td className="dt__td" data-label="Type">
                                      <span className="cq-type cq-type--booking">
                                        <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#bed" />
                                        </svg>
                                        {"Booking"}
                                      </span>
                                    </td>
                                    <td className="dt__td nw" data-label="Received" data-w2="">{"21 Oct 18:40"}</td>
                                    <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Processed"}
                                      </span>
                                    </td>
                                    <td className="dt__td nw" data-a="">
                                      <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10240" data-leads-to="RS-07">{"Open booking"}</a>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "12", "--k1": "9", "--k2": "2", "--k3": "10"}}>
                                    <td className="dt__td" data-label="Booking" data-w="" data-t="">
                                      <div className="cq-id">
                                        <span className="cq-mono" style={{"--h": "350"}} aria-hidden="true">{"MM"}</span>
                                        <span>
                                          <strong>{"MM-622122832"}</strong>
                                          <small>{"MakeMyTrip / Goibibo"}</small>
                                        </span>
                                      </div>
                                    </td>
                                    <td className="dt__td" data-label="Guest and stay" data-w2="">
                                      <div className="cq-two">
                                        <strong>{"Kavita Siddharth"}</strong>
                                        <small>{"4 – 7 Dec"}</small>
                                      </div>
                                    </td>
                                    <td className="dt__td" data-label="Type" data-w2="">
                                      <span className="cq-type cq-type--cancellation">
                                        <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#x-circle" />
                                        </svg>
                                        {"Cancellation"}
                                      </span>
                                    </td>
                                    <td className="dt__td nw" data-label="Received" data-w2="">{"21 Oct 15:05"}</td>
                                    <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Processed"}
                                      </span>
                                    </td>
                                    <td className="dt__td nw" data-a="">
                                      <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10236" data-leads-to="RS-07">{"Open booking"}</a>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "12", "--k1": "9", "--k2": "1", "--k3": "9"}}>
                                    <td className="dt__td" data-label="Booking" data-w="" data-t="">
                                      <div className="cq-id">
                                        <span className="cq-mono" style={{"--h": "350"}} aria-hidden="true">{"MM"}</span>
                                        <span>
                                          <strong>{"MM-622122832"}</strong>
                                          <small>{"MakeMyTrip / Goibibo"}</small>
                                        </span>
                                      </div>
                                    </td>
                                    <td className="dt__td" data-label="Guest and stay" data-w2="">
                                      <div className="cq-two">
                                        <strong>{"Kavita Siddharth"}</strong>
                                        <small>{"4 – 7 Dec"}</small>
                                      </div>
                                    </td>
                                    <td className="dt__td" data-label="Type">
                                      <span className="cq-type cq-type--booking">
                                        <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#bed" />
                                        </svg>
                                        {"Booking"}
                                      </span>
                                    </td>
                                    <td className="dt__td nw" data-label="Received" data-w2="">{"21 Oct 13:05"}</td>
                                    <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Processed"}
                                      </span>
                                    </td>
                                    <td className="dt__td nw" data-a="">
                                      <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10236" data-leads-to="RS-07">{"Open booking"}</a>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "4", "--k1": "5", "--k2": "1", "--k3": "8"}}>
                                    <td className="dt__td" data-label="Booking" data-w="" data-t="">
                                      <div className="cq-id">
                                        <span className="cq-mono" style={{"--h": "152"}} aria-hidden="true">{"AP"}</span>
                                        <span>
                                          <strong>{"MR-47944038"}</strong>
                                          <small>{"Aviv mobile app (CRS)"}</small>
                                        </span>
                                      </div>
                                    </td>
                                    <td className="dt__td" data-label="Guest and stay" data-w2="">
                                      <div className="cq-two">
                                        <strong>{"Imran Shaan"}</strong>
                                        <small>{"6 – 7 Dec"}</small>
                                      </div>
                                    </td>
                                    <td className="dt__td" data-label="Type">
                                      <span className="cq-type cq-type--booking">
                                        <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#bed" />
                                        </svg>
                                        {"Booking"}
                                      </span>
                                    </td>
                                    <td className="dt__td nw" data-label="Received" data-w2="">{"21 Oct 12:56"}</td>
                                    <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Processed"}
                                      </span>
                                    </td>
                                    <td className="dt__td nw" data-a="">
                                      <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10235" data-leads-to="RS-07">{"Open booking"}</a>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "13", "--k1": "4", "--k2": "1", "--k3": "7"}}>
                                    <td className="dt__td" data-label="Booking" data-w="" data-t="">
                                      <div className="cq-id">
                                        <span className="cq-mono" style={{"--h": "350"}} aria-hidden="true">{"MM"}</span>
                                        <span>
                                          <strong>{"MM-930569184"}</strong>
                                          <small>{"MakeMyTrip / Goibibo"}</small>
                                        </span>
                                      </div>
                                    </td>
                                    <td className="dt__td" data-label="Guest and stay" data-w2="">
                                      <div className="cq-two">
                                        <strong>{"Imran Dhruv"}</strong>
                                        <small>{"22 – 27 Oct"}</small>
                                      </div>
                                    </td>
                                    <td className="dt__td" data-label="Type">
                                      <span className="cq-type cq-type--booking">
                                        <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#bed" />
                                        </svg>
                                        {"Booking"}
                                      </span>
                                    </td>
                                    <td className="dt__td nw" data-label="Received" data-w2="">{"21 Oct 12:21"}</td>
                                    <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Processed"}
                                      </span>
                                    </td>
                                    <td className="dt__td nw" data-a="">
                                      <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10233" data-leads-to="RS-07">{"Open booking"}</a>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "1", "--k1": "12", "--k2": "2", "--k3": "6"}}>
                                    <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                      <div className="cq-id">
                                        <span className="cq-mono" style={{"--h": "8"}} aria-hidden="true">{"Ag"}</span>
                                        <span>
                                          <strong>{"AG-228043732"}</strong>
                                          <small>{"Agoda"}</small>
                                        </span>
                                      </div>
                                    </td>
                                    <td className="dt__td" data-label="Guest and stay">
                                      <div className="cq-two">
                                        <strong>{"Swathi Chirag"}</strong>
                                        <small>{"29 Oct – 1 Nov"}</small>
                                      </div>
                                    </td>
                                    <td className="dt__td" data-label="Type" data-w2="">
                                      <span className="cq-type cq-type--cancellation">
                                        <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#x-circle" />
                                        </svg>
                                        {"Cancellation"}
                                      </span>
                                    </td>
                                    <td className="dt__td nw" data-label="Received" data-w2="">{"21 Oct 12:00"}</td>
                                    <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Processed"}
                                      </span>
                                    </td>
                                    <td className="dt__td nw" data-a="">
                                      <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10126" data-leads-to="RS-07">{"Open booking"}</a>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "8", "--k1": "7", "--k2": "1", "--k3": "5"}}>
                                    <td className="dt__td" data-label="Booking" data-w="" data-t="">
                                      <div className="cq-id">
                                        <span className="cq-mono" style={{"--h": "222"}} aria-hidden="true">{"B."}</span>
                                        <span>
                                          <strong>{"BO-778489184"}</strong>
                                          <small>{"Booking.com"}</small>
                                        </span>
                                      </div>
                                    </td>
                                    <td className="dt__td" data-label="Guest and stay" data-w2="">
                                      <div className="cq-two">
                                        <strong>{"Jithin Mathew"}</strong>
                                        <small>{"21 – 23 Oct"}</small>
                                      </div>
                                    </td>
                                    <td className="dt__td" data-label="Type">
                                      <span className="cq-type cq-type--booking">
                                        <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#bed" />
                                        </svg>
                                        {"Booking"}
                                      </span>
                                    </td>
                                    <td className="dt__td nw" data-label="Received" data-w2="">{"20 Oct 20:59"}</td>
                                    <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Processed"}
                                      </span>
                                    </td>
                                    <td className="dt__td nw" data-a="">
                                      <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10232" data-leads-to="RS-07">{"Open booking"}</a>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "7", "--k1": "2", "--k2": "1", "--k3": "4"}}>
                                    <td className="dt__td" data-label="Booking" data-w="" data-t="">
                                      <div className="cq-id">
                                        <span className="cq-mono" style={{"--h": "152"}} aria-hidden="true">{"AP"}</span>
                                        <span>
                                          <strong>{"MR-97914340"}</strong>
                                          <small>{"Aviv mobile app (CRS)"}</small>
                                        </span>
                                      </div>
                                    </td>
                                    <td className="dt__td" data-label="Guest and stay">
                                      <div className="cq-two">
                                        <strong>{"Dileep Pranav"}</strong>
                                        <small>{"23 – 24 Jan"}</small>
                                      </div>
                                    </td>
                                    <td className="dt__td" data-label="Type">
                                      <span className="cq-type cq-type--booking">
                                        <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#bed" />
                                        </svg>
                                        {"Booking"}
                                      </span>
                                    </td>
                                    <td className="dt__td nw" data-label="Received" data-w2="">{"20 Oct 20:16"}</td>
                                    <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Processed"}
                                      </span>
                                    </td>
                                    <td className="dt__td nw" data-a="">
                                      <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10230" data-leads-to="RS-07">{"Open booking"}</a>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "9", "--k1": "6", "--k2": "1", "--k3": "3"}}>
                                    <td className="dt__td" data-label="Booking" data-w2="" data-t="">
                                      <div className="cq-id">
                                        <span className="cq-mono" style={{"--h": "44"}} aria-hidden="true">{"Ex"}</span>
                                        <span>
                                          <strong>{"EX-102872320"}</strong>
                                          <small>{"Expedia"}</small>
                                        </span>
                                      </div>
                                    </td>
                                    <td className="dt__td" data-label="Guest and stay" data-w2="">
                                      <div className="cq-two">
                                        <strong>{"Irina Petrova"}</strong>
                                        <small>{"3 – 6 Nov"}</small>
                                      </div>
                                    </td>
                                    <td className="dt__td" data-label="Type">
                                      <span className="cq-type cq-type--booking">
                                        <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#bed" />
                                        </svg>
                                        {"Booking"}
                                      </span>
                                    </td>
                                    <td className="dt__td nw" data-label="Received" data-w2="">{"20 Oct 19:15"}</td>
                                    <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Processed"}
                                      </span>
                                    </td>
                                    <td className="dt__td nw" data-a="">
                                      <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10228" data-leads-to="RS-07">{"Open booking"}</a>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "2", "--k1": "10", "--k2": "1", "--k3": "2"}}>
                                    <td className="dt__td nw" data-label="Booking" data-w2="" data-t="">
                                      <div className="cq-id">
                                        <span className="cq-mono" style={{"--h": "8"}} aria-hidden="true">{"Ag"}</span>
                                        <span>
                                          <strong>{"AG-582665625"}</strong>
                                          <small>{"Agoda"}</small>
                                        </span>
                                      </div>
                                    </td>
                                    <td className="dt__td nw" data-label="Guest and stay" data-w2="">
                                      <div className="cq-two">
                                        <strong>{"Marco Rossi"}</strong>
                                        <small>{"4 – 6 Nov"}</small>
                                      </div>
                                    </td>
                                    <td className="dt__td" data-label="Type">
                                      <span className="cq-type cq-type--booking">
                                        <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#bed" />
                                        </svg>
                                        {"Booking"}
                                      </span>
                                    </td>
                                    <td className="dt__td nw" data-label="Received" data-w2="">{"20 Oct 18:24"}</td>
                                    <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Processed"}
                                      </span>
                                    </td>
                                    <td className="dt__td nw" data-a="">
                                      <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10227" data-leads-to="RS-07">{"Open booking"}</a>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "10", "--k1": "11", "--k2": "1", "--k3": "1"}}>
                                    <td className="dt__td" data-label="Booking" data-w2="" data-t="">
                                      <div className="cq-id">
                                        <span className="cq-mono" style={{"--h": "44"}} aria-hidden="true">{"Ex"}</span>
                                        <span>
                                          <strong>{"EX-534320597"}</strong>
                                          <small>{"Expedia"}</small>
                                        </span>
                                      </div>
                                    </td>
                                    <td className="dt__td" data-label="Guest and stay" data-w2="">
                                      <div className="cq-two">
                                        <strong>{"Srinivas Manav"}</strong>
                                        <small>{"1 – 4 Jan"}</small>
                                      </div>
                                    </td>
                                    <td className="dt__td" data-label="Type">
                                      <span className="cq-type cq-type--booking">
                                        <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#bed" />
                                        </svg>
                                        {"Booking"}
                                      </span>
                                    </td>
                                    <td className="dt__td nw" data-label="Received" data-w2="">{"20 Oct 15:23"}</td>
                                    <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Processed"}
                                      </span>
                                    </td>
                                    <td className="dt__td nw" data-a="">
                                      <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10224" data-leads-to="RS-07">{"Open booking"}</a>
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
                        <section className="stabs__panel" data-code="RS-23-3" aria-label="Channel sync log">
                          <div className="cq-strip cq-strip--bad">
                            <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#alert" />
                            </svg>
                            <p>
                              <strong>{"70 of 72 sends acknowledged."}</strong>
                              {" 2 need a retry – shown first. Last good update Today 06:00."}
                            </p>
                          </div>
                          <div className="pgw">
                            <div className="s-scroll">
                              <table className="srt dt__table cq-t dt--hug" data-code="RS-23-3-list" style={{"--srt-cols": "auto auto auto auto auto"}} data-mc="">
                                <caption className="sr-only">{"Channel sync log"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">
                                      <input className="srt-i srt-a0" type="radio" name="strs231" id="strs231-0a" aria-label="Sort by Time, lowest or A first" />
                                      <input className="srt-i srt-d0" type="radio" name="strs231" id="strs231-0d" aria-label="Sort by Time, highest or Z first" />
                                      <label className="srt-l srt-l--a" htmlFor="strs231-0a">{"Time"}</label>
                                      <label className="srt-l srt-l--d" htmlFor="strs231-0d" aria-hidden="true">{"Time"}</label>
                                    </th>
                                    <th scope="col">
                                      <input className="srt-i srt-a1" type="radio" name="strs231" id="strs231-1a" aria-label="Sort by Channel, lowest or A first" />
                                      <input className="srt-i srt-d1" type="radio" name="strs231" id="strs231-1d" aria-label="Sort by Channel, highest or Z first" />
                                      <label className="srt-l srt-l--a" htmlFor="strs231-1a">{"Channel"}</label>
                                      <label className="srt-l srt-l--d" htmlFor="strs231-1d" aria-hidden="true">{"Channel"}</label>
                                    </th>
                                    <th scope="col">
                                      <input className="srt-i srt-a2" type="radio" name="strs231" id="strs231-2a" aria-label="Sort by What was sent, lowest or A first" />
                                      <input className="srt-i srt-d2" type="radio" name="strs231" id="strs231-2d" aria-label="Sort by What was sent, highest or Z first" />
                                      <label className="srt-l srt-l--a" htmlFor="strs231-2a">{"What was sent"}</label>
                                      <label className="srt-l srt-l--d" htmlFor="strs231-2d" aria-hidden="true">{"What was sent"}</label>
                                    </th>
                                    <th scope="col" className="dt__th--right">
                                      <input className="srt-i srt-a3" type="radio" name="strs231" id="strs231-3a" aria-label="Sort by Records, lowest or A first" />
                                      <input className="srt-i srt-d3" type="radio" name="strs231" id="strs231-3d" aria-label="Sort by Records, highest or Z first" />
                                      <label className="srt-l srt-l--a" htmlFor="strs231-3a">{"Records"}</label>
                                      <label className="srt-l srt-l--d" htmlFor="strs231-3d" aria-hidden="true">{"Records"}</label>
                                    </th>
                                    <th scope="col">
                                      <input className="srt-i srt-a4" type="radio" name="strs231" id="strs231-4a" aria-label="Sort by Result, lowest or A first" />
                                      <input className="srt-i srt-d4" type="radio" name="strs231" id="strs231-4d" aria-label="Sort by Result, highest or Z first" />
                                      <label className="srt-l srt-l--a" htmlFor="strs231-4a">{"Result"}</label>
                                      <label className="srt-l srt-l--d" htmlFor="strs231-4d" aria-hidden="true">{"Result"}</label>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr style={{"--k0": "2", "--k1": "1", "--k2": "2", "--k3": "4", "--k4": "3"}}>
                                    <td className="dt__td nw" data-label="Time" data-w2="" data-t="">{"Today 06:00"}</td>
                                    <td className="dt__td nw" data-label="Channel" data-w2="">
                                      <div className="cq-id">
                                        <span className="cq-mono" style={{"--h": "8"}} aria-hidden="true">{"Ag"}</span>
                                        <span>
                                          <strong>{"Agoda"}</strong>
                                        </span>
                                      </div>
                                    </td>
                                    <td className="dt__td" data-label="What was sent">
                                      <span className="cq-kind">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#tag" />
                                        </svg>
                                        {"Rates"}
                                      </span>
                                      <small className="cq-muted">{" 22 Oct – 22 Oct 2027"}</small>
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Records" data-w2="">{"2,896"}</td>
                                    <td className="dt__td" data-label="Result" data-w2="" data-s="">
                                      <span className="pill pill--tentative">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#alert" />
                                        </svg>
                                        {"Partial"}
                                      </span>
                                      {" "}
                                      <a className="btn" href="#flow-done">{"Retry"}</a>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "1", "--k1": "5", "--k2": "1", "--k3": "1", "--k4": "2"}}>
                                    <td className="dt__td nw" data-label="Time" data-w2="" data-t="">{"21 Oct 07:00"}</td>
                                    <td className="dt__td nw" data-label="Channel" data-w2="">
                                      <div className="cq-id">
                                        <span className="cq-mono" style={{"--h": "44"}} aria-hidden="true">{"Ex"}</span>
                                        <span>
                                          <strong>{"Expedia"}</strong>
                                        </span>
                                      </div>
                                    </td>
                                    <td className="dt__td" data-label="What was sent">
                                      <span className="cq-kind">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#bed" />
                                        </svg>
                                        {"Availability"}
                                      </span>
                                      <small className="cq-muted">{" 22 Oct – 22 Oct 2027"}</small>
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Records" data-w2="">{"0"}</td>
                                    <td className="dt__td" data-label="Result" data-w2="" data-s="">
                                      <span className="pill pill--cancelled">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#x-circle" />
                                        </svg>
                                        {"Failed"}
                                      </span>
                                      {" "}
                                      <a className="btn" href="#flow-done">{"Retry"}</a>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "2", "--k1": "2", "--k2": "2", "--k3": "5", "--k4": "1"}}>
                                    <td className="dt__td nw" data-label="Time" data-w2="" data-t="">{"Today 06:00"}</td>
                                    <td className="dt__td" data-label="Channel" data-w2="">
                                      <div className="cq-id">
                                        <span className="cq-mono" style={{"--h": "152"}} aria-hidden="true">{"AP"}</span>
                                        <span>
                                          <strong>{"Aviv mobile app (CRS)"}</strong>
                                        </span>
                                      </div>
                                    </td>
                                    <td className="dt__td" data-label="What was sent">
                                      <span className="cq-kind">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#tag" />
                                        </svg>
                                        {"Rates"}
                                      </span>
                                      <small className="cq-muted">{" 22 Oct – 22 Oct 2027"}</small>
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Records" data-w2="">{"2,920"}</td>
                                    <td className="dt__td" data-label="Result" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Acknowledged"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "2", "--k1": "2", "--k2": "1", "--k3": "3", "--k4": "1"}}>
                                    <td className="dt__td nw" data-label="Time" data-w2="" data-t="">{"Today 06:00"}</td>
                                    <td className="dt__td" data-label="Channel" data-w2="">
                                      <div className="cq-id">
                                        <span className="cq-mono" style={{"--h": "152"}} aria-hidden="true">{"AP"}</span>
                                        <span>
                                          <strong>{"Aviv mobile app (CRS)"}</strong>
                                        </span>
                                      </div>
                                    </td>
                                    <td className="dt__td" data-label="What was sent">
                                      <span className="cq-kind">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#bed" />
                                        </svg>
                                        {"Availability"}
                                      </span>
                                      <small className="cq-muted">{" 22 Oct – 22 Oct 2027"}</small>
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Records" data-w2="">{"1,460"}</td>
                                    <td className="dt__td" data-label="Result" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Acknowledged"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "2", "--k1": "2", "--k2": "3", "--k3": "2", "--k4": "1"}}>
                                    <td className="dt__td nw" data-label="Time" data-w2="" data-t="">{"Today 06:00"}</td>
                                    <td className="dt__td" data-label="Channel" data-w2="">
                                      <div className="cq-id">
                                        <span className="cq-mono" style={{"--h": "152"}} aria-hidden="true">{"AP"}</span>
                                        <span>
                                          <strong>{"Aviv mobile app (CRS)"}</strong>
                                        </span>
                                      </div>
                                    </td>
                                    <td className="dt__td" data-label="What was sent">
                                      <span className="cq-kind">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#lock" />
                                        </svg>
                                        {"Restrictions"}
                                      </span>
                                      <small className="cq-muted">{" 22 Oct – 22 Oct 2027"}</small>
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Records" data-w2="">{"5"}</td>
                                    <td className="dt__td" data-label="Result" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Acknowledged"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "2", "--k1": "3", "--k2": "2", "--k3": "5", "--k4": "1"}}>
                                    <td className="dt__td nw" data-label="Time" data-w2="" data-t="">{"Today 06:00"}</td>
                                    <td className="dt__td" data-label="Channel">
                                      <div className="cq-id">
                                        <span className="cq-mono" style={{"--h": "172"}} aria-hidden="true">{"AW"}</span>
                                        <span>
                                          <strong>{"Aviv website booking engine"}</strong>
                                        </span>
                                      </div>
                                    </td>
                                    <td className="dt__td" data-label="What was sent">
                                      <span className="cq-kind">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#tag" />
                                        </svg>
                                        {"Rates"}
                                      </span>
                                      <small className="cq-muted">{" 22 Oct – 22 Oct 2027"}</small>
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Records" data-w2="">{"2,920"}</td>
                                    <td className="dt__td" data-label="Result" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Acknowledged"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "2", "--k1": "3", "--k2": "1", "--k3": "3", "--k4": "1"}}>
                                    <td className="dt__td nw" data-label="Time" data-w2="" data-t="">{"Today 06:00"}</td>
                                    <td className="dt__td" data-label="Channel">
                                      <div className="cq-id">
                                        <span className="cq-mono" style={{"--h": "172"}} aria-hidden="true">{"AW"}</span>
                                        <span>
                                          <strong>{"Aviv website booking engine"}</strong>
                                        </span>
                                      </div>
                                    </td>
                                    <td className="dt__td" data-label="What was sent">
                                      <span className="cq-kind">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#bed" />
                                        </svg>
                                        {"Availability"}
                                      </span>
                                      <small className="cq-muted">{" 22 Oct – 22 Oct 2027"}</small>
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Records" data-w2="">{"1,460"}</td>
                                    <td className="dt__td" data-label="Result" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Acknowledged"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "2", "--k1": "3", "--k2": "3", "--k3": "2", "--k4": "1"}}>
                                    <td className="dt__td nw" data-label="Time" data-w2="" data-t="">{"Today 06:00"}</td>
                                    <td className="dt__td" data-label="Channel">
                                      <div className="cq-id">
                                        <span className="cq-mono" style={{"--h": "172"}} aria-hidden="true">{"AW"}</span>
                                        <span>
                                          <strong>{"Aviv website booking engine"}</strong>
                                        </span>
                                      </div>
                                    </td>
                                    <td className="dt__td" data-label="What was sent">
                                      <span className="cq-kind">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#lock" />
                                        </svg>
                                        {"Restrictions"}
                                      </span>
                                      <small className="cq-muted">{" 22 Oct – 22 Oct 2027"}</small>
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Records" data-w2="">{"5"}</td>
                                    <td className="dt__td" data-label="Result" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Acknowledged"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "2", "--k1": "4", "--k2": "2", "--k3": "5", "--k4": "1"}}>
                                    <td className="dt__td nw" data-label="Time" data-w2="" data-t="">{"Today 06:00"}</td>
                                    <td className="dt__td nw" data-label="Channel" data-w2="">
                                      <div className="cq-id">
                                        <span className="cq-mono" style={{"--h": "222"}} aria-hidden="true">{"B."}</span>
                                        <span>
                                          <strong>{"Booking.com"}</strong>
                                        </span>
                                      </div>
                                    </td>
                                    <td className="dt__td" data-label="What was sent">
                                      <span className="cq-kind">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#tag" />
                                        </svg>
                                        {"Rates"}
                                      </span>
                                      <small className="cq-muted">{" 22 Oct – 22 Oct 2027"}</small>
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Records" data-w2="">{"2,920"}</td>
                                    <td className="dt__td" data-label="Result" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Acknowledged"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "2", "--k1": "4", "--k2": "1", "--k3": "3", "--k4": "1"}}>
                                    <td className="dt__td nw" data-label="Time" data-w2="" data-t="">{"Today 06:00"}</td>
                                    <td className="dt__td nw" data-label="Channel" data-w2="">
                                      <div className="cq-id">
                                        <span className="cq-mono" style={{"--h": "222"}} aria-hidden="true">{"B."}</span>
                                        <span>
                                          <strong>{"Booking.com"}</strong>
                                        </span>
                                      </div>
                                    </td>
                                    <td className="dt__td" data-label="What was sent">
                                      <span className="cq-kind">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#bed" />
                                        </svg>
                                        {"Availability"}
                                      </span>
                                      <small className="cq-muted">{" 22 Oct – 22 Oct 2027"}</small>
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Records" data-w2="">{"1,460"}</td>
                                    <td className="dt__td" data-label="Result" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Acknowledged"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "2", "--k1": "4", "--k2": "3", "--k3": "2", "--k4": "1"}}>
                                    <td className="dt__td nw" data-label="Time" data-w2="" data-t="">{"Today 06:00"}</td>
                                    <td className="dt__td nw" data-label="Channel" data-w2="">
                                      <div className="cq-id">
                                        <span className="cq-mono" style={{"--h": "222"}} aria-hidden="true">{"B."}</span>
                                        <span>
                                          <strong>{"Booking.com"}</strong>
                                        </span>
                                      </div>
                                    </td>
                                    <td className="dt__td" data-label="What was sent">
                                      <span className="cq-kind">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#lock" />
                                        </svg>
                                        {"Restrictions"}
                                      </span>
                                      <small className="cq-muted">{" 22 Oct – 22 Oct 2027"}</small>
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Records" data-w2="">{"5"}</td>
                                    <td className="dt__td" data-label="Result" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Acknowledged"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "2", "--k1": "1", "--k2": "1", "--k3": "3", "--k4": "1"}}>
                                    <td className="dt__td nw" data-label="Time" data-w2="" data-t="">{"Today 06:00"}</td>
                                    <td className="dt__td nw" data-label="Channel" data-w2="">
                                      <div className="cq-id">
                                        <span className="cq-mono" style={{"--h": "8"}} aria-hidden="true">{"Ag"}</span>
                                        <span>
                                          <strong>{"Agoda"}</strong>
                                        </span>
                                      </div>
                                    </td>
                                    <td className="dt__td" data-label="What was sent">
                                      <span className="cq-kind">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#bed" />
                                        </svg>
                                        {"Availability"}
                                      </span>
                                      <small className="cq-muted">{" 22 Oct – 22 Oct 2027"}</small>
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Records" data-w2="">{"1,460"}</td>
                                    <td className="dt__td" data-label="Result" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Acknowledged"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "2", "--k1": "1", "--k2": "3", "--k3": "2", "--k4": "1"}}>
                                    <td className="dt__td nw" data-label="Time" data-w2="" data-t="">{"Today 06:00"}</td>
                                    <td className="dt__td nw" data-label="Channel" data-w2="">
                                      <div className="cq-id">
                                        <span className="cq-mono" style={{"--h": "8"}} aria-hidden="true">{"Ag"}</span>
                                        <span>
                                          <strong>{"Agoda"}</strong>
                                        </span>
                                      </div>
                                    </td>
                                    <td className="dt__td" data-label="What was sent">
                                      <span className="cq-kind">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#lock" />
                                        </svg>
                                        {"Restrictions"}
                                      </span>
                                      <small className="cq-muted">{" 22 Oct – 22 Oct 2027"}</small>
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Records" data-w2="">{"5"}</td>
                                    <td className="dt__td" data-label="Result" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Acknowledged"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "2", "--k1": "5", "--k2": "2", "--k3": "5", "--k4": "1"}}>
                                    <td className="dt__td nw" data-label="Time" data-w2="" data-t="">{"Today 06:00"}</td>
                                    <td className="dt__td nw" data-label="Channel" data-w2="">
                                      <div className="cq-id">
                                        <span className="cq-mono" style={{"--h": "44"}} aria-hidden="true">{"Ex"}</span>
                                        <span>
                                          <strong>{"Expedia"}</strong>
                                        </span>
                                      </div>
                                    </td>
                                    <td className="dt__td" data-label="What was sent">
                                      <span className="cq-kind">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#tag" />
                                        </svg>
                                        {"Rates"}
                                      </span>
                                      <small className="cq-muted">{" 22 Oct – 22 Oct 2027"}</small>
                                    </td>
                                    <td className="dt__td dt__td--right num nw" data-label="Records" data-w2="">{"2,920"}</td>
                                    <td className="dt__td" data-label="Result" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Acknowledged"}
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
                                <input className="pg-in" type="radio" name="pg2r20" id="pg2r20p1" defaultChecked={true} />
                                <label className="pg-n" htmlFor="pg2r20p1" aria-label="Page 1">{"1"}</label>
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
                                <input className="pg-in" type="radio" name="pg2r25" id="pg2r25p1" defaultChecked={true} />
                                <label className="pg-n" htmlFor="pg2r25p1" aria-label="Page 1">{"1"}</label>
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
                                <input className="pg-in" type="radio" name="pg2r30" id="pg2r30p1" defaultChecked={true} />
                                <label className="pg-n" htmlFor="pg2r30p1" aria-label="Page 1">{"1"}</label>
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
                        <section className="stabs__panel" data-code="RS-23-4" aria-label="Rate parity">
                          <div className="cq-strip">
                            <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            <p>
                              <strong>{"16 of 16 rates match"}</strong>
                              {" for Sat 24 Oct on rate plan BAR-CP. Channel rates are simulated until the channel manager is connected; differences will show here in colour."}
                            </p>
                          </div>
                          <div className="pgw">
                            <div className="s-scroll">
                              <table className="srt dt__table cq-t dt--hug" data-code="RS-23-4-list" style={{"--srt-cols": "auto auto auto auto auto"}} data-mc="">
                                <caption className="sr-only">{"Rate parity – BAR-CP, Sat 24 Oct"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">
                                      <input className="srt-i srt-a0" type="radio" name="strs232" id="strs232-0a" aria-label="Sort by Channel, lowest or A first" />
                                      <input className="srt-i srt-d0" type="radio" name="strs232" id="strs232-0d" aria-label="Sort by Channel, highest or Z first" />
                                      <label className="srt-l srt-l--a" htmlFor="strs232-0a">{"Channel"}</label>
                                      <label className="srt-l srt-l--d" htmlFor="strs232-0d" aria-hidden="true">{"Channel"}</label>
                                    </th>
                                    <th scope="col">
                                      <input className="srt-i srt-a1" type="radio" name="strs232" id="strs232-1a" aria-label="Sort by Room type, lowest or A first" />
                                      <input className="srt-i srt-d1" type="radio" name="strs232" id="strs232-1d" aria-label="Sort by Room type, highest or Z first" />
                                      <label className="srt-l srt-l--a" htmlFor="strs232-1a">{"Room type"}</label>
                                      <label className="srt-l srt-l--d" htmlFor="strs232-1d" aria-hidden="true">{"Room type"}</label>
                                    </th>
                                    <th scope="col" className="dt__th--right">
                                      <input className="srt-i srt-a2" type="radio" name="strs232" id="strs232-2a" aria-label="Sort by Hotel rate, lowest or A first" />
                                      <input className="srt-i srt-d2" type="radio" name="strs232" id="strs232-2d" aria-label="Sort by Hotel rate, highest or Z first" />
                                      <label className="srt-l srt-l--a" htmlFor="strs232-2a">{"Hotel rate"}</label>
                                      <label className="srt-l srt-l--d" htmlFor="strs232-2d" aria-hidden="true">{"Hotel rate"}</label>
                                    </th>
                                    <th scope="col" className="dt__th--right">
                                      <input className="srt-i srt-a3" type="radio" name="strs232" id="strs232-3a" aria-label="Sort by Channel rate, lowest or A first" />
                                      <input className="srt-i srt-d3" type="radio" name="strs232" id="strs232-3d" aria-label="Sort by Channel rate, highest or Z first" />
                                      <label className="srt-l srt-l--a" htmlFor="strs232-3a">{"Channel rate"}</label>
                                      <label className="srt-l srt-l--d" htmlFor="strs232-3d" aria-hidden="true">{"Channel rate"}</label>
                                    </th>
                                    <th scope="col">{"Difference"}</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr style={{"--k0": "2", "--k1": "1", "--k2": "1", "--k3": "1"}}>
                                    <td className="dt__td" data-label="Channel" data-w2="" data-t="">
                                      <div className="cq-id">
                                        <span className="cq-mono" style={{"--h": "152"}} aria-hidden="true">{"AP"}</span>
                                        <span>
                                          <strong>{"Aviv mobile app (CRS)"}</strong>
                                        </span>
                                      </div>
                                    </td>
                                    <td className="dt__td nw" data-label="Room type" data-w2="">{"Garden Deluxe Room"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Hotel rate" data-w2="">{"₹8,799"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Channel rate" data-w2="">{"₹8,799"}</td>
                                    <td className="dt__td" data-label="Difference" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Match"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "2", "--k1": "2", "--k2": "2", "--k3": "2"}}>
                                    <td className="dt__td" data-label="Channel" data-w2="" data-t="">
                                      <div className="cq-id">
                                        <span className="cq-mono" style={{"--h": "152"}} aria-hidden="true">{"AP"}</span>
                                        <span>
                                          <strong>{"Aviv mobile app (CRS)"}</strong>
                                        </span>
                                      </div>
                                    </td>
                                    <td className="dt__td nw" data-label="Room type" data-w2="">{"Pool Deluxe Room"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Hotel rate" data-w2="">{"₹9,299"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Channel rate" data-w2="">{"₹9,299"}</td>
                                    <td className="dt__td" data-label="Difference" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Match"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "3", "--k1": "1", "--k2": "1", "--k3": "1"}}>
                                    <td className="dt__td" data-label="Channel" data-w="" data-t="">
                                      <div className="cq-id">
                                        <span className="cq-mono" style={{"--h": "172"}} aria-hidden="true">{"AW"}</span>
                                        <span>
                                          <strong>{"Aviv website booking engine"}</strong>
                                        </span>
                                      </div>
                                    </td>
                                    <td className="dt__td nw" data-label="Room type" data-w2="">{"Garden Deluxe Room"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Hotel rate" data-w2="">{"₹8,799"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Channel rate" data-w2="">{"₹8,799"}</td>
                                    <td className="dt__td" data-label="Difference" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Match"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "3", "--k1": "2", "--k2": "2", "--k3": "2"}}>
                                    <td className="dt__td" data-label="Channel" data-w="" data-t="">
                                      <div className="cq-id">
                                        <span className="cq-mono" style={{"--h": "172"}} aria-hidden="true">{"AW"}</span>
                                        <span>
                                          <strong>{"Aviv website booking engine"}</strong>
                                        </span>
                                      </div>
                                    </td>
                                    <td className="dt__td nw" data-label="Room type" data-w2="">{"Pool Deluxe Room"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Hotel rate" data-w2="">{"₹9,299"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Channel rate" data-w2="">{"₹9,299"}</td>
                                    <td className="dt__td" data-label="Difference" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Match"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "4", "--k1": "1", "--k2": "1", "--k3": "1"}}>
                                    <td className="dt__td nw" data-label="Channel" data-w2="" data-t="">
                                      <div className="cq-id">
                                        <span className="cq-mono" style={{"--h": "222"}} aria-hidden="true">{"B."}</span>
                                        <span>
                                          <strong>{"Booking.com"}</strong>
                                        </span>
                                      </div>
                                    </td>
                                    <td className="dt__td nw" data-label="Room type" data-w2="">{"Garden Deluxe Room"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Hotel rate" data-w2="">{"₹8,799"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Channel rate" data-w2="">{"₹8,799"}</td>
                                    <td className="dt__td" data-label="Difference" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Match"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "4", "--k1": "2", "--k2": "2", "--k3": "2"}}>
                                    <td className="dt__td nw" data-label="Channel" data-w2="" data-t="">
                                      <div className="cq-id">
                                        <span className="cq-mono" style={{"--h": "222"}} aria-hidden="true">{"B."}</span>
                                        <span>
                                          <strong>{"Booking.com"}</strong>
                                        </span>
                                      </div>
                                    </td>
                                    <td className="dt__td nw" data-label="Room type" data-w2="">{"Pool Deluxe Room"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Hotel rate" data-w2="">{"₹9,299"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Channel rate" data-w2="">{"₹9,299"}</td>
                                    <td className="dt__td" data-label="Difference" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Match"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "1", "--k1": "1", "--k2": "1", "--k3": "1"}}>
                                    <td className="dt__td nw" data-label="Channel" data-w2="" data-t="">
                                      <div className="cq-id">
                                        <span className="cq-mono" style={{"--h": "8"}} aria-hidden="true">{"Ag"}</span>
                                        <span>
                                          <strong>{"Agoda"}</strong>
                                        </span>
                                      </div>
                                    </td>
                                    <td className="dt__td nw" data-label="Room type" data-w2="">{"Garden Deluxe Room"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Hotel rate" data-w2="">{"₹8,799"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Channel rate" data-w2="">{"₹8,799"}</td>
                                    <td className="dt__td" data-label="Difference" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Match"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "1", "--k1": "2", "--k2": "2", "--k3": "2"}}>
                                    <td className="dt__td nw" data-label="Channel" data-w2="" data-t="">
                                      <div className="cq-id">
                                        <span className="cq-mono" style={{"--h": "8"}} aria-hidden="true">{"Ag"}</span>
                                        <span>
                                          <strong>{"Agoda"}</strong>
                                        </span>
                                      </div>
                                    </td>
                                    <td className="dt__td nw" data-label="Room type" data-w2="">{"Pool Deluxe Room"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Hotel rate" data-w2="">{"₹9,299"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Channel rate" data-w2="">{"₹9,299"}</td>
                                    <td className="dt__td" data-label="Difference" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Match"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "6", "--k1": "1", "--k2": "1", "--k3": "1"}}>
                                    <td className="dt__td nw" data-label="Channel" data-w2="" data-t="">
                                      <div className="cq-id">
                                        <span className="cq-mono" style={{"--h": "44"}} aria-hidden="true">{"Ex"}</span>
                                        <span>
                                          <strong>{"Expedia"}</strong>
                                        </span>
                                      </div>
                                    </td>
                                    <td className="dt__td nw" data-label="Room type" data-w2="">{"Garden Deluxe Room"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Hotel rate" data-w2="">{"₹8,799"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Channel rate" data-w2="">{"₹8,799"}</td>
                                    <td className="dt__td" data-label="Difference" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Match"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "6", "--k1": "2", "--k2": "2", "--k3": "2"}}>
                                    <td className="dt__td nw" data-label="Channel" data-w2="" data-t="">
                                      <div className="cq-id">
                                        <span className="cq-mono" style={{"--h": "44"}} aria-hidden="true">{"Ex"}</span>
                                        <span>
                                          <strong>{"Expedia"}</strong>
                                        </span>
                                      </div>
                                    </td>
                                    <td className="dt__td nw" data-label="Room type" data-w2="">{"Pool Deluxe Room"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Hotel rate" data-w2="">{"₹9,299"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Channel rate" data-w2="">{"₹9,299"}</td>
                                    <td className="dt__td" data-label="Difference" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Match"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "7", "--k1": "1", "--k2": "1", "--k3": "1"}}>
                                    <td className="dt__td" data-label="Channel" data-w2="" data-t="">
                                      <div className="cq-id">
                                        <span className="cq-mono" style={{"--h": "350"}} aria-hidden="true">{"MM"}</span>
                                        <span>
                                          <strong>{"MakeMyTrip / Goibibo"}</strong>
                                        </span>
                                      </div>
                                    </td>
                                    <td className="dt__td nw" data-label="Room type" data-w2="">{"Garden Deluxe Room"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Hotel rate" data-w2="">{"₹8,799"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Channel rate" data-w2="">{"₹8,799"}</td>
                                    <td className="dt__td" data-label="Difference" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Match"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "7", "--k1": "2", "--k2": "2", "--k3": "2"}}>
                                    <td className="dt__td" data-label="Channel" data-w2="" data-t="">
                                      <div className="cq-id">
                                        <span className="cq-mono" style={{"--h": "350"}} aria-hidden="true">{"MM"}</span>
                                        <span>
                                          <strong>{"MakeMyTrip / Goibibo"}</strong>
                                        </span>
                                      </div>
                                    </td>
                                    <td className="dt__td nw" data-label="Room type" data-w2="">{"Pool Deluxe Room"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Hotel rate" data-w2="">{"₹9,299"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Channel rate" data-w2="">{"₹9,299"}</td>
                                    <td className="dt__td" data-label="Difference" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Match"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "5", "--k1": "1", "--k2": "1", "--k3": "1"}}>
                                    <td className="dt__td nw" data-label="Channel" data-w2="" data-t="">
                                      <div className="cq-id">
                                        <span className="cq-mono" style={{"--h": "28"}} aria-hidden="true">{"EM"}</span>
                                        <span>
                                          <strong>{"EaseMyTrip"}</strong>
                                        </span>
                                      </div>
                                    </td>
                                    <td className="dt__td nw" data-label="Room type" data-w2="">{"Garden Deluxe Room"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Hotel rate" data-w2="">{"₹8,799"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Channel rate" data-w2="">{"₹8,799"}</td>
                                    <td className="dt__td" data-label="Difference" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Match"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "5", "--k1": "2", "--k2": "2", "--k3": "2"}}>
                                    <td className="dt__td nw" data-label="Channel" data-w2="" data-t="">
                                      <div className="cq-id">
                                        <span className="cq-mono" style={{"--h": "28"}} aria-hidden="true">{"EM"}</span>
                                        <span>
                                          <strong>{"EaseMyTrip"}</strong>
                                        </span>
                                      </div>
                                    </td>
                                    <td className="dt__td nw" data-label="Room type" data-w2="">{"Pool Deluxe Room"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Hotel rate" data-w2="">{"₹9,299"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Channel rate" data-w2="">{"₹9,299"}</td>
                                    <td className="dt__td" data-label="Difference" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Match"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "8", "--k1": "1", "--k2": "1", "--k3": "1"}}>
                                    <td className="dt__td nw" data-label="Channel" data-w2="" data-t="">
                                      <div className="cq-id">
                                        <span className="cq-mono" style={{"--h": "200"}} aria-hidden="true">{"Tc"}</span>
                                        <span>
                                          <strong>{"Trip.com"}</strong>
                                        </span>
                                      </div>
                                    </td>
                                    <td className="dt__td nw" data-label="Room type" data-w2="">{"Garden Deluxe Room"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Hotel rate" data-w2="">{"₹8,799"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Channel rate" data-w2="">{"₹8,799"}</td>
                                    <td className="dt__td" data-label="Difference" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Match"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr style={{"--k0": "8", "--k1": "2", "--k2": "2", "--k3": "2"}}>
                                    <td className="dt__td nw" data-label="Channel" data-w2="" data-t="">
                                      <div className="cq-id">
                                        <span className="cq-mono" style={{"--h": "200"}} aria-hidden="true">{"Tc"}</span>
                                        <span>
                                          <strong>{"Trip.com"}</strong>
                                        </span>
                                      </div>
                                    </td>
                                    <td className="dt__td nw" data-label="Room type" data-w2="">{"Pool Deluxe Room"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Hotel rate" data-w2="">{"₹9,299"}</td>
                                    <td className="dt__td dt__td--right num nw" data-label="Channel rate" data-w2="">{"₹9,299"}</td>
                                    <td className="dt__td" data-label="Difference" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Match"}
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
                                <input className="pg-in" type="radio" name="pg3r10" id="pg3r10p1" defaultChecked={true} />
                                <label className="pg-n" htmlFor="pg3r10p1" aria-label="Page 1">{"1"}</label>
                                <input className="pg-in" type="radio" name="pg3r10" id="pg3r10p2" />
                                <label className="pg-n" htmlFor="pg3r10p2" aria-label="Page 2">{"2"}</label>
                                <span className="pg-info">
                                  <span>
                                    {"Showing "}
                                    <b>{"1–10"}</b>
                                    {" of 16"}
                                  </span>
                                  <span>
                                    {"Showing "}
                                    <b>{"11–16"}</b>
                                    {" of 16"}
                                  </span>
                                </span>
                                <span className="pg-prev">
                                  <span className="pg-arr is-off">
                                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                      <use href="/assets/icons/sprite.svg#chevron-left" />
                                    </svg>
                                  </span>
                                  <label className="pg-arr" htmlFor="pg3r10p1" title="Previous page">
                                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                      <use href="/assets/icons/sprite.svg#chevron-left" />
                                    </svg>
                                  </label>
                                </span>
                                <span className="pg-next">
                                  <label className="pg-arr" htmlFor="pg3r10p2" title="Next page">
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
                                <input className="pg-in" type="radio" name="pg3r15" id="pg3r15p1" defaultChecked={true} />
                                <label className="pg-n" htmlFor="pg3r15p1" aria-label="Page 1">{"1"}</label>
                                <input className="pg-in" type="radio" name="pg3r15" id="pg3r15p2" />
                                <label className="pg-n" htmlFor="pg3r15p2" aria-label="Page 2">{"2"}</label>
                                <span className="pg-info">
                                  <span>
                                    {"Showing "}
                                    <b>{"1–15"}</b>
                                    {" of 16"}
                                  </span>
                                  <span>
                                    {"Showing "}
                                    <b>{"16–16"}</b>
                                    {" of 16"}
                                  </span>
                                </span>
                                <span className="pg-prev">
                                  <span className="pg-arr is-off">
                                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                      <use href="/assets/icons/sprite.svg#chevron-left" />
                                    </svg>
                                  </span>
                                  <label className="pg-arr" htmlFor="pg3r15p1" title="Previous page">
                                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                      <use href="/assets/icons/sprite.svg#chevron-left" />
                                    </svg>
                                  </label>
                                </span>
                                <span className="pg-next">
                                  <label className="pg-arr" htmlFor="pg3r15p2" title="Next page">
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
                                <input className="pg-in" type="radio" name="pg3r20" id="pg3r20p1" defaultChecked={true} />
                                <label className="pg-n" htmlFor="pg3r20p1" aria-label="Page 1">{"1"}</label>
                                <span className="pg-info">
                                  <span>
                                    {"Showing "}
                                    <b>{"1–16"}</b>
                                    {" of 16"}
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
                                    <b>{"1–16"}</b>
                                    {" of 16"}
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
                                    <b>{"1–16"}</b>
                                    {" of 16"}
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
                        <section className="stabs__panel" data-code="RS-23-5" aria-label="Channel rates">
                          <div className="chr-card">
                            <div className="chr-head">
                              <div>
                                <h2 className="s-card-title">{"Channel manager rate and the rate on each OTA"}</h2>
                                <p className="field__hint">{"Tonight's rates as sent. Change the channel manager rate and every OTA with auto-update on follows its rule straight away (rules: Setup → Channel Mapping, RSS-16)."}</p>
                              </div>
                              <div className="chr-acts">
                                <Link className="btn" data-leads-to="RSS-16" to={"/setup/rss-16-channel-mapping"}>
                                  <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#cog" />
                                  </svg>
                                  {"Channel rules"}
                                </Link>
                                <a className="btn btn--primary" href="#RS-23-cmrate">
                                  <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#pencil" />
                                  </svg>
                                  {"Update channel manager rate"}
                                </a>
                              </div>
                            </div>
                            <div className="s-scroll chr-scroll">
                              <p className="field__hint" data-flow="rs23-coll">{"Who collects the payment comes from Sources, Segments & Channels (RSS-15): the OTA collects prepaid and virtual-card bookings; the hotel collects Aviv app and website bookings."}</p>
                              <table className="dt__table dt--hug chr-t" data-nosort="" data-mc="">
                                <caption className="sr-only">{"Channel manager rate and the rate on each channel"}</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">{"Channel"}</th>
                                    <th scope="col">{"Rate rule"}</th>
                                    <th scope="col" className="dt__th--right">{"Commission"}</th>
                                    <th scope="col" className="dt__th--right">{"GDLX"}</th>
                                    <th scope="col" className="dt__th--right">{"PDLX"}</th>
                                    <th scope="col" className="dt__th--right">{"DLXS"}</th>
                                    <th scope="col" className="dt__th--right">{"PRMS"}</th>
                                    <th scope="col" className="dt__th--right">{"Net to hotel · GDLX"}</th>
                                    <th scope="col">{"Auto-update"}</th>
                                    <th scope="col">{"Last push"}</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="chr-master">
                                    <td className="dt__td" data-label="Channel" data-w="" data-t="">
                                      <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                      <b>{"Channel manager rate"}</b>
                                      <span className="arl-mute">{" · master"}</span>
                                    </td>
                                    <td className="dt__td" data-label="Rate rule">{"BAR-CP, double, Thu 22 Oct"}</td>
                                    <td className="dt__td dt__td--right" data-e="">{"–"}</td>
                                    <td className="dt__td dt__td--right num" data-label="GDLX">
                                      <b>{"₹7,999"}</b>
                                    </td>
                                    <td className="dt__td dt__td--right num" data-label="PDLX">
                                      <b>{"₹8,499"}</b>
                                    </td>
                                    <td className="dt__td dt__td--right num" data-label="DLXS" data-m="">
                                      <b>{"₹14,500"}</b>
                                    </td>
                                    <td className="dt__td dt__td--right num" data-label="PRMS" data-m="">
                                      <b>{"₹24,000"}</b>
                                    </td>
                                    <td className="dt__td dt__td--right num" data-e="">{"–"}</td>
                                    <td className="dt__td" data-e="">{"–"}</td>
                                    <td className="dt__td" data-label="Last push" data-m="">{"Changed 09:40 by Arjun Dev"}</td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td" data-label="Channel" data-w2="" data-t="">
                                      <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                      <b>{"Aviv mobile app (CRS)"}</b>
                                    </td>
                                    <td className="dt__td" data-label="Rate rule">{"10 % below – app member price"}</td>
                                    <td className="dt__td dt__td--right" data-label="Commission" data-w2="">{"0 %"}</td>
                                    <td className="dt__td dt__td--right num" data-label="GDLX">{"₹7,199"}</td>
                                    <td className="dt__td dt__td--right num" data-label="PDLX">{"₹7,649"}</td>
                                    <td className="dt__td dt__td--right num" data-label="DLXS" data-m="">{"₹13,050"}</td>
                                    <td className="dt__td dt__td--right num" data-label="PRMS" data-m="">{"₹21,600"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Net to hotel · GDLX" data-w2="">{"₹7,199"}</td>
                                    <td className="dt__td" data-label="Auto-update" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"On"}
                                      </span>
                                    </td>
                                    <td className="dt__td" data-label="Last push" data-w2="" data-m="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Pushed 06:00"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td" data-label="Channel" data-w="" data-t="">
                                      <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                      <b>{"Aviv website booking engine"}</b>
                                    </td>
                                    <td className="dt__td" data-label="Rate rule">{"5 % below – book-direct price"}</td>
                                    <td className="dt__td dt__td--right" data-label="Commission" data-w2="">{"0 %"}</td>
                                    <td className="dt__td dt__td--right num" data-label="GDLX">{"₹7,599"}</td>
                                    <td className="dt__td dt__td--right num" data-label="PDLX">{"₹8,074"}</td>
                                    <td className="dt__td dt__td--right num" data-label="DLXS" data-m="">{"₹13,775"}</td>
                                    <td className="dt__td dt__td--right num" data-label="PRMS" data-m="">{"₹22,800"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Net to hotel · GDLX" data-w2="">{"₹7,599"}</td>
                                    <td className="dt__td" data-label="Auto-update" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"On"}
                                      </span>
                                    </td>
                                    <td className="dt__td" data-label="Last push" data-w2="" data-m="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Pushed 06:00"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td" data-label="Channel" data-w2="" data-t="">
                                      <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                      <b>{"Booking.com"}</b>
                                    </td>
                                    <td className="dt__td" data-label="Rate rule" data-w2="">{"Same as channel manager"}</td>
                                    <td className="dt__td dt__td--right" data-label="Commission" data-w2="">{"15 %"}</td>
                                    <td className="dt__td dt__td--right num" data-label="GDLX">{"₹7,999"}</td>
                                    <td className="dt__td dt__td--right num" data-label="PDLX">{"₹8,499"}</td>
                                    <td className="dt__td dt__td--right num" data-label="DLXS" data-m="">{"₹14,500"}</td>
                                    <td className="dt__td dt__td--right num" data-label="PRMS" data-m="">{"₹24,000"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Net to hotel · GDLX" data-w2="">{"₹6,799"}</td>
                                    <td className="dt__td" data-label="Auto-update" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"On"}
                                      </span>
                                    </td>
                                    <td className="dt__td" data-label="Last push" data-w2="" data-m="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Pushed 09:41"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td" data-label="Channel" data-w2="" data-t="">
                                      <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                      <b>{"Agoda"}</b>
                                    </td>
                                    <td className="dt__td" data-label="Rate rule" data-w2="">{"Same as channel manager"}</td>
                                    <td className="dt__td dt__td--right" data-label="Commission" data-w2="">{"18 %"}</td>
                                    <td className="dt__td dt__td--right num" data-label="GDLX">{"₹7,999"}</td>
                                    <td className="dt__td dt__td--right num" data-label="PDLX">{"₹8,499"}</td>
                                    <td className="dt__td dt__td--right num" data-label="DLXS" data-m="">{"₹14,500"}</td>
                                    <td className="dt__td dt__td--right num" data-label="PRMS" data-m="">{"₹24,000"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Net to hotel · GDLX" data-w2="">{"₹6,559"}</td>
                                    <td className="dt__td" data-label="Auto-update" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"On"}
                                      </span>
                                    </td>
                                    <td className="dt__td" data-label="Last push" data-w2="" data-m="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Pushed 09:41"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td" data-label="Channel" data-w2="" data-t="">
                                      <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                      <b>{"Expedia"}</b>
                                    </td>
                                    <td className="dt__td" data-label="Rate rule" data-w2="">{"2 % above"}</td>
                                    <td className="dt__td dt__td--right" data-label="Commission" data-w2="">{"18 %"}</td>
                                    <td className="dt__td dt__td--right num" data-label="GDLX">{"₹8,159"}</td>
                                    <td className="dt__td dt__td--right num" data-label="PDLX">{"₹8,669"}</td>
                                    <td className="dt__td dt__td--right num" data-label="DLXS" data-m="">{"₹14,790"}</td>
                                    <td className="dt__td dt__td--right num" data-label="PRMS" data-m="">{"₹24,480"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Net to hotel · GDLX" data-w2="">{"₹6,690"}</td>
                                    <td className="dt__td" data-label="Auto-update" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"On"}
                                      </span>
                                    </td>
                                    <td className="dt__td" data-label="Last push" data-w2="" data-m="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Pushed 09:41"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td" data-label="Channel" data-w2="" data-t="">
                                      <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                      <b>{"MakeMyTrip / Goibibo"}</b>
                                    </td>
                                    <td className="dt__td" data-label="Rate rule" data-w2="">{"3 % below – MMT deal"}</td>
                                    <td className="dt__td dt__td--right" data-label="Commission" data-w2="">{"17 %"}</td>
                                    <td className="dt__td dt__td--right num" data-label="GDLX">{"₹7,759"}</td>
                                    <td className="dt__td dt__td--right num" data-label="PDLX">{"₹8,244"}</td>
                                    <td className="dt__td dt__td--right num" data-label="DLXS" data-m="">{"₹14,065"}</td>
                                    <td className="dt__td dt__td--right num" data-label="PRMS" data-m="">{"₹23,280"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Net to hotel · GDLX" data-w2="">{"₹6,439"}</td>
                                    <td className="dt__td" data-label="Auto-update" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"On"}
                                      </span>
                                    </td>
                                    <td className="dt__td" data-label="Last push" data-w2="" data-m="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Pushed 09:41"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td" data-label="Channel" data-w2="" data-t="">
                                      <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                      <b>{"EaseMyTrip"}</b>
                                    </td>
                                    <td className="dt__td" data-label="Rate rule" data-w2="">{"Same as channel manager"}</td>
                                    <td className="dt__td dt__td--right" data-label="Commission" data-w2="">{"15 %"}</td>
                                    <td className="dt__td dt__td--right num" data-label="GDLX">{"₹7,999"}</td>
                                    <td className="dt__td dt__td--right num" data-label="PDLX">{"₹8,499"}</td>
                                    <td className="dt__td dt__td--right num" data-label="DLXS" data-m="">{"₹14,500"}</td>
                                    <td className="dt__td dt__td--right num" data-label="PRMS" data-m="">{"₹24,000"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Net to hotel · GDLX" data-w2="">{"₹6,799"}</td>
                                    <td className="dt__td" data-label="Auto-update" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"On"}
                                      </span>
                                    </td>
                                    <td className="dt__td" data-label="Last push" data-w2="" data-m="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Pushed 09:41"}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="dt__td" data-label="Channel" data-w2="" data-t="">
                                      <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                      <b>{"Trip.com"}</b>
                                    </td>
                                    <td className="dt__td" data-label="Rate rule" data-w2="">{"Same as channel manager"}</td>
                                    <td className="dt__td dt__td--right" data-label="Commission" data-w2="">{"15 %"}</td>
                                    <td className="dt__td dt__td--right num" data-label="GDLX">{"₹7,999"}</td>
                                    <td className="dt__td dt__td--right num" data-label="PDLX">{"₹8,499"}</td>
                                    <td className="dt__td dt__td--right num" data-label="DLXS" data-m="">{"₹14,500"}</td>
                                    <td className="dt__td dt__td--right num" data-label="PRMS" data-m="">{"₹24,000"}</td>
                                    <td className="dt__td dt__td--right num" data-label="Net to hotel · GDLX" data-w2="">{"₹6,799"}</td>
                                    <td className="dt__td" data-label="Auto-update" data-w2="" data-s="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"On"}
                                      </span>
                                    </td>
                                    <td className="dt__td" data-label="Last push" data-w2="" data-m="">
                                      <span className="pill pill--ready">
                                        <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                          <use href="/assets/icons/sprite.svg#check-circle" />
                                        </svg>
                                        {"Pushed 09:42"}
                                      </span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                  <aside className="cq-side" aria-label="Channel health">
                    <section className="cq-card cq-health" data-code="RS-23-health">
                      <header className="cq-card__h">
                        <span className="cq-card__ic">
                          <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#globe" />
                          </svg>
                        </span>
                        <div>
                          <h2 className="cq-card__t">{"Channel health"}</h2>
                          <p className="cq-card__s">{"6 of 8 channels in sync"}</p>
                        </div>
                      </header>
                      <ul className="cq-chs">
                        <li className="cq-ch cq-ch--bad">
                          <span className="cq-mono" style={{"--h": "8"}} aria-hidden="true">{"Ag"}</span>
                          <span className="cq-ch__t">
                            <strong>{"Agoda"}</strong>
                            <small>{"Updated Today 06:00"}</small>
                          </span>
                          <span className="pill pill--cancelled">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#alert" />
                            </svg>
                            {"1 to retry"}
                          </span>
                        </li>
                        <li className="cq-ch cq-ch--bad">
                          <span className="cq-mono" style={{"--h": "44"}} aria-hidden="true">{"Ex"}</span>
                          <span className="cq-ch__t">
                            <strong>{"Expedia"}</strong>
                            <small>{"Updated Today 06:00"}</small>
                          </span>
                          <span className="pill pill--cancelled">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#alert" />
                            </svg>
                            {"1 to retry"}
                          </span>
                        </li>
                        <li className="cq-ch">
                          <span className="cq-mono" style={{"--h": "152"}} aria-hidden="true">{"AP"}</span>
                          <span className="cq-ch__t">
                            <strong>{"Aviv mobile app (CRS)"}</strong>
                            <small>{"Updated Today 06:00"}</small>
                          </span>
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"In sync"}
                          </span>
                        </li>
                        <li className="cq-ch">
                          <span className="cq-mono" style={{"--h": "172"}} aria-hidden="true">{"AW"}</span>
                          <span className="cq-ch__t">
                            <strong>{"Aviv website booking engine"}</strong>
                            <small>{"Updated Today 06:00"}</small>
                          </span>
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"In sync"}
                          </span>
                        </li>
                        <li className="cq-ch">
                          <span className="cq-mono" style={{"--h": "222"}} aria-hidden="true">{"B."}</span>
                          <span className="cq-ch__t">
                            <strong>{"Booking.com"}</strong>
                            <small>{"Updated Today 06:00"}</small>
                          </span>
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"In sync"}
                          </span>
                        </li>
                        <li className="cq-ch">
                          <span className="cq-mono" style={{"--h": "350"}} aria-hidden="true">{"MM"}</span>
                          <span className="cq-ch__t">
                            <strong>{"MakeMyTrip / Goibibo"}</strong>
                            <small>{"Updated Today 06:00"}</small>
                          </span>
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"In sync"}
                          </span>
                        </li>
                        <li className="cq-ch">
                          <span className="cq-mono" style={{"--h": "28"}} aria-hidden="true">{"EM"}</span>
                          <span className="cq-ch__t">
                            <strong>{"EaseMyTrip"}</strong>
                            <small>{"Updated Today 06:00"}</small>
                          </span>
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"In sync"}
                          </span>
                        </li>
                        <li className="cq-ch">
                          <span className="cq-mono" style={{"--h": "200"}} aria-hidden="true">{"Tc"}</span>
                          <span className="cq-ch__t">
                            <strong>{"Trip.com"}</strong>
                            <small>{"Updated Today 06:00"}</small>
                          </span>
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"In sync"}
                          </span>
                        </li>
                      </ul>
                      <footer className="cq-card__f">
                        <Link className="cq-more" data-leads-to="RSS-16" to={"/setup/rss-16-channel-mapping"}>
                          {"Channel mapping"}
                          <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-right" />
                          </svg>
                        </Link>
                      </footer>
                    </section>
                  </aside>
                </div>
                <section className="cq-card cq-rules">
                  <header className="cq-card__h">
                    <span className="cq-card__ic">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#shield-check" />
                      </svg>
                    </span>
                    <div>
                      <h2 className="cq-card__t">{"How the queue works"}</h2>
                      <p className="cq-card__s">{"Three rules the system keeps for you"}</p>
                    </div>
                  </header>
                  <ol className="cq-steps">
                    <li>
                      <span className="cq-steps__n">{"1"}</span>
                      <p>
                        <strong>{"The hotel is the source of truth."}</strong>
                        {" Rooms and rates are set here. After any change made by hand on a booking site, send the current availability again."}
                      </p>
                    </li>
                    <li>
                      <span className="cq-steps__n">{"2"}</span>
                      <p>
                        <strong>{"A repeat booking is safe."}</strong>
                        {" A booking that arrives twice creates one reservation, never two."}
                      </p>
                    </li>
                    <li>
                      <span className="cq-steps__n">{"3"}</span>
                      <p>
                        <strong>{"An early change waits."}</strong>
                        {" A change that arrives before its booking waits here instead of creating a second booking."}
                      </p>
                    </li>
                  </ol>
                </section>
              </div>
              <section className="modal modal--drawer" id="RS-23-D-CMSG-F1" data-code="RS-23-D" role="dialog" aria-modal="true" aria-labelledby="RS-23-D-CMSG-F1-t">
                <a className="modal__backdrop" href="#" aria-label="Close" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RS-23-D-CMSG-F1-t">{"Booking BO-481920377"}</h2>
                      <p className="modal__desc">{"Booking.com · Today 08:48"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="cq-dh">
                      <span className="cq-mono cq-mono--lg" style={{"--h": "222"}} aria-hidden="true">{"B."}</span>
                      <div>
                        <strong className="cq-dh__ref">{"Hannah Brooks"}</strong>
                        <p>
                          {"Booking.com · "}
                          <span className="cq-type cq-type--booking">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#bed" />
                            </svg>
                            {"Booking"}
                          </span>
                        </p>
                      </div>
                      <span className="pill pill--cancelled">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#x-circle" />
                        </svg>
                        {"Failed"}
                      </span>
                    </div>
                    <div className="cq-why">
                      <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#alert" />
                      </svg>
                      <div>
                        <strong>{"Why it stopped"}</strong>
                        <p>{"Room code BOO-STE-PRM with rate code BAR-RO is not mapped to a hotel room type and rate plan."}</p>
                      </div>
                    </div>
                    <dl className="cq-facts">
                      <div>
                        <dt>{"Guest"}</dt>
                        <dd>{"Hannah Brooks"}</dd>
                      </div>
                      <div>
                        <dt>{"Stay"}</dt>
                        <dd>{"9 – 12 Nov"}</dd>
                      </div>
                      <div>
                        <dt>{"Amount"}</dt>
                        <dd>{"₹76,800"}</dd>
                      </div>
                      <div>
                        <dt>{"Received"}</dt>
                        <dd>{"Today 08:48"}</dd>
                      </div>
                      <div>
                        <dt>{"Room code"}</dt>
                        <dd>
                          <code>{"BOO-STE-PRM"}</code>
                        </dd>
                      </div>
                      <div>
                        <dt>{"Rate code"}</dt>
                        <dd>
                          <code>{"BAR-RO"}</code>
                        </dd>
                      </div>
                    </dl>
                    <div className="cq-map">
                      <p className="cq-map__k">{"Suggested mapping"}</p>
                      <div className="cq-map__row">
                        <div>
                          <small>{"Channel sends"}</small>
                          <strong>{"BOO-STE-PRM"}</strong>
                          <span>{"BAR-RO"}</span>
                        </div>
                        <svg className="icon" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#arrow-right" />
                        </svg>
                        <div className="cq-map__to">
                          <small>{"Hotel books"}</small>
                          <strong>{"Premium Suite"}</strong>
                          <span>{"BAR-EP"}</span>
                        </div>
                      </div>
                    </div>
                    <ul className="cq-guar">
                      <li>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#check-circle" />
                        </svg>
                        <span>
                          <strong>{"Message version"}</strong>
                          {" v1 – newer versions are never overwritten by older ones"}
                        </span>
                      </li>
                      <li>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#check-circle" />
                        </svg>
                        <span>
                          <strong>{"Delivered"}</strong>
                          {" once. A repeat delivery returns the same booking"}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#RS-23c-CMSG-F1" data-opens="RS-23c">{"Link to existing…"}</a>
                    <a className="btn" href="#RS-23b-CMSG-F1" data-opens="RS-23b">{"Accept as overbooking…"}</a>
                    <a className="btn btn--primary" href="#RS-23a-CMSG-F1" data-opens="RS-23a">{"Map and reprocess…"}</a>
                  </div>
                </div>
              </section>
              <div className="modal" id="RS-23a-CMSG-F1" data-code="RS-23a" role="dialog" aria-modal="true" aria-labelledby="RS-23a-CMSG-F1-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RS-23a-CMSG-F1-t">{"Map room / rate and reprocess"}</h2>
                      <p className="modal__desc">{"BO-481920377"}</p>
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
                        <label className="field__label" htmlFor="f1867">{"Channel room code"}</label>
                        <input className="field__input" id="f1867" type="text" readOnly={true} defaultValue={"BOO-STE-PRM"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f1868">{"Hotel room type"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f1868" defaultValue={"Premium Suite"}>
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
                      <div className="field">
                        <label className="field__label" htmlFor="f1869">{"Channel rate code"}</label>
                        <input className="field__input" id="f1869" type="text" readOnly={true} defaultValue={"BAR-RO"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f1870">{"Hotel rate plan"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f1870" defaultValue={"BAR-EP"}>
                            <option>{"BAR-CP"}</option>
                            <option>{"BAR-EP"}</option>
                            <option>{"BAR-MAP"}</option>
                            <option>{"BAR-AP"}</option>
                            <option>{"CLUB"}</option>
                            <option>{"ADV15"}</option>
                            <option>{"CORP"}</option>
                            <option>{"AGENT"}</option>
                            <option>{"GROUP"}</option>
                            <option>{"PKG-AYUR"}</option>
                            <option>{"COMP"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="s-note">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#info" />
                      </svg>
                      <span>{"Saved once, later bookings with these codes go through automatically."}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save mapping and retry"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RS-23b-CMSG-F1" data-code="RS-23b" role="dialog" aria-modal="true" aria-labelledby="RS-23b-CMSG-F1-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RS-23b-CMSG-F1-t">{"Accept as overbooking"}</h2>
                      <p className="modal__desc">{"BO-481920377"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-note s-note--warn">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#alert" />
                      </svg>
                      <span>
                        {"This creates the booking even though no room is free. Needs approval from the Front Office Manager – track it in "}
                        <Link data-leads-to="RS-20" to={"/reservation/rs-20-approvals"}>{"Approvals"}</Link>
                        {"."}
                      </span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f1871">{"Reason"}</label>
                      <div className="field__wrap">
                        <select className="field__input field__input--select" id="f1871" defaultValue={"Re-accommodate guest"}>
                          <option>{"Re-accommodate guest"}</option>
                        </select>
                        <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Request approval"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RS-23c-CMSG-F1" data-code="RS-23c" role="dialog" aria-modal="true" aria-labelledby="RS-23c-CMSG-F1-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RS-23c-CMSG-F1-t">{"Link to existing reservation"}</h2>
                      <p className="modal__desc">{"BO-481920377"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <label className="field__label" htmlFor="f1872">{"Booking"}</label>
                      <div className="field__wrap">
                        <select className="field__input field__input--select" id="f1872" defaultValue={"FK-10002 · Jyoti Jatin · 20 – 23 Oct"}>
                          <option>{"FK-10002 · Jyoti Jatin · 20 – 23 Oct"}</option>
                          <option>{"FK-10005 · Kavita Dhruv · 5 – 12 Nov"}</option>
                          <option>{"FK-10006 · Ravi Kabir · 22 – 26 Oct"}</option>
                        </select>
                        <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </div>
                    </div>
                    <div className="s-note">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#info" />
                      </svg>
                      <span>{"The channel reference is added to the booking; no new booking is created."}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Link"}</a>
                  </div>
                </form>
              </div>
              <section className="modal modal--drawer" id="RS-23-D-CMSG-F2" data-code="RS-23-D" role="dialog" aria-modal="true" aria-labelledby="RS-23-D-CMSG-F2-t">
                <a className="modal__backdrop" href="#" aria-label="Close" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RS-23-D-CMSG-F2-t">{"Booking AG-770215964"}</h2>
                      <p className="modal__desc">{"Agoda · 21 Oct 21:14"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="cq-dh">
                      <span className="cq-mono cq-mono--lg" style={{"--h": "8"}} aria-hidden="true">{"Ag"}</span>
                      <div>
                        <strong className="cq-dh__ref">{"Kunal Manav"}</strong>
                        <p>
                          {"Agoda · "}
                          <span className="cq-type cq-type--booking">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#bed" />
                            </svg>
                            {"Booking"}
                          </span>
                        </p>
                      </div>
                      <span className="pill pill--cancelled">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#x-circle" />
                        </svg>
                        {"Failed"}
                      </span>
                    </div>
                    <div className="cq-why">
                      <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#alert" />
                      </svg>
                      <div>
                        <strong>{"Why it stopped"}</strong>
                        <p>{"Rate code PKG-DINNER is not mapped to a hotel rate plan."}</p>
                      </div>
                    </div>
                    <dl className="cq-facts">
                      <div>
                        <dt>{"Guest"}</dt>
                        <dd>{"Kunal Manav"}</dd>
                      </div>
                      <div>
                        <dt>{"Stay"}</dt>
                        <dd>{"31 Oct – 2 Nov"}</dd>
                      </div>
                      <div>
                        <dt>{"Amount"}</dt>
                        <dd>{"₹21,400"}</dd>
                      </div>
                      <div>
                        <dt>{"Received"}</dt>
                        <dd>{"21 Oct 21:14"}</dd>
                      </div>
                      <div>
                        <dt>{"Room code"}</dt>
                        <dd>
                          <code>{"AGO-DLX-POOL"}</code>
                        </dd>
                      </div>
                      <div>
                        <dt>{"Rate code"}</dt>
                        <dd>
                          <code>{"PKG-DINNER"}</code>
                        </dd>
                      </div>
                    </dl>
                    <div className="cq-map">
                      <p className="cq-map__k">{"Suggested mapping"}</p>
                      <div className="cq-map__row">
                        <div>
                          <small>{"Channel sends"}</small>
                          <strong>{"AGO-DLX-POOL"}</strong>
                          <span>{"PKG-DINNER"}</span>
                        </div>
                        <svg className="icon" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#arrow-right" />
                        </svg>
                        <div className="cq-map__to">
                          <small>{"Hotel books"}</small>
                          <strong>{"Pool Deluxe Room"}</strong>
                          <span>{"BAR-MAP"}</span>
                        </div>
                      </div>
                    </div>
                    <ul className="cq-guar">
                      <li>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#check-circle" />
                        </svg>
                        <span>
                          <strong>{"Message version"}</strong>
                          {" v1 – newer versions are never overwritten by older ones"}
                        </span>
                      </li>
                      <li>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#check-circle" />
                        </svg>
                        <span>
                          <strong>{"Delivered"}</strong>
                          {" once. A repeat delivery returns the same booking"}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#RS-23c-CMSG-F2" data-opens="RS-23c">{"Link to existing…"}</a>
                    <a className="btn" href="#RS-23b-CMSG-F2" data-opens="RS-23b">{"Accept as overbooking…"}</a>
                    <a className="btn btn--primary" href="#RS-23a-CMSG-F2" data-opens="RS-23a">{"Map and reprocess…"}</a>
                  </div>
                </div>
              </section>
              <div className="modal" id="RS-23a-CMSG-F2" data-code="RS-23a" role="dialog" aria-modal="true" aria-labelledby="RS-23a-CMSG-F2-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RS-23a-CMSG-F2-t">{"Map room / rate and reprocess"}</h2>
                      <p className="modal__desc">{"AG-770215964"}</p>
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
                        <label className="field__label" htmlFor="f1873">{"Channel room code"}</label>
                        <input className="field__input" id="f1873" type="text" readOnly={true} defaultValue={"AGO-DLX-POOL"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f1874">{"Hotel room type"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f1874" defaultValue={"Pool Deluxe Room"}>
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
                      <div className="field">
                        <label className="field__label" htmlFor="f1875">{"Channel rate code"}</label>
                        <input className="field__input" id="f1875" type="text" readOnly={true} defaultValue={"PKG-DINNER"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f1876">{"Hotel rate plan"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f1876" defaultValue={"BAR-MAP"}>
                            <option>{"BAR-CP"}</option>
                            <option>{"BAR-EP"}</option>
                            <option>{"BAR-MAP"}</option>
                            <option>{"BAR-AP"}</option>
                            <option>{"CLUB"}</option>
                            <option>{"ADV15"}</option>
                            <option>{"CORP"}</option>
                            <option>{"AGENT"}</option>
                            <option>{"GROUP"}</option>
                            <option>{"PKG-AYUR"}</option>
                            <option>{"COMP"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="s-note">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#info" />
                      </svg>
                      <span>{"Saved once, later bookings with these codes go through automatically."}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save mapping and retry"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RS-23b-CMSG-F2" data-code="RS-23b" role="dialog" aria-modal="true" aria-labelledby="RS-23b-CMSG-F2-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RS-23b-CMSG-F2-t">{"Accept as overbooking"}</h2>
                      <p className="modal__desc">{"AG-770215964"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-note s-note--warn">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#alert" />
                      </svg>
                      <span>
                        {"This creates the booking even though no room is free. Needs approval from the Front Office Manager – track it in "}
                        <Link data-leads-to="RS-20" to={"/reservation/rs-20-approvals"}>{"Approvals"}</Link>
                        {"."}
                      </span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f1877">{"Reason"}</label>
                      <div className="field__wrap">
                        <select className="field__input field__input--select" id="f1877" defaultValue={"Re-accommodate guest"}>
                          <option>{"Re-accommodate guest"}</option>
                        </select>
                        <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Request approval"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RS-23c-CMSG-F2" data-code="RS-23c" role="dialog" aria-modal="true" aria-labelledby="RS-23c-CMSG-F2-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RS-23c-CMSG-F2-t">{"Link to existing reservation"}</h2>
                      <p className="modal__desc">{"AG-770215964"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <label className="field__label" htmlFor="f1878">{"Booking"}</label>
                      <div className="field__wrap">
                        <select className="field__input field__input--select" id="f1878" defaultValue={"FK-10002 · Jyoti Jatin · 20 – 23 Oct"}>
                          <option>{"FK-10002 · Jyoti Jatin · 20 – 23 Oct"}</option>
                          <option>{"FK-10005 · Kavita Dhruv · 5 – 12 Nov"}</option>
                          <option>{"FK-10006 · Ravi Kabir · 22 – 26 Oct"}</option>
                        </select>
                        <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </div>
                    </div>
                    <div className="s-note">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#info" />
                      </svg>
                      <span>{"The channel reference is added to the booking; no new booking is created."}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Link"}</a>
                  </div>
                </form>
              </div>
              <section className="modal modal--drawer" id="RS-23-D-CMSG-Q1" data-code="RS-23-D" role="dialog" aria-modal="true" aria-labelledby="RS-23-D-CMSG-Q1-t">
                <a className="modal__backdrop" href="#" aria-label="Close" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RS-23-D-CMSG-Q1-t">{"Modification MM-559103482"}</h2>
                      <p className="modal__desc">{"MakeMyTrip / Goibibo · Today 09:40"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="cq-dh">
                      <span className="cq-mono cq-mono--lg" style={{"--h": "350"}} aria-hidden="true">{"MM"}</span>
                      <div>
                        <strong className="cq-dh__ref">{"Swathi Ranjan"}</strong>
                        <p>
                          {"MakeMyTrip / Goibibo · "}
                          <span className="cq-type cq-type--modification">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#pencil" />
                            </svg>
                            {"Modification"}
                          </span>
                        </p>
                      </div>
                      <span className="pill pill--tentative">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#clock" />
                        </svg>
                        {"Queued"}
                      </span>
                    </div>
                    <div className="cq-why cq-why--wait">
                      <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#clock" />
                      </svg>
                      <div>
                        <strong>{"Why it stopped"}</strong>
                        <p>{"Waiting in the queue to be processed."}</p>
                      </div>
                    </div>
                    <dl className="cq-facts">
                      <div>
                        <dt>{"Guest"}</dt>
                        <dd>{"Swathi Ranjan"}</dd>
                      </div>
                      <div>
                        <dt>{"Stay"}</dt>
                        <dd>{"28 – 30 Oct"}</dd>
                      </div>
                      <div>
                        <dt>{"Amount"}</dt>
                        <dd>{"–"}</dd>
                      </div>
                      <div>
                        <dt>{"Received"}</dt>
                        <dd>{"Today 09:40"}</dd>
                      </div>
                      <div>
                        <dt>{"Room code"}</dt>
                        <dd>
                          <code>{"MMT-DLX-GDN"}</code>
                        </dd>
                      </div>
                      <div>
                        <dt>{"Rate code"}</dt>
                        <dd>
                          <code>{"BAR-BF"}</code>
                        </dd>
                      </div>
                    </dl>
                    <div className="cq-map">
                      <p className="cq-map__k">{"Suggested mapping"}</p>
                      <div className="cq-map__row">
                        <div>
                          <small>{"Channel sends"}</small>
                          <strong>{"MMT-DLX-GDN"}</strong>
                          <span>{"BAR-BF"}</span>
                        </div>
                        <svg className="icon" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#arrow-right" />
                        </svg>
                        <div className="cq-map__to">
                          <small>{"Hotel books"}</small>
                          <strong>{"Garden Deluxe Room"}</strong>
                          <span>{"BAR-CP"}</span>
                        </div>
                      </div>
                    </div>
                    <ul className="cq-guar">
                      <li>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#check-circle" />
                        </svg>
                        <span>
                          <strong>{"Message version"}</strong>
                          {" v1 – newer versions are never overwritten by older ones"}
                        </span>
                      </li>
                      <li>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#check-circle" />
                        </svg>
                        <span>
                          <strong>{"Delivered"}</strong>
                          {" once. A repeat delivery returns the same booking"}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#RS-23c-CMSG-Q1" data-opens="RS-23c">{"Link to existing…"}</a>
                    <a className="btn" href="#RS-23b-CMSG-Q1" data-opens="RS-23b">{"Accept as overbooking…"}</a>
                    <a className="btn btn--primary" href="#RS-23a-CMSG-Q1" data-opens="RS-23a">{"Map and reprocess…"}</a>
                  </div>
                </div>
              </section>
              <div className="modal" id="RS-23a-CMSG-Q1" data-code="RS-23a" role="dialog" aria-modal="true" aria-labelledby="RS-23a-CMSG-Q1-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RS-23a-CMSG-Q1-t">{"Map room / rate and reprocess"}</h2>
                      <p className="modal__desc">{"MM-559103482"}</p>
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
                        <label className="field__label" htmlFor="f1879">{"Channel room code"}</label>
                        <input className="field__input" id="f1879" type="text" readOnly={true} defaultValue={"MMT-DLX-GDN"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f1880">{"Hotel room type"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f1880" defaultValue={"Garden Deluxe Room"}>
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
                      <div className="field">
                        <label className="field__label" htmlFor="f1881">{"Channel rate code"}</label>
                        <input className="field__input" id="f1881" type="text" readOnly={true} defaultValue={"BAR-BF"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f1882">{"Hotel rate plan"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f1882" defaultValue={"BAR-CP"}>
                            <option>{"BAR-CP"}</option>
                            <option>{"BAR-EP"}</option>
                            <option>{"BAR-MAP"}</option>
                            <option>{"BAR-AP"}</option>
                            <option>{"CLUB"}</option>
                            <option>{"ADV15"}</option>
                            <option>{"CORP"}</option>
                            <option>{"AGENT"}</option>
                            <option>{"GROUP"}</option>
                            <option>{"PKG-AYUR"}</option>
                            <option>{"COMP"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="s-note">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#info" />
                      </svg>
                      <span>{"Saved once, later bookings with these codes go through automatically."}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save mapping and retry"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RS-23b-CMSG-Q1" data-code="RS-23b" role="dialog" aria-modal="true" aria-labelledby="RS-23b-CMSG-Q1-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RS-23b-CMSG-Q1-t">{"Accept as overbooking"}</h2>
                      <p className="modal__desc">{"MM-559103482"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-note s-note--warn">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#alert" />
                      </svg>
                      <span>
                        {"This creates the booking even though no room is free. Needs approval from the Front Office Manager – track it in "}
                        <Link data-leads-to="RS-20" to={"/reservation/rs-20-approvals"}>{"Approvals"}</Link>
                        {"."}
                      </span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f1883">{"Reason"}</label>
                      <div className="field__wrap">
                        <select className="field__input field__input--select" id="f1883" defaultValue={"Re-accommodate guest"}>
                          <option>{"Re-accommodate guest"}</option>
                        </select>
                        <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Request approval"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RS-23c-CMSG-Q1" data-code="RS-23c" role="dialog" aria-modal="true" aria-labelledby="RS-23c-CMSG-Q1-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RS-23c-CMSG-Q1-t">{"Link to existing reservation"}</h2>
                      <p className="modal__desc">{"MM-559103482"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <label className="field__label" htmlFor="f1884">{"Booking"}</label>
                      <div className="field__wrap">
                        <select className="field__input field__input--select" id="f1884" defaultValue={"FK-10002 · Jyoti Jatin · 20 – 23 Oct"}>
                          <option>{"FK-10002 · Jyoti Jatin · 20 – 23 Oct"}</option>
                          <option>{"FK-10005 · Kavita Dhruv · 5 – 12 Nov"}</option>
                          <option>{"FK-10006 · Ravi Kabir · 22 – 26 Oct"}</option>
                        </select>
                        <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </div>
                    </div>
                    <div className="s-note">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#info" />
                      </svg>
                      <span>{"The channel reference is added to the booking; no new booking is created."}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Link"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="RS-23-cmrate" role="dialog" aria-modal="true" aria-labelledby="RS-23-cmrate-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RS-23-cmrate-t">{"Update the channel manager rate"}</h2>
                      <p className="modal__desc">{"Every channel with auto-update on gets its own rate from its rule and is updated at once."}</p>
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
                        <label className="field__label" htmlFor="RS-23-cmrate-rt">{"Room type"}</label>
                        <select className="field__input field__input--select" id="RS-23-cmrate-rt">
                          <option>{"GDLX · Garden Deluxe Room"}</option>
                          <option>{"PDLX · Pool Deluxe Room"}</option>
                          <option>{"DLXS · Deluxe Suite"}</option>
                          <option>{"PRMS · Premium Suite"}</option>
                        </select>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="RS-23-cmrate-rp">{"Rate plan"}</label>
                        <select className="field__input field__input--select" id="RS-23-cmrate-rp">
                          <option>{"BAR-CP – with breakfast"}</option>
                          <option>{"BAR-EP – room only"}</option>
                          <option>{"BAR-MAP"}</option>
                          <option>{"ADV15"}</option>
                          <option>{"BAR-AP"}</option>
                          <option>{"CLUB"}</option>
                          <option>{"CORP"}</option>
                          <option>{"AGENT"}</option>
                          <option>{"GROUP"}</option>
                          <option>{"PKG-AYUR"}</option>
                          <option>{"COMP"}</option>
                        </select>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="RS-23-cmrate-d">{"Dates"}</label>
                        <input className="field__input" id="RS-23-cmrate-d" type="text" defaultValue={"Thu 22 Oct – Sat 31 Oct 2026"} />
                        <span className="field__hint">{"Days of the week: all"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="RS-23-cmrate-r">{"New channel manager rate (double)"}</label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="RS-23-cmrate-r" inputMode="decimal" defaultValue={"8,499.00"} />
                        </div>
                        <span className="field__hint">{"Single = double − ₹600 (rate plan rule)"}</span>
                      </div>
                    </div>
                    <h3 className="s-card-title chr-prev">{"What each channel will get – GDLX"}</h3>
                    <div className="s-scroll">
                      <table className="dt__table dt--hug" data-nosort="" data-mc="">
                        <thead>
                          <tr>
                            <th scope="col">{"Channel"}</th>
                            <th scope="col">{"Rule"}</th>
                            <th scope="col" className="dt__th--right">{"Now"}</th>
                            <th scope="col" className="dt__th--right">{"After saving"}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="dt__td" data-label="Channel" data-w2="" data-t="">{"Aviv mobile app (CRS)"}</td>
                            <td className="dt__td" data-label="Rule">{"10 % below – app member price"}</td>
                            <td className="dt__td dt__td--right num" data-label="Now">{"₹7,199"}</td>
                            <td className="dt__td dt__td--right num" data-label="After saving" data-w2="">
                              <b>{"₹7,649"}</b>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Channel" data-w="" data-t="">{"Aviv website booking engine"}</td>
                            <td className="dt__td" data-label="Rule">{"5 % below – book-direct price"}</td>
                            <td className="dt__td dt__td--right num" data-label="Now">{"₹7,599"}</td>
                            <td className="dt__td dt__td--right num" data-label="After saving" data-w2="">
                              <b>{"₹8,074"}</b>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Channel" data-w2="" data-t="">{"Booking.com"}</td>
                            <td className="dt__td" data-label="Rule" data-w2="">{"Same as channel manager"}</td>
                            <td className="dt__td dt__td--right num" data-label="Now">{"₹7,999"}</td>
                            <td className="dt__td dt__td--right num" data-label="After saving" data-w2="">
                              <b>{"₹8,499"}</b>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Channel" data-w2="" data-t="">{"Agoda"}</td>
                            <td className="dt__td" data-label="Rule" data-w2="">{"Same as channel manager"}</td>
                            <td className="dt__td dt__td--right num" data-label="Now">{"₹7,999"}</td>
                            <td className="dt__td dt__td--right num" data-label="After saving" data-w2="">
                              <b>{"₹8,499"}</b>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Channel" data-w2="" data-t="">{"Expedia"}</td>
                            <td className="dt__td" data-label="Rule" data-w2="">{"2 % above"}</td>
                            <td className="dt__td dt__td--right num" data-label="Now">{"₹8,159"}</td>
                            <td className="dt__td dt__td--right num" data-label="After saving" data-w2="">
                              <b>{"₹8,669"}</b>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Channel" data-w2="" data-t="">{"MakeMyTrip / Goibibo"}</td>
                            <td className="dt__td" data-label="Rule" data-w2="">{"3 % below – MMT deal"}</td>
                            <td className="dt__td dt__td--right num" data-label="Now">{"₹7,759"}</td>
                            <td className="dt__td dt__td--right num" data-label="After saving" data-w2="">
                              <b>{"₹8,244"}</b>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Channel" data-w2="" data-t="">{"EaseMyTrip"}</td>
                            <td className="dt__td" data-label="Rule" data-w2="">{"Same as channel manager"}</td>
                            <td className="dt__td dt__td--right num" data-label="Now">{"₹7,999"}</td>
                            <td className="dt__td dt__td--right num" data-label="After saving" data-w2="">
                              <b>{"₹8,499"}</b>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Channel" data-w2="" data-t="">{"Trip.com"}</td>
                            <td className="dt__td" data-label="Rule" data-w2="">{"Same as channel manager"}</td>
                            <td className="dt__td dt__td--right num" data-label="Now">{"₹7,999"}</td>
                            <td className="dt__td dt__td--right num" data-label="After saving" data-w2="">
                              <b>{"₹8,499"}</b>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="field__hint">{"Rates below the rate plan's floor or above its ceiling are not sent and are listed in the sync log (RS-23). The change is written to the audit log."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">
                      <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#send" />
                      </svg>
                      {"Save and update all channels"}
                    </a>
                  </div>
                </form>
              </div>
              <details className="helpbox">
                <summary>
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#help" />
                  </svg>
                  {" Help for this screen "}
                  <span className="code-chip">{"RS-23"}</span>
                </summary>
                <dl className="helpbox__body">
                  <dt>{"What it is for"}</dt>
                  <dd>{"Aviv mobile app, Aviv website and OTA bookings needing attention; sync log; rate parity"}</dd>
                  <dt>{"Opened from"}</dt>
                  <dd>
                    <Link to={"/reservation/rs-01-reservation-dashboard"}>{"RS-01"}</Link>
                    {", alerts, menu"}
                  </dd>
                  <dt>{"Leads to"}</dt>
                  <dd>
                    <Link to={"/reservation/rs-07-reservation-details"}>{"RS-07"}</Link>
                    {", "}
                    <Link to={"/reservation/rs-20-approvals"}>{"RS-20"}</Link>
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
